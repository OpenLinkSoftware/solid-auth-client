(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fetch"), require("window"));
	else if(typeof define === 'function' && define.amd)
		define(["fetch", "window"], factory);
	else if(typeof exports === 'object')
		exports["auth"] = factory(require("fetch"), require("window"));
	else
		root["solid"] = root["solid"] || {}, root["solid"]["auth"] = factory(root["fetch"], root["window"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__27__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solid_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 // Export a singleton instance of SolidAuthClient

const auth = new _solid_auth_client__WEBPACK_IMPORTED_MODULE_0__["default"]();
/* harmony default export */ __webpack_exports__["default"] = (auth); // Bind methods to instance, so they can be invoked as regular functions
// (e.g., to pass around the fetch function)

Object.getOwnPropertyNames(_solid_auth_client__WEBPACK_IMPORTED_MODULE_0__["default"].prototype).forEach(property => {
  const value = auth[property];

  if (typeof value === 'function') {
    auth[property] = value.bind(auth);
  }
}); // Expose window.SolidAuthClient for backward compatibility

if (typeof window !== 'undefined') {
  if ('SolidAuthClient' in window) {
    console.warn('Caution: multiple versions of solid-auth-client active.');
  } else {
    let warned = false;
    Object.defineProperty(window, 'SolidAuthClient', {
      enumerable: true,
      get: () => {
        if (!warned) {
          warned = true;
          console.warn('window.SolidAuthClient has been deprecated.');
          console.warn('Please use window.solid.auth instead.');
        }

        return auth;
      }
    });
  }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SolidAuthClient; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _authn_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _url_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _webid_oidc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* global fetch */






 // Store the global fetch, so the user is free to override it

const globalFetch = fetch;
class SolidAuthClient extends events__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor(...args) {
    super(...args);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_pendingSession", void 0);
  }

  fetch(input, options) {
    this.emit('request', Object(_url_util__WEBPACK_IMPORTED_MODULE_6__["toUrlString"])(input));
    return Object(_authn_fetch__WEBPACK_IMPORTED_MODULE_2__["authnFetch"])(Object(_storage__WEBPACK_IMPORTED_MODULE_5__["defaultStorage"])(), globalFetch, input, options);
  }

  login(idp, options) {
    options = _objectSpread(_objectSpread({}, defaultLoginOptions(Object(_url_util__WEBPACK_IMPORTED_MODULE_6__["currentUrlNoParams"])())), options);
    return _webid_oidc__WEBPACK_IMPORTED_MODULE_7__["login"](idp, options);
  }

  async popupLogin(options) {
    options = _objectSpread(_objectSpread({}, defaultLoginOptions()), options);

    if (!/https?:/.test(options.popupUri)) {
      options.popupUri = new URL(options.popupUri || '/.well-known/solid/login', window.location).toString();
    }

    if (!options.callbackUri) {
      options.callbackUri = options.popupUri;
    }

    const popup = Object(_popup__WEBPACK_IMPORTED_MODULE_3__["openIdpPopup"])(options.popupUri);
    const session = await Object(_popup__WEBPACK_IMPORTED_MODULE_3__["obtainSession"])(options.storage, popup, options);
    this.emit('login', session);
    this.emit('session', session);
    return session;
  }

  async currentSession(storage = Object(_storage__WEBPACK_IMPORTED_MODULE_5__["defaultStorage"])()) {
    // Try to obtain a stored or pending session
    let session = this._pendingSession || (await Object(_session__WEBPACK_IMPORTED_MODULE_4__["getSession"])(storage)); // If none found, attempt to create a new session

    if (!session) {
      // Try to create a new OIDC session from stored tokens
      try {
        this._pendingSession = _webid_oidc__WEBPACK_IMPORTED_MODULE_7__["currentSession"](storage);
        session = await this._pendingSession;
      } catch (err) {
        console.error(err);
      } // Save the new session and emit session events


      if (session) {
        await Object(_session__WEBPACK_IMPORTED_MODULE_4__["saveSession"])(storage)(session);
        this.emit('login', session);
        this.emit('session', session);
      }

      delete this._pendingSession;
    }

    return session;
  }

  async trackSession(callback) {
    /* eslint-disable standard/no-callback-literal */
    callback(await this.currentSession());
    this.on('session', callback);
  }

  stopTrackSession(callback) {
    this.removeListener('session', callback);
  }

  async logout(storage = Object(_storage__WEBPACK_IMPORTED_MODULE_5__["defaultStorage"])()) {
    const session = await Object(_session__WEBPACK_IMPORTED_MODULE_4__["getSession"])(storage);

    if (session) {
      try {
        await _webid_oidc__WEBPACK_IMPORTED_MODULE_7__["logout"](storage, globalFetch);
        this.emit('logout');
        this.emit('session', null);
      } catch (err) {
        console.warn('Error logging out:');
        console.error(err);
      }

      await Object(_session__WEBPACK_IMPORTED_MODULE_4__["clearSession"])(storage);
    }
  }

}

function defaultLoginOptions(url) {
  return {
    callbackUri: url ? url.split('#')[0] : '',
    popupUri: '',
    storage: Object(_storage__WEBPACK_IMPORTED_MODULE_5__["defaultStorage"])()
  };
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authnFetch", function() { return authnFetch; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _host__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _webid_oidc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






async function authnFetch(storage, fetch, input, options) {
  // Copy headers into a modifiable object
  if (options) {
    const headers = copyHeaders(options.headers);
    options = _objectSpread(_objectSpread({}, options), {}, {
      headers
    });
  } // If not authenticated, perform a regular fetch


  const session = await Object(_session__WEBPACK_IMPORTED_MODULE_4__["getSession"])(storage);

  if (!session) {
    return fetch(input, options);
  } // If we know the server expects credentials, send them


  if (await shouldShareCredentials(storage, input)) {
    return Object(_webid_oidc__WEBPACK_IMPORTED_MODULE_5__["fetchWithCredentials"])(session, fetch, input, options);
  } // If we don't know for sure, try a regular fetch first


  let resp = await fetch(input, options); // If the server then requests credentials, send them

  if (resp.status === 401) {
    await Object(_host__WEBPACK_IMPORTED_MODULE_3__["updateHostFromResponse"])(storage)(resp);

    if (await shouldShareCredentials(storage, input)) {
      resp = Object(_webid_oidc__WEBPACK_IMPORTED_MODULE_5__["fetchWithCredentials"])(session, fetch, input, options);
    }
  }

  return resp;
}

async function shouldShareCredentials(storage, input) {
  const requestHost = await Object(_host__WEBPACK_IMPORTED_MODULE_3__["getHost"])(storage)(Object(_url_util__WEBPACK_IMPORTED_MODULE_2__["toUrlString"])(input));
  return requestHost != null && requestHost.requiresAuth;
}

function copyHeaders(origHeaders) {
  const headers = {};

  if (origHeaders) {
    if (typeof origHeaders.forEach === 'function') {
      origHeaders.forEach((value, key) => {
        headers[key] = value;
      });
    } else {
      for (const key in origHeaders) {
        headers[key] = origHeaders[key];
      }
    }
  }

  return headers;
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUrl", function() { return currentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUrlNoParams", function() { return currentUrlNoParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return navigateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "originOf", function() { return originOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUrlString", function() { return toUrlString; });
/* eslint-env browser */
function getLocation() {
  return typeof window !== 'undefined' ? window.location : {
    href: 'https://example.org/',
    pathname: '/',
    origin: 'example.org'
  };
}

const currentUrl = () => getLocation().href;
const currentUrlNoParams = () => getLocation().origin + getLocation().pathname;
const navigateTo = url => {
  getLocation().href = url;
};
const originOf = url => new URL(url).origin;
const toUrlString = url => {
  if (typeof url !== 'string') {
    url = 'url' in url ? url.url : url.toString();
  }

  return new URL(url, currentUrl()).toString();
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHost", function() { return getHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveHost", function() { return saveHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHostFromResponse", function() { return updateHostFromResponse; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _webid_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* globalRequest, Response, URL */



function getHost(storage) {
  return async url => {
    const {
      host
    } = new URL(url);
    const session = await Object(_session__WEBPACK_IMPORTED_MODULE_1__["getSession"])(storage);

    if (session && host === new URL(session.idp).host) {
      return {
        url: host,
        requiresAuth: true
      };
    }

    const {
      hosts
    } = await Object(_storage__WEBPACK_IMPORTED_MODULE_2__["getData"])(storage);
    return hosts && hosts[host];
  };
}
function saveHost(storage) {
  return async ({
    url,
    requiresAuth
  }) => {
    await Object(_storage__WEBPACK_IMPORTED_MODULE_2__["updateStorage"])(storage, data => _objectSpread(_objectSpread({}, data), {}, {
      hosts: _objectSpread(_objectSpread({}, data.hosts), {}, {
        [url]: {
          requiresAuth
        }
      })
    }));
  };
}
function updateHostFromResponse(storage) {
  return async resp => {
    if (_webid_oidc__WEBPACK_IMPORTED_MODULE_3__["requiresAuth"](resp)) {
      const {
        host
      } = new URL(resp.url);
      await saveHost(storage)({
        url: host,
        requiresAuth: true
      });
    }
  };
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return getSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSession", function() { return saveSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSession", function() { return clearSession; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


async function getSession(storage) {
  const data = await Object(_storage__WEBPACK_IMPORTED_MODULE_1__["getData"])(storage);
  return data.session || null;
}
function saveSession(storage) {
  return async session => {
    const data = await Object(_storage__WEBPACK_IMPORTED_MODULE_1__["updateStorage"])(storage, data => _objectSpread(_objectSpread({}, data), {}, {
      session
    }));
    return data.session;
  };
}
async function clearSession(storage) {
  await Object(_storage__WEBPACK_IMPORTED_MODULE_1__["updateStorage"])(storage, data => _objectSpread(_objectSpread({}, data), {}, {
    session: null
  }));
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMESPACE", function() { return NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStorage", function() { return defaultStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStorage", function() { return updateStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncStorage", function() { return asyncStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memStorage", function() { return memStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ipcStorage", function() { return ipcStorage; });
/* harmony import */ var _ipc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

const NAMESPACE = 'solid-auth-client';
const defaultStorage = () => {
  const hasLocalStorage = typeof window !== 'undefined' && 'localStorage' in window;
  return asyncStorage(hasLocalStorage ? window.localStorage : memStorage());
};
/**
 * Gets the deserialized stored data
 */

async function getData(store) {
  let serialized;
  let data;

  try {
    serialized = await store.getItem(NAMESPACE);
    data = JSON.parse(serialized || '{}');
  } catch (e) {
    console.warn('Could not deserialize data:', serialized);
    console.error(e);
    data = {};
  }

  return data;
}
/**
 * Updates a Storage object without mutating its intermediate representation.
 */

async function updateStorage(store, update) {
  const currentData = await getData(store);
  const newData = update(currentData);
  await store.setItem(NAMESPACE, JSON.stringify(newData));
  return newData;
}
/**
 * Takes a synchronous storage interface and wraps it with an async interface.
 */

function asyncStorage(storage) {
  return {
    getItem: key => {
      return Promise.resolve(storage.getItem(key));
    },
    setItem: (key, val) => {
      return Promise.resolve(storage.setItem(key, val));
    },
    removeItem: key => {
      return Promise.resolve(storage.removeItem(key));
    }
  };
}
const memStorage = () => {
  const store = {};
  return {
    getItem: key => {
      if (typeof store[key] === 'undefined') return null;
      return store[key];
    },
    setItem: (key, val) => {
      store[key] = val;
    },
    removeItem: key => {
      delete store[key];
    }
  };
};
function ipcStorage(client) {
  return {
    getItem: key => client.request('storage/getItem', key),
    setItem: (key, val) => client.request('storage/setItem', key, val),
    removeItem: key => client.request('storage/removeItem', key)
  };
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return Server; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


/*
  This module describes a simple IPC interface for communicating between browser windows.
  window.postMessage() is the transport interface, and a request/response interface
  is defined on top of it as follows:

  const request = {
    'solid-auth-client': {
      id: 1234,
      method: 'doSomethingPlease',
      args: [ 'one', 'two', 'three' ]
    }
  }

  const response = {
    'solid-auth-client': {
      id: 1234,
      ret: 'the_value'
    }
  }
*/
const NAMESPACE = 'solid-auth-client';
/**
 * Receives and handles remote procedure calls.
 */

class Server {
  constructor(clientWindow, clientOrigin, handle) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_clientWindow", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_clientOrigin", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_handler", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_messageListener", void 0);

    this._clientWindow = clientWindow;
    this._clientOrigin = clientOrigin;
    this._handler = handle;

    this._messageListener = event => this._handleMessage(event);
  }

  async _handleMessage({
    data,
    origin
  }) {
    // Ensure we can post to the origin
    if (origin !== this._clientOrigin) {
      console.warn("solid-auth-client is listening to ".concat(this._clientOrigin, " ") + "so ignored a message received from ".concat(origin, "."));
      return;
    } // Parse the request and send it to the handler


    const req = data && data[NAMESPACE];

    if (req && req.method) {
      const {
        id,
        method,
        args
      } = req;
      const ret = await this._handler(method, ...args);

      this._clientWindow.postMessage({
        [NAMESPACE]: {
          id,
          ret
        }
      }, this._clientOrigin);
    }
  }

  start() {
    window.addEventListener('message', this._messageListener);
  }

  stop() {
    window.removeEventListener('message', this._messageListener);
  }

}
/**
 * Makes remote procedure calls.
 */

class Client {
  constructor(serverWindow, serverOrigin) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_serverWindow", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_serverOrigin", void 0);

    this._serverWindow = serverWindow;
    this._serverOrigin = serverOrigin;
  }

  request(method, ...args) {
    // Send the request as a message to the server window
    const id = Math.random();

    this._serverWindow.postMessage({
      [NAMESPACE]: {
        id,
        method,
        args
      }
    }, this._serverOrigin); // Create a promise that resolves to the request's return value


    return new Promise((resolve, reject) => {
      // Listen for responses to the request
      window.addEventListener('message', responseListener); // Cancel if the response takes too long

      const timeout = setTimeout(() => {
        reject(new Error('Could not connect to main window.'));
        window.removeEventListener('message', responseListener);
      }, 2000); // Processes a possible response to the request

      function responseListener({
        data
      }) {
        const resp = data && data[NAMESPACE]; // eslint-disable-next-line no-prototype-builtins

        if (resp && resp.id === id && resp.hasOwnProperty('ret')) {
          resolve(resp.ret);
          clearTimeout(timeout);
          window.removeEventListener('message', responseListener);
        }
      }
    });
  }

}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSession", function() { return currentSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredRp", function() { return getRegisteredRp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiresAuth", function() { return requiresAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWithCredentials", function() { return fetchWithCredentials; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var auth_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var auth_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(auth_header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solid_oidc_rp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _solid_oidc_rp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solid_oidc_rp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solid_oidc_rp_src_PoPToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61);
/* harmony import */ var _solid_oidc_rp_src_PoPToken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_solid_oidc_rp_src_PoPToken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _url_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* global Response */





async function login(idp, options) {
  try {
    const rp = await getRegisteredRp(idp, options);
    await saveAppHashFragment(options.storage);
    return sendAuthRequest(rp, options);
  } catch (err) {
    console.warn('Error logging in with WebID-OIDC');
    console.error(err);
    return null;
  }
}
async function currentSession(storage = Object(_storage__WEBPACK_IMPORTED_MODULE_6__["defaultStorage"])()) {
  try {
    // Obtain the Relying Party
    const rp = await getStoredRp(storage);

    if (!rp) {
      return null;
    } // Obtain and clear the OIDC URL fragment


    const url = Object(_url_util__WEBPACK_IMPORTED_MODULE_5__["currentUrl"])();

    if (!/#(.*&)?access_token=/.test(url)) {
      return null;
    }

    window.location.hash = '';
    await restoreAppHashFragment(storage); // Obtain a session from the Relying Party

    const storeData = await Object(_storage__WEBPACK_IMPORTED_MODULE_6__["getData"])(storage);
    const session = await rp.validateResponse(url, storeData);

    if (!session) {
      return null;
    }

    return _objectSpread(_objectSpread({}, session), {}, {
      webId: session.idClaims.sub,
      idp: session.issuer
    });
  } catch (err) {
    console.warn('Error finding a WebID-OIDC session');
    console.error(err);
    return null;
  }
}
async function logout(storage, fetch) {
  const rp = await getStoredRp(storage);

  if (rp) {
    try {
      // First log out from the IDP
      await rp.logout(); // Then, log out from the RP

      try {
        await fetch('/.well-known/solid/logout', {
          credentials: 'include'
        });
      } catch (e) {
        // Ignore errors for when we are not on a Solid pod
        // But tell users it is harmless because they will see the GET failure in the console
        console.info("Couldn't find /.well-known/solid/logout, this is harmless.");
      }
    } catch (err) {
      console.warn('Error logging out of the WebID-OIDC session');
      console.error(err);
    }
  }
}
async function getRegisteredRp(idp, options) {
  // To reuse a possible previous RP,
  // it be for the same IDP and redirect URI
  let rp = await getStoredRp(options.storage);

  if (!rp || rp.provider.url !== idp || !rp.registration.redirect_uris.includes(options.callbackUri)) {
    // Register a new RP
    rp = await registerRp(idp, options);
    await storeRp(options.storage, idp, rp);
  }

  return rp;
}

async function getStoredRp(storage) {
  const data = await Object(_storage__WEBPACK_IMPORTED_MODULE_6__["getData"])(storage);
  const {
    rpConfig
  } = data;

  if (rpConfig) {
    rpConfig.store = storage;
    return _solid_oidc_rp__WEBPACK_IMPORTED_MODULE_3___default.a.from(rpConfig);
  } else {
    return null;
  }
}

async function storeRp(storage, idp, rp) {
  await Object(_storage__WEBPACK_IMPORTED_MODULE_6__["updateStorage"])(storage, data => _objectSpread(_objectSpread({}, data), {}, {
    rpConfig: rp
  }));
  return rp;
}

function registerRp(idp, opts) {
  const {
    storage,
    callbackUri
  } = opts;
  const responseType = 'id_token token';
  const clientNameI18n = {};
  Object.entries(opts).filter(([key, _]) => key.startsWith('clientName#')).forEach(([key, value]) => clientNameI18n[key.replace('clientName#', 'client_name#')] = value);
  const supplementaryOptions = {
    logo_uri: opts.logoUri,
    contacts: opts.contacts,
    client_name: opts.clientName
  };

  const registration = _objectSpread(_objectSpread({
    issuer: idp,
    grant_types: ['implicit'],
    redirect_uris: [callbackUri],
    response_types: [responseType],
    scope: 'openid profile'
  }, clientNameI18n), supplementaryOptions); // Note that overrides @solid/oidc-rp/RelyingParty defaults (i.e. not merged)


  const options = {
    defaults: {
      authenticate: {
        redirect_uri: callbackUri,
        response_type: responseType,
        display: 'page',
        scope: ['openid']
      }
    },
    store: storage
  };
  return _solid_oidc_rp__WEBPACK_IMPORTED_MODULE_3___default.a.register(idp, registration, options);
}

async function sendAuthRequest(rp, {
  callbackUri,
  storage
}) {
  const data = await Object(_storage__WEBPACK_IMPORTED_MODULE_6__["getData"])(storage);
  const url = await rp.createRequest({
    redirect_uri: callbackUri
  }, data);
  await Object(_storage__WEBPACK_IMPORTED_MODULE_6__["updateStorage"])(storage, () => data);
  return Object(_url_util__WEBPACK_IMPORTED_MODULE_5__["navigateTo"])(url);
}

async function saveAppHashFragment(store) {
  await Object(_storage__WEBPACK_IMPORTED_MODULE_6__["updateStorage"])(store, data => _objectSpread(_objectSpread({}, data), {}, {
    appHashFragment: window.location.hash
  }));
}

async function restoreAppHashFragment(store) {
  await Object(_storage__WEBPACK_IMPORTED_MODULE_6__["updateStorage"])(store, (_ref) => {
    let {
      appHashFragment = ''
    } = _ref,
        data = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["appHashFragment"]);

    window.location.hash = appHashFragment;
    return data;
  });
}
/**
 * Answers whether a HTTP response requires WebID-OIDC authentication.
 */


function requiresAuth(resp) {
  if (resp.status !== 401) {
    return false;
  }

  const wwwAuthHeader = resp.headers.get('www-authenticate');

  if (!wwwAuthHeader) {
    return false;
  }

  const auth = auth_header__WEBPACK_IMPORTED_MODULE_2__["parse"](wwwAuthHeader);
  return auth.scheme === 'Bearer' && auth.params && auth.params.scope === 'openid webid';
}
/**
 * Fetches a resource, providing the WebID-OIDC ID Token as authentication.
 * Assumes that the resource has requested those tokens in a previous response.
 */

async function fetchWithCredentials(session, fetch, input, options) {
  // Add Authorization header (assuming a modifiable headers object)
  const headers = (options ? options.headers : input.headers) || {};
  const popToken = await _solid_oidc_rp_src_PoPToken__WEBPACK_IMPORTED_MODULE_4___default.a.issueFor(Object(_url_util__WEBPACK_IMPORTED_MODULE_5__["toUrlString"])(input), session);
  headers.authorization = "Bearer ".concat(popToken);
  return fetch(input, _objectSpread(_objectSpread({}, options), {}, {
    credentials: 'include',
    headers
  }));
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(13);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "format", {
  enumerable: true,
  get: function get() {
    return _format.default;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function get() {
    return _parse.default;
  }
});

var _format = _interopRequireDefault(__webpack_require__(15));

var _parse = _interopRequireDefault(__webpack_require__(17));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = __webpack_require__(16);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var xxx = function xxx(key) {
  return function (value) {
    return `${key}=${value && !(0, _util.isToken)(value) ? (0, _util.quote)(value) : value}`;
  };
};

var build = function build(params) {
  return params.reduce(function (prev, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        values = _ref2[1];

    var transform = xxx(key);

    if (!(0, _util.isToken)(key)) {
      throw new TypeError();
    }

    if (Array.isArray(values)) {
      return _toConsumableArray(prev).concat(_toConsumableArray(values.map(transform)));
    }

    return _toConsumableArray(prev).concat([transform(values)]);
  }, []);
};

var challenge = function challenge(params, options) {
  if (Array.isArray(params)) {
    return build(params);
  } else if (typeof params === 'object') {
    var entries = params;
    return challenge(Object.keys(params).map(function (key) {
      return [key, entries[key]];
    }), options);
  }

  throw new TypeError();
};

var _default = function _default(scheme, token, params) {
  var obj = typeof scheme === 'string' ? {
    scheme,
    token,
    params
  } : scheme;

  if (typeof obj !== 'object') {
    throw new TypeError();
  } else if (!(0, _util.isScheme)(obj.scheme)) {
    throw new TypeError('Invalid scheme.');
  }

  return [obj.scheme].concat(_toConsumableArray(typeof obj.token !== 'undefined' ? [obj.token] : []), _toConsumableArray(typeof obj.params !== 'undefined' ? challenge(obj.params) : [])).join(' ');
};

exports.default = _default;
//# sourceMappingURL=format.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unquote = exports.quote = exports.isScheme = exports.isToken = void 0;
var token = /^[^\u0000-\u001F\u007F()<>@,;:\\"/?={}\[\]\u0020\u0009]+$/;

var isToken = function isToken(str) {
  return typeof str === 'string' && token.test(str);
};

exports.isToken = isToken;
var isScheme = isToken;
exports.isScheme = isScheme;

var quote = function quote(str) {
  return `"${str.replace(/"/g, '\\"')}"`;
};

exports.quote = quote;

var unquote = function unquote(str) {
  return str.substr(1, str.length - 2).replace(/\\"/g, '"');
};

exports.unquote = unquote;
//# sourceMappingURL=util.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = __webpack_require__(16);

// lol dis
var body = /((?:[a-zA-Z0-9._~+\/-]+=*(?:\s+|$))|[^\u0000-\u001F\u007F()<>@,;:\\"/?={}\[\]\u0020\u0009]+)(?:=([^\\"=\s,]+|"(?:[^"\\]|\\.)*"))?/g; // eslint-disable-line

var normalize = function normalize(prev, _cur) {
  // Fixup quoted strings and tokens with spaces around them
  var cur = _cur.charAt(0) === '"' ? (0, _util.unquote)(_cur) : _cur.trim(); // Marshal

  if (Array.isArray(prev)) {
    return prev.concat(cur);
  } else if (typeof prev === 'string') {
    return [prev, cur];
  }

  return cur;
};

var parseProperties = function parseProperties(scheme, string) {
  var token = null;
  var params = {}; // eslint-disable-next-line no-constant-condition

  while (true) {
    var res = body.exec(string);

    if (res === null) {
      break;
    }

    if (res[2]) {
      params[res[1]] = normalize(params[res[1]], res[2]);
    } else {
      token = normalize(token, res[1]);
    }
  }

  return {
    scheme,
    params,
    token
  };
};

var _default = function _default(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Header value must be a string.');
  }

  var start = str.indexOf(' ');
  var scheme = str.substr(0, start);

  if (!(0, _util.isScheme)(scheme)) {
    throw new TypeError(`Invalid scheme ${scheme}`);
  }

  return parseProperties(scheme, str.substr(start));
};

exports.default = _default;
//# sourceMappingURL=parse.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(19);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Dependencies
 */
const assert = __webpack_require__(21);

const fetch = __webpack_require__(5);

const {
  URL
} = __webpack_require__(27);

const Headers = fetch.Headers ? fetch.Headers : global.Headers;

const {
  JWKSet
} = __webpack_require__(28);

const AuthenticationRequest = __webpack_require__(55);

const AuthenticationResponse = __webpack_require__(57);

const onHttpError = __webpack_require__(60);

const FormUrlEncoded = __webpack_require__(56);
/**
 * RelyingParty
 *
 * @class
 * Client interface for OpenID Connect Relying Party.
 *
 * @example
 *  let client = RelyingParty({
 *    provider: {
 *      name: 'Anvil Research, Inc.',
 *      url: 'https://forge.anvil.io'
 *      // configuration
 *      // jwks
 *    },
 *    defaults: {
 *      popToken: false,
 *      authenticate: {
 *        response_type: 'code',
 *        display: 'popup',
 *        scope: 'openid profile email'
 *      },
 *      register: {
 *        client_name: 'Example',
 *        client_uri: 'https://example.com',
 *        logo_uri: 'https://example.com/assets/logo.png',
 *        redirect_uris: ['https://app.example.com/callback'],
 *        response_types: ['code', 'code id_token token'],
 *        grant_types: ['authorization_code'],
 *        default_max_age: 7200,
 *        post_logout_redirect_uris: ['https://app.example.com']
 *      },
 *    },
 *    registration: {
 *      // if you have it saved somewhere
 *    },
 *    store: localStorage || req.session
 *  })
 *
 *  client.discover() => Promise
 *  client.jwks() => Promise
 *  client.authenticate()
 *  client.authenticateUri()
 *  client.validateResponse(uri) => Promise
 *  client.userinfo() => Promise
 *  client.logout()
 */


class RelyingParty {
  constructor({
    provider = {},
    defaults,
    registration = {},
    store = {}
  } = {}) {
    this.provider = provider;
    this.defaults = defaults || {
      popToken: false,
      authenticate: {
        response_type: 'id_token token',
        display: 'page',
        scope: ['openid']
      }
    };
    this.registration = registration;
    this.store = store;
  }
  /**
   * from
   *
   * @description
   * Create a RelyingParty instance from a previously registered client.
   *
   * @param {Object} data
   * @returns {Promise<RelyingParty>}
   */


  static async from(data) {
    const rp = new RelyingParty(data);
    const validation = rp.validate(); // schema validation

    if (!validation.valid) {
      throw validation.error;
    }

    const jwks = rp.provider.jwks; // request the JWK Set if missing

    if (!jwks) {
      return rp.jwks().then(() => rp);
    } // otherwise import the JWK Set to webcrypto


    return JWKSet.importKeys(jwks).then(jwks => {
      rp.provider.jwks = jwks;
      return rp;
    });
  }
  /**
   * register
   *
   * @param issuer {string} Provider URL
   * @param registration {Object} Client dynamic registration options
   * @param options {Object}
   * @param options.defaults
   * @param [options.store] {Session|Storage}
   * @param [oobRegistration] {Object} Object providing getRegistration(key) function for out-of-band registrations
   * @param [idpId] {string} A tag identifying the provider used for looking up out-of-band registration data.
   * @returns {Promise<RelyingParty>} RelyingParty instance, registered.
   */


  static register(issuer, registration, options, idpId, oobRegistration) {
    const rp = new RelyingParty({
      provider: {
        url: issuer
      },
      defaults: Object.assign({}, options.defaults),
      store: options.store
    });
    return Promise.resolve().then(() => rp.discover()).then(() => rp.jwks()).then(() => {
      assert(rp.provider.configuration, 'OpenID Configuration is not initialized.');
      return rp.provider.configuration.registration_endpoint ? rp.register(registration) : rp.getRegistration(registration, idpId, oobRegistration);
    }).then(() => rp);
  }

  validate() {
    if (!this.provider || !this.provider.url) {
      return {
        valid: false,
        error: new Error('Provider url is required.')
      };
    }

    return {
      valid: true
    };
  }
  /**
   * Discover
   *
   * @description Fetches the issuer's OpenID Configuration.
   * @returns {Promise<Object>} Resolves with the provider configuration response
   */


  discover() {
    try {
      let issuer = this.provider.url;
      assert(issuer, 'RelyingParty provider must define "url"');
      let url = new URL(issuer);
      url.pathname = '.well-known/openid-configuration';
      return fetch(url.toString()).then(onHttpError('Error fetching openid configuration')).then(response => {
        return response.json().then(json => this.provider.configuration = json);
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }
  /**
   * Register
   *
   * @description Register's a client with provider as a Relying Party
   *
   * @param options {Object}
   * @returns {Promise<Object>} Resolves with the registration response object
   */


  register(options) {
    try {
      let configuration = this.provider.configuration;
      assert(configuration, 'OpenID Configuration is not initialized.');
      assert(configuration.registration_endpoint, 'OpenID Configuration is missing registration_endpoint.');
      let uri = configuration.registration_endpoint;
      let method = 'post';
      let headers = new Headers({
        'Content-Type': 'application/json'
      });
      let params = this.defaults.register;
      let body = JSON.stringify(Object.assign({}, params, options));
      return fetch(uri, {
        method,
        headers,
        body
      }).then(onHttpError('Error registering client')).then(response => {
        return response.json().then(json => this.registration = json);
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  serialize() {
    return JSON.stringify(this);
  }
  /**
   * @description
   * Retrieves an existing Relying Party registration for a provider which does
   * not support dynamic registration and which requires pre-registration by
   * some 'out of band' method.
   *
   * @param options {Object}
   * @param idp {string} Key identifying which registration data should be retrieved.
   * @returns {Promise<Object>} Resolves with the registration response object.
   */


  getRegistration(options, idp, oobRegistration) {
    return Promise.resolve().then(() => {
      return this.registration = oobRegistration.getRegistration(idp);
    }).catch(error => {
      throw error;
    });
  }
  /**
   * jwks
   *
   * @description Promises the issuer's JWK Set.
   * @returns {Promise}
   */


  jwks() {
    try {
      let configuration = this.provider.configuration;
      assert(configuration, 'OpenID Configuration is not initialized.');
      assert(configuration.jwks_uri, 'OpenID Configuration is missing jwks_uri.');
      let uri = configuration.jwks_uri;
      return fetch(uri).then(onHttpError('Error resolving provider keys')).then(response => {
        return response.json().then(json => JWKSet.importKeys(json)).then(jwks => this.provider.jwks = jwks);
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }
  /**
   * createRequest
   *
   * @param options {Object} Authn request options hashmap
   * @param options.redirect_uri {string}
   * @param options.response_type {string} e.g. 'code' or 'id_token token'
   * @param session {Session|Storage} req.session or localStorage
   * @returns {Promise<string>} Authn request URL
   */


  createRequest(options, session) {
    return AuthenticationRequest.create(this, options, session || this.store);
  }
  /**
   * Validate Response
   *
   * @param response {string} req.query or req.body.text
   * @param session {Session|Storage} req.session or localStorage or similar
   *
   * @returns {Promise<Session>}
   */


  validateResponse(response, session = this.store) {
    let options;

    if (response.match(/^http(s?):\/\//)) {
      options = {
        rp: this,
        redirect: response,
        session
      };
    } else {
      options = {
        rp: this,
        body: response,
        session
      };
    }

    const authResponse = new AuthenticationResponse(options);
    return AuthenticationResponse.validateResponse(authResponse);
  }
  /**
   * userinfo
   *
   * @description
   * Promises the authenticated user's claims.
   * access_token can be supplied directly. If not, it is retrieved from storage, if available.
   * Depending on when userinfo is called, access_token may not yet have been saved to storage.
   *
   * @param accessToken {string=} Optional access token from current user session for use against the User Info endpoint
   * @returns {Promise}
   */


  userinfo(accessToken) {
    try {
      let configuration = this.provider.configuration;
      assert(configuration, 'OpenID Configuration is not initialized.');
      assert(configuration.userinfo_endpoint, 'OpenID Configuration is missing userinfo_endpoint.');
      accessToken = accessToken || this.store.access_token;
      assert(accessToken, 'Missing access token.');
      let uri = configuration.userinfo_endpoint;
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      });
      return fetch(uri, {
        headers
      }).then(onHttpError('Error fetching userinfo')).then(response => response.json());
    } catch (error) {
      return Promise.reject(error);
    }
  }
  /**
   * logoutRequest
   *
   * Composes and returns the logout request URI, based on the OP's
   * `end_session_endpoint`, with appropriate parameters.
   *
   * Note: Calling client code has the responsibility to clear the local
   * session state (for example, by calling `rp.clearSession()`). In addition,
   * some IdPs (such as Google) may not provide an `end_session_endpoint`,
   * in which case, this method will return null.
   *
   * @see https://openid.net/specs/openid-connect-session-1_0.html#RPLogout
   *
   * @throws {Error} If provider config is not initialized
   *
   * @throws {Error} If `post_logout_redirect_uri` was provided without a
   *   corresponding `id_token_hint`
   *
   * @param [options={}] {object}
   *
   * @param [options.id_token_hint] {string} RECOMMENDED.
   *   Previously issued ID Token passed to the logout endpoint as
   *   a hint about the End-User's current authenticated session with the
   *   Client. This is used as an indication of the identity of the End-User
   *   that the RP is requesting be logged out by the OP. The OP *need not* be
   *   listed as an audience of the ID Token when it is used as an
   *   `id_token_hint` value.
   *
   * @param [options.post_logout_redirect_uri] {string} OPTIONAL. URL to which
   *   the RP is requesting that the End-User's User Agent be redirected after
   *   a logout has been performed. The value MUST have been previously
   *   registered with the OP, either using the `post_logout_redirect_uris`
   *   Registration parameter or via another mechanism. If supplied, the OP
   *   SHOULD honor this request following the logout.
   *
   *   Note: The requirement to validate the uri for previous registration means
   *   that, in practice, the `id_token_hint` is REQUIRED if
   *   `post_logout_redirect_uri` is used. Otherwise, the OP has no way to get
   *   the `client_id` to load the saved client registration, to validate the
   *   uri. The only way it can get it is by decoding the `id_token_hint`.
   *
   * @param [options.state] {string} OPTIONAL. Opaque value used by the RP to
   *   maintain state between the logout request and the callback to the
   *   endpoint specified by the `post_logout_redirect_uri` query parameter. If
   *   included in the logout request, the OP passes this value back to the RP
   *   using the `state` query parameter when redirecting the User Agent back to
   *   the RP.
   *
   * TODO: In the future, consider adding `response_mode` param, for the OP to
   *   determine how to return the `state` back the RP.
   *   @see http://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#ResponseModes
   *
   * TODO: Handle special cases for popular providers (Google, MSFT)
   *
   * @returns {string|null} Logout uri (or null if no end_session_endpoint was
   *   provided in the IdP config)
   */


  logoutRequest(options = {}) {
    const {
      id_token_hint,
      post_logout_redirect_uri,
      state
    } = options;
    let configuration;
    assert(this.provider, 'OpenID Configuration is not initialized');
    configuration = this.provider.configuration;
    assert(configuration, 'OpenID Configuration is not initialized');

    if (!configuration.end_session_endpoint) {
      console.log(`OpenId Configuration for ` + `${configuration.issuer} is missing end_session_endpoint`);
      return null;
    }

    if (post_logout_redirect_uri && !id_token_hint) {
      throw new Error('id_token_hint is required when using post_logout_redirect_uri');
    }

    const params = {};

    if (id_token_hint) {
      params.id_token_hint = id_token_hint;
    }

    if (post_logout_redirect_uri) {
      params.post_logout_redirect_uri = post_logout_redirect_uri;
    }

    if (state) {
      params.state = state;
    }

    const url = new URL(configuration.end_session_endpoint);
    url.search = FormUrlEncoded.encode(params);
    return url.href;
  }
  /**
   * Logout
   *
   * @deprecated
   *
   * TODO: Add deprecation warnings, then remove. Client code should
   *   use `logoutRequest()` instead
   *
   * @returns {Promise}
   */


  logout() {
    let configuration;

    try {
      assert(this.provider, 'OpenID Configuration is not initialized.');
      configuration = this.provider.configuration;
      assert(configuration, 'OpenID Configuration is not initialized.');
    } catch (error) {
      return Promise.reject(error);
    }

    if (!configuration.end_session_endpoint) {
      this.clearSession();
      return Promise.resolve(undefined);
    }

    let uri = configuration.end_session_endpoint;
    let method = 'get';
    return fetch(uri, {
      method,
      credentials: 'include'
    }).then(onHttpError('Error logging out')).then(() => this.clearSession()); // TODO: Validate `frontchannel_logout_uri` if necessary

    /**
     * frontchannel_logout_uri - OPTIONAL. RP URL that will cause the RP to log
     * itself out when rendered in an iframe by the OP.
     *
     * An `iss` (issuer) query parameter and a `sid`
     * (session ID) query parameter MAY be included by the OP to enable the RP
     * to validate the request and to determine which of the potentially
     * multiple sessions is to be logged out. If a sid (session ID) query
     * parameter is included, an iss (issuer) query parameter MUST also be
     * included.
     * @see https://openid.net/specs/openid-connect-frontchannel-1_0.html#RPLogout
     */
  }

  clearSession() {
    let session = this.store;

    if (!session) {
      return;
    }

    delete session[SESSION_PRIVATE_KEY];
  }
  /**
   * @param uri {string} Target Resource Server URI
   * @param idToken {IDToken} ID Token to be embedded in the PoP token
   *
   * @returns {Promise<PoPToken>}
   */


  popTokenFor(uri, idToken) {
    return PoPToken.issueFor(uri, idToken);
  }

}

const SESSION_PRIVATE_KEY = 'oidc.session.privateKey';
RelyingParty.SESSION_PRIVATE_KEY = SESSION_PRIVATE_KEY;
module.exports = RelyingParty;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(22);

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(23);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
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

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(25);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(26);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

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


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__27__;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @module JSON Object Signing and Encryption (JOSE)
 */
const crypto = __webpack_require__(29)
const JWA = __webpack_require__(32)
const JWK = __webpack_require__(50)
const JWKSet = __webpack_require__(51)
const JWT = __webpack_require__(52)
const JWS = __webpack_require__(53)

/**
 * Export
 */
module.exports = {
  crypto,
  JWA,
  JWK,
  JWKSet,
  JWT,
  JWS
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

const imported = __webpack_require__(30)

module.exports = (imported.default ? imported.default : imported)


/***/ }),
/* 30 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webcrypto_shim_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);

/* harmony default export */ __webpack_exports__["default"] = (window.crypto);


/***/ }),
/* 31 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @file Web Cryptography API shim
 * @author Artem S Vybornov <vybornov@gmail.com>
 * @license MIT
 */
(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            return factory(global);
        });
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports
        module.exports = factory(global);
    } else {
        factory(global);
    }
}(typeof self !== 'undefined' ? self : undefined, function (global) {
    'use strict';

    if ( typeof Promise !== 'function' )
        throw "Promise support required";

    var _crypto = global.crypto || global.msCrypto;
    if ( !_crypto ) return;

    var _subtle = _crypto.subtle || _crypto.webkitSubtle;
    if ( !_subtle ) return;

    var _Crypto     = global.Crypto || _crypto.constructor || Object,
        _SubtleCrypto = global.SubtleCrypto || _subtle.constructor || Object,
        _CryptoKey  = global.CryptoKey || global.Key || Object;

    var isEdge = global.navigator.userAgent.indexOf('Edge/') > -1;
    var isIE    = !!global.msCrypto && !isEdge;
    var isWebkit = !_crypto.subtle && !!_crypto.webkitSubtle;
    if ( !isIE && !isWebkit ) return;

    function s2a ( s ) {
        return btoa(s).replace(/\=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
    }

    function a2s ( s ) {
        s += '===', s = s.slice( 0, -s.length % 4 );
        return atob( s.replace(/-/g, '+').replace(/_/g, '/') );
    }

    function s2b ( s ) {
        var b = new Uint8Array(s.length);
        for ( var i = 0; i < s.length; i++ ) b[i] = s.charCodeAt(i);
        return b;
    }

    function b2s ( b ) {
        if ( b instanceof ArrayBuffer ) b = new Uint8Array(b);
        return String.fromCharCode.apply( String, b );
    }

    function alg ( a ) {
        var r = { 'name': (a.name || a || '').toUpperCase().replace('V','v') };
        switch ( r.name ) {
            case 'SHA-1':
            case 'SHA-256':
            case 'SHA-384':
            case 'SHA-512':
                break;
            case 'AES-CBC':
            case 'AES-GCM':
            case 'AES-KW':
                if ( a.length ) r['length'] = a.length;
                break;
            case 'HMAC':
                if ( a.hash ) r['hash'] = alg(a.hash);
                if ( a.length ) r['length'] = a.length;
                break;
            case 'RSAES-PKCS1-v1_5':
                if ( a.publicExponent ) r['publicExponent'] = new Uint8Array(a.publicExponent);
                if ( a.modulusLength ) r['modulusLength'] = a.modulusLength;
                break;
            case 'RSASSA-PKCS1-v1_5':
            case 'RSA-OAEP':
                if ( a.hash ) r['hash'] = alg(a.hash);
                if ( a.publicExponent ) r['publicExponent'] = new Uint8Array(a.publicExponent);
                if ( a.modulusLength ) r['modulusLength'] = a.modulusLength;
                break;
            default:
                throw new SyntaxError("Bad algorithm name");
        }
        return r;
    };

    function jwkAlg ( a ) {
        return {
            'HMAC': {
                'SHA-1': 'HS1',
                'SHA-256': 'HS256',
                'SHA-384': 'HS384',
                'SHA-512': 'HS512',
            },
            'RSASSA-PKCS1-v1_5': {
                'SHA-1': 'RS1',
                'SHA-256': 'RS256',
                'SHA-384': 'RS384',
                'SHA-512': 'RS512',
            },
            'RSAES-PKCS1-v1_5': {
                '': 'RSA1_5',
            },
            'RSA-OAEP': {
                'SHA-1': 'RSA-OAEP',
                'SHA-256': 'RSA-OAEP-256',
            },
            'AES-KW': {
                '128': 'A128KW',
                '192': 'A192KW',
                '256': 'A256KW',
            },
            'AES-GCM': {
                '128': 'A128GCM',
                '192': 'A192GCM',
                '256': 'A256GCM',
            },
            'AES-CBC': {
                '128': 'A128CBC',
                '192': 'A192CBC',
                '256': 'A256CBC',
            },
        }[a.name][ ( a.hash || {} ).name || a.length || '' ];
    }

    function b2jwk ( k ) {
        if ( k instanceof ArrayBuffer || k instanceof Uint8Array ) k = JSON.parse( decodeURIComponent( escape( b2s(k) ) ) );
        var jwk = { 'kty': k.kty, 'alg': k.alg, 'ext': k.ext || k.extractable };
        switch ( jwk.kty ) {
            case 'oct':
                jwk.k = k.k;
            case 'RSA':
                [ 'n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi', 'oth' ].forEach( function ( x ) { if ( x in k ) jwk[x] = k[x] } );
                break;
            default:
                throw new TypeError("Unsupported key type");
        }
        return jwk;
    }

    function jwk2b ( k ) {
        var jwk = b2jwk(k);
        if ( isIE ) jwk['extractable'] = jwk.ext, delete jwk.ext;
        return s2b( unescape( encodeURIComponent( JSON.stringify(jwk) ) ) ).buffer;
    }

    function pkcs2jwk ( k ) {
        var info = b2der(k), prv = false;
        if ( info.length > 2 ) prv = true, info.shift(); // remove version from PKCS#8 PrivateKeyInfo structure
        var jwk = { 'ext': true };
        switch ( info[0][0] ) {
            case '1.2.840.113549.1.1.1':
                var rsaComp = [ 'n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi' ],
                    rsaKey  = b2der( info[1] );
                if ( prv ) rsaKey.shift(); // remove version from PKCS#1 RSAPrivateKey structure
                for ( var i = 0; i < rsaKey.length; i++ ) {
                    if ( !rsaKey[i][0] ) rsaKey[i] = rsaKey[i].subarray(1);
                    jwk[ rsaComp[i] ] = s2a( b2s( rsaKey[i] ) );
                }
                jwk['kty'] = 'RSA';
                break;
            default:
                throw new TypeError("Unsupported key type");
        }
        return jwk;
    }

    function jwk2pkcs ( k ) {
        var key, info = [ [ '', null ] ], prv = false;
        switch ( k.kty ) {
            case 'RSA':
                var rsaComp = [ 'n', 'e', 'd', 'p', 'q', 'dp', 'dq', 'qi' ],
                    rsaKey = [];
                for ( var i = 0; i < rsaComp.length; i++ ) {
                    if ( !( rsaComp[i] in k ) ) break;
                    var b = rsaKey[i] = s2b( a2s( k[ rsaComp[i] ] ) );
                    if ( b[0] & 0x80 ) rsaKey[i] = new Uint8Array(b.length + 1), rsaKey[i].set( b, 1 );
                }
                if ( rsaKey.length > 2 ) prv = true, rsaKey.unshift( new Uint8Array([0]) ); // add version to PKCS#1 RSAPrivateKey structure
                info[0][0] = '1.2.840.113549.1.1.1';
                key = rsaKey;
                break;
            default:
                throw new TypeError("Unsupported key type");
        }
        info.push( new Uint8Array( der2b(key) ).buffer );
        if ( !prv ) info[1] = { 'tag': 0x03, 'value': info[1] };
        else info.unshift( new Uint8Array([0]) ); // add version to PKCS#8 PrivateKeyInfo structure
        return new Uint8Array( der2b(info) ).buffer;
    }

    var oid2str = { 'KoZIhvcNAQEB': '1.2.840.113549.1.1.1' },
        str2oid = { '1.2.840.113549.1.1.1': 'KoZIhvcNAQEB' };

    function b2der ( buf, ctx ) {
        if ( buf instanceof ArrayBuffer ) buf = new Uint8Array(buf);
        if ( !ctx ) ctx = { pos: 0, end: buf.length };

        if ( ctx.end - ctx.pos < 2 || ctx.end > buf.length ) throw new RangeError("Malformed DER");

        var tag = buf[ctx.pos++],
            len = buf[ctx.pos++];

        if ( len >= 0x80 ) {
            len &= 0x7f;
            if ( ctx.end - ctx.pos < len ) throw new RangeError("Malformed DER");
            for ( var xlen = 0; len--; ) xlen <<= 8, xlen |= buf[ctx.pos++];
            len = xlen;
        }

        if ( ctx.end - ctx.pos < len ) throw new RangeError("Malformed DER");

        var rv;

        switch ( tag ) {
            case 0x02: // Universal Primitive INTEGER
                rv = buf.subarray( ctx.pos, ctx.pos += len );
                break;
            case 0x03: // Universal Primitive BIT STRING
                if ( buf[ctx.pos++] ) throw new Error( "Unsupported bit string" );
                len--;
            case 0x04: // Universal Primitive OCTET STRING
                rv = new Uint8Array( buf.subarray( ctx.pos, ctx.pos += len ) ).buffer;
                break;
            case 0x05: // Universal Primitive NULL
                rv = null;
                break;
            case 0x06: // Universal Primitive OBJECT IDENTIFIER
                var oid = btoa( b2s( buf.subarray( ctx.pos, ctx.pos += len ) ) );
                if ( !( oid in oid2str ) ) throw new Error( "Unsupported OBJECT ID " + oid );
                rv = oid2str[oid];
                break;
            case 0x30: // Universal Constructed SEQUENCE
                rv = [];
                for ( var end = ctx.pos + len; ctx.pos < end; ) rv.push( b2der( buf, ctx ) );
                break;
            default:
                throw new Error( "Unsupported DER tag 0x" + tag.toString(16) );
        }

        return rv;
    }

    function der2b ( val, buf ) {
        if ( !buf ) buf = [];

        var tag = 0, len = 0,
            pos = buf.length + 2;

        buf.push( 0, 0 ); // placeholder

        if ( val instanceof Uint8Array ) {  // Universal Primitive INTEGER
            tag = 0x02, len = val.length;
            for ( var i = 0; i < len; i++ ) buf.push( val[i] );
        }
        else if ( val instanceof ArrayBuffer ) { // Universal Primitive OCTET STRING
            tag = 0x04, len = val.byteLength, val = new Uint8Array(val);
            for ( var i = 0; i < len; i++ ) buf.push( val[i] );
        }
        else if ( val === null ) { // Universal Primitive NULL
            tag = 0x05, len = 0;
        }
        else if ( typeof val === 'string' && val in str2oid ) { // Universal Primitive OBJECT IDENTIFIER
            var oid = s2b( atob( str2oid[val] ) );
            tag = 0x06, len = oid.length;
            for ( var i = 0; i < len; i++ ) buf.push( oid[i] );
        }
        else if ( val instanceof Array ) { // Universal Constructed SEQUENCE
            for ( var i = 0; i < val.length; i++ ) der2b( val[i], buf );
            tag = 0x30, len = buf.length - pos;
        }
        else if ( typeof val === 'object' && val.tag === 0x03 && val.value instanceof ArrayBuffer ) { // Tag hint
            val = new Uint8Array(val.value), tag = 0x03, len = val.byteLength;
            buf.push(0); for ( var i = 0; i < len; i++ ) buf.push( val[i] );
            len++;
        }
        else {
            throw new Error( "Unsupported DER value " + val );
        }

        if ( len >= 0x80 ) {
            var xlen = len, len = 4;
            buf.splice( pos, 0, (xlen >> 24) & 0xff, (xlen >> 16) & 0xff, (xlen >> 8) & 0xff, xlen & 0xff );
            while ( len > 1 && !(xlen >> 24) ) xlen <<= 8, len--;
            if ( len < 4 ) buf.splice( pos, 4 - len );
            len |= 0x80;
        }

        buf.splice( pos - 2, 2, tag, len );

        return buf;
    }

    function CryptoKey ( key, alg, ext, use ) {
        Object.defineProperties( this, {
            _key: {
                value: key
            },
            type: {
                value: key.type,
                enumerable: true,
            },
            extractable: {
                value: (ext === undefined) ? key.extractable : ext,
                enumerable: true,
            },
            algorithm: {
                value: (alg === undefined) ? key.algorithm : alg,
                enumerable: true,
            },
            usages: {
                value: (use === undefined) ? key.usages : use,
                enumerable: true,
            },
        });
    }

    function isPubKeyUse ( u ) {
        return u === 'verify' || u === 'encrypt' || u === 'wrapKey';
    }

    function isPrvKeyUse ( u ) {
        return u === 'sign' || u === 'decrypt' || u === 'unwrapKey';
    }

    [ 'generateKey', 'importKey', 'unwrapKey' ]
        .forEach( function ( m ) {
            var _fn = _subtle[m];

            _subtle[m] = function ( a, b, c ) {
                var args = [].slice.call(arguments),
                    ka, kx, ku;

                switch ( m ) {
                    case 'generateKey':
                        ka = alg(a), kx = b, ku = c;
                        break;
                    case 'importKey':
                        ka = alg(c), kx = args[3], ku = args[4];
                        if ( a === 'jwk' ) {
                            b = b2jwk(b);
                            if ( !b.alg ) b.alg = jwkAlg(ka);
                            if ( !b.key_ops ) b.key_ops = ( b.kty !== 'oct' ) ? ( 'd' in b ) ? ku.filter(isPrvKeyUse) : ku.filter(isPubKeyUse) : ku.slice();
                            args[1] = jwk2b(b);
                        }
                        break;
                    case 'unwrapKey':
                        ka = args[4], kx = args[5], ku = args[6];
                        args[2] = c._key;
                        break;
                }

                if ( m === 'generateKey' && ka.name === 'HMAC' && ka.hash ) {
                    ka.length = ka.length || { 'SHA-1': 512, 'SHA-256': 512, 'SHA-384': 1024, 'SHA-512': 1024 }[ka.hash.name];
                    return _subtle.importKey( 'raw', _crypto.getRandomValues( new Uint8Array( (ka.length+7)>>3 ) ), ka, kx, ku );
                }

                if ( isWebkit && m === 'generateKey' && ka.name === 'RSASSA-PKCS1-v1_5' && ( !ka.modulusLength || ka.modulusLength >= 2048 ) ) {
                    a = alg(a), a.name = 'RSAES-PKCS1-v1_5', delete a.hash;
                    return _subtle.generateKey( a, true, [ 'encrypt', 'decrypt' ] )
                        .then( function ( k ) {
                            return Promise.all([
                                _subtle.exportKey( 'jwk', k.publicKey ),
                                _subtle.exportKey( 'jwk', k.privateKey ),
                            ]);
                        })
                        .then( function ( keys ) {
                            keys[0].alg = keys[1].alg = jwkAlg(ka);
                            keys[0].key_ops = ku.filter(isPubKeyUse), keys[1].key_ops = ku.filter(isPrvKeyUse);
                            return Promise.all([
                                _subtle.importKey( 'jwk', keys[0], ka, true, keys[0].key_ops ),
                                _subtle.importKey( 'jwk', keys[1], ka, kx, keys[1].key_ops ),
                            ]);
                        })
                        .then( function ( keys ) {
                            return {
                                publicKey: keys[0],
                                privateKey: keys[1],
                            };
                        });
                }

                if ( ( isWebkit || ( isIE && ( ka.hash || {} ).name === 'SHA-1' ) )
                        && m === 'importKey' && a === 'jwk' && ka.name === 'HMAC' && b.kty === 'oct' ) {
                    return _subtle.importKey( 'raw', s2b( a2s(b.k) ), c, args[3], args[4] );
                }

                if ( isWebkit && m === 'importKey' && ( a === 'spki' || a === 'pkcs8' ) ) {
                    return _subtle.importKey( 'jwk', pkcs2jwk(b), c, args[3], args[4] );
                }

                if ( isIE && m === 'unwrapKey' ) {
                    return _subtle.decrypt( args[3], c, b )
                        .then( function ( k ) {
                            return _subtle.importKey( a, k, args[4], args[5], args[6] );
                        });
                }

                var op;
                try {
                    op = _fn.apply( _subtle, args );
                }
                catch ( e ) {
                    return Promise.reject(e);
                }

                if ( isIE ) {
                    op = new Promise( function ( res, rej ) {
                        op.onabort =
                        op.onerror =    function ( e ) { rej(e)               };
                        op.oncomplete = function ( r ) { res(r.target.result) };
                    });
                }

                op = op.then( function ( k ) {
                    if ( ka.name === 'HMAC' ) {
                        if ( !ka.length ) ka.length = 8 * k.algorithm.length;
                    }
                    if ( ka.name.search('RSA') == 0 ) {
                        if ( !ka.modulusLength ) ka.modulusLength = (k.publicKey || k).algorithm.modulusLength;
                        if ( !ka.publicExponent ) ka.publicExponent = (k.publicKey || k).algorithm.publicExponent;
                    }
                    if ( k.publicKey && k.privateKey ) {
                        k = {
                            publicKey: new CryptoKey( k.publicKey, ka, kx, ku.filter(isPubKeyUse) ),
                            privateKey: new CryptoKey( k.privateKey, ka, kx, ku.filter(isPrvKeyUse) ),
                        };
                    }
                    else {
                        k = new CryptoKey( k, ka, kx, ku );
                    }
                    return k;
                });

                return op;
            }
        });

    [ 'exportKey', 'wrapKey' ]
        .forEach( function ( m ) {
            var _fn = _subtle[m];

            _subtle[m] = function ( a, b, c ) {
                var args = [].slice.call(arguments);

                switch ( m ) {
                    case 'exportKey':
                        args[1] = b._key;
                        break;
                    case 'wrapKey':
                        args[1] = b._key, args[2] = c._key;
                        break;
                }

                if ( ( isWebkit || ( isIE && ( b.algorithm.hash || {} ).name === 'SHA-1' ) )
                        && m === 'exportKey' && a === 'jwk' && b.algorithm.name === 'HMAC' ) {
                    args[0] = 'raw';
                }

                if ( isWebkit && m === 'exportKey' && ( a === 'spki' || a === 'pkcs8' ) ) {
                    args[0] = 'jwk';
                }

                if ( isIE && m === 'wrapKey' ) {
                    return _subtle.exportKey( a, b )
                        .then( function ( k ) {
                            if ( a === 'jwk' ) k = s2b( unescape( encodeURIComponent( JSON.stringify( b2jwk(k) ) ) ) );
                            return  _subtle.encrypt( args[3], c, k );
                        });
                }

                var op;
                try {
                    op = _fn.apply( _subtle, args );
                }
                catch ( e ) {
                    return Promise.reject(e);
                }

                if ( isIE ) {
                    op = new Promise( function ( res, rej ) {
                        op.onabort =
                        op.onerror =    function ( e ) { rej(e)               };
                        op.oncomplete = function ( r ) { res(r.target.result) };
                    });
                }

                if ( m === 'exportKey' && a === 'jwk' ) {
                    op = op.then( function ( k ) {
                        if ( ( isWebkit || ( isIE && ( b.algorithm.hash || {} ).name === 'SHA-1' ) )
                                && b.algorithm.name === 'HMAC') {
                            return { 'kty': 'oct', 'alg': jwkAlg(b.algorithm), 'key_ops': b.usages.slice(), 'ext': true, 'k': s2a( b2s(k) ) };
                        }
                        k = b2jwk(k);
                        if ( !k.alg ) k['alg'] = jwkAlg(b.algorithm);
                        if ( !k.key_ops ) k['key_ops'] = ( b.type === 'public' ) ? b.usages.filter(isPubKeyUse) : ( b.type === 'private' ) ? b.usages.filter(isPrvKeyUse) : b.usages.slice();
                        return k;
                    });
                }

                if ( isWebkit && m === 'exportKey' && ( a === 'spki' || a === 'pkcs8' ) ) {
                    op = op.then( function ( k ) {
                        k = jwk2pkcs( b2jwk(k) );
                        return k;
                    });
                }

                return op;
            }
        });

    [ 'encrypt', 'decrypt', 'sign', 'verify' ]
        .forEach( function ( m ) {
            var _fn = _subtle[m];

            _subtle[m] = function ( a, b, c, d ) {
                if ( isIE && ( !c.byteLength || ( d && !d.byteLength ) ) )
                    throw new Error("Empy input is not allowed");

                var args = [].slice.call(arguments),
                    ka = alg(a);

                if ( isIE && m === 'decrypt' && ka.name === 'AES-GCM' ) {
                    var tl = a.tagLength >> 3;
                    args[2] = (c.buffer || c).slice( 0, c.byteLength - tl ),
                    a.tag = (c.buffer || c).slice( c.byteLength - tl );
                }

                args[1] = b._key;

                var op;
                try {
                    op = _fn.apply( _subtle, args );
                }
                catch ( e ) {
                    return Promise.reject(e);
                }

                if ( isIE ) {
                    op = new Promise( function ( res, rej ) {
                        op.onabort =
                        op.onerror = function ( e ) {
                            rej(e);
                        };

                        op.oncomplete = function ( r ) {
                            var r = r.target.result;

                            if ( m === 'encrypt' && r instanceof AesGcmEncryptResult ) {
                                var c = r.ciphertext, t = r.tag;
                                r = new Uint8Array( c.byteLength + t.byteLength );
                                r.set( new Uint8Array(c), 0 );
                                r.set( new Uint8Array(t), c.byteLength );
                                r = r.buffer;
                            }

                            res(r);
                        };
                    });
                }

                return op;
            }
        });

    if ( isIE ) {
        var _digest = _subtle.digest;

        _subtle['digest'] = function ( a, b ) {
            if ( !b.byteLength )
                throw new Error("Empy input is not allowed");

            var op;
            try {
                op = _digest.call( _subtle, a, b );
            }
            catch ( e ) {
                return Promise.reject(e);
            }

            op = new Promise( function ( res, rej ) {
                op.onabort =
                op.onerror =    function ( e ) { rej(e)               };
                op.oncomplete = function ( r ) { res(r.target.result) };
            });

            return op;
        };

        global.crypto = Object.create( _crypto, {
            getRandomValues: { value: function ( a ) { return _crypto.getRandomValues(a) } },
            subtle:          { value: _subtle },
        });

        global.CryptoKey = CryptoKey;
    }

    if ( isWebkit ) {
        _crypto.subtle = _subtle;

        global.Crypto = _Crypto;
        global.SubtleCrypto = _SubtleCrypto;
        global.CryptoKey = CryptoKey;
    }
}));

 /* harmony default export */ __webpack_exports__["default"] = ({}); // section modified by isomorphic-webcrypto build 


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Dependencies
 *
 * TODO
 * - switch between Node.js webcrypto package and browser implementation
 */
// const base64url = require('base64url')
const supportedAlgorithms = __webpack_require__(33)
const {NotSupportedError} = __webpack_require__(48)

/**
 * JWA
 * https://tools.ietf.org/html/rfc7518
 */
class JWA {

  /**
   * Sign
   *
   * @description
   * Create a digital signature.
   *
   * @param {string} alg
   * @param {CryptoKey} key
   * @param {string|Buffer} data
   *
   * @return {Promise}
   */
  static async sign (alg, key, data) {
    // normalize the algorithm
    let normalizedAlgorithm = supportedAlgorithms.normalize('sign', alg)

    // validate algorithm is supported
    if (normalizedAlgorithm instanceof Error) {
      return Promise.reject(new NotSupportedError(alg))
    }

    // validate type of key
    // TODO
    //  - is the key suitable for the algorithm?
    //  - does that get validated in webcrypto?
    //if (key instanceof CryptoKey) {
    //  return Promise.reject(new InvalidKeyError())
    //}

    // sign the data
    return normalizedAlgorithm.sign(key, data)
  }

  /**
   * Verify
   *
   * @description
   * Verify a digital signature.
   *
   * @param {string} alg
   * @param {CryptoKey} privateKey
   * @param {string|Buffer} signature
   * @param {string|Buffer} data
   *
   * @return {Promise}
   */
  static async verify (alg, key, signature, data) {
    let normalizedAlgorithm = supportedAlgorithms.normalize('verify', alg)

    if (normalizedAlgorithm instanceof Error) {
      return Promise.reject(new NotSupportedError(alg))
    }

    // TODO
    // validate publicKey

    // verify the signature
    return normalizedAlgorithm.verify(key, signature, data)
  }

  /**
   * Encrypt
   */

  /**
   * Decrypt
   */

  /**
   * Import
   */
  static async importKey (key) {
    let normalizedAlgorithm = supportedAlgorithms.normalize('importKey', key.alg)
    return normalizedAlgorithm.importKey(key)
  }
}

/**
 * Export
 */
module.exports = JWA


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Local dependencies
 */
const None = __webpack_require__(34)
const HMAC = __webpack_require__(35)
const RSASSA_PKCS1_v1_5 = __webpack_require__(45)
const SupportedAlgorithms = __webpack_require__(46)

/**
 * Register Supported Algorithms
 */
const supportedAlgorithms = new SupportedAlgorithms

/**
 * Sign
 */
supportedAlgorithms.define('HS256', 'sign', new HMAC({
  name: 'HMAC',
  hash: {
    name: 'SHA-256'
  }
}))

supportedAlgorithms.define('HS384', 'sign', new HMAC({
  name: 'HMAC',
  hash: {
    name: 'SHA-384'
  }
}))

supportedAlgorithms.define('HS512', 'sign', new HMAC({
  name: 'HMAC',
  hash: {
    name: 'SHA-512'
  }
}))

supportedAlgorithms.define('RS256', 'sign', new RSASSA_PKCS1_v1_5({
  name: 'RSASSA-PKCS1-v1_5',
  hash: {
    name: 'SHA-256'
  }
}))

supportedAlgorithms.define('RS384', 'sign', new RSASSA_PKCS1_v1_5({
  name: 'RSASSA-PKCS1-v1_5',
  hash: {
    name: 'SHA-384'
  }
}))

supportedAlgorithms.define('RS512', 'sign', new RSASSA_PKCS1_v1_5({
  name: 'RSASSA-PKCS1-v1_5',
  hash: {
    name: 'SHA-512'
  }
}))
//supportedAlgorithms.define('ES256', 'sign', {})
//supportedAlgorithms.define('ES384', 'sign', {})
//supportedAlgorithms.define('ES512', 'sign', {})
//supportedAlgorithms.define('PS256', 'sign', {})
//supportedAlgorithms.define('PS384', 'sign', {})
//supportedAlgorithms.define('PS512', 'sign', {})

supportedAlgorithms.define('none', 'sign', new None({
  // nothing goes here
}))

/**
 * Verify
 */
supportedAlgorithms.define('HS256', 'verify', new HMAC({
  name: 'HMAC',
  hash: {
    name: 'SHA-256'
  }
}))

supportedAlgorithms.define('HS384', 'verify', new HMAC({
  name: 'HMAC',
  hash: {
    name: 'SHA-384'
  }
}))

supportedAlgorithms.define('HS512', 'verify', new HMAC({
  name: 'HMAC',
  hash: {
    name: 'SHA-512'
  }
}))

supportedAlgorithms.define('RS256', 'verify', new RSASSA_PKCS1_v1_5({
  name: 'RSASSA-PKCS1-v1_5',
  hash: {
    name: 'SHA-256'
  }
}))

supportedAlgorithms.define('RS384', 'verify', new RSASSA_PKCS1_v1_5({
  name: 'RSASSA-PKCS1-v1_5',
  hash: {
    name: 'SHA-384'
  }
}))

supportedAlgorithms.define('RS512', 'verify', new RSASSA_PKCS1_v1_5({
  name: 'RSASSA-PKCS1-v1_5',
  hash: {
    name: 'SHA-512'
  }
}))
//supportedAlgorithms.define('ES256', 'verify', {})
//supportedAlgorithms.define('ES384', 'verify', {})
//supportedAlgorithms.define('ES512', 'verify', {})
//supportedAlgorithms.define('PS256', 'verify', {})
//supportedAlgorithms.define('PS384', 'verify', {})
//supportedAlgorithms.define('PS512', 'verify', {})

supportedAlgorithms.define('none', 'verify', new None({
  // nothing goes here
}))

supportedAlgorithms.define('RS256', 'importKey', new RSASSA_PKCS1_v1_5({
  name: 'RSASSA-PKCS1-v1_5',
  hash: {
    name: 'SHA-256'
  }
}))

supportedAlgorithms.define('RS384', 'importKey', new RSASSA_PKCS1_v1_5({
  name: 'RSASSA-PKCS1-v1_5',
  hash: {
    name: 'SHA-384'
  }
}))

supportedAlgorithms.define('RS512', 'importKey', new RSASSA_PKCS1_v1_5({
  name: 'RSASSA-PKCS1-v1_5',
  hash: {
    name: 'SHA-512'
  }
}))

/**
 * Export
 */
module.exports = supportedAlgorithms




/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * None
 */
class None {
  /**
   * sign
   */
  sign () {
    return Promise.resolve('')
  }

  /**
   * verify
   */
  verify () {
    // this will never get called. but you looked.
  }
}

/**
 * Export
 */
module.exports = None


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/**
 * Dependencies
 * @ignore
 */
const base64url = __webpack_require__(40)
const crypto = __webpack_require__(30)
const TextEncoder = __webpack_require__(43)

/**
 * HMAC with SHA-2 Functions
 */
class HMAC {

  /**
   * Constructor
   *
   * @param {string} bitlength
   */
  constructor (params) {
    this.params = params
  }

  /**
   * Sign
   *
   * @description
   * Generate a hash-based message authentication code for a
   * given input and key. Enforce the key length is equal to
   * or greater than the bitlength.
   *
   * @param {CryptoKey} key
   * @param {string} data
   *
   * @returns {string}
   */
  sign (key, data) {
    let algorithm = this.params

    // TODO: validate key length

    data = new TextEncoder().encode(data)

    return crypto.subtle
      .sign(algorithm, key, data)
      .then(signature => base64url(Buffer.from(signature)))
  }

  /**
   * Verify
   *
   * @description
   * Verify a digital signature for a given input and private key.
   *
   * @param {CryptoKey} key
   * @param {string} signature
   * @param {string} data
   *
   * @returns {Boolean}
   */
  verify (key, signature, data) {
    let algorithm = this.params

    if (typeof signature === 'string') {
      signature = Uint8Array.from(base64url.toBuffer(signature))
    }

    if (typeof data === 'string') {
      data = new TextEncoder().encode(data)
    }

    return crypto.subtle.verify(algorithm, key, signature, data)
  }

  /**
   * Assert Sufficient Key Length
   *
   * @description Assert that the key length is sufficient
   * @param {string} key
   */
  assertSufficientKeyLength (key) {
    if (key.length < this.bitlength) {
      throw new Error('The key is too short.')
    }
  }
}

/**
 * Export
 */
module.exports = HMAC

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36).Buffer))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(37)
var ieee754 = __webpack_require__(38)
var isArray = __webpack_require__(39)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 38 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 39 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41).default;
module.exports.default = module.exports;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
var pad_string_1 = __webpack_require__(42);
function encode(input, encoding) {
    if (encoding === void 0) { encoding = "utf8"; }
    if (Buffer.isBuffer(input)) {
        return fromBase64(input.toString("base64"));
    }
    return fromBase64(Buffer.from(input, encoding).toString("base64"));
}
;
function decode(base64url, encoding) {
    if (encoding === void 0) { encoding = "utf8"; }
    return Buffer.from(toBase64(base64url), "base64").toString(encoding);
}
function toBase64(base64url) {
    base64url = base64url.toString();
    return pad_string_1.default(base64url)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");
}
function fromBase64(base64) {
    return base64
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
}
function toBuffer(base64url) {
    return Buffer.from(toBase64(base64url), "base64");
}
var base64url = encode;
base64url.encode = encode;
base64url.decode = decode;
base64url.toBase64 = toBase64;
base64url.fromBase64 = fromBase64;
base64url.toBuffer = toBuffer;
exports.default = base64url;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36).Buffer))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
function padString(input) {
    var segmentLength = 4;
    var stringLength = input.length;
    var diff = stringLength % segmentLength;
    if (!diff) {
        return input;
    }
    var position = stringLength;
    var padLength = segmentLength - diff;
    var paddedStringLength = stringLength + padLength;
    var buffer = Buffer.alloc(paddedStringLength);
    buffer.write(input);
    while (padLength--) {
        buffer.write("=", position++);
    }
    return buffer.toString();
}
exports.default = padString;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36).Buffer))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const TextEncoder = global.TextEncoder
  ? global.TextEncoder  // browser
  : __webpack_require__(44).TextEncoder  // node shim
module.exports = TextEncoder

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20)))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/**
 * Dependencies
 * @ignore
 */
const base64url = __webpack_require__(40)
let crypto = __webpack_require__(29)
const TextEncoder = __webpack_require__(43)

/**
 * RSASSA-PKCS1-v1_5
 */
class RSASSA_PKCS1_v1_5 {

  /**
   * constructor
   *
   * @param {string} bitlength
   */
  constructor (params) {
    this.params = params
  }

  /**
   * sign
   *
   * @description
   * Generate a digital signature for a given input and private key.
   *
   * @param {CryptoKey} key
   * @param {BufferSource} data
   *
   * @returns {Promise}
   */
  sign (key, data) {
    let algorithm = this.params

    // TODO
    //if (!this.sufficientKeySize()) {
    //  return Promise.reject(
    //    new Error(
    //      'A key size of 2048 bits or larger must be used with RSASSA-PKCS1-v1_5'
    //    )
    //  )
    //}

    data = new TextEncoder().encode(data)

    return crypto.subtle
      .sign(algorithm, key, data)
      .then(signature => base64url(Buffer.from(signature)))
  }

  /**
   * verify
   *
   * @description
   * Verify a digital signature for a given input and private key.
   *
   * @param {CryptoKey} key
   * @param {BufferSource} signature
   * @param {BufferSource} data
   *
   * @returns {Promise}
   */
  verify (key, signature, data) {
    let algorithm = this.params

    if (typeof signature === 'string') {
      signature = Uint8Array.from(base64url.toBuffer(signature))
    }

    if (typeof data === 'string') {
      data = new TextEncoder().encode(data)
    }
    // ...

    return crypto.subtle.verify(algorithm, key, signature, data)
  }

  /**
   * importKey
   *
   * @param {JWK} key
   * @returns {Promise}
   */
  async importKey (key) {
    let jwk = Object.assign({}, key)
    let algorithm = this.params
    let usages = key['key_ops'] || []

    if (key.use === 'sig') {
      usages.push('verify')
    }

    if (key.use === 'enc') {
      // TODO: handle encryption keys
      return Promise.resolve(key)
    }

    if (key.key_ops) {
      usages = key.key_ops
    }

    return crypto.subtle
      .importKey('jwk', jwk, algorithm, true, usages)
      .then(cryptoKey => {
        Object.defineProperty(jwk, 'cryptoKey', {
          enumerable: false,
          value: cryptoKey
        })

        return jwk
      })
  }
}

/**
 * Export
 */
module.exports = RSASSA_PKCS1_v1_5

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36).Buffer))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Dependencies
 */
const NotSupportedError = __webpack_require__(47)

/**
 * Operations
 */
const operations = [
  'sign',
  'verify',
  'encrypt',
  'decrypt',
  'importKey'
]

/**
 * SupportedAlgorithms
 */
class SupportedAlgorithms {

  /**
   * constructor
   */
  constructor () {
    operations.forEach(op => {
      this[op] = {}
    })
  }

  /**
   * Supported Operations
   */
  static get operations () {
    return operations
  }

  /**
   * define
   *
   * @description
   * Register Web Crypto API algorithm parameter for an algorithm
   * and operation.
   *
   * @param {string} alg
   * @param {string} op
   * @param {Object} argument
   */
  define (alg, op, argument) {
    let registeredAlgorithms = this[op]
    registeredAlgorithms[alg] = argument
  }

  /**
   * normalize
   *
   * @description
   * Map JWA alg name to Web Crypto API algorithm parameter
   *
   * @param {string} op
   * @param {Object} alg
   *
   * @returns {Object}
   */
  normalize (op, alg) {
    let registeredAlgorithms = this[op]

    if (!registeredAlgorithms) {
      return new SyntaxError() // what kind of error should this be?
    }

    let argument = registeredAlgorithms[alg]

    if (!argument) {
      return new NotSupportedError(alg)
    }

    return argument
  }
}

/**
 * Export
 */
module.exports = SupportedAlgorithms


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * NotSupportedError
 */
class NotSupportedError extends Error {
  constructor (alg) {
    super()
    this.message = `${alg} is not a supported algorithm`
  }
}

/**
 * Export
 */
module.exports = NotSupportedError


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  DataError: __webpack_require__(49),
  NotSupportedError: __webpack_require__(47)
}


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * DataError
 */
class DataError extends Error {
  constructor (message) {
    super(message)
  }
}

/**
 * Export
 */
module.exports = DataError


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dependencies
 * @ignore
 */
const JWA = __webpack_require__(32)

/**
 * JWK Class
 */
class JWK {
  constructor ({ kty, use, key_ops, alg, kid, x5u, x5c, x5t } = {}) {
    this.kty = kty
    this.use = use
    this.key_ops = key_ops
    this.alg = alg
    this.kid = kid
    this.x5u = x5u
    this.x5c = x5c
    this.x5t = x5t
  }

  /**
   * importKey
   *
   * TODO:
   * - should this be on JWA?
   */
  static async importKey (jwk) {
    return JWA.importKey(jwk)
  }


}

/**
 * Export
 */
module.exports = JWK


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Dependencies
 */
const JWK = __webpack_require__(50)

/**
 * JWKSet
 *
 * @class
 * JWKSet represents a JSON Web Key Set as described in Section 5 of RFC 7517:
 * https://tools.ietf.org/html/rfc7517#section-5
 */
class JWKSet {
  constructor ({ keys } = {}) {
    this.keys = keys
  }

  /**
   * importKeys
   */
  static async importKeys (jwks) {
    if (!jwks.keys) {
      return Promise.reject(new Error('Cannot import JWKSet: keys property is empty'))
    }

    let imported, importing

    try {
      imported = new JWKSet(jwks)
      importing = jwks.keys.map(key => JWK.importKey(key))
    } catch (err) {
      return Promise.reject(err)
    }

    return Promise.all(importing)
      .then(keys => {
        imported.keys = keys
        return imported
      })
  }
}

/**
 * Export
 */
module.exports = JWKSet


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Dependencies
 */
const base64url = __webpack_require__(40)
const JWS = __webpack_require__(53)
const DataError = __webpack_require__(49)
const JOSEHeader = __webpack_require__(54)

/**
 * JWT
 */
class JWT {
  constructor (data = {}) {
    this.type = data.type
    this.segments = data.segments
    this.header = new JOSEHeader(data.header)
    this.protected = data.protected
    this.unprotected = data.unprotected
    this.iv = data.iv
    this.aad = data.aad
    this.ciphertext = data.ciphertext
    this.tag = data.tag
    this.recipients = data.recipients
    this.payload = data.payload
    this.signatures = data.signatures
    this.signature = data.signature
    this.key = data.key
    this.serialization = data.serialization || 'compact' // default
  }

  /**
   * decode
   *
   * @description
   * Decode a JSON Web Token
   *
   * @param {string} data
   * @returns {JWT}
   */
  static decode (data) {
    let ExtendedJWT = this
    let jwt

    if (typeof data !== 'string') {
      throw new DataError('JWT must be a string')
    }

    // JSON of Flattened JSON Serialization
    if (data.startsWith('{')) {
      try {
        data = JSON.parse(data, () => {})
      } catch (error) {
        throw new DataError('Invalid JWT serialization')
      }

      if (data.signatures || data.recipients) {
        data.serialization = 'json'
      } else {
        data.serialization = 'flattened'
      }

      jwt = new ExtendedJWT(data, { filter: false })

    // Compact Serialization
    } else {
      try {
        let serialization = 'compact'
        let segments = data.split('.')
        let length = segments.length

        if (length !== 3 && length !== 5) {
          throw new Error('Malformed JWT')
        }

        let header = JSON.parse(base64url.decode(segments[0]))

        // JSON Web Signature
        if (length === 3) {
          let type = 'JWS'
          let payload = JSON.parse(base64url.decode(segments[1]))
          let signature = segments[2]

          jwt = new ExtendedJWT(
              { type, segments, header, payload, signature, serialization },
              { filter: false }
            )
        }

        // JSON Web Encryption
        if (length === 5) {
          //let type = 'JWE'
          //let [protected, encryption_key, iv, ciphertext, tag] = segments

          //jwt = new ExtendedJWT({
          //  type,
          //  protected: base64url.decode(JSON.parse(protected)),
          //  encryption_key,
          //  iv,
          //  ciphertext,
          //  tag,
          //  serialization
          //})
        }
      } catch (error) {
        throw new DataError('Invalid JWT compact serialization')
      }
    }

    return jwt
  }

  /**
   * encode
   *
   * @description
   * Encode a JSON Web Token
   *
   * @param {Object} header
   * @param {Object} payload
   * @param {CryptoKey} key
   *
   * @returns {Promise}
   */
  static encode (header, payload, key) {
    let jwt = new JWT(header, payload)
    return jwt.encode(key)
  }


  /**
   * verify
   *
   * @description
   *
   * @param {CryptoKey} key
   * @param {string} token
   *
   * @returns {Promise}
   */
  static async verify (key, token) {
    let jwt = JWT.decode(token)
    jwt.key = key
    return jwt.verify().then(verified => jwt)
  }

  /**
   * isJWE
   */
  isJWE () {
    return !!this.header.enc
  }

  /**
   * resolveKeys
   */
  resolveKeys (jwks) {
    let kid = this.header.kid
    let keys, match

    // treat an array as the "keys" property of a JWK Set
    if (Array.isArray(jwks)) {
      keys = jwks
    }

    // presence of keys indicates object is a JWK Set
    if (jwks.keys) {
      keys = jwks.keys
    }

    // wrap a plain object they is not a JWK Set in Array
    if (!jwks.keys && typeof jwks === 'object') {
      keys = [jwks]
    }

    // ensure there are keys to search
    if (!keys) {
      throw new DataError('Invalid JWK argument')
    }

    // match by "kid" or "use" header
    if (kid) {
      match = keys.find(jwk => jwk.kid === kid)
    } else {
      match = keys.find(jwk => jwk.use === 'sig')
    }

    // assign matching key to JWT and return a boolean
    if (match) {
      this.key = match.cryptoKey
      return true
    } else {
      return false
    }
  }

  /**
   * encode
   *
   * @description
   * Encode a JWT instance
   *
   * @returns {Promise}
   */
  async encode () {
    let token = this

    if (this.isJWE()) {
      return JWE.encrypt(token)
    } else {
      return JWS.sign(token)
    }
  }

  /**
   * verify
   *
   * @description
   * Verify a decoded JWT instance
   *
   * @returns {Promise}
   */
  async verify () {
    return JWS.verify(this)
  }
}

/**
 * Export
 */
module.exports = JWT


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Dependencies
 */
const base64url = __webpack_require__(40)
const JWA = __webpack_require__(32)
const { DataError } = __webpack_require__(48)
const JOSEHeader = __webpack_require__(54)

/**
 * JWS
 */
class JWS {
  constructor (data = {}) {
    // compact
    this.header = new JOSEHeader(data.header)
    this.payload = data.payload || {}
    this.signature = data.signature

    // flattened
    this.protected = data.protected

    // JSON serialization
    this.signatures = data.signatures

    this.verified = false
  }

  /**
   * sign
   *
   * @description
   * Encode a JWT instance
   *
   * @param {Object} token
   * @returns {Promise}
   */
  static async sign (token) {
    let payload = base64url(JSON.stringify(token.payload))

    // compact serialization
    if (token.serialization === 'compact') {
      let {key, header: {alg}} = token
      let header = base64url(JSON.stringify(token.header))
      let data = `${header}.${payload}`

      return JWA.sign(alg, key, data).then(signature => `${data}.${signature}`)
    }

    // JSON serialization
    if (token.serialization === 'json') {

    }

    // Flattened serialization
    if (token.serialization === 'flattened') {

    }

    return Promise.reject(new DataError('Unsupported serialization'))
  }

  /**
   * verify
   */
  static async verify (jwt) {
    // multiple signatures
    if (jwt.signatures) {
      // ...
    }

    let {key, signature, header: {alg}} = jwt

    // one signature
    if (jwt.signature) {
      let [header, payload] = jwt.segments
      let data = `${header}.${payload}`

      if (alg === 'none') {
        return Promise.reject(new DataError('Signature provided to verify with alg: none'))
      }

      return JWA.verify(alg, key, signature, data).then(verified => {
        jwt.verified = verified
        return verified
      })
    }

    if (alg === 'none') {
      if (!key && !signature) {
        jwt.verified = true

        return Promise.resolve(true)
      }

      if (key) {
        return Promise.reject(new DataError('Key provided to verify signature with alg: none'))
      }
    }

    // no signatures to verify
    return Promise.reject(new DataError('Missing signature(s)'))
  }
}

/**
 * Export
 */
module.exports = JWS


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * Header
 */
class JOSEHeader {
  constructor ({ typ, cty, alg, jku, kid, x5u, x5c, x5t, crit, enc, zip } = {}) {
    this.typ = typ
    this.cty = cty
    this.alg = alg
    this.jku = jku
    this.kid = kid
    this.x5u = x5u
    this.x5c = x5c
    this.x5t = x5t
    this.crit = crit
    this.enc = enc
    this.zip = zip
  }

  /**
   * isJWS
   */
  isJWS () {}

  /**
   * isJWE
   */
  isJWE () {}
}

/**
 * Export
 */
module.exports = JOSEHeader


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Dependencies
 */
const assert = __webpack_require__(21);

const base64url = __webpack_require__(40);

const {
  crypto,
  JWT
} = __webpack_require__(28);

const FormUrlEncoded = __webpack_require__(56);

const {
  URL
} = __webpack_require__(27);
/**
 * Authentication Request
 */


class AuthenticationRequest {
  /**
   * create
   *
   * @description
   * Create a new authentication request with generated state and nonce,
   * validate presence of required parameters, serialize the request data and
   * persist it to the session, and return a promise for an authentication
   * request URI.
   *
   * @param {RelyingParty} rp – instance of RelyingParty
   * @param {Object} options - optional request parameters
   * @param {Object} session – reference to localStorage or other session object
   *
   * @returns {Promise}
   */
  static create(rp, options, session) {
    const {
      provider,
      defaults,
      registration
    } = rp;
    let issuer, endpoint, client, params;
    return Promise.resolve().then(() => {
      // validate presence of OP configuration, RP client registration,
      // and default parameters
      assert(provider.configuration, 'RelyingParty provider OpenID Configuration is missing');
      assert(defaults.authenticate, 'RelyingParty default authentication parameters are missing');
      assert(registration, 'RelyingParty client registration is missing'); // define basic elements of the request

      issuer = provider.configuration.issuer;
      endpoint = provider.configuration.authorization_endpoint;
      client = {
        client_id: registration.client_id
      };
      params = Object.assign(defaults.authenticate, client, options); // validate presence of required configuration and parameters

      assert(issuer, 'Missing issuer in provider OpenID Configuration');
      assert(endpoint, 'Missing authorization_endpoint in provider OpenID Configuration');
      assert(params.scope, 'Missing scope parameter in authentication request');
      assert(params.response_type, 'Missing response_type parameter in authentication request');
      assert(params.client_id, 'Missing client_id parameter in authentication request');
      assert(params.redirect_uri, 'Missing redirect_uri parameter in authentication request'); // generate state and nonce random octets

      params.state = Array.from(crypto.getRandomValues(new Uint8Array(16)));
      params.nonce = Array.from(crypto.getRandomValues(new Uint8Array(16))); // hash the state and nonce parameter values

      return Promise.all([crypto.subtle.digest({
        name: 'SHA-256'
      }, new Uint8Array(params.state)), crypto.subtle.digest({
        name: 'SHA-256'
      }, new Uint8Array(params.nonce))]);
    }) // serialize the request with original values, store in session by
    // encoded state param, and replace state/nonce octets with encoded
    // digests
    .then(digests => {
      let state = base64url(Buffer.from(digests[0]));
      let nonce = base64url(Buffer.from(digests[1]));
      let key = `${issuer}/requestHistory/${state}`; // store the request params for response validation
      // with serialized octet values for state and nonce

      session[key] = JSON.stringify(params); // replace state and nonce octets with base64url encoded digests

      params.state = state;
      params.nonce = nonce;
    }).then(() => AuthenticationRequest.generateSessionKeys()).then(sessionKeys => {
      AuthenticationRequest.storeSessionKeys(sessionKeys, params, session);
    }) // optionally encode a JWT with the request parameters
    // and replace params with `{ request: <jwt> }
    .then(() => {
      if (provider.configuration.request_parameter_supported) {
        return AuthenticationRequest.encodeRequestParams(params).then(encodedParams => {
          params = encodedParams;
        });
      }
    }) // render the request URI and terminate the algorithm
    .then(() => {
      let url = new URL(endpoint);
      url.search = FormUrlEncoded.encode(params);
      return url.href;
    });
  }

  static generateSessionKeys() {
    return crypto.subtle.generateKey({
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: {
        name: "SHA-256"
      }
    }, true, ["sign", "verify"]).then(keyPair => {
      // returns a keypair object
      return Promise.all([crypto.subtle.exportKey('jwk', keyPair.publicKey), crypto.subtle.exportKey('jwk', keyPair.privateKey)]);
    }).then(jwkPair => {
      let [publicJwk, privateJwk] = jwkPair;
      return {
        public: publicJwk,
        private: privateJwk
      };
    });
  }

  static storeSessionKeys(sessionKeys, params, session) {
    // store the private one in session, public one goes into params
    session['oidc.session.privateKey'] = JSON.stringify(sessionKeys.private);
    params.key = sessionKeys.public;
  }

  static encodeRequestParams(params) {
    const excludeParams = ['scope', 'client_id', 'response_type', 'state'];
    const keysToEncode = Object.keys(params).filter(key => !excludeParams.includes(key));
    let payload = {};
    keysToEncode.forEach(key => {
      payload[key] = params[key];
    });
    let requestParamJwt = new JWT({
      header: {
        alg: 'none'
      },
      payload
    }, {
      filter: false
    });
    return requestParamJwt.encode().then(requestParamCompact => {
      let newParams = {
        scope: params['scope'],
        client_id: params['client_id'],
        response_type: params['response_type'],
        request: requestParamCompact,
        state: params['state']
      };
      return newParams;
    });
  }

}
/**
 * Export
 */


module.exports = AuthenticationRequest;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36).Buffer))

/***/ }),
/* 56 */
/***/ (function(module, exports) {

/**
 * Dependencies
 */

/**
 * FormUrlEncoded
 */
class FormUrlEncoded {
  /**
   * Encode
   *
   * @description
   * Represent an object as x-www-form-urlencoded string.
   *
   * @param {Object} data
   * @returns {string}
   */
  static encode(data) {
    let pairs = [];
    Object.keys(data).forEach(function (key) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    });
    return pairs.join('&');
  }
  /**
   * Decode
   *
   * @description
   * Parse a x-www-form-urlencoded into an object.
   *
   * @param {string} data
   * @returns {Object}
   */


  static decode(data) {
    let obj = {};
    data.split('&').forEach(function (property) {
      let pair = property.split('=');
      let key = decodeURIComponent(pair[0]);
      let val = decodeURIComponent(pair[1]);
      obj[key] = val;
    });
    return obj;
  }

}
/**
 * Export
 */


module.exports = FormUrlEncoded;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, Buffer) {/**
 * Dependencies
 */
const {
  URL
} = __webpack_require__(27);

const assert = __webpack_require__(21);

const {
  crypto
} = __webpack_require__(28);

const base64url = __webpack_require__(40);

const fetch = __webpack_require__(5);

const Headers = fetch.Headers ? fetch.Headers : global.Headers;

const FormUrlEncoded = __webpack_require__(56);

const IDToken = __webpack_require__(58);

const Session = __webpack_require__(59);

const onHttpError = __webpack_require__(60);

const HttpError = __webpack_require__(62);
/**
 * AuthenticationResponse
 */


class AuthenticationResponse {
  /**
   * @param rp {RelyingParty}
   * @param [redirect] {string} req.query
   * @param [body] {string} req.body.text
   * @param session {Session|Storage} req.session or localStorage or similar
   * @param params {object} hashmap
   * @param mode {string} 'query'/'fragment'/'form_post',
   *   determined in `parseResponse()`
   */
  constructor({
    rp,
    redirect,
    body,
    session,
    mode,
    params = {}
  }) {
    this.rp = rp;
    this.redirect = redirect;
    this.body = body;
    this.session = session;
    this.mode = mode;
    this.params = params;
  }
  /**
   * validateResponse
   *
   * @description
   * Authentication response validation.
   *
   * @param {string|Object} response
   *
   * @returns {Promise<Session>}
   */


  static validateResponse(response) {
    return Promise.resolve(response).then(this.parseResponse).then(this.errorResponse).then(this.matchRequest).then(this.validateStateParam).then(this.validateResponseMode).then(this.validateResponseParams).then(this.exchangeAuthorizationCode).then(this.validateIDToken).then(Session.fromAuthResponse);
  }
  /**
   * parseResponse
   *
   * @param {object} response
   *
   * @returns {object}
   */


  static parseResponse(response) {
    let {
      redirect,
      body
    } = response; // response must be either a redirect uri or request body, but not both

    if (redirect && body || !redirect && !body) {
      throw new HttpError(400, 'Invalid response mode');
    } // parse redirect uri


    if (redirect) {
      let url = new URL(redirect);
      let {
        search,
        hash
      } = url;

      if (search && hash || !search && !hash) {
        throw new HttpError(400, 'Invalid response mode');
      }

      if (search) {
        response.params = FormUrlEncoded.decode(search.substring(1));
        response.mode = 'query';
      }

      if (hash) {
        response.params = FormUrlEncoded.decode(hash.substring(1));
        response.mode = 'fragment';
      }
    } // parse request form body


    if (body) {
      response.params = FormUrlEncoded.decode(body);
      response.mode = 'form_post';
    }

    return response;
  }
  /**
   * errorResponse
   *
   * @param {AuthenticationResponse} response
   *
   * @throws {Error} If response params include the OAuth2 'error' param,
   *   throws an error based on it.
   *
   * @returns {AuthenticationResponse} Chainable
   *
   * @todo Figure out HTTP status code (typically 400, 401 or 403)
   *   based on the OAuth2/OIDC `error` code, probably using an external library
   */


  static errorResponse(response) {
    const errorCode = response.params.error;

    if (errorCode) {
      const errorParams = {};
      errorParams['error'] = errorCode;
      errorParams['error_description'] = response.params['error_description'];
      errorParams['error_uri'] = response.params['error_uri'];
      errorParams['state'] = response.params['state'];
      const error = new Error(`AuthenticationResponse error: ${errorCode}`);
      error.info = errorParams;
      throw error;
    }

    return response;
  }
  /**
   * matchRequest
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static matchRequest(response) {
    let {
      rp,
      params,
      session
    } = response;
    let state = params.state;
    let issuer = rp.provider.configuration.issuer;

    if (!state) {
      throw new Error('Missing state parameter in authentication response');
    }

    let key = `${issuer}/requestHistory/${state}`;
    let request = session[key];

    if (!request) {
      throw new Error('Mismatching state parameter in authentication response');
    }

    response.request = JSON.parse(request);
    return response;
  }
  /**
   * validateStateParam
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static validateStateParam(response) {
    let octets = new Uint8Array(response.request.state);
    let encoded = response.params.state;
    return crypto.subtle.digest({
      name: 'SHA-256'
    }, octets).then(digest => {
      if (encoded !== base64url(Buffer.from(digest))) {
        throw new Error('Mismatching state parameter in authentication response');
      }

      return response;
    });
  }
  /**
   * validateResponseMode
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static validateResponseMode(response) {
    if (response.request.response_type !== 'code' && response.mode === 'query') {
      throw new Error('Invalid response mode');
    }

    return response;
  }
  /**
   * validateResponseParams
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static validateResponseParams(response) {
    let {
      request,
      params
    } = response;
    let expectedParams = request.response_type.split(' ');

    if (expectedParams.includes('code')) {
      assert(params.code, 'Missing authorization code in authentication response'); // TODO assert novelty of code
    }

    if (expectedParams.includes('id_token')) {
      assert(params.id_token, 'Missing id_token in authentication response');
    }

    if (expectedParams.includes('token')) {
      assert(params.access_token, 'Missing access_token in authentication response');
      assert(params.token_type, 'Missing token_type in authentication response');
    }

    return response;
  }
  /**
   * exchangeAuthorizationCode
   *
   * @param {Object} response
   * @returns {Promise} response object
   */


  static exchangeAuthorizationCode(response) {
    let {
      rp,
      params,
      request
    } = response;
    let code = params.code; // only exchange the authorization code when the response type is "code"

    if (!code || request['response_type'] !== 'code') {
      return Promise.resolve(response);
    }

    let {
      provider,
      registration
    } = rp;
    let id = registration['client_id'];
    let secret = registration['client_secret']; // verify the client is not public

    if (!secret) {
      return Promise.reject(new Error('Client cannot exchange authorization code because ' + 'it is not a confidential client'));
    } // initialize token request arguments


    let endpoint = provider.configuration.token_endpoint;
    let method = 'POST'; // initialize headers

    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    }); // initialize the token request parameters

    let bodyContents = {
      'grant_type': 'authorization_code',
      'code': code,
      'redirect_uri': request['redirect_uri']
    }; // determine client authentication method

    let authMethod = registration['token_endpoint_auth_method'] || 'client_secret_basic'; // client secret basic authentication

    if (authMethod === 'client_secret_basic') {
      let credentials = new Buffer(`${id}:${secret}`).toString('base64');
      headers.set('Authorization', `Basic ${credentials}`);
    } // client secret post authentication


    if (authMethod === 'client_secret_post') {
      bodyContents['client_id'] = id;
      bodyContents['client_secret'] = secret;
    }

    let body = FormUrlEncoded.encode(bodyContents); // TODO
    // client_secret_jwt authentication
    // private_key_jwt
    // make the token request

    return fetch(endpoint, {
      method,
      headers,
      body
    }).then(onHttpError('Error exchanging authorization code')).then(tokenResponse => tokenResponse.json()).then(tokenResponse => {
      assert(tokenResponse['access_token'], 'Missing access_token in token response');
      assert(tokenResponse['token_type'], 'Missing token_type in token response');
      assert(tokenResponse['id_token'], 'Missing id_token in token response'); // anything else?
      // IS THIS THE RIGHT THING TO DO HERE?

      response.params = Object.assign(response.params, tokenResponse);
      return response;
    });
  }
  /**
   * validateIDToken
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static validateIDToken(response) {
    // only validate the ID Token if present in the response
    if (!response.params.id_token) {
      return Promise.resolve(response);
    }

    return Promise.resolve(response).then(AuthenticationResponse.decryptIDToken).then(AuthenticationResponse.decodeIDToken).then(AuthenticationResponse.validateIssuer).then(AuthenticationResponse.validateAudience).then(AuthenticationResponse.resolveKeys).then(AuthenticationResponse.verifySignature).then(AuthenticationResponse.validateExpires).then(AuthenticationResponse.verifyNonce).then(AuthenticationResponse.validateAcr).then(AuthenticationResponse.validateAuthTime).then(AuthenticationResponse.validateAccessTokenHash).then(AuthenticationResponse.validateAuthorizationCodeHash);
  }
  /**
   * decryptIDToken
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static decryptIDToken(response) {
    // TODO
    return Promise.resolve(response);
  }
  /**
   * decodeIDToken
   *
   * Note: If the `id_token` is not present in params, this method does not
   * get called (short-circuited in `validateIDToken()`).
   *
   * @param response {AuthenticationResponse}
   * @param response.params {object}
   * @param [response.params.id_token] {string} IDToken encoded as a JWT
   *
   * @returns {AuthenticationResponse} Chainable
   */


  static decodeIDToken(response) {
    let jwt = response.params.id_token;

    try {
      response.decoded = IDToken.decode(jwt);
    } catch (decodeError) {
      const error = new HttpError(400, 'Error decoding ID Token');
      error.cause = decodeError;
      error.info = {
        id_token: jwt
      };
      throw error;
    }

    return response;
  }
  /**
   * validateIssuer
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static validateIssuer(response) {
    let configuration = response.rp.provider.configuration;
    let payload = response.decoded.payload; // validate issuer of token matches this relying party's provider

    if (payload.iss !== configuration.issuer) {
      throw new Error('Mismatching issuer in ID Token');
    }

    return response;
  }
  /**
   * validateAudience
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static validateAudience(response) {
    let registration = response.rp.registration;
    let {
      aud,
      azp
    } = response.decoded.payload; // validate audience includes this relying party

    if (typeof aud === 'string' && aud !== registration['client_id']) {
      throw new Error('Mismatching audience in id_token');
    } // validate audience includes this relying party


    if (Array.isArray(aud) && !aud.includes(registration['client_id'])) {
      throw new Error('Mismatching audience in id_token');
    } // validate authorized party is present if required


    if (Array.isArray(aud) && !azp) {
      throw new Error('Missing azp claim in id_token');
    } // validate authorized party is this relying party


    if (azp && azp !== registration['client_id']) {
      throw new Error('Mismatching azp claim in id_token');
    }

    return response;
  }
  /**
   * resolveKeys
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static resolveKeys(response) {
    let rp = response.rp;
    let provider = rp.provider;
    let decoded = response.decoded;
    let isFreshJwks = false;
    return Promise.resolve(provider.jwks).then(jwks => jwks ? jwks : (isFreshJwks = true, rp.jwks())).then(jwks => {
      if (decoded.resolveKeys(jwks)) {
        return Promise.resolve(response);
      }

      if (!isFreshJwks) {
        // The OP JWK Set cached by the RP may be stale due to key rotation by the OP.
        return rp.jwks().then(jwks => {
          if (decoded.resolveKeys(jwks)) {
            return Promise.resolve(response);
          }

          throw new Error('Cannot resolve signing key for ID Token');
        });
      }

      throw new Error('Cannot resolve signing key for ID Token');
    });
  }
  /**
   * verifySignature
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static verifySignature(response) {
    let alg = response.decoded.header.alg;
    let registration = response.rp.registration;
    let expectedAlgorithm = registration['id_token_signed_response_alg'] || 'RS256'; // validate signing algorithm matches expectation

    if (alg !== expectedAlgorithm) {
      throw new Error(`Expected ID Token to be signed with ${expectedAlgorithm}`);
    }

    return response.decoded.verify().then(verified => {
      if (!verified) {
        throw new Error('Invalid ID Token signature');
      }

      return response;
    });
  }
  /**
   * validateExpires
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static validateExpires(response) {
    let exp = response.decoded.payload.exp; // validate expiration of token

    if (exp <= Math.floor(Date.now() / 1000)) {
      throw new Error('Expired ID Token');
    }

    return response;
  }
  /**
   * verifyNonce
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static verifyNonce(response) {
    let octets = new Uint8Array(response.request.nonce);
    let nonce = response.decoded.payload.nonce;

    if (!nonce) {
      throw new Error('Missing nonce in ID Token');
    }

    return crypto.subtle.digest({
      name: 'SHA-256'
    }, octets).then(digest => {
      if (nonce !== base64url(Buffer.from(digest))) {
        throw new Error('Mismatching nonce in ID Token');
      }

      return response;
    });
  }
  /**
   * validateAcr
   *
   * @param {Object} response
   * @returns {Object}
   */


  static validateAcr(response) {
    // TODO
    return response;
  }
  /**
   * validateAuthTime
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static validateAuthTime(response) {
    // TODO
    return response;
  }
  /**
   * validateAccessTokenHash
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static validateAccessTokenHash(response) {
    // TODO
    return response;
  }
  /**
   * validateAuthorizationCodeHash
   *
   * @param {Object} response
   * @returns {Promise}
   */


  static validateAuthorizationCodeHash(response) {
    // TODO
    return response;
  }

}
/**
 * Export
 */


module.exports = AuthenticationResponse;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(20), __webpack_require__(36).Buffer))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Local dependencies
 */
const {
  JWT
} = __webpack_require__(28);

const REQUIRED_CLAIMS = ['iss', 'sub', 'aud', 'exp', 'iat'];

class TokenClaimsSet {
  /**
   * Claims inherited from JWT:
   * @param iss {string} Issuer URL
   * @param sub {string} Subject identifier
   * @param aud {string|Array<string>} Audience
   * @param exp {number} Expiration (seconds since epoch, RFC3339)
   * @param iat {number} Expiration (seconds since epoch, RFC3339)
   * @param [nbf] {number} Not Before (seconds since epoch, RFC3339)
   * @param [jti] {string} JWT Identifier
   *
   * Claims specific to ID Token:
   * @param [auth_time] {number} Time when user authn occurred (RFC3339)
   * @param [nonce] {string}
   * @param [acr] {string} Authentication Context Class Reference
   * @param [amr] {string} Authentication Methods References
   * @param [azp] {string} Authorized party
   */
  constructor({
    iss,
    sub,
    aud,
    exp,
    iat,
    nbf,
    jti,
    auth_time,
    nonce,
    acr,
    amr
  } = {}) {
    this.iss = iss;
    this.sub = sub;
    this.aud = aud;
    this.exp = exp;
    this.iat = iat;
    this.nbf = nbf;
    this.jti = jti;
    this.auth_time = auth_time;
    this.nonce = nonce;
    this.acr = acr;
    this.amr = amr;
  }

  validate() {
    let valid = true;
    let error;

    try {
      for (const claim of REQUIRED_CLAIMS) {
        if (!this[claim]) {
          valid = false;
          throw new Error(`Required claim ${claim} is missing.`);
        }
      }
    } catch (validationError) {
      error = validationError;
    }

    return {
      valid,
      error
    };
  }

}
/**
 * IDToken
 */


class IDToken extends JWT {
  constructor(data = {}) {
    super(data);
    this.payload = new TokenClaimsSet(data.payload);
  }

  validate() {
    const payloadResult = this.payload.validate();

    if (!payloadResult.valid) {
      return payloadResult;
    }

    let valid = true;
    let error;
    return {
      valid,
      error
    };
  }

}
/**
 * Export
 */


module.exports = IDToken;
module.exports.TokenClaimsSet = TokenClaimsSet;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fetch = __webpack_require__(5);

const onHttpError = __webpack_require__(60);

const PoPToken = __webpack_require__(61);

class Session {
  /**
   * @param options {Object}
   *
   * @param options.credentialType {string} 'access_token' or 'pop_token'
   *
   * @param options.issuer {string} Identity provider (issuer of ID/Access Token)
   *
   * @param options.authorization {object}
   * @param options.authorization.client_id {string} OIDC/OAuth2 client id
   * @param [options.authorization.id_token] {string} Compact-serialized id_token param
   * @param [options.authorization.access_token] {string} Compact-serialized access_token param
   * @param [options.authorization.refresh_token] {string} Compact-serialized refresh_token
   *
   * @param [options.sessionKey] {string} Serialized client session key generated
   *   during the Authentication Request, used to issue PoPTokens
   *
   * @param [options.idClaims] {object} Decoded/verified ID Token JWT payload
   *
   * @param [options.accessClaims] {object} Decoded/verified Access Token JWT payload
   */
  constructor(options) {
    this.credentialType = options.credentialType || 'access_token';
    this.issuer = options.issuer;
    this.authorization = options.authorization || {};
    this.sessionKey = options.sessionKey;
    this.idClaims = options.idClaims;
    this.accessClaims = options.accessClaims;
  }

  static from(options) {
    return new Session(options);
  }
  /**
   * @param response {AuthenticationResponse}
   *
   * @returns {Session} RelyingParty Session object
   */


  static fromAuthResponse(response) {
    const RelyingParty = __webpack_require__(19); // import here due to circular dep


    let idClaims = response.decoded && response.decoded.payload || {};
    let {
      rp
    } = response;
    let registration = rp.registration;
    let rpAuthOptions = rp.defaults.authenticate || {};
    let credentialType = rpAuthOptions['credential_type'] || rp.defaults.popToken ? 'pop_token' : 'access_token';
    let sessionKey = response.session[RelyingParty.SESSION_PRIVATE_KEY];
    let options = {
      credentialType,
      sessionKey,
      issuer: idClaims.iss,
      idClaims,
      authorization: {
        client_id: registration['client_id'],
        access_token: response.params['access_token'],
        id_token: response.params['id_token'],
        refresh_token: response.params['refresh_token']
      }
    };
    return Session.from(options);
  }
  /**
   * Authenticated fetch() getter
   *
   * @returns {function}
   */


  get fetch() {
    /**
     * fetch() function signature
     *
     * @param url {RequestInfo|string}
     * @param options {object}
     *
     * @returns {Function<Promise<Response>>}
     */
    return (url, options) => {
      return Promise.resolve().then(() => {
        if (this.hasCredentials()) {
          return this.fetchWithCredentials(url, options);
        } else {
          return fetch(url, options);
        }
      }).then(onHttpError('Error while fetching resource'));
    };
  }
  /**
   * bearerTokenFor
   *
   * @param url {string}
   *
   * @returns {Promise<string>}
   */


  bearerTokenFor(url) {
    switch (this.credentialType) {
      case 'pop_token':
        return PoPToken.issueFor(url, this);

      default:
        // 'access_token' etc
        return Promise.resolve(this.authorization[this.credentialType]);
    }
  }
  /**
   * hasCredentials
   *
   * @returns {boolean}
   */


  hasCredentials() {
    switch (this.credentialType) {
      case 'pop_token':
        return !!this.authorization['id_token'];

      default:
        // 'access_token' etc
        return !!this.authorization[this.credentialType];
    }
  }
  /**
   * fetchWithCredentials
   *
   * @param url {RequestInfo|string}
   * @param options {object}
   *
   * @returns {Promise<Response>}
   */


  fetchWithCredentials(url, options = {}) {
    options.headers = options.headers || {};
    return this.bearerTokenFor(url).then(token => {
      options.headers.authorization = `Bearer ${token}`;
      return fetch(url, options);
    });
  }

}

module.exports = Session;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Throws an error when a fetch response status code indicates a 400 or 500
 * HTTP error. (The whatwg fetch api does not normally reject on http error
 * responses).
 *
 * Usage:
 *
 * ```
 * return fetch(url)
 *   .then(onHttpError('Error while fetching resource')
 *   .catch(err => console.log(err))
 *
 * // -> 'Error while fetching resource: 404 Not Found' error
 * // if a 404 response is encountered
 * ```
 *
 * @param [message] {string} Optional error message to clarify context
 *
 * @throws {Error} For http status codes > 300
 *
 * @return {Object} fetch response object (passed through if no error)
 */

function onHttpError(message = 'fetch error') {
  return response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    let errorMessage = `${message}: ${response.status} ${response.statusText}`;
    let error = new Error(errorMessage);
    error.response = response;
    error.statusCode = response.status;
    throw error;
  };
}

module.exports = onHttpError;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const {
  URL
} = __webpack_require__(27);

const {
  JWT,
  JWK
} = __webpack_require__(28);

const DEFAULT_MAX_AGE = 3600; // Default token expiration, in seconds

class PoPToken extends JWT {
  /**
   * @param resourceServerUri {string} RS URI for which this token is intended
   *
   * @param session {Session}
   * @param session.sessionKey {string}
   * @param session.authorization.client_id {string}
   * @param session.authorization.id_token {string}
   *
   * @returns {Promise<string>} PoPToken, encoded as compact JWT
   */
  static issueFor(resourceServerUri, session) {
    if (!resourceServerUri) {
      throw new Error('Cannot issue PoPToken - missing resource server URI');
    }

    if (!session.sessionKey) {
      throw new Error('Cannot issue PoPToken - missing session key');
    }

    if (!session.authorization.id_token) {
      throw new Error('Cannot issue PoPToken - missing id token');
    }

    let jwk = JSON.parse(session.sessionKey);
    return JWK.importKey(jwk).then(importedSessionJwk => {
      let options = {
        aud: new URL(resourceServerUri).origin,
        key: importedSessionJwk,
        iss: session.authorization.client_id,
        id_token: session.authorization.id_token
      };
      return PoPToken.issue(options);
    }).then(jwt => {
      return jwt.encode();
    });
  }
  /**
   * issue
   *
   * @param options {Object}
   * @param options.iss {string} Token issuer (RP client_id)
   * @param options.aud {string|Array<string>} Audience for the token
   *   (such as the Resource Server url)
   * @param options.key {JWK} Proof of Possession (private) signing key, see
   *   https://tools.ietf.org/html/rfc7800#section-3.1
   *
   * @param options.id_token {string} JWT compact encoded ID Token
   *
   * Optional:
   * @param [options.iat] {number} Issued at timestamp (in seconds)
   * @param [options.max] {number} Max token lifetime in seconds
   *
   * @returns {PoPToken} Proof of Possession Token (JWT instance)
   */


  static issue(options) {
    let {
      aud,
      iss,
      key
    } = options;
    let alg = key.alg;
    let iat = options.iat || Math.floor(Date.now() / 1000);
    let max = options.max || DEFAULT_MAX_AGE;
    let exp = iat + max; // token expiration

    let header = {
      alg
    };
    let payload = {
      iss,
      aud,
      exp,
      iat,
      id_token: options.id_token,
      token_type: 'pop'
    };
    let jwt = new PoPToken({
      header,
      payload,
      key: key.cryptoKey
    }, {
      filter: false
    });
    return jwt;
  }

}

module.exports = PoPToken;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = HttpError
var StandardError = __webpack_require__(63)
var STATUS_CODE_TO_NAME = __webpack_require__(64)
var STATUS_NAME_TO_CODE = exports

function HttpError(code, msg, props) {
  if (typeof code == "string") code = STATUS_NAME_TO_CODE[code]
  if (typeof code != "number") throw new TypeError("Non-numeric HTTP code")
  if (typeof msg == "object" && msg != null) { props = msg; msg = null }
  StandardError.call(this, msg || STATUS_CODE_TO_NAME[code], props)
  this.code = code
}

HttpError.prototype = Object.create(StandardError.prototype, {
  constructor: {value: HttpError, configurable: true, writable: true}
})

// Set name explicitly for when the code gets minified.
HttpError.prototype.name = "HttpError"

Object.defineProperties(HttpError.prototype, {
  statusCode: alias("code"),
  statusMessage: alias("message"),

  status: {
    configurable: true,
    get: function() { return this.code },
    set: function(value) {
      Object.defineProperty(this, "status", {
        value: value, configurable: true, enumerable: true, writable: true
      })
    }
  }
})

HttpError.prototype.toString = function() {
  return this.name + ": " + this.code + " " + this.message
}

for (var code in STATUS_CODE_TO_NAME) {
  var name = STATUS_CODE_TO_NAME[code]
  exports[name.replace("'", "").replace(/[- ]/g, "_").toUpperCase()] = +code
}

function alias(name) {
  return {
    configurable: true,
    get: function() { return this[name] },
    set: function(value) { return this[name] = value }
  }
}


/***/ }),
/* 63 */
/***/ (function(module, exports) {

var has = Object.hasOwnProperty
var proto = Object.getPrototypeOf
var trace = Error.captureStackTrace
module.exports = StandardError

function StandardError(msg, props) {
  // Let all properties be enumerable for easier serialization.
  if (msg && typeof msg == "object") props = msg, msg = undefined
  else this.message = msg

  // Name has to be an own property (or on the prototype a single step up) for
  // the stack to be printed with the correct name.
  if (props) for (var key in props) this[key] = props[key]
  if (!has.call(this, "name"))
    this.name = has.call(proto(this), "name")? this.name : this.constructor.name

  if (trace && !("stack" in this)) trace(this, this.constructor)
}

StandardError.prototype = Object.create(Error.prototype, {
  constructor: {value: StandardError, configurable: true, writable: true}
})

// Set name explicitly for when the code gets minified.
StandardError.prototype.name = "StandardError"


/***/ }),
/* 64 */
/***/ (function(module) {

module.exports = JSON.parse("{\"100\":\"Continue\",\"101\":\"Switching Protocols\",\"102\":\"Processing\",\"200\":\"OK\",\"201\":\"Created\",\"202\":\"Accepted\",\"203\":\"Non-Authoritative Information\",\"204\":\"No Content\",\"205\":\"Reset Content\",\"206\":\"Partial Content\",\"207\":\"Multi-Status\",\"208\":\"Already Reported\",\"226\":\"IM Used\",\"300\":\"Multiple Choices\",\"301\":\"Moved Permanently\",\"302\":\"Found\",\"303\":\"See Other\",\"304\":\"Not Modified\",\"305\":\"Use Proxy\",\"307\":\"Temporary Redirect\",\"308\":\"Permanent Redirect\",\"400\":\"Bad Request\",\"401\":\"Unauthorized\",\"402\":\"Payment Required\",\"403\":\"Forbidden\",\"404\":\"Not Found\",\"405\":\"Method Not Allowed\",\"406\":\"Not Acceptable\",\"407\":\"Proxy Authentication Required\",\"408\":\"Request Timeout\",\"409\":\"Conflict\",\"410\":\"Gone\",\"411\":\"Length Required\",\"412\":\"Precondition Failed\",\"413\":\"Payload Too Large\",\"414\":\"URI Too Long\",\"415\":\"Unsupported Media Type\",\"416\":\"Range Not Satisfiable\",\"417\":\"Expectation Failed\",\"418\":\"I'm a teapot\",\"421\":\"Misdirected Request\",\"422\":\"Unprocessable Entity\",\"423\":\"Locked\",\"424\":\"Failed Dependency\",\"425\":\"Unordered Collection\",\"426\":\"Upgrade Required\",\"428\":\"Precondition Required\",\"429\":\"Too Many Requests\",\"431\":\"Request Header Fields Too Large\",\"500\":\"Internal Server Error\",\"501\":\"Not Implemented\",\"502\":\"Bad Gateway\",\"503\":\"Service Unavailable\",\"504\":\"Gateway Timeout\",\"505\":\"HTTP Version Not Supported\",\"506\":\"Variant Also Negotiates\",\"507\":\"Insufficient Storage\",\"508\":\"Loop Detected\",\"509\":\"Bandwidth Limit Exceeded\",\"510\":\"Not Extended\",\"511\":\"Network Authentication Required\"}");

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openIdpPopup", function() { return openIdpPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obtainSession", function() { return obtainSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupHandler", function() { return popupHandler; });
/* harmony import */ var _ipc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _url_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


function openIdpPopup(popupUri) {
  const width = 650;
  const height = 400;
  const left = window.screenX + (window.innerWidth - width) / 2;
  const top = window.screenY + (window.innerHeight - height) / 2;
  const settings = "width=".concat(width, ",height=").concat(height, ",left=").concat(left, ",top=").concat(top);
  return window.open(popupUri, 'solid-auth-client', settings);
}
function obtainSession(store, popup, options) {
  return new Promise((resolve, reject) => {
    const popupServer = new _ipc__WEBPACK_IMPORTED_MODULE_0__["Server"](popup, Object(_url_util__WEBPACK_IMPORTED_MODULE_1__["originOf"])(options.popupUri || ''), popupHandler(store, options, session => {
      popupServer.stop();
      resolve(session);
    }));
    popupServer.start();
  });
}
function popupHandler(store, {
  popupUri,
  callbackUri
}, foundSessionCb) {
  return async (method, ...args) => {
    switch (method) {
      // Origin
      case 'getAppOrigin':
        return window.location.origin;
      // Storage

      case 'storage/getItem':
        return store.getItem(...args);

      case 'storage/setItem':
        return store.setItem(...args);

      case 'storage/removeItem':
        return store.removeItem(...args);
      // Login

      case 'getLoginOptions':
        return {
          popupUri,
          callbackUri
        };

      case 'foundSession':
        foundSessionCb(...args);
    }
  };
}

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=solid-auth-client.bundle.js.map