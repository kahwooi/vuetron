/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.router = undefined;

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueResource = __webpack_require__(3);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	var _vueRouter = __webpack_require__(4);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _app = __webpack_require__(5);

	var _app2 = _interopRequireDefault(_app);

	var _home = __webpack_require__(7);

	var _home2 = _interopRequireDefault(_home);

	var _history = __webpack_require__(29);

	var _history2 = _interopRequireDefault(_history);

	var _signup = __webpack_require__(32);

	var _signup2 = _interopRequireDefault(_signup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueResource2.default);
	_vue2.default.use(_vueRouter2.default);

	var router = exports.router = new _vueRouter2.default();

	// Set up routing and match routes to components
	router.map({
	  '/home': {
	    component: _home2.default
	  },
	  '/history': {
	    component: _history2.default
	  },
	  '/signup': {
	    component: _signup2.default
	  }
	});

	// Redirect to the home route if any routes are unmatched
	router.redirect({
	  '*': '/home'
	});

	// Start the app on the #app div
	router.start(_app2.default, '#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.26
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([a-z\d])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
	var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

	// detecting iOS UIWebView by indexedDB
	var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;

	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};

	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIos: isIos,
		iosVersionMatch: iosVersionMatch,
		iosVersion: iosVersion,
		hasMutationObserverBug: hasMutationObserverBug,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

	function noop() {}

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);

	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var _this = this;

	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop$1() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.26';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*!
	 * vue-resource v1.0.1
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */

	'use strict';

	/**
	 * Promise adapter.
	 */

	var PromiseObj = window.Promise;

	function Promise$1(executor, context) {

	    if (executor instanceof PromiseObj) {
	        this.promise = executor;
	    } else {
	        this.promise = new PromiseObj(executor.bind(context));
	    }

	    this.context = context;
	}

	Promise$1.all = function (iterable, context) {
	    return new Promise$1(PromiseObj.all(iterable), context);
	};

	Promise$1.resolve = function (value, context) {
	    return new Promise$1(PromiseObj.resolve(value), context);
	};

	Promise$1.reject = function (reason, context) {
	    return new Promise$1(PromiseObj.reject(reason), context);
	};

	Promise$1.race = function (iterable, context) {
	    return new Promise$1(PromiseObj.race(iterable), context);
	};

	var p = Promise$1.prototype;

	p.bind = function (context) {
	    this.context = context;
	    return this;
	};

	p.then = function (fulfilled, rejected) {

	    if (fulfilled && fulfilled.bind && this.context) {
	        fulfilled = fulfilled.bind(this.context);
	    }

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    return new Promise$1(this.promise.then(fulfilled, rejected), this.context);
	};

	p.catch = function (rejected) {

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    return new Promise$1(this.promise.catch(rejected), this.context);
	};

	p.finally = function (callback) {

	    return this.then(function (value) {
	        callback.call(this);
	        return value;
	    }, function (reason) {
	        callback.call(this);
	        return PromiseObj.reject(reason);
	    });
	};

	/**
	 * Utility functions.
	 */

	var debug = false;var util = {};var slice = [].slice;


	function Util (Vue) {
	    util = Vue.util;
	    debug = Vue.config.debug || !Vue.config.silent;
	}

	function warn(msg) {
	    if (typeof console !== 'undefined' && debug) {
	        console.warn('[VueResource warn]: ' + msg);
	    }
	}

	function error(msg) {
	    if (typeof console !== 'undefined') {
	        console.error(msg);
	    }
	}

	function nextTick(cb, ctx) {
	    return util.nextTick(cb, ctx);
	}

	function trim(str) {
	    return str.replace(/^\s*|\s*$/g, '');
	}

	function toLower(str) {
	    return str ? str.toLowerCase() : '';
	}

	function toUpper(str) {
	    return str ? str.toUpperCase() : '';
	}

	var isArray = Array.isArray;

	function isString(val) {
	    return typeof val === 'string';
	}

	function isBoolean(val) {
	    return val === true || val === false;
	}

	function isFunction(val) {
	    return typeof val === 'function';
	}

	function isObject(obj) {
	    return obj !== null && typeof obj === 'object';
	}

	function isPlainObject(obj) {
	    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	}

	function isBlob(obj) {
	    return typeof Blob !== 'undefined' && obj instanceof Blob;
	}

	function isFormData(obj) {
	    return typeof FormData !== 'undefined' && obj instanceof FormData;
	}

	function when(value, fulfilled, rejected) {

	    var promise = Promise$1.resolve(value);

	    if (arguments.length < 2) {
	        return promise;
	    }

	    return promise.then(fulfilled, rejected);
	}

	function options(fn, obj, opts) {

	    opts = opts || {};

	    if (isFunction(opts)) {
	        opts = opts.call(obj);
	    }

	    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
	}

	function each(obj, iterator) {

	    var i, key;

	    if (obj && typeof obj.length == 'number') {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (isObject(obj)) {
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                iterator.call(obj[key], obj[key], key);
	            }
	        }
	    }

	    return obj;
	}

	var assign = Object.assign || _assign;

	function merge(target) {

	    var args = slice.call(arguments, 1);

	    args.forEach(function (source) {
	        _merge(target, source, true);
	    });

	    return target;
	}

	function defaults(target) {

	    var args = slice.call(arguments, 1);

	    args.forEach(function (source) {

	        for (var key in source) {
	            if (target[key] === undefined) {
	                target[key] = source[key];
	            }
	        }
	    });

	    return target;
	}

	function _assign(target) {

	    var args = slice.call(arguments, 1);

	    args.forEach(function (source) {
	        _merge(target, source);
	    });

	    return target;
	}

	function _merge(target, source, deep) {
	    for (var key in source) {
	        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	                target[key] = {};
	            }
	            if (isArray(source[key]) && !isArray(target[key])) {
	                target[key] = [];
	            }
	            _merge(target[key], source[key], deep);
	        } else if (source[key] !== undefined) {
	            target[key] = source[key];
	        }
	    }
	}

	/**
	 * Root Prefix Transform.
	 */

	function root (options, next) {

	    var url = next(options);

	    if (isString(options.root) && !url.match(/^(https?:)?\//)) {
	        url = options.root + '/' + url;
	    }

	    return url;
	}

	/**
	 * Query Parameter Transform.
	 */

	function query (options, next) {

	    var urlParams = Object.keys(Url.options.params),
	        query = {},
	        url = next(options);

	    each(options.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });

	    query = Url.params(query);

	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }

	    return url;
	}

	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */

	function expand(url, params, variables) {

	    var tmpl = parse(url),
	        expanded = tmpl.expand(params);

	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }

	    return expanded;
	}

	function parse(template) {

	    var operators = ['+', '#', '.', '/', ';', '?', '&'],
	        variables = [];

	    return {
	        vars: variables,
	        expand: function (context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {

	                    var operator = null,
	                        values = [];

	                    if (operators.indexOf(expression.charAt(0)) !== -1) {
	                        operator = expression.charAt(0);
	                        expression = expression.substr(1);
	                    }

	                    expression.split(/,/g).forEach(function (variable) {
	                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                        variables.push(tmp[1]);
	                    });

	                    if (operator && operator !== '+') {

	                        var separator = ',';

	                        if (operator === '?') {
	                            separator = '&';
	                        } else if (operator !== '#') {
	                            separator = operator;
	                        }

	                        return (values.length !== 0 ? operator : '') + values.join(separator);
	                    } else {
	                        return values.join(',');
	                    }
	                } else {
	                    return encodeReserved(literal);
	                }
	            });
	        }
	    };
	}

	function getValues(context, operator, key, modifier) {

	    var value = context[key],
	        result = [];

	    if (isDefined(value) && value !== '') {
	        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	            value = value.toString();

	            if (modifier && modifier !== '*') {
	                value = value.substring(0, parseInt(modifier, 10));
	            }

	            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	        } else {
	            if (modifier === '*') {
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            result.push(encodeValue(operator, value[k], k));
	                        }
	                    });
	                }
	            } else {
	                var tmp = [];

	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        tmp.push(encodeValue(operator, value));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            tmp.push(encodeURIComponent(k));
	                            tmp.push(encodeValue(operator, value[k].toString()));
	                        }
	                    });
	                }

	                if (isKeyOperator(operator)) {
	                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                } else if (tmp.length !== 0) {
	                    result.push(tmp.join(','));
	                }
	            }
	        }
	    } else {
	        if (operator === ';') {
	            result.push(encodeURIComponent(key));
	        } else if (value === '' && (operator === '&' || operator === '?')) {
	            result.push(encodeURIComponent(key) + '=');
	        } else if (value === '') {
	            result.push('');
	        }
	    }

	    return result;
	}

	function isDefined(value) {
	    return value !== undefined && value !== null;
	}

	function isKeyOperator(operator) {
	    return operator === ';' || operator === '&' || operator === '?';
	}

	function encodeValue(operator, value, key) {

	    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);

	    if (key) {
	        return encodeURIComponent(key) + '=' + value;
	    } else {
	        return value;
	    }
	}

	function encodeReserved(str) {
	    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	        if (!/%[0-9A-Fa-f]/.test(part)) {
	            part = encodeURI(part);
	        }
	        return part;
	    }).join('');
	}

	/**
	 * URL Template (RFC 6570) Transform.
	 */

	function template (options) {

	    var variables = [],
	        url = expand(options.url, options.params, variables);

	    variables.forEach(function (key) {
	        delete options.params[key];
	    });

	    return url;
	}

	/**
	 * Service for URL templating.
	 */

	var ie = document.documentMode;
	var el = document.createElement('a');

	function Url(url, params) {

	    var self = this || {},
	        options = url,
	        transform;

	    if (isString(url)) {
	        options = { url: url, params: params };
	    }

	    options = merge({}, Url.options, self.$options, options);

	    Url.transforms.forEach(function (handler) {
	        transform = factory(handler, transform, self.$vm);
	    });

	    return transform(options);
	}

	/**
	 * Url options.
	 */

	Url.options = {
	    url: '',
	    root: null,
	    params: {}
	};

	/**
	 * Url transforms.
	 */

	Url.transforms = [template, query, root];

	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */

	Url.params = function (obj) {

	    var params = [],
	        escape = encodeURIComponent;

	    params.add = function (key, value) {

	        if (isFunction(value)) {
	            value = value();
	        }

	        if (value === null) {
	            value = '';
	        }

	        this.push(escape(key) + '=' + escape(value));
	    };

	    serialize(params, obj);

	    return params.join('&').replace(/%20/g, '+');
	};

	/**
	 * Parse a URL and return its components.
	 *
	 * @param {String} url
	 */

	Url.parse = function (url) {

	    if (ie) {
	        el.href = url;
	        url = el.href;
	    }

	    el.href = url;

	    return {
	        href: el.href,
	        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	        port: el.port,
	        host: el.host,
	        hostname: el.hostname,
	        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	        search: el.search ? el.search.replace(/^\?/, '') : '',
	        hash: el.hash ? el.hash.replace(/^#/, '') : ''
	    };
	};

	function factory(handler, next, vm) {
	    return function (options) {
	        return handler.call(vm, options, next);
	    };
	}

	function serialize(params, obj, scope) {

	    var array = isArray(obj),
	        plain = isPlainObject(obj),
	        hash;

	    each(obj, function (value, key) {

	        hash = isObject(value) || isArray(value);

	        if (scope) {
	            key = scope + '[' + (plain || hash ? key : '') + ']';
	        }

	        if (!scope && array) {
	            params.add(value.name, value.value);
	        } else if (hash) {
	            serialize(params, value, key);
	        } else {
	            params.add(key, value);
	        }
	    });
	}

	/**
	 * XDomain client (Internet Explorer).
	 */

	function xdrClient (request) {
	    return new Promise$1(function (resolve) {

	        var xdr = new XDomainRequest(),
	            handler = function (event) {

	            var response = request.respondWith(xdr.responseText, {
	                status: xdr.status,
	                statusText: xdr.statusText
	            });

	            resolve(response);
	        };

	        request.abort = function () {
	            return xdr.abort();
	        };

	        xdr.open(request.method, request.getUrl(), true);
	        xdr.timeout = 0;
	        xdr.onload = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = function () {};
	        xdr.onprogress = function () {};
	        xdr.send(request.getBody());
	    });
	}

	/**
	 * CORS Interceptor.
	 */

	var ORIGIN_URL = Url.parse(location.href);
	var SUPPORTS_CORS = 'withCredentials' in new XMLHttpRequest();

	function cors (request, next) {

	    if (!isBoolean(request.crossOrigin) && crossOrigin(request)) {
	        request.crossOrigin = true;
	    }

	    if (request.crossOrigin) {

	        if (!SUPPORTS_CORS) {
	            request.client = xdrClient;
	        }

	        delete request.emulateHTTP;
	    }

	    next();
	}

	function crossOrigin(request) {

	    var requestUrl = Url.parse(Url(request));

	    return requestUrl.protocol !== ORIGIN_URL.protocol || requestUrl.host !== ORIGIN_URL.host;
	}

	/**
	 * Body Interceptor.
	 */

	function body (request, next) {

	    if (isFormData(request.body)) {

	        request.headers.delete('Content-Type');
	    } else if (isObject(request.body) || isArray(request.body)) {

	        if (request.emulateJSON) {
	            request.body = Url.params(request.body);
	            request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
	        } else {
	            request.body = JSON.stringify(request.body);
	        }
	    }

	    next(function (response) {

	        Object.defineProperty(response, 'data', {
	            get: function () {
	                return this.body;
	            },
	            set: function (body) {
	                this.body = body;
	            }
	        });

	        return response.bodyText ? when(response.text(), function (text) {

	            var type = response.headers.get('Content-Type');

	            if (isString(type) && type.indexOf('application/json') === 0) {

	                try {
	                    response.body = JSON.parse(text);
	                } catch (e) {
	                    response.body = null;
	                }
	            } else {
	                response.body = text;
	            }

	            return response;
	        }) : response;
	    });
	}

	/**
	 * JSONP client.
	 */

	function jsonpClient (request) {
	    return new Promise$1(function (resolve) {

	        var name = request.jsonp || 'callback',
	            callback = '_jsonp' + Math.random().toString(36).substr(2),
	            body = null,
	            handler,
	            script;

	        handler = function (event) {

	            var status = 0;

	            if (event.type === 'load' && body !== null) {
	                status = 200;
	            } else if (event.type === 'error') {
	                status = 404;
	            }

	            resolve(request.respondWith(body, { status: status }));

	            delete window[callback];
	            document.body.removeChild(script);
	        };

	        request.params[name] = callback;

	        window[callback] = function (result) {
	            body = JSON.stringify(result);
	        };

	        script = document.createElement('script');
	        script.src = request.getUrl();
	        script.type = 'text/javascript';
	        script.async = true;
	        script.onload = handler;
	        script.onerror = handler;

	        document.body.appendChild(script);
	    });
	}

	/**
	 * JSONP Interceptor.
	 */

	function jsonp (request, next) {

	    if (request.method == 'JSONP') {
	        request.client = jsonpClient;
	    }

	    next(function (response) {

	        if (request.method == 'JSONP') {

	            return when(response.json(), function (json) {

	                response.body = json;

	                return response;
	            });
	        }
	    });
	}

	/**
	 * Before Interceptor.
	 */

	function before (request, next) {

	    if (isFunction(request.before)) {
	        request.before.call(this, request);
	    }

	    next();
	}

	/**
	 * HTTP method override Interceptor.
	 */

	function method (request, next) {

	    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	        request.headers.set('X-HTTP-Method-Override', request.method);
	        request.method = 'POST';
	    }

	    next();
	}

	/**
	 * Header Interceptor.
	 */

	function header (request, next) {

	    var headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[toLower(request.method)]);

	    each(headers, function (value, name) {
	        if (!request.headers.has(name)) {
	            request.headers.set(name, value);
	        }
	    });

	    next();
	}

	/**
	 * Timeout Interceptor.
	 */

	function timeout (request, next) {

	    var timeout;

	    if (request.timeout) {
	        timeout = setTimeout(function () {
	            request.abort();
	        }, request.timeout);
	    }

	    next(function (response) {

	        clearTimeout(timeout);
	    });
	}

	/**
	 * XMLHttp client.
	 */

	function xhrClient (request) {
	    return new Promise$1(function (resolve) {

	        var xhr = new XMLHttpRequest(),
	            handler = function (event) {

	            var response = request.respondWith('response' in xhr ? xhr.response : xhr.responseText, {
	                status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
	                statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
	            });

	            each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
	                response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
	            });

	            resolve(response);
	        };

	        request.abort = function () {
	            return xhr.abort();
	        };

	        if (request.progress) {
	            if (request.method === 'GET') {
	                xhr.addEventListener('progress', request.progress);
	            } else if (/^(POST|PUT)$/i.test(request.method)) {
	                xhr.upload.addEventListener('progress', request.progress);
	            }
	        }

	        xhr.open(request.method, request.getUrl(), true);

	        if ('responseType' in xhr) {
	            xhr.responseType = 'blob';
	        }

	        if (request.credentials === true) {
	            xhr.withCredentials = true;
	        }

	        request.headers.forEach(function (value, name) {
	            xhr.setRequestHeader(name, value);
	        });

	        xhr.timeout = 0;
	        xhr.onload = handler;
	        xhr.onerror = handler;
	        xhr.send(request.getBody());
	    });
	}

	/**
	 * Base client.
	 */

	function Client (context) {

	    var reqHandlers = [sendRequest],
	        resHandlers = [],
	        handler;

	    if (!isObject(context)) {
	        context = null;
	    }

	    function Client(request) {
	        return new Promise$1(function (resolve) {

	            function exec() {

	                handler = reqHandlers.pop();

	                if (isFunction(handler)) {
	                    handler.call(context, request, next);
	                } else {
	                    warn('Invalid interceptor of type ' + typeof handler + ', must be a function');
	                    next();
	                }
	            }

	            function next(response) {

	                if (isFunction(response)) {

	                    resHandlers.unshift(response);
	                } else if (isObject(response)) {

	                    resHandlers.forEach(function (handler) {
	                        response = when(response, function (response) {
	                            return handler.call(context, response) || response;
	                        });
	                    });

	                    when(response, resolve);

	                    return;
	                }

	                exec();
	            }

	            exec();
	        }, context);
	    }

	    Client.use = function (handler) {
	        reqHandlers.push(handler);
	    };

	    return Client;
	}

	function sendRequest(request, resolve) {

	    var client = request.client || xhrClient;

	    resolve(client(request));
	}

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	/**
	 * HTTP Headers.
	 */

	var Headers = function () {
	    function Headers(headers) {
	        var _this = this;

	        classCallCheck(this, Headers);


	        this.map = {};

	        each(headers, function (value, name) {
	            return _this.append(name, value);
	        });
	    }

	    Headers.prototype.has = function has(name) {
	        return getName(this.map, name) !== null;
	    };

	    Headers.prototype.get = function get(name) {

	        var list = this.map[getName(this.map, name)];

	        return list ? list[0] : null;
	    };

	    Headers.prototype.getAll = function getAll(name) {
	        return this.map[getName(this.map, name)] || [];
	    };

	    Headers.prototype.set = function set(name, value) {
	        this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
	    };

	    Headers.prototype.append = function append(name, value) {

	        var list = this.getAll(name);

	        if (list.length) {
	            list.push(trim(value));
	        } else {
	            this.set(name, value);
	        }
	    };

	    Headers.prototype.delete = function _delete(name) {
	        delete this.map[getName(name)];
	    };

	    Headers.prototype.forEach = function forEach(callback, thisArg) {
	        var _this2 = this;

	        each(this.map, function (list, name) {
	            each(list, function (value) {
	                return callback.call(thisArg, value, name, _this2);
	            });
	        });
	    };

	    return Headers;
	}();

	function getName(map, name) {
	    return Object.keys(map).reduce(function (prev, curr) {
	        return toLower(name) === toLower(curr) ? curr : prev;
	    }, null);
	}

	function normalizeName(name) {

	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	        throw new TypeError('Invalid character in header field name');
	    }

	    return trim(name);
	}

	/**
	 * HTTP Response.
	 */

	var Response = function () {
	    function Response(body, _ref) {
	        var url = _ref.url;
	        var headers = _ref.headers;
	        var status = _ref.status;
	        var statusText = _ref.statusText;
	        classCallCheck(this, Response);


	        this.url = url;
	        this.ok = status >= 200 && status < 300;
	        this.status = status || 0;
	        this.statusText = statusText || '';
	        this.headers = new Headers(headers);
	        this.body = body;

	        if (isString(body)) {

	            this.bodyText = body;
	        } else if (isBlob(body)) {

	            this.bodyBlob = body;

	            if (isBlobText(body)) {
	                this.bodyText = blobText(body);
	            }
	        }
	    }

	    Response.prototype.blob = function blob() {
	        return when(this.bodyBlob);
	    };

	    Response.prototype.text = function text() {
	        return when(this.bodyText);
	    };

	    Response.prototype.json = function json() {
	        return when(this.text(), function (text) {
	            return JSON.parse(text);
	        });
	    };

	    return Response;
	}();

	function blobText(body) {
	    return new Promise$1(function (resolve) {

	        var reader = new FileReader();

	        reader.readAsText(body);
	        reader.onload = function () {
	            resolve(reader.result);
	        };
	    });
	}

	function isBlobText(body) {
	    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
	}

	/**
	 * HTTP Request.
	 */

	var Request = function () {
	    function Request(options) {
	        classCallCheck(this, Request);


	        this.body = null;
	        this.params = {};

	        assign(this, options, {
	            method: toUpper(options.method || 'GET'),
	            headers: new Headers(options.headers)
	        });
	    }

	    Request.prototype.getUrl = function getUrl() {
	        return Url(this);
	    };

	    Request.prototype.getBody = function getBody() {
	        return this.body;
	    };

	    Request.prototype.respondWith = function respondWith(body, options) {
	        return new Response(body, assign(options || {}, { url: this.getUrl() }));
	    };

	    return Request;
	}();

	/**
	 * Service for sending network requests.
	 */

	var CUSTOM_HEADERS = { 'X-Requested-With': 'XMLHttpRequest' };
	var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
	var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };

	function Http(options) {

	    var self = this || {},
	        client = Client(self.$vm);

	    defaults(options || {}, self.$options, Http.options);

	    Http.interceptors.forEach(function (handler) {
	        client.use(handler);
	    });

	    return client(new Request(options)).then(function (response) {

	        return response.ok ? response : Promise$1.reject(response);
	    }, function (response) {

	        if (response instanceof Error) {
	            error(response);
	        }

	        return Promise$1.reject(response);
	    });
	}

	Http.options = {};

	Http.headers = {
	    put: JSON_CONTENT_TYPE,
	    post: JSON_CONTENT_TYPE,
	    patch: JSON_CONTENT_TYPE,
	    delete: JSON_CONTENT_TYPE,
	    custom: CUSTOM_HEADERS,
	    common: COMMON_HEADERS
	};

	Http.interceptors = [before, timeout, method, body, jsonp, header, cors];

	['get', 'delete', 'head', 'jsonp'].forEach(function (method) {

	    Http[method] = function (url, options) {
	        return this(assign(options || {}, { url: url, method: method }));
	    };
	});

	['post', 'put', 'patch'].forEach(function (method) {

	    Http[method] = function (url, body, options) {
	        return this(assign(options || {}, { url: url, method: method, body: body }));
	    };
	});

	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */

	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING = 2;

	function Promise$2(executor) {

	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];

	    var promise = this;

	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}

	Promise$2.reject = function (r) {
	    return new Promise$2(function (resolve, reject) {
	        reject(r);
	    });
	};

	Promise$2.resolve = function (x) {
	    return new Promise$2(function (resolve, reject) {
	        resolve(x);
	    });
	};

	Promise$2.all = function all(iterable) {
	    return new Promise$2(function (resolve, reject) {
	        var count = 0,
	            result = [];

	        if (iterable.length === 0) {
	            resolve(result);
	        }

	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;

	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }

	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$2.resolve(iterable[i]).then(resolver(i), reject);
	        }
	    });
	};

	Promise$2.race = function race(iterable) {
	    return new Promise$2(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$2.resolve(iterable[i]).then(resolve, reject);
	        }
	    });
	};

	var p$1 = Promise$2.prototype;

	p$1.resolve = function resolve(x) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        var called = false;

	        try {
	            var then = x && x['then'];

	            if (x !== null && typeof x === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }

	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};

	p$1.reject = function reject(reason) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};

	p$1.notify = function notify() {
	    var promise = this;

	    nextTick(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];

	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};

	p$1.then = function then(onResolved, onRejected) {
	    var promise = this;

	    return new Promise$2(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};

	p$1.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};

	/**
	 * Service for interacting with RESTful services.
	 */

	function Resource(url, params, actions, options) {

	    var self = this || {},
	        resource = {};

	    actions = assign({}, Resource.actions, actions);

	    each(actions, function (action, name) {

	        action = merge({ url: url, params: assign({}, params) }, options, action);

	        resource[name] = function () {
	            return (self.$http || Http)(opts(action, arguments));
	        };
	    });

	    return resource;
	}

	function opts(action, args) {

	    var options = assign({}, action),
	        params = {},
	        body;

	    switch (args.length) {

	        case 2:

	            params = args[0];
	            body = args[1];

	            break;

	        case 1:

	            if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                body = args[0];
	            } else {
	                params = args[0];
	            }

	            break;

	        case 0:

	            break;

	        default:

	            throw 'Expected up to 4 arguments [params, body], got ' + args.length + ' arguments';
	    }

	    options.body = body;
	    options.params = assign({}, options.params, params);

	    return options;
	}

	Resource.actions = {

	    get: { method: 'GET' },
	    save: { method: 'POST' },
	    query: { method: 'GET' },
	    update: { method: 'PUT' },
	    remove: { method: 'DELETE' },
	    delete: { method: 'DELETE' }

	};

	/**
	 * Install plugin.
	 */

	function plugin(Vue) {

	    if (plugin.installed) {
	        return;
	    }

	    Util(Vue);

	    Vue.url = Url;
	    Vue.http = Http;
	    Vue.resource = Resource;
	    Vue.Promise = Promise$1;

	    Object.defineProperties(Vue.prototype, {

	        $url: {
	            get: function () {
	                return options(Vue.url, this, this.$options.url);
	            }
	        },

	        $http: {
	            get: function () {
	                return options(Vue.http, this, this.$options.http);
	            }
	        },

	        $resource: {
	            get: function () {
	                return Vue.resource.bind(this);
	            }
	        },

	        $promise: {
	            get: function () {
	                var _this = this;

	                return function (executor) {
	                    return new Vue.Promise(executor, _this);
	                };
	            }
	        }

	    });
	}

	if (typeof window !== 'undefined') {

	    if (!window.Promise) {
	        window.Promise = Promise$2;
	    }

	    if (window.Vue) {
	        window.Vue.use(plugin);
	    }
	}

	module.exports = plugin;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }

	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  })();

	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  })();

	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  })();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  })();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View (Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = (function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  })();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;

	}));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <ul class=\"nav navbar-nav\">\n      <li><a v-link=\"'home'\">Home</a></li>\n      <li><a v-link=\"'history'\">History</a></li>\n      <li><a v-link=\"'signup'\">Sign Up</a></li>\n    </ul>\n  </div>    \n</nav>\n<div class=\"container\">\n  <router-view></router-view>\n</div>\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(8)
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.message {\r\n  color: blue;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _store = __webpack_require__(13);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            quote: '',
	            author: '',
	            title: ''
	        };
	    },

	    methods: {
	        getQuote: function getQuote() {
	            var _this = this;

	            this.$http.get('http://quotes.rest/qod.json').then(function (res) {
	                _this.quote = res.body.contents.quotes[0].quote;
	                _this.author = res.body.contents.quotes[0].author;
	                _this.title = res.body.contents.quotes[0].title;

	                // save into db
	                var data = {
	                    quote: res.body.contents.quotes[0].quote,
	                    author: res.body.contents.quotes[0].author,
	                    title: res.body.contents.quotes[0].title
	                };
	                _store2.default.addQoute(data);
	            }, function (err) {
	                // error callback
	                console.log(err);
	            });
	        }
	    }
	};
	// </script>
	//
	// <style>
	// .message {
	//   color: blue;
	// }
	// </style>
	// <template>
	// <div class="col-sm-6 col-sm-offset-3">
	//       <h1>Quote of the day</h1>
	//       <button class="ui dark button" @click="getQuote()">Get a Quote</button>
	//       <div class="quote-area" v-if="quote">
	//         <h2>
	//             <blockquote>{{ quote }}
	//                 <footer>{{ author }} in <cite title="Source Title">{{ title }}</cite></footer>   
	//             </blockquote>
	//         </h2>   
	//       </div>
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _pouchdb = __webpack_require__(14);

	var _pouchdb2 = _interopRequireDefault(_pouchdb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var db = new _pouchdb2.default('qoutes');
	var store = {};

	store.addQoute = function (data) {
	    var qoute = {
	        _id: new Date().toISOString(),
	        quote: data.quote,
	        author: data.author,
	        title: data.title
	    };
	    db.put(qoute, function callback(err, result) {
	        if (!err) {
	            console.log('Successfully posted a qoute!');
	        }

	        return result;
	    });
	};

	store.getHistories = function () {
	    db.allDocs({
	        include_docs: true,
	        attachments: true
	    }).then(function (result) {
	        return result.rows;
	    }).catch(function (err) {
	        console.log(err);
	    });
	};

	exports.default = store;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	var jsExtend = __webpack_require__(15);
	var debug = _interopDefault(__webpack_require__(16));
	var inherits = _interopDefault(__webpack_require__(19));
	var lie = _interopDefault(__webpack_require__(20));
	var events = __webpack_require__(22);
	var getArguments = _interopDefault(__webpack_require__(23));
	var scopedEval = _interopDefault(__webpack_require__(24));
	var Md5 = _interopDefault(__webpack_require__(25));
	var vuvuzela = _interopDefault(__webpack_require__(26));
	var PromisePool = _interopDefault(__webpack_require__(27));

	/* istanbul ignore next */
	var PouchPromise = typeof Promise === 'function' ? Promise : lie;

	// based on https://github.com/montagejs/collections
	function mangle(key) {
	  return '$' + key;
	}
	function unmangle(key) {
	  return key.substring(1);
	}
	function _Map() {
	  this.store = {};
	}
	_Map.prototype.get = function (key) {
	  var mangled = mangle(key);
	  return this.store[mangled];
	};
	_Map.prototype.set = function (key, value) {
	  var mangled = mangle(key);
	  this.store[mangled] = value;
	  return true;
	};
	_Map.prototype.has = function (key) {
	  var mangled = mangle(key);
	  return mangled in this.store;
	};
	_Map.prototype.delete = function (key) {
	  var mangled = mangle(key);
	  var res = mangled in this.store;
	  delete this.store[mangled];
	  return res;
	};
	_Map.prototype.forEach = function (cb) {
	  var keys = Object.keys(this.store);
	  for (var i = 0, len = keys.length; i < len; i++) {
	    var key = keys[i];
	    var value = this.store[key];
	    key = unmangle(key);
	    cb(value, key);
	  }
	};

	function _Set(array) {
	  this.store = new _Map();

	  // init with an array
	  if (array && Array.isArray(array)) {
	    for (var i = 0, len = array.length; i < len; i++) {
	      this.add(array[i]);
	    }
	  }
	}
	_Set.prototype.add = function (key) {
	  return this.store.set(key, true);
	};
	_Set.prototype.has = function (key) {
	  return this.store.has(key);
	};

	function isBinaryObject(object) {
	  return (typeof ArrayBuffer !== 'undefined' && object instanceof ArrayBuffer) ||
	    (typeof Blob !== 'undefined' && object instanceof Blob);
	}

	function cloneArrayBuffer(buff) {
	  if (typeof buff.slice === 'function') {
	    return buff.slice(0);
	  }
	  // IE10-11 slice() polyfill
	  var target = new ArrayBuffer(buff.byteLength);
	  var targetArray = new Uint8Array(target);
	  var sourceArray = new Uint8Array(buff);
	  targetArray.set(sourceArray);
	  return target;
	}

	function cloneBinaryObject(object) {
	  if (object instanceof ArrayBuffer) {
	    return cloneArrayBuffer(object);
	  }
	  var size = object.size;
	  var type = object.type;
	  // Blob
	  if (typeof object.slice === 'function') {
	    return object.slice(0, size, type);
	  }
	  // PhantomJS slice() replacement
	  return object.webkitSlice(0, size, type);
	}

	// most of this is borrowed from lodash.isPlainObject:
	// https://github.com/fis-components/lodash.isplainobject/
	// blob/29c358140a74f252aeb08c9eb28bef86f2217d4a/index.js

	var funcToString = Function.prototype.toString;
	var objectCtorString = funcToString.call(Object);

	function isPlainObject(value) {
	  var proto = Object.getPrototypeOf(value);
	  /* istanbul ignore if */
	  if (proto === null) { // not sure when this happens, but I guess it can
	    return true;
	  }
	  var Ctor = proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	function clone(object) {
	  var newObject;
	  var i;
	  var len;

	  if (!object || typeof object !== 'object') {
	    return object;
	  }

	  if (Array.isArray(object)) {
	    newObject = [];
	    for (i = 0, len = object.length; i < len; i++) {
	      newObject[i] = clone(object[i]);
	    }
	    return newObject;
	  }

	  // special case: to avoid inconsistencies between IndexedDB
	  // and other backends, we automatically stringify Dates
	  if (object instanceof Date) {
	    return object.toISOString();
	  }

	  if (isBinaryObject(object)) {
	    return cloneBinaryObject(object);
	  }

	  if (!isPlainObject(object)) {
	    return object; // don't clone objects like Workers
	  }

	  newObject = {};
	  for (i in object) {
	    /* istanbul ignore else */
	    if (Object.prototype.hasOwnProperty.call(object, i)) {
	      var value = clone(object[i]);
	      if (typeof value !== 'undefined') {
	        newObject[i] = value;
	      }
	    }
	  }
	  return newObject;
	}

	function once(fun) {
	  var called = false;
	  return getArguments(function (args) {
	    /* istanbul ignore if */
	    if (called) {
	      // this is a smoke test and should never actually happen
	      throw new Error('once called more than once');
	    } else {
	      called = true;
	      fun.apply(this, args);
	    }
	  });
	}

	function toPromise(func) {
	  //create the function we will be returning
	  return getArguments(function (args) {
	    // Clone arguments
	    args = clone(args);
	    var self = this;
	    var tempCB =
	      (typeof args[args.length - 1] === 'function') ? args.pop() : false;
	    // if the last argument is a function, assume its a callback
	    var usedCB;
	    if (tempCB) {
	      // if it was a callback, create a new callback which calls it,
	      // but do so async so we don't trap any errors
	      usedCB = function (err, resp) {
	        process.nextTick(function () {
	          tempCB(err, resp);
	        });
	      };
	    }
	    var promise = new PouchPromise(function (fulfill, reject) {
	      var resp;
	      try {
	        var callback = once(function (err, mesg) {
	          if (err) {
	            reject(err);
	          } else {
	            fulfill(mesg);
	          }
	        });
	        // create a callback for this invocation
	        // apply the function in the orig context
	        args.push(callback);
	        resp = func.apply(self, args);
	        if (resp && typeof resp.then === 'function') {
	          fulfill(resp);
	        }
	      } catch (e) {
	        reject(e);
	      }
	    });
	    // if there is a callback, call it back
	    if (usedCB) {
	      promise.then(function (result) {
	        usedCB(null, result);
	      }, usedCB);
	    }
	    return promise;
	  });
	}

	var log = debug('pouchdb:api');

	function adapterFun(name, callback) {
	  function logApiCall(self, name, args) {
	    /* istanbul ignore if */
	    if (log.enabled) {
	      var logArgs = [self.name, name];
	      for (var i = 0; i < args.length - 1; i++) {
	        logArgs.push(args[i]);
	      }
	      log.apply(null, logArgs);

	      // override the callback itself to log the response
	      var origCallback = args[args.length - 1];
	      args[args.length - 1] = function (err, res) {
	        var responseArgs = [self.name, name];
	        responseArgs = responseArgs.concat(
	          err ? ['error', err] : ['success', res]
	        );
	        log.apply(null, responseArgs);
	        origCallback(err, res);
	      };
	    }
	  }

	  return toPromise(getArguments(function (args) {
	    if (this._closed) {
	      return PouchPromise.reject(new Error('database is closed'));
	    }
	    if (this._destroyed) {
	      return PouchPromise.reject(new Error('database is destroyed'));
	    }
	    var self = this;
	    logApiCall(self, name, args);
	    if (!this.taskqueue.isReady) {
	      return new PouchPromise(function (fulfill, reject) {
	        self.taskqueue.addTask(function (failed) {
	          if (failed) {
	            reject(failed);
	          } else {
	            fulfill(self[name].apply(self, args));
	          }
	        });
	      });
	    }
	    return callback.apply(this, args);
	  }));
	}

	// like underscore/lodash _.pick()
	function pick(obj, arr) {
	  var res = {};
	  for (var i = 0, len = arr.length; i < len; i++) {
	    var prop = arr[i];
	    if (prop in obj) {
	      res[prop] = obj[prop];
	    }
	  }
	  return res;
	}

	// Most browsers throttle concurrent requests at 6, so it's silly
	// to shim _bulk_get by trying to launch potentially hundreds of requests
	// and then letting the majority time out. We can handle this ourselves.
	var MAX_NUM_CONCURRENT_REQUESTS = 6;

	function identityFunction(x) {
	  return x;
	}

	function formatResultForOpenRevsGet(result) {
	  return [{
	    ok: result
	  }];
	}

	// shim for P/CouchDB adapters that don't directly implement _bulk_get
	function bulkGet(db, opts, callback) {
	  var requests = opts.docs;

	  // consolidate into one request per doc if possible
	  var requestsById = {};
	  requests.forEach(function (request) {
	    if (request.id in requestsById) {
	      requestsById[request.id].push(request);
	    } else {
	      requestsById[request.id] = [request];
	    }
	  });

	  var numDocs = Object.keys(requestsById).length;
	  var numDone = 0;
	  var perDocResults = new Array(numDocs);

	  function collapseResultsAndFinish() {
	    var results = [];
	    perDocResults.forEach(function (res) {
	      res.docs.forEach(function (info) {
	        results.push({
	          id: res.id,
	          docs: [info]
	        });
	      });
	    });
	    callback(null, {results: results});
	  }

	  function checkDone() {
	    if (++numDone === numDocs) {
	      collapseResultsAndFinish();
	    }
	  }

	  function gotResult(docIndex, id, docs) {
	    perDocResults[docIndex] = {id: id, docs: docs};
	    checkDone();
	  }

	  var allRequests = Object.keys(requestsById);

	  var i = 0;

	  function nextBatch() {

	    if (i >= allRequests.length) {
	      return;
	    }

	    var upTo = Math.min(i + MAX_NUM_CONCURRENT_REQUESTS, allRequests.length);
	    var batch = allRequests.slice(i, upTo);
	    processBatch(batch, i);
	    i += batch.length;
	  }

	  function processBatch(batch, offset) {
	    batch.forEach(function (docId, j) {
	      var docIdx = offset + j;
	      var docRequests = requestsById[docId];

	      // just use the first request as the "template"
	      // TODO: The _bulk_get API allows for more subtle use cases than this,
	      // but for now it is unlikely that there will be a mix of different
	      // "atts_since" or "attachments" in the same request, since it's just
	      // replicate.js that is using this for the moment.
	      // Also, atts_since is aspirational, since we don't support it yet.
	      var docOpts = pick(docRequests[0], ['atts_since', 'attachments']);
	      docOpts.open_revs = docRequests.map(function (request) {
	        // rev is optional, open_revs disallowed
	        return request.rev;
	      });

	      // remove falsey / undefined revisions
	      docOpts.open_revs = docOpts.open_revs.filter(identityFunction);

	      var formatResult = identityFunction;

	      if (docOpts.open_revs.length === 0) {
	        delete docOpts.open_revs;

	        // when fetching only the "winning" leaf,
	        // transform the result so it looks like an open_revs
	        // request
	        formatResult = formatResultForOpenRevsGet;
	      }

	      // globally-supplied options
	      ['revs', 'attachments', 'binary', 'ajax'].forEach(function (param) {
	        if (param in opts) {
	          docOpts[param] = opts[param];
	        }
	      });
	      db.get(docId, docOpts, function (err, res) {
	        var result;
	        /* istanbul ignore if */
	        if (err) {
	          result = [{error: err}];
	        } else {
	          result = formatResult(res);
	        }
	        gotResult(docIdx, docId, result);
	        nextBatch();
	      });
	    });
	  }

	  nextBatch();

	}

	function isChromeApp() {
	  return (typeof chrome !== "undefined" &&
	    typeof chrome.storage !== "undefined" &&
	    typeof chrome.storage.local !== "undefined");
	}

	var hasLocal;

	if (isChromeApp()) {
	  hasLocal = false;
	} else {
	  try {
	    localStorage.setItem('_pouch_check_localstorage', 1);
	    hasLocal = !!localStorage.getItem('_pouch_check_localstorage');
	  } catch (e) {
	    hasLocal = false;
	  }
	}

	function hasLocalStorage() {
	  return hasLocal;
	}

	inherits(Changes$1, events.EventEmitter);

	/* istanbul ignore next */
	function attachBrowserEvents(self) {
	  if (isChromeApp()) {
	    chrome.storage.onChanged.addListener(function (e) {
	      // make sure it's event addressed to us
	      if (e.db_name != null) {
	        //object only has oldValue, newValue members
	        self.emit(e.dbName.newValue);
	      }
	    });
	  } else if (hasLocalStorage()) {
	    if (typeof addEventListener !== 'undefined') {
	      addEventListener("storage", function (e) {
	        self.emit(e.key);
	      });
	    } else { // old IE
	      window.attachEvent("storage", function (e) {
	        self.emit(e.key);
	      });
	    }
	  }
	}

	function Changes$1() {
	  events.EventEmitter.call(this);
	  this._listeners = {};

	  attachBrowserEvents(this);
	}
	Changes$1.prototype.addListener = function (dbName, id, db, opts) {
	  /* istanbul ignore if */
	  if (this._listeners[id]) {
	    return;
	  }
	  var self = this;
	  var inprogress = false;
	  function eventFunction() {
	    /* istanbul ignore if */
	    if (!self._listeners[id]) {
	      return;
	    }
	    if (inprogress) {
	      inprogress = 'waiting';
	      return;
	    }
	    inprogress = true;
	    var changesOpts = pick(opts, [
	      'style', 'include_docs', 'attachments', 'conflicts', 'filter',
	      'doc_ids', 'view', 'since', 'query_params', 'binary'
	    ]);

	    /* istanbul ignore next */
	    function onError() {
	      inprogress = false;
	    }

	    db.changes(changesOpts).on('change', function (c) {
	      if (c.seq > opts.since && !opts.cancelled) {
	        opts.since = c.seq;
	        opts.onChange(c);
	      }
	    }).on('complete', function () {
	      if (inprogress === 'waiting') {
	        setTimeout(function (){
	          eventFunction();
	        },0);
	      }
	      inprogress = false;
	    }).on('error', onError);
	  }
	  this._listeners[id] = eventFunction;
	  this.on(dbName, eventFunction);
	};

	Changes$1.prototype.removeListener = function (dbName, id) {
	  /* istanbul ignore if */
	  if (!(id in this._listeners)) {
	    return;
	  }
	  events.EventEmitter.prototype.removeListener.call(this, dbName,
	    this._listeners[id]);
	  delete this._listeners[id];
	};


	/* istanbul ignore next */
	Changes$1.prototype.notifyLocalWindows = function (dbName) {
	  //do a useless change on a storage thing
	  //in order to get other windows's listeners to activate
	  if (isChromeApp()) {
	    chrome.storage.local.set({dbName: dbName});
	  } else if (hasLocalStorage()) {
	    localStorage[dbName] = (localStorage[dbName] === "a") ? "b" : "a";
	  }
	};

	Changes$1.prototype.notify = function (dbName) {
	  this.emit(dbName);
	  this.notifyLocalWindows(dbName);
	};

	function guardedConsole(method) {
	  /* istanbul ignore else */
	  if (console !== 'undefined' && method in console) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    console[method].apply(console, args);
	  }
	}

	function randomNumber(min, max) {
	  var maxTimeout = 600000; // Hard-coded default of 10 minutes
	  min = parseInt(min, 10) || 0;
	  max = parseInt(max, 10);
	  if (max !== max || max <= min) {
	    max = (min || 1) << 1; //doubling
	  } else {
	    max = max + 1;
	  }
	  // In order to not exceed maxTimeout, pick a random value between half of maxTimeout and maxTimeout
	  if(max > maxTimeout) {
	    min = maxTimeout >> 1; // divide by two
	    max = maxTimeout;
	  }
	  var ratio = Math.random();
	  var range = max - min;

	  return ~~(range * ratio + min); // ~~ coerces to an int, but fast.
	}

	function defaultBackOff(min) {
	  var max = 0;
	  if (!min) {
	    max = 2000;
	  }
	  return randomNumber(min, max);
	}

	// designed to give info to browser users, who are disturbed
	// when they see http errors in the console
	function explainError(status, str) {
	  guardedConsole('info', 'The above ' + status + ' is totally normal. ' + str);
	}

	inherits(PouchError, Error);

	function PouchError(opts) {
	  Error.call(this, opts.reason);
	  this.status = opts.status;
	  this.name = opts.error;
	  this.message = opts.reason;
	  this.error = true;
	}

	PouchError.prototype.toString = function () {
	  return JSON.stringify({
	    status: this.status,
	    name: this.name,
	    message: this.message,
	    reason: this.reason
	  });
	};

	var UNAUTHORIZED = new PouchError({
	  status: 401,
	  error: 'unauthorized',
	  reason: "Name or password is incorrect."
	});

	var MISSING_BULK_DOCS = new PouchError({
	  status: 400,
	  error: 'bad_request',
	  reason: "Missing JSON list of 'docs'"
	});

	var MISSING_DOC = new PouchError({
	  status: 404,
	  error: 'not_found',
	  reason: 'missing'
	});

	var REV_CONFLICT = new PouchError({
	  status: 409,
	  error: 'conflict',
	  reason: 'Document update conflict'
	});

	var INVALID_ID = new PouchError({
	  status: 400,
	  error: 'bad_request',
	  reason: '_id field must contain a string'
	});

	var MISSING_ID = new PouchError({
	  status: 412,
	  error: 'missing_id',
	  reason: '_id is required for puts'
	});

	var RESERVED_ID = new PouchError({
	  status: 400,
	  error: 'bad_request',
	  reason: 'Only reserved document ids may start with underscore.'
	});

	var NOT_OPEN = new PouchError({
	  status: 412,
	  error: 'precondition_failed',
	  reason: 'Database not open'
	});

	var UNKNOWN_ERROR = new PouchError({
	  status: 500,
	  error: 'unknown_error',
	  reason: 'Database encountered an unknown error'
	});

	var BAD_ARG = new PouchError({
	  status: 500,
	  error: 'badarg',
	  reason: 'Some query argument is invalid'
	});

	var INVALID_REQUEST = new PouchError({
	  status: 400,
	  error: 'invalid_request',
	  reason: 'Request was invalid'
	});

	var QUERY_PARSE_ERROR = new PouchError({
	  status: 400,
	  error: 'query_parse_error',
	  reason: 'Some query parameter is invalid'
	});

	var DOC_VALIDATION = new PouchError({
	  status: 500,
	  error: 'doc_validation',
	  reason: 'Bad special document member'
	});

	var BAD_REQUEST = new PouchError({
	  status: 400,
	  error: 'bad_request',
	  reason: 'Something wrong with the request'
	});

	var NOT_AN_OBJECT = new PouchError({
	  status: 400,
	  error: 'bad_request',
	  reason: 'Document must be a JSON object'
	});

	var DB_MISSING = new PouchError({
	  status: 404,
	  error: 'not_found',
	  reason: 'Database not found'
	});

	var IDB_ERROR = new PouchError({
	  status: 500,
	  error: 'indexed_db_went_bad',
	  reason: 'unknown'
	});

	var WSQ_ERROR = new PouchError({
	  status: 500,
	  error: 'web_sql_went_bad',
	  reason: 'unknown'
	});

	var LDB_ERROR = new PouchError({
	  status: 500,
	  error: 'levelDB_went_went_bad',
	  reason: 'unknown'
	});

	var FORBIDDEN = new PouchError({
	  status: 403,
	  error: 'forbidden',
	  reason: 'Forbidden by design doc validate_doc_update function'
	});

	var INVALID_REV = new PouchError({
	  status: 400,
	  error: 'bad_request',
	  reason: 'Invalid rev format'
	});

	var FILE_EXISTS = new PouchError({
	  status: 412,
	  error: 'file_exists',
	  reason: 'The database could not be created, the file already exists.'
	});

	var MISSING_STUB = new PouchError({
	  status: 412,
	  error: 'missing_stub'
	});

	var INVALID_URL = new PouchError({
	  status: 413,
	  error: 'invalid_url',
	  reason: 'Provided URL is invalid'
	});

	function createError(error, reason) {
	  function CustomPouchError(reason) {
	    // inherit error properties from our parent error manually
	    // so as to allow proper JSON parsing.
	    /* jshint ignore:start */
	    for (var p in error) {
	      if (typeof error[p] !== 'function') {
	        this[p] = error[p];
	      }
	    }
	    /* jshint ignore:end */
	    if (reason !== undefined) {
	      this.reason = reason;
	    }
	  }
	  CustomPouchError.prototype = PouchError.prototype;
	  return new CustomPouchError(reason);
	}

	function generateErrorFromResponse(err) {

	  if (typeof err !== 'object') {
	    var data = err;
	    err = UNKNOWN_ERROR;
	    err.data = data;
	  }

	  if ('error' in err && err.error === 'conflict') {
	    err.name = 'conflict';
	    err.status = 409;
	  }

	  if (!('name' in err)) {
	    err.name = err.error || 'unknown';
	  }

	  if (!('status' in err)) {
	    err.status = 500;
	  }

	  if (!('message' in err)) {
	    err.message = err.message || err.reason;
	  }

	  return err;
	}

	function tryFilter(filter, doc, req) {
	  try {
	    return !filter(doc, req);
	  } catch (err) {
	    var msg = 'Filter function threw: ' + err.toString();
	    return createError(BAD_REQUEST, msg);
	  }
	}

	function filterChange(opts) {
	  var req = {};
	  var hasFilter = opts.filter && typeof opts.filter === 'function';
	  req.query = opts.query_params;

	  return function filter(change) {
	    if (!change.doc) {
	      // CSG sends events on the changes feed that don't have documents,
	      // this hack makes a whole lot of existing code robust.
	      change.doc = {};
	    }

	    var filterReturn = hasFilter && tryFilter(opts.filter, change.doc, req);

	    if (typeof filterReturn === 'object') {
	      return filterReturn;
	    }

	    if (filterReturn) {
	      return false;
	    }

	    if (!opts.include_docs) {
	      delete change.doc;
	    } else if (!opts.attachments) {
	      for (var att in change.doc._attachments) {
	        /* istanbul ignore else */
	        if (change.doc._attachments.hasOwnProperty(att)) {
	          change.doc._attachments[att].stub = true;
	        }
	      }
	    }
	    return true;
	  };
	}

	function flatten(arrs) {
	  var res = [];
	  for (var i = 0, len = arrs.length; i < len; i++) {
	    res = res.concat(arrs[i]);
	  }
	  return res;
	}

	// Determine id an ID is valid
	//   - invalid IDs begin with an underescore that does not begin '_design' or
	//     '_local'
	//   - any other string value is a valid id
	// Returns the specific error object for each case
	function invalidIdError(id) {
	  var err;
	  if (!id) {
	    err = createError(MISSING_ID);
	  } else if (typeof id !== 'string') {
	    err = createError(INVALID_ID);
	  } else if (/^_/.test(id) && !(/^_(design|local)/).test(id)) {
	    err = createError(RESERVED_ID);
	  }
	  if (err) {
	    throw err;
	  }
	}

	function listenerCount(ee, type) {
	  return 'listenerCount' in ee ? ee.listenerCount(type) :
	                                 events.EventEmitter.listenerCount(ee, type);
	}

	function parseDesignDocFunctionName(s) {
	  if (!s) {
	    return null;
	  }
	  var parts = s.split('/');
	  if (parts.length === 2) {
	    return parts;
	  }
	  if (parts.length === 1) {
	    return [s, s];
	  }
	  return null;
	}

	function normalizeDesignDocFunctionName(s) {
	  var normalized = parseDesignDocFunctionName(s);
	  return normalized ? normalized.join('/') : null;
	}

	// originally parseUri 1.2.2, now patched by us
	// (c) Steven Levithan <stevenlevithan.com>
	// MIT License
	var keys = ["source", "protocol", "authority", "userInfo", "user", "password",
	    "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
	var qName ="queryKey";
	var qParser = /(?:^|&)([^&=]*)=?([^&]*)/g;

	// use the "loose" parser
	/* jshint maxlen: false */
	var parser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

	function parseUri(str) {
	  var m = parser.exec(str);
	  var uri = {};
	  var i = 14;

	  while (i--) {
	    var key = keys[i];
	    var value = m[i] || "";
	    var encoded = ['user', 'password'].indexOf(key) !== -1;
	    uri[key] = encoded ? decodeURIComponent(value) : value;
	  }

	  uri[qName] = {};
	  uri[keys[12]].replace(qParser, function ($0, $1, $2) {
	    if ($1) {
	      uri[qName][$1] = $2;
	    }
	  });

	  return uri;
	}

	// this is essentially the "update sugar" function from daleharvey/pouchdb#1388
	// the diffFun tells us what delta to apply to the doc.  it either returns
	// the doc, or false if it doesn't need to do an update after all
	function upsert(db, docId, diffFun) {
	  return new PouchPromise(function (fulfill, reject) {
	    db.get(docId, function (err, doc) {
	      if (err) {
	        /* istanbul ignore next */
	        if (err.status !== 404) {
	          return reject(err);
	        }
	        doc = {};
	      }

	      // the user might change the _rev, so save it for posterity
	      var docRev = doc._rev;
	      var newDoc = diffFun(doc);

	      if (!newDoc) {
	        // if the diffFun returns falsy, we short-circuit as
	        // an optimization
	        return fulfill({updated: false, rev: docRev});
	      }

	      // users aren't allowed to modify these values,
	      // so reset them here
	      newDoc._id = docId;
	      newDoc._rev = docRev;
	      fulfill(tryAndPut(db, newDoc, diffFun));
	    });
	  });
	}

	function tryAndPut(db, doc, diffFun) {
	  return db.put(doc).then(function (res) {
	    return {
	      updated: true,
	      rev: res.rev
	    };
	  }, function (err) {
	    /* istanbul ignore next */
	    if (err.status !== 409) {
	      throw err;
	    }
	    return upsert(db, doc._id, diffFun);
	  });
	}

	// BEGIN Math.uuid.js

	/*!
	Math.uuid.js (v1.4)
	http://www.broofa.com
	mailto:robert@broofa.com

	Copyright (c) 2010 Robert Kieffer
	Dual licensed under the MIT and GPL licenses.
	*/

	/*
	 * Generate a random uuid.
	 *
	 * USAGE: Math.uuid(length, radix)
	 *   length - the desired number of characters
	 *   radix  - the number of allowable values for each character.
	 *
	 * EXAMPLES:
	 *   // No arguments  - returns RFC4122, version 4 ID
	 *   >>> Math.uuid()
	 *   "92329D39-6F5C-4520-ABFC-AAB64544E172"
	 *
	 *   // One argument - returns ID of the specified length
	 *   >>> Math.uuid(15)     // 15 character ID (default base=62)
	 *   "VcydxgltxrVZSTV"
	 *
	 *   // Two arguments - returns ID of the specified length, and radix. 
	 *   // (Radix must be <= 62)
	 *   >>> Math.uuid(8, 2)  // 8 character ID (base=2)
	 *   "01001010"
	 *   >>> Math.uuid(8, 10) // 8 character ID (base=10)
	 *   "47473046"
	 *   >>> Math.uuid(8, 16) // 8 character ID (base=16)
	 *   "098F4D35"
	 */
	var chars = (
	  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
	  'abcdefghijklmnopqrstuvwxyz'
	).split('');
	function getValue(radix) {
	  return 0 | Math.random() * radix;
	}
	function uuid(len, radix) {
	  radix = radix || chars.length;
	  var out = '';
	  var i = -1;

	  if (len) {
	    // Compact form
	    while (++i < len) {
	      out += chars[getValue(radix)];
	    }
	    return out;
	  }
	    // rfc4122, version 4 form
	    // Fill in random data.  At i==19 set the high bits of clock sequence as
	    // per rfc4122, sec. 4.1.5
	  while (++i < 36) {
	    switch (i) {
	      case 8:
	      case 13:
	      case 18:
	      case 23:
	        out += '-';
	        break;
	      case 19:
	        out += chars[(getValue(16) & 0x3) | 0x8];
	        break;
	      default:
	        out += chars[getValue(16)];
	    }
	  }

	  return out;
	}

	// We fetch all leafs of the revision tree, and sort them based on tree length
	// and whether they were deleted, undeleted documents with the longest revision
	// tree (most edits) win
	// The final sort algorithm is slightly documented in a sidebar here:
	// http://guide.couchdb.org/draft/conflicts.html
	function winningRev(metadata) {
	  var winningId;
	  var winningPos;
	  var winningDeleted;
	  var toVisit = metadata.rev_tree.slice();
	  var node;
	  while ((node = toVisit.pop())) {
	    var tree = node.ids;
	    var branches = tree[2];
	    var pos = node.pos;
	    if (branches.length) { // non-leaf
	      for (var i = 0, len = branches.length; i < len; i++) {
	        toVisit.push({pos: pos + 1, ids: branches[i]});
	      }
	      continue;
	    }
	    var deleted = !!tree[1].deleted;
	    var id = tree[0];
	    // sort by deleted, then pos, then id
	    if (!winningId || (winningDeleted !== deleted ? winningDeleted :
	        winningPos !== pos ? winningPos < pos : winningId < id)) {
	      winningId = id;
	      winningPos = pos;
	      winningDeleted = deleted;
	    }
	  }

	  return winningPos + '-' + winningId;
	}

	// Pretty much all below can be combined into a higher order function to
	// traverse revisions
	// The return value from the callback will be passed as context to all
	// children of that node
	function traverseRevTree(revs, callback) {
	  var toVisit = revs.slice();

	  var node;
	  while ((node = toVisit.pop())) {
	    var pos = node.pos;
	    var tree = node.ids;
	    var branches = tree[2];
	    var newCtx =
	      callback(branches.length === 0, pos, tree[0], node.ctx, tree[1]);
	    for (var i = 0, len = branches.length; i < len; i++) {
	      toVisit.push({pos: pos + 1, ids: branches[i], ctx: newCtx});
	    }
	  }
	}

	function sortByPos(a, b) {
	  return a.pos - b.pos;
	}

	function collectLeaves(revs) {
	  var leaves = [];
	  traverseRevTree(revs, function (isLeaf, pos, id, acc, opts) {
	    if (isLeaf) {
	      leaves.push({rev: pos + "-" + id, pos: pos, opts: opts});
	    }
	  });
	  leaves.sort(sortByPos).reverse();
	  for (var i = 0, len = leaves.length; i < len; i++) {
	    delete leaves[i].pos;
	  }
	  return leaves;
	}

	// returns revs of all conflicts that is leaves such that
	// 1. are not deleted and
	// 2. are different than winning revision
	function collectConflicts(metadata) {
	  var win = winningRev(metadata);
	  var leaves = collectLeaves(metadata.rev_tree);
	  var conflicts = [];
	  for (var i = 0, len = leaves.length; i < len; i++) {
	    var leaf = leaves[i];
	    if (leaf.rev !== win && !leaf.opts.deleted) {
	      conflicts.push(leaf.rev);
	    }
	  }
	  return conflicts;
	}

	// compact a tree by marking its non-leafs as missing,
	// and return a list of revs to delete
	function compactTree(metadata) {
	  var revs = [];
	  traverseRevTree(metadata.rev_tree, function (isLeaf, pos,
	                                               revHash, ctx, opts) {
	    if (opts.status === 'available' && !isLeaf) {
	      revs.push(pos + '-' + revHash);
	      opts.status = 'missing';
	    }
	  });
	  return revs;
	}

	// build up a list of all the paths to the leafs in this revision tree
	function rootToLeaf(revs) {
	  var paths = [];
	  var toVisit = revs.slice();
	  var node;
	  while ((node = toVisit.pop())) {
	    var pos = node.pos;
	    var tree = node.ids;
	    var id = tree[0];
	    var opts = tree[1];
	    var branches = tree[2];
	    var isLeaf = branches.length === 0;

	    var history = node.history ? node.history.slice() : [];
	    history.push({id: id, opts: opts});
	    if (isLeaf) {
	      paths.push({pos: (pos + 1 - history.length), ids: history});
	    }
	    for (var i = 0, len = branches.length; i < len; i++) {
	      toVisit.push({pos: pos + 1, ids: branches[i], history: history});
	    }
	  }
	  return paths.reverse();
	}

	// for a better overview of what this is doing, read:
	// https://github.com/apache/couchdb-couch/blob/master/src/couch_key_tree.erl
	//
	// But for a quick intro, CouchDB uses a revision tree to store a documents
	// history, A -> B -> C, when a document has conflicts, that is a branch in the
	// tree, A -> (B1 | B2 -> C), We store these as a nested array in the format
	//
	// KeyTree = [Path ... ]
	// Path = {pos: position_from_root, ids: Tree}
	// Tree = [Key, Opts, [Tree, ...]], in particular single node: [Key, []]

	function sortByPos$1(a, b) {
	  return a.pos - b.pos;
	}

	// classic binary search
	function binarySearch(arr, item, comparator) {
	  var low = 0;
	  var high = arr.length;
	  var mid;
	  while (low < high) {
	    mid = (low + high) >>> 1;
	    if (comparator(arr[mid], item) < 0) {
	      low = mid + 1;
	    } else {
	      high = mid;
	    }
	  }
	  return low;
	}

	// assuming the arr is sorted, insert the item in the proper place
	function insertSorted(arr, item, comparator) {
	  var idx = binarySearch(arr, item, comparator);
	  arr.splice(idx, 0, item);
	}

	// Turn a path as a flat array into a tree with a single branch.
	// If any should be stemmed from the beginning of the array, that's passed
	// in as the second argument
	function pathToTree(path, numStemmed) {
	  var root;
	  var leaf;
	  for (var i = numStemmed, len = path.length; i < len; i++) {
	    var node = path[i];
	    var currentLeaf = [node.id, node.opts, []];
	    if (leaf) {
	      leaf[2].push(currentLeaf);
	      leaf = currentLeaf;
	    } else {
	      root = leaf = currentLeaf;
	    }
	  }
	  return root;
	}

	// compare the IDs of two trees
	function compareTree(a, b) {
	  return a[0] < b[0] ? -1 : 1;
	}

	// Merge two trees together
	// The roots of tree1 and tree2 must be the same revision
	function mergeTree(in_tree1, in_tree2) {
	  var queue = [{tree1: in_tree1, tree2: in_tree2}];
	  var conflicts = false;
	  while (queue.length > 0) {
	    var item = queue.pop();
	    var tree1 = item.tree1;
	    var tree2 = item.tree2;

	    if (tree1[1].status || tree2[1].status) {
	      tree1[1].status =
	        (tree1[1].status ===  'available' ||
	        tree2[1].status === 'available') ? 'available' : 'missing';
	    }

	    for (var i = 0; i < tree2[2].length; i++) {
	      if (!tree1[2][0]) {
	        conflicts = 'new_leaf';
	        tree1[2][0] = tree2[2][i];
	        continue;
	      }

	      var merged = false;
	      for (var j = 0; j < tree1[2].length; j++) {
	        if (tree1[2][j][0] === tree2[2][i][0]) {
	          queue.push({tree1: tree1[2][j], tree2: tree2[2][i]});
	          merged = true;
	        }
	      }
	      if (!merged) {
	        conflicts = 'new_branch';
	        insertSorted(tree1[2], tree2[2][i], compareTree);
	      }
	    }
	  }
	  return {conflicts: conflicts, tree: in_tree1};
	}

	function doMerge(tree, path, dontExpand) {
	  var restree = [];
	  var conflicts = false;
	  var merged = false;
	  var res;

	  if (!tree.length) {
	    return {tree: [path], conflicts: 'new_leaf'};
	  }

	  for (var i = 0, len = tree.length; i < len; i++) {
	    var branch = tree[i];
	    if (branch.pos === path.pos && branch.ids[0] === path.ids[0]) {
	      // Paths start at the same position and have the same root, so they need
	      // merged
	      res = mergeTree(branch.ids, path.ids);
	      restree.push({pos: branch.pos, ids: res.tree});
	      conflicts = conflicts || res.conflicts;
	      merged = true;
	    } else if (dontExpand !== true) {
	      // The paths start at a different position, take the earliest path and
	      // traverse up until it as at the same point from root as the path we
	      // want to merge.  If the keys match we return the longer path with the
	      // other merged After stemming we dont want to expand the trees

	      var t1 = branch.pos < path.pos ? branch : path;
	      var t2 = branch.pos < path.pos ? path : branch;
	      var diff = t2.pos - t1.pos;

	      var candidateParents = [];

	      var trees = [];
	      trees.push({ids: t1.ids, diff: diff, parent: null, parentIdx: null});
	      while (trees.length > 0) {
	        var item = trees.pop();
	        if (item.diff === 0) {
	          if (item.ids[0] === t2.ids[0]) {
	            candidateParents.push(item);
	          }
	          continue;
	        }
	        var elements = item.ids[2];
	        for (var j = 0, elementsLen = elements.length; j < elementsLen; j++) {
	          trees.push({
	            ids: elements[j],
	            diff: item.diff - 1,
	            parent: item.ids,
	            parentIdx: j
	          });
	        }
	      }

	      var el = candidateParents[0];

	      if (!el) {
	        restree.push(branch);
	      } else {
	        res = mergeTree(el.ids, t2.ids);
	        el.parent[2][el.parentIdx] = res.tree;
	        restree.push({pos: t1.pos, ids: t1.ids});
	        conflicts = conflicts || res.conflicts;
	        merged = true;
	      }
	    } else {
	      restree.push(branch);
	    }
	  }

	  // We didnt find
	  if (!merged) {
	    restree.push(path);
	  }

	  restree.sort(sortByPos$1);

	  return {
	    tree: restree,
	    conflicts: conflicts || 'internal_node'
	  };
	}

	// To ensure we dont grow the revision tree infinitely, we stem old revisions
	function stem(tree, depth) {
	  // First we break out the tree into a complete list of root to leaf paths
	  var paths = rootToLeaf(tree);
	  var maybeStem = {};

	  var result;
	  for (var i = 0, len = paths.length; i < len; i++) {
	    // Then for each path, we cut off the start of the path based on the
	    // `depth` to stem to, and generate a new set of flat trees
	    var path = paths[i];
	    var stemmed = path.ids;
	    var numStemmed = Math.max(0, stemmed.length - depth);
	    var stemmedNode = {
	      pos: path.pos + numStemmed,
	      ids: pathToTree(stemmed, numStemmed)
	    };

	    for (var s = 0; s < numStemmed; s++) {
	      var rev = (path.pos + s) + '-' + stemmed[s].id;
	      maybeStem[rev] = true;
	    }

	    // Then we remerge all those flat trees together, ensuring that we dont
	    // connect trees that would go beyond the depth limit
	    if (result) {
	      result = doMerge(result, stemmedNode, true).tree;
	    } else {
	      result = [stemmedNode];
	    }
	  }

	  traverseRevTree(result, function (isLeaf, pos, revHash) {
	    // some revisions may have been removed in a branch but not in another
	    delete maybeStem[pos + '-' + revHash];
	  });

	  return {
	    tree: result,
	    revs: Object.keys(maybeStem)
	  };
	}

	function merge(tree, path, depth) {
	  var newTree = doMerge(tree, path);
	  var stemmed = stem(newTree.tree, depth);
	  return {
	    tree: stemmed.tree,
	    stemmedRevs: stemmed.revs,
	    conflicts: newTree.conflicts
	  };
	}

	// return true if a rev exists in the rev tree, false otherwise
	function revExists(revs, rev) {
	  var toVisit = revs.slice();
	  var splitRev = rev.split('-');
	  var targetPos = parseInt(splitRev[0], 10);
	  var targetId = splitRev[1];

	  var node;
	  while ((node = toVisit.pop())) {
	    if (node.pos === targetPos && node.ids[0] === targetId) {
	      return true;
	    }
	    var branches = node.ids[2];
	    for (var i = 0, len = branches.length; i < len; i++) {
	      toVisit.push({pos: node.pos + 1, ids: branches[i]});
	    }
	  }
	  return false;
	}

	function getTrees(node) {
	  return node.ids;
	}

	// check if a specific revision of a doc has been deleted
	//  - metadata: the metadata object from the doc store
	//  - rev: (optional) the revision to check. defaults to winning revision
	function isDeleted(metadata, rev) {
	  if (!rev) {
	    rev = winningRev(metadata);
	  }
	  var id = rev.substring(rev.indexOf('-') + 1);
	  var toVisit = metadata.rev_tree.map(getTrees);

	  var tree;
	  while ((tree = toVisit.pop())) {
	    if (tree[0] === id) {
	      return !!tree[1].deleted;
	    }
	    toVisit = toVisit.concat(tree[2]);
	  }
	}

	function isLocalId(id) {
	  return (/^_local/).test(id);
	}

	function evalFilter(input) {
	  return scopedEval('"use strict";\nreturn ' + input + ';', {});
	}

	function evalView(input) {
	  var code = [
	    'return function(doc) {',
	    '  "use strict";',
	    '  var emitted = false;',
	    '  var emit = function (a, b) {',
	    '    emitted = true;',
	    '  };',
	    '  var view = ' + input + ';',
	    '  view(doc);',
	    '  if (emitted) {',
	    '    return true;',
	    '  }',
	    '};'
	  ].join('\n');

	  return scopedEval(code, {});
	}

	inherits(Changes, events.EventEmitter);

	function tryCatchInChangeListener(self, change) {
	  // isolate try/catches to avoid V8 deoptimizations
	  try {
	    self.emit('change', change);
	  } catch (e) {
	    guardedConsole('error', 'Error in .on("change", function):', e);
	  }
	}

	function Changes(db, opts, callback) {
	  events.EventEmitter.call(this);
	  var self = this;
	  this.db = db;
	  opts = opts ? clone(opts) : {};
	  var complete = opts.complete = once(function (err, resp) {
	    if (err) {
	      if (listenerCount(self, 'error') > 0) {
	        self.emit('error', err);
	      }
	    } else {
	      self.emit('complete', resp);
	    }
	    self.removeAllListeners();
	    db.removeListener('destroyed', onDestroy);
	  });
	  if (callback) {
	    self.on('complete', function (resp) {
	      callback(null, resp);
	    });
	    self.on('error', callback);
	  }
	  function onDestroy() {
	    self.cancel();
	  }
	  db.once('destroyed', onDestroy);

	  opts.onChange = function (change) {
	    /* istanbul ignore if */
	    if (opts.isCancelled) {
	      return;
	    }
	    tryCatchInChangeListener(self, change);
	  };

	  var promise = new PouchPromise(function (fulfill, reject) {
	    opts.complete = function (err, res) {
	      if (err) {
	        reject(err);
	      } else {
	        fulfill(res);
	      }
	    };
	  });
	  self.once('cancel', function () {
	    db.removeListener('destroyed', onDestroy);
	    opts.complete(null, {status: 'cancelled'});
	  });
	  this.then = promise.then.bind(promise);
	  this['catch'] = promise['catch'].bind(promise);
	  this.then(function (result) {
	    complete(null, result);
	  }, complete);



	  if (!db.taskqueue.isReady) {
	    db.taskqueue.addTask(function (failed) {
	      if (failed) {
	        opts.complete(failed);
	      } else if (self.isCancelled) {
	        self.emit('cancel');
	      } else {
	        self.doChanges(opts);
	      }
	    });
	  } else {
	    self.doChanges(opts);
	  }
	}
	Changes.prototype.cancel = function () {
	  this.isCancelled = true;
	  if (this.db.taskqueue.isReady) {
	    this.emit('cancel');
	  }
	};
	function processChange(doc, metadata, opts) {
	  var changeList = [{rev: doc._rev}];
	  if (opts.style === 'all_docs') {
	    changeList = collectLeaves(metadata.rev_tree)
	    .map(function (x) { return {rev: x.rev}; });
	  }
	  var change = {
	    id: metadata.id,
	    changes: changeList,
	    doc: doc
	  };

	  if (isDeleted(metadata, doc._rev)) {
	    change.deleted = true;
	  }
	  if (opts.conflicts) {
	    change.doc._conflicts = collectConflicts(metadata);
	    if (!change.doc._conflicts.length) {
	      delete change.doc._conflicts;
	    }
	  }
	  return change;
	}

	Changes.prototype.doChanges = function (opts) {
	  var self = this;
	  var callback = opts.complete;

	  opts = clone(opts);
	  if ('live' in opts && !('continuous' in opts)) {
	    opts.continuous = opts.live;
	  }
	  opts.processChange = processChange;

	  if (opts.since === 'latest') {
	    opts.since = 'now';
	  }
	  if (!opts.since) {
	    opts.since = 0;
	  }
	  if (opts.since === 'now') {
	    this.db.info().then(function (info) {
	      /* istanbul ignore if */
	      if (self.isCancelled) {
	        callback(null, {status: 'cancelled'});
	        return;
	      }
	      opts.since = info.update_seq;
	      self.doChanges(opts);
	    }, callback);
	    return;
	  }


	  if (opts.view && !opts.filter) {
	    opts.filter = '_view';
	  }

	  if (opts.filter && typeof opts.filter === 'string') {
	    if (opts.filter === '_view') {
	      opts.view = normalizeDesignDocFunctionName(opts.view);
	    } else {
	      opts.filter = normalizeDesignDocFunctionName(opts.filter);
	    }

	    if (this.db.type() !== 'http' && !opts.doc_ids) {
	      return this.filterChanges(opts);
	    }
	  }

	  if (!('descending' in opts)) {
	    opts.descending = false;
	  }

	  // 0 and 1 should return 1 document
	  opts.limit = opts.limit === 0 ? 1 : opts.limit;
	  opts.complete = callback;
	  var newPromise = this.db._changes(opts);
	  /* istanbul ignore else */
	  if (newPromise && typeof newPromise.cancel === 'function') {
	    var cancel = self.cancel;
	    self.cancel = getArguments(function (args) {
	      newPromise.cancel();
	      cancel.apply(this, args);
	    });
	  }
	};

	Changes.prototype.filterChanges = function (opts) {
	  var self = this;
	  var callback = opts.complete;
	  if (opts.filter === '_view') {
	    if (!opts.view || typeof opts.view !== 'string') {
	      var err = createError(BAD_REQUEST,
	        '`view` filter parameter not found or invalid.');
	      return callback(err);
	    }
	    // fetch a view from a design doc, make it behave like a filter
	    var viewName = parseDesignDocFunctionName(opts.view);
	    this.db.get('_design/' + viewName[0], function (err, ddoc) {
	      /* istanbul ignore if */
	      if (self.isCancelled) {
	        return callback(null, {status: 'cancelled'});
	      }
	      /* istanbul ignore next */
	      if (err) {
	        return callback(generateErrorFromResponse(err));
	      }
	      var mapFun = ddoc && ddoc.views && ddoc.views[viewName[1]] &&
	        ddoc.views[viewName[1]].map;
	      if (!mapFun) {
	        return callback(createError(MISSING_DOC,
	          (ddoc.views ? 'missing json key: ' + viewName[1] :
	            'missing json key: views')));
	      }
	      opts.filter = evalView(mapFun);
	      self.doChanges(opts);
	    });
	  } else {
	    // fetch a filter from a design doc
	    var filterName = parseDesignDocFunctionName(opts.filter);
	    if (!filterName) {
	      return self.doChanges(opts);
	    }
	    this.db.get('_design/' + filterName[0], function (err, ddoc) {
	      /* istanbul ignore if */
	      if (self.isCancelled) {
	        return callback(null, {status: 'cancelled'});
	      }
	      /* istanbul ignore next */
	      if (err) {
	        return callback(generateErrorFromResponse(err));
	      }
	      var filterFun = ddoc && ddoc.filters && ddoc.filters[filterName[1]];
	      if (!filterFun) {
	        return callback(createError(MISSING_DOC,
	          ((ddoc && ddoc.filters) ? 'missing json key: ' + filterName[1]
	            : 'missing json key: filters')));
	      }
	      opts.filter = evalFilter(filterFun);
	      self.doChanges(opts);
	    });
	  }
	};

	/*
	 * A generic pouch adapter
	 */

	function compare(left, right) {
	  return left < right ? -1 : left > right ? 1 : 0;
	}

	// returns first element of arr satisfying callback predicate
	function arrayFirst(arr, callback) {
	  for (var i = 0; i < arr.length; i++) {
	    if (callback(arr[i], i) === true) {
	      return arr[i];
	    }
	  }
	}

	// Wrapper for functions that call the bulkdocs api with a single doc,
	// if the first result is an error, return an error
	function yankError(callback) {
	  return function (err, results) {
	    if (err || (results[0] && results[0].error)) {
	      callback(err || results[0]);
	    } else {
	      callback(null, results.length ? results[0]  : results);
	    }
	  };
	}

	// clean docs given to us by the user
	function cleanDocs(docs) {
	  for (var i = 0; i < docs.length; i++) {
	    var doc = docs[i];
	    if (doc._deleted) {
	      delete doc._attachments; // ignore atts for deleted docs
	    } else if (doc._attachments) {
	      // filter out extraneous keys from _attachments
	      var atts = Object.keys(doc._attachments);
	      for (var j = 0; j < atts.length; j++) {
	        var att = atts[j];
	        doc._attachments[att] = pick(doc._attachments[att],
	          ['data', 'digest', 'content_type', 'length', 'revpos', 'stub']);
	      }
	    }
	  }
	}

	// compare two docs, first by _id then by _rev
	function compareByIdThenRev(a, b) {
	  var idCompare = compare(a._id, b._id);
	  if (idCompare !== 0) {
	    return idCompare;
	  }
	  var aStart = a._revisions ? a._revisions.start : 0;
	  var bStart = b._revisions ? b._revisions.start : 0;
	  return compare(aStart, bStart);
	}

	// for every node in a revision tree computes its distance from the closest
	// leaf
	function computeHeight(revs) {
	  var height = {};
	  var edges = [];
	  traverseRevTree(revs, function (isLeaf, pos, id, prnt) {
	    var rev = pos + "-" + id;
	    if (isLeaf) {
	      height[rev] = 0;
	    }
	    if (prnt !== undefined) {
	      edges.push({from: prnt, to: rev});
	    }
	    return rev;
	  });

	  edges.reverse();
	  edges.forEach(function (edge) {
	    if (height[edge.from] === undefined) {
	      height[edge.from] = 1 + height[edge.to];
	    } else {
	      height[edge.from] = Math.min(height[edge.from], 1 + height[edge.to]);
	    }
	  });
	  return height;
	}

	function allDocsKeysQuery(api, opts, callback) {
	  var keys =  ('limit' in opts) ?
	      opts.keys.slice(opts.skip, opts.limit + opts.skip) :
	      (opts.skip > 0) ? opts.keys.slice(opts.skip) : opts.keys;
	  if (opts.descending) {
	    keys.reverse();
	  }
	  if (!keys.length) {
	    return api._allDocs({limit: 0}, callback);
	  }
	  var finalResults = {
	    offset: opts.skip
	  };
	  return PouchPromise.all(keys.map(function (key) {
	    var subOpts = jsExtend.extend({key: key, deleted: 'ok'}, opts);
	    ['limit', 'skip', 'keys'].forEach(function (optKey) {
	      delete subOpts[optKey];
	    });
	    return new PouchPromise(function (resolve, reject) {
	      api._allDocs(subOpts, function (err, res) {
	        /* istanbul ignore if */
	        if (err) {
	          return reject(err);
	        }
	        finalResults.total_rows = res.total_rows;
	        resolve(res.rows[0] || {key: key, error: 'not_found'});
	      });
	    });
	  })).then(function (results) {
	    finalResults.rows = results;
	    return finalResults;
	  });
	}

	// all compaction is done in a queue, to avoid attaching
	// too many listeners at once
	function doNextCompaction(self) {
	  var task = self._compactionQueue[0];
	  var opts = task.opts;
	  var callback = task.callback;
	  self.get('_local/compaction').catch(function () {
	    return false;
	  }).then(function (doc) {
	    if (doc && doc.last_seq) {
	      opts.last_seq = doc.last_seq;
	    }
	    self._compact(opts, function (err, res) {
	      /* istanbul ignore if */
	      if (err) {
	        callback(err);
	      } else {
	        callback(null, res);
	      }
	      process.nextTick(function () {
	        self._compactionQueue.shift();
	        if (self._compactionQueue.length) {
	          doNextCompaction(self);
	        }
	      });
	    });
	  });
	}

	function attachmentNameError(name) {
	  if (name.charAt(0) === '_') {
	    return name + 'is not a valid attachment name, attachment ' +
	      'names cannot start with \'_\'';
	  }
	  return false;
	}

	inherits(AbstractPouchDB, events.EventEmitter);

	function AbstractPouchDB() {
	  events.EventEmitter.call(this);
	}

	AbstractPouchDB.prototype.post =
	  adapterFun('post', function (doc, opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  if (typeof doc !== 'object' || Array.isArray(doc)) {
	    return callback(createError(NOT_AN_OBJECT));
	  }
	  this.bulkDocs({docs: [doc]}, opts, yankError(callback));
	});

	AbstractPouchDB.prototype.put = adapterFun('put', function (doc, opts, cb) {
	  if (typeof opts === 'function') {
	    cb = opts;
	    opts = {};
	  }
	  if (typeof doc !== 'object' || Array.isArray(doc)) {
	    return cb(createError(NOT_AN_OBJECT));
	  }
	  invalidIdError(doc._id);
	  if (isLocalId(doc._id) && typeof this._putLocal === 'function') {
	    if (doc._deleted) {
	      return this._removeLocal(doc, cb);
	    } else {
	      return this._putLocal(doc, cb);
	    }
	  }
	  if (typeof this._put === 'function' && opts.new_edits !== false) {
	    this._put(doc, opts, cb);
	  } else {
	    this.bulkDocs({docs: [doc]}, opts, yankError(cb));
	  }
	});

	AbstractPouchDB.prototype.putAttachment =
	  adapterFun('putAttachment', function (docId, attachmentId, rev,
	                                              blob, type) {
	  var api = this;
	  if (typeof type === 'function') {
	    type = blob;
	    blob = rev;
	    rev = null;
	  }
	  // Lets fix in https://github.com/pouchdb/pouchdb/issues/3267
	  /* istanbul ignore if */
	  if (typeof type === 'undefined') {
	    type = blob;
	    blob = rev;
	    rev = null;
	  }

	  function createAttachment(doc) {
	    var prevrevpos = '_rev' in doc ? parseInt(doc._rev, 10) : 0;
	    doc._attachments = doc._attachments || {};
	    doc._attachments[attachmentId] = {
	      content_type: type,
	      data: blob,
	      revpos: ++prevrevpos
	    };
	    return api.put(doc);
	  }

	  return api.get(docId).then(function (doc) {
	    if (doc._rev !== rev) {
	      throw createError(REV_CONFLICT);
	    }

	    return createAttachment(doc);
	  }, function (err) {
	     // create new doc
	    /* istanbul ignore else */
	    if (err.reason === MISSING_DOC.message) {
	      return createAttachment({_id: docId});
	    } else {
	      throw err;
	    }
	  });
	});

	AbstractPouchDB.prototype.removeAttachment =
	  adapterFun('removeAttachment', function (docId, attachmentId, rev,
	                                                 callback) {
	  var self = this;
	  self.get(docId, function (err, obj) {
	    /* istanbul ignore if */
	    if (err) {
	      callback(err);
	      return;
	    }
	    if (obj._rev !== rev) {
	      callback(createError(REV_CONFLICT));
	      return;
	    }
	    /* istanbul ignore if */
	    if (!obj._attachments) {
	      return callback();
	    }
	    delete obj._attachments[attachmentId];
	    if (Object.keys(obj._attachments).length === 0) {
	      delete obj._attachments;
	    }
	    self.put(obj, callback);
	  });
	});

	AbstractPouchDB.prototype.remove =
	  adapterFun('remove', function (docOrId, optsOrRev, opts, callback) {
	  var doc;
	  if (typeof optsOrRev === 'string') {
	    // id, rev, opts, callback style
	    doc = {
	      _id: docOrId,
	      _rev: optsOrRev
	    };
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	  } else {
	    // doc, opts, callback style
	    doc = docOrId;
	    if (typeof optsOrRev === 'function') {
	      callback = optsOrRev;
	      opts = {};
	    } else {
	      callback = opts;
	      opts = optsOrRev;
	    }
	  }
	  opts = opts || {};
	  opts.was_delete = true;
	  var newDoc = {_id: doc._id, _rev: (doc._rev || opts.rev)};
	  newDoc._deleted = true;
	  if (isLocalId(newDoc._id) && typeof this._removeLocal === 'function') {
	    return this._removeLocal(doc, callback);
	  }
	  this.bulkDocs({docs: [newDoc]}, opts, yankError(callback));
	});

	AbstractPouchDB.prototype.revsDiff =
	  adapterFun('revsDiff', function (req, opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  var ids = Object.keys(req);

	  if (!ids.length) {
	    return callback(null, {});
	  }

	  var count = 0;
	  var missing = new _Map();

	  function addToMissing(id, revId) {
	    if (!missing.has(id)) {
	      missing.set(id, {missing: []});
	    }
	    missing.get(id).missing.push(revId);
	  }

	  function processDoc(id, rev_tree) {
	    // Is this fast enough? Maybe we should switch to a set simulated by a map
	    var missingForId = req[id].slice(0);
	    traverseRevTree(rev_tree, function (isLeaf, pos, revHash, ctx,
	      opts) {
	        var rev = pos + '-' + revHash;
	        var idx = missingForId.indexOf(rev);
	        if (idx === -1) {
	          return;
	        }

	        missingForId.splice(idx, 1);
	        /* istanbul ignore if */
	        if (opts.status !== 'available') {
	          addToMissing(id, rev);
	        }
	      });

	    // Traversing the tree is synchronous, so now `missingForId` contains
	    // revisions that were not found in the tree
	    missingForId.forEach(function (rev) {
	      addToMissing(id, rev);
	    });
	  }

	  ids.map(function (id) {
	    this._getRevisionTree(id, function (err, rev_tree) {
	      if (err && err.status === 404 && err.message === 'missing') {
	        missing.set(id, {missing: req[id]});
	      } else if (err) {
	        /* istanbul ignore next */
	        return callback(err);
	      } else {
	        processDoc(id, rev_tree);
	      }

	      if (++count === ids.length) {
	        // convert LazyMap to object
	        var missingObj = {};
	        missing.forEach(function (value, key) {
	          missingObj[key] = value;
	        });
	        return callback(null, missingObj);
	      }
	    });
	  }, this);
	});

	// _bulk_get API for faster replication, as described in
	// https://github.com/apache/couchdb-chttpd/pull/33
	// At the "abstract" level, it will just run multiple get()s in
	// parallel, because this isn't much of a performance cost
	// for local databases (except the cost of multiple transactions, which is
	// small). The http adapter overrides this in order
	// to do a more efficient single HTTP request.
	AbstractPouchDB.prototype.bulkGet =
	  adapterFun('bulkGet', function (opts, callback) {
	  bulkGet(this, opts, callback);
	});

	// compact one document and fire callback
	// by compacting we mean removing all revisions which
	// are further from the leaf in revision tree than max_height
	AbstractPouchDB.prototype.compactDocument =
	  adapterFun('compactDocument', function (docId, maxHeight, callback) {
	  var self = this;
	  this._getRevisionTree(docId, function (err, revTree) {
	    /* istanbul ignore if */
	    if (err) {
	      return callback(err);
	    }
	    var height = computeHeight(revTree);
	    var candidates = [];
	    var revs = [];
	    Object.keys(height).forEach(function (rev) {
	      if (height[rev] > maxHeight) {
	        candidates.push(rev);
	      }
	    });

	    traverseRevTree(revTree, function (isLeaf, pos, revHash, ctx, opts) {
	      var rev = pos + '-' + revHash;
	      if (opts.status === 'available' && candidates.indexOf(rev) !== -1) {
	        revs.push(rev);
	      }
	    });
	    self._doCompaction(docId, revs, callback);
	  });
	});

	// compact the whole database using single document
	// compaction
	AbstractPouchDB.prototype.compact =
	  adapterFun('compact', function (opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }

	  var self = this;
	  opts = opts || {};

	  self._compactionQueue = self._compactionQueue || [];
	  self._compactionQueue.push({opts: opts, callback: callback});
	  if (self._compactionQueue.length === 1) {
	    doNextCompaction(self);
	  }
	});
	AbstractPouchDB.prototype._compact = function (opts, callback) {
	  var self = this;
	  var changesOpts = {
	    return_docs: false,
	    last_seq: opts.last_seq || 0
	  };
	  var promises = [];

	  function onChange(row) {
	    promises.push(self.compactDocument(row.id, 0));
	  }
	  function onComplete(resp) {
	    var lastSeq = resp.last_seq;
	    PouchPromise.all(promises).then(function () {
	      return upsert(self, '_local/compaction', function deltaFunc(doc) {
	        if (!doc.last_seq || doc.last_seq < lastSeq) {
	          doc.last_seq = lastSeq;
	          return doc;
	        }
	        return false; // somebody else got here first, don't update
	      });
	    }).then(function () {
	      callback(null, {ok: true});
	    }).catch(callback);
	  }
	  self.changes(changesOpts)
	    .on('change', onChange)
	    .on('complete', onComplete)
	    .on('error', callback);
	};

	/* Begin api wrappers. Specific functionality to storage belongs in the
	   _[method] */
	AbstractPouchDB.prototype.get = adapterFun('get', function (id, opts, cb) {
	  if (typeof opts === 'function') {
	    cb = opts;
	    opts = {};
	  }
	  if (typeof id !== 'string') {
	    return cb(createError(INVALID_ID));
	  }
	  if (isLocalId(id) && typeof this._getLocal === 'function') {
	    return this._getLocal(id, cb);
	  }
	  var leaves = [], self = this;

	  function finishOpenRevs() {
	    var result = [];
	    var count = leaves.length;
	    /* istanbul ignore if */
	    if (!count) {
	      return cb(null, result);
	    }
	    // order with open_revs is unspecified
	    leaves.forEach(function (leaf) {
	      self.get(id, {
	        rev: leaf,
	        revs: opts.revs,
	        attachments: opts.attachments
	      }, function (err, doc) {
	        if (!err) {
	          result.push({ok: doc});
	        } else {
	          result.push({missing: leaf});
	        }
	        count--;
	        if (!count) {
	          cb(null, result);
	        }
	      });
	    });
	  }

	  if (opts.open_revs) {
	    if (opts.open_revs === "all") {
	      this._getRevisionTree(id, function (err, rev_tree) {
	        if (err) {
	          return cb(err);
	        }
	        leaves = collectLeaves(rev_tree).map(function (leaf) {
	          return leaf.rev;
	        });
	        finishOpenRevs();
	      });
	    } else {
	      if (Array.isArray(opts.open_revs)) {
	        leaves = opts.open_revs;
	        for (var i = 0; i < leaves.length; i++) {
	          var l = leaves[i];
	          // looks like it's the only thing couchdb checks
	          if (!(typeof (l) === "string" && /^\d+-/.test(l))) {
	            return cb(createError(INVALID_REV));
	          }
	        }
	        finishOpenRevs();
	      } else {
	        return cb(createError(UNKNOWN_ERROR, 'function_clause'));
	      }
	    }
	    return; // open_revs does not like other options
	  }

	  return this._get(id, opts, function (err, result) {
	    if (err) {
	      return cb(err);
	    }

	    var doc = result.doc;
	    var metadata = result.metadata;
	    var ctx = result.ctx;

	    if (opts.conflicts) {
	      var conflicts = collectConflicts(metadata);
	      if (conflicts.length) {
	        doc._conflicts = conflicts;
	      }
	    }

	    if (isDeleted(metadata, doc._rev)) {
	      doc._deleted = true;
	    }

	    if (opts.revs || opts.revs_info) {
	      var paths = rootToLeaf(metadata.rev_tree);
	      var path = arrayFirst(paths, function (arr) {
	        return arr.ids.map(function (x) { return x.id; })
	          .indexOf(doc._rev.split('-')[1]) !== -1;
	      });

	      var indexOfRev = path.ids.map(function (x) {return x.id; })
	        .indexOf(doc._rev.split('-')[1]) + 1;
	      var howMany = path.ids.length - indexOfRev;
	      path.ids.splice(indexOfRev, howMany);
	      path.ids.reverse();

	      if (opts.revs) {
	        doc._revisions = {
	          start: (path.pos + path.ids.length) - 1,
	          ids: path.ids.map(function (rev) {
	            return rev.id;
	          })
	        };
	      }
	      if (opts.revs_info) {
	        var pos =  path.pos + path.ids.length;
	        doc._revs_info = path.ids.map(function (rev) {
	          pos--;
	          return {
	            rev: pos + '-' + rev.id,
	            status: rev.opts.status
	          };
	        });
	      }
	    }

	    if (opts.attachments && doc._attachments) {
	      var attachments = doc._attachments;
	      var count = Object.keys(attachments).length;
	      if (count === 0) {
	        return cb(null, doc);
	      }
	      Object.keys(attachments).forEach(function (key) {
	        this._getAttachment(doc._id, key, attachments[key], {
	          // Previously the revision handling was done in adapter.js
	          // getAttachment, however since idb-next doesnt we need to
	          // pass the rev through
	          rev: doc._rev,
	          binary: opts.binary,
	          ctx: ctx
	        }, function (err, data) {
	          var att = doc._attachments[key];
	          att.data = data;
	          delete att.stub;
	          delete att.length;
	          if (!--count) {
	            cb(null, doc);
	          }
	        });
	      }, self);
	    } else {
	      if (doc._attachments) {
	        for (var key in doc._attachments) {
	          /* istanbul ignore else */
	          if (doc._attachments.hasOwnProperty(key)) {
	            doc._attachments[key].stub = true;
	          }
	        }
	      }
	      cb(null, doc);
	    }
	  });
	});

	// TODO: I dont like this, it forces an extra read for every
	// attachment read and enforces a confusing api between
	// adapter.js and the adapter implementation
	AbstractPouchDB.prototype.getAttachment =
	  adapterFun('getAttachment', function (docId, attachmentId, opts, callback) {
	  var self = this;
	  if (opts instanceof Function) {
	    callback = opts;
	    opts = {};
	  }
	  this._get(docId, opts, function (err, res) {
	    if (err) {
	      return callback(err);
	    }
	    if (res.doc._attachments && res.doc._attachments[attachmentId]) {
	      opts.ctx = res.ctx;
	      opts.binary = true;
	      self._getAttachment(docId, attachmentId,
	                          res.doc._attachments[attachmentId], opts, callback);
	    } else {
	      return callback(createError(MISSING_DOC));
	    }
	  });
	});

	AbstractPouchDB.prototype.allDocs =
	  adapterFun('allDocs', function (opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  opts.skip = typeof opts.skip !== 'undefined' ? opts.skip : 0;
	  if (opts.start_key) {
	    opts.startkey = opts.start_key;
	  }
	  if (opts.end_key) {
	    opts.endkey = opts.end_key;
	  }
	  if ('keys' in opts) {
	    if (!Array.isArray(opts.keys)) {
	      return callback(new TypeError('options.keys must be an array'));
	    }
	    var incompatibleOpt =
	      ['startkey', 'endkey', 'key'].filter(function (incompatibleOpt) {
	      return incompatibleOpt in opts;
	    })[0];
	    if (incompatibleOpt) {
	      callback(createError(QUERY_PARSE_ERROR,
	        'Query parameter `' + incompatibleOpt +
	        '` is not compatible with multi-get'
	      ));
	      return;
	    }
	    if (this.type() !== 'http') {
	      return allDocsKeysQuery(this, opts, callback);
	    }
	  }

	  return this._allDocs(opts, callback);
	});

	AbstractPouchDB.prototype.changes = function (opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  return new Changes(this, opts, callback);
	};

	AbstractPouchDB.prototype.close = adapterFun('close', function (callback) {
	  this._closed = true;
	  return this._close(callback);
	});

	AbstractPouchDB.prototype.info = adapterFun('info', function (callback) {
	  var self = this;
	  this._info(function (err, info) {
	    if (err) {
	      return callback(err);
	    }
	    // assume we know better than the adapter, unless it informs us
	    info.db_name = info.db_name || self.name;
	    info.auto_compaction = !!(self.auto_compaction && self.type() !== 'http');
	    info.adapter = self.type();
	    callback(null, info);
	  });
	});

	AbstractPouchDB.prototype.id = adapterFun('id', function (callback) {
	  return this._id(callback);
	});

	/* istanbul ignore next */
	AbstractPouchDB.prototype.type = function () {
	  return (typeof this._type === 'function') ? this._type() : this.adapter;
	};

	AbstractPouchDB.prototype.bulkDocs =
	  adapterFun('bulkDocs', function (req, opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }

	  opts = opts || {};

	  if (Array.isArray(req)) {
	    req = {
	      docs: req
	    };
	  }

	  if (!req || !req.docs || !Array.isArray(req.docs)) {
	    return callback(createError(MISSING_BULK_DOCS));
	  }

	  for (var i = 0; i < req.docs.length; ++i) {
	    if (typeof req.docs[i] !== 'object' || Array.isArray(req.docs[i])) {
	      return callback(createError(NOT_AN_OBJECT));
	    }
	  }

	  var attachmentError;
	  req.docs.forEach(function (doc) {
	    if (doc._attachments) {
	      Object.keys(doc._attachments).forEach(function (name) {
	        attachmentError = attachmentError || attachmentNameError(name);
	      });
	    }
	  });

	  if (attachmentError) {
	    return callback(createError(BAD_REQUEST, attachmentError));
	  }

	  if (!('new_edits' in opts)) {
	    if ('new_edits' in req) {
	      opts.new_edits = req.new_edits;
	    } else {
	      opts.new_edits = true;
	    }
	  }

	  if (!opts.new_edits && this.type() !== 'http') {
	    // ensure revisions of the same doc are sorted, so that
	    // the local adapter processes them correctly (#2935)
	    req.docs.sort(compareByIdThenRev);
	  }

	  cleanDocs(req.docs);

	  return this._bulkDocs(req, opts, function (err, res) {
	    if (err) {
	      return callback(err);
	    }
	    if (!opts.new_edits) {
	      // this is what couch does when new_edits is false
	      res = res.filter(function (x) {
	        return x.error;
	      });
	    }
	    callback(null, res);
	  });
	});

	AbstractPouchDB.prototype.registerDependentDatabase =
	  adapterFun('registerDependentDatabase', function (dependentDb,
	                                                          callback) {
	  var depDB = new this.constructor(dependentDb, this.__opts);

	  function diffFun(doc) {
	    doc.dependentDbs = doc.dependentDbs || {};
	    if (doc.dependentDbs[dependentDb]) {
	      return false; // no update required
	    }
	    doc.dependentDbs[dependentDb] = true;
	    return doc;
	  }
	  upsert(this, '_local/_pouch_dependentDbs', diffFun)
	    .then(function () {
	      callback(null, {db: depDB});
	    }).catch(callback);
	});

	AbstractPouchDB.prototype.destroy =
	  adapterFun('destroy', function (opts, callback) {

	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }

	  var self = this;
	  var usePrefix = 'use_prefix' in self ? self.use_prefix : true;

	  function destroyDb() {
	    // call destroy method of the particular adaptor
	    self._destroy(opts, function (err, resp) {
	      if (err) {
	        return callback(err);
	      }
	      self._destroyed = true;
	      self.emit('destroyed');
	      callback(null, resp || { 'ok': true });
	    });
	  }

	  if (self.type() === 'http') {
	    // no need to check for dependent DBs if it's a remote DB
	    return destroyDb();
	  }

	  self.get('_local/_pouch_dependentDbs', function (err, localDoc) {
	    if (err) {
	      /* istanbul ignore if */
	      if (err.status !== 404) {
	        return callback(err);
	      } else { // no dependencies
	        return destroyDb();
	      }
	    }
	    var dependentDbs = localDoc.dependentDbs;
	    var PouchDB = self.constructor;
	    var deletedMap = Object.keys(dependentDbs).map(function (name) {
	      // use_prefix is only false in the browser
	      /* istanbul ignore next */
	      var trueName = usePrefix ?
	        name.replace(new RegExp('^' + PouchDB.prefix), '') : name;
	      return new PouchDB(trueName, self.__opts).destroy();
	    });
	    PouchPromise.all(deletedMap).then(destroyDb, callback);
	  });
	});

	function TaskQueue() {
	  this.isReady = false;
	  this.failed = false;
	  this.queue = [];
	}

	TaskQueue.prototype.execute = function () {
	  var fun;
	  if (this.failed) {
	    while ((fun = this.queue.shift())) {
	      fun(this.failed);
	    }
	  } else {
	    while ((fun = this.queue.shift())) {
	      fun();
	    }
	  }
	};

	TaskQueue.prototype.fail = function (err) {
	  this.failed = err;
	  this.execute();
	};

	TaskQueue.prototype.ready = function (db) {
	  this.isReady = true;
	  this.db = db;
	  this.execute();
	};

	TaskQueue.prototype.addTask = function (fun) {
	  this.queue.push(fun);
	  if (this.failed) {
	    this.execute();
	  }
	};

	function parseAdapter(name, opts) {
	  var match = name.match(/([a-z\-]*):\/\/(.*)/);
	  if (match) {
	    // the http adapter expects the fully qualified name
	    name = /http(s?)/.test(match[1]) ? match[1] + '://' + match[2] : match[2];
	    return {name: name, adapter: match[1]};
	  }

	  // check for browsers that have been upgraded from websql-only to websql+idb
	  var skipIdb = 'idb' in PouchDB.adapters && 'websql' in PouchDB.adapters &&
	    hasLocalStorage() &&
	    localStorage['_pouch__websqldb_' + PouchDB.prefix + name];

	  var adapterName;

	  if (opts.adapter) {
	    adapterName = opts.adapter;
	  } else if (typeof opts !== 'undefined' && opts.db) {
	    adapterName = 'leveldb';
	  } else { // automatically determine adapter
	    for (var i = 0; i < PouchDB.preferredAdapters.length; ++i) {
	      adapterName = PouchDB.preferredAdapters[i];
	      /* istanbul ignore if */
	      if (skipIdb && adapterName === 'idb') {
	        // log it, because this can be confusing during development
	        guardedConsole('log', 'PouchDB is downgrading "' + name + '" to WebSQL to' +
	          ' avoid data loss, because it was already opened with WebSQL.');
	        continue; // keep using websql to avoid user data loss
	      }
	      break;
	    }
	  }

	  var adapter = PouchDB.adapters[adapterName];

	  // if adapter is invalid, then an error will be thrown later
	  var usePrefix = (adapter && 'use_prefix' in adapter) ?
	    adapter.use_prefix : true;

	  return {
	    name: usePrefix ? (PouchDB.prefix + name) : name,
	    adapter: adapterName
	  };
	}

	// OK, so here's the deal. Consider this code:
	//     var db1 = new PouchDB('foo');
	//     var db2 = new PouchDB('foo');
	//     db1.destroy();
	// ^ these two both need to emit 'destroyed' events,
	// as well as the PouchDB constructor itself.
	// So we have one db object (whichever one got destroy() called on it)
	// responsible for emitting the initial event, which then gets emitted
	// by the constructor, which then broadcasts it to any other dbs
	// that may have been created with the same name.
	function prepareForDestruction(self) {

	  var destructionListeners = self.constructor._destructionListeners;

	  function onDestroyed() {
	    self.constructor.emit('destroyed', self.name);
	  }

	  function onConstructorDestroyed() {
	    self.removeListener('destroyed', onDestroyed);
	    self.emit('destroyed', self);
	  }

	  self.once('destroyed', onDestroyed);

	  // in setup.js, the constructor is primed to listen for destroy events
	  if (!destructionListeners.has(self.name)) {
	    destructionListeners.set(self.name, []);
	  }
	  destructionListeners.get(self.name).push(onConstructorDestroyed);
	}

	inherits(PouchDB, AbstractPouchDB);
	function PouchDB(name, opts) {
	  // In Node our test suite only tests this for PouchAlt unfortunately
	  /* istanbul ignore if */
	  if (!(this instanceof PouchDB)) {
	    return new PouchDB(name, opts);
	  }

	  var self = this;
	  opts = opts || {};

	  if (name && typeof name === 'object') {
	    opts = name;
	    name = opts.name;
	    delete opts.name;
	  }

	  this.__opts = opts = clone(opts);

	  self.auto_compaction = opts.auto_compaction;
	  self.prefix = PouchDB.prefix;

	  if (typeof name !== 'string') {
	    throw new Error('Missing/invalid DB name');
	  }

	  var prefixedName = (opts.prefix || '') + name;
	  var backend = parseAdapter(prefixedName, opts);

	  opts.name = backend.name;
	  opts.adapter = opts.adapter || backend.adapter;

	  self.name = name;
	  self._adapter = opts.adapter;
	  debug('pouchdb:adapter')('Picked adapter: ' + opts.adapter);

	  if (!PouchDB.adapters[opts.adapter] ||
	      !PouchDB.adapters[opts.adapter].valid()) {
	    throw new Error('Invalid Adapter: ' + opts.adapter);
	  }

	  AbstractPouchDB.call(self);
	  self.taskqueue = new TaskQueue();

	  self.adapter = opts.adapter;

	  PouchDB.adapters[opts.adapter].call(self, opts, function (err) {
	    if (err) {
	      return self.taskqueue.fail(err);
	    }
	    prepareForDestruction(self);

	    self.emit('created', self);
	    PouchDB.emit('created', self.name);
	    self.taskqueue.ready(self);
	  });

	}

	PouchDB.debug = debug;

	PouchDB.adapters = {};
	PouchDB.preferredAdapters = [];

	PouchDB.prefix = '_pouch_';

	var eventEmitter = new events.EventEmitter();

	function setUpEventEmitter(Pouch) {
	  Object.keys(events.EventEmitter.prototype).forEach(function (key) {
	    if (typeof events.EventEmitter.prototype[key] === 'function') {
	      Pouch[key] = eventEmitter[key].bind(eventEmitter);
	    }
	  });

	  // these are created in constructor.js, and allow us to notify each DB with
	  // the same name that it was destroyed, via the constructor object
	  var destructListeners = Pouch._destructionListeners = new _Map();
	  Pouch.on('destroyed', function onConstructorDestroyed(name) {
	    destructListeners.get(name).forEach(function (callback) {
	      callback();
	    });
	    destructListeners.delete(name);
	  });
	}

	setUpEventEmitter(PouchDB);

	PouchDB.adapter = function (id, obj, addToPreferredAdapters) {
	  /* istanbul ignore else */
	  if (obj.valid()) {
	    PouchDB.adapters[id] = obj;
	    if (addToPreferredAdapters) {
	      PouchDB.preferredAdapters.push(id);
	    }
	  }
	};

	PouchDB.plugin = function (obj) {
	  if (typeof obj === 'function') { // function style for plugins
	    obj(PouchDB);
	  } else if (typeof obj !== 'object' || Object.keys(obj).length === 0){
	    throw new Error('Invalid plugin: object passed in is empty or not an object');
	  } else {
	    Object.keys(obj).forEach(function (id) { // object style for plugins
	      PouchDB.prototype[id] = obj[id];
	    });
	  }
	  return PouchDB;
	};

	PouchDB.defaults = function (defaultOpts) {
	  function PouchAlt(name, opts) {
	    if (!(this instanceof PouchAlt)) {
	      return new PouchAlt(name, opts);
	    }

	    opts = opts || {};

	    if (name && typeof name === 'object') {
	      opts = name;
	      name = opts.name;
	      delete opts.name;
	    }

	    opts = jsExtend.extend({}, defaultOpts, opts);
	    PouchDB.call(this, name, opts);
	  }

	  inherits(PouchAlt, PouchDB);

	  PouchAlt.preferredAdapters = PouchDB.preferredAdapters.slice();
	  Object.keys(PouchDB).forEach(function (key) {
	    if (!(key in PouchAlt)) {
	      PouchAlt[key] = PouchDB[key];
	    }
	  });

	  return PouchAlt;
	};

	// managed automatically by set-version.js
	var version = "6.0.4";

	PouchDB.version = version;

	function toObject(array) {
	  return array.reduce(function (obj, item) {
	    obj[item] = true;
	    return obj;
	  }, {});
	}
	// List of top level reserved words for doc
	var reservedWords = toObject([
	  '_id',
	  '_rev',
	  '_attachments',
	  '_deleted',
	  '_revisions',
	  '_revs_info',
	  '_conflicts',
	  '_deleted_conflicts',
	  '_local_seq',
	  '_rev_tree',
	  //replication documents
	  '_replication_id',
	  '_replication_state',
	  '_replication_state_time',
	  '_replication_state_reason',
	  '_replication_stats',
	  // Specific to Couchbase Sync Gateway
	  '_removed'
	]);

	// List of reserved words that should end up the document
	var dataWords = toObject([
	  '_attachments',
	  //replication documents
	  '_replication_id',
	  '_replication_state',
	  '_replication_state_time',
	  '_replication_state_reason',
	  '_replication_stats'
	]);

	function parseRevisionInfo(rev) {
	  if (!/^\d+\-./.test(rev)) {
	    return createError(INVALID_REV);
	  }
	  var idx = rev.indexOf('-');
	  var left = rev.substring(0, idx);
	  var right = rev.substring(idx + 1);
	  return {
	    prefix: parseInt(left, 10),
	    id: right
	  };
	}

	function makeRevTreeFromRevisions(revisions, opts) {
	  var pos = revisions.start - revisions.ids.length + 1;

	  var revisionIds = revisions.ids;
	  var ids = [revisionIds[0], opts, []];

	  for (var i = 1, len = revisionIds.length; i < len; i++) {
	    ids = [revisionIds[i], {status: 'missing'}, [ids]];
	  }

	  return [{
	    pos: pos,
	    ids: ids
	  }];
	}

	// Preprocess documents, parse their revisions, assign an id and a
	// revision for new writes that are missing them, etc
	function parseDoc(doc, newEdits) {

	  var nRevNum;
	  var newRevId;
	  var revInfo;
	  var opts = {status: 'available'};
	  if (doc._deleted) {
	    opts.deleted = true;
	  }

	  if (newEdits) {
	    if (!doc._id) {
	      doc._id = uuid();
	    }
	    newRevId = uuid(32, 16).toLowerCase();
	    if (doc._rev) {
	      revInfo = parseRevisionInfo(doc._rev);
	      if (revInfo.error) {
	        return revInfo;
	      }
	      doc._rev_tree = [{
	        pos: revInfo.prefix,
	        ids: [revInfo.id, {status: 'missing'}, [[newRevId, opts, []]]]
	      }];
	      nRevNum = revInfo.prefix + 1;
	    } else {
	      doc._rev_tree = [{
	        pos: 1,
	        ids : [newRevId, opts, []]
	      }];
	      nRevNum = 1;
	    }
	  } else {
	    if (doc._revisions) {
	      doc._rev_tree = makeRevTreeFromRevisions(doc._revisions, opts);
	      nRevNum = doc._revisions.start;
	      newRevId = doc._revisions.ids[0];
	    }
	    if (!doc._rev_tree) {
	      revInfo = parseRevisionInfo(doc._rev);
	      if (revInfo.error) {
	        return revInfo;
	      }
	      nRevNum = revInfo.prefix;
	      newRevId = revInfo.id;
	      doc._rev_tree = [{
	        pos: nRevNum,
	        ids: [newRevId, opts, []]
	      }];
	    }
	  }

	  invalidIdError(doc._id);

	  doc._rev = nRevNum + '-' + newRevId;

	  var result = {metadata : {}, data : {}};
	  for (var key in doc) {
	    /* istanbul ignore else */
	    if (Object.prototype.hasOwnProperty.call(doc, key)) {
	      var specialKey = key[0] === '_';
	      if (specialKey && !reservedWords[key]) {
	        var error = createError(DOC_VALIDATION, key);
	        error.message = DOC_VALIDATION.message + ': ' + key;
	        throw error;
	      } else if (specialKey && !dataWords[key]) {
	        result.metadata[key.slice(1)] = doc[key];
	      } else {
	        result.data[key] = doc[key];
	      }
	    }
	  }
	  return result;
	}

	var atob$1 = function (str) {
	  return atob(str);
	};

	var btoa$1 = function (str) {
	  return btoa(str);
	};

	// Abstracts constructing a Blob object, so it also works in older
	// browsers that don't support the native Blob constructor (e.g.
	// old QtWebKit versions, Android < 4.4).
	function createBlob(parts, properties) {
	  /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
	  parts = parts || [];
	  properties = properties || {};
	  try {
	    return new Blob(parts, properties);
	  } catch (e) {
	    if (e.name !== "TypeError") {
	      throw e;
	    }
	    var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder :
	                  typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder :
	                  typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder :
	                  WebKitBlobBuilder;
	    var builder = new Builder();
	    for (var i = 0; i < parts.length; i += 1) {
	      builder.append(parts[i]);
	    }
	    return builder.getBlob(properties.type);
	  }
	}

	// From http://stackoverflow.com/questions/14967647/ (continues on next line)
	// encode-decode-image-with-base64-breaks-image (2013-04-21)
	function binaryStringToArrayBuffer(bin) {
	  var length = bin.length;
	  var buf = new ArrayBuffer(length);
	  var arr = new Uint8Array(buf);
	  for (var i = 0; i < length; i++) {
	    arr[i] = bin.charCodeAt(i);
	  }
	  return buf;
	}

	function binStringToBluffer(binString, type) {
	  return createBlob([binaryStringToArrayBuffer(binString)], {type: type});
	}

	function b64ToBluffer(b64, type) {
	  return binStringToBluffer(atob$1(b64), type);
	}

	//Can't find original post, but this is close
	//http://stackoverflow.com/questions/6965107/ (continues on next line)
	//converting-between-strings-and-arraybuffers
	function arrayBufferToBinaryString(buffer) {
	  var binary = '';
	  var bytes = new Uint8Array(buffer);
	  var length = bytes.byteLength;
	  for (var i = 0; i < length; i++) {
	    binary += String.fromCharCode(bytes[i]);
	  }
	  return binary;
	}

	// shim for browsers that don't support it
	function readAsBinaryString(blob, callback) {
	  if (typeof FileReader === 'undefined') {
	    // fix for Firefox in a web worker
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=901097
	    return callback(arrayBufferToBinaryString(
	      new FileReaderSync().readAsArrayBuffer(blob)));
	  }

	  var reader = new FileReader();
	  var hasBinaryString = typeof reader.readAsBinaryString === 'function';
	  reader.onloadend = function (e) {
	    var result = e.target.result || '';
	    if (hasBinaryString) {
	      return callback(result);
	    }
	    callback(arrayBufferToBinaryString(result));
	  };
	  if (hasBinaryString) {
	    reader.readAsBinaryString(blob);
	  } else {
	    reader.readAsArrayBuffer(blob);
	  }
	}

	function blobToBinaryString(blobOrBuffer, callback) {
	  readAsBinaryString(blobOrBuffer, function (bin) {
	    callback(bin);
	  });
	}

	function blobToBase64(blobOrBuffer, callback) {
	  blobToBinaryString(blobOrBuffer, function (base64) {
	    callback(btoa$1(base64));
	  });
	}

	// simplified API. universal browser support is assumed
	function readAsArrayBuffer(blob, callback) {
	  if (typeof FileReader === 'undefined') {
	    // fix for Firefox in a web worker:
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=901097
	    return callback(new FileReaderSync().readAsArrayBuffer(blob));
	  }

	  var reader = new FileReader();
	  reader.onloadend = function (e) {
	    var result = e.target.result || new ArrayBuffer(0);
	    callback(result);
	  };
	  reader.readAsArrayBuffer(blob);
	}

	var setImmediateShim = global.setImmediate || global.setTimeout;
	var MD5_CHUNK_SIZE = 32768;

	function rawToBase64(raw) {
	  return btoa$1(raw);
	}

	function sliceBlob(blob, start, end) {
	  if (blob.webkitSlice) {
	    return blob.webkitSlice(start, end);
	  }
	  return blob.slice(start, end);
	}

	function appendBlob(buffer, blob, start, end, callback) {
	  if (start > 0 || end < blob.size) {
	    // only slice blob if we really need to
	    blob = sliceBlob(blob, start, end);
	  }
	  readAsArrayBuffer(blob, function (arrayBuffer) {
	    buffer.append(arrayBuffer);
	    callback();
	  });
	}

	function appendString(buffer, string, start, end, callback) {
	  if (start > 0 || end < string.length) {
	    // only create a substring if we really need to
	    string = string.substring(start, end);
	  }
	  buffer.appendBinary(string);
	  callback();
	}

	function binaryMd5(data, callback) {
	  var inputIsString = typeof data === 'string';
	  var len = inputIsString ? data.length : data.size;
	  var chunkSize = Math.min(MD5_CHUNK_SIZE, len);
	  var chunks = Math.ceil(len / chunkSize);
	  var currentChunk = 0;
	  var buffer = inputIsString ? new Md5() : new Md5.ArrayBuffer();

	  var append = inputIsString ? appendString : appendBlob;

	  function next() {
	    setImmediateShim(loadNextChunk);
	  }

	  function done() {
	    var raw = buffer.end(true);
	    var base64 = rawToBase64(raw);
	    callback(base64);
	    buffer.destroy();
	  }

	  function loadNextChunk() {
	    var start = currentChunk * chunkSize;
	    var end = start + chunkSize;
	    currentChunk++;
	    if (currentChunk < chunks) {
	      append(buffer, data, start, end, next);
	    } else {
	      append(buffer, data, start, end, done);
	    }
	  }
	  loadNextChunk();
	}

	function stringMd5(string) {
	  return Md5.hash(string);
	}

	function parseBase64(data) {
	  try {
	    return atob$1(data);
	  } catch (e) {
	    var err = createError(BAD_ARG,
	      'Attachment is not a valid base64 string');
	    return {error: err};
	  }
	}

	function preprocessString(att, blobType, callback) {
	  var asBinary = parseBase64(att.data);
	  if (asBinary.error) {
	    return callback(asBinary.error);
	  }

	  att.length = asBinary.length;
	  if (blobType === 'blob') {
	    att.data = binStringToBluffer(asBinary, att.content_type);
	  } else if (blobType === 'base64') {
	    att.data = btoa$1(asBinary);
	  } else { // binary
	    att.data = asBinary;
	  }
	  binaryMd5(asBinary, function (result) {
	    att.digest = 'md5-' + result;
	    callback();
	  });
	}

	function preprocessBlob(att, blobType, callback) {
	  binaryMd5(att.data, function (md5) {
	    att.digest = 'md5-' + md5;
	    // size is for blobs (browser), length is for buffers (node)
	    att.length = att.data.size || att.data.length || 0;
	    if (blobType === 'binary') {
	      blobToBinaryString(att.data, function (binString) {
	        att.data = binString;
	        callback();
	      });
	    } else if (blobType === 'base64') {
	      blobToBase64(att.data, function (b64) {
	        att.data = b64;
	        callback();
	      });
	    } else {
	      callback();
	    }
	  });
	}

	function preprocessAttachment(att, blobType, callback) {
	  if (att.stub) {
	    return callback();
	  }
	  if (typeof att.data === 'string') { // input is a base64 string
	    preprocessString(att, blobType, callback);
	  } else { // input is a blob
	    preprocessBlob(att, blobType, callback);
	  }
	}

	function preprocessAttachments(docInfos, blobType, callback) {

	  if (!docInfos.length) {
	    return callback();
	  }

	  var docv = 0;
	  var overallErr;

	  docInfos.forEach(function (docInfo) {
	    var attachments = docInfo.data && docInfo.data._attachments ?
	      Object.keys(docInfo.data._attachments) : [];
	    var recv = 0;

	    if (!attachments.length) {
	      return done();
	    }

	    function processedAttachment(err) {
	      overallErr = err;
	      recv++;
	      if (recv === attachments.length) {
	        done();
	      }
	    }

	    for (var key in docInfo.data._attachments) {
	      if (docInfo.data._attachments.hasOwnProperty(key)) {
	        preprocessAttachment(docInfo.data._attachments[key],
	          blobType, processedAttachment);
	      }
	    }
	  });

	  function done() {
	    docv++;
	    if (docInfos.length === docv) {
	      if (overallErr) {
	        callback(overallErr);
	      } else {
	        callback();
	      }
	    }
	  }
	}

	function updateDoc(revLimit, prev, docInfo, results,
	                   i, cb, writeDoc, newEdits) {

	  if (revExists(prev.rev_tree, docInfo.metadata.rev)) {
	    results[i] = docInfo;
	    return cb();
	  }

	  // sometimes this is pre-calculated. historically not always
	  var previousWinningRev = prev.winningRev || winningRev(prev);
	  var previouslyDeleted = 'deleted' in prev ? prev.deleted :
	    isDeleted(prev, previousWinningRev);
	  var deleted = 'deleted' in docInfo.metadata ? docInfo.metadata.deleted :
	    isDeleted(docInfo.metadata);
	  var isRoot = /^1-/.test(docInfo.metadata.rev);

	  if (previouslyDeleted && !deleted && newEdits && isRoot) {
	    var newDoc = docInfo.data;
	    newDoc._rev = previousWinningRev;
	    newDoc._id = docInfo.metadata.id;
	    docInfo = parseDoc(newDoc, newEdits);
	  }

	  var merged = merge(prev.rev_tree, docInfo.metadata.rev_tree[0], revLimit);

	  var inConflict = newEdits && (((previouslyDeleted && deleted) ||
	    (!previouslyDeleted && merged.conflicts !== 'new_leaf') ||
	    (previouslyDeleted && !deleted && merged.conflicts === 'new_branch')));

	  if (inConflict) {
	    var err = createError(REV_CONFLICT);
	    results[i] = err;
	    return cb();
	  }

	  var newRev = docInfo.metadata.rev;
	  docInfo.metadata.rev_tree = merged.tree;
	  docInfo.stemmedRevs = merged.stemmedRevs || [];
	  /* istanbul ignore else */
	  if (prev.rev_map) {
	    docInfo.metadata.rev_map = prev.rev_map; // used only by leveldb
	  }

	  // recalculate
	  var winningRev$$ = winningRev(docInfo.metadata);
	  var winningRevIsDeleted = isDeleted(docInfo.metadata, winningRev$$);

	  // calculate the total number of documents that were added/removed,
	  // from the perspective of total_rows/doc_count
	  var delta = (previouslyDeleted === winningRevIsDeleted) ? 0 :
	    previouslyDeleted < winningRevIsDeleted ? -1 : 1;

	  var newRevIsDeleted;
	  if (newRev === winningRev$$) {
	    // if the new rev is the same as the winning rev, we can reuse that value
	    newRevIsDeleted = winningRevIsDeleted;
	  } else {
	    // if they're not the same, then we need to recalculate
	    newRevIsDeleted = isDeleted(docInfo.metadata, newRev);
	  }

	  writeDoc(docInfo, winningRev$$, winningRevIsDeleted, newRevIsDeleted,
	    true, delta, i, cb);
	}

	function rootIsMissing(docInfo) {
	  return docInfo.metadata.rev_tree[0].ids[1].status === 'missing';
	}

	function processDocs(revLimit, docInfos, api, fetchedDocs, tx, results,
	                     writeDoc, opts, overallCallback) {

	  // Default to 1000 locally
	  revLimit = revLimit || 1000;

	  function insertDoc(docInfo, resultsIdx, callback) {
	    // Cant insert new deleted documents
	    var winningRev$$ = winningRev(docInfo.metadata);
	    var deleted = isDeleted(docInfo.metadata, winningRev$$);
	    if ('was_delete' in opts && deleted) {
	      results[resultsIdx] = createError(MISSING_DOC, 'deleted');
	      return callback();
	    }

	    // 4712 - detect whether a new document was inserted with a _rev
	    var inConflict = newEdits && rootIsMissing(docInfo);

	    if (inConflict) {
	      var err = createError(REV_CONFLICT);
	      results[resultsIdx] = err;
	      return callback();
	    }

	    var delta = deleted ? 0 : 1;

	    writeDoc(docInfo, winningRev$$, deleted, deleted, false,
	      delta, resultsIdx, callback);
	  }

	  var newEdits = opts.new_edits;
	  var idsToDocs = new _Map();

	  var docsDone = 0;
	  var docsToDo = docInfos.length;

	  function checkAllDocsDone() {
	    if (++docsDone === docsToDo && overallCallback) {
	      overallCallback();
	    }
	  }

	  docInfos.forEach(function (currentDoc, resultsIdx) {

	    if (currentDoc._id && isLocalId(currentDoc._id)) {
	      var fun = currentDoc._deleted ? '_removeLocal' : '_putLocal';
	      api[fun](currentDoc, {ctx: tx}, function (err, res) {
	        results[resultsIdx] = err || res;
	        checkAllDocsDone();
	      });
	      return;
	    }

	    var id = currentDoc.metadata.id;
	    if (idsToDocs.has(id)) {
	      docsToDo--; // duplicate
	      idsToDocs.get(id).push([currentDoc, resultsIdx]);
	    } else {
	      idsToDocs.set(id, [[currentDoc, resultsIdx]]);
	    }
	  });

	  // in the case of new_edits, the user can provide multiple docs
	  // with the same id. these need to be processed sequentially
	  idsToDocs.forEach(function (docs, id) {
	    var numDone = 0;

	    function docWritten() {
	      if (++numDone < docs.length) {
	        nextDoc();
	      } else {
	        checkAllDocsDone();
	      }
	    }
	    function nextDoc() {
	      var value = docs[numDone];
	      var currentDoc = value[0];
	      var resultsIdx = value[1];

	      if (fetchedDocs.has(id)) {
	        updateDoc(revLimit, fetchedDocs.get(id), currentDoc, results,
	          resultsIdx, docWritten, writeDoc, newEdits);
	      } else {
	        // Ensure stemming applies to new writes as well
	        var merged = merge([], currentDoc.metadata.rev_tree[0], revLimit);
	        currentDoc.metadata.rev_tree = merged.tree;
	        currentDoc.stemmedRevs = merged.stemmedRevs || [];
	        insertDoc(currentDoc, resultsIdx, docWritten);
	      }
	    }
	    nextDoc();
	  });
	}

	// IndexedDB requires a versioned database structure, so we use the
	// version here to manage migrations.
	var ADAPTER_VERSION = 5;

	// The object stores created for each database
	// DOC_STORE stores the document meta data, its revision history and state
	// Keyed by document id
	var DOC_STORE = 'document-store';
	// BY_SEQ_STORE stores a particular version of a document, keyed by its
	// sequence id
	var BY_SEQ_STORE = 'by-sequence';
	// Where we store attachments
	var ATTACH_STORE = 'attach-store';
	// Where we store many-to-many relations
	// between attachment digests and seqs
	var ATTACH_AND_SEQ_STORE = 'attach-seq-store';

	// Where we store database-wide meta data in a single record
	// keyed by id: META_STORE
	var META_STORE = 'meta-store';
	// Where we store local documents
	var LOCAL_STORE = 'local-store';
	// Where we detect blob support
	var DETECT_BLOB_SUPPORT_STORE = 'detect-blob-support';

	function slowJsonParse(str) {
	  try {
	    return JSON.parse(str);
	  } catch (e) {
	    /* istanbul ignore next */
	    return vuvuzela.parse(str);
	  }
	}

	function safeJsonParse(str) {
	  // try/catch is deoptimized in V8, leading to slower
	  // times than we'd like to have. Most documents are _not_
	  // huge, and do not require a slower code path just to parse them.
	  // We can be pretty sure that a document under 50000 characters
	  // will not be so deeply nested as to throw a stack overflow error
	  // (depends on the engine and available memory, though, so this is
	  // just a hunch). 50000 was chosen based on the average length
	  // of this string in our test suite, to try to find a number that covers
	  // most of our test cases (26 over this size, 26378 under it).
	  if (str.length < 50000) {
	    return JSON.parse(str);
	  }
	  return slowJsonParse(str);
	}

	function safeJsonStringify(json) {
	  try {
	    return JSON.stringify(json);
	  } catch (e) {
	    /* istanbul ignore next */
	    return vuvuzela.stringify(json);
	  }
	}

	function tryCode(fun, that, args, PouchDB) {
	  try {
	    fun.apply(that, args);
	  } catch (err) {
	    // Shouldn't happen, but in some odd cases
	    // IndexedDB implementations might throw a sync
	    // error, in which case this will at least log it.
	    PouchDB.emit('error', err);
	  }
	}

	var taskQueue = {
	  running: false,
	  queue: []
	};

	function applyNext(PouchDB) {
	  if (taskQueue.running || !taskQueue.queue.length) {
	    return;
	  }
	  taskQueue.running = true;
	  var item = taskQueue.queue.shift();
	  item.action(function (err, res) {
	    tryCode(item.callback, this, [err, res], PouchDB);
	    taskQueue.running = false;
	    process.nextTick(function () {
	      applyNext(PouchDB);
	    });
	  });
	}

	function idbError(callback) {
	  return function (evt) {
	    var message = 'unknown_error';
	    if (evt.target && evt.target.error) {
	      message = evt.target.error.name || evt.target.error.message;
	    }
	    callback(createError(IDB_ERROR, message, evt.type));
	  };
	}

	// Unfortunately, the metadata has to be stringified
	// when it is put into the database, because otherwise
	// IndexedDB can throw errors for deeply-nested objects.
	// Originally we just used JSON.parse/JSON.stringify; now
	// we use this custom vuvuzela library that avoids recursion.
	// If we could do it all over again, we'd probably use a
	// format for the revision trees other than JSON.
	function encodeMetadata(metadata, winningRev, deleted) {
	  return {
	    data: safeJsonStringify(metadata),
	    winningRev: winningRev,
	    deletedOrLocal: deleted ? '1' : '0',
	    seq: metadata.seq, // highest seq for this doc
	    id: metadata.id
	  };
	}

	function decodeMetadata(storedObject) {
	  if (!storedObject) {
	    return null;
	  }
	  var metadata = safeJsonParse(storedObject.data);
	  metadata.winningRev = storedObject.winningRev;
	  metadata.deleted = storedObject.deletedOrLocal === '1';
	  metadata.seq = storedObject.seq;
	  return metadata;
	}

	// read the doc back out from the database. we don't store the
	// _id or _rev because we already have _doc_id_rev.
	function decodeDoc(doc) {
	  if (!doc) {
	    return doc;
	  }
	  var idx = doc._doc_id_rev.lastIndexOf(':');
	  doc._id = doc._doc_id_rev.substring(0, idx - 1);
	  doc._rev = doc._doc_id_rev.substring(idx + 1);
	  delete doc._doc_id_rev;
	  return doc;
	}

	// Read a blob from the database, encoding as necessary
	// and translating from base64 if the IDB doesn't support
	// native Blobs
	function readBlobData(body, type, asBlob, callback) {
	  if (asBlob) {
	    if (!body) {
	      callback(createBlob([''], {type: type}));
	    } else if (typeof body !== 'string') { // we have blob support
	      callback(body);
	    } else { // no blob support
	      callback(b64ToBluffer(body, type));
	    }
	  } else { // as base64 string
	    if (!body) {
	      callback('');
	    } else if (typeof body !== 'string') { // we have blob support
	      readAsBinaryString(body, function (binary) {
	        callback(btoa$1(binary));
	      });
	    } else { // no blob support
	      callback(body);
	    }
	  }
	}

	function fetchAttachmentsIfNecessary(doc, opts, txn, cb) {
	  var attachments = Object.keys(doc._attachments || {});
	  if (!attachments.length) {
	    return cb && cb();
	  }
	  var numDone = 0;

	  function checkDone() {
	    if (++numDone === attachments.length && cb) {
	      cb();
	    }
	  }

	  function fetchAttachment(doc, att) {
	    var attObj = doc._attachments[att];
	    var digest = attObj.digest;
	    var req = txn.objectStore(ATTACH_STORE).get(digest);
	    req.onsuccess = function (e) {
	      attObj.body = e.target.result.body;
	      checkDone();
	    };
	  }

	  attachments.forEach(function (att) {
	    if (opts.attachments && opts.include_docs) {
	      fetchAttachment(doc, att);
	    } else {
	      doc._attachments[att].stub = true;
	      checkDone();
	    }
	  });
	}

	// IDB-specific postprocessing necessary because
	// we don't know whether we stored a true Blob or
	// a base64-encoded string, and if it's a Blob it
	// needs to be read outside of the transaction context
	function postProcessAttachments(results, asBlob) {
	  return PouchPromise.all(results.map(function (row) {
	    if (row.doc && row.doc._attachments) {
	      var attNames = Object.keys(row.doc._attachments);
	      return PouchPromise.all(attNames.map(function (att) {
	        var attObj = row.doc._attachments[att];
	        if (!('body' in attObj)) { // already processed
	          return;
	        }
	        var body = attObj.body;
	        var type = attObj.content_type;
	        return new PouchPromise(function (resolve) {
	          readBlobData(body, type, asBlob, function (data) {
	            row.doc._attachments[att] = jsExtend.extend(
	              pick(attObj, ['digest', 'content_type']),
	              {data: data}
	            );
	            resolve();
	          });
	        });
	      }));
	    }
	  }));
	}

	function compactRevs(revs, docId, txn) {

	  var possiblyOrphanedDigests = [];
	  var seqStore = txn.objectStore(BY_SEQ_STORE);
	  var attStore = txn.objectStore(ATTACH_STORE);
	  var attAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);
	  var count = revs.length;

	  function checkDone() {
	    count--;
	    if (!count) { // done processing all revs
	      deleteOrphanedAttachments();
	    }
	  }

	  function deleteOrphanedAttachments() {
	    if (!possiblyOrphanedDigests.length) {
	      return;
	    }
	    possiblyOrphanedDigests.forEach(function (digest) {
	      var countReq = attAndSeqStore.index('digestSeq').count(
	        IDBKeyRange.bound(
	          digest + '::', digest + '::\uffff', false, false));
	      countReq.onsuccess = function (e) {
	        var count = e.target.result;
	        if (!count) {
	          // orphaned
	          attStore.delete(digest);
	        }
	      };
	    });
	  }

	  revs.forEach(function (rev) {
	    var index = seqStore.index('_doc_id_rev');
	    var key = docId + "::" + rev;
	    index.getKey(key).onsuccess = function (e) {
	      var seq = e.target.result;
	      if (typeof seq !== 'number') {
	        return checkDone();
	      }
	      seqStore.delete(seq);

	      var cursor = attAndSeqStore.index('seq')
	        .openCursor(IDBKeyRange.only(seq));

	      cursor.onsuccess = function (event) {
	        var cursor = event.target.result;
	        if (cursor) {
	          var digest = cursor.value.digestSeq.split('::')[0];
	          possiblyOrphanedDigests.push(digest);
	          attAndSeqStore.delete(cursor.primaryKey);
	          cursor.continue();
	        } else { // done
	          checkDone();
	        }
	      };
	    };
	  });
	}

	function openTransactionSafely(idb, stores, mode) {
	  try {
	    return {
	      txn: idb.transaction(stores, mode)
	    };
	  } catch (err) {
	    return {
	      error: err
	    };
	  }
	}

	function idbBulkDocs(dbOpts, req, opts, api, idb, idbChanges, callback) {
	  var docInfos = req.docs;
	  var txn;
	  var docStore;
	  var bySeqStore;
	  var attachStore;
	  var attachAndSeqStore;
	  var docInfoError;
	  var docCountDelta = 0;

	  for (var i = 0, len = docInfos.length; i < len; i++) {
	    var doc = docInfos[i];
	    if (doc._id && isLocalId(doc._id)) {
	      continue;
	    }
	    doc = docInfos[i] = parseDoc(doc, opts.new_edits);
	    if (doc.error && !docInfoError) {
	      docInfoError = doc;
	    }
	  }

	  if (docInfoError) {
	    return callback(docInfoError);
	  }

	  var results = new Array(docInfos.length);
	  var fetchedDocs = new _Map();
	  var preconditionErrored = false;
	  var blobType = api._meta.blobSupport ? 'blob' : 'base64';

	  preprocessAttachments(docInfos, blobType, function (err) {
	    if (err) {
	      return callback(err);
	    }
	    startTransaction();
	  });

	  function startTransaction() {

	    var stores = [
	      DOC_STORE, BY_SEQ_STORE,
	      ATTACH_STORE,
	      LOCAL_STORE, ATTACH_AND_SEQ_STORE
	    ];
	    var txnResult = openTransactionSafely(idb, stores, 'readwrite');
	    if (txnResult.error) {
	      return callback(txnResult.error);
	    }
	    txn = txnResult.txn;
	    txn.onabort = idbError(callback);
	    txn.ontimeout = idbError(callback);
	    txn.oncomplete = complete;
	    docStore = txn.objectStore(DOC_STORE);
	    bySeqStore = txn.objectStore(BY_SEQ_STORE);
	    attachStore = txn.objectStore(ATTACH_STORE);
	    attachAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);

	    verifyAttachments(function (err) {
	      if (err) {
	        preconditionErrored = true;
	        return callback(err);
	      }
	      fetchExistingDocs();
	    });
	  }

	  function idbProcessDocs() {
	    processDocs(dbOpts.revs_limit, docInfos, api, fetchedDocs,
	                txn, results, writeDoc, opts);
	  }

	  function fetchExistingDocs() {

	    if (!docInfos.length) {
	      return;
	    }

	    var numFetched = 0;

	    function checkDone() {
	      if (++numFetched === docInfos.length) {
	        idbProcessDocs();
	      }
	    }

	    function readMetadata(event) {
	      var metadata = decodeMetadata(event.target.result);

	      if (metadata) {
	        fetchedDocs.set(metadata.id, metadata);
	      }
	      checkDone();
	    }

	    for (var i = 0, len = docInfos.length; i < len; i++) {
	      var docInfo = docInfos[i];
	      if (docInfo._id && isLocalId(docInfo._id)) {
	        checkDone(); // skip local docs
	        continue;
	      }
	      var req = docStore.get(docInfo.metadata.id);
	      req.onsuccess = readMetadata;
	    }
	  }

	  function complete() {
	    if (preconditionErrored) {
	      return;
	    }

	    idbChanges.notify(api._meta.name);
	    api._meta.docCount += docCountDelta;
	    callback(null, results);
	  }

	  function verifyAttachment(digest, callback) {

	    var req = attachStore.get(digest);
	    req.onsuccess = function (e) {
	      if (!e.target.result) {
	        var err = createError(MISSING_STUB,
	          'unknown stub attachment with digest ' +
	          digest);
	        err.status = 412;
	        callback(err);
	      } else {
	        callback();
	      }
	    };
	  }

	  function verifyAttachments(finish) {


	    var digests = [];
	    docInfos.forEach(function (docInfo) {
	      if (docInfo.data && docInfo.data._attachments) {
	        Object.keys(docInfo.data._attachments).forEach(function (filename) {
	          var att = docInfo.data._attachments[filename];
	          if (att.stub) {
	            digests.push(att.digest);
	          }
	        });
	      }
	    });
	    if (!digests.length) {
	      return finish();
	    }
	    var numDone = 0;
	    var err;

	    function checkDone() {
	      if (++numDone === digests.length) {
	        finish(err);
	      }
	    }
	    digests.forEach(function (digest) {
	      verifyAttachment(digest, function (attErr) {
	        if (attErr && !err) {
	          err = attErr;
	        }
	        checkDone();
	      });
	    });
	  }

	  function writeDoc(docInfo, winningRev, winningRevIsDeleted, newRevIsDeleted,
	                    isUpdate, delta, resultsIdx, callback) {

	    docCountDelta += delta;

	    docInfo.metadata.winningRev = winningRev;
	    docInfo.metadata.deleted = winningRevIsDeleted;

	    var doc = docInfo.data;
	    doc._id = docInfo.metadata.id;
	    doc._rev = docInfo.metadata.rev;

	    if (newRevIsDeleted) {
	      doc._deleted = true;
	    }

	    var hasAttachments = doc._attachments &&
	      Object.keys(doc._attachments).length;
	    if (hasAttachments) {
	      return writeAttachments(docInfo, winningRev, winningRevIsDeleted,
	        isUpdate, resultsIdx, callback);
	    }

	    finishDoc(docInfo, winningRev, winningRevIsDeleted,
	      isUpdate, resultsIdx, callback);
	  }

	  function finishDoc(docInfo, winningRev, winningRevIsDeleted,
	                     isUpdate, resultsIdx, callback) {

	    var doc = docInfo.data;
	    var metadata = docInfo.metadata;

	    doc._doc_id_rev = metadata.id + '::' + metadata.rev;
	    delete doc._id;
	    delete doc._rev;

	    function afterPutDoc(e) {
	      var revsToDelete = docInfo.stemmedRevs || [];

	      if (isUpdate && api.auto_compaction) {
	        revsToDelete = revsToDelete.concat(compactTree(docInfo.metadata));
	      }

	      if (revsToDelete && revsToDelete.length) {
	        compactRevs(revsToDelete, docInfo.metadata.id, txn);
	      }

	      metadata.seq = e.target.result;
	      // Current _rev is calculated from _rev_tree on read
	      delete metadata.rev;
	      var metadataToStore = encodeMetadata(metadata, winningRev,
	        winningRevIsDeleted);
	      var metaDataReq = docStore.put(metadataToStore);
	      metaDataReq.onsuccess = afterPutMetadata;
	    }

	    function afterPutDocError(e) {
	      // ConstraintError, need to update, not put (see #1638 for details)
	      e.preventDefault(); // avoid transaction abort
	      e.stopPropagation(); // avoid transaction onerror
	      var index = bySeqStore.index('_doc_id_rev');
	      var getKeyReq = index.getKey(doc._doc_id_rev);
	      getKeyReq.onsuccess = function (e) {
	        var putReq = bySeqStore.put(doc, e.target.result);
	        putReq.onsuccess = afterPutDoc;
	      };
	    }

	    function afterPutMetadata() {
	      results[resultsIdx] = {
	        ok: true,
	        id: metadata.id,
	        rev: winningRev
	      };
	      fetchedDocs.set(docInfo.metadata.id, docInfo.metadata);
	      insertAttachmentMappings(docInfo, metadata.seq, callback);
	    }

	    var putReq = bySeqStore.put(doc);

	    putReq.onsuccess = afterPutDoc;
	    putReq.onerror = afterPutDocError;
	  }

	  function writeAttachments(docInfo, winningRev, winningRevIsDeleted,
	                            isUpdate, resultsIdx, callback) {


	    var doc = docInfo.data;

	    var numDone = 0;
	    var attachments = Object.keys(doc._attachments);

	    function collectResults() {
	      if (numDone === attachments.length) {
	        finishDoc(docInfo, winningRev, winningRevIsDeleted,
	          isUpdate, resultsIdx, callback);
	      }
	    }

	    function attachmentSaved() {
	      numDone++;
	      collectResults();
	    }

	    attachments.forEach(function (key) {
	      var att = docInfo.data._attachments[key];
	      if (!att.stub) {
	        var data = att.data;
	        delete att.data;
	        att.revpos = parseInt(winningRev, 10);
	        var digest = att.digest;
	        saveAttachment(digest, data, attachmentSaved);
	      } else {
	        numDone++;
	        collectResults();
	      }
	    });
	  }

	  // map seqs to attachment digests, which
	  // we will need later during compaction
	  function insertAttachmentMappings(docInfo, seq, callback) {

	    var attsAdded = 0;
	    var attsToAdd = Object.keys(docInfo.data._attachments || {});

	    if (!attsToAdd.length) {
	      return callback();
	    }

	    function checkDone() {
	      if (++attsAdded === attsToAdd.length) {
	        callback();
	      }
	    }

	    function add(att) {
	      var digest = docInfo.data._attachments[att].digest;
	      var req = attachAndSeqStore.put({
	        seq: seq,
	        digestSeq: digest + '::' + seq
	      });

	      req.onsuccess = checkDone;
	      req.onerror = function (e) {
	        // this callback is for a constaint error, which we ignore
	        // because this docid/rev has already been associated with
	        // the digest (e.g. when new_edits == false)
	        e.preventDefault(); // avoid transaction abort
	        e.stopPropagation(); // avoid transaction onerror
	        checkDone();
	      };
	    }
	    for (var i = 0; i < attsToAdd.length; i++) {
	      add(attsToAdd[i]); // do in parallel
	    }
	  }

	  function saveAttachment(digest, data, callback) {


	    var getKeyReq = attachStore.count(digest);
	    getKeyReq.onsuccess = function (e) {
	      var count = e.target.result;
	      if (count) {
	        return callback(); // already exists
	      }
	      var newAtt = {
	        digest: digest,
	        body: data
	      };
	      var putReq = attachStore.put(newAtt);
	      putReq.onsuccess = callback;
	    };
	  }
	}

	function createKeyRange(start, end, inclusiveEnd, key, descending) {
	  try {
	    if (start && end) {
	      if (descending) {
	        return IDBKeyRange.bound(end, start, !inclusiveEnd, false);
	      } else {
	        return IDBKeyRange.bound(start, end, false, !inclusiveEnd);
	      }
	    } else if (start) {
	      if (descending) {
	        return IDBKeyRange.upperBound(start);
	      } else {
	        return IDBKeyRange.lowerBound(start);
	      }
	    } else if (end) {
	      if (descending) {
	        return IDBKeyRange.lowerBound(end, !inclusiveEnd);
	      } else {
	        return IDBKeyRange.upperBound(end, !inclusiveEnd);
	      }
	    } else if (key) {
	      return IDBKeyRange.only(key);
	    }
	  } catch (e) {
	    return {error: e};
	  }
	  return null;
	}

	function handleKeyRangeError(api, opts, err, callback) {
	  if (err.name === "DataError" && err.code === 0) {
	    // data error, start is less than end
	    return callback(null, {
	      total_rows: api._meta.docCount,
	      offset: opts.skip,
	      rows: []
	    });
	  }
	  callback(createError(IDB_ERROR, err.name, err.message));
	}

	function idbAllDocs(opts, api, idb, callback) {

	  function allDocsQuery(opts, callback) {
	    var start = 'startkey' in opts ? opts.startkey : false;
	    var end = 'endkey' in opts ? opts.endkey : false;
	    var key = 'key' in opts ? opts.key : false;
	    var skip = opts.skip || 0;
	    var limit = typeof opts.limit === 'number' ? opts.limit : -1;
	    var inclusiveEnd = opts.inclusive_end !== false;
	    var descending = 'descending' in opts && opts.descending ? 'prev' : null;

	    var keyRange = createKeyRange(start, end, inclusiveEnd, key, descending);
	    if (keyRange && keyRange.error) {
	      return handleKeyRangeError(api, opts, keyRange.error, callback);
	    }

	    var stores = [DOC_STORE, BY_SEQ_STORE];

	    if (opts.attachments) {
	      stores.push(ATTACH_STORE);
	    }
	    var txnResult = openTransactionSafely(idb, stores, 'readonly');
	    if (txnResult.error) {
	      return callback(txnResult.error);
	    }
	    var txn = txnResult.txn;
	    var docStore = txn.objectStore(DOC_STORE);
	    var seqStore = txn.objectStore(BY_SEQ_STORE);
	    var cursor = descending ?
	      docStore.openCursor(keyRange, descending) :
	      docStore.openCursor(keyRange);
	    var docIdRevIndex = seqStore.index('_doc_id_rev');
	    var results = [];
	    var docCount = 0;

	    // if the user specifies include_docs=true, then we don't
	    // want to block the main cursor while we're fetching the doc
	    function fetchDocAsynchronously(metadata, row, winningRev) {
	      var key = metadata.id + "::" + winningRev;
	      docIdRevIndex.get(key).onsuccess =  function onGetDoc(e) {
	        row.doc = decodeDoc(e.target.result);
	        if (opts.conflicts) {
	          row.doc._conflicts = collectConflicts(metadata);
	        }
	        fetchAttachmentsIfNecessary(row.doc, opts, txn);
	      };
	    }

	    function allDocsInner(cursor, winningRev, metadata) {
	      var row = {
	        id: metadata.id,
	        key: metadata.id,
	        value: {
	          rev: winningRev
	        }
	      };
	      var deleted = metadata.deleted;
	      if (opts.deleted === 'ok') {
	        results.push(row);
	        // deleted docs are okay with "keys" requests
	        if (deleted) {
	          row.value.deleted = true;
	          row.doc = null;
	        } else if (opts.include_docs) {
	          fetchDocAsynchronously(metadata, row, winningRev);
	        }
	      } else if (!deleted && skip-- <= 0) {
	        results.push(row);
	        if (opts.include_docs) {
	          fetchDocAsynchronously(metadata, row, winningRev);
	        }
	        if (--limit === 0) {
	          return;
	        }
	      }
	      cursor.continue();
	    }

	    function onGetCursor(e) {
	      docCount = api._meta.docCount; // do this within the txn for consistency
	      var cursor = e.target.result;
	      if (!cursor) {
	        return;
	      }
	      var metadata = decodeMetadata(cursor.value);
	      var winningRev = metadata.winningRev;

	      allDocsInner(cursor, winningRev, metadata);
	    }

	    function onResultsReady() {
	      callback(null, {
	        total_rows: docCount,
	        offset: opts.skip,
	        rows: results
	      });
	    }

	    function onTxnComplete() {
	      if (opts.attachments) {
	        postProcessAttachments(results, opts.binary).then(onResultsReady);
	      } else {
	        onResultsReady();
	      }
	    }

	    txn.oncomplete = onTxnComplete;
	    cursor.onsuccess = onGetCursor;
	  }

	  function allDocs(opts, callback) {

	    if (opts.limit === 0) {
	      return callback(null, {
	        total_rows: api._meta.docCount,
	        offset: opts.skip,
	        rows: []
	      });
	    }
	    allDocsQuery(opts, callback);
	  }

	  allDocs(opts, callback);
	}

	//
	// Blobs are not supported in all versions of IndexedDB, notably
	// Chrome <37 and Android <5. In those versions, storing a blob will throw.
	//
	// Various other blob bugs exist in Chrome v37-42 (inclusive).
	// Detecting them is expensive and confusing to users, and Chrome 37-42
	// is at very low usage worldwide, so we do a hacky userAgent check instead.
	//
	// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
	// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
	// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
	//
	function checkBlobSupport(txn) {
	  return new PouchPromise(function (resolve) {
	    var blob = createBlob(['']);
	    txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

	    txn.onabort = function (e) {
	      // If the transaction aborts now its due to not being able to
	      // write to the database, likely due to the disk being full
	      e.preventDefault();
	      e.stopPropagation();
	      resolve(false);
	    };

	    txn.oncomplete = function () {
	      var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
	      var matchedEdge = navigator.userAgent.match(/Edge\//);
	      // MS Edge pretends to be Chrome 42:
	      // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
	      resolve(matchedEdge || !matchedChrome ||
	        parseInt(matchedChrome[1], 10) >= 43);
	    };
	  }).catch(function () {
	    return false; // error, so assume unsupported
	  });
	}

	var cachedDBs = new _Map();
	var blobSupportPromise;
	var idbChanges = new Changes$1();
	var openReqList = new _Map();

	function IdbPouch(opts, callback) {
	  var api = this;

	  taskQueue.queue.push({
	    action: function (thisCallback) {
	      init(api, opts, thisCallback);
	    },
	    callback: callback
	  });
	  applyNext(api.constructor);
	}

	function init(api, opts, callback) {

	  var dbName = opts.name;

	  var idb = null;
	  api._meta = null;

	  // called when creating a fresh new database
	  function createSchema(db) {
	    var docStore = db.createObjectStore(DOC_STORE, {keyPath : 'id'});
	    db.createObjectStore(BY_SEQ_STORE, {autoIncrement: true})
	      .createIndex('_doc_id_rev', '_doc_id_rev', {unique: true});
	    db.createObjectStore(ATTACH_STORE, {keyPath: 'digest'});
	    db.createObjectStore(META_STORE, {keyPath: 'id', autoIncrement: false});
	    db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);

	    // added in v2
	    docStore.createIndex('deletedOrLocal', 'deletedOrLocal', {unique : false});

	    // added in v3
	    db.createObjectStore(LOCAL_STORE, {keyPath: '_id'});

	    // added in v4
	    var attAndSeqStore = db.createObjectStore(ATTACH_AND_SEQ_STORE,
	      {autoIncrement: true});
	    attAndSeqStore.createIndex('seq', 'seq');
	    attAndSeqStore.createIndex('digestSeq', 'digestSeq', {unique: true});
	  }

	  // migration to version 2
	  // unfortunately "deletedOrLocal" is a misnomer now that we no longer
	  // store local docs in the main doc-store, but whaddyagonnado
	  function addDeletedOrLocalIndex(txn, callback) {
	    var docStore = txn.objectStore(DOC_STORE);
	    docStore.createIndex('deletedOrLocal', 'deletedOrLocal', {unique : false});

	    docStore.openCursor().onsuccess = function (event) {
	      var cursor = event.target.result;
	      if (cursor) {
	        var metadata = cursor.value;
	        var deleted = isDeleted(metadata);
	        metadata.deletedOrLocal = deleted ? "1" : "0";
	        docStore.put(metadata);
	        cursor.continue();
	      } else {
	        callback();
	      }
	    };
	  }

	  // migration to version 3 (part 1)
	  function createLocalStoreSchema(db) {
	    db.createObjectStore(LOCAL_STORE, {keyPath: '_id'})
	      .createIndex('_doc_id_rev', '_doc_id_rev', {unique: true});
	  }

	  // migration to version 3 (part 2)
	  function migrateLocalStore(txn, cb) {
	    var localStore = txn.objectStore(LOCAL_STORE);
	    var docStore = txn.objectStore(DOC_STORE);
	    var seqStore = txn.objectStore(BY_SEQ_STORE);

	    var cursor = docStore.openCursor();
	    cursor.onsuccess = function (event) {
	      var cursor = event.target.result;
	      if (cursor) {
	        var metadata = cursor.value;
	        var docId = metadata.id;
	        var local = isLocalId(docId);
	        var rev = winningRev(metadata);
	        if (local) {
	          var docIdRev = docId + "::" + rev;
	          // remove all seq entries
	          // associated with this docId
	          var start = docId + "::";
	          var end = docId + "::~";
	          var index = seqStore.index('_doc_id_rev');
	          var range = IDBKeyRange.bound(start, end, false, false);
	          var seqCursor = index.openCursor(range);
	          seqCursor.onsuccess = function (e) {
	            seqCursor = e.target.result;
	            if (!seqCursor) {
	              // done
	              docStore.delete(cursor.primaryKey);
	              cursor.continue();
	            } else {
	              var data = seqCursor.value;
	              if (data._doc_id_rev === docIdRev) {
	                localStore.put(data);
	              }
	              seqStore.delete(seqCursor.primaryKey);
	              seqCursor.continue();
	            }
	          };
	        } else {
	          cursor.continue();
	        }
	      } else if (cb) {
	        cb();
	      }
	    };
	  }

	  // migration to version 4 (part 1)
	  function addAttachAndSeqStore(db) {
	    var attAndSeqStore = db.createObjectStore(ATTACH_AND_SEQ_STORE,
	      {autoIncrement: true});
	    attAndSeqStore.createIndex('seq', 'seq');
	    attAndSeqStore.createIndex('digestSeq', 'digestSeq', {unique: true});
	  }

	  // migration to version 4 (part 2)
	  function migrateAttsAndSeqs(txn, callback) {
	    var seqStore = txn.objectStore(BY_SEQ_STORE);
	    var attStore = txn.objectStore(ATTACH_STORE);
	    var attAndSeqStore = txn.objectStore(ATTACH_AND_SEQ_STORE);

	    // need to actually populate the table. this is the expensive part,
	    // so as an optimization, check first that this database even
	    // contains attachments
	    var req = attStore.count();
	    req.onsuccess = function (e) {
	      var count = e.target.result;
	      if (!count) {
	        return callback(); // done
	      }

	      seqStore.openCursor().onsuccess = function (e) {
	        var cursor = e.target.result;
	        if (!cursor) {
	          return callback(); // done
	        }
	        var doc = cursor.value;
	        var seq = cursor.primaryKey;
	        var atts = Object.keys(doc._attachments || {});
	        var digestMap = {};
	        for (var j = 0; j < atts.length; j++) {
	          var att = doc._attachments[atts[j]];
	          digestMap[att.digest] = true; // uniq digests, just in case
	        }
	        var digests = Object.keys(digestMap);
	        for (j = 0; j < digests.length; j++) {
	          var digest = digests[j];
	          attAndSeqStore.put({
	            seq: seq,
	            digestSeq: digest + '::' + seq
	          });
	        }
	        cursor.continue();
	      };
	    };
	  }

	  // migration to version 5
	  // Instead of relying on on-the-fly migration of metadata,
	  // this brings the doc-store to its modern form:
	  // - metadata.winningrev
	  // - metadata.seq
	  // - stringify the metadata when storing it
	  function migrateMetadata(txn) {

	    function decodeMetadataCompat(storedObject) {
	      if (!storedObject.data) {
	        // old format, when we didn't store it stringified
	        storedObject.deleted = storedObject.deletedOrLocal === '1';
	        return storedObject;
	      }
	      return decodeMetadata(storedObject);
	    }

	    // ensure that every metadata has a winningRev and seq,
	    // which was previously created on-the-fly but better to migrate
	    var bySeqStore = txn.objectStore(BY_SEQ_STORE);
	    var docStore = txn.objectStore(DOC_STORE);
	    var cursor = docStore.openCursor();
	    cursor.onsuccess = function (e) {
	      var cursor = e.target.result;
	      if (!cursor) {
	        return; // done
	      }
	      var metadata = decodeMetadataCompat(cursor.value);

	      metadata.winningRev = metadata.winningRev ||
	        winningRev(metadata);

	      function fetchMetadataSeq() {
	        // metadata.seq was added post-3.2.0, so if it's missing,
	        // we need to fetch it manually
	        var start = metadata.id + '::';
	        var end = metadata.id + '::\uffff';
	        var req = bySeqStore.index('_doc_id_rev').openCursor(
	          IDBKeyRange.bound(start, end));

	        var metadataSeq = 0;
	        req.onsuccess = function (e) {
	          var cursor = e.target.result;
	          if (!cursor) {
	            metadata.seq = metadataSeq;
	            return onGetMetadataSeq();
	          }
	          var seq = cursor.primaryKey;
	          if (seq > metadataSeq) {
	            metadataSeq = seq;
	          }
	          cursor.continue();
	        };
	      }

	      function onGetMetadataSeq() {
	        var metadataToStore = encodeMetadata(metadata,
	          metadata.winningRev, metadata.deleted);

	        var req = docStore.put(metadataToStore);
	        req.onsuccess = function () {
	          cursor.continue();
	        };
	      }

	      if (metadata.seq) {
	        return onGetMetadataSeq();
	      }

	      fetchMetadataSeq();
	    };

	  }

	  api.type = function () {
	    return 'idb';
	  };

	  api._id = toPromise(function (callback) {
	    callback(null, api._meta.instanceId);
	  });

	  api._bulkDocs = function idb_bulkDocs(req, reqOpts, callback) {
	    idbBulkDocs(opts, req, reqOpts, api, idb, idbChanges, callback);
	  };

	  // First we look up the metadata in the ids database, then we fetch the
	  // current revision(s) from the by sequence store
	  api._get = function idb_get(id, opts, callback) {
	    var doc;
	    var metadata;
	    var err;
	    var txn = opts.ctx;
	    if (!txn) {
	      var txnResult = openTransactionSafely(idb,
	        [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');
	      if (txnResult.error) {
	        return callback(txnResult.error);
	      }
	      txn = txnResult.txn;
	    }

	    function finish() {
	      callback(err, {doc: doc, metadata: metadata, ctx: txn});
	    }

	    txn.objectStore(DOC_STORE).get(id).onsuccess = function (e) {
	      metadata = decodeMetadata(e.target.result);
	      // we can determine the result here if:
	      // 1. there is no such document
	      // 2. the document is deleted and we don't ask about specific rev
	      // When we ask with opts.rev we expect the answer to be either
	      // doc (possibly with _deleted=true) or missing error
	      if (!metadata) {
	        err = createError(MISSING_DOC, 'missing');
	        return finish();
	      }
	      if (isDeleted(metadata) && !opts.rev) {
	        err = createError(MISSING_DOC, "deleted");
	        return finish();
	      }
	      var objectStore = txn.objectStore(BY_SEQ_STORE);

	      var rev = opts.rev || metadata.winningRev;
	      var key = metadata.id + '::' + rev;

	      objectStore.index('_doc_id_rev').get(key).onsuccess = function (e) {
	        doc = e.target.result;
	        if (doc) {
	          doc = decodeDoc(doc);
	        }
	        if (!doc) {
	          err = createError(MISSING_DOC, 'missing');
	          return finish();
	        }
	        finish();
	      };
	    };
	  };

	  api._getAttachment = function (docId, attachId, attachment, opts, callback) {
	    var txn;
	    if (opts.ctx) {
	      txn = opts.ctx;
	    } else {
	      var txnResult = openTransactionSafely(idb,
	        [DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');
	      if (txnResult.error) {
	        return callback(txnResult.error);
	      }
	      txn = txnResult.txn;
	    }
	    var digest = attachment.digest;
	    var type = attachment.content_type;

	    txn.objectStore(ATTACH_STORE).get(digest).onsuccess = function (e) {
	      var body = e.target.result.body;
	      readBlobData(body, type, opts.binary, function (blobData) {
	        callback(null, blobData);
	      });
	    };
	  };

	  api._info = function idb_info(callback) {

	    if (idb === null || !cachedDBs.has(dbName)) {
	      var error = new Error('db isn\'t open');
	      error.id = 'idbNull';
	      return callback(error);
	    }
	    var updateSeq;
	    var docCount;

	    var txnResult = openTransactionSafely(idb, [BY_SEQ_STORE], 'readonly');
	    if (txnResult.error) {
	      return callback(txnResult.error);
	    }
	    var txn = txnResult.txn;
	    var cursor = txn.objectStore(BY_SEQ_STORE).openCursor(null, 'prev');
	    cursor.onsuccess = function (event) {
	      var cursor = event.target.result;
	      updateSeq = cursor ? cursor.key : 0;
	      // count within the same txn for consistency
	      docCount = api._meta.docCount;
	    };

	    txn.oncomplete = function () {
	      callback(null, {
	        doc_count: docCount,
	        update_seq: updateSeq,
	        // for debugging
	        idb_attachment_format: (api._meta.blobSupport ? 'binary' : 'base64')
	      });
	    };
	  };

	  api._allDocs = function idb_allDocs(opts, callback) {
	    idbAllDocs(opts, api, idb, callback);
	  };

	  api._changes = function (opts) {
	    opts = clone(opts);

	    if (opts.continuous) {
	      var id = dbName + ':' + uuid();
	      idbChanges.addListener(dbName, id, api, opts);
	      idbChanges.notify(dbName);
	      return {
	        cancel: function () {
	          idbChanges.removeListener(dbName, id);
	        }
	      };
	    }

	    var docIds = opts.doc_ids && new _Set(opts.doc_ids);

	    opts.since = opts.since || 0;
	    var lastSeq = opts.since;

	    var limit = 'limit' in opts ? opts.limit : -1;
	    if (limit === 0) {
	      limit = 1; // per CouchDB _changes spec
	    }
	    var returnDocs;
	    if ('return_docs' in opts) {
	      returnDocs = opts.return_docs;
	    } else if ('returnDocs' in opts) {
	      // TODO: Remove 'returnDocs' in favor of 'return_docs' in a future release
	      returnDocs = opts.returnDocs;
	    } else {
	      returnDocs = true;
	    }

	    var results = [];
	    var numResults = 0;
	    var filter = filterChange(opts);
	    var docIdsToMetadata = new _Map();

	    var txn;
	    var bySeqStore;
	    var docStore;
	    var docIdRevIndex;

	    function onGetCursor(cursor) {

	      var doc = decodeDoc(cursor.value);
	      var seq = cursor.key;

	      if (docIds && !docIds.has(doc._id)) {
	        return cursor.continue();
	      }

	      var metadata;

	      function onGetMetadata() {
	        if (metadata.seq !== seq) {
	          // some other seq is later
	          return cursor.continue();
	        }

	        lastSeq = seq;

	        if (metadata.winningRev === doc._rev) {
	          return onGetWinningDoc(doc);
	        }

	        fetchWinningDoc();
	      }

	      function fetchWinningDoc() {
	        var docIdRev = doc._id + '::' + metadata.winningRev;
	        var req = docIdRevIndex.get(docIdRev);
	        req.onsuccess = function (e) {
	          onGetWinningDoc(decodeDoc(e.target.result));
	        };
	      }

	      function onGetWinningDoc(winningDoc) {

	        var change = opts.processChange(winningDoc, metadata, opts);
	        change.seq = metadata.seq;

	        var filtered = filter(change);
	        if (typeof filtered === 'object') {
	          return opts.complete(filtered);
	        }

	        if (filtered) {
	          numResults++;
	          if (returnDocs) {
	            results.push(change);
	          }
	          // process the attachment immediately
	          // for the benefit of live listeners
	          if (opts.attachments && opts.include_docs) {
	            fetchAttachmentsIfNecessary(winningDoc, opts, txn, function () {
	              postProcessAttachments([change], opts.binary).then(function () {
	                opts.onChange(change);
	              });
	            });
	          } else {
	            opts.onChange(change);
	          }
	        }
	        if (numResults !== limit) {
	          cursor.continue();
	        }
	      }

	      metadata = docIdsToMetadata.get(doc._id);
	      if (metadata) { // cached
	        return onGetMetadata();
	      }
	      // metadata not cached, have to go fetch it
	      docStore.get(doc._id).onsuccess = function (event) {
	        metadata = decodeMetadata(event.target.result);
	        docIdsToMetadata.set(doc._id, metadata);
	        onGetMetadata();
	      };
	    }

	    function onsuccess(event) {
	      var cursor = event.target.result;

	      if (!cursor) {
	        return;
	      }
	      onGetCursor(cursor);
	    }

	    function fetchChanges() {
	      var objectStores = [DOC_STORE, BY_SEQ_STORE];
	      if (opts.attachments) {
	        objectStores.push(ATTACH_STORE);
	      }
	      var txnResult = openTransactionSafely(idb, objectStores, 'readonly');
	      if (txnResult.error) {
	        return opts.complete(txnResult.error);
	      }
	      txn = txnResult.txn;
	      txn.onabort = idbError(opts.complete);
	      txn.oncomplete = onTxnComplete;

	      bySeqStore = txn.objectStore(BY_SEQ_STORE);
	      docStore = txn.objectStore(DOC_STORE);
	      docIdRevIndex = bySeqStore.index('_doc_id_rev');

	      var req;

	      if (opts.descending) {
	        req = bySeqStore.openCursor(null, 'prev');
	      } else {
	        req = bySeqStore.openCursor(IDBKeyRange.lowerBound(opts.since, true));
	      }

	      req.onsuccess = onsuccess;
	    }

	    fetchChanges();

	    function onTxnComplete() {

	      function finish() {
	        opts.complete(null, {
	          results: results,
	          last_seq: lastSeq
	        });
	      }

	      if (!opts.continuous && opts.attachments) {
	        // cannot guarantee that postProcessing was already done,
	        // so do it again
	        postProcessAttachments(results).then(finish);
	      } else {
	        finish();
	      }
	    }
	  };

	  api._close = function (callback) {
	    if (idb === null) {
	      return callback(createError(NOT_OPEN));
	    }

	    // https://developer.mozilla.org/en-US/docs/IndexedDB/IDBDatabase#close
	    // "Returns immediately and closes the connection in a separate thread..."
	    idb.close();
	    cachedDBs.delete(dbName);
	    idb = null;
	    callback();
	  };

	  api._getRevisionTree = function (docId, callback) {
	    var txnResult = openTransactionSafely(idb, [DOC_STORE], 'readonly');
	    if (txnResult.error) {
	      return callback(txnResult.error);
	    }
	    var txn = txnResult.txn;
	    var req = txn.objectStore(DOC_STORE).get(docId);
	    req.onsuccess = function (event) {
	      var doc = decodeMetadata(event.target.result);
	      if (!doc) {
	        callback(createError(MISSING_DOC));
	      } else {
	        callback(null, doc.rev_tree);
	      }
	    };
	  };

	  // This function removes revisions of document docId
	  // which are listed in revs and sets this document
	  // revision to to rev_tree
	  api._doCompaction = function (docId, revs, callback) {
	    var stores = [
	      DOC_STORE,
	      BY_SEQ_STORE,
	      ATTACH_STORE,
	      ATTACH_AND_SEQ_STORE
	    ];
	    var txnResult = openTransactionSafely(idb, stores, 'readwrite');
	    if (txnResult.error) {
	      return callback(txnResult.error);
	    }
	    var txn = txnResult.txn;

	    var docStore = txn.objectStore(DOC_STORE);

	    docStore.get(docId).onsuccess = function (event) {
	      var metadata = decodeMetadata(event.target.result);
	      traverseRevTree(metadata.rev_tree, function (isLeaf, pos,
	                                                         revHash, ctx, opts) {
	        var rev = pos + '-' + revHash;
	        if (revs.indexOf(rev) !== -1) {
	          opts.status = 'missing';
	        }
	      });
	      compactRevs(revs, docId, txn);
	      var winningRev = metadata.winningRev;
	      var deleted = metadata.deleted;
	      txn.objectStore(DOC_STORE).put(
	        encodeMetadata(metadata, winningRev, deleted));
	    };
	    txn.onabort = idbError(callback);
	    txn.oncomplete = function () {
	      callback();
	    };
	  };


	  api._getLocal = function (id, callback) {
	    var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readonly');
	    if (txnResult.error) {
	      return callback(txnResult.error);
	    }
	    var tx = txnResult.txn;
	    var req = tx.objectStore(LOCAL_STORE).get(id);

	    req.onerror = idbError(callback);
	    req.onsuccess = function (e) {
	      var doc = e.target.result;
	      if (!doc) {
	        callback(createError(MISSING_DOC));
	      } else {
	        delete doc['_doc_id_rev']; // for backwards compat
	        callback(null, doc);
	      }
	    };
	  };

	  api._putLocal = function (doc, opts, callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    delete doc._revisions; // ignore this, trust the rev
	    var oldRev = doc._rev;
	    var id = doc._id;
	    if (!oldRev) {
	      doc._rev = '0-1';
	    } else {
	      doc._rev = '0-' + (parseInt(oldRev.split('-')[1], 10) + 1);
	    }

	    var tx = opts.ctx;
	    var ret;
	    if (!tx) {
	      var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readwrite');
	      if (txnResult.error) {
	        return callback(txnResult.error);
	      }
	      tx = txnResult.txn;
	      tx.onerror = idbError(callback);
	      tx.oncomplete = function () {
	        if (ret) {
	          callback(null, ret);
	        }
	      };
	    }

	    var oStore = tx.objectStore(LOCAL_STORE);
	    var req;
	    if (oldRev) {
	      req = oStore.get(id);
	      req.onsuccess = function (e) {
	        var oldDoc = e.target.result;
	        if (!oldDoc || oldDoc._rev !== oldRev) {
	          callback(createError(REV_CONFLICT));
	        } else { // update
	          var req = oStore.put(doc);
	          req.onsuccess = function () {
	            ret = {ok: true, id: doc._id, rev: doc._rev};
	            if (opts.ctx) { // return immediately
	              callback(null, ret);
	            }
	          };
	        }
	      };
	    } else { // new doc
	      req = oStore.add(doc);
	      req.onerror = function (e) {
	        // constraint error, already exists
	        callback(createError(REV_CONFLICT));
	        e.preventDefault(); // avoid transaction abort
	        e.stopPropagation(); // avoid transaction onerror
	      };
	      req.onsuccess = function () {
	        ret = {ok: true, id: doc._id, rev: doc._rev};
	        if (opts.ctx) { // return immediately
	          callback(null, ret);
	        }
	      };
	    }
	  };

	  api._removeLocal = function (doc, opts, callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    var tx = opts.ctx;
	    if (!tx) {
	      var txnResult = openTransactionSafely(idb, [LOCAL_STORE], 'readwrite');
	      if (txnResult.error) {
	        return callback(txnResult.error);
	      }
	      tx = txnResult.txn;
	      tx.oncomplete = function () {
	        if (ret) {
	          callback(null, ret);
	        }
	      };
	    }
	    var ret;
	    var id = doc._id;
	    var oStore = tx.objectStore(LOCAL_STORE);
	    var req = oStore.get(id);

	    req.onerror = idbError(callback);
	    req.onsuccess = function (e) {
	      var oldDoc = e.target.result;
	      if (!oldDoc || oldDoc._rev !== doc._rev) {
	        callback(createError(MISSING_DOC));
	      } else {
	        oStore.delete(id);
	        ret = {ok: true, id: id, rev: '0-0'};
	        if (opts.ctx) { // return immediately
	          callback(null, ret);
	        }
	      }
	    };
	  };

	  api._destroy = function (opts, callback) {
	    idbChanges.removeAllListeners(dbName);

	    //Close open request for "dbName" database to fix ie delay.
	    var openReq = openReqList.get(dbName);
	    if (openReq && openReq.result) {
	      openReq.result.close();
	      cachedDBs.delete(dbName);
	    }
	    var req = indexedDB.deleteDatabase(dbName);

	    req.onsuccess = function () {
	      //Remove open request from the list.
	      openReqList.delete(dbName);
	      if (hasLocalStorage() && (dbName in localStorage)) {
	        delete localStorage[dbName];
	      }
	      callback(null, { 'ok': true });
	    };

	    req.onerror = idbError(callback);
	  };

	  var cached = cachedDBs.get(dbName);

	  if (cached) {
	    idb = cached.idb;
	    api._meta = cached.global;
	    process.nextTick(function () {
	      callback(null, api);
	    });
	    return;
	  }

	  var req;
	  if (opts.storage) {
	    req = tryStorageOption(dbName, opts.storage);
	  } else {
	    req = indexedDB.open(dbName, ADAPTER_VERSION);
	  }

	  openReqList.set(dbName, req);

	  req.onupgradeneeded = function (e) {
	    var db = e.target.result;
	    if (e.oldVersion < 1) {
	      return createSchema(db); // new db, initial schema
	    }
	    // do migrations

	    var txn = e.currentTarget.transaction;
	    // these migrations have to be done in this function, before
	    // control is returned to the event loop, because IndexedDB

	    if (e.oldVersion < 3) {
	      createLocalStoreSchema(db); // v2 -> v3
	    }
	    if (e.oldVersion < 4) {
	      addAttachAndSeqStore(db); // v3 -> v4
	    }

	    var migrations = [
	      addDeletedOrLocalIndex, // v1 -> v2
	      migrateLocalStore,      // v2 -> v3
	      migrateAttsAndSeqs,     // v3 -> v4
	      migrateMetadata         // v4 -> v5
	    ];

	    var i = e.oldVersion;

	    function next() {
	      var migration = migrations[i - 1];
	      i++;
	      if (migration) {
	        migration(txn, next);
	      }
	    }

	    next();
	  };

	  req.onsuccess = function (e) {

	    idb = e.target.result;

	    idb.onversionchange = function () {
	      idb.close();
	      cachedDBs.delete(dbName);
	    };

	    idb.onabort = function (e) {
	      guardedConsole('error', 'Database has a global failure', e.target.error);
	      idb.close();
	      cachedDBs.delete(dbName);
	    };

	    var txn = idb.transaction([
	      META_STORE,
	      DETECT_BLOB_SUPPORT_STORE,
	      DOC_STORE
	    ], 'readwrite');

	    var req = txn.objectStore(META_STORE).get(META_STORE);

	    var blobSupport = null;
	    var docCount = null;
	    var instanceId = null;

	    req.onsuccess = function (e) {

	      var checkSetupComplete = function () {
	        if (blobSupport === null || docCount === null ||
	            instanceId === null) {
	          return;
	        } else {
	          api._meta = {
	            name: dbName,
	            instanceId: instanceId,
	            blobSupport: blobSupport,
	            docCount: docCount
	          };

	          cachedDBs.set(dbName, {
	            idb: idb,
	            global: api._meta
	          });
	          callback(null, api);
	        }
	      };

	      //
	      // fetch/store the id
	      //

	      var meta = e.target.result || {id: META_STORE};
	      if (dbName  + '_id' in meta) {
	        instanceId = meta[dbName + '_id'];
	        checkSetupComplete();
	      } else {
	        instanceId = uuid();
	        meta[dbName + '_id'] = instanceId;
	        txn.objectStore(META_STORE).put(meta).onsuccess = function () {
	          checkSetupComplete();
	        };
	      }

	      //
	      // check blob support
	      //

	      if (!blobSupportPromise) {
	        // make sure blob support is only checked once
	        blobSupportPromise = checkBlobSupport(txn);
	      }

	      blobSupportPromise.then(function (val) {
	        blobSupport = val;
	        checkSetupComplete();
	      });

	      //
	      // count docs
	      //

	      var index = txn.objectStore(DOC_STORE).index('deletedOrLocal');
	      index.count(IDBKeyRange.only('0')).onsuccess = function (e) {
	        docCount = e.target.result;
	        checkSetupComplete();
	      };

	    };
	  };

	  req.onerror = function () {
	    var msg = 'Failed to open indexedDB, are you in private browsing mode?';
	    guardedConsole('error', msg);
	    callback(createError(IDB_ERROR, msg));
	  };
	}

	IdbPouch.valid = function () {
	  // Issue #2533, we finally gave up on doing bug
	  // detection instead of browser sniffing. Safari brought us
	  // to our knees.
	  var isSafari = typeof openDatabase !== 'undefined' &&
	    /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
	    !/Chrome/.test(navigator.userAgent) &&
	    !/BlackBerry/.test(navigator.platform);

	  // some outdated implementations of IDB that appear on Samsung
	  // and HTC Android devices <4.4 are missing IDBKeyRange
	  return !isSafari && typeof indexedDB !== 'undefined' &&
	    typeof IDBKeyRange !== 'undefined';
	};

	function tryStorageOption(dbName, storage) {
	  try { // option only available in Firefox 26+
	    return indexedDB.open(dbName, {
	      version: ADAPTER_VERSION,
	      storage: storage
	    });
	  } catch(err) {
	      return indexedDB.open(dbName, ADAPTER_VERSION);
	  }
	}

	function IDBPouch (PouchDB) {
	  PouchDB.adapter('idb', IdbPouch, true);
	}

	//
	// Parsing hex strings. Yeah.
	//
	// So basically we need this because of a bug in WebSQL:
	// https://code.google.com/p/chromium/issues/detail?id=422690
	// https://bugs.webkit.org/show_bug.cgi?id=137637
	//
	// UTF-8 and UTF-16 are provided as separate functions
	// for meager performance improvements
	//

	function decodeUtf8(str) {
	  return decodeURIComponent(escape(str));
	}

	function hexToInt(charCode) {
	  // '0'-'9' is 48-57
	  // 'A'-'F' is 65-70
	  // SQLite will only give us uppercase hex
	  return charCode < 65 ? (charCode - 48) : (charCode - 55);
	}


	// Example:
	// pragma encoding=utf8;
	// select hex('A');
	// returns '41'
	function parseHexUtf8(str, start, end) {
	  var result = '';
	  while (start < end) {
	    result += String.fromCharCode(
	      (hexToInt(str.charCodeAt(start++)) << 4) |
	        hexToInt(str.charCodeAt(start++)));
	  }
	  return result;
	}

	// Example:
	// pragma encoding=utf16;
	// select hex('A');
	// returns '4100'
	// notice that the 00 comes after the 41 (i.e. it's swizzled)
	function parseHexUtf16(str, start, end) {
	  var result = '';
	  while (start < end) {
	    // UTF-16, so swizzle the bytes
	    result += String.fromCharCode(
	      (hexToInt(str.charCodeAt(start + 2)) << 12) |
	        (hexToInt(str.charCodeAt(start + 3)) << 8) |
	        (hexToInt(str.charCodeAt(start)) << 4) |
	        hexToInt(str.charCodeAt(start + 1)));
	    start += 4;
	  }
	  return result;
	}

	function parseHexString(str, encoding) {
	  if (encoding === 'UTF-8') {
	    return decodeUtf8(parseHexUtf8(str, 0, str.length));
	  } else {
	    return parseHexUtf16(str, 0, str.length);
	  }
	}

	function quote(str) {
	  return "'" + str + "'";
	}

	var ADAPTER_VERSION$1 = 7; // used to manage migrations

	// The object stores created for each database
	// DOC_STORE stores the document meta data, its revision history and state
	var DOC_STORE$1 = quote('document-store');
	// BY_SEQ_STORE stores a particular version of a document, keyed by its
	// sequence id
	var BY_SEQ_STORE$1 = quote('by-sequence');
	// Where we store attachments
	var ATTACH_STORE$1 = quote('attach-store');
	var LOCAL_STORE$1 = quote('local-store');
	var META_STORE$1 = quote('metadata-store');
	// where we store many-to-many relations between attachment
	// digests and seqs
	var ATTACH_AND_SEQ_STORE$1 = quote('attach-seq-store');

	// escapeBlob and unescapeBlob are workarounds for a websql bug:
	// https://code.google.com/p/chromium/issues/detail?id=422690
	// https://bugs.webkit.org/show_bug.cgi?id=137637
	// The goal is to never actually insert the \u0000 character
	// in the database.
	function escapeBlob(str) {
	  return str
	    .replace(/\u0002/g, '\u0002\u0002')
	    .replace(/\u0001/g, '\u0001\u0002')
	    .replace(/\u0000/g, '\u0001\u0001');
	}

	function unescapeBlob(str) {
	  return str
	    .replace(/\u0001\u0001/g, '\u0000')
	    .replace(/\u0001\u0002/g, '\u0001')
	    .replace(/\u0002\u0002/g, '\u0002');
	}

	function stringifyDoc(doc) {
	  // don't bother storing the id/rev. it uses lots of space,
	  // in persistent map/reduce especially
	  delete doc._id;
	  delete doc._rev;
	  return JSON.stringify(doc);
	}

	function unstringifyDoc(doc, id, rev) {
	  doc = JSON.parse(doc);
	  doc._id = id;
	  doc._rev = rev;
	  return doc;
	}

	// question mark groups IN queries, e.g. 3 -> '(?,?,?)'
	function qMarks(num) {
	  var s = '(';
	  while (num--) {
	    s += '?';
	    if (num) {
	      s += ',';
	    }
	  }
	  return s + ')';
	}

	function select(selector, table, joiner, where, orderBy) {
	  return 'SELECT ' + selector + ' FROM ' +
	    (typeof table === 'string' ? table : table.join(' JOIN ')) +
	    (joiner ? (' ON ' + joiner) : '') +
	    (where ? (' WHERE ' +
	    (typeof where === 'string' ? where : where.join(' AND '))) : '') +
	    (orderBy ? (' ORDER BY ' + orderBy) : '');
	}

	function compactRevs$1(revs, docId, tx) {

	  if (!revs.length) {
	    return;
	  }

	  var numDone = 0;
	  var seqs = [];

	  function checkDone() {
	    if (++numDone === revs.length) { // done
	      deleteOrphans();
	    }
	  }

	  function deleteOrphans() {
	    // find orphaned attachment digests

	    if (!seqs.length) {
	      return;
	    }

	    var sql = 'SELECT DISTINCT digest AS digest FROM ' +
	      ATTACH_AND_SEQ_STORE$1 + ' WHERE seq IN ' + qMarks(seqs.length);

	    tx.executeSql(sql, seqs, function (tx, res) {

	      var digestsToCheck = [];
	      for (var i = 0; i < res.rows.length; i++) {
	        digestsToCheck.push(res.rows.item(i).digest);
	      }
	      if (!digestsToCheck.length) {
	        return;
	      }

	      var sql = 'DELETE FROM ' + ATTACH_AND_SEQ_STORE$1 +
	        ' WHERE seq IN (' +
	        seqs.map(function () { return '?'; }).join(',') +
	        ')';
	      tx.executeSql(sql, seqs, function (tx) {

	        var sql = 'SELECT digest FROM ' + ATTACH_AND_SEQ_STORE$1 +
	          ' WHERE digest IN (' +
	          digestsToCheck.map(function () { return '?'; }).join(',') +
	          ')';
	        tx.executeSql(sql, digestsToCheck, function (tx, res) {
	          var nonOrphanedDigests = new _Set();
	          for (var i = 0; i < res.rows.length; i++) {
	            nonOrphanedDigests.add(res.rows.item(i).digest);
	          }
	          digestsToCheck.forEach(function (digest) {
	            if (nonOrphanedDigests.has(digest)) {
	              return;
	            }
	            tx.executeSql(
	              'DELETE FROM ' + ATTACH_AND_SEQ_STORE$1 + ' WHERE digest=?',
	              [digest]);
	            tx.executeSql(
	              'DELETE FROM ' + ATTACH_STORE$1 + ' WHERE digest=?', [digest]);
	          });
	        });
	      });
	    });
	  }

	  // update by-seq and attach stores in parallel
	  revs.forEach(function (rev) {
	    var sql = 'SELECT seq FROM ' + BY_SEQ_STORE$1 +
	      ' WHERE doc_id=? AND rev=?';

	    tx.executeSql(sql, [docId, rev], function (tx, res) {
	      if (!res.rows.length) { // already deleted
	        return checkDone();
	      }
	      var seq = res.rows.item(0).seq;
	      seqs.push(seq);

	      tx.executeSql(
	        'DELETE FROM ' + BY_SEQ_STORE$1 + ' WHERE seq=?', [seq], checkDone);
	    });
	  });
	}

	function websqlError(callback) {
	  return function (event) {
	    guardedConsole('error', 'WebSQL threw an error', event);
	    // event may actually be a SQLError object, so report is as such
	    var errorNameMatch = event && event.constructor.toString()
	        .match(/function ([^\(]+)/);
	    var errorName = (errorNameMatch && errorNameMatch[1]) || event.type;
	    var errorReason = event.target || event.message;
	    callback(createError(WSQ_ERROR, errorReason, errorName));
	  };
	}

	function getSize(opts) {
	  if ('size' in opts) {
	    // triggers immediate popup in iOS, fixes #2347
	    // e.g. 5000001 asks for 5 MB, 10000001 asks for 10 MB,
	    return opts.size * 1000000;
	  }
	  // In iOS, doesn't matter as long as it's <= 5000000.
	  // Except that if you request too much, our tests fail
	  // because of the native "do you accept?" popup.
	  // In Android <=4.3, this value is actually used as an
	  // honest-to-god ceiling for data, so we need to
	  // set it to a decently high number.
	  var isAndroid = typeof navigator !== 'undefined' &&
	    /Android/.test(navigator.userAgent);
	  return isAndroid ? 5000000 : 1; // in PhantomJS, if you use 0 it will crash
	}

	function websqlBulkDocs(dbOpts, req, opts, api, db, websqlChanges, callback) {
	  var newEdits = opts.new_edits;
	  var userDocs = req.docs;

	  // Parse the docs, give them a sequence number for the result
	  var docInfos = userDocs.map(function (doc) {
	    if (doc._id && isLocalId(doc._id)) {
	      return doc;
	    }
	    var newDoc = parseDoc(doc, newEdits);
	    return newDoc;
	  });

	  var docInfoErrors = docInfos.filter(function (docInfo) {
	    return docInfo.error;
	  });
	  if (docInfoErrors.length) {
	    return callback(docInfoErrors[0]);
	  }

	  var tx;
	  var results = new Array(docInfos.length);
	  var fetchedDocs = new _Map();

	  var preconditionErrored;
	  function complete() {
	    if (preconditionErrored) {
	      return callback(preconditionErrored);
	    }
	    websqlChanges.notify(api._name);
	    api._docCount = -1; // invalidate
	    callback(null, results);
	  }

	  function verifyAttachment(digest, callback) {
	    var sql = 'SELECT count(*) as cnt FROM ' + ATTACH_STORE$1 +
	      ' WHERE digest=?';
	    tx.executeSql(sql, [digest], function (tx, result) {
	      if (result.rows.item(0).cnt === 0) {
	        var err = createError(MISSING_STUB,
	          'unknown stub attachment with digest ' +
	          digest);
	        callback(err);
	      } else {
	        callback();
	      }
	    });
	  }

	  function verifyAttachments(finish) {
	    var digests = [];
	    docInfos.forEach(function (docInfo) {
	      if (docInfo.data && docInfo.data._attachments) {
	        Object.keys(docInfo.data._attachments).forEach(function (filename) {
	          var att = docInfo.data._attachments[filename];
	          if (att.stub) {
	            digests.push(att.digest);
	          }
	        });
	      }
	    });
	    if (!digests.length) {
	      return finish();
	    }
	    var numDone = 0;
	    var err;

	    function checkDone() {
	      if (++numDone === digests.length) {
	        finish(err);
	      }
	    }
	    digests.forEach(function (digest) {
	      verifyAttachment(digest, function (attErr) {
	        if (attErr && !err) {
	          err = attErr;
	        }
	        checkDone();
	      });
	    });
	  }

	  function writeDoc(docInfo, winningRev, winningRevIsDeleted, newRevIsDeleted,
	                    isUpdate, delta, resultsIdx, callback) {

	    function finish() {
	      var data = docInfo.data;
	      var deletedInt = newRevIsDeleted ? 1 : 0;

	      var id = data._id;
	      var rev = data._rev;
	      var json = stringifyDoc(data);
	      var sql = 'INSERT INTO ' + BY_SEQ_STORE$1 +
	        ' (doc_id, rev, json, deleted) VALUES (?, ?, ?, ?);';
	      var sqlArgs = [id, rev, json, deletedInt];

	      // map seqs to attachment digests, which
	      // we will need later during compaction
	      function insertAttachmentMappings(seq, callback) {
	        var attsAdded = 0;
	        var attsToAdd = Object.keys(data._attachments || {});

	        if (!attsToAdd.length) {
	          return callback();
	        }
	        function checkDone() {
	          if (++attsAdded === attsToAdd.length) {
	            callback();
	          }
	          return false; // ack handling a constraint error
	        }
	        function add(att) {
	          var sql = 'INSERT INTO ' + ATTACH_AND_SEQ_STORE$1 +
	            ' (digest, seq) VALUES (?,?)';
	          var sqlArgs = [data._attachments[att].digest, seq];
	          tx.executeSql(sql, sqlArgs, checkDone, checkDone);
	          // second callback is for a constaint error, which we ignore
	          // because this docid/rev has already been associated with
	          // the digest (e.g. when new_edits == false)
	        }
	        for (var i = 0; i < attsToAdd.length; i++) {
	          add(attsToAdd[i]); // do in parallel
	        }
	      }

	      tx.executeSql(sql, sqlArgs, function (tx, result) {
	        var seq = result.insertId;
	        insertAttachmentMappings(seq, function () {
	          dataWritten(tx, seq);
	        });
	      }, function () {
	        // constraint error, recover by updating instead (see #1638)
	        var fetchSql = select('seq', BY_SEQ_STORE$1, null,
	          'doc_id=? AND rev=?');
	        tx.executeSql(fetchSql, [id, rev], function (tx, res) {
	          var seq = res.rows.item(0).seq;
	          var sql = 'UPDATE ' + BY_SEQ_STORE$1 +
	            ' SET json=?, deleted=? WHERE doc_id=? AND rev=?;';
	          var sqlArgs = [json, deletedInt, id, rev];
	          tx.executeSql(sql, sqlArgs, function (tx) {
	            insertAttachmentMappings(seq, function () {
	              dataWritten(tx, seq);
	            });
	          });
	        });
	        return false; // ack that we've handled the error
	      });
	    }

	    function collectResults(attachmentErr) {
	      if (!err) {
	        if (attachmentErr) {
	          err = attachmentErr;
	          callback(err);
	        } else if (recv === attachments.length) {
	          finish();
	        }
	      }
	    }

	    var err = null;
	    var recv = 0;

	    docInfo.data._id = docInfo.metadata.id;
	    docInfo.data._rev = docInfo.metadata.rev;
	    var attachments = Object.keys(docInfo.data._attachments || {});


	    if (newRevIsDeleted) {
	      docInfo.data._deleted = true;
	    }

	    function attachmentSaved(err) {
	      recv++;
	      collectResults(err);
	    }

	    attachments.forEach(function (key) {
	      var att = docInfo.data._attachments[key];
	      if (!att.stub) {
	        var data = att.data;
	        delete att.data;
	        att.revpos = parseInt(winningRev, 10);
	        var digest = att.digest;
	        saveAttachment(digest, data, attachmentSaved);
	      } else {
	        recv++;
	        collectResults();
	      }
	    });

	    if (!attachments.length) {
	      finish();
	    }

	    function dataWritten(tx, seq) {
	      var id = docInfo.metadata.id;

	      var revsToCompact = docInfo.stemmedRevs || [];
	      if (isUpdate && api.auto_compaction) {
	        revsToCompact = compactTree(docInfo.metadata).concat(revsToCompact);
	      }
	      if (revsToCompact.length) {
	        compactRevs$1(revsToCompact, id, tx);
	      }

	      docInfo.metadata.seq = seq;
	      delete docInfo.metadata.rev;

	      var sql = isUpdate ?
	      'UPDATE ' + DOC_STORE$1 +
	      ' SET json=?, max_seq=?, winningseq=' +
	      '(SELECT seq FROM ' + BY_SEQ_STORE$1 +
	      ' WHERE doc_id=' + DOC_STORE$1 + '.id AND rev=?) WHERE id=?'
	        : 'INSERT INTO ' + DOC_STORE$1 +
	      ' (id, winningseq, max_seq, json) VALUES (?,?,?,?);';
	      var metadataStr = safeJsonStringify(docInfo.metadata);
	      var params = isUpdate ?
	        [metadataStr, seq, winningRev, id] :
	        [id, seq, seq, metadataStr];
	      tx.executeSql(sql, params, function () {
	        results[resultsIdx] = {
	          ok: true,
	          id: docInfo.metadata.id,
	          rev: winningRev
	        };
	        fetchedDocs.set(id, docInfo.metadata);
	        callback();
	      });
	    }
	  }

	  function websqlProcessDocs() {
	    processDocs(dbOpts.revs_limit, docInfos, api, fetchedDocs, tx,
	                results, writeDoc, opts);
	  }

	  function fetchExistingDocs(callback) {
	    if (!docInfos.length) {
	      return callback();
	    }

	    var numFetched = 0;

	    function checkDone() {
	      if (++numFetched === docInfos.length) {
	        callback();
	      }
	    }

	    docInfos.forEach(function (docInfo) {
	      if (docInfo._id && isLocalId(docInfo._id)) {
	        return checkDone(); // skip local docs
	      }
	      var id = docInfo.metadata.id;
	      tx.executeSql('SELECT json FROM ' + DOC_STORE$1 +
	      ' WHERE id = ?', [id], function (tx, result) {
	        if (result.rows.length) {
	          var metadata = safeJsonParse(result.rows.item(0).json);
	          fetchedDocs.set(id, metadata);
	        }
	        checkDone();
	      });
	    });
	  }

	  function saveAttachment(digest, data, callback) {
	    var sql = 'SELECT digest FROM ' + ATTACH_STORE$1 + ' WHERE digest=?';
	    tx.executeSql(sql, [digest], function (tx, result) {
	      if (result.rows.length) { // attachment already exists
	        return callback();
	      }
	      // we could just insert before selecting and catch the error,
	      // but my hunch is that it's cheaper not to serialize the blob
	      // from JS to C if we don't have to (TODO: confirm this)
	      sql = 'INSERT INTO ' + ATTACH_STORE$1 +
	      ' (digest, body, escaped) VALUES (?,?,1)';
	      tx.executeSql(sql, [digest, escapeBlob(data)], function () {
	        callback();
	      }, function () {
	        // ignore constaint errors, means it already exists
	        callback();
	        return false; // ack we handled the error
	      });
	    });
	  }

	  preprocessAttachments(docInfos, 'binary', function (err) {
	    if (err) {
	      return callback(err);
	    }
	    db.transaction(function (txn) {
	      tx = txn;
	      verifyAttachments(function (err) {
	        if (err) {
	          preconditionErrored = err;
	        } else {
	          fetchExistingDocs(websqlProcessDocs);
	        }
	      });
	    }, websqlError(callback), complete);
	  });
	}

	var cachedDatabases = new _Map();

	// openDatabase passed in through opts (e.g. for node-websql)
	function openDatabaseWithOpts(opts) {
	  return opts.websql(opts.name, opts.version, opts.description, opts.size);
	}

	function openDBSafely(opts) {
	  try {
	    return {
	      db: openDatabaseWithOpts(opts)
	    };
	  } catch (err) {
	    return {
	      error: err
	    };
	  }
	}

	function openDB$1(opts) {
	  var cachedResult = cachedDatabases.get(opts.name);
	  if (!cachedResult) {
	    cachedResult = openDBSafely(opts);
	    cachedDatabases.set(opts.name, cachedResult);
	  }
	  return cachedResult;
	}

	var websqlChanges = new Changes$1();

	function fetchAttachmentsIfNecessary$1(doc, opts, api, txn, cb) {
	  var attachments = Object.keys(doc._attachments || {});
	  if (!attachments.length) {
	    return cb && cb();
	  }
	  var numDone = 0;

	  function checkDone() {
	    if (++numDone === attachments.length && cb) {
	      cb();
	    }
	  }

	  function fetchAttachment(doc, att) {
	    var attObj = doc._attachments[att];
	    var attOpts = {binary: opts.binary, ctx: txn};
	    api._getAttachment(doc._id, att, attObj, attOpts, function (_, data) {
	      doc._attachments[att] = jsExtend.extend(
	        pick(attObj, ['digest', 'content_type']),
	        { data: data }
	      );
	      checkDone();
	    });
	  }

	  attachments.forEach(function (att) {
	    if (opts.attachments && opts.include_docs) {
	      fetchAttachment(doc, att);
	    } else {
	      doc._attachments[att].stub = true;
	      checkDone();
	    }
	  });
	}

	var POUCH_VERSION = 1;

	// these indexes cover the ground for most allDocs queries
	var BY_SEQ_STORE_DELETED_INDEX_SQL =
	  'CREATE INDEX IF NOT EXISTS \'by-seq-deleted-idx\' ON ' +
	  BY_SEQ_STORE$1 + ' (seq, deleted)';
	var BY_SEQ_STORE_DOC_ID_REV_INDEX_SQL =
	  'CREATE UNIQUE INDEX IF NOT EXISTS \'by-seq-doc-id-rev\' ON ' +
	    BY_SEQ_STORE$1 + ' (doc_id, rev)';
	var DOC_STORE_WINNINGSEQ_INDEX_SQL =
	  'CREATE INDEX IF NOT EXISTS \'doc-winningseq-idx\' ON ' +
	  DOC_STORE$1 + ' (winningseq)';
	var ATTACH_AND_SEQ_STORE_SEQ_INDEX_SQL =
	  'CREATE INDEX IF NOT EXISTS \'attach-seq-seq-idx\' ON ' +
	    ATTACH_AND_SEQ_STORE$1 + ' (seq)';
	var ATTACH_AND_SEQ_STORE_ATTACH_INDEX_SQL =
	  'CREATE UNIQUE INDEX IF NOT EXISTS \'attach-seq-digest-idx\' ON ' +
	    ATTACH_AND_SEQ_STORE$1 + ' (digest, seq)';

	var DOC_STORE_AND_BY_SEQ_JOINER = BY_SEQ_STORE$1 +
	  '.seq = ' + DOC_STORE$1 + '.winningseq';

	var SELECT_DOCS = BY_SEQ_STORE$1 + '.seq AS seq, ' +
	  BY_SEQ_STORE$1 + '.deleted AS deleted, ' +
	  BY_SEQ_STORE$1 + '.json AS data, ' +
	  BY_SEQ_STORE$1 + '.rev AS rev, ' +
	  DOC_STORE$1 + '.json AS metadata';

	function WebSqlPouch$1(opts, callback) {
	  var api = this;
	  var instanceId = null;
	  var size = getSize(opts);
	  var idRequests = [];
	  var encoding;

	  api._docCount = -1; // cache sqlite count(*) for performance
	  api._name = opts.name;

	  // extend the options here, because sqlite plugin has a ton of options
	  // and they are constantly changing, so it's more prudent to allow anything
	  var websqlOpts = jsExtend.extend({}, opts, {
	    version: POUCH_VERSION,
	    description: opts.name,
	    size: size
	  });
	  var openDBResult = openDB$1(websqlOpts);
	  if (openDBResult.error) {
	    return websqlError(callback)(openDBResult.error);
	  }
	  var db = openDBResult.db;
	  if (typeof db.readTransaction !== 'function') {
	    // doesn't exist in sqlite plugin
	    db.readTransaction = db.transaction;
	  }

	  function dbCreated() {
	    // note the db name in case the browser upgrades to idb
	    if (hasLocalStorage()) {
	      window.localStorage['_pouch__websqldb_' + api._name] = true;
	    }
	    callback(null, api);
	  }

	  // In this migration, we added the 'deleted' and 'local' columns to the
	  // by-seq and doc store tables.
	  // To preserve existing user data, we re-process all the existing JSON
	  // and add these values.
	  // Called migration2 because it corresponds to adapter version (db_version) #2
	  function runMigration2(tx, callback) {
	    // index used for the join in the allDocs query
	    tx.executeSql(DOC_STORE_WINNINGSEQ_INDEX_SQL);

	    tx.executeSql('ALTER TABLE ' + BY_SEQ_STORE$1 +
	      ' ADD COLUMN deleted TINYINT(1) DEFAULT 0', [], function () {
	      tx.executeSql(BY_SEQ_STORE_DELETED_INDEX_SQL);
	      tx.executeSql('ALTER TABLE ' + DOC_STORE$1 +
	        ' ADD COLUMN local TINYINT(1) DEFAULT 0', [], function () {
	        tx.executeSql('CREATE INDEX IF NOT EXISTS \'doc-store-local-idx\' ON ' +
	          DOC_STORE$1 + ' (local, id)');

	        var sql = 'SELECT ' + DOC_STORE$1 + '.winningseq AS seq, ' + DOC_STORE$1 +
	          '.json AS metadata FROM ' + BY_SEQ_STORE$1 + ' JOIN ' + DOC_STORE$1 +
	          ' ON ' + BY_SEQ_STORE$1 + '.seq = ' + DOC_STORE$1 + '.winningseq';

	        tx.executeSql(sql, [], function (tx, result) {

	          var deleted = [];
	          var local = [];

	          for (var i = 0; i < result.rows.length; i++) {
	            var item = result.rows.item(i);
	            var seq = item.seq;
	            var metadata = JSON.parse(item.metadata);
	            if (isDeleted(metadata)) {
	              deleted.push(seq);
	            }
	            if (isLocalId(metadata.id)) {
	              local.push(metadata.id);
	            }
	          }
	          tx.executeSql('UPDATE ' + DOC_STORE$1 + 'SET local = 1 WHERE id IN ' +
	            qMarks(local.length), local, function () {
	            tx.executeSql('UPDATE ' + BY_SEQ_STORE$1 +
	              ' SET deleted = 1 WHERE seq IN ' +
	              qMarks(deleted.length), deleted, callback);
	          });
	        });
	      });
	    });
	  }

	  // in this migration, we make all the local docs unversioned
	  function runMigration3(tx, callback) {
	    var local = 'CREATE TABLE IF NOT EXISTS ' + LOCAL_STORE$1 +
	      ' (id UNIQUE, rev, json)';
	    tx.executeSql(local, [], function () {
	      var sql = 'SELECT ' + DOC_STORE$1 + '.id AS id, ' +
	        BY_SEQ_STORE$1 + '.json AS data ' +
	        'FROM ' + BY_SEQ_STORE$1 + ' JOIN ' +
	        DOC_STORE$1 + ' ON ' + BY_SEQ_STORE$1 + '.seq = ' +
	        DOC_STORE$1 + '.winningseq WHERE local = 1';
	      tx.executeSql(sql, [], function (tx, res) {
	        var rows = [];
	        for (var i = 0; i < res.rows.length; i++) {
	          rows.push(res.rows.item(i));
	        }
	        function doNext() {
	          if (!rows.length) {
	            return callback(tx);
	          }
	          var row = rows.shift();
	          var rev = JSON.parse(row.data)._rev;
	          tx.executeSql('INSERT INTO ' + LOCAL_STORE$1 +
	              ' (id, rev, json) VALUES (?,?,?)',
	              [row.id, rev, row.data], function (tx) {
	            tx.executeSql('DELETE FROM ' + DOC_STORE$1 + ' WHERE id=?',
	                [row.id], function (tx) {
	              tx.executeSql('DELETE FROM ' + BY_SEQ_STORE$1 + ' WHERE seq=?',
	                  [row.seq], function () {
	                doNext();
	              });
	            });
	          });
	        }
	        doNext();
	      });
	    });
	  }

	  // in this migration, we remove doc_id_rev and just use rev
	  function runMigration4(tx, callback) {

	    function updateRows(rows) {
	      function doNext() {
	        if (!rows.length) {
	          return callback(tx);
	        }
	        var row = rows.shift();
	        var doc_id_rev = parseHexString(row.hex, encoding);
	        var idx = doc_id_rev.lastIndexOf('::');
	        var doc_id = doc_id_rev.substring(0, idx);
	        var rev = doc_id_rev.substring(idx + 2);
	        var sql = 'UPDATE ' + BY_SEQ_STORE$1 +
	          ' SET doc_id=?, rev=? WHERE doc_id_rev=?';
	        tx.executeSql(sql, [doc_id, rev, doc_id_rev], function () {
	          doNext();
	        });
	      }
	      doNext();
	    }

	    var sql = 'ALTER TABLE ' + BY_SEQ_STORE$1 + ' ADD COLUMN doc_id';
	    tx.executeSql(sql, [], function (tx) {
	      var sql = 'ALTER TABLE ' + BY_SEQ_STORE$1 + ' ADD COLUMN rev';
	      tx.executeSql(sql, [], function (tx) {
	        tx.executeSql(BY_SEQ_STORE_DOC_ID_REV_INDEX_SQL, [], function (tx) {
	          var sql = 'SELECT hex(doc_id_rev) as hex FROM ' + BY_SEQ_STORE$1;
	          tx.executeSql(sql, [], function (tx, res) {
	            var rows = [];
	            for (var i = 0; i < res.rows.length; i++) {
	              rows.push(res.rows.item(i));
	            }
	            updateRows(rows);
	          });
	        });
	      });
	    });
	  }

	  // in this migration, we add the attach_and_seq table
	  // for issue #2818
	  function runMigration5(tx, callback) {

	    function migrateAttsAndSeqs(tx) {
	      // need to actually populate the table. this is the expensive part,
	      // so as an optimization, check first that this database even
	      // contains attachments
	      var sql = 'SELECT COUNT(*) AS cnt FROM ' + ATTACH_STORE$1;
	      tx.executeSql(sql, [], function (tx, res) {
	        var count = res.rows.item(0).cnt;
	        if (!count) {
	          return callback(tx);
	        }

	        var offset = 0;
	        var pageSize = 10;
	        function nextPage() {
	          var sql = select(
	            SELECT_DOCS + ', ' + DOC_STORE$1 + '.id AS id',
	            [DOC_STORE$1, BY_SEQ_STORE$1],
	            DOC_STORE_AND_BY_SEQ_JOINER,
	            null,
	            DOC_STORE$1 + '.id '
	          );
	          sql += ' LIMIT ' + pageSize + ' OFFSET ' + offset;
	          offset += pageSize;
	          tx.executeSql(sql, [], function (tx, res) {
	            if (!res.rows.length) {
	              return callback(tx);
	            }
	            var digestSeqs = {};
	            function addDigestSeq(digest, seq) {
	              // uniq digest/seq pairs, just in case there are dups
	              var seqs = digestSeqs[digest] = (digestSeqs[digest] || []);
	              if (seqs.indexOf(seq) === -1) {
	                seqs.push(seq);
	              }
	            }
	            for (var i = 0; i < res.rows.length; i++) {
	              var row = res.rows.item(i);
	              var doc = unstringifyDoc(row.data, row.id, row.rev);
	              var atts = Object.keys(doc._attachments || {});
	              for (var j = 0; j < atts.length; j++) {
	                var att = doc._attachments[atts[j]];
	                addDigestSeq(att.digest, row.seq);
	              }
	            }
	            var digestSeqPairs = [];
	            Object.keys(digestSeqs).forEach(function (digest) {
	              var seqs = digestSeqs[digest];
	              seqs.forEach(function (seq) {
	                digestSeqPairs.push([digest, seq]);
	              });
	            });
	            if (!digestSeqPairs.length) {
	              return nextPage();
	            }
	            var numDone = 0;
	            digestSeqPairs.forEach(function (pair) {
	              var sql = 'INSERT INTO ' + ATTACH_AND_SEQ_STORE$1 +
	                ' (digest, seq) VALUES (?,?)';
	              tx.executeSql(sql, pair, function () {
	                if (++numDone === digestSeqPairs.length) {
	                  nextPage();
	                }
	              });
	            });
	          });
	        }
	        nextPage();
	      });
	    }

	    var attachAndRev = 'CREATE TABLE IF NOT EXISTS ' +
	      ATTACH_AND_SEQ_STORE$1 + ' (digest, seq INTEGER)';
	    tx.executeSql(attachAndRev, [], function (tx) {
	      tx.executeSql(
	        ATTACH_AND_SEQ_STORE_ATTACH_INDEX_SQL, [], function (tx) {
	          tx.executeSql(
	            ATTACH_AND_SEQ_STORE_SEQ_INDEX_SQL, [],
	            migrateAttsAndSeqs);
	        });
	    });
	  }

	  // in this migration, we use escapeBlob() and unescapeBlob()
	  // instead of reading out the binary as HEX, which is slow
	  function runMigration6(tx, callback) {
	    var sql = 'ALTER TABLE ' + ATTACH_STORE$1 +
	      ' ADD COLUMN escaped TINYINT(1) DEFAULT 0';
	    tx.executeSql(sql, [], callback);
	  }

	  // issue #3136, in this migration we need a "latest seq" as well
	  // as the "winning seq" in the doc store
	  function runMigration7(tx, callback) {
	    var sql = 'ALTER TABLE ' + DOC_STORE$1 +
	      ' ADD COLUMN max_seq INTEGER';
	    tx.executeSql(sql, [], function (tx) {
	      var sql = 'UPDATE ' + DOC_STORE$1 + ' SET max_seq=(SELECT MAX(seq) FROM ' +
	        BY_SEQ_STORE$1 + ' WHERE doc_id=id)';
	      tx.executeSql(sql, [], function (tx) {
	        // add unique index after filling, else we'll get a constraint
	        // error when we do the ALTER TABLE
	        var sql =
	          'CREATE UNIQUE INDEX IF NOT EXISTS \'doc-max-seq-idx\' ON ' +
	          DOC_STORE$1 + ' (max_seq)';
	        tx.executeSql(sql, [], callback);
	      });
	    });
	  }

	  function checkEncoding(tx, cb) {
	    // UTF-8 on chrome/android, UTF-16 on safari < 7.1
	    tx.executeSql('SELECT HEX("a") AS hex', [], function (tx, res) {
	        var hex = res.rows.item(0).hex;
	        encoding = hex.length === 2 ? 'UTF-8' : 'UTF-16';
	        cb();
	      }
	    );
	  }

	  function onGetInstanceId() {
	    while (idRequests.length > 0) {
	      var idCallback = idRequests.pop();
	      idCallback(null, instanceId);
	    }
	  }

	  function onGetVersion(tx, dbVersion) {
	    if (dbVersion === 0) {
	      // initial schema

	      var meta = 'CREATE TABLE IF NOT EXISTS ' + META_STORE$1 +
	        ' (dbid, db_version INTEGER)';
	      var attach = 'CREATE TABLE IF NOT EXISTS ' + ATTACH_STORE$1 +
	        ' (digest UNIQUE, escaped TINYINT(1), body BLOB)';
	      var attachAndRev = 'CREATE TABLE IF NOT EXISTS ' +
	        ATTACH_AND_SEQ_STORE$1 + ' (digest, seq INTEGER)';
	      // TODO: migrate winningseq to INTEGER
	      var doc = 'CREATE TABLE IF NOT EXISTS ' + DOC_STORE$1 +
	        ' (id unique, json, winningseq, max_seq INTEGER UNIQUE)';
	      var seq = 'CREATE TABLE IF NOT EXISTS ' + BY_SEQ_STORE$1 +
	        ' (seq INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
	        'json, deleted TINYINT(1), doc_id, rev)';
	      var local = 'CREATE TABLE IF NOT EXISTS ' + LOCAL_STORE$1 +
	        ' (id UNIQUE, rev, json)';

	      // creates
	      tx.executeSql(attach);
	      tx.executeSql(local);
	      tx.executeSql(attachAndRev, [], function () {
	        tx.executeSql(ATTACH_AND_SEQ_STORE_SEQ_INDEX_SQL);
	        tx.executeSql(ATTACH_AND_SEQ_STORE_ATTACH_INDEX_SQL);
	      });
	      tx.executeSql(doc, [], function () {
	        tx.executeSql(DOC_STORE_WINNINGSEQ_INDEX_SQL);
	        tx.executeSql(seq, [], function () {
	          tx.executeSql(BY_SEQ_STORE_DELETED_INDEX_SQL);
	          tx.executeSql(BY_SEQ_STORE_DOC_ID_REV_INDEX_SQL);
	          tx.executeSql(meta, [], function () {
	            // mark the db version, and new dbid
	            var initSeq = 'INSERT INTO ' + META_STORE$1 +
	              ' (db_version, dbid) VALUES (?,?)';
	            instanceId = uuid();
	            var initSeqArgs = [ADAPTER_VERSION$1, instanceId];
	            tx.executeSql(initSeq, initSeqArgs, function () {
	              onGetInstanceId();
	            });
	          });
	        });
	      });
	    } else { // version > 0

	      var setupDone = function () {
	        var migrated = dbVersion < ADAPTER_VERSION$1;
	        if (migrated) {
	          // update the db version within this transaction
	          tx.executeSql('UPDATE ' + META_STORE$1 + ' SET db_version = ' +
	            ADAPTER_VERSION$1);
	        }
	        // notify db.id() callers
	        var sql = 'SELECT dbid FROM ' + META_STORE$1;
	        tx.executeSql(sql, [], function (tx, result) {
	          instanceId = result.rows.item(0).dbid;
	          onGetInstanceId();
	        });
	      };

	      // would love to use promises here, but then websql
	      // ends the transaction early
	      var tasks = [
	        runMigration2,
	        runMigration3,
	        runMigration4,
	        runMigration5,
	        runMigration6,
	        runMigration7,
	        setupDone
	      ];

	      // run each migration sequentially
	      var i = dbVersion;
	      var nextMigration = function (tx) {
	        tasks[i - 1](tx, nextMigration);
	        i++;
	      };
	      nextMigration(tx);
	    }
	  }

	  function setup() {
	    db.transaction(function (tx) {
	      // first check the encoding
	      checkEncoding(tx, function () {
	        // then get the version
	        fetchVersion(tx);
	      });
	    }, websqlError(callback), dbCreated);
	  }

	  function fetchVersion(tx) {
	    var sql = 'SELECT sql FROM sqlite_master WHERE tbl_name = ' + META_STORE$1;
	    tx.executeSql(sql, [], function (tx, result) {
	      if (!result.rows.length) {
	        // database hasn't even been created yet (version 0)
	        onGetVersion(tx, 0);
	      } else if (!/db_version/.test(result.rows.item(0).sql)) {
	        // table was created, but without the new db_version column,
	        // so add it.
	        tx.executeSql('ALTER TABLE ' + META_STORE$1 +
	          ' ADD COLUMN db_version INTEGER', [], function () {
	          // before version 2, this column didn't even exist
	          onGetVersion(tx, 1);
	        });
	      } else { // column exists, we can safely get it
	        tx.executeSql('SELECT db_version FROM ' + META_STORE$1,
	          [], function (tx, result) {
	          var dbVersion = result.rows.item(0).db_version;
	          onGetVersion(tx, dbVersion);
	        });
	      }
	    });
	  }

	  setup();

	  api.type = function () {
	    return 'websql';
	  };

	  api._id = toPromise(function (callback) {
	    callback(null, instanceId);
	  });

	  api._info = function (callback) {
	    db.readTransaction(function (tx) {
	      countDocs(tx, function (docCount) {
	        var sql = 'SELECT MAX(seq) AS seq FROM ' + BY_SEQ_STORE$1;
	        tx.executeSql(sql, [], function (tx, res) {
	          var updateSeq = res.rows.item(0).seq || 0;
	          callback(null, {
	            doc_count: docCount,
	            update_seq: updateSeq,
	            websql_encoding: encoding
	          });
	        });
	      });
	    }, websqlError(callback));
	  };

	  api._bulkDocs = function (req, reqOpts, callback) {
	    websqlBulkDocs(opts, req, reqOpts, api, db, websqlChanges, callback);
	  };

	  api._get = function (id, opts, callback) {
	    var doc;
	    var metadata;
	    var err;
	    var tx = opts.ctx;
	    if (!tx) {
	      return db.readTransaction(function (txn) {
	        api._get(id, jsExtend.extend({ctx: txn}, opts), callback);
	      });
	    }

	    function finish() {
	      callback(err, {doc: doc, metadata: metadata, ctx: tx});
	    }

	    var sql;
	    var sqlArgs;
	    if (opts.rev) {
	      sql = select(
	        SELECT_DOCS,
	        [DOC_STORE$1, BY_SEQ_STORE$1],
	        DOC_STORE$1 + '.id=' + BY_SEQ_STORE$1 + '.doc_id',
	        [BY_SEQ_STORE$1 + '.doc_id=?', BY_SEQ_STORE$1 + '.rev=?']);
	      sqlArgs = [id, opts.rev];
	    } else {
	      sql = select(
	        SELECT_DOCS,
	        [DOC_STORE$1, BY_SEQ_STORE$1],
	        DOC_STORE_AND_BY_SEQ_JOINER,
	        DOC_STORE$1 + '.id=?');
	      sqlArgs = [id];
	    }
	    tx.executeSql(sql, sqlArgs, function (a, results) {
	      if (!results.rows.length) {
	        err = createError(MISSING_DOC, 'missing');
	        return finish();
	      }
	      var item = results.rows.item(0);
	      metadata = safeJsonParse(item.metadata);
	      if (item.deleted && !opts.rev) {
	        err = createError(MISSING_DOC, 'deleted');
	        return finish();
	      }
	      doc = unstringifyDoc(item.data, metadata.id, item.rev);
	      finish();
	    });
	  };

	  function countDocs(tx, callback) {

	    if (api._docCount !== -1) {
	      return callback(api._docCount);
	    }

	    // count the total rows
	    var sql = select(
	      'COUNT(' + DOC_STORE$1 + '.id) AS \'num\'',
	      [DOC_STORE$1, BY_SEQ_STORE$1],
	      DOC_STORE_AND_BY_SEQ_JOINER,
	      BY_SEQ_STORE$1 + '.deleted=0');

	    tx.executeSql(sql, [], function (tx, result) {
	      api._docCount = result.rows.item(0).num;
	      callback(api._docCount);
	    });
	  }

	  api._allDocs = function (opts, callback) {
	    var results = [];
	    var totalRows;

	    var start = 'startkey' in opts ? opts.startkey : false;
	    var end = 'endkey' in opts ? opts.endkey : false;
	    var key = 'key' in opts ? opts.key : false;
	    var descending = 'descending' in opts ? opts.descending : false;
	    var limit = 'limit' in opts ? opts.limit : -1;
	    var offset = 'skip' in opts ? opts.skip : 0;
	    var inclusiveEnd = opts.inclusive_end !== false;

	    var sqlArgs = [];
	    var criteria = [];

	    if (key !== false) {
	      criteria.push(DOC_STORE$1 + '.id = ?');
	      sqlArgs.push(key);
	    } else if (start !== false || end !== false) {
	      if (start !== false) {
	        criteria.push(DOC_STORE$1 + '.id ' + (descending ? '<=' : '>=') + ' ?');
	        sqlArgs.push(start);
	      }
	      if (end !== false) {
	        var comparator = descending ? '>' : '<';
	        if (inclusiveEnd) {
	          comparator += '=';
	        }
	        criteria.push(DOC_STORE$1 + '.id ' + comparator + ' ?');
	        sqlArgs.push(end);
	      }
	      if (key !== false) {
	        criteria.push(DOC_STORE$1 + '.id = ?');
	        sqlArgs.push(key);
	      }
	    }

	    if (opts.deleted !== 'ok') {
	      // report deleted if keys are specified
	      criteria.push(BY_SEQ_STORE$1 + '.deleted = 0');
	    }

	    db.readTransaction(function (tx) {

	      // first count up the total rows
	      countDocs(tx, function (count) {
	        totalRows = count;

	        if (limit === 0) {
	          return;
	        }

	        // then actually fetch the documents
	        var sql = select(
	          SELECT_DOCS,
	          [DOC_STORE$1, BY_SEQ_STORE$1],
	          DOC_STORE_AND_BY_SEQ_JOINER,
	          criteria,
	          DOC_STORE$1 + '.id ' + (descending ? 'DESC' : 'ASC')
	          );
	        sql += ' LIMIT ' + limit + ' OFFSET ' + offset;

	        tx.executeSql(sql, sqlArgs, function (tx, result) {
	          for (var i = 0, l = result.rows.length; i < l; i++) {
	            var item = result.rows.item(i);
	            var metadata = safeJsonParse(item.metadata);
	            var id = metadata.id;
	            var data = unstringifyDoc(item.data, id, item.rev);
	            var winningRev = data._rev;
	            var doc = {
	              id: id,
	              key: id,
	              value: {rev: winningRev}
	            };
	            if (opts.include_docs) {
	              doc.doc = data;
	              doc.doc._rev = winningRev;
	              if (opts.conflicts) {
	                doc.doc._conflicts = collectConflicts(metadata);
	              }
	              fetchAttachmentsIfNecessary$1(doc.doc, opts, api, tx);
	            }
	            if (item.deleted) {
	              if (opts.deleted === 'ok') {
	                doc.value.deleted = true;
	                doc.doc = null;
	              } else {
	                continue;
	              }
	            }
	            results.push(doc);
	          }
	        });
	      });
	    }, websqlError(callback), function () {
	      callback(null, {
	        total_rows: totalRows,
	        offset: opts.skip,
	        rows: results
	      });
	    });
	  };

	  api._changes = function (opts) {
	    opts = clone(opts);

	    if (opts.continuous) {
	      var id = api._name + ':' + uuid();
	      websqlChanges.addListener(api._name, id, api, opts);
	      websqlChanges.notify(api._name);
	      return {
	        cancel: function () {
	          websqlChanges.removeListener(api._name, id);
	        }
	      };
	    }

	    var descending = opts.descending;

	    // Ignore the `since` parameter when `descending` is true
	    opts.since = opts.since && !descending ? opts.since : 0;

	    var limit = 'limit' in opts ? opts.limit : -1;
	    if (limit === 0) {
	      limit = 1; // per CouchDB _changes spec
	    }

	    var returnDocs;
	    if ('return_docs' in opts) {
	      returnDocs = opts.return_docs;
	    } else if ('returnDocs' in opts) {
	      // TODO: Remove 'returnDocs' in favor of 'return_docs' in a future release
	      returnDocs = opts.returnDocs;
	    } else {
	      returnDocs = true;
	    }
	    var results = [];
	    var numResults = 0;

	    function fetchChanges() {

	      var selectStmt =
	        DOC_STORE$1 + '.json AS metadata, ' +
	        DOC_STORE$1 + '.max_seq AS maxSeq, ' +
	        BY_SEQ_STORE$1 + '.json AS winningDoc, ' +
	        BY_SEQ_STORE$1 + '.rev AS winningRev ';

	      var from = DOC_STORE$1 + ' JOIN ' + BY_SEQ_STORE$1;

	      var joiner = DOC_STORE$1 + '.id=' + BY_SEQ_STORE$1 + '.doc_id' +
	        ' AND ' + DOC_STORE$1 + '.winningseq=' + BY_SEQ_STORE$1 + '.seq';

	      var criteria = ['maxSeq > ?'];
	      var sqlArgs = [opts.since];

	      if (opts.doc_ids) {
	        criteria.push(DOC_STORE$1 + '.id IN ' + qMarks(opts.doc_ids.length));
	        sqlArgs = sqlArgs.concat(opts.doc_ids);
	      }

	      var orderBy = 'maxSeq ' + (descending ? 'DESC' : 'ASC');

	      var sql = select(selectStmt, from, joiner, criteria, orderBy);

	      var filter = filterChange(opts);
	      if (!opts.view && !opts.filter) {
	        // we can just limit in the query
	        sql += ' LIMIT ' + limit;
	      }

	      var lastSeq = opts.since || 0;
	      db.readTransaction(function (tx) {
	        tx.executeSql(sql, sqlArgs, function (tx, result) {
	          function reportChange(change) {
	            return function () {
	              opts.onChange(change);
	            };
	          }
	          for (var i = 0, l = result.rows.length; i < l; i++) {
	            var item = result.rows.item(i);
	            var metadata = safeJsonParse(item.metadata);
	            lastSeq = item.maxSeq;

	            var doc = unstringifyDoc(item.winningDoc, metadata.id,
	              item.winningRev);
	            var change = opts.processChange(doc, metadata, opts);
	            change.seq = item.maxSeq;

	            var filtered = filter(change);
	            if (typeof filtered === 'object') {
	              return opts.complete(filtered);
	            }

	            if (filtered) {
	              numResults++;
	              if (returnDocs) {
	                results.push(change);
	              }
	              // process the attachment immediately
	              // for the benefit of live listeners
	              if (opts.attachments && opts.include_docs) {
	                fetchAttachmentsIfNecessary$1(doc, opts, api, tx,
	                  reportChange(change));
	              } else {
	                reportChange(change)();
	              }
	            }
	            if (numResults === limit) {
	              break;
	            }
	          }
	        });
	      }, websqlError(opts.complete), function () {
	        if (!opts.continuous) {
	          opts.complete(null, {
	            results: results,
	            last_seq: lastSeq
	          });
	        }
	      });
	    }

	    fetchChanges();
	  };

	  api._close = function (callback) {
	    //WebSQL databases do not need to be closed
	    callback();
	  };

	  api._getAttachment = function (docId, attachId, attachment, opts, callback) {
	    var res;
	    var tx = opts.ctx;
	    var digest = attachment.digest;
	    var type = attachment.content_type;
	    var sql = 'SELECT escaped, ' +
	      'CASE WHEN escaped = 1 THEN body ELSE HEX(body) END AS body FROM ' +
	      ATTACH_STORE$1 + ' WHERE digest=?';
	    tx.executeSql(sql, [digest], function (tx, result) {
	      // websql has a bug where \u0000 causes early truncation in strings
	      // and blobs. to work around this, we used to use the hex() function,
	      // but that's not performant. after migration 6, we remove \u0000
	      // and add it back in afterwards
	      var item = result.rows.item(0);
	      var data = item.escaped ? unescapeBlob(item.body) :
	        parseHexString(item.body, encoding);
	      if (opts.binary) {
	        res = binStringToBluffer(data, type);
	      } else {
	        res = btoa$1(data);
	      }
	      callback(null, res);
	    });
	  };

	  api._getRevisionTree = function (docId, callback) {
	    db.readTransaction(function (tx) {
	      var sql = 'SELECT json AS metadata FROM ' + DOC_STORE$1 + ' WHERE id = ?';
	      tx.executeSql(sql, [docId], function (tx, result) {
	        if (!result.rows.length) {
	          callback(createError(MISSING_DOC));
	        } else {
	          var data = safeJsonParse(result.rows.item(0).metadata);
	          callback(null, data.rev_tree);
	        }
	      });
	    });
	  };

	  api._doCompaction = function (docId, revs, callback) {
	    if (!revs.length) {
	      return callback();
	    }
	    db.transaction(function (tx) {

	      // update doc store
	      var sql = 'SELECT json AS metadata FROM ' + DOC_STORE$1 + ' WHERE id = ?';
	      tx.executeSql(sql, [docId], function (tx, result) {
	        var metadata = safeJsonParse(result.rows.item(0).metadata);
	        traverseRevTree(metadata.rev_tree, function (isLeaf, pos,
	                                                           revHash, ctx, opts) {
	          var rev = pos + '-' + revHash;
	          if (revs.indexOf(rev) !== -1) {
	            opts.status = 'missing';
	          }
	        });

	        var sql = 'UPDATE ' + DOC_STORE$1 + ' SET json = ? WHERE id = ?';
	        tx.executeSql(sql, [safeJsonStringify(metadata), docId]);
	      });

	      compactRevs$1(revs, docId, tx);
	    }, websqlError(callback), function () {
	      callback();
	    });
	  };

	  api._getLocal = function (id, callback) {
	    db.readTransaction(function (tx) {
	      var sql = 'SELECT json, rev FROM ' + LOCAL_STORE$1 + ' WHERE id=?';
	      tx.executeSql(sql, [id], function (tx, res) {
	        if (res.rows.length) {
	          var item = res.rows.item(0);
	          var doc = unstringifyDoc(item.json, id, item.rev);
	          callback(null, doc);
	        } else {
	          callback(createError(MISSING_DOC));
	        }
	      });
	    });
	  };

	  api._putLocal = function (doc, opts, callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    delete doc._revisions; // ignore this, trust the rev
	    var oldRev = doc._rev;
	    var id = doc._id;
	    var newRev;
	    if (!oldRev) {
	      newRev = doc._rev = '0-1';
	    } else {
	      newRev = doc._rev = '0-' + (parseInt(oldRev.split('-')[1], 10) + 1);
	    }
	    var json = stringifyDoc(doc);

	    var ret;
	    function putLocal(tx) {
	      var sql;
	      var values;
	      if (oldRev) {
	        sql = 'UPDATE ' + LOCAL_STORE$1 + ' SET rev=?, json=? ' +
	          'WHERE id=? AND rev=?';
	        values = [newRev, json, id, oldRev];
	      } else {
	        sql = 'INSERT INTO ' + LOCAL_STORE$1 + ' (id, rev, json) VALUES (?,?,?)';
	        values = [id, newRev, json];
	      }
	      tx.executeSql(sql, values, function (tx, res) {
	        if (res.rowsAffected) {
	          ret = {ok: true, id: id, rev: newRev};
	          if (opts.ctx) { // return immediately
	            callback(null, ret);
	          }
	        } else {
	          callback(createError(REV_CONFLICT));
	        }
	      }, function () {
	        callback(createError(REV_CONFLICT));
	        return false; // ack that we handled the error
	      });
	    }

	    if (opts.ctx) {
	      putLocal(opts.ctx);
	    } else {
	      db.transaction(putLocal, websqlError(callback), function () {
	        if (ret) {
	          callback(null, ret);
	        }
	      });
	    }
	  };

	  api._removeLocal = function (doc, opts, callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    var ret;

	    function removeLocal(tx) {
	      var sql = 'DELETE FROM ' + LOCAL_STORE$1 + ' WHERE id=? AND rev=?';
	      var params = [doc._id, doc._rev];
	      tx.executeSql(sql, params, function (tx, res) {
	        if (!res.rowsAffected) {
	          return callback(createError(MISSING_DOC));
	        }
	        ret = {ok: true, id: doc._id, rev: '0-0'};
	        if (opts.ctx) { // return immediately
	          callback(null, ret);
	        }
	      });
	    }

	    if (opts.ctx) {
	      removeLocal(opts.ctx);
	    } else {
	      db.transaction(removeLocal, websqlError(callback), function () {
	        if (ret) {
	          callback(null, ret);
	        }
	      });
	    }
	  };

	  api._destroy = function (opts, callback) {
	    websqlChanges.removeAllListeners(api._name);
	    db.transaction(function (tx) {
	      var stores = [DOC_STORE$1, BY_SEQ_STORE$1, ATTACH_STORE$1, META_STORE$1,
	        LOCAL_STORE$1, ATTACH_AND_SEQ_STORE$1];
	      stores.forEach(function (store) {
	        tx.executeSql('DROP TABLE IF EXISTS ' + store, []);
	      });
	    }, websqlError(callback), function () {
	      if (hasLocalStorage()) {
	        delete window.localStorage['_pouch__websqldb_' + api._name];
	        delete window.localStorage[api._name];
	      }
	      callback(null, {'ok': true});
	    });
	  };
	}

	function canOpenTestDB() {
	  try {
	    openDatabase('_pouch_validate_websql', 1, '', 1);
	    return true;
	  } catch (err) {
	    return false;
	  }
	}

	// WKWebView had a bug where WebSQL would throw a DOM Exception 18
	// (see https://bugs.webkit.org/show_bug.cgi?id=137760 and
	// https://github.com/pouchdb/pouchdb/issues/5079)
	// This has been fixed in latest WebKit, so we try to detect it here.
	function isValidWebSQL() {
	  // WKWebView UA:
	  //   Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X)
	  //   AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13C75
	  // Chrome for iOS UA:
	  //   Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en)
	  //   AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60
	  //   Mobile/9B206 Safari/7534.48.3
	  // Firefox for iOS UA:
	  //   Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4
	  //   (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4

	  // indexedDB is null on some UIWebViews and undefined in others
	  // see: https://bugs.webkit.org/show_bug.cgi?id=137034
	  if (typeof indexedDB === 'undefined' || indexedDB === null ||
	      !/iP(hone|od|ad)/.test(navigator.userAgent)) {
	    // definitely not WKWebView, avoid creating an unnecessary database
	    return true;
	  }
	  // Cache the result in LocalStorage. Reason we do this is because if we
	  // call openDatabase() too many times, Safari craps out in SauceLabs and
	  // starts throwing DOM Exception 14s.
	  var hasLS = hasLocalStorage();
	  // Include user agent in the hash, so that if Safari is upgraded, we don't
	  // continually think it's broken.
	  var localStorageKey = '_pouch__websqldb_valid_' + navigator.userAgent;
	  if (hasLS && localStorage[localStorageKey]) {
	    return localStorage[localStorageKey] === '1';
	  }
	  var openedTestDB = canOpenTestDB();
	  if (hasLS) {
	    localStorage[localStorageKey] = openedTestDB ? '1' : '0';
	  }
	  return openedTestDB;
	}

	function valid() {
	  if (typeof openDatabase !== 'function') {
	    return false;
	  }
	  return isValidWebSQL();
	}

	function openDB(name, version, description, size) {
	  // Traditional WebSQL API
	  return openDatabase(name, version, description, size);
	}

	function WebSQLPouch(opts, callback) {
	  var _opts = jsExtend.extend({
	    websql: openDB
	  }, opts);

	  WebSqlPouch$1.call(this, _opts, callback);
	}

	WebSQLPouch.valid = valid;

	WebSQLPouch.use_prefix = true;

	function WebSqlPouch (PouchDB) {
	  PouchDB.adapter('websql', WebSQLPouch, true);
	}

	/* global fetch */
	/* global Headers */
	function wrappedFetch() {
	  var wrappedPromise = {};

	  var promise = new PouchPromise(function (resolve, reject) {
	    wrappedPromise.resolve = resolve;
	    wrappedPromise.reject = reject;
	  });

	  var args = new Array(arguments.length);

	  for (var i = 0; i < args.length; i++) {
	    args[i] = arguments[i];
	  }

	  wrappedPromise.promise = promise;

	  PouchPromise.resolve().then(function () {
	    return fetch.apply(null, args);
	  }).then(function (response) {
	    wrappedPromise.resolve(response);
	  }).catch(function (error) {
	    wrappedPromise.reject(error);
	  });

	  return wrappedPromise;
	}

	function fetchRequest(options, callback) {
	  var wrappedPromise, timer, response;

	  var headers = new Headers();

	  var fetchOptions = {
	    method: options.method,
	    credentials: 'include',
	    headers: headers
	  };

	  if (options.json) {
	    headers.set('Accept', 'application/json');
	    headers.set('Content-Type', options.headers['Content-Type'] ||
	      'application/json');
	  }

	  if (options.body && (options.body instanceof Blob)) {
	    readAsArrayBuffer(options.body, function (arrayBuffer) {
	      fetchOptions.body = arrayBuffer;
	    });
	  } else if (options.body &&
	             options.processData &&
	             typeof options.body !== 'string') {
	    fetchOptions.body = JSON.stringify(options.body);
	  } else if ('body' in options) {
	    fetchOptions.body = options.body;
	  } else {
	    fetchOptions.body = null;
	  }

	  Object.keys(options.headers).forEach(function (key) {
	    if (options.headers.hasOwnProperty(key)) {
	      headers.set(key, options.headers[key]);
	    }
	  });

	  wrappedPromise = wrappedFetch(options.url, fetchOptions);

	  if (options.timeout > 0) {
	    timer = setTimeout(function () {
	      wrappedPromise.reject(new Error('Load timeout for resource: ' +
	        options.url));
	    }, options.timeout);
	  }

	  wrappedPromise.promise.then(function (fetchResponse) {
	    response = {
	      statusCode: fetchResponse.status
	    };

	    if (options.timeout > 0) {
	      clearTimeout(timer);
	    }

	    if (response.statusCode >= 200 && response.statusCode < 300) {
	      return options.binary ? fetchResponse.blob() : fetchResponse.text();
	    }

	    return fetchResponse.json();
	  }).then(function (result) {
	    if (response.statusCode >= 200 && response.statusCode < 300) {
	      callback(null, response, result);
	    } else {
	      callback(result, response);
	    }
	  }).catch(function (error) {
	    callback(error, response);
	  });

	  return {abort: wrappedPromise.reject};
	}

	function xhRequest(options, callback) {

	  var xhr, timer;
	  var timedout = false;

	  var abortReq = function () {
	    xhr.abort();
	    cleanUp();
	  };

	  var timeoutReq = function () {
	    timedout = true;
	    xhr.abort();
	    cleanUp();
	  };

	  var ret = {abort: abortReq};

	  var cleanUp = function () {
	    clearTimeout(timer);
	    ret.abort = function () {};
	    if (xhr) {
	      xhr.onprogress = undefined;
	      if (xhr.upload) {
	        xhr.upload.onprogress = undefined;
	      }
	      xhr.onreadystatechange = undefined;
	      xhr = undefined;
	    }
	  };

	  if (options.xhr) {
	    xhr = new options.xhr();
	  } else {
	    xhr = new XMLHttpRequest();
	  }

	  try {
	    xhr.open(options.method, options.url);
	  } catch (exception) {
	    return callback(new Error(exception.name || 'Url is invalid'));
	  }

	  xhr.withCredentials = ('withCredentials' in options) ?
	    options.withCredentials : true;

	  if (options.method === 'GET') {
	    delete options.headers['Content-Type'];
	  } else if (options.json) {
	    options.headers.Accept = 'application/json';
	    options.headers['Content-Type'] = options.headers['Content-Type'] ||
	      'application/json';
	    if (options.body &&
	        options.processData &&
	        typeof options.body !== "string") {
	      options.body = JSON.stringify(options.body);
	    }
	  }

	  if (options.binary) {
	    xhr.responseType = 'arraybuffer';
	  }

	  if (!('body' in options)) {
	    options.body = null;
	  }

	  for (var key in options.headers) {
	    if (options.headers.hasOwnProperty(key)) {
	      xhr.setRequestHeader(key, options.headers[key]);
	    }
	  }

	  if (options.timeout > 0) {
	    timer = setTimeout(timeoutReq, options.timeout);
	    xhr.onprogress = function () {
	      clearTimeout(timer);
	      if(xhr.readyState !== 4) {
	        timer = setTimeout(timeoutReq, options.timeout);
	      }
	    };
	    if (typeof xhr.upload !== 'undefined') { // does not exist in ie9
	      xhr.upload.onprogress = xhr.onprogress;
	    }
	  }

	  xhr.onreadystatechange = function () {
	    if (xhr.readyState !== 4) {
	      return;
	    }

	    var response = {
	      statusCode: xhr.status
	    };

	    if (xhr.status >= 200 && xhr.status < 300) {
	      var data;
	      if (options.binary) {
	        data = createBlob([xhr.response || ''], {
	          type: xhr.getResponseHeader('Content-Type')
	        });
	      } else {
	        data = xhr.responseText;
	      }
	      callback(null, response, data);
	    } else {
	      var err = {};
	      if (timedout) {
	        err = new Error('ETIMEDOUT');
	        err.code = 'ETIMEDOUT';
	      } else if (typeof xhr.response === 'string') {
	        try {
	          err = JSON.parse(xhr.response);
	        } catch(e) {}
	      }
	      err.status = xhr.status;
	      callback(err);
	    }
	    cleanUp();
	  };

	  if (options.body && (options.body instanceof Blob)) {
	    readAsArrayBuffer(options.body, function (arrayBuffer) {
	      xhr.send(arrayBuffer);
	    });
	  } else {
	    xhr.send(options.body);
	  }

	  return ret;
	}

	function testXhr() {
	  try {
	    new XMLHttpRequest();
	    return true;
	  } catch (err) {
	    return false;
	  }
	}

	var hasXhr = testXhr();

	function ajax$1(options, callback) {
	  if (hasXhr || options.xhr) {
	    return xhRequest(options, callback);
	  } else {
	    return fetchRequest(options, callback);
	  }
	}

	// the blob already has a type; do nothing
	var res$2 = function () {};

	function defaultBody() {
	  return '';
	}

	function ajaxCore(options, callback) {

	  options = clone(options);

	  var defaultOptions = {
	    method : "GET",
	    headers: {},
	    json: true,
	    processData: true,
	    timeout: 10000,
	    cache: false
	  };

	  options = jsExtend.extend(defaultOptions, options);

	  function onSuccess(obj, resp, cb) {
	    if (!options.binary && options.json && typeof obj === 'string') {
	      /* istanbul ignore next */
	      try {
	        obj = JSON.parse(obj);
	      } catch (e) {
	        // Probably a malformed JSON from server
	        return cb(e);
	      }
	    }
	    if (Array.isArray(obj)) {
	      obj = obj.map(function (v) {
	        if (v.error || v.missing) {
	          return generateErrorFromResponse(v);
	        } else {
	          return v;
	        }
	      });
	    }
	    if (options.binary) {
	      res$2(obj, resp);
	    }
	    cb(null, obj, resp);
	  }

	  if (options.json) {
	    if (!options.binary) {
	      options.headers.Accept = 'application/json';
	    }
	    options.headers['Content-Type'] = options.headers['Content-Type'] ||
	      'application/json';
	  }

	  if (options.binary) {
	    options.encoding = null;
	    options.json = false;
	  }

	  if (!options.processData) {
	    options.json = false;
	  }

	  return ajax$1(options, function (err, response, body) {

	    if (err) {
	      return callback(generateErrorFromResponse(err));
	    }

	    var error;
	    var content_type = response.headers && response.headers['content-type'];
	    var data = body || defaultBody();

	    // CouchDB doesn't always return the right content-type for JSON data, so
	    // we check for ^{ and }$ (ignoring leading/trailing whitespace)
	    if (!options.binary && (options.json || !options.processData) &&
	        typeof data !== 'object' &&
	        (/json/.test(content_type) ||
	         (/^[\s]*\{/.test(data) && /\}[\s]*$/.test(data)))) {
	      try {
	        data = JSON.parse(data.toString());
	      } catch (e) {}
	    }

	    if (response.statusCode >= 200 && response.statusCode < 300) {
	      onSuccess(data, response, callback);
	    } else {
	      error = generateErrorFromResponse(data);
	      error.status = response.statusCode;
	      callback(error);
	    }
	  });
	}

	function ajax(opts, callback) {

	  // cache-buster, specifically designed to work around IE's aggressive caching
	  // see http://www.dashbay.com/2011/05/internet-explorer-caches-ajax/
	  // Also Safari caches POSTs, so we need to cache-bust those too.
	  var ua = (navigator && navigator.userAgent) ?
	    navigator.userAgent.toLowerCase() : '';

	  var isSafari = ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1;
	  var isIE = ua.indexOf('msie') !== -1;
	  var isEdge = ua.indexOf('edge') !== -1;

	  // it appears the new version of safari also caches GETs,
	  // see https://github.com/pouchdb/pouchdb/issues/5010
	  var shouldCacheBust = (isSafari ||
	    ((isIE || isEdge) && opts.method === 'GET'));

	  var cache = 'cache' in opts ? opts.cache : true;

	  var isBlobUrl = /^blob:/.test(opts.url); // don't append nonces for blob URLs

	  if (!isBlobUrl && (shouldCacheBust || !cache)) {
	    var hasArgs = opts.url.indexOf('?') !== -1;
	    opts.url += (hasArgs ? '&' : '?') + '_nonce=' + Date.now();
	  }

	  return ajaxCore(opts, callback);
	}

	var CHANGES_BATCH_SIZE = 25;
	var MAX_SIMULTANEOUS_REVS = 50;

	var supportsBulkGetMap = {};

	var log$1 = debug('pouchdb:http');

	function readAttachmentsAsBlobOrBuffer(row) {
	  var atts = row.doc && row.doc._attachments;
	  if (!atts) {
	    return;
	  }
	  Object.keys(atts).forEach(function (filename) {
	    var att = atts[filename];
	    att.data = b64ToBluffer(att.data, att.content_type);
	  });
	}

	function encodeDocId(id) {
	  if (/^_design/.test(id)) {
	    return '_design/' + encodeURIComponent(id.slice(8));
	  }
	  if (/^_local/.test(id)) {
	    return '_local/' + encodeURIComponent(id.slice(7));
	  }
	  return encodeURIComponent(id);
	}

	function preprocessAttachments$1(doc) {
	  if (!doc._attachments || !Object.keys(doc._attachments)) {
	    return PouchPromise.resolve();
	  }

	  return PouchPromise.all(Object.keys(doc._attachments).map(function (key) {
	    var attachment = doc._attachments[key];
	    if (attachment.data && typeof attachment.data !== 'string') {
	      return new PouchPromise(function (resolve) {
	        blobToBase64(attachment.data, resolve);
	      }).then(function (b64) {
	        attachment.data = b64;
	      });
	    }
	  }));
	}

	function hasUrlPrefix(opts) {
	  if (!opts.prefix) {
	    return false;
	  }

	  var protocol = parseUri(opts.prefix).protocol;

	  return protocol === 'http' || protocol === 'https';
	}

	// Get all the information you possibly can about the URI given by name and
	// return it as a suitable object.
	function getHost(name, opts) {

	  // encode db name if opts.prefix is a url (#5574)
	  if (hasUrlPrefix(opts)) {
	    var dbName = opts.name.substr(opts.prefix.length);
	    name = opts.prefix + encodeURIComponent(dbName);
	  }

	  // Prase the URI into all its little bits
	  var uri = parseUri(name);

	  // Store the user and password as a separate auth object
	  if (uri.user || uri.password) {
	    uri.auth = {username: uri.user, password: uri.password};
	  }

	  // Split the path part of the URI into parts using '/' as the delimiter
	  // after removing any leading '/' and any trailing '/'
	  var parts = uri.path.replace(/(^\/|\/$)/g, '').split('/');

	  // Store the first part as the database name and remove it from the parts
	  // array
	  uri.db = parts.pop();
	  // Prevent double encoding of URI component
	  if (uri.db.indexOf('%') === -1) {
	    uri.db = encodeURIComponent(uri.db);
	  }

	  // Restore the path by joining all the remaining parts (all the parts
	  // except for the database name) with '/'s
	  uri.path = parts.join('/');

	  return uri;
	}

	// Generate a URL with the host data given by opts and the given path
	function genDBUrl(opts, path) {
	  return genUrl(opts, opts.db + '/' + path);
	}

	// Generate a URL with the host data given by opts and the given path
	function genUrl(opts, path) {
	  // If the host already has a path, then we need to have a path delimiter
	  // Otherwise, the path delimiter is the empty string
	  var pathDel = !opts.path ? '' : '/';

	  // If the host already has a path, then we need to have a path delimiter
	  // Otherwise, the path delimiter is the empty string
	  return opts.protocol + '://' + opts.host +
	         (opts.port ? (':' + opts.port) : '') +
	         '/' + opts.path + pathDel + path;
	}

	function paramsToStr(params) {
	  return '?' + Object.keys(params).map(function (k) {
	    return k + '=' + encodeURIComponent(params[k]);
	  }).join('&');
	}

	// Implements the PouchDB API for dealing with CouchDB instances over HTTP
	function HttpPouch(opts, callback) {

	  // The functions that will be publicly available for HttpPouch
	  var api = this;

	  var host = getHost(opts.name, opts);
	  var dbUrl = genDBUrl(host, '');

	  opts = clone(opts);
	  var ajaxOpts = opts.ajax || {};

	  if (opts.auth || host.auth) {
	    var nAuth = opts.auth || host.auth;
	    var str = nAuth.username + ':' + nAuth.password;
	    var token = btoa$1(unescape(encodeURIComponent(str)));
	    ajaxOpts.headers = ajaxOpts.headers || {};
	    ajaxOpts.headers.Authorization = 'Basic ' + token;
	  }

	  // Not strictly necessary, but we do this because numerous tests
	  // rely on swapping ajax in and out.
	  api._ajax = ajax;

	  function ajax$$(userOpts, options, callback) {
	    var reqAjax = userOpts.ajax || {};
	    var reqOpts = jsExtend.extend(clone(ajaxOpts), reqAjax, options);
	    log$1(reqOpts.method + ' ' + reqOpts.url);
	    return api._ajax(reqOpts, callback);
	  }

	  function ajaxPromise(userOpts, opts) {
	    return new PouchPromise(function (resolve, reject) {
	      ajax$$(userOpts, opts, function (err, res) {
	        /* istanbul ignore if */
	        if (err) {
	          return reject(err);
	        }
	        resolve(res);
	      });
	    });
	  }

	  function adapterFun$$(name, fun) {
	    return adapterFun(name, getArguments(function (args) {
	      setup().then(function () {
	        return fun.apply(this, args);
	      }).catch(function (e) {
	        var callback = args.pop();
	        callback(e);
	      });
	    }));
	  }

	  var setupPromise;

	  function setup() {
	    // TODO: Remove `skipSetup` in favor of `skip_setup` in a future release
	    if (opts.skipSetup || opts.skip_setup) {
	      return PouchPromise.resolve();
	    }

	    // If there is a setup in process or previous successful setup
	    // done then we will use that
	    // If previous setups have been rejected we will try again
	    if (setupPromise) {
	      return setupPromise;
	    }

	    var checkExists = {method: 'GET', url: dbUrl};
	    setupPromise = ajaxPromise({}, checkExists).catch(function (err) {
	      if (err && err.status && err.status === 404) {
	        // Doesnt exist, create it
	        explainError(404, 'PouchDB is just detecting if the remote exists.');
	        return ajaxPromise({}, {method: 'PUT', url: dbUrl});
	      } else {
	        return PouchPromise.reject(err);
	      }
	    }).catch(function (err) {
	      // If we try to create a database that already exists, skipped in
	      // istanbul since its catching a race condition.
	      /* istanbul ignore if */
	      if (err && err.status && err.status === 412) {
	        return true;
	      }
	      return PouchPromise.reject(err);
	    });

	    setupPromise.catch(function () {
	      setupPromise = null;
	    });

	    return setupPromise;
	  }

	  setTimeout(function () {
	    callback(null, api);
	  });

	  api.type = function () {
	    return 'http';
	  };

	  api.id = adapterFun$$('id', function (callback) {
	    ajax$$({}, {method: 'GET', url: genUrl(host, '')}, function (err, result) {
	      var uuid = (result && result.uuid) ?
	        (result.uuid + host.db) : genDBUrl(host, '');
	      callback(null, uuid);
	    });
	  });

	  api.request = adapterFun$$('request', function (options, callback) {
	    options.url = genDBUrl(host, options.url);
	    ajax$$({}, options, callback);
	  });

	  // Sends a POST request to the host calling the couchdb _compact function
	  //    version: The version of CouchDB it is running
	  api.compact = adapterFun$$('compact', function (opts, callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    opts = clone(opts);
	    ajax$$(opts, {
	      url: genDBUrl(host, '_compact'),
	      method: 'POST'
	    }, function () {
	      function ping() {
	        api.info(function (err, res) {
	          if (res && !res.compact_running) {
	            callback(null, {ok: true});
	          } else {
	            setTimeout(ping, opts.interval || 200);
	          }
	        });
	      }
	      // Ping the http if it's finished compaction
	      ping();
	    });
	  });

	  api.bulkGet = adapterFun('bulkGet', function (opts, callback) {
	    var self = this;

	    function doBulkGet(cb) {
	      var params = {};
	      if (opts.revs) {
	        params.revs = true;
	      }
	      if (opts.attachments) {
	        /* istanbul ignore next */
	        params.attachments = true;
	      }
	      ajax$$({}, {
	        url: genDBUrl(host, '_bulk_get' + paramsToStr(params)),
	        method: 'POST',
	        body: { docs: opts.docs}
	      }, cb);
	    }

	    function doBulkGetShim() {
	      // avoid "url too long error" by splitting up into multiple requests
	      var batchSize = MAX_SIMULTANEOUS_REVS;
	      var numBatches = Math.ceil(opts.docs.length / batchSize);
	      var numDone = 0;
	      var results = new Array(numBatches);

	      function onResult(batchNum) {
	        return function (err, res) {
	          // err is impossible because shim returns a list of errs in that case
	          results[batchNum] = res.results;
	          if (++numDone === numBatches) {
	            callback(null, {results: flatten(results)});
	          }
	        };
	      }

	      for (var i = 0; i < numBatches; i++) {
	        var subOpts = pick(opts, ['revs', 'attachments']);
	        subOpts.ajax = ajaxOpts;
	        subOpts.docs = opts.docs.slice(i * batchSize,
	          Math.min(opts.docs.length, (i + 1) * batchSize));
	        bulkGet(self, subOpts, onResult(i));
	      }
	    }

	    // mark the whole database as either supporting or not supporting _bulk_get
	    var dbUrl = genUrl(host, '');
	    var supportsBulkGet = supportsBulkGetMap[dbUrl];

	    if (typeof supportsBulkGet !== 'boolean') {
	      // check if this database supports _bulk_get
	      doBulkGet(function (err, res) {
	        /* istanbul ignore else */
	        if (err) {
	          var status = Math.floor(err.status / 100);
	          /* istanbul ignore else */
	          if (status === 4 || status === 5) { // 40x or 50x
	            supportsBulkGetMap[dbUrl] = false;
	            explainError(
	              err.status,
	              'PouchDB is just detecting if the remote ' +
	              'supports the _bulk_get API.'
	            );
	            doBulkGetShim();
	          } else {
	            callback(err);
	          }
	        } else {
	          supportsBulkGetMap[dbUrl] = true;
	          callback(null, res);
	        }
	      });
	    } else if (supportsBulkGet) {
	      /* istanbul ignore next */
	      doBulkGet(callback);
	    } else {
	      doBulkGetShim();
	    }
	  });

	  // Calls GET on the host, which gets back a JSON string containing
	  //    couchdb: A welcome string
	  //    version: The version of CouchDB it is running
	  api._info = function (callback) {
	    setup().then(function () {
	      ajax$$({}, {
	        method: 'GET',
	        url: genDBUrl(host, '')
	      }, function (err, res) {
	        /* istanbul ignore next */
	        if (err) {
	        return callback(err);
	        }
	        res.host = genDBUrl(host, '');
	        callback(null, res);
	      });
	    }).catch(callback);
	  };

	  // Get the document with the given id from the database given by host.
	  // The id could be solely the _id in the database, or it may be a
	  // _design/ID or _local/ID path
	  api.get = adapterFun$$('get', function (id, opts, callback) {
	    // If no options were given, set the callback to the second parameter
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    opts = clone(opts);

	    // List of parameters to add to the GET request
	    var params = {};

	    if (opts.revs) {
	      params.revs = true;
	    }

	    if (opts.revs_info) {
	      params.revs_info = true;
	    }

	    if (opts.open_revs) {
	      if (opts.open_revs !== "all") {
	        opts.open_revs = JSON.stringify(opts.open_revs);
	      }
	      params.open_revs = opts.open_revs;
	    }

	    if (opts.rev) {
	      params.rev = opts.rev;
	    }

	    if (opts.conflicts) {
	      params.conflicts = opts.conflicts;
	    }

	    id = encodeDocId(id);

	    // Set the options for the ajax call
	    var options = {
	      method: 'GET',
	      url: genDBUrl(host, id + paramsToStr(params))
	    };

	    function fetchAttachments(doc) {
	      var atts = doc._attachments;
	      var filenames = atts && Object.keys(atts);
	      if (!atts || !filenames.length) {
	        return;
	      }
	      // we fetch these manually in separate XHRs, because
	      // Sync Gateway would normally send it back as multipart/mixed,
	      // which we cannot parse. Also, this is more efficient than
	      // receiving attachments as base64-encoded strings.
	      function fetch() {

	        if (!filenames.length) {
	          return null;
	        }

	        var filename = filenames.pop();
	        var att = atts[filename];
	        var path = encodeDocId(doc._id) + '/' + encodeAttachmentId(filename) +
	          '?rev=' + doc._rev;
	        return ajaxPromise(opts, {
	          method: 'GET',
	          url: genDBUrl(host, path),
	          binary: true
	        }).then(function (blob) {
	          if (opts.binary) {
	            return blob;
	          }
	          return new PouchPromise(function (resolve) {
	            blobToBase64(blob, resolve);
	          });
	        }).then(function (data) {
	          delete att.stub;
	          delete att.length;
	          att.data = data;
	        });
	      }

	      // This limits the number of parallel xhr requests to 5 any time
	      // to avoid issues with maximum browser request limits
	      return new PromisePool(fetch, 5, {promise: PouchPromise}).start();
	    }

	    function fetchAllAttachments(docOrDocs) {
	      if (Array.isArray(docOrDocs)) {
	        return PouchPromise.all(docOrDocs.map(function (doc) {
	          if (doc.ok) {
	            return fetchAttachments(doc.ok);
	          }
	        }));
	      }
	      return fetchAttachments(docOrDocs);
	    }

	    ajaxPromise(opts, options).then(function (res) {
	      return PouchPromise.resolve().then(function () {
	        if (opts.attachments) {
	          return fetchAllAttachments(res);
	        }
	      }).then(function () {
	        callback(null, res);
	      });
	    }).catch(callback);
	  });

	  // Delete the document given by doc from the database given by host.
	  api.remove = adapterFun$$('remove',
	      function (docOrId, optsOrRev, opts, callback) {
	    var doc;
	    if (typeof optsOrRev === 'string') {
	      // id, rev, opts, callback style
	      doc = {
	        _id: docOrId,
	        _rev: optsOrRev
	      };
	      if (typeof opts === 'function') {
	        callback = opts;
	        opts = {};
	      }
	    } else {
	      // doc, opts, callback style
	      doc = docOrId;
	      if (typeof optsOrRev === 'function') {
	        callback = optsOrRev;
	        opts = {};
	      } else {
	        callback = opts;
	        opts = optsOrRev;
	      }
	    }

	    var rev = (doc._rev || opts.rev);

	    // Delete the document
	    ajax$$(opts, {
	      method: 'DELETE',
	      url: genDBUrl(host, encodeDocId(doc._id)) + '?rev=' + rev
	    }, callback);
	  });

	  function encodeAttachmentId(attachmentId) {
	    return attachmentId.split("/").map(encodeURIComponent).join("/");
	  }

	  // Get the attachment
	  api.getAttachment =
	    adapterFun$$('getAttachment', function (docId, attachmentId, opts,
	                                                callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    var params = opts.rev ? ('?rev=' + opts.rev) : '';
	    var url = genDBUrl(host, encodeDocId(docId)) + '/' +
	      encodeAttachmentId(attachmentId) + params;
	    ajax$$(opts, {
	      method: 'GET',
	      url: url,
	      binary: true
	    }, callback);
	  });

	  // Remove the attachment given by the id and rev
	  api.removeAttachment =
	    adapterFun$$('removeAttachment', function (docId, attachmentId, rev,
	                                                   callback) {

	    var url = genDBUrl(host, encodeDocId(docId) + '/' +
	      encodeAttachmentId(attachmentId)) + '?rev=' + rev;

	    ajax$$({}, {
	      method: 'DELETE',
	      url: url
	    }, callback);
	  });

	  // Add the attachment given by blob and its contentType property
	  // to the document with the given id, the revision given by rev, and
	  // add it to the database given by host.
	  api.putAttachment =
	    adapterFun$$('putAttachment', function (docId, attachmentId, rev, blob,
	                                                type, callback) {
	    if (typeof type === 'function') {
	      callback = type;
	      type = blob;
	      blob = rev;
	      rev = null;
	    }
	    var id = encodeDocId(docId) + '/' + encodeAttachmentId(attachmentId);
	    var url = genDBUrl(host, id);
	    if (rev) {
	      url += '?rev=' + rev;
	    }

	    if (typeof blob === 'string') {
	      // input is assumed to be a base64 string
	      var binary;
	      try {
	        binary = atob$1(blob);
	      } catch (err) {
	        return callback(createError(BAD_ARG,
	                        'Attachment is not a valid base64 string'));
	      }
	      blob = binary ? binStringToBluffer(binary, type) : '';
	    }

	    var opts = {
	      headers: {'Content-Type': type},
	      method: 'PUT',
	      url: url,
	      processData: false,
	      body: blob,
	      timeout: ajaxOpts.timeout || 60000
	    };
	    // Add the attachment
	    ajax$$({}, opts, callback);
	  });

	  // Update/create multiple documents given by req in the database
	  // given by host.
	  api._bulkDocs = function (req, opts, callback) {
	    // If new_edits=false then it prevents the database from creating
	    // new revision numbers for the documents. Instead it just uses
	    // the old ones. This is used in database replication.
	    req.new_edits = opts.new_edits;

	    setup().then(function () {
	      return PouchPromise.all(req.docs.map(preprocessAttachments$1));
	    }).then(function () {
	      // Update/create the documents
	      ajax$$(opts, {
	        method: 'POST',
	        url: genDBUrl(host, '_bulk_docs'),
	        timeout: opts.timeout,
	        body: req
	      }, function (err, results) {
	        if (err) {
	          return callback(err);
	        }
	        results.forEach(function (result) {
	          result.ok = true; // smooths out cloudant not adding this
	        });
	        callback(null, results);
	      });
	    }).catch(callback);
	  };


	  // Update/create document
	  api._put = function (doc, opts, callback) {
	    setup().then(function () {
	      return preprocessAttachments$1(doc);
	    }).then(function () {
	      // Update/create the document
	      ajax$$(opts, {
	        method: 'PUT',
	        url: genDBUrl(host, encodeURIComponent(doc._id)),
	        body: doc
	      }, function (err, result) {
	        if (err) {
	          return callback(err);
	        }
	        callback(null, result);
	      });
	    }).catch(callback);
	  };


	  // Get a listing of the documents in the database given
	  // by host and ordered by increasing id.
	  api.allDocs = adapterFun$$('allDocs', function (opts, callback) {
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }
	    opts = clone(opts);

	    // List of parameters to add to the GET request
	    var params = {};
	    var body;
	    var method = 'GET';

	    if (opts.conflicts) {
	      params.conflicts = true;
	    }

	    if (opts.descending) {
	      params.descending = true;
	    }

	    if (opts.include_docs) {
	      params.include_docs = true;
	    }

	    // added in CouchDB 1.6.0
	    if (opts.attachments) {
	      params.attachments = true;
	    }

	    if (opts.key) {
	      params.key = JSON.stringify(opts.key);
	    }

	    if (opts.start_key) {
	      opts.startkey = opts.start_key;
	    }

	    if (opts.startkey) {
	      params.startkey = JSON.stringify(opts.startkey);
	    }

	    if (opts.end_key) {
	      opts.endkey = opts.end_key;
	    }

	    if (opts.endkey) {
	      params.endkey = JSON.stringify(opts.endkey);
	    }

	    if (typeof opts.inclusive_end !== 'undefined') {
	      params.inclusive_end = !!opts.inclusive_end;
	    }

	    if (typeof opts.limit !== 'undefined') {
	      params.limit = opts.limit;
	    }

	    if (typeof opts.skip !== 'undefined') {
	      params.skip = opts.skip;
	    }

	    var paramStr = paramsToStr(params);

	    if (typeof opts.keys !== 'undefined') {
	      method = 'POST';
	      body = {keys: opts.keys};
	    }

	    // Get the document listing
	    ajaxPromise(opts, {
	      method: method,
	      url: genDBUrl(host, '_all_docs' + paramStr),
	      body: body
	    }).then(function (res) {
	      if (opts.include_docs && opts.attachments && opts.binary) {
	        res.rows.forEach(readAttachmentsAsBlobOrBuffer);
	      }
	      callback(null, res);
	    }).catch(callback);
	  });

	  // Get a list of changes made to documents in the database given by host.
	  // TODO According to the README, there should be two other methods here,
	  // api.changes.addListener and api.changes.removeListener.
	  api._changes = function (opts) {

	    // We internally page the results of a changes request, this means
	    // if there is a large set of changes to be returned we can start
	    // processing them quicker instead of waiting on the entire
	    // set of changes to return and attempting to process them at once
	    var batchSize = 'batch_size' in opts ? opts.batch_size : CHANGES_BATCH_SIZE;

	    opts = clone(opts);
	    opts.timeout = ('timeout' in opts) ? opts.timeout :
	      ('timeout' in ajaxOpts) ? ajaxOpts.timeout :
	      30 * 1000;

	    // We give a 5 second buffer for CouchDB changes to respond with
	    // an ok timeout (if a timeout it set)
	    var params = opts.timeout ? {timeout: opts.timeout - (5 * 1000)} : {};
	    var limit = (typeof opts.limit !== 'undefined') ? opts.limit : false;
	    var returnDocs;
	    if ('return_docs' in opts) {
	      returnDocs = opts.return_docs;
	    } else if ('returnDocs' in opts) {
	      // TODO: Remove 'returnDocs' in favor of 'return_docs' in a future release
	      returnDocs = opts.returnDocs;
	    } else {
	      returnDocs = true;
	    }
	    //
	    var leftToFetch = limit;

	    if (opts.style) {
	      params.style = opts.style;
	    }

	    if (opts.include_docs || opts.filter && typeof opts.filter === 'function') {
	      params.include_docs = true;
	    }

	    if (opts.attachments) {
	      params.attachments = true;
	    }

	    if (opts.continuous) {
	      params.feed = 'longpoll';
	    }

	    if (opts.conflicts) {
	      params.conflicts = true;
	    }

	    if (opts.descending) {
	      params.descending = true;
	    }

	    if ('heartbeat' in opts) {
	      // If the heartbeat value is false, it disables the default heartbeat
	      if (opts.heartbeat) {
	        params.heartbeat = opts.heartbeat;
	      }
	    } else {
	      // Default heartbeat to 10 seconds
	      params.heartbeat = 10000;
	    }

	    if (opts.filter && typeof opts.filter === 'string') {
	      params.filter = opts.filter;
	    }

	    if (opts.view && typeof opts.view === 'string') {
	      params.filter = '_view';
	      params.view = opts.view;
	    }

	    // If opts.query_params exists, pass it through to the changes request.
	    // These parameters may be used by the filter on the source database.
	    if (opts.query_params && typeof opts.query_params === 'object') {
	      for (var param_name in opts.query_params) {
	        /* istanbul ignore else */
	        if (opts.query_params.hasOwnProperty(param_name)) {
	          params[param_name] = opts.query_params[param_name];
	        }
	      }
	    }

	    var method = 'GET';
	    var body;

	    if (opts.doc_ids) {
	      // set this automagically for the user; it's annoying that couchdb
	      // requires both a "filter" and a "doc_ids" param.
	      params.filter = '_doc_ids';
	      method = 'POST';
	      body = {doc_ids: opts.doc_ids };
	    }

	    var xhr;
	    var lastFetchedSeq;

	    // Get all the changes starting wtih the one immediately after the
	    // sequence number given by since.
	    var fetch = function (since, callback) {
	      if (opts.aborted) {
	        return;
	      }
	      params.since = since;
	      // "since" can be any kind of json object in Coudant/CouchDB 2.x
	      /* istanbul ignore next */
	      if (typeof params.since === "object") {
	        params.since = JSON.stringify(params.since);
	      }

	      if (opts.descending) {
	        if (limit) {
	          params.limit = leftToFetch;
	        }
	      } else {
	        params.limit = (!limit || leftToFetch > batchSize) ?
	          batchSize : leftToFetch;
	      }

	      // Set the options for the ajax call
	      var xhrOpts = {
	        method: method,
	        url: genDBUrl(host, '_changes' + paramsToStr(params)),
	        timeout: opts.timeout,
	        body: body
	      };
	      lastFetchedSeq = since;

	      /* istanbul ignore if */
	      if (opts.aborted) {
	        return;
	      }

	      // Get the changes
	      setup().then(function () {
	        xhr = ajax$$(opts, xhrOpts, callback);
	      }).catch(callback);
	    };

	    // If opts.since exists, get all the changes from the sequence
	    // number given by opts.since. Otherwise, get all the changes
	    // from the sequence number 0.
	    var results = {results: []};

	    var fetched = function (err, res) {
	      if (opts.aborted) {
	        return;
	      }
	      var raw_results_length = 0;
	      // If the result of the ajax call (res) contains changes (res.results)
	      if (res && res.results) {
	        raw_results_length = res.results.length;
	        results.last_seq = res.last_seq;
	        // For each change
	        var req = {};
	        req.query = opts.query_params;
	        res.results = res.results.filter(function (c) {
	          leftToFetch--;
	          var ret = filterChange(opts)(c);
	          if (ret) {
	            if (opts.include_docs && opts.attachments && opts.binary) {
	              readAttachmentsAsBlobOrBuffer(c);
	            }
	            if (returnDocs) {
	              results.results.push(c);
	            }
	            opts.onChange(c);
	          }
	          return ret;
	        });
	      } else if (err) {
	        // In case of an error, stop listening for changes and call
	        // opts.complete
	        opts.aborted = true;
	        opts.complete(err);
	        return;
	      }

	      // The changes feed may have timed out with no results
	      // if so reuse last update sequence
	      if (res && res.last_seq) {
	        lastFetchedSeq = res.last_seq;
	      }

	      var finished = (limit && leftToFetch <= 0) ||
	        (res && raw_results_length < batchSize) ||
	        (opts.descending);

	      if ((opts.continuous && !(limit && leftToFetch <= 0)) || !finished) {
	        // Queue a call to fetch again with the newest sequence number
	        setTimeout(function () { fetch(lastFetchedSeq, fetched); }, 0);
	      } else {
	        // We're done, call the callback
	        opts.complete(null, results);
	      }
	    };

	    fetch(opts.since || 0, fetched);

	    // Return a method to cancel this method from processing any more
	    return {
	      cancel: function () {
	        opts.aborted = true;
	        if (xhr) {
	          xhr.abort();
	        }
	      }
	    };
	  };

	  // Given a set of document/revision IDs (given by req), tets the subset of
	  // those that do NOT correspond to revisions stored in the database.
	  // See http://wiki.apache.org/couchdb/HttpPostRevsDiff
	  api.revsDiff = adapterFun$$('revsDiff', function (req, opts, callback) {
	    // If no options were given, set the callback to be the second parameter
	    if (typeof opts === 'function') {
	      callback = opts;
	      opts = {};
	    }

	    // Get the missing document/revision IDs
	    ajax$$(opts, {
	      method: 'POST',
	      url: genDBUrl(host, '_revs_diff'),
	      body: req
	    }, callback);
	  });

	  api._close = function (callback) {
	    callback();
	  };

	  api._destroy = function (options, callback) {
	    ajax$$(options, {
	      url: genDBUrl(host, ''),
	      method: 'DELETE'
	    }, function (err, resp) {
	      if (err && err.status && err.status !== 404) {
	        return callback(err);
	      }
	      callback(null, resp);
	    });
	  };
	}

	// HttpPouch is a valid adapter.
	HttpPouch.valid = function () {
	  return true;
	};

	function HttpPouch$1 (PouchDB) {
	  PouchDB.adapter('http', HttpPouch, false);
	  PouchDB.adapter('https', HttpPouch, false);
	}

	function pad(str, padWith, upToLength) {
	  var padding = '';
	  var targetLength = upToLength - str.length;
	  /* istanbul ignore next */
	  while (padding.length < targetLength) {
	    padding += padWith;
	  }
	  return padding;
	}

	function padLeft(str, padWith, upToLength) {
	  var padding = pad(str, padWith, upToLength);
	  return padding + str;
	}

	var MIN_MAGNITUDE = -324; // verified by -Number.MIN_VALUE
	var MAGNITUDE_DIGITS = 3; // ditto
	var SEP = ''; // set to '_' for easier debugging 

	function collate(a, b) {

	  if (a === b) {
	    return 0;
	  }

	  a = normalizeKey(a);
	  b = normalizeKey(b);

	  var ai = collationIndex(a);
	  var bi = collationIndex(b);
	  if ((ai - bi) !== 0) {
	    return ai - bi;
	  }
	  if (a === null) {
	    return 0;
	  }
	  switch (typeof a) {
	    case 'number':
	      return a - b;
	    case 'boolean':
	      return a === b ? 0 : (a < b ? -1 : 1);
	    case 'string':
	      return stringCollate(a, b);
	  }
	  return Array.isArray(a) ? arrayCollate(a, b) : objectCollate(a, b);
	}

	// couch considers null/NaN/Infinity/-Infinity === undefined,
	// for the purposes of mapreduce indexes. also, dates get stringified.
	function normalizeKey(key) {
	  switch (typeof key) {
	    case 'undefined':
	      return null;
	    case 'number':
	      if (key === Infinity || key === -Infinity || isNaN(key)) {
	        return null;
	      }
	      return key;
	    case 'object':
	      var origKey = key;
	      if (Array.isArray(key)) {
	        var len = key.length;
	        key = new Array(len);
	        for (var i = 0; i < len; i++) {
	          key[i] = normalizeKey(origKey[i]);
	        }
	      /* istanbul ignore next */
	      } else if (key instanceof Date) {
	        return key.toJSON();
	      } else if (key !== null) { // generic object
	        key = {};
	        for (var k in origKey) {
	          if (origKey.hasOwnProperty(k)) {
	            var val = origKey[k];
	            if (typeof val !== 'undefined') {
	              key[k] = normalizeKey(val);
	            }
	          }
	        }
	      }
	  }
	  return key;
	}

	function indexify(key) {
	  if (key !== null) {
	    switch (typeof key) {
	      case 'boolean':
	        return key ? 1 : 0;
	      case 'number':
	        return numToIndexableString(key);
	      case 'string':
	        // We've to be sure that key does not contain \u0000
	        // Do order-preserving replacements:
	        // 0 -> 1, 1
	        // 1 -> 1, 2
	        // 2 -> 2, 2
	        return key
	          .replace(/\u0002/g, '\u0002\u0002')
	          .replace(/\u0001/g, '\u0001\u0002')
	          .replace(/\u0000/g, '\u0001\u0001');
	      case 'object':
	        var isArray = Array.isArray(key);
	        var arr = isArray ? key : Object.keys(key);
	        var i = -1;
	        var len = arr.length;
	        var result = '';
	        if (isArray) {
	          while (++i < len) {
	            result += toIndexableString(arr[i]);
	          }
	        } else {
	          while (++i < len) {
	            var objKey = arr[i];
	            result += toIndexableString(objKey) +
	                toIndexableString(key[objKey]);
	          }
	        }
	        return result;
	    }
	  }
	  return '';
	}

	// convert the given key to a string that would be appropriate
	// for lexical sorting, e.g. within a database, where the
	// sorting is the same given by the collate() function.
	function toIndexableString(key) {
	  var zero = '\u0000';
	  key = normalizeKey(key);
	  return collationIndex(key) + SEP + indexify(key) + zero;
	}

	function parseNumber(str, i) {
	  var originalIdx = i;
	  var num;
	  var zero = str[i] === '1';
	  if (zero) {
	    num = 0;
	    i++;
	  } else {
	    var neg = str[i] === '0';
	    i++;
	    var numAsString = '';
	    var magAsString = str.substring(i, i + MAGNITUDE_DIGITS);
	    var magnitude = parseInt(magAsString, 10) + MIN_MAGNITUDE;
	    /* istanbul ignore next */
	    if (neg) {
	      magnitude = -magnitude;
	    }
	    i += MAGNITUDE_DIGITS;
	    while (true) {
	      var ch = str[i];
	      if (ch === '\u0000') {
	        break;
	      } else {
	        numAsString += ch;
	      }
	      i++;
	    }
	    numAsString = numAsString.split('.');
	    if (numAsString.length === 1) {
	      num = parseInt(numAsString, 10);
	    } else {
	      /* istanbul ignore next */
	      num = parseFloat(numAsString[0] + '.' + numAsString[1]);
	    }
	    /* istanbul ignore next */
	    if (neg) {
	      num = num - 10;
	    }
	    /* istanbul ignore next */
	    if (magnitude !== 0) {
	      // parseFloat is more reliable than pow due to rounding errors
	      // e.g. Number.MAX_VALUE would return Infinity if we did
	      // num * Math.pow(10, magnitude);
	      num = parseFloat(num + 'e' + magnitude);
	    }
	  }
	  return {num: num, length : i - originalIdx};
	}

	// move up the stack while parsing
	// this function moved outside of parseIndexableString for performance
	function pop(stack, metaStack) {
	  var obj = stack.pop();

	  if (metaStack.length) {
	    var lastMetaElement = metaStack[metaStack.length - 1];
	    if (obj === lastMetaElement.element) {
	      // popping a meta-element, e.g. an object whose value is another object
	      metaStack.pop();
	      lastMetaElement = metaStack[metaStack.length - 1];
	    }
	    var element = lastMetaElement.element;
	    var lastElementIndex = lastMetaElement.index;
	    if (Array.isArray(element)) {
	      element.push(obj);
	    } else if (lastElementIndex === stack.length - 2) { // obj with key+value
	      var key = stack.pop();
	      element[key] = obj;
	    } else {
	      stack.push(obj); // obj with key only
	    }
	  }
	}

	function parseIndexableString(str) {
	  var stack = [];
	  var metaStack = []; // stack for arrays and objects
	  var i = 0;

	  /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
	  while (true) {
	    var collationIndex = str[i++];
	    if (collationIndex === '\u0000') {
	      if (stack.length === 1) {
	        return stack.pop();
	      } else {
	        pop(stack, metaStack);
	        continue;
	      }
	    }
	    switch (collationIndex) {
	      case '1':
	        stack.push(null);
	        break;
	      case '2':
	        stack.push(str[i] === '1');
	        i++;
	        break;
	      case '3':
	        var parsedNum = parseNumber(str, i);
	        stack.push(parsedNum.num);
	        i += parsedNum.length;
	        break;
	      case '4':
	        var parsedStr = '';
	        /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
	        while (true) {
	          var ch = str[i];
	          if (ch === '\u0000') {
	            break;
	          }
	          parsedStr += ch;
	          i++;
	        }
	        // perform the reverse of the order-preserving replacement
	        // algorithm (see above)
	        parsedStr = parsedStr.replace(/\u0001\u0001/g, '\u0000')
	          .replace(/\u0001\u0002/g, '\u0001')
	          .replace(/\u0002\u0002/g, '\u0002');
	        stack.push(parsedStr);
	        break;
	      case '5':
	        var arrayElement = { element: [], index: stack.length };
	        stack.push(arrayElement.element);
	        metaStack.push(arrayElement);
	        break;
	      case '6':
	        var objElement = { element: {}, index: stack.length };
	        stack.push(objElement.element);
	        metaStack.push(objElement);
	        break;
	      /* istanbul ignore next */
	      default:
	        throw new Error(
	          'bad collationIndex or unexpectedly reached end of input: ' +
	            collationIndex);
	    }
	  }
	}

	function arrayCollate(a, b) {
	  var len = Math.min(a.length, b.length);
	  for (var i = 0; i < len; i++) {
	    var sort = collate(a[i], b[i]);
	    if (sort !== 0) {
	      return sort;
	    }
	  }
	  return (a.length === b.length) ? 0 :
	    (a.length > b.length) ? 1 : -1;
	}
	function stringCollate(a, b) {
	  // See: https://github.com/daleharvey/pouchdb/issues/40
	  // This is incompatible with the CouchDB implementation, but its the
	  // best we can do for now
	  return (a === b) ? 0 : ((a > b) ? 1 : -1);
	}
	function objectCollate(a, b) {
	  var ak = Object.keys(a), bk = Object.keys(b);
	  var len = Math.min(ak.length, bk.length);
	  for (var i = 0; i < len; i++) {
	    // First sort the keys
	    var sort = collate(ak[i], bk[i]);
	    if (sort !== 0) {
	      return sort;
	    }
	    // if the keys are equal sort the values
	    sort = collate(a[ak[i]], b[bk[i]]);
	    if (sort !== 0) {
	      return sort;
	    }

	  }
	  return (ak.length === bk.length) ? 0 :
	    (ak.length > bk.length) ? 1 : -1;
	}
	// The collation is defined by erlangs ordered terms
	// the atoms null, true, false come first, then numbers, strings,
	// arrays, then objects
	// null/undefined/NaN/Infinity/-Infinity are all considered null
	function collationIndex(x) {
	  var id = ['boolean', 'number', 'string', 'object'];
	  var idx = id.indexOf(typeof x);
	  //false if -1 otherwise true, but fast!!!!1
	  if (~idx) {
	    if (x === null) {
	      return 1;
	    }
	    if (Array.isArray(x)) {
	      return 5;
	    }
	    return idx < 3 ? (idx + 2) : (idx + 3);
	  }
	  /* istanbul ignore next */
	  if (Array.isArray(x)) {
	    return 5;
	  }
	}

	// conversion:
	// x yyy zz...zz
	// x = 0 for negative, 1 for 0, 2 for positive
	// y = exponent (for negative numbers negated) moved so that it's >= 0
	// z = mantisse
	function numToIndexableString(num) {

	  if (num === 0) {
	    return '1';
	  }

	  // convert number to exponential format for easier and
	  // more succinct string sorting
	  var expFormat = num.toExponential().split(/e\+?/);
	  var magnitude = parseInt(expFormat[1], 10);

	  var neg = num < 0;

	  var result = neg ? '0' : '2';

	  // first sort by magnitude
	  // it's easier if all magnitudes are positive
	  var magForComparison = ((neg ? -magnitude : magnitude) - MIN_MAGNITUDE);
	  var magString = padLeft((magForComparison).toString(), '0', MAGNITUDE_DIGITS);

	  result += SEP + magString;

	  // then sort by the factor
	  var factor = Math.abs(parseFloat(expFormat[0])); // [1..10)
	  /* istanbul ignore next */
	  if (neg) { // for negative reverse ordering
	    factor = 10 - factor;
	  }

	  var factorStr = factor.toFixed(20);

	  // strip zeros from the end
	  factorStr = factorStr.replace(/\.?0+$/, '');

	  result += SEP + factorStr;

	  return result;
	}

	/*
	 * Simple task queue to sequentialize actions. Assumes
	 * callbacks will eventually fire (once).
	 */

	function TaskQueue$1() {
	  this.promise = new PouchPromise(function (fulfill) {fulfill(); });
	}
	TaskQueue$1.prototype.add = function (promiseFactory) {
	  this.promise = this.promise.catch(function () {
	    // just recover
	  }).then(function () {
	    return promiseFactory();
	  });
	  return this.promise;
	};
	TaskQueue$1.prototype.finish = function () {
	  return this.promise;
	};

	function createView(opts) {
	  var sourceDB = opts.db;
	  var viewName = opts.viewName;
	  var mapFun = opts.map;
	  var reduceFun = opts.reduce;
	  var temporary = opts.temporary;

	  // the "undefined" part is for backwards compatibility
	  var viewSignature = mapFun.toString() + (reduceFun && reduceFun.toString()) +
	    'undefined';

	  var cachedViews;
	  if (!temporary) {
	    // cache this to ensure we don't try to update the same view twice
	    cachedViews = sourceDB._cachedViews = sourceDB._cachedViews || {};
	    if (cachedViews[viewSignature]) {
	      return cachedViews[viewSignature];
	    }
	  }

	  var promiseForView = sourceDB.info().then(function (info) {

	    var depDbName = info.db_name + '-mrview-' +
	      (temporary ? 'temp' : stringMd5(viewSignature));

	    // save the view name in the source db so it can be cleaned up if necessary
	    // (e.g. when the _design doc is deleted, remove all associated view data)
	    function diffFunction(doc) {
	      doc.views = doc.views || {};
	      var fullViewName = viewName;
	      if (fullViewName.indexOf('/') === -1) {
	        fullViewName = viewName + '/' + viewName;
	      }
	      var depDbs = doc.views[fullViewName] = doc.views[fullViewName] || {};
	      /* istanbul ignore if */
	      if (depDbs[depDbName]) {
	        return; // no update necessary
	      }
	      depDbs[depDbName] = true;
	      return doc;
	    }
	    return upsert(sourceDB, '_local/mrviews', diffFunction).then(function () {
	      return sourceDB.registerDependentDatabase(depDbName).then(function (res) {
	        var db = res.db;
	        db.auto_compaction = true;
	        var view = {
	          name: depDbName,
	          db: db,
	          sourceDB: sourceDB,
	          adapter: sourceDB.adapter,
	          mapFun: mapFun,
	          reduceFun: reduceFun
	        };
	        return view.db.get('_local/lastSeq').catch(function (err) {
	          /* istanbul ignore if */
	          if (err.status !== 404) {
	            throw err;
	          }
	        }).then(function (lastSeqDoc) {
	          view.seq = lastSeqDoc ? lastSeqDoc.seq : 0;
	          if (cachedViews) {
	            view.db.once('destroyed', function () {
	              delete cachedViews[viewSignature];
	            });
	          }
	          return view;
	        });
	      });
	    });
	  });

	  if (cachedViews) {
	    cachedViews[viewSignature] = promiseForView;
	  }
	  return promiseForView;
	}

	function evalfunc(func, emit, sum, log, isArray, toJSON) {
	  return scopedEval(
	    "return (" + func.replace(/;\s*$/, "") + ");",
	    {
	      emit: emit,
	      sum: sum,
	      log: log,
	      isArray: isArray,
	      toJSON: toJSON
	    }
	  );
	}

	var promisedCallback = function (promise, callback) {
	  if (callback) {
	    promise.then(function (res) {
	      process.nextTick(function () {
	        callback(null, res);
	      });
	    }, function (reason) {
	      process.nextTick(function () {
	        callback(reason);
	      });
	    });
	  }
	  return promise;
	};

	var callbackify = function (fun) {
	  return getArguments(function (args) {
	    var cb = args.pop();
	    var promise = fun.apply(this, args);
	    if (typeof cb === 'function') {
	      promisedCallback(promise, cb);
	    }
	    return promise;
	  });
	};

	// Promise finally util similar to Q.finally
	var fin = function (promise, finalPromiseFactory) {
	  return promise.then(function (res) {
	    return finalPromiseFactory().then(function () {
	      return res;
	    });
	  }, function (reason) {
	    return finalPromiseFactory().then(function () {
	      throw reason;
	    });
	  });
	};

	var sequentialize = function (queue, promiseFactory) {
	  return function () {
	    var args = arguments;
	    var that = this;
	    return queue.add(function () {
	      return promiseFactory.apply(that, args);
	    });
	  };
	};

	// uniq an array of strings, order not guaranteed
	// similar to underscore/lodash _.uniq
	var uniq = function (arr) {
	  var map = {};

	  for (var i = 0, len = arr.length; i < len; i++) {
	    map['$' + arr[i]] = true;
	  }

	  var keys = Object.keys(map);
	  var output = new Array(keys.length);

	  for (i = 0, len = keys.length; i < len; i++) {
	    output[i] = keys[i].substring(1);
	  }
	  return output;
	};

	var persistentQueues = {};
	var tempViewQueue = new TaskQueue$1();
	var CHANGES_BATCH_SIZE$1 = 50;

	var log$2 = guardedConsole.bind(null, 'log');

	function parseViewName(name) {
	  // can be either 'ddocname/viewname' or just 'viewname'
	  // (where the ddoc name is the same)
	  return name.indexOf('/') === -1 ? [name, name] : name.split('/');
	}

	function isGenOne(changes) {
	  // only return true if the current change is 1-
	  // and there are no other leafs
	  return changes.length === 1 && /^1-/.test(changes[0].rev);
	}

	function emitError(db, e) {
	  try {
	    db.emit('error', e);
	  } catch (err) {
	    guardedConsole('error',
	      'The user\'s map/reduce function threw an uncaught error.\n' +
	      'You can debug this error by doing:\n' +
	      'myDatabase.on(\'error\', function (err) { debugger; });\n' +
	      'Please double-check your map/reduce function.');
	    guardedConsole('error', e);
	  }
	}

	function tryCode$1(db, fun, args) {
	  // emit an event if there was an error thrown by a map/reduce function.
	  // putting try/catches in a single function also avoids deoptimizations.
	  try {
	    return {
	      output : fun.apply(null, args)
	    };
	  } catch (e) {
	    emitError(db, e);
	    return {error: e};
	  }
	}

	function sortByKeyThenValue(x, y) {
	  var keyCompare = collate(x.key, y.key);
	  return keyCompare !== 0 ? keyCompare : collate(x.value, y.value);
	}

	function sliceResults(results, limit, skip) {
	  skip = skip || 0;
	  if (typeof limit === 'number') {
	    return results.slice(skip, limit + skip);
	  } else if (skip > 0) {
	    return results.slice(skip);
	  }
	  return results;
	}

	function rowToDocId(row) {
	  var val = row.value;
	  // Users can explicitly specify a joined doc _id, or it
	  // defaults to the doc _id that emitted the key/value.
	  var docId = (val && typeof val === 'object' && val._id) || row.id;
	  return docId;
	}

	function readAttachmentsAsBlobOrBuffer$1(res) {
	  res.rows.forEach(function (row) {
	    var atts = row.doc && row.doc._attachments;
	    if (!atts) {
	      return;
	    }
	    Object.keys(atts).forEach(function (filename) {
	      var att = atts[filename];
	      atts[filename].data = b64ToBluffer(att.data, att.content_type);
	    });
	  });
	}

	function postprocessAttachments(opts) {
	  return function (res) {
	    if (opts.include_docs && opts.attachments && opts.binary) {
	      readAttachmentsAsBlobOrBuffer$1(res);
	    }
	    return res;
	  };
	}

	function createBuiltInError(name) {
	  var message = 'builtin ' + name +
	    ' function requires map values to be numbers' +
	    ' or number arrays';
	  return new BuiltInError(message);
	}

	function sum(values) {
	  var result = 0;
	  for (var i = 0, len = values.length; i < len; i++) {
	    var num = values[i];
	    if (typeof num !== 'number') {
	      if (Array.isArray(num)) {
	        // lists of numbers are also allowed, sum them separately
	        result = typeof result === 'number' ? [result] : result;
	        for (var j = 0, jLen = num.length; j < jLen; j++) {
	          var jNum = num[j];
	          if (typeof jNum !== 'number') {
	            throw createBuiltInError('_sum');
	          } else if (typeof result[j] === 'undefined') {
	            result.push(jNum);
	          } else {
	            result[j] += jNum;
	          }
	        }
	      } else { // not array/number
	        throw createBuiltInError('_sum');
	      }
	    } else if (typeof result === 'number') {
	      result += num;
	    } else { // add number to array
	      result[0] += num;
	    }
	  }
	  return result;
	}

	var builtInReduce = {
	  _sum: function (keys, values) {
	    return sum(values);
	  },

	  _count: function (keys, values) {
	    return values.length;
	  },

	  _stats: function (keys, values) {
	    // no need to implement rereduce=true, because Pouch
	    // will never call it
	    function sumsqr(values) {
	      var _sumsqr = 0;
	      for (var i = 0, len = values.length; i < len; i++) {
	        var num = values[i];
	        _sumsqr += (num * num);
	      }
	      return _sumsqr;
	    }
	    return {
	      sum     : sum(values),
	      min     : Math.min.apply(null, values),
	      max     : Math.max.apply(null, values),
	      count   : values.length,
	      sumsqr : sumsqr(values)
	    };
	  }
	};

	function addHttpParam(paramName, opts, params, asJson) {
	  // add an http param from opts to params, optionally json-encoded
	  var val = opts[paramName];
	  if (typeof val !== 'undefined') {
	    if (asJson) {
	      val = encodeURIComponent(JSON.stringify(val));
	    }
	    params.push(paramName + '=' + val);
	  }
	}

	function coerceInteger(integerCandidate) {
	  if (typeof integerCandidate !== 'undefined') {
	    var asNumber = Number(integerCandidate);
	    // prevents e.g. '1foo' or '1.1' being coerced to 1
	    if (!isNaN(asNumber) && asNumber === parseInt(integerCandidate, 10)) {
	      return asNumber;
	    } else {
	      return integerCandidate;
	    }
	  }
	}

	function coerceOptions(opts) {
	  opts.group_level = coerceInteger(opts.group_level);
	  opts.limit = coerceInteger(opts.limit);
	  opts.skip = coerceInteger(opts.skip);
	  return opts;
	}

	function checkPositiveInteger(number) {
	  if (number) {
	    if (typeof number !== 'number') {
	      return  new QueryParseError('Invalid value for integer: "' +
	      number + '"');
	    }
	    if (number < 0) {
	      return new QueryParseError('Invalid value for positive integer: ' +
	        '"' + number + '"');
	    }
	  }
	}

	function checkQueryParseError(options, fun) {
	  var startkeyName = options.descending ? 'endkey' : 'startkey';
	  var endkeyName = options.descending ? 'startkey' : 'endkey';

	  if (typeof options[startkeyName] !== 'undefined' &&
	    typeof options[endkeyName] !== 'undefined' &&
	    collate(options[startkeyName], options[endkeyName]) > 0) {
	    throw new QueryParseError('No rows can match your key range, ' +
	    'reverse your start_key and end_key or set {descending : true}');
	  } else if (fun.reduce && options.reduce !== false) {
	    if (options.include_docs) {
	      throw new QueryParseError('{include_docs:true} is invalid for reduce');
	    } else if (options.keys && options.keys.length > 1 &&
	        !options.group && !options.group_level) {
	      throw new QueryParseError('Multi-key fetches for reduce views must use ' +
	      '{group: true}');
	    }
	  }
	  ['group_level', 'limit', 'skip'].forEach(function (optionName) {
	    var error = checkPositiveInteger(options[optionName]);
	    if (error) {
	      throw error;
	    }
	  });
	}

	function httpQuery(db, fun, opts) {
	  // List of parameters to add to the PUT request
	  var params = [];
	  var body;
	  var method = 'GET';

	  // If opts.reduce exists and is defined, then add it to the list
	  // of parameters.
	  // If reduce=false then the results are that of only the map function
	  // not the final result of map and reduce.
	  addHttpParam('reduce', opts, params);
	  addHttpParam('include_docs', opts, params);
	  addHttpParam('attachments', opts, params);
	  addHttpParam('limit', opts, params);
	  addHttpParam('descending', opts, params);
	  addHttpParam('group', opts, params);
	  addHttpParam('group_level', opts, params);
	  addHttpParam('skip', opts, params);
	  addHttpParam('stale', opts, params);
	  addHttpParam('conflicts', opts, params);
	  addHttpParam('startkey', opts, params, true);
	  addHttpParam('start_key', opts, params, true);
	  addHttpParam('endkey', opts, params, true);
	  addHttpParam('end_key', opts, params, true);
	  addHttpParam('inclusive_end', opts, params);
	  addHttpParam('key', opts, params, true);

	  // Format the list of parameters into a valid URI query string
	  params = params.join('&');
	  params = params === '' ? '' : '?' + params;

	  // If keys are supplied, issue a POST to circumvent GET query string limits
	  // see http://wiki.apache.org/couchdb/HTTP_view_API#Querying_Options
	  if (typeof opts.keys !== 'undefined') {
	    var MAX_URL_LENGTH = 2000;
	    // according to http://stackoverflow.com/a/417184/680742,
	    // the de facto URL length limit is 2000 characters

	    var keysAsString =
	      'keys=' + encodeURIComponent(JSON.stringify(opts.keys));
	    if (keysAsString.length + params.length + 1 <= MAX_URL_LENGTH) {
	      // If the keys are short enough, do a GET. we do this to work around
	      // Safari not understanding 304s on POSTs (see pouchdb/pouchdb#1239)
	      params += (params[0] === '?' ? '&' : '?') + keysAsString;
	    } else {
	      method = 'POST';
	      if (typeof fun === 'string') {
	        body = {keys: opts.keys};
	      } else { // fun is {map : mapfun}, so append to this
	        fun.keys = opts.keys;
	      }
	    }
	  }

	  // We are referencing a query defined in the design doc
	  if (typeof fun === 'string') {
	    var parts = parseViewName(fun);
	    return db.request({
	      method: method,
	      url: '_design/' + parts[0] + '/_view/' + parts[1] + params,
	      body: body
	    }).then(postprocessAttachments(opts));
	  }

	  // We are using a temporary view, terrible for performance, good for testing
	  body = body || {};
	  Object.keys(fun).forEach(function (key) {
	    if (Array.isArray(fun[key])) {
	      body[key] = fun[key];
	    } else {
	      body[key] = fun[key].toString();
	    }
	  });
	  return db.request({
	    method: 'POST',
	    url: '_temp_view' + params,
	    body: body
	  }).then(postprocessAttachments(opts));
	}

	// custom adapters can define their own api._query
	// and override the default behavior
	/* istanbul ignore next */
	function customQuery(db, fun, opts) {
	  return new PouchPromise(function (resolve, reject) {
	    db._query(fun, opts, function (err, res) {
	      if (err) {
	        return reject(err);
	      }
	      resolve(res);
	    });
	  });
	}

	// custom adapters can define their own api._viewCleanup
	// and override the default behavior
	/* istanbul ignore next */
	function customViewCleanup(db) {
	  return new PouchPromise(function (resolve, reject) {
	    db._viewCleanup(function (err, res) {
	      if (err) {
	        return reject(err);
	      }
	      resolve(res);
	    });
	  });
	}

	function defaultsTo(value) {
	  return function (reason) {
	    /* istanbul ignore else */
	    if (reason.status === 404) {
	      return value;
	    } else {
	      throw reason;
	    }
	  };
	}

	// returns a promise for a list of docs to update, based on the input docId.
	// the order doesn't matter, because post-3.2.0, bulkDocs
	// is an atomic operation in all three adapters.
	function getDocsToPersist(docId, view, docIdsToChangesAndEmits) {
	  var metaDocId = '_local/doc_' + docId;
	  var defaultMetaDoc = {_id: metaDocId, keys: []};
	  var docData = docIdsToChangesAndEmits[docId];
	  var indexableKeysToKeyValues = docData.indexableKeysToKeyValues;
	  var changes = docData.changes;

	  function getMetaDoc() {
	    if (isGenOne(changes)) {
	      // generation 1, so we can safely assume initial state
	      // for performance reasons (avoids unnecessary GETs)
	      return PouchPromise.resolve(defaultMetaDoc);
	    }
	    return view.db.get(metaDocId).catch(defaultsTo(defaultMetaDoc));
	  }

	  function getKeyValueDocs(metaDoc) {
	    if (!metaDoc.keys.length) {
	      // no keys, no need for a lookup
	      return PouchPromise.resolve({rows: []});
	    }
	    return view.db.allDocs({
	      keys: metaDoc.keys,
	      include_docs: true
	    });
	  }

	  function processKvDocs(metaDoc, kvDocsRes) {
	    var kvDocs = [];
	    var oldKeysMap = {};

	    for (var i = 0, len = kvDocsRes.rows.length; i < len; i++) {
	      var row = kvDocsRes.rows[i];
	      var doc = row.doc;
	      if (!doc) { // deleted
	        continue;
	      }
	      kvDocs.push(doc);
	      oldKeysMap[doc._id] = true;
	      doc._deleted = !indexableKeysToKeyValues[doc._id];
	      if (!doc._deleted) {
	        var keyValue = indexableKeysToKeyValues[doc._id];
	        if ('value' in keyValue) {
	          doc.value = keyValue.value;
	        }
	      }
	    }

	    var newKeys = Object.keys(indexableKeysToKeyValues);
	    newKeys.forEach(function (key) {
	      if (!oldKeysMap[key]) {
	        // new doc
	        var kvDoc = {
	          _id: key
	        };
	        var keyValue = indexableKeysToKeyValues[key];
	        if ('value' in keyValue) {
	          kvDoc.value = keyValue.value;
	        }
	        kvDocs.push(kvDoc);
	      }
	    });
	    metaDoc.keys = uniq(newKeys.concat(metaDoc.keys));
	    kvDocs.push(metaDoc);

	    return kvDocs;
	  }

	  return getMetaDoc().then(function (metaDoc) {
	    return getKeyValueDocs(metaDoc).then(function (kvDocsRes) {
	      return processKvDocs(metaDoc, kvDocsRes);
	    });
	  });
	}

	// updates all emitted key/value docs and metaDocs in the mrview database
	// for the given batch of documents from the source database
	function saveKeyValues(view, docIdsToChangesAndEmits, seq) {
	  var seqDocId = '_local/lastSeq';
	  return view.db.get(seqDocId)
	  .catch(defaultsTo({_id: seqDocId, seq: 0}))
	  .then(function (lastSeqDoc) {
	    var docIds = Object.keys(docIdsToChangesAndEmits);
	    return PouchPromise.all(docIds.map(function (docId) {
	      return getDocsToPersist(docId, view, docIdsToChangesAndEmits);
	    })).then(function (listOfDocsToPersist) {
	      var docsToPersist = flatten(listOfDocsToPersist);
	      lastSeqDoc.seq = seq;
	      docsToPersist.push(lastSeqDoc);
	      // write all docs in a single operation, update the seq once
	      return view.db.bulkDocs({docs : docsToPersist});
	    });
	  });
	}

	function getQueue(view) {
	  var viewName = typeof view === 'string' ? view : view.name;
	  var queue = persistentQueues[viewName];
	  if (!queue) {
	    queue = persistentQueues[viewName] = new TaskQueue$1();
	  }
	  return queue;
	}

	function updateView(view) {
	  return sequentialize(getQueue(view), function () {
	    return updateViewInQueue(view);
	  })();
	}

	function updateViewInQueue(view) {
	  // bind the emit function once
	  var mapResults;
	  var doc;

	  function emit(key, value) {
	    var output = {id: doc._id, key: normalizeKey(key)};
	    // Don't explicitly store the value unless it's defined and non-null.
	    // This saves on storage space, because often people don't use it.
	    if (typeof value !== 'undefined' && value !== null) {
	      output.value = normalizeKey(value);
	    }
	    mapResults.push(output);
	  }

	  var mapFun;
	  // for temp_views one can use emit(doc, emit), see #38
	  if (typeof view.mapFun === "function" && view.mapFun.length === 2) {
	    var origMap = view.mapFun;
	    mapFun = function (doc) {
	      return origMap(doc, emit);
	    };
	  } else {
	    mapFun = evalfunc(view.mapFun.toString(), emit, sum, log$2, Array.isArray,
	      JSON.parse);
	  }

	  var currentSeq = view.seq || 0;

	  function processChange(docIdsToChangesAndEmits, seq) {
	    return function () {
	      return saveKeyValues(view, docIdsToChangesAndEmits, seq);
	    };
	  }

	  var queue = new TaskQueue$1();
	  // TODO(neojski): https://github.com/daleharvey/pouchdb/issues/1521

	  return new PouchPromise(function (resolve, reject) {

	    function complete() {
	      queue.finish().then(function () {
	        view.seq = currentSeq;
	        resolve();
	      });
	    }

	    function processNextBatch() {
	      view.sourceDB.changes({
	        conflicts: true,
	        include_docs: true,
	        style: 'all_docs',
	        since: currentSeq,
	        limit: CHANGES_BATCH_SIZE$1
	      }).on('complete', function (response) {
	        var results = response.results;
	        if (!results.length) {
	          return complete();
	        }
	        var docIdsToChangesAndEmits = {};
	        for (var i = 0, l = results.length; i < l; i++) {
	          var change = results[i];
	          if (change.doc._id[0] !== '_') {
	            mapResults = [];
	            doc = change.doc;

	            if (!doc._deleted) {
	              tryCode$1(view.sourceDB, mapFun, [doc]);
	            }
	            mapResults.sort(sortByKeyThenValue);

	            var indexableKeysToKeyValues = {};
	            var lastKey;
	            for (var j = 0, jl = mapResults.length; j < jl; j++) {
	              var obj = mapResults[j];
	              var complexKey = [obj.key, obj.id];
	              if (collate(obj.key, lastKey) === 0) {
	                complexKey.push(j); // dup key+id, so make it unique
	              }
	              var indexableKey = toIndexableString(complexKey);
	              indexableKeysToKeyValues[indexableKey] = obj;
	              lastKey = obj.key;
	            }
	            docIdsToChangesAndEmits[change.doc._id] = {
	              indexableKeysToKeyValues: indexableKeysToKeyValues,
	              changes: change.changes
	            };
	          }
	          currentSeq = change.seq;
	        }
	        queue.add(processChange(docIdsToChangesAndEmits, currentSeq));
	        if (results.length < CHANGES_BATCH_SIZE$1) {
	          return complete();
	        }
	        return processNextBatch();
	      }).on('error', onError);
	      /* istanbul ignore next */
	      function onError(err) {
	        reject(err);
	      }
	    }

	    processNextBatch();
	  });
	}

	function reduceView(view, results, options) {
	  if (options.group_level === 0) {
	    delete options.group_level;
	  }

	  var shouldGroup = options.group || options.group_level;

	  var reduceFun;
	  if (builtInReduce[view.reduceFun]) {
	    reduceFun = builtInReduce[view.reduceFun];
	  } else {
	    reduceFun = evalfunc(
	      view.reduceFun.toString(), null, sum, log$2, Array.isArray, JSON.parse);
	  }

	  var groups = [];
	  var lvl = isNaN(options.group_level) ? Number.POSITIVE_INFINITY :
	    options.group_level;
	  results.forEach(function (e) {
	    var last = groups[groups.length - 1];
	    var groupKey = shouldGroup ? e.key : null;

	    // only set group_level for array keys
	    if (shouldGroup && Array.isArray(groupKey)) {
	      groupKey = groupKey.slice(0, lvl);
	    }

	    if (last && collate(last.groupKey, groupKey) === 0) {
	      last.keys.push([e.key, e.id]);
	      last.values.push(e.value);
	      return;
	    }
	    groups.push({
	      keys: [[e.key, e.id]],
	      values: [e.value],
	      groupKey: groupKey
	    });
	  });
	  results = [];
	  for (var i = 0, len = groups.length; i < len; i++) {
	    var e = groups[i];
	    var reduceTry = tryCode$1(view.sourceDB, reduceFun,
	      [e.keys, e.values, false]);
	    if (reduceTry.error && reduceTry.error instanceof BuiltInError) {
	      // CouchDB returns an error if a built-in errors out
	      throw reduceTry.error;
	    }
	    results.push({
	      // CouchDB just sets the value to null if a non-built-in errors out
	      value: reduceTry.error ? null : reduceTry.output,
	      key: e.groupKey
	    });
	  }
	  // no total_rows/offset when reducing
	  return {rows: sliceResults(results, options.limit, options.skip)};
	}

	function queryView(view, opts) {
	  return sequentialize(getQueue(view), function () {
	    return queryViewInQueue(view, opts);
	  })();
	}

	function queryViewInQueue(view, opts) {
	  var totalRows;
	  var shouldReduce = view.reduceFun && opts.reduce !== false;
	  var skip = opts.skip || 0;
	  if (typeof opts.keys !== 'undefined' && !opts.keys.length) {
	    // equivalent query
	    opts.limit = 0;
	    delete opts.keys;
	  }

	  function fetchFromView(viewOpts) {
	    viewOpts.include_docs = true;
	    return view.db.allDocs(viewOpts).then(function (res) {
	      totalRows = res.total_rows;
	      return res.rows.map(function (result) {

	        // implicit migration - in older versions of PouchDB,
	        // we explicitly stored the doc as {id: ..., key: ..., value: ...}
	        // this is tested in a migration test
	        /* istanbul ignore next */
	        if ('value' in result.doc && typeof result.doc.value === 'object' &&
	            result.doc.value !== null) {
	          var keys = Object.keys(result.doc.value).sort();
	          // this detection method is not perfect, but it's unlikely the user
	          // emitted a value which was an object with these 3 exact keys
	          var expectedKeys = ['id', 'key', 'value'];
	          if (!(keys < expectedKeys || keys > expectedKeys)) {
	            return result.doc.value;
	          }
	        }

	        var parsedKeyAndDocId = parseIndexableString(result.doc._id);
	        return {
	          key: parsedKeyAndDocId[0],
	          id: parsedKeyAndDocId[1],
	          value: ('value' in result.doc ? result.doc.value : null)
	        };
	      });
	    });
	  }

	  function onMapResultsReady(rows) {
	    var finalResults;
	    if (shouldReduce) {
	      finalResults = reduceView(view, rows, opts);
	    } else {
	      finalResults = {
	        total_rows: totalRows,
	        offset: skip,
	        rows: rows
	      };
	    }
	    if (opts.include_docs) {
	      var docIds = uniq(rows.map(rowToDocId));

	      return view.sourceDB.allDocs({
	        keys: docIds,
	        include_docs: true,
	        conflicts: opts.conflicts,
	        attachments: opts.attachments,
	        binary: opts.binary
	      }).then(function (allDocsRes) {
	        var docIdsToDocs = {};
	        allDocsRes.rows.forEach(function (row) {
	          if (row.doc) {
	            docIdsToDocs['$' + row.id] = row.doc;
	          }
	        });
	        rows.forEach(function (row) {
	          var docId = rowToDocId(row);
	          var doc = docIdsToDocs['$' + docId];
	          if (doc) {
	            row.doc = doc;
	          }
	        });
	        return finalResults;
	      });
	    } else {
	      return finalResults;
	    }
	  }

	  if (typeof opts.keys !== 'undefined') {
	    var keys = opts.keys;
	    var fetchPromises = keys.map(function (key) {
	      var viewOpts = {
	        startkey : toIndexableString([key]),
	        endkey   : toIndexableString([key, {}])
	      };
	      return fetchFromView(viewOpts);
	    });
	    return PouchPromise.all(fetchPromises).then(flatten).then(onMapResultsReady);
	  } else { // normal query, no 'keys'
	    var viewOpts = {
	      descending : opts.descending
	    };
	    if (opts.start_key) {
	        opts.startkey = opts.start_key;
	    }
	    if (opts.end_key) {
	        opts.endkey = opts.end_key;
	    }
	    if (typeof opts.startkey !== 'undefined') {
	      viewOpts.startkey = opts.descending ?
	        toIndexableString([opts.startkey, {}]) :
	        toIndexableString([opts.startkey]);
	    }
	    if (typeof opts.endkey !== 'undefined') {
	      var inclusiveEnd = opts.inclusive_end !== false;
	      if (opts.descending) {
	        inclusiveEnd = !inclusiveEnd;
	      }

	      viewOpts.endkey = toIndexableString(
	        inclusiveEnd ? [opts.endkey, {}] : [opts.endkey]);
	    }
	    if (typeof opts.key !== 'undefined') {
	      var keyStart = toIndexableString([opts.key]);
	      var keyEnd = toIndexableString([opts.key, {}]);
	      if (viewOpts.descending) {
	        viewOpts.endkey = keyStart;
	        viewOpts.startkey = keyEnd;
	      } else {
	        viewOpts.startkey = keyStart;
	        viewOpts.endkey = keyEnd;
	      }
	    }
	    if (!shouldReduce) {
	      if (typeof opts.limit === 'number') {
	        viewOpts.limit = opts.limit;
	      }
	      viewOpts.skip = skip;
	    }
	    return fetchFromView(viewOpts).then(onMapResultsReady);
	  }
	}

	function httpViewCleanup(db) {
	  return db.request({
	    method: 'POST',
	    url: '_view_cleanup'
	  });
	}

	function localViewCleanup(db) {
	  return db.get('_local/mrviews').then(function (metaDoc) {
	    var docsToViews = {};
	    Object.keys(metaDoc.views).forEach(function (fullViewName) {
	      var parts = parseViewName(fullViewName);
	      var designDocName = '_design/' + parts[0];
	      var viewName = parts[1];
	      docsToViews[designDocName] = docsToViews[designDocName] || {};
	      docsToViews[designDocName][viewName] = true;
	    });
	    var opts = {
	      keys : Object.keys(docsToViews),
	      include_docs : true
	    };
	    return db.allDocs(opts).then(function (res) {
	      var viewsToStatus = {};
	      res.rows.forEach(function (row) {
	        var ddocName = row.key.substring(8);
	        Object.keys(docsToViews[row.key]).forEach(function (viewName) {
	          var fullViewName = ddocName + '/' + viewName;
	          /* istanbul ignore if */
	          if (!metaDoc.views[fullViewName]) {
	            // new format, without slashes, to support PouchDB 2.2.0
	            // migration test in pouchdb's browser.migration.js verifies this
	            fullViewName = viewName;
	          }
	          var viewDBNames = Object.keys(metaDoc.views[fullViewName]);
	          // design doc deleted, or view function nonexistent
	          var statusIsGood = row.doc && row.doc.views &&
	            row.doc.views[viewName];
	          viewDBNames.forEach(function (viewDBName) {
	            viewsToStatus[viewDBName] =
	              viewsToStatus[viewDBName] || statusIsGood;
	          });
	        });
	      });
	      var dbsToDelete = Object.keys(viewsToStatus).filter(
	        function (viewDBName) { return !viewsToStatus[viewDBName]; });
	      var destroyPromises = dbsToDelete.map(function (viewDBName) {
	        return sequentialize(getQueue(viewDBName), function () {
	          return new db.constructor(viewDBName, db.__opts).destroy();
	        })();
	      });
	      return PouchPromise.all(destroyPromises).then(function () {
	        return {ok: true};
	      });
	    });
	  }, defaultsTo({ok: true}));
	}

	var viewCleanup = callbackify(function () {
	  var db = this;
	  if (db.type() === 'http') {
	    return httpViewCleanup(db);
	  }
	  /* istanbul ignore next */
	  if (typeof db._viewCleanup === 'function') {
	    return customViewCleanup(db);
	  }
	  return localViewCleanup(db);
	});

	function queryPromised(db, fun, opts) {
	  if (db.type() === 'http') {
	    return httpQuery(db, fun, opts);
	  }

	  /* istanbul ignore next */
	  if (typeof db._query === 'function') {
	    return customQuery(db, fun, opts);
	  }

	  if (typeof fun !== 'string') {
	    // temp_view
	    checkQueryParseError(opts, fun);

	    var createViewOpts = {
	      db : db,
	      viewName : 'temp_view/temp_view',
	      map : fun.map,
	      reduce : fun.reduce,
	      temporary : true
	    };
	    tempViewQueue.add(function () {
	      return createView(createViewOpts).then(function (view) {
	        function cleanup() {
	          return view.db.destroy();
	        }
	        return fin(updateView(view).then(function () {
	          return queryView(view, opts);
	        }), cleanup);
	      });
	    });
	    return tempViewQueue.finish();
	  } else {
	    // persistent view
	    var fullViewName = fun;
	    var parts = parseViewName(fullViewName);
	    var designDocName = parts[0];
	    var viewName = parts[1];
	    return db.get('_design/' + designDocName).then(function (doc) {
	      var fun = doc.views && doc.views[viewName];

	      if (!fun || typeof fun.map !== 'string') {
	        throw new NotFoundError('ddoc ' + designDocName +
	        ' has no view named ' + viewName);
	      }
	      checkQueryParseError(opts, fun);

	      var createViewOpts = {
	        db : db,
	        viewName : fullViewName,
	        map : fun.map,
	        reduce : fun.reduce
	      };
	      return createView(createViewOpts).then(function (view) {
	        if (opts.stale === 'ok' || opts.stale === 'update_after') {
	          if (opts.stale === 'update_after') {
	            process.nextTick(function () {
	              updateView(view);
	            });
	          }
	          return queryView(view, opts);
	        } else { // stale not ok
	          return updateView(view).then(function () {
	            return queryView(view, opts);
	          });
	        }
	      });
	    });
	  }
	}

	var query = function (fun, opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  opts = opts ? coerceOptions(opts) : {};

	  if (typeof fun === 'function') {
	    fun = {map : fun};
	  }

	  var db = this;
	  var promise = PouchPromise.resolve().then(function () {
	    return queryPromised(db, fun, opts);
	  });
	  promisedCallback(promise, callback);
	  return promise;
	};

	function QueryParseError(message) {
	  this.status = 400;
	  this.name = 'query_parse_error';
	  this.message = message;
	  this.error = true;
	  try {
	    Error.captureStackTrace(this, QueryParseError);
	  } catch (e) {}
	}

	inherits(QueryParseError, Error);

	function NotFoundError(message) {
	  this.status = 404;
	  this.name = 'not_found';
	  this.message = message;
	  this.error = true;
	  try {
	    Error.captureStackTrace(this, NotFoundError);
	  } catch (e) {}
	}

	inherits(NotFoundError, Error);

	function BuiltInError(message) {
	  this.status = 500;
	  this.name = 'invalid_value';
	  this.message = message;
	  this.error = true;
	  try {
	    Error.captureStackTrace(this, BuiltInError);
	  } catch (e) {}
	}

	inherits(BuiltInError, Error);

	var mapreduce = {
	  query: query,
	  viewCleanup: viewCleanup
	};

	function isGenOne$1(rev) {
	  return /^1-/.test(rev);
	}

	function fileHasChanged(localDoc, remoteDoc, filename) {
	  return !localDoc._attachments ||
	         !localDoc._attachments[filename] ||
	         localDoc._attachments[filename].digest !== remoteDoc._attachments[filename].digest;
	}

	function getDocAttachments(db, doc) {
	  var filenames = Object.keys(doc._attachments);
	  return PouchPromise.all(filenames.map(function (filename) {
	    return db.getAttachment(doc._id, filename, {rev: doc._rev});
	  }));
	}

	function getDocAttachmentsFromTargetOrSource(target, src, doc) {
	  var doCheckForLocalAttachments = src.type() === 'http' && target.type() !== 'http';
	  var filenames = Object.keys(doc._attachments);

	  if (!doCheckForLocalAttachments) {
	    return getDocAttachments(src, doc);
	  }

	  return target.get(doc._id).then(function (localDoc) {
	    return PouchPromise.all(filenames.map(function (filename) {
	      if (fileHasChanged(localDoc, doc, filename)) {
	        return src.getAttachment(doc._id, filename);
	      }

	      return target.getAttachment(localDoc._id, filename);
	    }));
	  }).catch(function (error) {
	    /* istanbul ignore if */
	    if (error.status !== 404) {
	      throw error;
	    }

	    return getDocAttachments(src, doc);
	  });
	}

	function createBulkGetOpts(diffs) {
	  var requests = [];
	  Object.keys(diffs).forEach(function (id) {
	    var missingRevs = diffs[id].missing;
	    missingRevs.forEach(function (missingRev) {
	      requests.push({
	        id: id,
	        rev: missingRev
	      });
	    });
	  });

	  return {
	    docs: requests,
	    revs: true
	  };
	}

	//
	// Fetch all the documents from the src as described in the "diffs",
	// which is a mapping of docs IDs to revisions. If the state ever
	// changes to "cancelled", then the returned promise will be rejected.
	// Else it will be resolved with a list of fetched documents.
	//
	function getDocs(src, target, diffs, state) {
	  diffs = clone(diffs); // we do not need to modify this

	  var resultDocs = [],
	      ok = true;

	  function getAllDocs() {

	    var bulkGetOpts = createBulkGetOpts(diffs);

	    if (!bulkGetOpts.docs.length) { // optimization: skip empty requests
	      return;
	    }

	    return src.bulkGet(bulkGetOpts).then(function (bulkGetResponse) {
	      /* istanbul ignore if */
	      if (state.cancelled) {
	        throw new Error('cancelled');
	      }
	      return PouchPromise.all(bulkGetResponse.results.map(function (bulkGetInfo) {
	        return PouchPromise.all(bulkGetInfo.docs.map(function (doc) {
	          var remoteDoc = doc.ok;

	          if (doc.error) {
	            // when AUTO_COMPACTION is set, docs can be returned which look
	            // like this: {"missing":"1-7c3ac256b693c462af8442f992b83696"}
	            ok = false;
	          }

	          if (!remoteDoc || !remoteDoc._attachments) {
	            return remoteDoc;
	          }

	          return getDocAttachmentsFromTargetOrSource(target, src, remoteDoc).then(function (attachments) {
	            var filenames = Object.keys(remoteDoc._attachments);
	            attachments.forEach(function (attachment, i) {
	              var att = remoteDoc._attachments[filenames[i]];
	              delete att.stub;
	              delete att.length;
	              att.data = attachment;
	            });

	            return remoteDoc;
	          });
	        }));
	      }))

	      .then(function (results) {
	        resultDocs = resultDocs.concat(flatten(results).filter(Boolean));
	      });
	    });
	  }

	  function hasAttachments(doc) {
	    return doc._attachments && Object.keys(doc._attachments).length > 0;
	  }

	  function fetchRevisionOneDocs(ids) {
	    // Optimization: fetch gen-1 docs and attachments in
	    // a single request using _all_docs
	    return src.allDocs({
	      keys: ids,
	      include_docs: true
	    }).then(function (res) {
	      if (state.cancelled) {
	        throw new Error('cancelled');
	      }
	      res.rows.forEach(function (row) {
	        if (row.deleted || !row.doc || !isGenOne$1(row.value.rev) ||
	            hasAttachments(row.doc)) {
	          // if any of these conditions apply, we need to fetch using get()
	          return;
	        }

	        // the doc we got back from allDocs() is sufficient
	        resultDocs.push(row.doc);
	        delete diffs[row.id];
	      });
	    });
	  }

	  function getRevisionOneDocs() {
	    // filter out the generation 1 docs and get them
	    // leaving the non-generation one docs to be got otherwise
	    var ids = Object.keys(diffs).filter(function (id) {
	      var missing = diffs[id].missing;
	      return missing.length === 1 && isGenOne$1(missing[0]);
	    });
	    if (ids.length > 0) {
	      return fetchRevisionOneDocs(ids);
	    }
	  }

	  function returnResult() {
	    return { ok:ok, docs:resultDocs };
	  }

	  return PouchPromise.resolve()
	    .then(getRevisionOneDocs)
	    .then(getAllDocs)
	    .then(returnResult);
	}

	var CHECKPOINT_VERSION = 1;
	var REPLICATOR = "pouchdb";
	// This is an arbitrary number to limit the
	// amount of replication history we save in the checkpoint.
	// If we save too much, the checkpoing docs will become very big,
	// if we save fewer, we'll run a greater risk of having to
	// read all the changes from 0 when checkpoint PUTs fail
	// CouchDB 2.0 has a more involved history pruning,
	// but let's go for the simple version for now.
	var CHECKPOINT_HISTORY_SIZE = 5;
	var LOWEST_SEQ = 0;

	function updateCheckpoint(db, id, checkpoint, session, returnValue) {
	  return db.get(id).catch(function (err) {
	    if (err.status === 404) {
	      if (db.type() === 'http') {
	        explainError(
	          404, 'PouchDB is just checking if a remote checkpoint exists.'
	        );
	      }
	      return {
	        session_id: session,
	        _id: id,
	        history: [],
	        replicator: REPLICATOR,
	        version: CHECKPOINT_VERSION
	      };
	    }
	    throw err;
	  }).then(function (doc) {
	    if (returnValue.cancelled) {
	      return;
	    }

	    // if the checkpoint has not changed, do not update
	    if (doc.last_seq === checkpoint) {
	      return;
	    }

	    // Filter out current entry for this replication
	    doc.history = (doc.history || []).filter(function (item) {
	      return item.session_id !== session;
	    });

	    // Add the latest checkpoint to history
	    doc.history.unshift({
	      last_seq: checkpoint,
	      session_id: session
	    });

	    // Just take the last pieces in history, to
	    // avoid really big checkpoint docs.
	    // see comment on history size above
	    doc.history = doc.history.slice(0, CHECKPOINT_HISTORY_SIZE);

	    doc.version = CHECKPOINT_VERSION;
	    doc.replicator = REPLICATOR;

	    doc.session_id = session;
	    doc.last_seq = checkpoint;

	    return db.put(doc).catch(function (err) {
	      if (err.status === 409) {
	        // retry; someone is trying to write a checkpoint simultaneously
	        return updateCheckpoint(db, id, checkpoint, session, returnValue);
	      }
	      throw err;
	    });
	  });
	}

	function Checkpointer(src, target, id, returnValue) {
	  this.src = src;
	  this.target = target;
	  this.id = id;
	  this.returnValue = returnValue;
	}

	Checkpointer.prototype.writeCheckpoint = function (checkpoint, session) {
	  var self = this;
	  return this.updateTarget(checkpoint, session).then(function () {
	    return self.updateSource(checkpoint, session);
	  });
	};

	Checkpointer.prototype.updateTarget = function (checkpoint, session) {
	  return updateCheckpoint(this.target, this.id, checkpoint,
	    session, this.returnValue);
	};

	Checkpointer.prototype.updateSource = function (checkpoint, session) {
	  var self = this;
	  if (this.readOnlySource) {
	    return PouchPromise.resolve(true);
	  }
	  return updateCheckpoint(this.src, this.id, checkpoint,
	    session, this.returnValue)
	    .catch(function (err) {
	      if (isForbiddenError(err)) {
	        self.readOnlySource = true;
	        return true;
	      }
	      throw err;
	    });
	};

	var comparisons = {
	  "undefined": function (targetDoc, sourceDoc) {
	    // This is the previous comparison function
	    if (collate(targetDoc.last_seq, sourceDoc.last_seq) === 0) {
	      return sourceDoc.last_seq;
	    }
	    /* istanbul ignore next */
	    return 0;
	  },
	  "1": function (targetDoc, sourceDoc) {
	    // This is the comparison function ported from CouchDB
	    return compareReplicationLogs(sourceDoc, targetDoc).last_seq;
	  }
	};

	Checkpointer.prototype.getCheckpoint = function () {
	  var self = this;
	  return self.target.get(self.id).then(function (targetDoc) {
	    if (self.readOnlySource) {
	      return PouchPromise.resolve(targetDoc.last_seq);
	    }

	    return self.src.get(self.id).then(function (sourceDoc) {
	      // Since we can't migrate an old version doc to a new one
	      // (no session id), we just go with the lowest seq in this case
	      /* istanbul ignore if */
	      if (targetDoc.version !== sourceDoc.version) {
	        return LOWEST_SEQ;
	      }

	      var version;
	      if (targetDoc.version) {
	        version = targetDoc.version.toString();
	      } else {
	        version = "undefined";
	      }

	      if (version in comparisons) {
	        return comparisons[version](targetDoc, sourceDoc);
	      }
	      /* istanbul ignore next */
	      return LOWEST_SEQ;
	    }, function (err) {
	      if (err.status === 404 && targetDoc.last_seq) {
	        return self.src.put({
	          _id: self.id,
	          last_seq: LOWEST_SEQ
	        }).then(function () {
	          return LOWEST_SEQ;
	        }, function (err) {
	          if (isForbiddenError(err)) {
	            self.readOnlySource = true;
	            return targetDoc.last_seq;
	          }
	          /* istanbul ignore next */
	          return LOWEST_SEQ;
	        });
	      }
	      throw err;
	    });
	  }).catch(function (err) {
	    if (err.status !== 404) {
	      throw err;
	    }
	    return LOWEST_SEQ;
	  });
	};
	// This checkpoint comparison is ported from CouchDBs source
	// they come from here:
	// https://github.com/apache/couchdb-couch-replicator/blob/master/src/couch_replicator.erl#L863-L906

	function compareReplicationLogs(srcDoc, tgtDoc) {
	  if (srcDoc.session_id === tgtDoc.session_id) {
	    return {
	      last_seq: srcDoc.last_seq,
	      history: srcDoc.history
	    };
	  }

	  return compareReplicationHistory(srcDoc.history, tgtDoc.history);
	}

	function compareReplicationHistory(sourceHistory, targetHistory) {
	  // the erlang loop via function arguments is not so easy to repeat in JS
	  // therefore, doing this as recursion
	  var S = sourceHistory[0];
	  var sourceRest = sourceHistory.slice(1);
	  var T = targetHistory[0];
	  var targetRest = targetHistory.slice(1);

	  if (!S || targetHistory.length === 0) {
	    return {
	      last_seq: LOWEST_SEQ,
	      history: []
	    };
	  }

	  var sourceId = S.session_id;
	  /* istanbul ignore if */
	  if (hasSessionId(sourceId, targetHistory)) {
	    return {
	      last_seq: S.last_seq,
	      history: sourceHistory
	    };
	  }

	  var targetId = T.session_id;
	  if (hasSessionId(targetId, sourceRest)) {
	    return {
	      last_seq: T.last_seq,
	      history: targetRest
	    };
	  }

	  return compareReplicationHistory(sourceRest, targetRest);
	}

	function hasSessionId(sessionId, history) {
	  var props = history[0];
	  var rest = history.slice(1);

	  if (!sessionId || history.length === 0) {
	    return false;
	  }

	  if (sessionId === props.session_id) {
	    return true;
	  }

	  return hasSessionId(sessionId, rest);
	}

	function isForbiddenError(err) {
	  return typeof err.status === 'number' && Math.floor(err.status / 100) === 4;
	}

	var STARTING_BACK_OFF = 0;

	function backOff(opts, returnValue, error, callback) {
	  if (opts.retry === false) {
	    returnValue.emit('error', error);
	    returnValue.removeAllListeners();
	    return;
	  }
	  if (typeof opts.back_off_function !== 'function') {
	    opts.back_off_function = defaultBackOff;
	  }
	  returnValue.emit('requestError', error);
	  if (returnValue.state === 'active' || returnValue.state === 'pending') {
	    returnValue.emit('paused', error);
	    returnValue.state = 'stopped';
	    var backOffSet = function backoffTimeSet() {
	      opts.current_back_off = STARTING_BACK_OFF;
	    };
	    var removeBackOffSetter = function removeBackOffTimeSet() {
	      returnValue.removeListener('active', backOffSet);
	    };
	    returnValue.once('paused', removeBackOffSetter);
	    returnValue.once('active', backOffSet);
	  }

	  opts.current_back_off = opts.current_back_off || STARTING_BACK_OFF;
	  opts.current_back_off = opts.back_off_function(opts.current_back_off);
	  setTimeout(callback, opts.current_back_off);
	}

	function sortObjectPropertiesByKey(queryParams) {
	  return Object.keys(queryParams).sort(collate).reduce(function (result, key) {
	    result[key] = queryParams[key];
	    return result;
	  }, {});
	}

	// Generate a unique id particular to this replication.
	// Not guaranteed to align perfectly with CouchDB's rep ids.
	function generateReplicationId(src, target, opts) {
	  var docIds = opts.doc_ids ? opts.doc_ids.sort(collate) : '';
	  var filterFun = opts.filter ? opts.filter.toString() : '';
	  var queryParams = '';
	  var filterViewName =  '';

	  if (opts.filter && opts.query_params) {
	    queryParams = JSON.stringify(sortObjectPropertiesByKey(opts.query_params));
	  }

	  if (opts.filter && opts.filter === '_view') {
	    filterViewName = opts.view.toString();
	  }

	  return PouchPromise.all([src.id(), target.id()]).then(function (res) {
	    var queryData = res[0] + res[1] + filterFun + filterViewName +
	      queryParams + docIds;
	    return new PouchPromise(function (resolve) {
	      binaryMd5(queryData, resolve);
	    });
	  }).then(function (md5sum) {
	    // can't use straight-up md5 alphabet, because
	    // the char '/' is interpreted as being for attachments,
	    // and + is also not url-safe
	    md5sum = md5sum.replace(/\//g, '.').replace(/\+/g, '_');
	    return '_local/' + md5sum;
	  });
	}

	function replicate$1(src, target, opts, returnValue, result) {
	  var batches = [];               // list of batches to be processed
	  var currentBatch;               // the batch currently being processed
	  var pendingBatch = {
	    seq: 0,
	    changes: [],
	    docs: []
	  }; // next batch, not yet ready to be processed
	  var writingCheckpoint = false;  // true while checkpoint is being written
	  var changesCompleted = false;   // true when all changes received
	  var replicationCompleted = false; // true when replication has completed
	  var last_seq = 0;
	  var continuous = opts.continuous || opts.live || false;
	  var batch_size = opts.batch_size || 100;
	  var batches_limit = opts.batches_limit || 10;
	  var changesPending = false;     // true while src.changes is running
	  var doc_ids = opts.doc_ids;
	  var repId;
	  var checkpointer;
	  var changedDocs = [];
	  // Like couchdb, every replication gets a unique session id
	  var session = uuid();

	  result = result || {
	    ok: true,
	    start_time: new Date(),
	    docs_read: 0,
	    docs_written: 0,
	    doc_write_failures: 0,
	    errors: []
	  };

	  var changesOpts = {};
	  returnValue.ready(src, target);

	  function initCheckpointer() {
	    if (checkpointer) {
	      return PouchPromise.resolve();
	    }
	    return generateReplicationId(src, target, opts).then(function (res) {
	      repId = res;
	      checkpointer = new Checkpointer(src, target, repId, returnValue);
	    });
	  }

	  function writeDocs() {
	    changedDocs = [];

	    if (currentBatch.docs.length === 0) {
	      return;
	    }
	    var docs = currentBatch.docs;
	    var bulkOpts = {timeout: opts.timeout};
	    return target.bulkDocs({docs: docs, new_edits: false}, bulkOpts).then(function (res) {
	      /* istanbul ignore if */
	      if (returnValue.cancelled) {
	        completeReplication();
	        throw new Error('cancelled');
	      }

	      // `res` doesn't include full documents (which live in `docs`), so we create a map of 
	      // (id -> error), and check for errors while iterating over `docs`
	      var errorsById = Object.create(null);
	      res.forEach(function (res) {
	        if (res.error) {
	          errorsById[res.id] = res;
	        }
	      });

	      var errorsNo = Object.keys(errorsById).length;
	      result.doc_write_failures += errorsNo;
	      result.docs_written += docs.length - errorsNo;

	      docs.forEach(function (doc) {
	        var error = errorsById[doc._id];
	        if (error) {
	          result.errors.push(error);
	          if (error.name === 'unauthorized' || error.name === 'forbidden') {
	            returnValue.emit('denied', clone(error));
	          } else {
	            throw error;
	          }
	        } else {
	          changedDocs.push(doc);
	        }
	      });

	    }, function (err) {
	      result.doc_write_failures += docs.length;
	      throw err;
	    });
	  }

	  function finishBatch() {
	    if (currentBatch.error) {
	      throw new Error('There was a problem getting docs.');
	    }
	    result.last_seq = last_seq = currentBatch.seq;
	    var outResult = clone(result);
	    if (changedDocs.length) {
	      outResult.docs = changedDocs;
	      returnValue.emit('change', outResult);
	    }
	    writingCheckpoint = true;
	    return checkpointer.writeCheckpoint(currentBatch.seq,
	        session).then(function () {
	      writingCheckpoint = false;
	      /* istanbul ignore if */
	      if (returnValue.cancelled) {
	        completeReplication();
	        throw new Error('cancelled');
	      }
	      currentBatch = undefined;
	      getChanges();
	    }).catch(function (err) {
	      onCheckpointError(err);
	      throw err;
	    });
	  }

	  function getDiffs() {
	    var diff = {};
	    currentBatch.changes.forEach(function (change) {
	      // Couchbase Sync Gateway emits these, but we can ignore them
	      /* istanbul ignore if */
	      if (change.id === "_user/") {
	        return;
	      }
	      diff[change.id] = change.changes.map(function (x) {
	        return x.rev;
	      });
	    });
	    return target.revsDiff(diff).then(function (diffs) {
	      /* istanbul ignore if */
	      if (returnValue.cancelled) {
	        completeReplication();
	        throw new Error('cancelled');
	      }
	      // currentBatch.diffs elements are deleted as the documents are written
	      currentBatch.diffs = diffs;
	    });
	  }

	  function getBatchDocs() {
	    return getDocs(src, target, currentBatch.diffs, returnValue).then(function (got) {
	      currentBatch.error = !got.ok;
	      got.docs.forEach(function (doc) {
	        delete currentBatch.diffs[doc._id];
	        result.docs_read++;
	        currentBatch.docs.push(doc);
	      });
	    });
	  }

	  function startNextBatch() {
	    if (returnValue.cancelled || currentBatch) {
	      return;
	    }
	    if (batches.length === 0) {
	      processPendingBatch(true);
	      return;
	    }
	    currentBatch = batches.shift();
	    getDiffs()
	      .then(getBatchDocs)
	      .then(writeDocs)
	      .then(finishBatch)
	      .then(startNextBatch)
	      .catch(function (err) {
	        abortReplication('batch processing terminated with error', err);
	      });
	  }


	  function processPendingBatch(immediate) {
	    if (pendingBatch.changes.length === 0) {
	      if (batches.length === 0 && !currentBatch) {
	        if ((continuous && changesOpts.live) || changesCompleted) {
	          returnValue.state = 'pending';
	          returnValue.emit('paused');
	        }
	        if (changesCompleted) {
	          completeReplication();
	        }
	      }
	      return;
	    }
	    if (
	      immediate ||
	      changesCompleted ||
	      pendingBatch.changes.length >= batch_size
	    ) {
	      batches.push(pendingBatch);
	      pendingBatch = {
	        seq: 0,
	        changes: [],
	        docs: []
	      };
	      if (returnValue.state === 'pending' || returnValue.state === 'stopped') {
	        returnValue.state = 'active';
	        returnValue.emit('active');
	      }
	      startNextBatch();
	    }
	  }


	  function abortReplication(reason, err) {
	    if (replicationCompleted) {
	      return;
	    }
	    if (!err.message) {
	      err.message = reason;
	    }
	    result.ok = false;
	    result.status = 'aborting';
	    batches = [];
	    pendingBatch = {
	      seq: 0,
	      changes: [],
	      docs: []
	    };
	    completeReplication(err);
	  }


	  function completeReplication(fatalError) {
	    if (replicationCompleted) {
	      return;
	    }
	    /* istanbul ignore if */
	    if (returnValue.cancelled) {
	      result.status = 'cancelled';
	      if (writingCheckpoint) {
	        return;
	      }
	    }
	    result.status = result.status || 'complete';
	    result.end_time = new Date();
	    result.last_seq = last_seq;
	    replicationCompleted = true;

	    if (fatalError) {
	      fatalError.result = result;

	      if (fatalError.name === 'unauthorized' || fatalError.name === 'forbidden') {
	        returnValue.emit('error', fatalError);
	        returnValue.removeAllListeners();
	      } else {
	        backOff(opts, returnValue, fatalError, function () {
	          replicate$1(src, target, opts, returnValue);
	        });
	      }
	    } else {
	      returnValue.emit('complete', result);
	      returnValue.removeAllListeners();
	    }
	  }


	  function onChange(change) {
	    /* istanbul ignore if */
	    if (returnValue.cancelled) {
	      return completeReplication();
	    }
	    var filter = filterChange(opts)(change);
	    if (!filter) {
	      return;
	    }
	    pendingBatch.seq = change.seq;
	    pendingBatch.changes.push(change);
	    processPendingBatch(batches.length === 0 && changesOpts.live);
	  }


	  function onChangesComplete(changes) {
	    changesPending = false;
	    /* istanbul ignore if */
	    if (returnValue.cancelled) {
	      return completeReplication();
	    }

	    // if no results were returned then we're done,
	    // else fetch more
	    if (changes.results.length > 0) {
	      changesOpts.since = changes.last_seq;
	      getChanges();
	      processPendingBatch(true);
	    } else {

	      var complete = function () {
	        if (continuous) {
	          changesOpts.live = true;
	          getChanges();
	        } else {
	          changesCompleted = true;
	        }
	        processPendingBatch(true);
	      };

	      // update the checkpoint so we start from the right seq next time
	      if (!currentBatch && changes.results.length === 0) {
	        writingCheckpoint = true;
	        checkpointer.writeCheckpoint(changes.last_seq,
	            session).then(function () {
	          writingCheckpoint = false;
	          result.last_seq = last_seq = changes.last_seq;
	          complete();
	        })
	        .catch(onCheckpointError);
	      } else {
	        complete();
	      }
	    }
	  }


	  function onChangesError(err) {
	    changesPending = false;
	    /* istanbul ignore if */
	    if (returnValue.cancelled) {
	      return completeReplication();
	    }
	    abortReplication('changes rejected', err);
	  }


	  function getChanges() {
	    if (!(
	      !changesPending &&
	      !changesCompleted &&
	      batches.length < batches_limit
	      )) {
	      return;
	    }
	    changesPending = true;
	    function abortChanges() {
	      changes.cancel();
	    }
	    function removeListener() {
	      returnValue.removeListener('cancel', abortChanges);
	    }

	    if (returnValue._changes) { // remove old changes() and listeners
	      returnValue.removeListener('cancel', returnValue._abortChanges);
	      returnValue._changes.cancel();
	    }
	    returnValue.once('cancel', abortChanges);

	    var changes = src.changes(changesOpts)
	      .on('change', onChange);
	    changes.then(removeListener, removeListener);
	    changes.then(onChangesComplete)
	      .catch(onChangesError);

	    if (opts.retry) {
	      // save for later so we can cancel if necessary
	      returnValue._changes = changes;
	      returnValue._abortChanges = abortChanges;
	    }
	  }


	  function startChanges() {
	    initCheckpointer().then(function () {
	      /* istanbul ignore if */
	      if (returnValue.cancelled) {
	        completeReplication();
	        return;
	      }
	      return checkpointer.getCheckpoint().then(function (checkpoint) {
	        last_seq = checkpoint;
	        changesOpts = {
	          since: last_seq,
	          limit: batch_size,
	          batch_size: batch_size,
	          style: 'all_docs',
	          doc_ids: doc_ids,
	          return_docs: true // required so we know when we're done
	        };
	        if (opts.filter) {
	          if (typeof opts.filter !== 'string') {
	            // required for the client-side filter in onChange
	            changesOpts.include_docs = true;
	          } else { // ddoc filter
	            changesOpts.filter = opts.filter;
	          }
	        }
	        if ('heartbeat' in opts) {
	          changesOpts.heartbeat = opts.heartbeat;
	        }
	        if ('timeout' in opts) {
	          changesOpts.timeout = opts.timeout;
	        }
	        if (opts.query_params) {
	          changesOpts.query_params = opts.query_params;
	        }
	        if (opts.view) {
	          changesOpts.view = opts.view;
	        }
	        getChanges();
	      });
	    }).catch(function (err) {
	      abortReplication('getCheckpoint rejected with ', err);
	    });
	  }

	  /* istanbul ignore next */
	  function onCheckpointError(err) {
	    writingCheckpoint = false;
	    abortReplication('writeCheckpoint completed with error', err);
	  }

	  /* istanbul ignore if */
	  if (returnValue.cancelled) { // cancelled immediately
	    completeReplication();
	    return;
	  }

	  if (!returnValue._addedListeners) {
	    returnValue.once('cancel', completeReplication);

	    if (typeof opts.complete === 'function') {
	      returnValue.once('error', opts.complete);
	      returnValue.once('complete', function (result) {
	        opts.complete(null, result);
	      });
	    }
	    returnValue._addedListeners = true;
	  }

	  if (typeof opts.since === 'undefined') {
	    startChanges();
	  } else {
	    initCheckpointer().then(function () {
	      writingCheckpoint = true;
	      return checkpointer.writeCheckpoint(opts.since, session);
	    }).then(function () {
	      writingCheckpoint = false;
	      /* istanbul ignore if */
	      if (returnValue.cancelled) {
	        completeReplication();
	        return;
	      }
	      last_seq = opts.since;
	      startChanges();
	    }).catch(onCheckpointError);
	  }
	}

	// We create a basic promise so the caller can cancel the replication possibly
	// before we have actually started listening to changes etc
	inherits(Replication, events.EventEmitter);
	function Replication() {
	  events.EventEmitter.call(this);
	  this.cancelled = false;
	  this.state = 'pending';
	  var self = this;
	  var promise = new PouchPromise(function (fulfill, reject) {
	    self.once('complete', fulfill);
	    self.once('error', reject);
	  });
	  self.then = function (resolve, reject) {
	    return promise.then(resolve, reject);
	  };
	  self.catch = function (reject) {
	    return promise.catch(reject);
	  };
	  // As we allow error handling via "error" event as well,
	  // put a stub in here so that rejecting never throws UnhandledError.
	  self.catch(function () {});
	}

	Replication.prototype.cancel = function () {
	  this.cancelled = true;
	  this.state = 'cancelled';
	  this.emit('cancel');
	};

	Replication.prototype.ready = function (src, target) {
	  var self = this;
	  if (self._readyCalled) {
	    return;
	  }
	  self._readyCalled = true;

	  function onDestroy() {
	    self.cancel();
	  }
	  src.once('destroyed', onDestroy);
	  target.once('destroyed', onDestroy);
	  function cleanup() {
	    src.removeListener('destroyed', onDestroy);
	    target.removeListener('destroyed', onDestroy);
	  }
	  self.once('complete', cleanup);
	};

	function toPouch(db, opts) {
	  var PouchConstructor = opts.PouchConstructor;
	  if (typeof db === 'string') {
	    return new PouchConstructor(db, opts);
	  } else {
	    return db;
	  }
	}

	function replicate(src, target, opts, callback) {

	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  if (typeof opts === 'undefined') {
	    opts = {};
	  }

	  if (opts.doc_ids && !Array.isArray(opts.doc_ids)) {
	    throw createError(BAD_REQUEST,
	                       "`doc_ids` filter parameter is not a list.");
	  }

	  opts.complete = callback;
	  opts = clone(opts);
	  opts.continuous = opts.continuous || opts.live;
	  opts.retry = ('retry' in opts) ? opts.retry : false;
	  /*jshint validthis:true */
	  opts.PouchConstructor = opts.PouchConstructor || this;
	  var replicateRet = new Replication(opts);
	  var srcPouch = toPouch(src, opts);
	  var targetPouch = toPouch(target, opts);
	  replicate$1(srcPouch, targetPouch, opts, replicateRet);
	  return replicateRet;
	}

	inherits(Sync, events.EventEmitter);
	function sync(src, target, opts, callback) {
	  if (typeof opts === 'function') {
	    callback = opts;
	    opts = {};
	  }
	  if (typeof opts === 'undefined') {
	    opts = {};
	  }
	  opts = clone(opts);
	  /*jshint validthis:true */
	  opts.PouchConstructor = opts.PouchConstructor || this;
	  src = toPouch(src, opts);
	  target = toPouch(target, opts);
	  return new Sync(src, target, opts, callback);
	}

	function Sync(src, target, opts, callback) {
	  var self = this;
	  this.canceled = false;

	  var optsPush = opts.push ? jsExtend.extend({}, opts, opts.push) : opts;
	  var optsPull = opts.pull ? jsExtend.extend({}, opts, opts.pull) : opts;

	  this.push = replicate(src, target, optsPush);
	  this.pull = replicate(target, src, optsPull);

	  this.pushPaused = true;
	  this.pullPaused = true;

	  function pullChange(change) {
	    self.emit('change', {
	      direction: 'pull',
	      change: change
	    });
	  }
	  function pushChange(change) {
	    self.emit('change', {
	      direction: 'push',
	      change: change
	    });
	  }
	  function pushDenied(doc) {
	    self.emit('denied', {
	      direction: 'push',
	      doc: doc
	    });
	  }
	  function pullDenied(doc) {
	    self.emit('denied', {
	      direction: 'pull',
	      doc: doc
	    });
	  }
	  function pushPaused() {
	    self.pushPaused = true;
	    /* istanbul ignore if */
	    if (self.pullPaused) {
	      self.emit('paused');
	    }
	  }
	  function pullPaused() {
	    self.pullPaused = true;
	    /* istanbul ignore if */
	    if (self.pushPaused) {
	      self.emit('paused');
	    }
	  }
	  function pushActive() {
	    self.pushPaused = false;
	    /* istanbul ignore if */
	    if (self.pullPaused) {
	      self.emit('active', {
	        direction: 'push'
	      });
	    }
	  }
	  function pullActive() {
	    self.pullPaused = false;
	    /* istanbul ignore if */
	    if (self.pushPaused) {
	      self.emit('active', {
	        direction: 'pull'
	      });
	    }
	  }

	  var removed = {};

	  function removeAll(type) { // type is 'push' or 'pull'
	    return function (event, func) {
	      var isChange = event === 'change' &&
	        (func === pullChange || func === pushChange);
	      var isDenied = event === 'denied' &&
	        (func === pullDenied || func === pushDenied);
	      var isPaused = event === 'paused' &&
	        (func === pullPaused || func === pushPaused);
	      var isActive = event === 'active' &&
	        (func === pullActive || func === pushActive);

	      if (isChange || isDenied || isPaused || isActive) {
	        if (!(event in removed)) {
	          removed[event] = {};
	        }
	        removed[event][type] = true;
	        if (Object.keys(removed[event]).length === 2) {
	          // both push and pull have asked to be removed
	          self.removeAllListeners(event);
	        }
	      }
	    };
	  }

	  if (opts.live) {
	    this.push.on('complete', self.pull.cancel.bind(self.pull));
	    this.pull.on('complete', self.push.cancel.bind(self.push));
	  }

	  this.on('newListener', function (event) {
	    if (event === 'change') {
	      self.pull.on('change', pullChange);
	      self.push.on('change', pushChange);
	    } else if (event === 'denied') {
	      self.pull.on('denied', pullDenied);
	      self.push.on('denied', pushDenied);
	    } else if (event === 'active') {
	      self.pull.on('active', pullActive);
	      self.push.on('active', pushActive);
	    } else if (event === 'paused') {
	      self.pull.on('paused', pullPaused);
	      self.push.on('paused', pushPaused);
	    }
	  });

	  this.on('removeListener', function (event) {
	    if (event === 'change') {
	      self.pull.removeListener('change', pullChange);
	      self.push.removeListener('change', pushChange);
	    } else if (event === 'denied') {
	      self.pull.removeListener('denied', pullDenied);
	      self.push.removeListener('denied', pushDenied);
	    } else if (event === 'active') {
	      self.pull.removeListener('active', pullActive);
	      self.push.removeListener('active', pushActive);
	    } else if (event === 'paused') {
	      self.pull.removeListener('paused', pullPaused);
	      self.push.removeListener('paused', pushPaused);
	    }
	  });

	  this.pull.on('removeListener', removeAll('pull'));
	  this.push.on('removeListener', removeAll('push'));

	  var promise = PouchPromise.all([
	    this.push,
	    this.pull
	  ]).then(function (resp) {
	    var out = {
	      push: resp[0],
	      pull: resp[1]
	    };
	    self.emit('complete', out);
	    if (callback) {
	      callback(null, out);
	    }
	    self.removeAllListeners();
	    return out;
	  }, function (err) {
	    self.cancel();
	    if (callback) {
	      // if there's a callback, then the callback can receive
	      // the error event
	      callback(err);
	    } else {
	      // if there's no callback, then we're safe to emit an error
	      // event, which would otherwise throw an unhandled error
	      // due to 'error' being a special event in EventEmitters
	      self.emit('error', err);
	    }
	    self.removeAllListeners();
	    if (callback) {
	      // no sense throwing if we're already emitting an 'error' event
	      throw err;
	    }
	  });

	  this.then = function (success, err) {
	    return promise.then(success, err);
	  };

	  this.catch = function (err) {
	    return promise.catch(err);
	  };
	}

	Sync.prototype.cancel = function () {
	  if (!this.canceled) {
	    this.canceled = true;
	    this.push.cancel();
	    this.pull.cancel();
	  }
	};

	function replication(PouchDB) {
	  PouchDB.replicate = replicate;
	  PouchDB.sync = sync;

	  Object.defineProperty(PouchDB.prototype, 'replicate', {
	    get: function () {
	      var self = this;
	      return {
	        from: function (other, opts, callback) {
	          return self.constructor.replicate(other, self, opts, callback);
	        },
	        to: function (other, opts, callback) {
	          return self.constructor.replicate(self, other, opts, callback);
	        }
	      };
	    }
	  });

	  PouchDB.prototype.sync = function (dbName, opts, callback) {
	    return this.constructor.sync(this, dbName, opts, callback);
	  };
	}

	PouchDB.plugin(IDBPouch)
	  .plugin(WebSqlPouch)
	  .plugin(HttpPouch$1)
	  .plugin(mapreduce)
	  .plugin(replication);

	module.exports = PouchDB;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), (function() { return this; }())))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	(function(factory) {
	  if(true) {
	    factory(exports);
	  } else {
	    factory(this);
	  }
	}).call(this, function(root) { 

	  var slice   = Array.prototype.slice,
	      each    = Array.prototype.forEach;

	  var extend = function(obj) {
	    if(typeof obj !== 'object') throw obj + ' is not an object' ;

	    var sources = slice.call(arguments, 1); 

	    each.call(sources, function(source) {
	      if(source) {
	        for(var prop in source) {
	          if(typeof source[prop] === 'object' && obj[prop]) {
	            extend.call(obj, obj[prop], source[prop]);
	          } else {
	            obj[prop] = source[prop];
	          }
	        } 
	      }
	    });

	    return obj;
	  }

	  root.extend = extend;
	});


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(17);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(18);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 19 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var immediate = __webpack_require__(21);

	/* istanbul ignore next */
	function INTERNAL() {}

	var handlers = {};

	var REJECTED = ['REJECTED'];
	var FULFILLED = ['FULFILLED'];
	var PENDING = ['PENDING'];

	module.exports = Promise;

	function Promise(resolver) {
	  if (typeof resolver !== 'function') {
	    throw new TypeError('resolver must be a function');
	  }
	  this.state = PENDING;
	  this.queue = [];
	  this.outcome = void 0;
	  if (resolver !== INTERNAL) {
	    safelyResolveThenable(this, resolver);
	  }
	}

	Promise.prototype["catch"] = function (onRejected) {
	  return this.then(null, onRejected);
	};
	Promise.prototype.then = function (onFulfilled, onRejected) {
	  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
	    typeof onRejected !== 'function' && this.state === REJECTED) {
	    return this;
	  }
	  var promise = new this.constructor(INTERNAL);
	  if (this.state !== PENDING) {
	    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
	    unwrap(promise, resolver, this.outcome);
	  } else {
	    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
	  }

	  return promise;
	};
	function QueueItem(promise, onFulfilled, onRejected) {
	  this.promise = promise;
	  if (typeof onFulfilled === 'function') {
	    this.onFulfilled = onFulfilled;
	    this.callFulfilled = this.otherCallFulfilled;
	  }
	  if (typeof onRejected === 'function') {
	    this.onRejected = onRejected;
	    this.callRejected = this.otherCallRejected;
	  }
	}
	QueueItem.prototype.callFulfilled = function (value) {
	  handlers.resolve(this.promise, value);
	};
	QueueItem.prototype.otherCallFulfilled = function (value) {
	  unwrap(this.promise, this.onFulfilled, value);
	};
	QueueItem.prototype.callRejected = function (value) {
	  handlers.reject(this.promise, value);
	};
	QueueItem.prototype.otherCallRejected = function (value) {
	  unwrap(this.promise, this.onRejected, value);
	};

	function unwrap(promise, func, value) {
	  immediate(function () {
	    var returnValue;
	    try {
	      returnValue = func(value);
	    } catch (e) {
	      return handlers.reject(promise, e);
	    }
	    if (returnValue === promise) {
	      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
	    } else {
	      handlers.resolve(promise, returnValue);
	    }
	  });
	}

	handlers.resolve = function (self, value) {
	  var result = tryCatch(getThen, value);
	  if (result.status === 'error') {
	    return handlers.reject(self, result.value);
	  }
	  var thenable = result.value;

	  if (thenable) {
	    safelyResolveThenable(self, thenable);
	  } else {
	    self.state = FULFILLED;
	    self.outcome = value;
	    var i = -1;
	    var len = self.queue.length;
	    while (++i < len) {
	      self.queue[i].callFulfilled(value);
	    }
	  }
	  return self;
	};
	handlers.reject = function (self, error) {
	  self.state = REJECTED;
	  self.outcome = error;
	  var i = -1;
	  var len = self.queue.length;
	  while (++i < len) {
	    self.queue[i].callRejected(error);
	  }
	  return self;
	};

	function getThen(obj) {
	  // Make sure we only access the accessor once as required by the spec
	  var then = obj && obj.then;
	  if (obj && typeof obj === 'object' && typeof then === 'function') {
	    return function appyThen() {
	      then.apply(obj, arguments);
	    };
	  }
	}

	function safelyResolveThenable(self, thenable) {
	  // Either fulfill, reject or reject with error
	  var called = false;
	  function onError(value) {
	    if (called) {
	      return;
	    }
	    called = true;
	    handlers.reject(self, value);
	  }

	  function onSuccess(value) {
	    if (called) {
	      return;
	    }
	    called = true;
	    handlers.resolve(self, value);
	  }

	  function tryToUnwrap() {
	    thenable(onSuccess, onError);
	  }

	  var result = tryCatch(tryToUnwrap);
	  if (result.status === 'error') {
	    onError(result.value);
	  }
	}

	function tryCatch(func, value) {
	  var out = {};
	  try {
	    out.value = func(value);
	    out.status = 'success';
	  } catch (e) {
	    out.status = 'error';
	    out.value = e;
	  }
	  return out;
	}

	Promise.resolve = resolve;
	function resolve(value) {
	  if (value instanceof this) {
	    return value;
	  }
	  return handlers.resolve(new this(INTERNAL), value);
	}

	Promise.reject = reject;
	function reject(reason) {
	  var promise = new this(INTERNAL);
	  return handlers.reject(promise, reason);
	}

	Promise.all = all;
	function all(iterable) {
	  var self = this;
	  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
	    return this.reject(new TypeError('must be an array'));
	  }

	  var len = iterable.length;
	  var called = false;
	  if (!len) {
	    return this.resolve([]);
	  }

	  var values = new Array(len);
	  var resolved = 0;
	  var i = -1;
	  var promise = new this(INTERNAL);

	  while (++i < len) {
	    allResolver(iterable[i], i);
	  }
	  return promise;
	  function allResolver(value, i) {
	    self.resolve(value).then(resolveFromAll, function (error) {
	      if (!called) {
	        called = true;
	        handlers.reject(promise, error);
	      }
	    });
	    function resolveFromAll(outValue) {
	      values[i] = outValue;
	      if (++resolved === len && !called) {
	        called = true;
	        handlers.resolve(promise, values);
	      }
	    }
	  }
	}

	Promise.race = race;
	function race(iterable) {
	  var self = this;
	  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
	    return this.reject(new TypeError('must be an array'));
	  }

	  var len = iterable.length;
	  var called = false;
	  if (!len) {
	    return this.resolve([]);
	  }

	  var i = -1;
	  var promise = new this(INTERNAL);

	  while (++i < len) {
	    resolver(iterable[i]);
	  }
	  return promise;
	  function resolver(value) {
	    self.resolve(value).then(function (response) {
	      if (!called) {
	        called = true;
	        handlers.resolve(promise, response);
	      }
	    }, function (error) {
	      if (!called) {
	        called = true;
	        handlers.reject(promise, error);
	      }
	    });
	  }
	}


/***/ },
/* 21 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	var Mutation = global.MutationObserver || global.WebKitMutationObserver;

	var scheduleDrain;

	{
	  if (Mutation) {
	    var called = 0;
	    var observer = new Mutation(nextTick);
	    var element = global.document.createTextNode('');
	    observer.observe(element, {
	      characterData: true
	    });
	    scheduleDrain = function () {
	      element.data = (called = ++called % 2);
	    };
	  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
	    var channel = new global.MessageChannel();
	    channel.port1.onmessage = nextTick;
	    scheduleDrain = function () {
	      channel.port2.postMessage(0);
	    };
	  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
	    scheduleDrain = function () {

	      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	      var scriptEl = global.document.createElement('script');
	      scriptEl.onreadystatechange = function () {
	        nextTick();

	        scriptEl.onreadystatechange = null;
	        scriptEl.parentNode.removeChild(scriptEl);
	        scriptEl = null;
	      };
	      global.document.documentElement.appendChild(scriptEl);
	    };
	  } else {
	    scheduleDrain = function () {
	      setTimeout(nextTick, 0);
	    };
	  }
	}

	var draining;
	var queue = [];
	//named nextTick for less confusing stack traces
	function nextTick() {
	  draining = true;
	  var i, oldQueue;
	  var len = queue.length;
	  while (len) {
	    oldQueue = queue;
	    queue = [];
	    i = -1;
	    while (++i < len) {
	      oldQueue[i]();
	    }
	    len = queue.length;
	  }
	  draining = false;
	}

	module.exports = immediate;
	function immediate(task) {
	  if (queue.push(task) === 1 && !draining) {
	    scheduleDrain();
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	module.exports = argsArray;

	function argsArray(fun) {
	  return function () {
	    var len = arguments.length;
	    if (len) {
	      var args = [];
	      var i = -1;
	      while (++i < len) {
	        args[i] = arguments[i];
	      }
	      return fun.call(this, args);
	    } else {
	      return fun.call(this, []);
	    }
	  };
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.9.2
	(function() {
	  var hasProp = {}.hasOwnProperty,
	    slice = [].slice;

	  module.exports = function(source, scope) {
	    var key, keys, value, values;
	    keys = [];
	    values = [];
	    for (key in scope) {
	      if (!hasProp.call(scope, key)) continue;
	      value = scope[key];
	      if (key === 'this') {
	        continue;
	      }
	      keys.push(key);
	      values.push(value);
	    }
	    return Function.apply(null, slice.call(keys).concat([source])).apply(scope["this"], values);
	  };

	}).call(this);


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	(function (factory) {
	    if (true) {
	        // Node/CommonJS
	        module.exports = factory();
	    } else if (typeof define === 'function' && define.amd) {
	        // AMD
	        define(factory);
	    } else {
	        // Browser globals (with support for web workers)
	        var glob;

	        try {
	            glob = window;
	        } catch (e) {
	            glob = self;
	        }

	        glob.SparkMD5 = factory();
	    }
	}(function (undefined) {

	    'use strict';

	    /*
	     * Fastest md5 implementation around (JKM md5).
	     * Credits: Joseph Myers
	     *
	     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
	     * @see http://jsperf.com/md5-shootout/7
	     */

	    /* this function is much faster,
	      so if possible we use it. Some IEs
	      are the only ones I know of that
	      need the idiotic second function,
	      generated by an if clause.  */
	    var add32 = function (a, b) {
	        return (a + b) & 0xFFFFFFFF;
	    },
	        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


	    function cmn(q, a, b, x, s, t) {
	        a = add32(add32(a, q), add32(x, t));
	        return add32((a << s) | (a >>> (32 - s)), b);
	    }

	    function ff(a, b, c, d, x, s, t) {
	        return cmn((b & c) | ((~b) & d), a, b, x, s, t);
	    }

	    function gg(a, b, c, d, x, s, t) {
	        return cmn((b & d) | (c & (~d)), a, b, x, s, t);
	    }

	    function hh(a, b, c, d, x, s, t) {
	        return cmn(b ^ c ^ d, a, b, x, s, t);
	    }

	    function ii(a, b, c, d, x, s, t) {
	        return cmn(c ^ (b | (~d)), a, b, x, s, t);
	    }

	    function md5cycle(x, k) {
	        var a = x[0],
	            b = x[1],
	            c = x[2],
	            d = x[3];

	        a = ff(a, b, c, d, k[0], 7, -680876936);
	        d = ff(d, a, b, c, k[1], 12, -389564586);
	        c = ff(c, d, a, b, k[2], 17, 606105819);
	        b = ff(b, c, d, a, k[3], 22, -1044525330);
	        a = ff(a, b, c, d, k[4], 7, -176418897);
	        d = ff(d, a, b, c, k[5], 12, 1200080426);
	        c = ff(c, d, a, b, k[6], 17, -1473231341);
	        b = ff(b, c, d, a, k[7], 22, -45705983);
	        a = ff(a, b, c, d, k[8], 7, 1770035416);
	        d = ff(d, a, b, c, k[9], 12, -1958414417);
	        c = ff(c, d, a, b, k[10], 17, -42063);
	        b = ff(b, c, d, a, k[11], 22, -1990404162);
	        a = ff(a, b, c, d, k[12], 7, 1804603682);
	        d = ff(d, a, b, c, k[13], 12, -40341101);
	        c = ff(c, d, a, b, k[14], 17, -1502002290);
	        b = ff(b, c, d, a, k[15], 22, 1236535329);

	        a = gg(a, b, c, d, k[1], 5, -165796510);
	        d = gg(d, a, b, c, k[6], 9, -1069501632);
	        c = gg(c, d, a, b, k[11], 14, 643717713);
	        b = gg(b, c, d, a, k[0], 20, -373897302);
	        a = gg(a, b, c, d, k[5], 5, -701558691);
	        d = gg(d, a, b, c, k[10], 9, 38016083);
	        c = gg(c, d, a, b, k[15], 14, -660478335);
	        b = gg(b, c, d, a, k[4], 20, -405537848);
	        a = gg(a, b, c, d, k[9], 5, 568446438);
	        d = gg(d, a, b, c, k[14], 9, -1019803690);
	        c = gg(c, d, a, b, k[3], 14, -187363961);
	        b = gg(b, c, d, a, k[8], 20, 1163531501);
	        a = gg(a, b, c, d, k[13], 5, -1444681467);
	        d = gg(d, a, b, c, k[2], 9, -51403784);
	        c = gg(c, d, a, b, k[7], 14, 1735328473);
	        b = gg(b, c, d, a, k[12], 20, -1926607734);

	        a = hh(a, b, c, d, k[5], 4, -378558);
	        d = hh(d, a, b, c, k[8], 11, -2022574463);
	        c = hh(c, d, a, b, k[11], 16, 1839030562);
	        b = hh(b, c, d, a, k[14], 23, -35309556);
	        a = hh(a, b, c, d, k[1], 4, -1530992060);
	        d = hh(d, a, b, c, k[4], 11, 1272893353);
	        c = hh(c, d, a, b, k[7], 16, -155497632);
	        b = hh(b, c, d, a, k[10], 23, -1094730640);
	        a = hh(a, b, c, d, k[13], 4, 681279174);
	        d = hh(d, a, b, c, k[0], 11, -358537222);
	        c = hh(c, d, a, b, k[3], 16, -722521979);
	        b = hh(b, c, d, a, k[6], 23, 76029189);
	        a = hh(a, b, c, d, k[9], 4, -640364487);
	        d = hh(d, a, b, c, k[12], 11, -421815835);
	        c = hh(c, d, a, b, k[15], 16, 530742520);
	        b = hh(b, c, d, a, k[2], 23, -995338651);

	        a = ii(a, b, c, d, k[0], 6, -198630844);
	        d = ii(d, a, b, c, k[7], 10, 1126891415);
	        c = ii(c, d, a, b, k[14], 15, -1416354905);
	        b = ii(b, c, d, a, k[5], 21, -57434055);
	        a = ii(a, b, c, d, k[12], 6, 1700485571);
	        d = ii(d, a, b, c, k[3], 10, -1894986606);
	        c = ii(c, d, a, b, k[10], 15, -1051523);
	        b = ii(b, c, d, a, k[1], 21, -2054922799);
	        a = ii(a, b, c, d, k[8], 6, 1873313359);
	        d = ii(d, a, b, c, k[15], 10, -30611744);
	        c = ii(c, d, a, b, k[6], 15, -1560198380);
	        b = ii(b, c, d, a, k[13], 21, 1309151649);
	        a = ii(a, b, c, d, k[4], 6, -145523070);
	        d = ii(d, a, b, c, k[11], 10, -1120210379);
	        c = ii(c, d, a, b, k[2], 15, 718787259);
	        b = ii(b, c, d, a, k[9], 21, -343485551);

	        x[0] = add32(a, x[0]);
	        x[1] = add32(b, x[1]);
	        x[2] = add32(c, x[2]);
	        x[3] = add32(d, x[3]);
	    }

	    function md5blk(s) {
	        var md5blks = [],
	            i; /* Andy King said do it this way. */

	        for (i = 0; i < 64; i += 4) {
	            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
	        }
	        return md5blks;
	    }

	    function md5blk_array(a) {
	        var md5blks = [],
	            i; /* Andy King said do it this way. */

	        for (i = 0; i < 64; i += 4) {
	            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
	        }
	        return md5blks;
	    }

	    function md51(s) {
	        var n = s.length,
	            state = [1732584193, -271733879, -1732584194, 271733878],
	            i,
	            length,
	            tail,
	            tmp,
	            lo,
	            hi;

	        for (i = 64; i <= n; i += 64) {
	            md5cycle(state, md5blk(s.substring(i - 64, i)));
	        }
	        s = s.substring(i - 64);
	        length = s.length;
	        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	        for (i = 0; i < length; i += 1) {
	            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
	        }
	        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
	        if (i > 55) {
	            md5cycle(state, tail);
	            for (i = 0; i < 16; i += 1) {
	                tail[i] = 0;
	            }
	        }

	        // Beware that the final length might not fit in 32 bits so we take care of that
	        tmp = n * 8;
	        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
	        lo = parseInt(tmp[2], 16);
	        hi = parseInt(tmp[1], 16) || 0;

	        tail[14] = lo;
	        tail[15] = hi;

	        md5cycle(state, tail);
	        return state;
	    }

	    function md51_array(a) {
	        var n = a.length,
	            state = [1732584193, -271733879, -1732584194, 271733878],
	            i,
	            length,
	            tail,
	            tmp,
	            lo,
	            hi;

	        for (i = 64; i <= n; i += 64) {
	            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
	        }

	        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
	        // containing the last element of the parent array if the sub array specified starts
	        // beyond the length of the parent array - weird.
	        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
	        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

	        length = a.length;
	        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	        for (i = 0; i < length; i += 1) {
	            tail[i >> 2] |= a[i] << ((i % 4) << 3);
	        }

	        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
	        if (i > 55) {
	            md5cycle(state, tail);
	            for (i = 0; i < 16; i += 1) {
	                tail[i] = 0;
	            }
	        }

	        // Beware that the final length might not fit in 32 bits so we take care of that
	        tmp = n * 8;
	        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
	        lo = parseInt(tmp[2], 16);
	        hi = parseInt(tmp[1], 16) || 0;

	        tail[14] = lo;
	        tail[15] = hi;

	        md5cycle(state, tail);

	        return state;
	    }

	    function rhex(n) {
	        var s = '',
	            j;
	        for (j = 0; j < 4; j += 1) {
	            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
	        }
	        return s;
	    }

	    function hex(x) {
	        var i;
	        for (i = 0; i < x.length; i += 1) {
	            x[i] = rhex(x[i]);
	        }
	        return x.join('');
	    }

	    // In some cases the fast add32 function cannot be used..
	    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
	        add32 = function (x, y) {
	            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
	                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	            return (msw << 16) | (lsw & 0xFFFF);
	        };
	    }

	    // ---------------------------------------------------

	    /**
	     * ArrayBuffer slice polyfill.
	     *
	     * @see https://github.com/ttaubert/node-arraybuffer-slice
	     */

	    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
	        (function () {
	            function clamp(val, length) {
	                val = (val | 0) || 0;

	                if (val < 0) {
	                    return Math.max(val + length, 0);
	                }

	                return Math.min(val, length);
	            }

	            ArrayBuffer.prototype.slice = function (from, to) {
	                var length = this.byteLength,
	                    begin = clamp(from, length),
	                    end = length,
	                    num,
	                    target,
	                    targetArray,
	                    sourceArray;

	                if (to !== undefined) {
	                    end = clamp(to, length);
	                }

	                if (begin > end) {
	                    return new ArrayBuffer(0);
	                }

	                num = end - begin;
	                target = new ArrayBuffer(num);
	                targetArray = new Uint8Array(target);

	                sourceArray = new Uint8Array(this, begin, num);
	                targetArray.set(sourceArray);

	                return target;
	            };
	        })();
	    }

	    // ---------------------------------------------------

	    /**
	     * Helpers.
	     */

	    function toUtf8(str) {
	        if (/[\u0080-\uFFFF]/.test(str)) {
	            str = unescape(encodeURIComponent(str));
	        }

	        return str;
	    }

	    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
	        var length = str.length,
	           buff = new ArrayBuffer(length),
	           arr = new Uint8Array(buff),
	           i;

	        for (i = 0; i < length; i += 1) {
	            arr[i] = str.charCodeAt(i);
	        }

	        return returnUInt8Array ? arr : buff;
	    }

	    function arrayBuffer2Utf8Str(buff) {
	        return String.fromCharCode.apply(null, new Uint8Array(buff));
	    }

	    function concatenateArrayBuffers(first, second, returnUInt8Array) {
	        var result = new Uint8Array(first.byteLength + second.byteLength);

	        result.set(new Uint8Array(first));
	        result.set(new Uint8Array(second), first.byteLength);

	        return returnUInt8Array ? result : result.buffer;
	    }

	    function hexToBinaryString(hex) {
	        var bytes = [],
	            length = hex.length,
	            x;

	        for (x = 0; x < length - 1; x += 2) {
	            bytes.push(parseInt(hex.substr(x, 2), 16));
	        }

	        return String.fromCharCode.apply(String, bytes);
	    }

	    // ---------------------------------------------------

	    /**
	     * SparkMD5 OOP implementation.
	     *
	     * Use this class to perform an incremental md5, otherwise use the
	     * static methods instead.
	     */

	    function SparkMD5() {
	        // call reset to init the instance
	        this.reset();
	    }

	    /**
	     * Appends a string.
	     * A conversion will be applied if an utf8 string is detected.
	     *
	     * @param {String} str The string to be appended
	     *
	     * @return {SparkMD5} The instance itself
	     */
	    SparkMD5.prototype.append = function (str) {
	        // Converts the string to utf8 bytes if necessary
	        // Then append as binary
	        this.appendBinary(toUtf8(str));

	        return this;
	    };

	    /**
	     * Appends a binary string.
	     *
	     * @param {String} contents The binary string to be appended
	     *
	     * @return {SparkMD5} The instance itself
	     */
	    SparkMD5.prototype.appendBinary = function (contents) {
	        this._buff += contents;
	        this._length += contents.length;

	        var length = this._buff.length,
	            i;

	        for (i = 64; i <= length; i += 64) {
	            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
	        }

	        this._buff = this._buff.substring(i - 64);

	        return this;
	    };

	    /**
	     * Finishes the incremental computation, reseting the internal state and
	     * returning the result.
	     *
	     * @param {Boolean} raw True to get the raw string, false to get the hex string
	     *
	     * @return {String} The result
	     */
	    SparkMD5.prototype.end = function (raw) {
	        var buff = this._buff,
	            length = buff.length,
	            i,
	            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	            ret;

	        for (i = 0; i < length; i += 1) {
	            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
	        }

	        this._finish(tail, length);
	        ret = hex(this._hash);

	        if (raw) {
	            ret = hexToBinaryString(ret);
	        }

	        this.reset();

	        return ret;
	    };

	    /**
	     * Resets the internal state of the computation.
	     *
	     * @return {SparkMD5} The instance itself
	     */
	    SparkMD5.prototype.reset = function () {
	        this._buff = '';
	        this._length = 0;
	        this._hash = [1732584193, -271733879, -1732584194, 271733878];

	        return this;
	    };

	    /**
	     * Gets the internal state of the computation.
	     *
	     * @return {Object} The state
	     */
	    SparkMD5.prototype.getState = function () {
	        return {
	            buff: this._buff,
	            length: this._length,
	            hash: this._hash
	        };
	    };

	    /**
	     * Gets the internal state of the computation.
	     *
	     * @param {Object} state The state
	     *
	     * @return {SparkMD5} The instance itself
	     */
	    SparkMD5.prototype.setState = function (state) {
	        this._buff = state.buff;
	        this._length = state.length;
	        this._hash = state.hash;

	        return this;
	    };

	    /**
	     * Releases memory used by the incremental buffer and other additional
	     * resources. If you plan to use the instance again, use reset instead.
	     */
	    SparkMD5.prototype.destroy = function () {
	        delete this._hash;
	        delete this._buff;
	        delete this._length;
	    };

	    /**
	     * Finish the final calculation based on the tail.
	     *
	     * @param {Array}  tail   The tail (will be modified)
	     * @param {Number} length The length of the remaining buffer
	     */
	    SparkMD5.prototype._finish = function (tail, length) {
	        var i = length,
	            tmp,
	            lo,
	            hi;

	        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
	        if (i > 55) {
	            md5cycle(this._hash, tail);
	            for (i = 0; i < 16; i += 1) {
	                tail[i] = 0;
	            }
	        }

	        // Do the final computation based on the tail and length
	        // Beware that the final length may not fit in 32 bits so we take care of that
	        tmp = this._length * 8;
	        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
	        lo = parseInt(tmp[2], 16);
	        hi = parseInt(tmp[1], 16) || 0;

	        tail[14] = lo;
	        tail[15] = hi;
	        md5cycle(this._hash, tail);
	    };

	    /**
	     * Performs the md5 hash on a string.
	     * A conversion will be applied if utf8 string is detected.
	     *
	     * @param {String}  str The string
	     * @param {Boolean} raw True to get the raw string, false to get the hex string
	     *
	     * @return {String} The result
	     */
	    SparkMD5.hash = function (str, raw) {
	        // Converts the string to utf8 bytes if necessary
	        // Then compute it using the binary function
	        return SparkMD5.hashBinary(toUtf8(str), raw);
	    };

	    /**
	     * Performs the md5 hash on a binary string.
	     *
	     * @param {String}  content The binary string
	     * @param {Boolean} raw     True to get the raw string, false to get the hex string
	     *
	     * @return {String} The result
	     */
	    SparkMD5.hashBinary = function (content, raw) {
	        var hash = md51(content),
	            ret = hex(hash);

	        return raw ? hexToBinaryString(ret) : ret;
	    };

	    // ---------------------------------------------------

	    /**
	     * SparkMD5 OOP implementation for array buffers.
	     *
	     * Use this class to perform an incremental md5 ONLY for array buffers.
	     */
	    SparkMD5.ArrayBuffer = function () {
	        // call reset to init the instance
	        this.reset();
	    };

	    /**
	     * Appends an array buffer.
	     *
	     * @param {ArrayBuffer} arr The array to be appended
	     *
	     * @return {SparkMD5.ArrayBuffer} The instance itself
	     */
	    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
	        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
	            length = buff.length,
	            i;

	        this._length += arr.byteLength;

	        for (i = 64; i <= length; i += 64) {
	            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
	        }

	        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

	        return this;
	    };

	    /**
	     * Finishes the incremental computation, reseting the internal state and
	     * returning the result.
	     *
	     * @param {Boolean} raw True to get the raw string, false to get the hex string
	     *
	     * @return {String} The result
	     */
	    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
	        var buff = this._buff,
	            length = buff.length,
	            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	            i,
	            ret;

	        for (i = 0; i < length; i += 1) {
	            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
	        }

	        this._finish(tail, length);
	        ret = hex(this._hash);

	        if (raw) {
	            ret = hexToBinaryString(ret);
	        }

	        this.reset();

	        return ret;
	    };

	    /**
	     * Resets the internal state of the computation.
	     *
	     * @return {SparkMD5.ArrayBuffer} The instance itself
	     */
	    SparkMD5.ArrayBuffer.prototype.reset = function () {
	        this._buff = new Uint8Array(0);
	        this._length = 0;
	        this._hash = [1732584193, -271733879, -1732584194, 271733878];

	        return this;
	    };

	    /**
	     * Gets the internal state of the computation.
	     *
	     * @return {Object} The state
	     */
	    SparkMD5.ArrayBuffer.prototype.getState = function () {
	        var state = SparkMD5.prototype.getState.call(this);

	        // Convert buffer to a string
	        state.buff = arrayBuffer2Utf8Str(state.buff);

	        return state;
	    };

	    /**
	     * Gets the internal state of the computation.
	     *
	     * @param {Object} state The state
	     *
	     * @return {SparkMD5.ArrayBuffer} The instance itself
	     */
	    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
	        // Convert string to buffer
	        state.buff = utf8Str2ArrayBuffer(state.buff, true);

	        return SparkMD5.prototype.setState.call(this, state);
	    };

	    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

	    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

	    /**
	     * Performs the md5 hash on an array buffer.
	     *
	     * @param {ArrayBuffer} arr The array buffer
	     * @param {Boolean}     raw True to get the raw string, false to get the hex one
	     *
	     * @return {String} The result
	     */
	    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
	        var hash = md51_array(new Uint8Array(arr)),
	            ret = hex(hash);

	        return raw ? hexToBinaryString(ret) : ret;
	    };

	    return SparkMD5;
	}));


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Stringify/parse functions that don't operate
	 * recursively, so they avoid call stack exceeded
	 * errors.
	 */
	exports.stringify = function stringify(input) {
	  var queue = [];
	  queue.push({obj: input});

	  var res = '';
	  var next, obj, prefix, val, i, arrayPrefix, keys, k, key, value, objPrefix;
	  while ((next = queue.pop())) {
	    obj = next.obj;
	    prefix = next.prefix || '';
	    val = next.val || '';
	    res += prefix;
	    if (val) {
	      res += val;
	    } else if (typeof obj !== 'object') {
	      res += typeof obj === 'undefined' ? null : JSON.stringify(obj);
	    } else if (obj === null) {
	      res += 'null';
	    } else if (Array.isArray(obj)) {
	      queue.push({val: ']'});
	      for (i = obj.length - 1; i >= 0; i--) {
	        arrayPrefix = i === 0 ? '' : ',';
	        queue.push({obj: obj[i], prefix: arrayPrefix});
	      }
	      queue.push({val: '['});
	    } else { // object
	      keys = [];
	      for (k in obj) {
	        if (obj.hasOwnProperty(k)) {
	          keys.push(k);
	        }
	      }
	      queue.push({val: '}'});
	      for (i = keys.length - 1; i >= 0; i--) {
	        key = keys[i];
	        value = obj[key];
	        objPrefix = (i > 0 ? ',' : '');
	        objPrefix += JSON.stringify(key) + ':';
	        queue.push({obj: value, prefix: objPrefix});
	      }
	      queue.push({val: '{'});
	    }
	  }
	  return res;
	};

	// Convenience function for the parse function.
	// This pop function is basically copied from
	// pouchCollate.parseIndexableString
	function pop(obj, stack, metaStack) {
	  var lastMetaElement = metaStack[metaStack.length - 1];
	  if (obj === lastMetaElement.element) {
	    // popping a meta-element, e.g. an object whose value is another object
	    metaStack.pop();
	    lastMetaElement = metaStack[metaStack.length - 1];
	  }
	  var element = lastMetaElement.element;
	  var lastElementIndex = lastMetaElement.index;
	  if (Array.isArray(element)) {
	    element.push(obj);
	  } else if (lastElementIndex === stack.length - 2) { // obj with key+value
	    var key = stack.pop();
	    element[key] = obj;
	  } else {
	    stack.push(obj); // obj with key only
	  }
	}

	exports.parse = function (str) {
	  var stack = [];
	  var metaStack = []; // stack for arrays and objects
	  var i = 0;
	  var collationIndex,parsedNum,numChar;
	  var parsedString,lastCh,numConsecutiveSlashes,ch;
	  var arrayElement, objElement;
	  while (true) {
	    collationIndex = str[i++];
	    if (collationIndex === '}' ||
	        collationIndex === ']' ||
	        typeof collationIndex === 'undefined') {
	      if (stack.length === 1) {
	        return stack.pop();
	      } else {
	        pop(stack.pop(), stack, metaStack);
	        continue;
	      }
	    }
	    switch (collationIndex) {
	      case ' ':
	      case '\t':
	      case '\n':
	      case ':':
	      case ',':
	        break;
	      case 'n':
	        i += 3; // 'ull'
	        pop(null, stack, metaStack);
	        break;
	      case 't':
	        i += 3; // 'rue'
	        pop(true, stack, metaStack);
	        break;
	      case 'f':
	        i += 4; // 'alse'
	        pop(false, stack, metaStack);
	        break;
	      case '0':
	      case '1':
	      case '2':
	      case '3':
	      case '4':
	      case '5':
	      case '6':
	      case '7':
	      case '8':
	      case '9':
	      case '-':
	        parsedNum = '';
	        i--;
	        while (true) {
	          numChar = str[i++];
	          if (/[\d\.\-e\+]/.test(numChar)) {
	            parsedNum += numChar;
	          } else {
	            i--;
	            break;
	          }
	        }
	        pop(parseFloat(parsedNum), stack, metaStack);
	        break;
	      case '"':
	        parsedString = '';
	        lastCh = void 0;
	        numConsecutiveSlashes = 0;
	        while (true) {
	          ch = str[i++];
	          if (ch !== '"' || (lastCh === '\\' &&
	              numConsecutiveSlashes % 2 === 1)) {
	            parsedString += ch;
	            lastCh = ch;
	            if (lastCh === '\\') {
	              numConsecutiveSlashes++;
	            } else {
	              numConsecutiveSlashes = 0;
	            }
	          } else {
	            break;
	          }
	        }
	        pop(JSON.parse('"' + parsedString + '"'), stack, metaStack);
	        break;
	      case '[':
	        arrayElement = { element: [], index: stack.length };
	        stack.push(arrayElement.element);
	        metaStack.push(arrayElement);
	        break;
	      case '{':
	        objElement = { element: {}, index: stack.length };
	        stack.push(objElement.element);
	        metaStack.push(objElement);
	        break;
	      default:
	        throw new Error(
	          'unexpectedly reached end of input: ' + collationIndex);
	    }
	  }
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  /* istanbul ignore next */
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  } else if (typeof exports === 'object') {
	    module.exports = factory()
	  } else {
	    root.PromisePool = factory()
	    // Legacy API
	    root.promisePool = root.PromisePool
	  }
	})(this, function () {
	  'use strict'

	  var EventTarget = function () {
	    this._listeners = {}
	  }

	  EventTarget.prototype.addEventListener = function (type, listener) {
	    this._listeners[type] = this._listeners[type] || []
	    if (this._listeners[type].indexOf(listener) < 0) {
	      this._listeners[type].push(listener)
	    }
	  }

	  EventTarget.prototype.removeEventListener = function (type, listener) {
	    if (this._listeners[type]) {
	      var p = this._listeners[type].indexOf(listener)
	      if (p >= 0) {
	        this._listeners[type].splice(p, 1)
	      }
	    }
	  }

	  EventTarget.prototype.dispatchEvent = function (evt) {
	    if (this._listeners[evt.type] && this._listeners[evt.type].length) {
	      var listeners = this._listeners[evt.type].slice()
	      for (var i = 0, l = listeners.length; i < l; ++i) {
	        listeners[i].call(this, evt)
	      }
	    }
	  }

	  var isGenerator = function (func) {
	    return (typeof func.constructor === 'function' &&
	      func.constructor.name === 'GeneratorFunction')
	  }

	  var functionToIterator = function (func) {
	    return {
	      next: function () {
	        var promise = func()
	        return promise ? {value: promise} : {done: true}
	      }
	    }
	  }

	  var promiseToIterator = function (promise) {
	    var called = false
	    return {
	      next: function () {
	        if (called) {
	          return {done: true}
	        }
	        called = true
	        return {value: promise}
	      }
	    }
	  }

	  var toIterator = function (obj, Promise) {
	    var type = typeof obj
	    if (type === 'object') {
	      if (typeof obj.next === 'function') {
	        return obj
	      }
	      /* istanbul ignore else */
	      if (typeof obj.then === 'function') {
	        return promiseToIterator(obj)
	      }
	    }
	    if (type === 'function') {
	      return isGenerator(obj) ? obj() : functionToIterator(obj)
	    }
	    return promiseToIterator(Promise.resolve(obj))
	  }

	  var PromisePoolEvent = function (target, type, data) {
	    this.target = target
	    this.type = type
	    this.data = data
	  }

	  var PromisePool = function (source, concurrency, options) {
	    EventTarget.call(this)
	    if (typeof concurrency !== 'number' ||
	        Math.floor(concurrency) !== concurrency ||
	        concurrency < 1) {
	      throw new Error('Invalid concurrency')
	    }
	    this._concurrency = concurrency
	    this._options = options || {}
	    this._options.promise = this._options.promise || Promise
	    this._iterator = toIterator(source, this._options.promise)
	    this._done = false
	    this._size = 0
	    this._promise = null
	    this._callbacks = null
	  }
	  PromisePool.prototype = new EventTarget()
	  PromisePool.prototype.constructor = PromisePool

	  PromisePool.prototype.concurrency = function (value) {
	    if (typeof value !== 'undefined') {
	      this._concurrency = value
	      if (this.active()) {
	        this._proceed()
	      }
	    }
	    return this._concurrency
	  }

	  PromisePool.prototype.size = function () {
	    return this._size
	  }

	  PromisePool.prototype.active = function () {
	    return !!this._promise
	  }

	  PromisePool.prototype.promise = function () {
	    return this._promise
	  }

	  PromisePool.prototype.start = function () {
	    var that = this
	    var Promise = this._options.promise
	    this._promise = new Promise(function (resolve, reject) {
	      that._callbacks = {
	        reject: reject,
	        resolve: resolve
	      }
	      that._proceed()
	    })
	    return this._promise
	  }

	  PromisePool.prototype._fireEvent = function (type, data) {
	    this.dispatchEvent(new PromisePoolEvent(this, type, data))
	  }

	  PromisePool.prototype._settle = function (error) {
	    if (error) {
	      this._callbacks.reject(error)
	    } else {
	      this._callbacks.resolve()
	    }
	    this._promise = null
	    this._callbacks = null
	  }

	  PromisePool.prototype._onPooledPromiseFulfilled = function (promise, result) {
	    this._size--
	    if (this.active()) {
	      this._fireEvent('fulfilled', {
	        promise: promise,
	        result: result
	      })
	      this._proceed()
	    }
	  }

	  PromisePool.prototype._onPooledPromiseRejected = function (promise, error) {
	    this._size--
	    if (this.active()) {
	      this._fireEvent('rejected', {
	        promise: promise,
	        error: error
	      })
	      this._settle(error || new Error('Unknown error'))
	    }
	  }

	  PromisePool.prototype._trackPromise = function (promise) {
	    var that = this
	    promise
	      .then(function (result) {
	        that._onPooledPromiseFulfilled(promise, result)
	      }, function (error) {
	        that._onPooledPromiseRejected(promise, error)
	      })['catch'](function (err) {
	        that._settle(new Error('Promise processing failed: ' + err))
	      })
	  }

	  PromisePool.prototype._proceed = function () {
	    if (!this._done) {
	      var result = null
	      while (this._size < this._concurrency &&
	          !(result = this._iterator.next()).done) {
	        this._size++
	        this._trackPromise(result.value)
	      }
	      this._done = (result === null || !!result.done)
	    }
	    if (this._done && this._size === 0) {
	      this._settle()
	    }
	  }

	  PromisePool.PromisePoolEvent = PromisePoolEvent
	  // Legacy API
	  PromisePool.PromisePool = PromisePool

	  return PromisePool
	})


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"col-sm-6 col-sm-offset-3\">\r\n      <h1>Quote of the day</h1>\r\n      <button class=\"ui dark button\" @click=\"getQuote()\">Get a Quote</button>\r\n      <div class=\"quote-area\" v-if=\"quote\">\r\n        <h2>\r\n            <blockquote>{{ quote }}\r\n                <footer>{{ author }} in <cite title=\"Source Title\">{{ title }}</cite></footer>   \r\n            </blockquote>\r\n        </h2>   \r\n      </div>\r\n    </div>\r\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\history.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./history.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _store = __webpack_require__(13);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            histories: []
	        };
	    },

	    route: {
	        activate: function activate() {
	            this.getHistories();
	        }
	    },
	    methods: {
	        getHistories: function getHistories() {
	            this.histories = _store2.default.getHistories();
	        }
	    }
	};
	// </script>
	// <template>
	//     <div class="col-sm-4 col-sm-offset-4">
	//         <h2>Quotes Histories</h2>
	//         <table class="table table-hover">
	//             <tr v-fors="history in histories">
	//                 <td>{{ history.doc.qoute }}</td>
	//                 <td>{{ history.doc.author }}</td>
	//                 <td>{{ history.doc.title}}</td>
	//             </tr>
	//         </table>
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"col-sm-4 col-sm-offset-4\">\n    <h2>Quotes Histories</h2>\n    <table class=\"table table-hover\">\n        <tr v-fors=\"history in histories\">\n            <td>{{ history.doc.qoute }}</td>\n            <td>{{ history.doc.author }}</td>\n            <td>{{ history.doc.title}}</td>\n        </tr>\n    </table>\n</div>\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\signup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(34)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./signup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="col-sm-4 col-sm-offset-4">
	//     <h2>Sign Up</h2>
	//     <p>Sign up for a free account to get some great quotes.</p>
	//     <div class="alert alert-danger" v-if="error">
	//       <p>{{ error }}</p>
	//     </div>
	//     <div class="form-group">
	//       <input 
	//         type="text" 
	//         class="form-control"
	//         placeholder="Enter your username"
	//         v-model="credentials.username"
	//       >
	//     </div>
	//     <div class="form-group">
	//       <input
	//         type="password"
	//         class="form-control"
	//         placeholder="Enter your password"
	//         v-model="credentials.password"
	//       >
	//     </div>
	//     <button class="btn btn-primary" @click="submit()">Access</button>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      credentials: {
	        username: '',
	        password: ''
	      },
	      error: ''
	    };
	  },

	  methods: {
	    submit: function submit() {
	      var credentials = {
	        username: this.credentials.username,
	        password: this.credentials.password
	      };
	    }
	  }
	};
	// </script>

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"col-sm-4 col-sm-offset-4\">\n  <h2>Sign Up</h2>\n  <p>Sign up for a free account to get some great quotes.</p>\n  <div class=\"alert alert-danger\" v-if=\"error\">\n    <p>{{ error }}</p>\n  </div>\n  <div class=\"form-group\">\n    <input \n      type=\"text\" \n      class=\"form-control\"\n      placeholder=\"Enter your username\"\n      v-model=\"credentials.username\"\n    >\n  </div>\n  <div class=\"form-group\">\n    <input\n      type=\"password\"\n      class=\"form-control\"\n      placeholder=\"Enter your password\"\n      v-model=\"credentials.password\"\n    >\n  </div>\n  <button class=\"btn btn-primary\" @click=\"submit()\">Access</button>\n</div>\n";

/***/ }
/******/ ]);