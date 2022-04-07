(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"qiun-data-charts","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 11:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 116:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 117));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e23) {throw _e23;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e24) {didErr = true;err = _e24;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function s(e, t, s) {return e(s = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && s.path);} }, s.exports), s.exports;}var n = s(function (e, t) {var s;e.exports = (s = s || function (e, t) {var s = Object.create || function () {function e() {}return function (t) {var s;return e.prototype = t, s = new e(), e.prototype = null, s;};}(),n = {},r = n.lib = {},o = r.Base = { extend: function extend(e) {var t = s(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = r.WordArray = o.extend({ init: function init(e, s) {e = this.words = e || [], this.sigBytes = s != t ? s : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,s = e.words,n = this.sigBytes,r = e.sigBytes;if (this.clamp(), n % 4) for (var o = 0; o < r; o++) {var i = s[o >>> 2] >>> 24 - o % 4 * 8 & 255;t[n + o >>> 2] |= i << 24 - (n + o) % 4 * 8;} else for (o = 0; o < r; o += 4) {t[n + o >>> 2] = s[o >>> 2];}return this.sigBytes += r, this;}, clamp: function clamp() {var t = this.words,s = this.sigBytes;t[s >>> 2] &= 4294967295 << 32 - s % 4 * 8, t.length = e.ceil(s / 4);}, clone: function clone() {var e = o.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var s, n = [], r = function r(t) {t = t;var s = 987654321,n = 4294967295;return function () {var r = ((s = 36969 * (65535 & s) + (s >> 16) & n) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & n) & n;return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);};}, o = 0; o < t; o += 4) {var a = r(4294967296 * (s || e.random()));s = 987654071 * a(), n.push(4294967296 * a() | 0);}return new i.init(n, t);} }),a = n.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, s = e.sigBytes, n = [], r = 0; r < s; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));}return n.join("");}, parse: function parse(e) {for (var t = e.length, s = [], n = 0; n < t; n += 2) {s[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;}return new i.init(s, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, s = e.sigBytes, n = [], r = 0; r < s; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;n.push(String.fromCharCode(o));}return n.join("");}, parse: function parse(e) {for (var t = e.length, s = [], n = 0; n < t; n++) {s[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;}return new i.init(s, t);} },h = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },l = r.BufferedBlockAlgorithm = o.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var s = this._data,n = s.words,r = s.sigBytes,o = this.blockSize,a = r / (4 * o),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,u = e.min(4 * c, r);if (c) {for (var h = 0; h < c; h += o) {this._doProcessBlock(n, h);}var l = n.splice(0, c);s.sigBytes -= u;}return new i.init(l, u);}, clone: function clone() {var e = o.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 });r.Hasher = l.extend({ cfg: o.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {l.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, s) {return new e.init(s).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, s) {return new d.HMAC.init(e, s).finalize(t);};} });var d = n.algo = {};return n;}(Math), s);}),r = (s(function (e, t) {var s;e.exports = (s = n, function (e) {var t = s,n = t.lib,r = n.WordArray,o = n.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = o.extend({ _doReset: function _doReset() {this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var s = 0; s < 16; s++) {var n = t + s,r = e[n];e[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);}var o = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],w = e[t + 8],k = e[t + 9],S = e[t + 10],v = e[t + 11],T = e[t + 12],A = e[t + 13],P = e[t + 14],I = e[t + 15],b = o[0],E = o[1],O = o[2],C = o[3];b = u(b, E, O, C, i, 7, a[0]), C = u(C, b, E, O, c, 12, a[1]), O = u(O, C, b, E, f, 17, a[2]), E = u(E, O, C, b, p, 22, a[3]), b = u(b, E, O, C, g, 7, a[4]), C = u(C, b, E, O, m, 12, a[5]), O = u(O, C, b, E, y, 17, a[6]), E = u(E, O, C, b, _, 22, a[7]), b = u(b, E, O, C, w, 7, a[8]), C = u(C, b, E, O, k, 12, a[9]), O = u(O, C, b, E, S, 17, a[10]), E = u(E, O, C, b, v, 22, a[11]), b = u(b, E, O, C, T, 7, a[12]), C = u(C, b, E, O, A, 12, a[13]), O = u(O, C, b, E, P, 17, a[14]), b = h(b, E = u(E, O, C, b, I, 22, a[15]), O, C, c, 5, a[16]), C = h(C, b, E, O, y, 9, a[17]), O = h(O, C, b, E, v, 14, a[18]), E = h(E, O, C, b, i, 20, a[19]), b = h(b, E, O, C, m, 5, a[20]), C = h(C, b, E, O, S, 9, a[21]), O = h(O, C, b, E, I, 14, a[22]), E = h(E, O, C, b, g, 20, a[23]), b = h(b, E, O, C, k, 5, a[24]), C = h(C, b, E, O, P, 9, a[25]), O = h(O, C, b, E, p, 14, a[26]), E = h(E, O, C, b, w, 20, a[27]), b = h(b, E, O, C, A, 5, a[28]), C = h(C, b, E, O, f, 9, a[29]), O = h(O, C, b, E, _, 14, a[30]), b = l(b, E = h(E, O, C, b, T, 20, a[31]), O, C, m, 4, a[32]), C = l(C, b, E, O, w, 11, a[33]), O = l(O, C, b, E, v, 16, a[34]), E = l(E, O, C, b, P, 23, a[35]), b = l(b, E, O, C, c, 4, a[36]), C = l(C, b, E, O, g, 11, a[37]), O = l(O, C, b, E, _, 16, a[38]), E = l(E, O, C, b, S, 23, a[39]), b = l(b, E, O, C, A, 4, a[40]), C = l(C, b, E, O, i, 11, a[41]), O = l(O, C, b, E, p, 16, a[42]), E = l(E, O, C, b, y, 23, a[43]), b = l(b, E, O, C, k, 4, a[44]), C = l(C, b, E, O, T, 11, a[45]), O = l(O, C, b, E, I, 16, a[46]), b = d(b, E = l(E, O, C, b, f, 23, a[47]), O, C, i, 6, a[48]), C = d(C, b, E, O, _, 10, a[49]), O = d(O, C, b, E, P, 15, a[50]), E = d(E, O, C, b, m, 21, a[51]), b = d(b, E, O, C, T, 6, a[52]), C = d(C, b, E, O, p, 10, a[53]), O = d(O, C, b, E, S, 15, a[54]), E = d(E, O, C, b, c, 21, a[55]), b = d(b, E, O, C, w, 6, a[56]), C = d(C, b, E, O, I, 10, a[57]), O = d(O, C, b, E, y, 15, a[58]), E = d(E, O, C, b, A, 21, a[59]), b = d(b, E, O, C, g, 6, a[60]), C = d(C, b, E, O, v, 10, a[61]), O = d(O, C, b, E, f, 15, a[62]), E = d(E, O, C, b, k, 21, a[63]), o[0] = o[0] + b | 0, o[1] = o[1] + E | 0, o[2] = o[2] + O | 0, o[3] = o[3] + C | 0;}, _doFinalize: function _doFinalize() {var t = this._data,s = t.words,n = 8 * this._nDataBytes,r = 8 * t.sigBytes;s[r >>> 5] |= 128 << 24 - r % 32;var o = e.floor(n / 4294967296),i = n;s[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (s.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var h = c[u];c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);}return a;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, s, n, r, o, i) {var a = e + (t & s | ~t & n) + r + i;return (a << o | a >>> 32 - o) + t;}function h(e, t, s, n, r, o, i) {var a = e + (t & n | s & ~n) + r + i;return (a << o | a >>> 32 - o) + t;}function l(e, t, s, n, r, o, i) {var a = e + (t ^ s ^ n) + r + i;return (a << o | a >>> 32 - o) + t;}function d(e, t, s, n, r, o, i) {var a = e + (s ^ (t | ~n)) + r + i;return (a << o | a >>> 32 - o) + t;}t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);}(Math), s.MD5);}), s(function (e, t) {var s, r, o;e.exports = (r = (s = n).lib.Base, o = s.enc.Utf8, void (s.algo.HMAC = r.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));var s = e.blockSize,n = 4 * s;t.sigBytes > n && (t = e.finalize(t)), t.clamp();for (var r = this._oKey = t.clone(), i = this._iKey = t.clone(), a = r.words, c = i.words, u = 0; u < s; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}r.sigBytes = i.sigBytes = n, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,s = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(s));} })));}), s(function (e, t) {e.exports = n.HmacMD5;}));function o(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}function i(e) {return "object" === o(e);}var a = /*#__PURE__*/function (_Error) {_inherits(a, _Error);var _super = _createSuper(a);function a(e, t) {var _this;_classCallCheck(this, a);_this = _super.call(this, e), _this.code = t;return _this;}return a;}( /*#__PURE__*/_wrapNativeSuper(Error));function c(e) {return e && "string" == typeof e ? JSON.parse(e) : e;}var u = "development" === "development",h = "mp-weixin",l = c(undefined),d = c([{"provider":"aliyun","spaceName":"uni-cloud-charts","spaceId":"99f540ba-45fa-4210-8b58-b6bbede38247","clientSecret":"lpqhPY4WVSg4NkEVzaYJkw==","endpoint":"https://api.bspapp.com"}]),f = true;var p = "";try {{var _e2 = __webpack_require__(/*! uni-stat-config */ 120).default || __webpack_require__(/*! uni-stat-config */ 120);p = _e2.appid;}} catch (e) {}var g = {};function m(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var s, n;return s = g, n = e, Object.prototype.hasOwnProperty.call(s, n) || (g[e] = t), g[e];}"app-plus" === h && (g = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});var y = ["invoke", "success", "fail", "complete"],_ = m("_globalUniCloudInterceptor");function w(e, t) {_[e] || (_[e] = {}), i(t) && Object.keys(t).forEach(function (s) {y.indexOf(s) > -1 && function (e, t, s) {var n = _[e][t];n || (n = _[e][t] = []), -1 === n.indexOf(s) && "function" == typeof s && n.push(s);}(e, s, t[s]);});}function k(e, t) {_[e] || (_[e] = {}), i(t) ? Object.keys(t).forEach(function (s) {y.indexOf(s) > -1 && function (e, t, s) {var n = _[e][t];if (!n) return;var r = n.indexOf(s);r > -1 && n.splice(r, 1);}(e, s, t[s]);}) : delete _[e];}function S(e, t) {return e && 0 !== e.length ? e.reduce(function (e, s) {return e.then(function () {return s(t);});}, Promise.resolve()) : Promise.resolve();}function v(e, t) {return _[e] && _[e][t] || [];}function T(e, t) {return t ? function (s) {var _this2 = this;var n = "callFunction" === t && "DCloud-clientDB" === (s && s.name);var r;r = this.isReady ? Promise.resolve() : this.initUniCloud, s = s || {};var o = r.then(function () {return n ? Promise.resolve() : S(v(t, "invoke"), s);}).then(function () {return e.call(_this2, s);}).then(function (e) {return n ? Promise.resolve(e) : S(v(t, "success"), e).then(function () {return S(v(t, "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {return n ? Promise.reject(e) : S(v(t, "fail"), e).then(function () {return S(v(t, "complete"), e);}).then(function () {return Promise.reject(e);});});if (!(s.success || s.fail || s.complete)) return o;o.then(function (e) {s.success && s.success(e), s.complete && s.complete(e);}, function (e) {s.fail && s.fail(e), s.complete && s.complete(e);});} : function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var A = /*#__PURE__*/function (_Error2) {_inherits(A, _Error2);var _super2 = _createSuper(A);function A(e) {var _this3;_classCallCheck(this, A);_this3 = _super2.call(this, e.message), _this3.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this3), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this3;}return A;}( /*#__PURE__*/_wrapNativeSuper(Error));var P;function I() {var e = uni.getLocale && uni.getLocale() || "en";if (P) return _objectSpread(_objectSpread({}, P), {}, { LOCALE: e });var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),t = _uni$getSystemInfoSyn.deviceId,s = _uni$getSystemInfoSyn.platform;return P = { PLATFORM: h, OS: s, APPID: p, DEVICEID: t, CLIENT_SDK_VERSION: "1.0.17" }, _objectSpread(_objectSpread({}, P), {}, { LOCALE: e });}var b = { sign: function sign(e, t) {var s = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (s = s + "&" + t + "=" + e[t]);}), s = s.slice(1), r(s, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (s, n) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}), u && "h5" === h && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return n(new A({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var r = e.data;if (r.error) return n(new A({ code: r.error.code, message: r.error.message, requestId: t }));r.result = r.data, r.requestId = t, delete r.data, s(r);} }));});} };var E = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} },O = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };var _e3 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: O, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: O }, "zh-Hans"),C = _e3.t;var U = /*#__PURE__*/function () {function U(e) {_classCallCheck(this, U);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(C("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = E, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;}_createClass(U, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return b.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this4 = this;return Promise.resolve().then(function () {return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {return new Promise(function (e, s) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? s(t) : e();}).then(function () {return _this4.getAccessToken();}).then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});}) : _this4.getAccessToken().then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = b.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var s = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),n = { "Content-Type": "application/json" };return "auth" !== t && (s.token = this.accessToken, n["x-basement-token"] = this.accessToken), n["x-serverless-sign"] = b.sign(s, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: s, dataType: "json", header: n };} }, { key: "getAccessToken", value: function getAccessToken() {var _this5 = this;if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;this._getAccessTokenPromiseStatus = "pending";return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, s) {e.result && e.result.accessToken ? (_this5.setAccessToken(e.result.accessToken), _this5._getAccessTokenPromiseStatus = "fulfilled", t(_this5.accessToken)) : (_this5._getAccessTokenPromiseStatus = "rejected", s(new A({ code: "AUTH_FAILED", message: "获取accessToken失败" })));});}, function (e) {return _this5._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);}), this._getAccessTokenPromise;} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this6 = this;var e = _ref.url,t = _ref.formData,s = _ref.name,n = _ref.filePath,r = _ref.fileType,o = _ref.onUploadProgress;return new Promise(function (i, a) {var c = _this6.adapter.uploadFile({ url: e, formData: t, name: s, filePath: n, fileType: r, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new A({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new A({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this7 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,s = _ref2$fileType === void 0 ? "image" : _ref2$fileType,n = _ref2.onUploadProgress,r = _ref2.config;if ("string" !== o(t)) throw new A({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });if (!(t = t.trim())) throw new A({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });if (/:\/\//.test(t)) throw new A({ code: "INVALID_PARAM", message: "cloudPath不合法" });var i = r && r.envType || this.config.envType;var a, c;return this.getOSSUploadOptionsFromPath({ env: i, filename: t }).then(function (t) {var r = t.result;a = r.id, c = "https://" + r.cdnDomain + "/" + r.ossPath;var o = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: a, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: s };return _this7.uploadFileToOSS(Object.assign({}, o, { onUploadProgress: n }));}).then(function () {return _this7.reportOSSUpload({ id: a });}).then(function (t) {return new Promise(function (s, n) {t.success ? s({ success: !0, filePath: e, fileID: c }) : n(new A({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, s) {Array.isArray(e) && 0 !== e.length || s(new A({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return U;}();var x = { init: function init(e) {var t = new U(e),s = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return s;}, t.customAuth = t.auth, t;} };var D = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";var R;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(R || (R = {}));var q = function q() {};var F = function F() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t2 = function _t2() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: _t2 }), Object.defineProperty(e.promise, "catch", { get: _t2 }), e;}var t = new Promise(function (t, s) {e = function e(_e4, n) {return _e4 ? s(_e4) : t(n);};});return e.promise = t, e;};function L(e) {return void 0 === e;}function N(e) {return "[object Null]" === Object.prototype.toString.call(e);}var M;function $(e) {var t = (s = e, "[object Array]" === Object.prototype.toString.call(s) ? e : [e]);var s;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e5 = _step.value;var _t3 = _e5.isMatch,_s = _e5.genAdapter,_n = _e5.runtime;if (_t3()) return { adapter: _s(), runtime: _n };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(M || (M = {}));var j = { adapter: null, runtime: void 0 },B = ["anonymousUuidKey"];var K = /*#__PURE__*/function (_q) {_inherits(K, _q);var _super3 = _createSuper(K);function K() {var _this8;_classCallCheck(this, K);_this8 = _super3.call(this), j.adapter.root.tcbObject || (j.adapter.root.tcbObject = {});return _this8;}_createClass(K, [{ key: "setItem", value: function setItem(e, t) {j.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return j.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete j.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete j.adapter.root.tcbObject;} }]);return K;}(q);function H(e, t) {switch (e) {case "local":return t.localStorage || new K();case "none":return new K();default:return t.sessionStorage || new K();}}var W = /*#__PURE__*/function () {function W(e) {_classCallCheck(this, W);if (!this._storage) {this._persistence = j.adapter.primaryStorage || e.persistence, this._storage = H(this._persistence, j.adapter);var _t4 = "access_token_".concat(e.env),_s2 = "access_token_expire_".concat(e.env),_n2 = "refresh_token_".concat(e.env),_r = "anonymous_uuid_".concat(e.env),_o = "login_type_".concat(e.env),_i = "user_info_".concat(e.env);this.keys = { accessTokenKey: _t4, accessTokenExpireKey: _s2, refreshTokenKey: _n2, anonymousUuidKey: _r, loginTypeKey: _o, userInfoKey: _i };}}_createClass(W, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var s = H(e, j.adapter);for (var _e6 in this.keys) {var _n3 = this.keys[_e6];if (t && B.includes(_e6)) continue;var _r2 = this._storage.getItem(_n3);L(_r2) || N(_r2) || (s.setItem(_n3, _r2), this._storage.removeItem(_n3));}this._storage = s;} }, { key: "setStore", value: function setStore(e, t, s) {if (!this._storage) return;var n = { version: s || "localCachev1", content: t },r = JSON.stringify(n);try {this._storage.setItem(e, r);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var s = this._storage.getItem(e);if (!s) return "";if (s.indexOf(t) >= 0) {return JSON.parse(s).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return W;}();var z = {},J = {};function V(e) {return z[e];}var Y = function Y(e, t) {_classCallCheck(this, Y);this.data = t || null, this.name = e;};var X = /*#__PURE__*/function (_Y) {_inherits(X, _Y);var _super4 = _createSuper(X);function X(e, t) {var _this9;_classCallCheck(this, X);_this9 = _super4.call(this, "error", { error: e, data: t }), _this9.error = e;return _this9;}return X;}(Y);var G = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, s) {s[e] = s[e] || [], s[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, s) {if (s && s[e]) {var _n4 = s[e].indexOf(t);-1 !== _n4 && s[e].splice(_n4, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof X) return console.error(e.error), this;var s = "string" == typeof e ? new Y(e, t || {}) : e;var n = s.name;if (this._listens(n)) {s.target = this;var _e7 = this._listeners[n] ? _toConsumableArray(this._listeners[n]) : [];var _iterator2 = _createForOfIteratorHelper(_e7),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t5 = _step2.value;_t5.call(this, s);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function Q(e, t) {G.on(e, t);}function Z(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};G.fire(e, t);}function ee(e, t) {G.off(e, t);}var te = "loginStateChanged",se = "loginStateExpire",ne = "loginTypeChanged",re = "anonymousConverted",oe = "refreshAccessToken";var ie;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(ie || (ie = {}));var ae = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],ce = { "X-SDK-Version": "1.3.5" };function ue(e, t, s) {var n = e[t];e[t] = function (t) {var r = {},o = {};s.forEach(function (s) {var _s$call = s.call(e, t),n = _s$call.data,i = _s$call.headers;Object.assign(r, n), Object.assign(o, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), r);else for (var _e8 in r) {i.append(_e8, r[_e8]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), o), n.call(e, t);};}function he() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, ce), {}, { "x-seqid": e }) };}var le = /*#__PURE__*/function () {function le() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, le);var t;this.config = e, this._reqClass = new j.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = V(this.config.env), this._localCache = (t = this.config.env, J[t]), ue(this._reqClass, "post", [he]), ue(this._reqClass, "upload", [he]), ue(this._reqClass, "download", [he]);}_createClass(le, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var e, t;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this$_cache$keys, e, t, s, n, r, o, i, a, _e9, _e10, _t6, _n5;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, s = _this$_cache$keys.refreshTokenKey, n = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);o = this._cache.getStore(s);if (o) {_context5.next = 5;break;}throw new Error("未登录CloudBase");case 5:i = { refresh_token: o };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e9 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e9 || "REFRESH_TOKEN_EXPIRED" === _e9 || "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 20;break;}if (!(this._cache.getStore(n) === ie.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 19;break;}_e10 = this._cache.getStore(r);_t6 = this._cache.getStore(s);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e10, refresh_token: _t6 });case 17:_n5 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_n5.refresh_token), this._refreshAccessToken()));case 19:Z(se), this._cache.removeStore(s);case 20:throw new Error("\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code));case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (Z(oe), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(s), this._cache.setStore(s, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this$_cache$keys2, e, t, s, n, r, o;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, s = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(s)) {_context6.next = 3;break;}throw new Error("refresh token不存在，登录状态异常");case 3:n = this._cache.getStore(e), r = this._cache.getStore(t), o = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(n, r);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}o = !1;case 12:return _context6.abrupt("return", (!n || !r || r < Date.now()) && o ? this.refreshAccessToken() : { accessToken: n, accessTokenExpire: r });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, t, s) {var n, r, o, _e11, i, _e12, _e13, a, c, u, h, l, d, f, p, g;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:n = "x-tcb-trace_".concat(this.config.env);r = "application/x-www-form-urlencoded";o = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === ae.indexOf(e))) {_context7.next = 10;break;}_e11 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e11);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:o.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e12 in i) {i.hasOwnProperty(_e12) && void 0 !== i[_e12] && i.append(_e12, o[_e12]);}r = "multipart/form-data";} else {r = "application/json", i = {};for (_e13 in o) {void 0 !== o[_e13] && (i[_e13] = o[_e13]);}}a = { headers: { "content-type": r } };s && s.onUploadProgress && (a.onUploadProgress = s.onUploadProgress);c = this._localCache.getStore(n);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, h = t.inQuery, l = t.search;d = { env: this.config.env };u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));f = function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var n = /\?/.test(t);var r = "";for (var _e14 in s) {"" === r ? !n && (t += "?") : r += "&", r += "".concat(_e14, "=").concat(encodeURIComponent(s[_e14]));}return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);}(D, "//tcb-api.tencentcloudapi.com/web", d);l && (f += l);_context7.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:p = _context7.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(n, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context7.next = 26;break;}throw new Error("network request error");case 26:return _context7.abrupt("return", p);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e) {var t,s,_s3,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:s = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === s.data.code && -1 === ae.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_s3 = _context8.sent;if (!_s3.data.code) {_context8.next = 12;break;}throw new Error("[".concat(_s3.data.code, "] ").concat(_s3.data.message));case 12:return _context8.abrupt("return", _s3.data);case 13:if (!s.data.code) {_context8.next = 15;break;}throw new Error("[".concat(s.data.code, "] ").concat(s.data.message));case 15:return _context8.abrupt("return", s.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,s = _this$_cache$keys3.accessTokenExpireKey,n = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(s), this._cache.setStore(n, e);} }]);return le;}();var de = {};function fe(e) {return de[e];}var pe = /*#__PURE__*/function () {function pe(e) {_classCallCheck(this, pe);this.config = e, this._cache = V(e.env), this._request = fe(e.env);}_createClass(pe, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,s = _this$_cache$keys4.accessTokenExpireKey,n = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(s), this._cache.setStore(n, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,s = _this$_cache$keys5.accessTokenKey,n = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(s, e), this._cache.setStore(n, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return pe;}();var ge = /*#__PURE__*/function () {function ge(e) {_classCallCheck(this, ge);if (!e) throw new Error("envId is not defined");this._envId = e, this._cache = V(this._envId), this._request = fe(this._envId), this.setUserInfo();}_createClass(ge, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new Error("ticket must be string");return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new Error("username must be a string");return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var _yield$this$_request$2, e, t, s;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;s = e.users;return _context10.abrupt("return", (s.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: s, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {var t, s, n, r, o, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;s = e.gender;n = e.avatarUrl;r = e.province;o = e.country;i = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: s, avatarUrl: n, province: r, country: o, city: i });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this10 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this10[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return ge;}();var me = /*#__PURE__*/function () {function me(e) {_classCallCheck(this, me);if (!e) throw new Error("envId is not defined");this._cache = V(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,s = _this$_cache$keys6.accessTokenKey,n = _this$_cache$keys6.accessTokenExpireKey,r = this._cache.getStore(t),o = this._cache.getStore(s),i = this._cache.getStore(n);this.credential = { refreshToken: r, accessToken: o, accessTokenExpire: i }, this.user = new ge(e);}_createClass(me, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === ie.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === ie.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === ie.WECHAT || this.loginType === ie.WECHAT_OPEN || this.loginType === ie.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return me;}();var ye = /*#__PURE__*/function (_pe) {_inherits(ye, _pe);var _super5 = _createSuper(ye);function ye() {_classCallCheck(this, ye);return _super5.apply(this, arguments);}_createClass(ye, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var _this$_cache$keys7, e, t, s, n, r, _e15;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;s = this._cache.getStore(e) || void 0;n = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: s, refresh_token: n });case 8:r = _context13.sent;if (!(r.uuid && r.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(r.uuid);this.setRefreshToken(r.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:Z(te);Z(ne, { env: this.config.env, loginType: ie.ANONYMOUS, persistence: "local" });_e15 = new me(this.config.env);_context13.next = 19;return _e15.user.refresh();case 19:return _context13.abrupt("return", _e15);case 20:throw new Error("匿名登录失败");case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {var _this$_cache$keys8, t, s, n, r, o;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;s = _this$_cache$keys8.refreshTokenKey;n = this._cache.getStore(t);r = this._cache.getStore(s);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: n, refresh_token: r, ticket: e });case 7:o = _context14.sent;if (!o.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(o.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:Z(re, { env: this.config.env });Z(ne, { loginType: ie.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: o.refresh_token } });case 16:throw new Error("匿名转化失败");case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,s = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(s, ie.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return ye;}(pe);var _e = /*#__PURE__*/function (_pe2) {_inherits(_e, _pe2);var _super6 = _createSuper(_e);function _e() {_classCallCheck(this, _e);return _super6.apply(this, arguments);}_createClass(_e, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {var t, s;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new Error("ticket must be a string");case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:s = _context15.sent;if (!s.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(s.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:Z(te);Z(ne, { env: this.config.env, loginType: ie.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new me(this.config.env));case 15:throw new Error("自定义登录失败");case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return _e;}(pe);var we = /*#__PURE__*/function (_pe3) {_inherits(we, _pe3);var _super7 = _createSuper(we);function we() {_classCallCheck(this, we);return _super7.apply(this, arguments);}_createClass(we, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e, t) {var s, n, r, o, i;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new Error("email must be a string");case 2:s = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(s) || "" });case 5:n = _context16.sent;r = n.refresh_token;o = n.access_token;i = n.access_token_expire;if (!r) {_context16.next = 22;break;}this.setRefreshToken(r);if (!(o && i)) {_context16.next = 15;break;}this.setAccessToken(o, i);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:Z(te);Z(ne, { env: this.config.env, loginType: ie.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new me(this.config.env));case 22:throw n.code ? new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [".concat(n.code, "] ").concat(n.message)) : new Error("邮箱登录失败");case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return we;}(pe);var ke = /*#__PURE__*/function (_pe4) {_inherits(ke, _pe4);var _super8 = _createSuper(ke);function ke() {_classCallCheck(this, ke);return _super8.apply(this, arguments);}_createClass(ke, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {var s, n, r, o, i;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new Error("username must be a string");case 2:"string" != typeof t && (t = "", console.warn("password is empty"));s = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: ie.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(s) || "" });case 6:n = _context19.sent;r = n.refresh_token;o = n.access_token_expire;i = n.access_token;if (!r) {_context19.next = 23;break;}this.setRefreshToken(r);if (!(i && o)) {_context19.next = 16;break;}this.setAccessToken(i, o);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:Z(te);Z(ne, { env: this.config.env, loginType: ie.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new me(this.config.env));case 23:throw n.code ? new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [".concat(n.code, "] ").concat(n.message)) : new Error("用户名密码登录失败");case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return ke;}(pe);var Se = /*#__PURE__*/function () {function Se(e) {_classCallCheck(this, Se);this.config = e, this._cache = V(e.env), this._request = fe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Q(ne, this._onLoginTypeChanged);}_createClass(Se, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new ye(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new _e(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new we(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new ke(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new ye(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new we(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new ke(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new ye(this.config)), Q(re, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var _this$_cache$keys10, e, t, s, n, r;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === ie.ANONYMOUS)) {_context23.next = 2;break;}throw new Error("匿名用户不支持登出操作");case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, s = _this$_cache$keys10.accessTokenExpireKey, n = this._cache.getStore(e);if (n) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: n });case 7:r = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(s), Z(te), Z(ne, { env: this.config.env, loginType: ie.NULL, persistence: this.config.persistence }), r));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this11 = this;Q(te, function () {var t = _this11.hasLoginState();e.call(_this11, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {Q(se, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {Q(oe, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {Q(re, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this12 = this;Q(ne, function () {var t = _this12.hasLoginState();e.call(_this12, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new me(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new Error("username must be a string");case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new _e(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,s = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + s };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,s = _e$data.persistence,n = _e$data.env;n === this.config.env && (this._cache.updatePersistence(s), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Se;}();var ve = function ve(e, t) {t = t || F();var s = fe(this.config.env),n = e.cloudPath,r = e.filePath,o = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return s.send("storage.getUploadMetadata", { path: n }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,h = _e$data2.fileId,l = _e$data2.cosFileId,d = e.requestId,f = { key: n, signature: c, "x-cos-meta-fileid": l, success_action_status: "201", "x-cos-security-token": u };s.upload({ url: a, data: f, file: r, name: n, fileType: i, onUploadProgress: o }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: d }) : t(new Error("STORAGE_REQUEST_FAIL: ".concat(e.data)));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},Te = function Te(e, t) {t = t || F();var s = fe(this.config.env),n = e.cloudPath;return s.send("storage.getUploadMetadata", { path: n }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},Ae = function Ae(_ref5, t) {var e = _ref5.fileList;if (t = t || F(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t7 = _step3.value;if (!_t7 || "string" != typeof _t7) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var s = { fileid_list: e };return fe(this.config.env).send("storage.batchDeleteFile", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Pe = function Pe(_ref6, t) {var e = _ref6.fileList;t = t || F(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });var s = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _n6 = _step4.value;"object" == typeof _n6 ? (_n6.hasOwnProperty("fileID") && _n6.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), s.push({ fileid: _n6.fileID, max_age: _n6.maxAge })) : "string" == typeof _n6 ? s.push({ fileid: _n6 }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var n = { file_list: s };return fe(this.config.env).send("storage.batchGetDownloadUrl", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ie = /*#__PURE__*/function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(_ref7, t) {var e, s, n, r;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref7.fileID;_context29.next = 3;return Pe.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:s = _context29.sent.fileList[0];if (!("SUCCESS" !== s.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(s) : new Promise(function (e) {e(s);}));case 6:n = fe(this.config.env);r = s.download_url;if (!(r = encodeURI(r), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", n.download({ url: r }));case 10:_context29.t0 = t;_context29.next = 13;return n.download({ url: r });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function Ie(_x26, _x27) {return _ref8.apply(this, arguments);};}(),be = function be(_ref9, o) {var e = _ref9.name,t = _ref9.data,s = _ref9.query,n = _ref9.parse,r = _ref9.search;var i = o || F();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new Error("函数名不能为空"));var c = { inQuery: s, parse: n, search: r, function_name: e, request_data: a };return fe(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t8 = e.data.response_data;if (n) i(null, { result: _t8, requestId: e.requestId });else try {_t8 = JSON.parse(e.data.response_data), i(null, { result: _t8, requestId: e.requestId });} catch (e) {i(new Error("response data must be json"));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},Ee = { timeout: 15e3, persistence: "session" },Oe = {};var Ce = /*#__PURE__*/function () {function Ce(e) {_classCallCheck(this, Ce);this.config = e || this.config, this.authObj = void 0;}_createClass(Ce, [{ key: "init", value: function init(e) {switch (j.adapter || (this.requestClient = new j.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, Ee), e), !0) {case this.config.timeout > 6e5:console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;}return new Ce(this.config);} }, { key: "auth", value: function auth() {var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref10.persistence;if (this.authObj) return this.authObj;var t = e || j.adapter.primaryStorage || Ee.persistence;var s;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;z[t] = new W(e), J[t] = new W(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), s = this.config, de[s.env] = new le(s), this.authObj = new Se(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return Q.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return ee.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return be.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return Ae.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return Pe.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return Ie.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return ve.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return Te.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {Oe[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {var s;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:s = Oe[e];if (s) {_context30.next = 3;break;}throw Error("\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C"));case 3:_context30.next = 5;return s.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref11 = $(e) || {},t = _ref11.adapter,s = _ref11.runtime;t && (j.adapter = t), s && (j.runtime = s);} }]);return Ce;}();var Ue = new Ce();function xe(e, t, s) {void 0 === s && (s = {});var n = /\?/.test(t),r = "";for (var o in s) {"" === r ? !n && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(s[o]);}return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;}var De = /*#__PURE__*/function () {function De() {_classCallCheck(this, De);}_createClass(De, [{ key: "post", value: function post(e) {var t = e.url,s = e.data,n = e.headers;return new Promise(function (e, r) {E.request({ url: xe("https:", t), data: s, method: "POST", header: n, success: function success(t) {e(t);}, fail: function fail(e) {r(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, s) {var n = e.url,r = e.file,o = e.data,i = e.headers,a = e.fileType,c = E.uploadFile({ url: xe("https:", n), name: "file", formData: Object.assign({}, o), filePath: r, fileType: a, header: i, success: function success(e) {var s = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && o.success_action_status && (s.statusCode = parseInt(o.success_action_status, 10)), t(s);}, fail: function fail(e) {u && "mp-alipay" === h && console.warn("支付宝小程序开发工具上传腾讯云时无法准确判断是否上传成功，请使用真机测试"), s(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return De;}();var Re = { setItem: function setItem(e, t) {E.setStorageSync(e, t);}, getItem: function getItem(e) {return E.getStorageSync(e);}, removeItem: function removeItem(e) {E.removeStorageSync(e);}, clear: function clear() {E.clearStorageSync();} };var qe = { genAdapter: function genAdapter() {return { root: {}, reqClass: De, localStorage: Re, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };Ue.useAdapters(qe);var Fe = Ue,Le = Fe.init;Fe.init = function (e) {e.env = e.spaceId;var t = Le.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var s = t.auth;return t.auth = function (e) {var t = s.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = T(t[e]).bind(t);}), t;}, t.customAuth = t.auth, t;};var Ne = Fe;function Me() {return { token: E.getStorageSync("uni_id_token") || E.getStorageSync("uniIdToken"), tokenExpired: E.getStorageSync("uni_id_token_expired") };}function $e() {if (!u || "h5" !== h) return;uni.getStorageSync("__LAST_DCLOUD_APPID") !== p && (uni.setStorageSync("__LAST_DCLOUD_APPID", p), console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), E.removeStorageSync("uni_id_token"), E.removeStorageSync("uniIdToken"), E.removeStorageSync("uni_id_token_expired"));}var je = /*#__PURE__*/function (_U) {_inherits(je, _U);var _super9 = _createSuper(je);function je() {_classCallCheck(this, je);return _super9.apply(this, arguments);}_createClass(je, [{ key: "getAccessToken", value: function getAccessToken() {var _this13 = this;return new Promise(function (e, t) {var s = "Anonymous_Access_token";_this13.setAccessToken(s), e(s);});} }, { key: "setupRequest", value: function setupRequest(e, t) {var s = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),n = { "Content-Type": "application/json" };"auth" !== t && (s.token = this.accessToken, n["x-basement-token"] = this.accessToken), n["x-serverless-sign"] = b.sign(s, this.config.clientSecret);var r = I();n["x-client-info"] = JSON.stringify(r);var _Me = Me(),o = _Me.token;return n["x-client-token"] = o, { url: this.config.requestUrl, method: "POST", data: s, dataType: "json", header: JSON.parse(JSON.stringify(n)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref12) {var _this14 = this;var e = _ref12.url,t = _ref12.formData,s = _ref12.name,n = _ref12.filePath,r = _ref12.fileType,o = _ref12.onUploadProgress;return new Promise(function (i, a) {var c = _this14.adapter.uploadFile({ url: e, formData: t, name: s, filePath: n, fileType: r, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new A({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new A({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref13) {var _this15 = this;var e = _ref13.filePath,t = _ref13.cloudPath,_ref13$fileType = _ref13.fileType,s = _ref13$fileType === void 0 ? "image" : _ref13$fileType,n = _ref13.onUploadProgress;if (!t) throw new A({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var r;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,o = _t$result.url,i = _t$result.formData,a = _t$result.name;r = t.result.fileUrl;var c = { url: o, formData: i, name: a, filePath: e, fileType: s };return _this15.uploadFileToOSS(Object.assign({}, c, { onUploadProgress: n }));}).then(function () {return _this15.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (s, n) {t.success ? s({ success: !0, filePath: e, fileID: r }) : n(new A({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref14) {var e = _ref14.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref15.fileList;var t = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };return this.request(this.setupRequest(t));} }]);return je;}(U);var Be = { init: function init(e) {var t = new je(e),s = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return s;}, t.customAuth = t.auth, t;} };function Ke(_ref16) {var e = _ref16.data;var t;t = I();var s = JSON.parse(JSON.stringify(e || {}));if (Object.assign(s, { clientInfo: t }), !s.uniIdToken) {var _Me2 = Me(),_e16 = _Me2.token;_e16 && (s.uniIdToken = _e16);}return s;}function He(_ref17) {var _this16 = this;var e = _ref17.name,t = _ref17.data;var s = this.localAddress,n = this.localPort,r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],o = this.config.spaceId,i = "http://".concat(s, ":").concat(n, "/system/check-function"),a = "http://".concat(s, ":").concat(n, "/cloudfunctions/").concat(e);return new Promise(function (t, s) {E.request({ method: "POST", url: i, data: { name: e, platform: h, provider: r, spaceId: o }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref18.data;var _ref19 = e || {},t = _ref19.code,s = _ref19.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: s || "SYS_ERR" };}).then(function (_ref20) {var s = _ref20.code,n = _ref20.message;if (0 !== s) {switch (s) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(n || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e17 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e17), new Error(_e17);}case "SWITCH_TO_CLOUD":break;default:{var _e18 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(n, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e18), new Error(_e18);}}return _this16._originCallFunction({ name: e, data: t });}return new Promise(function (e, s) {var n = Ke.call(_this16, { data: t });E.request({ method: "POST", url: a, data: { provider: r, platform: h, param: n }, success: function success() {var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref21.statusCode,n = _ref21.data;return !t || t >= 400 ? s(new A({ code: n.code || "SYS_ERR", message: n.message || "request:fail" })) : e({ result: n });}, fail: function fail(e) {s(new A({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var We = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];var ze = /[\\^$.*+?()[\]{}|]/g,Je = RegExp(ze.source);function Ve(e, t, s) {return e.replace(new RegExp((n = t) && Je.test(n) ? n.replace(ze, "\\$&") : n, "g"), s);var n;}function Ye(_ref22) {var e = _ref22.functionName,t = _ref22.result,s = _ref22.logPvd;if (this.config.useDebugFunction && t && t.requestId) {var _n7 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t.requestId });console.log("[".concat(s, "-request]").concat(_n7, "[/").concat(s, "-request]"));}}function Xe(e) {var t = e.callFunction,s = function s(_s4) {var _this17 = this;var n = _s4.name;_s4.data = Ke.call(e, { data: _s4.data });var r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];return t.call(this, _s4).then(function (e) {return Ye.call(_this17, { functionName: n, result: e, logPvd: r }), Promise.resolve(e);}, function (e) {return Ye.call(_this17, { functionName: n, result: e, logPvd: r }), e && e.message && (e.message = function () {var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref23$message = _ref23.message,e = _ref23$message === void 0 ? "" : _ref23$message,_ref23$extraInfo = _ref23.extraInfo,t = _ref23$extraInfo === void 0 ? {} : _ref23$extraInfo,_ref23$formatter = _ref23.formatter,s = _ref23$formatter === void 0 ? [] : _ref23$formatter;for (var _n8 = 0; _n8 < s.length; _n8++) {var _s$_n = s[_n8],_r3 = _s$_n.rule,_o2 = _s$_n.content,i = _s$_n.mode,_a = e.match(_r3);if (!_a) continue;var _c = _o2;for (var _e19 = 1; _e19 < _a.length; _e19++) {_c = Ve(_c, "{$".concat(_e19, "}"), _a[_e19]);}for (var _e20 in t) {_c = Ve(_c, "{".concat(_e20, "}"), t[_e20]);}return "replace" === i ? _c : e + _c;}return e;}({ message: "[".concat(_s4.name, "]: ").concat(e.message), formatter: We, extraInfo: { functionName: n } })), Promise.reject(e);});};e.callFunction = function (t) {var n;return u && e.debugInfo && !e.debugInfo.forceRemote && d ? (e._originCallFunction || (e._originCallFunction = s), n = He.call(this, t)) : n = s.call(this, t), Object.defineProperty(n, "result", { get: function get() {return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), n;};}var Ge = Symbol("CLIENT_DB_INTERNAL");function Qe(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Ge, e.__ob__ = void 0, new Proxy(e, { get: function get(e, s, n) {return s in e || "string" != typeof s ? e[s] : t.get(e, s, n);} });}function Ze(e) {return { on: function on(t, s) {e[t] = e[t] || [], e[t].indexOf(s) > -1 || e[t].push(s);}, off: function off(t, s) {e[t] = e[t] || [];var n = e[t].indexOf(s);-1 !== n && e[t].splice(n, 1);} };}var et = ["db.Geo", "db.command", "command.aggregate"];function tt(e, t) {return et.indexOf("".concat(e, ".").concat(t)) > -1;}function st(e) {switch (o(e)) {case "array":return e.map(function (e) {return st(e);});case "object":return e._internalType === Ge || Object.keys(e).forEach(function (t) {e[t] = st(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}}var nt = /*#__PURE__*/function () {function nt(e, t, s) {_classCallCheck(this, nt);this.content = e, this.prevStage = t || null, this.udb = null, this._database = s;}_createClass(nt, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: st(e.$param) };}) };} }, { key: "getAction", value: function getAction() {var e = this.toJSON().$db.find(function (e) {return "action" === e.$method;});return e && e.$param && e.$param[0];} }, { key: "getCommand", value: function getCommand() {return { $db: this.toJSON().$db.filter(function (e) {return "action" !== e.$method;}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("clientDB禁止使用set方法");} }, { key: "_send", value: function _send(e, t) {var s = this.getAction(),n = this.getCommand();return n.$db.push({ $method: e, $param: st(t) }), this._database._callCloudFunction({ action: s, command: n });} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _s5 = e.content.$method;if ("aggregate" === _s5 || "pipeline" === _s5) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return rt({ $method: "count", $param: st(Array.from(arguments)) }, e, this._database);};} }]);return nt;}();function rt(e, t, s) {return Qe(new nt(e, t, s), { get: function get(e, t) {var n = "db";return e && e.content && (n = e.content.$method), tt(n, t) ? rt({ $method: t }, e, s) : function () {return rt({ $method: t, $param: st(Array.from(arguments)) }, e, s);};} });}function ot(_ref24) {var e = _ref24.path,t = _ref24.method;return /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);this.param = Array.from(arguments);}_createClass(_class2, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class2;}();}var it = /*#__PURE__*/function (_ref25) {_inherits(it, _ref25);var _super10 = _createSuper(it);function it() {_classCallCheck(this, it);return _super10.apply(this, arguments);}_createClass(it, [{ key: "_callCloudFunction", value: function _callCloudFunction(_ref26) {var _this18 = this;var e = _ref26.action,t = _ref26.command,s = _ref26.multiCommand,n = _ref26.queryList;function r(e) {if (s && n) for (var _t9 = 0; _t9 < n.length; _t9++) {var _s6 = n[_t9];_s6.udb && "function" == typeof _s6.udb.setResult && _s6.udb.setResult(e);}}var o = S(v("database", "invoke")),i = this._uniClient;return o.then(function () {return i.callFunction({ name: "DCloud-clientDB", data: { action: e, command: t, multiCommand: s } });}).then(function (e) {var _e$result = e.result,t = _e$result.code,s = _e$result.message,n = _e$result.token,o = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,i = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (i) for (var _e21 = 0; _e21 < i.length; _e21++) {var _i$_e = i[_e21],_t10 = _i$_e.level,_s7 = _i$_e.message,_n9 = _i$_e.detail,_r4 = console["app-plus" === h && "warn" === _t10 ? "error" : _t10] || console.log;var _o3 = "[System Info]" + _s7;_n9 && (_o3 = "".concat(_o3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_n9)), _r4(_o3);}if (t) {var _e22 = new a(s, t);return _this18._callback("error", [_e22]), Promise.reject(_e22);}n && o && (!function () {var _ref27 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref27.token,t = _ref27.tokenExpired;e && E.setStorageSync("uni_id_token", e), t && E.setStorageSync("uni_id_token_expired", t);}({ token: n, tokenExpired: o }), _this18._callbackAuth("refreshToken", [{ token: n, tokenExpired: o }]), _this18._callback("refreshToken", [{ token: n, tokenExpired: o }]));var c = e.result.affectedDocs;return "number" == typeof c && Object.defineProperty(e.result, "affectedDocs", { get: function get() {return console.warn("affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"), c;} }), S(v("database", "success"), e).then(function () {return S(v("database", "complete"), e);}).then(function () {return r(e), Promise.resolve(e);});}, function (e) {var t = new a(e.message, e.code || "SYSTEM_ERROR");return _this18._callback("error", [t]), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), S(v("database", "fail"), e).then(function () {return S(v("database", "complete"), e);}).then(function () {return r(e), Promise.reject(e);});});} }]);return it;}( /*#__PURE__*/function () {function _class3() {var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref28$uniClient = _ref28.uniClient,e = _ref28$uniClient === void 0 ? {} : _ref28$uniClient;_classCallCheck(this, _class3);this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = m("_globalUniCloudDatabaseCallback")), this.auth = Ze(this._authCallBacks), Object.assign(this, Ze(this._dbCallBacks)), this.env = Qe({}, { get: function get(e, t) {return { $env: t };} }), this.Geo = Qe({}, { get: function get(e, t) {return ot({ path: ["Geo"], method: t });} }), this.serverDate = ot({ path: [], method: "serverDate" }), this.RegExp = ot({ path: [], method: "RegExp" });}_createClass(_class3, [{ key: "getCloudEnv", value: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");return { $env: e.replace("$cloudEnv_", "") };} }, { key: "_callback", value: function _callback(e, t) {var s = this._dbCallBacks;s[e] && s[e].forEach(function (e) {e.apply(void 0, _toConsumableArray(t));});} }, { key: "_callbackAuth", value: function _callbackAuth(e, t) {var s = this._authCallBacks;s[e] && s[e].forEach(function (e) {e.apply(void 0, _toConsumableArray(t));});} }, { key: "multiSend", value: function multiSend() {var e = Array.from(arguments),t = e.map(function (e) {var t = e.getAction(),s = e.getCommand();if ("getTemp" !== s.$db[s.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");return { action: t, command: s };});return this._callCloudFunction({ multiCommand: t, queryList: e });} }]);return _class3;}());function at(e) {e.database = function (t) {if (t && Object.keys(t).length > 0) return e.init(t).database();if (this._database) return this._database;var s = function (e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};return Qe(new e(t), { get: function get(e, t) {return tt("db", t) ? rt({ $method: t }, null, e) : function () {return rt({ $method: t, $param: st(Array.from(arguments)) }, null, e);};} });}(it, { uniClient: e });return this._database = s, s;};}var ct;var ut = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ht = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;function lt() {var e = Me().token || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var s;try {s = JSON.parse((n = t[1], decodeURIComponent(ct(n).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);}var n;return s.tokenExpired = 1e3 * s.exp, delete s.exp, delete s.iat, s;}ct = "function" != typeof atob ? function (e) {if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ht.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");var t;e += "==".slice(2 - (3 & e.length));for (var s, n, r = "", o = 0; o < e.length;) {t = ut.indexOf(e.charAt(o++)) << 18 | ut.indexOf(e.charAt(o++)) << 12 | (s = ut.indexOf(e.charAt(o++))) << 6 | (n = ut.indexOf(e.charAt(o++))), r += 64 === s ? String.fromCharCode(t >> 16 & 255) : 64 === n ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);}return r;} : atob;var dt = t(s(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var s = "chooseAndUploadFile:ok",n = "chooseAndUploadFile:fail";function r(e, t) {return e.tempFiles.forEach(function (e, s) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + s + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function o(e, t, _ref29) {var n = _ref29.onChooseFile,r = _ref29.onUploadProgress;return t.then(function (e) {if (n) {var _t11 = n(e);if (void 0 !== _t11) return Promise.resolve(_t11).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: s, tempFilePaths: [], tempFiles: [] } : function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var r = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = s;var o = t.tempFiles,i = o.length;var a = 0;return new Promise(function (s) {for (; a < n;) {c();}function c() {var n = a++;if (n >= i) return void (!o.find(function (e) {return !e.url && !e.errMsg;}) && s(t));var u = o[n];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = n, e.tempFile = u, e.tempFilePath = u.path, r && r(e);} }).then(function (e) {u.url = e.fileID, n < i && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, n < i && c();});}});}(e, t, 5, r);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? o(e, function (e) {var t = e.count,s = e.sizeType,_e$sourceType = e.sourceType,o = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: s, sourceType: o, extension: i, success: function success(t) {e(r(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", n) });} });});}(t), t) : "video" === t.type ? o(e, function (e) {var t = e.camera,s = e.compressed,o = e.maxDuration,_e$sourceType2 = e.sourceType,i = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: s, maxDuration: o, sourceType: i, extension: a, success: function success(t) {var s = t.tempFilePath,n = t.duration,o = t.size,i = t.height,a = t.width;e(r({ errMsg: "chooseVideo:ok", tempFilePaths: [s], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: s, size: o, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: n, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", n) });} });});}(t), t) : o(e, function (e) {var t = e.count,s = e.extension;return new Promise(function (e, o) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return o({ errMsg: n + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });i({ type: "all", count: t, extension: s, success: function success(t) {e(r(t));}, fail: function fail(e) {o({ errMsg: e.errMsg.replace("chooseFile:fail", n) });} });});}(t), t);};};}));var ft = "manual";function pt(e) {return { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, spaceInfo: { type: Object, default: function _default() {return {};} }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this19 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this19[t]);}), e;}, function (e, t) {if (_this19.loadtime === ft) return;var s = !1;var n = [];for (var _r5 = 2; _r5 < e.length; _r5++) {e[_r5] !== t[_r5] && (n.push(e[_r5]), s = !0);}e[0] !== t[0] && (_this19.mixinDatacomPage.current = _this19.pageCurrent), _this19.mixinDatacomPage.size = _this19.pageSize, _this19.onMixinDatacomPropsChange(s, n);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this20 = this;var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref30$getone = _ref30.getone,e = _ref30$getone === void 0 ? !1 : _ref30$getone,t = _ref30.success,s = _ref30.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (s) {_this20.mixinDatacomLoading = !1;var _s$result = s.result,n = _s$result.data,r = _s$result.count;_this20.getcount && (_this20.mixinDatacomPage.count = r), _this20.mixinDatacomHasMore = n.length < _this20.pageSize;var o = e ? n.length ? n[0] : void 0 : n;_this20.mixinDatacomResData = o, t && t(o);}).catch(function (e) {_this20.mixinDatacomLoading = !1, _this20.mixinDatacomErrorMessage = e, s && s(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var _s8;var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var s = e.database(this.spaceInfo);var n = t.action || this.action;n && (s = s.action(n));var r = t.collection || this.collection;s = Array.isArray(r) ? (_s8 = s).collection.apply(_s8, _toConsumableArray(r)) : s.collection(r);var o = t.where || this.where;o && Object.keys(o).length && (s = s.where(o));var i = t.field || this.field;i && (s = s.field(i));var a = t.foreignKey || this.foreignKey;a && (s = s.foreignKey(a));var c = t.groupby || this.groupby;c && (s = s.groupBy(c));var u = t.groupField || this.groupField;u && (s = s.groupField(u));!0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (s = s.distinct());var h = t.orderby || this.orderby;h && (s = s.orderBy(h));var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), s = s.skip(d * (l - 1)).limit(d).get(m), s;} } };}function gt(_x30, _x31) {return _gt.apply(this, arguments);}function _gt() {_gt = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {var s, _e25, n;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:s = "http://".concat(e, ":").concat(t, "/system/ping");_context32.prev = 1;_context32.next = 4;return n = { url: s, timeout: 500 }, new Promise(function (e, t) {E.request(_objectSpread(_objectSpread({}, n), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e25 = _context32.sent;return _context32.abrupt("return", !(!_e25.data || 0 !== _e25.data.code));case 8:_context32.prev = 8;_context32.t0 = _context32["catch"](1);return _context32.abrupt("return", !1);case 11:case "end":return _context32.stop();}}}, _callee32, null, [[1, 8]]);}));return _gt.apply(this, arguments);}function mt(e) {if (e.initUniCloudStatus && "rejected" !== e.initUniCloudStatus) return;var t = Promise.resolve();var s;s = 1, t = new Promise(function (e, t) {setTimeout(function () {e();}, s);}), e.isReady = !1, e.isDefault = !1;var n = e.auth();e.initUniCloudStatus = "pending", e.initUniCloud = t.then(function () {return n.getLoginState();}).then(function (e) {return e ? Promise.resolve() : n.signInAnonymously();}).then(function () {if (!u) return Promise.resolve();if (u && e.debugInfo) {var _e$debugInfo = e.debugInfo,_t12 = _e$debugInfo.address,_s9 = _e$debugInfo.servePort;return function () {var _ref31 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {var s, _n10, _r6;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:_n10 = 0;case 1:if (!(_n10 < e.length)) {_context31.next = 11;break;}_r6 = e[_n10];_context31.next = 5;return gt(_r6, t);case 5:if (!_context31.sent) {_context31.next = 8;break;}s = _r6;return _context31.abrupt("break", 11);case 8:_n10++;_context31.next = 1;break;case 11:return _context31.abrupt("return", { address: s, port: t });case 12:case "end":return _context31.stop();}}}, _callee31);}));return function (_x32, _x33) {return _ref31.apply(this, arguments);};}()(_t12, _s9);}}).then(function () {var _ref32 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},t = _ref32.address,s = _ref32.port;if (!u) return Promise.resolve();if (t) e.localAddress = t, e.localPort = s;else if (e.debugInfo) {var _t13 = console["app-plus" === h ? "error" : "warn"];var _s10 = "";"remote" === e.debugInfo.initialLaunchType ? (e.debugInfo.forceRemote = !0, _s10 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs") : _s10 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs", "h5" === h && (_s10 += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), _t13(_s10);}}).then(function () {$e(), e.isReady = !0, e.initUniCloudStatus = "fulfilled";}).catch(function (t) {console.error(t), e.initUniCloudStatus = "rejected";});}var yt = new ( /*#__PURE__*/function () {function _class4() {_classCallCheck(this, _class4);}_createClass(_class4, [{ key: "init", value: function init(e) {var t = {};var s = !1 !== e.debugFunction && u && ("h5" === h && navigator.userAgent.indexOf("HBuilderX") > 0 || "app-plus" === h);switch (e.provider) {case "tencent":t = Ne.init(Object.assign(e, { useDebugFunction: s }));break;case "aliyun":t = x.init(Object.assign(e, { useDebugFunction: s }));break;case "private":t = Be.init(Object.assign(e, { useDebugFunction: s }));break;default:throw new Error("未提供正确的provider参数");}var n = l;u && n && !n.code && (t.debugInfo = n), mt(t), t.reInit = function () {mt(this);}, Xe(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {return t.call(this, e);};}(t), at(t), function (e) {e.getCurrentUserInfo = lt, e.chooseAndUploadFile = dt.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() {return pt(e);} });}(t);return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {if (!t[e]) return;var s = t[e];t[e] = function () {return t.reInit(), s.apply(t, Array.from(arguments));}, t[e] = T(t[e], e).bind(t);}), t.init = this.init, t;} }]);return _class4;}())();(function () {{var e = d;var t = {};if (1 === e.length) t = e[0], yt = yt.init(t), yt.isDefault = !0;else {var _t14 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"];var _s11;_s11 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : f ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t14.forEach(function (e) {yt[e] = function () {return console.error(_s11), Promise.reject(new A({ code: "SYS_ERR", message: _s11 }));};});}Object.assign(yt, { get mixinDatacom() {return pt(yt);} }), yt.addInterceptor = w, yt.removeInterceptor = k, u && "h5" === h && (window.uniCloud = yt);}})();var _t = yt;exports.default = _t;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 117:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 118);

/***/ }),

/***/ 118:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 119);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 119:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 120:
/*!***************************************************************************************************************************!*\
  !*** D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/qiun-data-charts（uni-modules）/pages.json?{"type":"stat"} ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__07B3D11" };exports.default = _default;

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ 26:
/*!***********************************************************************************************************************!*\
  !*** D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/qiun-data-charts（uni-modules）/mockdata/demodata.json ***!
  \***********************************************************************************************************************/
/*! exports provided: localdata, localdataB, TLine, Scatter, Bubble, Column, ColumnA, Mix, Line, Pie, PieA, Radar, Arcbar1, Arcbar2, Gauge, Candle, CandleColumn, Word, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"localdata\":[{\"value\":35,\"text\":\"2016\",\"group\":\"目标值\"},{\"value\":18,\"text\":\"2016\",\"group\":\"完成量\"},{\"value\":36,\"text\":\"2017\",\"group\":\"目标值\"},{\"value\":27,\"text\":\"2017\",\"group\":\"完成量\"},{\"value\":31,\"text\":\"2018\",\"group\":\"目标值\"},{\"value\":21,\"text\":\"2018\",\"group\":\"完成量\"},{\"value\":33,\"text\":\"2019\",\"group\":\"目标值\"},{\"value\":24,\"text\":\"2019\",\"group\":\"完成量\"},{\"value\":13,\"text\":\"2020\",\"group\":\"目标值\"},{\"value\":6,\"text\":\"2020\",\"group\":\"完成量\"},{\"value\":34,\"text\":\"2021\",\"group\":\"目标值\"},{\"value\":28,\"text\":\"2021\",\"group\":\"完成量\"}],\"localdataB\":[{\"value\":50,\"text\":\"一班\"},{\"value\":30,\"text\":\"二班\"},{\"value\":20,\"text\":\"三班\"},{\"value\":18,\"text\":\"四班\"},{\"value\":8,\"text\":\"五班\"}],\"TLine\":{\"series\":[{\"name\":\"时间轴1\",\"data\":[[10000,55],[30000,25],[50000,55],[70000,25],[90000,55]]},{\"name\":\"时间轴2\",\"data\":[[0,25],[20000,55],[40000,25],[60000,55],[80000,25]]},{\"name\":\"时间轴3\",\"data\":[[0,55],[15000,25],[30000,55],[45000,25],[60000,55]]}]},\"Scatter\":{\"series\":[{\"name\":\"散点一\",\"data\":[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82]]},{\"name\":\"散点二\",\"data\":[[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]]}]},\"Bubble\":{\"series\":[{\"name\":\"气泡一\",\"data\":[[95,95,23,\"标题1\"],[30,55,33,\"标题2\"]]},{\"name\":\"气泡二\",\"data\":[[130,30,30,\"标题3\"],[200,90,40,\"标题4\"]]}]},\"Column\":{\"categories\":[\"2016\",\"2017\",\"2018\",\"2019\",\"2020\",\"2021\"],\"series\":[{\"name\":\"目标值\",\"data\":[35,36,31,33,13,34]},{\"name\":\"完成量\",\"data\":[18,27,21,24,6,28]}]},\"ColumnA\":{\"categories\":[\"2016\",\"2017\",\"2018\",\"2019\",\"2020\",\"2021\"],\"series\":[{\"name\":\"成交量1\",\"data\":[15,{\"value\":20,\"color\":\"#f04864\"},45,37,43,34]},{\"name\":\"成交量2\",\"data\":[30,{\"value\":40,\"color\":\"#facc14\"},25,14,34,18]}]},\"Mix\":{\"categories\":[\"2016\",\"2017\",\"2018\",\"2019\",\"2020\",\"2021\"],\"series\":[{\"name\":\"曲面\",\"data\":[70,50,85,130,64,88],\"type\":\"area\",\"style\":\"curve\"},{\"name\":\"柱1\",\"index\":1,\"data\":[40,{\"value\":30,\"color\":\"#f04864\"},55,110,24,58],\"type\":\"column\"},{\"name\":\"柱2\",\"index\":1,\"data\":[50,20,75,60,34,38],\"type\":\"column\"},{\"name\":\"曲线\",\"data\":[70,50,85,130,64,88],\"type\":\"line\",\"style\":\"curve\",\"color\":\"#1890ff\",\"disableLegend\":true},{\"name\":\"折线\",\"data\":[120,140,105,170,95,160],\"type\":\"line\",\"color\":\"#2fc25b\"},{\"name\":\"点\",\"index\":2,\"data\":[100,80,125,150,112,132],\"type\":\"point\",\"color\":\"#f04864\"}]},\"Line\":{\"categories\":[\"2016\",\"2017\",\"2018\",\"2019\",\"2020\",\"2021\"],\"series\":[{\"name\":\"成交量A\",\"data\":[35,8,25,37,4,20]},{\"name\":\"成交量B\",\"data\":[70,40,65,100,44,68]},{\"name\":\"成交量C\",\"data\":[100,80,95,150,112,132]}]},\"Pie\":{\"series\":[{\"name\":\"一班\",\"data\":50},{\"name\":\"二班\",\"data\":30},{\"name\":\"三班\",\"data\":20},{\"name\":\"四班\",\"data\":18},{\"name\":\"五班\",\"data\":8}]},\"PieA\":{\"series\":[{\"data\":[{\"name\":\"一班\",\"value\":50},{\"name\":\"二班\",\"value\":30},{\"name\":\"三班\",\"value\":20},{\"name\":\"四班\",\"value\":18},{\"name\":\"五班\",\"value\":8}]}]},\"Radar\":{\"categories\":[\"维度1\",\"维度2\",\"维度3\",\"维度4\",\"维度5\",\"维度6\"],\"series\":[{\"name\":\"成交量1\",\"data\":[90,110,165,195,187,172]},{\"name\":\"成交量2\",\"data\":[190,210,105,35,27,102]}]},\"Arcbar1\":{\"series\":[{\"name\":\"正确率\",\"data\":0.8,\"color\":\"#2fc25b\"}]},\"Arcbar2\":{\"series\":[{\"name\":\"一班\",\"data\":0.8},{\"name\":\"二班\",\"data\":0.6},{\"name\":\"三班\",\"data\":0.45},{\"name\":\"四班\",\"data\":0.3},{\"name\":\"五班\",\"data\":0.15}]},\"Gauge\":{\"categories\":[{\"value\":0.2,\"color\":\"#1890ff\"},{\"value\":0.8,\"color\":\"#2fc25b\"},{\"value\":1,\"color\":\"#f04864\"}],\"series\":[{\"name\":\"完成率\",\"data\":0.66}]},\"Candle\":{\"categories\":[\"2020/1/24\",\"2020/1/25\",\"2020/1/28\",\"2020/1/29\",\"2020/1/30\",\"2020/1/31\",\"2020/2/1\",\"2020/2/4\",\"2020/2/5\",\"2020/2/6\",\"2020/2/7\",\"2020/2/8\",\"2020/2/18\",\"2020/2/19\",\"2020/2/20\",\"2020/2/21\",\"2020/2/22\",\"2020/2/25\",\"2020/2/26\",\"2020/2/27\",\"2020/2/28\",\"2020/3/1\",\"2020/3/4\",\"2020/3/5\",\"2020/3/6\",\"2020/3/7\",\"2020/3/8\",\"2020/3/11\",\"2020/3/12\",\"2020/3/13\",\"2020/3/14\",\"2020/3/15\",\"2020/3/18\",\"2020/3/19\",\"2020/3/20\",\"2020/3/21\",\"2020/3/22\",\"2020/3/25\",\"2020/3/26\",\"2020/3/27\",\"2020/3/28\",\"2020/3/29\",\"2020/4/1\",\"2020/4/2\",\"2020/4/3\",\"2020/4/8\",\"2020/4/9\",\"2020/4/10\",\"2020/4/11\",\"2020/4/12\",\"2020/4/15\",\"2020/4/16\",\"2020/4/17\",\"2020/4/18\",\"2020/4/19\",\"2020/4/22\",\"2020/4/23\",\"2020/4/24\",\"2020/4/25\",\"2020/4/26\",\"2020/5/2\",\"2020/5/3\",\"2020/5/6\",\"2020/5/7\",\"2020/5/8\",\"2020/5/9\",\"2020/5/10\",\"2020/5/13\",\"2020/5/14\",\"2020/5/15\",\"2020/5/16\",\"2020/5/17\",\"2020/5/20\",\"2020/5/21\",\"2020/5/22\",\"2020/5/23\",\"2020/5/24\",\"2020/5/27\",\"2020/5/28\",\"2020/5/29\",\"2020/5/30\",\"2020/5/31\",\"2020/6/3\",\"2020/6/4\",\"2020/6/5\",\"2020/6/6\",\"2020/6/7\",\"2020/6/13\"],\"series\":[{\"name\":\"上证指数\",\"data\":[[2320.26,2302.6,2287.3,2362.94],[2300,2291.3,2288.26,2308.38],[2295.35,2346.5,2295.35,2346.92],[2347.22,2358.98,2337.35,2363.8],[2360.75,2382.48,2347.89,2383.76],[2383.43,2385.42,2371.23,2391.82],[2377.41,2419.02,2369.57,2421.15],[2425.92,2428.15,2417.58,2440.38],[2411,2433.13,2403.3,2437.42],[2432.68,2434.48,2427.7,2441.73],[2430.69,2418.53,2394.22,2433.89],[2416.62,2432.4,2414.4,2443.03],[2441.91,2421.56,2415.43,2444.8],[2420.26,2382.91,2373.53,2427.07],[2383.49,2397.18,2370.61,2397.94],[2378.82,2325.95,2309.17,2378.82],[2322.94,2314.16,2308.76,2330.88],[2320.62,2325.82,2315.01,2338.78],[2313.74,2293.34,2289.89,2340.71],[2297.77,2313.22,2292.03,2324.63],[2322.32,2365.59,2308.92,2366.16],[2364.54,2359.51,2330.86,2369.65],[2332.08,2273.4,2259.25,2333.54],[2274.81,2326.31,2270.1,2328.14],[2333.61,2347.18,2321.6,2351.44],[2340.44,2324.29,2304.27,2352.02],[2326.42,2318.61,2314.59,2333.67],[2314.68,2310.59,2296.58,2320.96],[2309.16,2286.6,2264.83,2333.29],[2282.17,2263.97,2253.25,2286.33],[2255.77,2270.28,2253.31,2276.22],[2269.31,2278.4,2250,2312.08],[2267.29,2240.02,2239.21,2276.05],[2244.26,2257.43,2232.02,2261.31],[2257.74,2317.37,2257.42,2317.86],[2318.21,2324.24,2311.6,2330.81],[2321.4,2328.28,2314.97,2332],[2334.74,2326.72,2319.91,2344.89],[2318.58,2297.67,2281.12,2319.99],[2299.38,2301.26,2289,2323.48],[2273.55,2236.3,2232.91,2273.55],[2238.49,2236.62,2228.81,2246.87],[2229.46,2234.4,2227.31,2243.95],[2234.9,2227.74,2220.44,2253.42],[2232.69,2225.29,2217.25,2241.34],[2196.24,2211.59,2180.67,2212.59],[2215.47,2225.77,2215.47,2234.73],[2224.93,2226.13,2212.56,2233.04],[2236.98,2219.55,2217.26,2242.48],[2218.09,2206.78,2204.44,2226.26],[2199.91,2181.94,2177.39,2204.99],[2169.63,2194.85,2165.78,2196.43],[2195.03,2193.8,2178.47,2197.51],[2181.82,2197.6,2175.44,2206.03],[2201.12,2244.64,2200.58,2250.11],[2236.4,2242.17,2232.26,2245.12],[2242.62,2184.54,2182.81,2242.62],[2187.35,2218.32,2184.11,2226.12],[2213.19,2199.31,2191.85,2224.63],[2203.89,2177.91,2173.86,2210.58],[2170.78,2174.12,2161.14,2179.65],[2179.05,2205.5,2179.05,2222.81],[2212.5,2231.17,2212.5,2236.07],[2227.86,2235.57,2219.44,2240.26],[2242.39,2246.3,2235.42,2255.21],[2246.96,2232.97,2221.38,2247.86],[2228.82,2246.83,2225.81,2247.67],[2247.68,2241.92,2231.36,2250.85],[2238.9,2217.01,2205.87,2239.93],[2217.09,2224.8,2213.58,2225.19],[2221.34,2251.81,2210.77,2252.87],[2249.81,2282.87,2248.41,2288.09],[2286.33,2299.99,2281.9,2309.39],[2297.11,2305.11,2290.12,2305.3],[2303.75,2302.4,2292.43,2314.18],[2293.81,2275.67,2274.1,2304.95],[2281.45,2288.53,2270.25,2292.59],[2286.66,2293.08,2283.94,2301.7],[2293.4,2321.32,2281.47,2322.1],[2323.54,2324.02,2321.17,2334.33],[2316.25,2317.75,2310.49,2325.72],[2320.74,2300.59,2299.37,2325.53],[2300.21,2299.25,2294.11,2313.43],[2297.1,2272.42,2264.76,2297.1],[2270.71,2270.93,2260.87,2276.86],[2264.43,2242.11,2240.07,2266.69],[2242.26,2210.9,2205.07,2250.63],[2190.1,2148.35,2126.22,2190.1]]}]},\"CandleColumn\":{\"categories\":[\"2020/1/24\",\"2020/1/25\",\"2020/1/28\",\"2020/1/29\",\"2020/1/30\",\"2020/1/31\",\"2020/2/1\",\"2020/2/4\",\"2020/2/5\",\"2020/2/6\",\"2020/2/7\",\"2020/2/8\",\"2020/2/18\",\"2020/2/19\",\"2020/2/20\",\"2020/2/21\",\"2020/2/22\",\"2020/2/25\",\"2020/2/26\",\"2020/2/27\",\"2020/2/28\",\"2020/3/1\",\"2020/3/4\",\"2020/3/5\",\"2020/3/6\",\"2020/3/7\",\"2020/3/8\",\"2020/3/11\",\"2020/3/12\",\"2020/3/13\",\"2020/3/14\",\"2020/3/15\",\"2020/3/18\",\"2020/3/19\",\"2020/3/20\",\"2020/3/21\",\"2020/3/22\",\"2020/3/25\",\"2020/3/26\",\"2020/3/27\",\"2020/3/28\",\"2020/3/29\",\"2020/4/1\",\"2020/4/2\",\"2020/4/3\",\"2020/4/8\",\"2020/4/9\",\"2020/4/10\",\"2020/4/11\",\"2020/4/12\",\"2020/4/15\",\"2020/4/16\",\"2020/4/17\",\"2020/4/18\",\"2020/4/19\",\"2020/4/22\",\"2020/4/23\",\"2020/4/24\",\"2020/4/25\",\"2020/4/26\",\"2020/5/2\",\"2020/5/3\",\"2020/5/6\",\"2020/5/7\",\"2020/5/8\",\"2020/5/9\",\"2020/5/10\",\"2020/5/13\",\"2020/5/14\",\"2020/5/15\",\"2020/5/16\",\"2020/5/17\",\"2020/5/20\",\"2020/5/21\",\"2020/5/22\",\"2020/5/23\",\"2020/5/24\",\"2020/5/27\",\"2020/5/28\",\"2020/5/29\",\"2020/5/30\",\"2020/5/31\",\"2020/6/3\",\"2020/6/4\",\"2020/6/5\",\"2020/6/6\",\"2020/6/7\",\"2020/6/13\"],\"series\":[{\"name\":\"成交量1\",\"data\":[15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45,37,43,15,20,45]}]},\"Word\":{\"series\":[{\"name\":\"跨全端图表\",\"textSize\":25},{\"name\":\"微信小程序\",\"textSize\":20},{\"name\":\"支付宝小程序\",\"textSize\":20},{\"name\":\"百度小程序\",\"textSize\":20},{\"name\":\"QQ小程序\",\"textSize\":20},{\"name\":\"头条小程序\",\"textSize\":20},{\"name\":\"抖音小程序\",\"textSize\":20},{\"name\":\"360小程序\",\"textSize\":20},{\"name\":\"跨全端\",\"textSize\":10},{\"name\":\"跨全端\",\"textSize\":12},{\"name\":\"跨全端\",\"textSize\":10},{\"name\":\"跨全端\",\"textSize\":12},{\"name\":\"跨全端\",\"textSize\":10},{\"name\":\"跨全端\",\"textSize\":12},{\"name\":\"跨全端\",\"textSize\":10},{\"name\":\"跨全端\",\"textSize\":12}]}}");

/***/ }),

/***/ 27:
/*!**********************************************************************************************************************!*\
  !*** D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/qiun-data-charts（uni-modules）/mockdata/mapdata.json ***!
  \**********************************************************************************************************************/
/*! exports provided: type, features, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"properties\":{\"adcode\":110000,\"name\":\"北京\",\"center\":[116.405285,39.904989],\"centroid\":[116.41989,40.189913],\"childrenNum\":16,\"level\":\"province\",\"subFeatureIndex\":0,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[117.210024,40.082262],[117.105315,40.074479],[117.105315,40.074479],[117.102851,40.073563],[117.102235,40.073105],[117.102235,40.073105],[117.102851,40.073563],[116.999989,40.030053],[116.927924,40.054788],[116.783794,40.035093],[116.757925,39.968176],[116.786874,39.886963],[116.926076,39.835524],[116.949482,39.778529],[116.902055,39.763813],[116.90575,39.687883],[116.812128,39.616018],[116.717273,39.603572],[116.717273,39.603572],[116.720969,39.599884],[116.720969,39.599884],[116.726512,39.595274],[116.726512,39.595274],[116.703106,39.588819],[116.703106,39.588819],[116.607636,39.619705],[116.524484,39.596657],[116.440716,39.527466],[116.433325,39.44296],[116.332927,39.457744],[116.245464,39.515466],[116.204196,39.588819],[116.10195,39.576368],[116.10195,39.576368],[115.957204,39.561147],[115.910393,39.600345],[115.910393,39.600345],[115.855574,39.554689],[115.855574,39.554689],[115.846951,39.550999],[115.846951,39.550999],[115.821081,39.517312],[115.821081,39.517312],[115.752712,39.512696],[115.752712,39.512696],[115.738545,39.539464],[115.738545,39.539925],[115.738545,39.539464],[115.738545,39.539925],[115.737314,39.544078],[115.737314,39.544078],[115.723763,39.544539],[115.723763,39.544539],[115.721299,39.543617],[115.721299,39.543617],[115.721299,39.55146],[115.721299,39.55146],[115.716988,39.560225],[115.716988,39.560225],[115.699125,39.577751],[115.698509,39.577751],[115.698509,39.577751],[115.699125,39.577751],[115.698509,39.577751],[115.69543,39.579135],[115.69543,39.579135],[115.586408,39.58928],[115.478619,39.650578],[115.478619,39.650578],[115.498945,39.69617],[115.498945,39.69617],[115.443511,39.785426],[115.443511,39.785426],[115.567314,39.816224],[115.514344,39.837821],[115.522967,39.898898],[115.426264,39.95029],[115.454597,40.029595],[115.599343,40.11979],[115.73485,40.129398],[115.773038,40.176044],[115.85311,40.148609],[115.89869,40.234536],[115.968907,40.264219],[115.9184,40.354103],[115.861733,40.364589],[115.861733,40.364589],[115.779197,40.442501],[115.755792,40.540333],[115.907929,40.617133],[116.005247,40.58397],[116.088399,40.62667],[116.22021,40.744181],[116.247311,40.791762],[116.464738,40.771827],[116.334159,40.90446],[116.473977,40.895867],[116.455499,40.98084],[116.519557,40.981292],[116.519557,40.981292],[116.599013,40.974516],[116.615643,41.053072],[116.688324,41.044499],[116.677853,40.970902],[116.730208,40.897676],[116.858323,40.833423],[116.964881,40.70972],[117.110858,40.70836],[117.286401,40.660719],[117.386799,40.684317],[117.49582,40.674334],[117.389879,40.5617],[117.344299,40.582152],[117.213104,40.512136],[117.225423,40.369148],[117.309191,40.279284],[117.309807,40.279284],[117.309191,40.279284],[117.309807,40.279284],[117.389879,40.228141],[117.367089,40.172387],[117.367089,40.172844],[117.367089,40.173301],[117.367089,40.173301],[117.367089,40.172844],[117.367089,40.172387],[117.344299,40.13443],[117.210024,40.082262]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":120000,\"name\":\"天津\",\"center\":[117.190182,39.125596],\"centroid\":[117.351154,39.28914],\"childrenNum\":16,\"level\":\"province\",\"subFeatureIndex\":1,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[117.210024,40.082262],[117.344299,40.13443],[117.367089,40.172387],[117.367089,40.172844],[117.367089,40.173301],[117.367089,40.173301],[117.367089,40.172844],[117.367089,40.172387],[117.389879,40.228141],[117.450857,40.252347],[117.571581,40.21809],[117.652269,40.12345],[117.652269,40.12345],[117.651037,40.122535],[117.651037,40.122535],[117.71879,40.082262],[117.71879,40.082262],[117.75821,40.073563],[117.75821,40.073563],[117.782232,39.968634],[117.614697,39.972303],[117.589443,39.997059],[117.513067,39.910373],[117.513067,39.910373],[117.537704,39.835064],[117.537704,39.835064],[117.540784,39.822658],[117.540784,39.822658],[117.57774,39.727009],[117.644262,39.702155],[117.66274,39.636295],[117.619008,39.603111],[117.736037,39.560686],[117.736037,39.560686],[117.74774,39.58928],[117.866,39.596657],[117.933753,39.574062],[117.870311,39.454972],[117.846906,39.328274],[117.972557,39.312536],[117.972557,39.312536],[117.982412,39.298647],[117.982412,39.298647],[118.021833,39.287071],[118.021833,39.287071],[118.024296,39.289386],[118.024296,39.289386],[118.024912,39.292164],[118.024912,39.292164],[118.037231,39.220353],[117.871543,39.122479],[117.837667,39.056999],[117.855529,38.957502],[117.898029,38.948661],[117.847522,38.855535],[117.778536,38.869046],[117.64611,38.828972],[117.646725,38.788875],[117.740964,38.753888],[117.729261,38.680127],[117.639334,38.62686],[117.47919,38.617043],[117.39419,38.573553],[117.252524,38.556711],[117.213104,38.639947],[117.213104,38.639947],[117.176764,38.617978],[117.176764,38.617978],[117.097924,38.587118],[117.042489,38.706279],[116.95133,38.689468],[116.947634,38.689468],[116.947634,38.689468],[116.950714,38.689468],[116.95133,38.689468],[116.950714,38.689468],[116.877417,38.680594],[116.858939,38.741289],[116.766548,38.742222],[116.737599,38.784677],[116.708034,38.931907],[116.783179,39.050959],[116.783179,39.050959],[116.812744,39.050959],[116.812744,39.050959],[116.912526,39.110873],[116.91191,39.111338],[116.91191,39.111338],[116.912526,39.110873],[116.865714,39.155428],[116.865714,39.155428],[116.892816,39.224061],[116.870642,39.357426],[116.796113,39.446656],[116.812128,39.616018],[116.90575,39.687883],[116.916837,39.703996],[116.916837,39.703996],[116.983975,39.63906],[116.983975,39.63906],[117.126873,39.61694],[117.177996,39.64551],[117.165061,39.718725],[117.165061,39.718725],[117.205713,39.763813],[117.156438,39.817603],[117.229735,39.852981],[117.152126,39.878239],[117.150894,39.944785],[117.198322,39.992933],[117.210024,40.082262]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":130000,\"name\":\"河北\",\"center\":[114.502461,38.045474],\"centroid\":[115.4004,37.9688],\"childrenNum\":11,\"level\":\"province\",\"subFeatureIndex\":2,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[117.389879,40.228141],[117.309807,40.279284],[117.309191,40.279284],[117.309807,40.279284],[117.309191,40.279284],[117.225423,40.369148],[117.213104,40.512136],[117.344299,40.582152],[117.389879,40.5617],[117.49582,40.674334],[117.386799,40.684317],[117.286401,40.660719],[117.110858,40.70836],[116.964881,40.70972],[116.858323,40.833423],[116.730208,40.897676],[116.677853,40.970902],[116.688324,41.044499],[116.615643,41.053072],[116.599013,40.974516],[116.519557,40.981292],[116.519557,40.981292],[116.455499,40.98084],[116.473977,40.895867],[116.334159,40.90446],[116.464738,40.771827],[116.247311,40.791762],[116.22021,40.744181],[116.088399,40.62667],[116.005247,40.58397],[115.907929,40.617133],[115.755792,40.540333],[115.779197,40.442501],[115.861733,40.364589],[115.861733,40.364589],[115.9184,40.354103],[115.968907,40.264219],[115.89869,40.234536],[115.85311,40.148609],[115.773038,40.176044],[115.73485,40.129398],[115.599343,40.11979],[115.454597,40.029595],[115.426264,39.95029],[115.522967,39.898898],[115.514344,39.837821],[115.567314,39.816224],[115.443511,39.785426],[115.443511,39.785426],[115.498945,39.69617],[115.498945,39.69617],[115.478619,39.650578],[115.478619,39.650578],[115.586408,39.58928],[115.69543,39.579135],[115.69543,39.579135],[115.698509,39.577751],[115.699125,39.577751],[115.698509,39.577751],[115.698509,39.577751],[115.699125,39.577751],[115.716988,39.560225],[115.716988,39.560225],[115.721299,39.55146],[115.721299,39.55146],[115.721299,39.543617],[115.721299,39.543617],[115.723763,39.544539],[115.723763,39.544539],[115.737314,39.544078],[115.737314,39.544078],[115.738545,39.539925],[115.738545,39.539464],[115.738545,39.539925],[115.738545,39.539464],[115.752712,39.512696],[115.752712,39.512696],[115.821081,39.517312],[115.821081,39.517312],[115.846951,39.550999],[115.846951,39.550999],[115.855574,39.554689],[115.855574,39.554689],[115.910393,39.600345],[115.910393,39.600345],[115.957204,39.561147],[116.10195,39.576368],[116.10195,39.576368],[116.204196,39.588819],[116.245464,39.515466],[116.332927,39.457744],[116.433325,39.44296],[116.440716,39.527466],[116.524484,39.596657],[116.607636,39.619705],[116.703106,39.588819],[116.703106,39.588819],[116.726512,39.595274],[116.726512,39.595274],[116.720969,39.599884],[116.720969,39.599884],[116.717273,39.603572],[116.717273,39.603572],[116.812128,39.616018],[116.796113,39.446656],[116.870642,39.357426],[116.892816,39.224061],[116.865714,39.155428],[116.865714,39.155428],[116.912526,39.110873],[116.91191,39.111338],[116.91191,39.111338],[116.912526,39.110873],[116.812744,39.050959],[116.812744,39.050959],[116.783179,39.050959],[116.783179,39.050959],[116.708034,38.931907],[116.737599,38.784677],[116.766548,38.742222],[116.858939,38.741289],[116.877417,38.680594],[116.950714,38.689468],[116.95133,38.689468],[116.950714,38.689468],[116.947634,38.689468],[116.947634,38.689468],[116.95133,38.689468],[117.042489,38.706279],[117.097924,38.587118],[117.176764,38.617978],[117.176764,38.617978],[117.213104,38.639947],[117.213104,38.639947],[117.252524,38.556711],[117.39419,38.573553],[117.47919,38.617043],[117.639334,38.62686],[117.638102,38.545013],[117.781,38.374004],[117.937449,38.387606],[117.895565,38.30173],[117.808718,38.228445],[117.771761,38.136734],[117.70216,38.075529],[117.5839,38.070819],[117.513067,37.94353],[117.438538,37.853823],[117.34122,37.863271],[117.267923,37.838704],[117.093612,37.849571],[117.023395,37.832561],[116.788106,37.843429],[116.724664,37.744139],[116.433941,37.47349],[116.38097,37.522858],[116.379738,37.521909],[116.38097,37.522858],[116.379738,37.521909],[116.337238,37.580255],[116.291659,37.557966],[116.27626,37.466841],[116.240536,37.489633],[116.240536,37.489633],[116.226369,37.428365],[116.2855,37.404604],[116.236224,37.361816],[116.169087,37.384164],[116.051443,37.367998],[115.984921,37.326616],[115.969523,37.239497],[115.909777,37.206622],[115.868509,37.076414],[115.776734,36.992829],[115.79706,36.968931],[115.71206,36.883313],[115.683727,36.808139],[115.479851,36.76022],[115.365902,36.622043],[115.283366,36.486505],[115.308004,36.461967],[115.308004,36.461967],[115.366518,36.308793],[115.466916,36.259115],[115.466916,36.259115],[115.483547,36.149036],[115.312931,36.088137],[115.201446,36.210371],[115.201446,36.210371],[115.064092,36.178985],[114.996955,36.06831],[114.914419,36.051865],[114.912571,36.140339],[114.591666,36.130192],[114.345291,36.255738],[114.169132,36.243675],[114.169132,36.243675],[114.060727,36.276482],[114.055799,36.330005],[113.982502,36.358921],[113.911054,36.314578],[113.881488,36.354102],[113.819894,36.330969],[113.731199,36.363257],[113.708409,36.423461],[113.554425,36.494682],[113.588301,36.562955],[113.476816,36.655171],[113.499606,36.740564],[113.680692,36.789933],[113.696707,36.882356],[113.773083,36.855072],[113.76138,36.956022],[113.791561,36.987572],[113.758301,37.075459],[113.773083,37.1518],[113.832213,37.167536],[113.90243,37.309962],[114.014531,37.424564],[114.036705,37.49438],[114.123553,37.60159],[114.12848,37.698231],[113.993589,37.706752],[114.044712,37.762116],[113.976959,37.816965],[113.951706,37.917573],[113.872249,37.990228],[113.876561,38.055273],[113.810039,38.112729],[113.825438,38.169199],[113.720728,38.174843],[113.711489,38.213873],[113.570439,38.237375],[113.525475,38.382916],[113.583374,38.459793],[113.561816,38.558115],[113.612939,38.646022],[113.70225,38.65163],[113.720728,38.713283],[113.839605,38.758554],[113.855619,38.828972],[113.776163,38.885814],[113.76754,38.959828],[113.898119,39.067684],[114.050872,39.135939],[114.10877,39.052352],[114.345907,39.075116],[114.388406,39.176767],[114.47587,39.216181],[114.416124,39.243063],[114.480797,39.350023],[114.470942,39.408759],[114.568877,39.574062],[114.408117,39.65196],[114.395182,39.867218],[114.225183,39.857114],[114.17406,39.897521],[114.047176,39.916339],[114.021307,39.992017],[113.910438,40.011725],[113.956017,40.031428],[113.989278,40.112469],[114.044712,40.05662],[114.101995,40.099655],[114.073046,40.168729],[114.073046,40.168729],[114.235654,40.198442],[114.255364,40.236363],[114.46971,40.267872],[114.530688,40.344983],[114.446305,40.372795],[114.31203,40.372795],[114.267066,40.474369],[114.283081,40.590785],[114.209168,40.629848],[114.134639,40.737381],[114.044712,40.83116],[114.073661,40.857412],[113.973263,40.983099],[113.819279,41.097726],[113.920293,41.172081],[113.996669,41.192345],[113.927068,41.326829],[113.94493,41.39105],[113.871017,41.41349],[113.930764,41.485693],[114.100147,41.537218],[114.230726,41.513477],[114.203009,41.793334],[114.34837,41.947049],[114.510978,41.973299],[114.466015,42.038656],[114.510978,42.111047],[114.765361,42.118593],[114.828803,42.147434],[114.9021,42.015544],[114.922426,41.824999],[114.866991,41.803147],[114.899636,41.756299],[114.895325,41.636567],[114.862064,41.603915],[115.0992,41.624045],[115.252569,41.579303],[115.376989,41.602126],[115.319091,41.691546],[115.654162,41.829011],[115.811226,41.912328],[115.916552,41.945269],[116.016334,41.777273],[116.09887,41.776381],[116.122892,41.861995],[116.194341,41.861995],[116.233145,41.941263],[116.310137,41.997316],[116.409303,41.994203],[116.386514,41.952389],[116.510933,41.974189],[116.560209,41.928356],[116.727744,41.951054],[116.879881,42.018211],[116.890352,42.092846],[116.789338,42.200202],[116.907598,42.191337],[116.886656,42.366641],[116.910062,42.394928],[116.910062,42.394928],[116.927308,42.40509],[116.927308,42.40509],[116.929156,42.407741],[116.929156,42.408182],[116.929156,42.407741],[116.929156,42.408182],[116.936547,42.410833],[116.936547,42.410833],[116.944555,42.415251],[116.944555,42.415251],[116.976583,42.427618],[116.976583,42.427618],[116.984591,42.427176],[116.984591,42.427176],[116.993214,42.425851],[116.993214,42.425851],[116.995678,42.426734],[116.995678,42.426734],[117.001837,42.432476],[117.001837,42.432476],[117.004301,42.432476],[117.004301,42.432476],[117.005533,42.4338],[117.005533,42.4338],[117.133648,42.470443],[117.133648,42.470443],[117.147815,42.470443],[117.147815,42.470443],[117.264227,42.476621],[117.264227,42.476621],[117.412669,42.472649],[117.387415,42.517648],[117.387415,42.517648],[117.43669,42.584205],[117.516146,42.599622],[117.516146,42.599622],[117.687377,42.582884],[117.779768,42.618558],[117.874007,42.510151],[118.019369,42.39537],[118.060021,42.298083],[117.977485,42.229892],[118.109296,42.165176],[118.097593,42.105277],[118.155491,42.081301],[118.119767,42.034656],[118.194296,42.031545],[118.212774,42.081301],[118.297157,42.048876],[118.237411,42.023101],[118.313788,41.987977],[118.268824,41.930136],[118.340273,41.872688],[118.29223,41.772811],[118.165962,41.813405],[118.130854,41.74246],[118.214006,41.641933],[118.230636,41.581989],[118.307012,41.569008],[118.271904,41.471349],[118.348896,41.428296],[118.35136,41.337163],[118.519511,41.353783],[118.677192,41.350639],[118.741866,41.324133],[118.843496,41.374439],[118.890923,41.300764],[118.96422,41.309303],[119.197661,41.282781],[119.239545,41.314696],[119.2494,41.279634],[119.126212,41.138744],[119.037516,41.067509],[118.96422,41.079236],[118.951901,41.01832],[119.013495,41.007485],[118.977154,40.959155],[118.977154,40.959155],[118.90201,40.960963],[118.849039,40.800821],[118.911249,40.776811],[119.054147,40.664804],[119.184726,40.680233],[119.162552,40.599872],[119.30237,40.530329],[119.571536,40.540333],[119.598637,40.465266],[119.586934,40.37553],[119.642369,40.291151],[119.625123,40.224029],[119.745847,40.208038],[119.736608,40.10469],[119.779723,40.049293],[119.779723,40.049293],[119.780339,40.047002],[119.780339,40.047002],[119.817296,40.049751],[119.817296,40.049751],[119.848093,40.020432],[119.848093,40.020432],[119.845629,40.000726],[119.845629,40.000726],[119.854252,39.988349],[119.791426,39.952124],[119.540739,39.88834],[119.536427,39.808871],[119.466826,39.810709],[119.357805,39.721946],[119.269726,39.498385],[119.314689,39.412457],[119.190885,39.368528],[119.096031,39.242136],[118.948821,39.138259],[118.955597,39.176303],[118.76096,39.133618],[118.637156,39.157284],[118.533062,39.090907],[118.604511,38.971458],[118.491178,38.909097],[118.377845,38.971923],[118.366143,39.016101],[118.225092,39.034694],[118.120999,39.186043],[118.037231,39.220353],[118.024912,39.292164],[118.024912,39.292164],[118.024296,39.289386],[118.024296,39.289386],[118.021833,39.287071],[118.021833,39.287071],[117.982412,39.298647],[117.982412,39.298647],[117.972557,39.312536],[117.972557,39.312536],[117.846906,39.328274],[117.870311,39.454972],[117.933753,39.574062],[117.866,39.596657],[117.74774,39.58928],[117.736037,39.560686],[117.736037,39.560686],[117.619008,39.603111],[117.66274,39.636295],[117.644262,39.702155],[117.57774,39.727009],[117.540784,39.822658],[117.540784,39.822658],[117.537704,39.835064],[117.537704,39.835064],[117.513067,39.910373],[117.513067,39.910373],[117.589443,39.997059],[117.614697,39.972303],[117.782232,39.968634],[117.75821,40.073563],[117.75821,40.073563],[117.71879,40.082262],[117.71879,40.082262],[117.651037,40.122535],[117.651037,40.122535],[117.652269,40.12345],[117.652269,40.12345],[117.571581,40.21809],[117.450857,40.252347],[117.389879,40.228141]]],[[[116.90575,39.687883],[116.902055,39.763813],[116.949482,39.778529],[116.926076,39.835524],[116.786874,39.886963],[116.757925,39.968176],[116.783794,40.035093],[116.927924,40.054788],[116.999989,40.030053],[117.102851,40.073563],[117.102235,40.073105],[117.102235,40.073105],[117.102851,40.073563],[117.105315,40.074479],[117.105315,40.074479],[117.210024,40.082262],[117.198322,39.992933],[117.150894,39.944785],[117.152126,39.878239],[117.229735,39.852981],[117.156438,39.817603],[117.205713,39.763813],[117.165061,39.718725],[117.165061,39.718725],[117.177996,39.64551],[117.126873,39.61694],[116.983975,39.63906],[116.983975,39.63906],[116.916837,39.703996],[116.916837,39.703996],[116.90575,39.687883]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":140000,\"name\":\"山西\",\"center\":[112.549248,37.857014],\"centroid\":[112.305144,37.619053],\"childrenNum\":11,\"level\":\"province\",\"subFeatureIndex\":3,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[113.731199,36.363257],[113.716417,36.262492],[113.651743,36.172224],[113.694859,36.026707],[113.637576,35.98847],[113.656671,35.836792],[113.604316,35.797008],[113.578446,35.63378],[113.485439,35.520879],[113.31236,35.481424],[113.298194,35.427325],[113.189789,35.449261],[113.126347,35.332197],[112.997,35.362455],[112.992072,35.296068],[112.911384,35.24673],[112.818377,35.258457],[112.766022,35.203718],[112.628052,35.263342],[112.637291,35.225716],[112.513487,35.218384],[112.058924,35.279951],[112.078634,35.219362],[112.062004,35.055937],[111.900012,35.079933],[111.66965,34.988319],[111.570484,34.843094],[111.346282,34.831798],[111.232949,34.789551],[111.148566,34.80773],[111.118385,34.756622],[110.966248,34.70499],[110.929907,34.731548],[110.883712,34.642498],[110.749437,34.652342],[110.710017,34.605078],[110.533242,34.583406],[110.474728,34.617389],[110.379257,34.600646],[110.310272,34.608033],[110.241287,34.682361],[110.232664,34.803308],[110.257301,34.93487],[110.325671,35.014785],[110.39404,35.271647],[110.45009,35.327803],[110.477808,35.413672],[110.525851,35.44195],[110.609619,35.632321],[110.57759,35.701346],[110.549257,35.877527],[110.511684,35.879951],[110.447011,36.164495],[110.474112,36.248018],[110.45933,36.330969],[110.503677,36.487948],[110.496902,36.582175],[110.394656,36.676768],[110.447011,36.737687],[110.416214,36.790892],[110.425453,36.960325],[110.382953,37.021975],[110.444547,37.007164],[110.53509,37.137969],[110.690307,37.287115],[110.695234,37.34945],[110.630561,37.373228],[110.644111,37.435017],[110.745125,37.450693],[110.795017,37.566029],[110.796248,37.66319],[110.706321,37.705332],[110.758676,37.744139],[110.663821,37.803256],[110.59422,37.921821],[110.522771,37.954853],[110.501213,38.031713],[110.509221,38.192245],[110.565887,38.215283],[110.57759,38.297035],[110.661358,38.308773],[110.746973,38.366029],[110.77777,38.44105],[110.874473,38.453702],[110.920052,38.581973],[110.880016,38.618446],[111.009363,38.847614],[110.980414,38.970063],[111.138711,39.064897],[111.163348,39.152644],[111.247732,39.302351],[111.125776,39.366678],[111.171971,39.42355],[111.337043,39.420777],[111.418963,39.500232],[111.462079,39.626157],[111.502115,39.663015],[111.646245,39.644128],[111.783599,39.588819],[111.842729,39.620166],[111.93204,39.61233],[111.970229,39.79646],[112.28559,40.197985],[112.310227,40.256457],[112.456205,40.300278],[112.6299,40.235906],[112.72845,40.168272],[112.844863,40.203926],[112.892906,40.326284],[113.251382,40.413352],[113.316056,40.319898],[113.559968,40.348631],[113.794641,40.518049],[113.855619,40.457071],[113.948626,40.514865],[114.061959,40.528964],[114.041633,40.608503],[114.074277,40.723325],[114.134639,40.737381],[114.209168,40.629848],[114.283081,40.590785],[114.267066,40.474369],[114.31203,40.372795],[114.446305,40.372795],[114.530688,40.344983],[114.46971,40.267872],[114.255364,40.236363],[114.235654,40.198442],[114.073046,40.168729],[114.073046,40.168729],[114.101995,40.099655],[114.044712,40.05662],[113.989278,40.112469],[113.956017,40.031428],[113.910438,40.011725],[114.021307,39.992017],[114.047176,39.916339],[114.17406,39.897521],[114.225183,39.857114],[114.395182,39.867218],[114.408117,39.65196],[114.568877,39.574062],[114.470942,39.408759],[114.480797,39.350023],[114.416124,39.243063],[114.47587,39.216181],[114.388406,39.176767],[114.345907,39.075116],[114.10877,39.052352],[114.050872,39.135939],[113.898119,39.067684],[113.76754,38.959828],[113.776163,38.885814],[113.855619,38.828972],[113.839605,38.758554],[113.720728,38.713283],[113.70225,38.65163],[113.612939,38.646022],[113.561816,38.558115],[113.583374,38.459793],[113.525475,38.382916],[113.570439,38.237375],[113.711489,38.213873],[113.720728,38.174843],[113.825438,38.169199],[113.810039,38.112729],[113.876561,38.055273],[113.872249,37.990228],[113.951706,37.917573],[113.976959,37.816965],[114.044712,37.762116],[113.993589,37.706752],[114.12848,37.698231],[114.123553,37.60159],[114.036705,37.49438],[114.014531,37.424564],[113.90243,37.309962],[113.832213,37.167536],[113.773083,37.1518],[113.758301,37.075459],[113.791561,36.987572],[113.76138,36.956022],[113.773083,36.855072],[113.696707,36.882356],[113.680692,36.789933],[113.499606,36.740564],[113.476816,36.655171],[113.588301,36.562955],[113.554425,36.494682],[113.708409,36.423461],[113.731199,36.363257]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":150000,\"name\":\"内蒙古\",\"center\":[111.670801,40.818311],\"centroid\":[114.059024,44.315561],\"childrenNum\":12,\"level\":\"province\",\"subFeatureIndex\":4,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[123.703873,43.370824],[123.664453,43.264606],[123.666916,43.179585],[123.572678,43.0035],[123.515395,43.027561],[123.515395,43.027561],[123.474743,43.04243],[123.259165,42.992997],[123.18402,42.926002],[123.169853,42.859811],[123.227752,42.831735],[123.058368,42.768957],[122.887137,42.770275],[122.831087,42.722381],[122.786123,42.756218],[122.786123,42.756218],[122.732536,42.786524],[122.624747,42.773349],[122.563769,42.826031],[122.436886,42.843142],[122.35127,42.830419],[122.374676,42.774667],[122.457212,42.774227],[122.395002,42.683687],[122.338951,42.670051],[122.203445,42.731171],[122.20406,42.683687],[122.071634,42.711391],[121.940438,42.688525],[121.904714,42.569666],[121.66573,42.437333],[121.604752,42.494271],[121.388557,42.475297],[121.304789,42.435567],[121.304789,42.435567],[121.285079,42.387857],[121.068884,42.252483],[120.933378,42.279493],[120.79048,42.218372],[120.745516,42.223689],[120.624792,42.154532],[120.58414,42.167394],[120.466496,42.105277],[120.456641,42.016433],[120.373489,41.994648],[120.188707,41.848179],[120.096316,41.696907],[120.035954,41.708075],[120.051968,41.775935],[119.989759,41.898969],[119.837622,42.135455],[119.846861,42.21527],[119.744615,42.211725],[119.541971,42.292329],[119.572152,42.359568],[119.502551,42.387857],[119.415703,42.309588],[119.284508,42.265325],[119.237697,42.201088],[119.315921,42.119037],[119.384906,42.089738],[119.324544,41.969296],[119.334399,41.869569],[119.294363,41.775935],[119.307914,41.657581],[119.415703,41.590044],[119.361501,41.56498],[119.405848,41.508548],[119.376283,41.422015],[119.30545,41.402271],[119.326392,41.329525],[119.239545,41.314696],[119.197661,41.282781],[118.96422,41.309303],[118.890923,41.300764],[118.843496,41.374439],[118.741866,41.324133],[118.677192,41.350639],[118.519511,41.353783],[118.35136,41.337163],[118.348896,41.428296],[118.271904,41.471349],[118.307012,41.569008],[118.230636,41.581989],[118.214006,41.641933],[118.130854,41.74246],[118.165962,41.813405],[118.29223,41.772811],[118.340273,41.872688],[118.268824,41.930136],[118.313788,41.987977],[118.237411,42.023101],[118.297157,42.048876],[118.212774,42.081301],[118.194296,42.031545],[118.119767,42.034656],[118.155491,42.081301],[118.097593,42.105277],[118.109296,42.165176],[117.977485,42.229892],[118.060021,42.298083],[118.019369,42.39537],[117.874007,42.510151],[117.779768,42.618558],[117.687377,42.582884],[117.516146,42.599622],[117.516146,42.599622],[117.43669,42.584205],[117.387415,42.517648],[117.387415,42.517648],[117.412669,42.472649],[117.264227,42.476621],[117.264227,42.476621],[117.147815,42.470443],[117.147815,42.470443],[117.133648,42.470443],[117.133648,42.470443],[117.005533,42.4338],[117.005533,42.4338],[117.004301,42.432476],[117.004301,42.432476],[117.001837,42.432476],[117.001837,42.432476],[116.995678,42.426734],[116.995678,42.426734],[116.993214,42.425851],[116.993214,42.425851],[116.984591,42.427176],[116.984591,42.427176],[116.976583,42.427618],[116.976583,42.427618],[116.944555,42.415251],[116.944555,42.415251],[116.936547,42.410833],[116.936547,42.410833],[116.929156,42.408182],[116.929156,42.407741],[116.929156,42.408182],[116.929156,42.407741],[116.927308,42.40509],[116.927308,42.40509],[116.910062,42.394928],[116.910062,42.394928],[116.886656,42.366641],[116.907598,42.191337],[116.789338,42.200202],[116.890352,42.092846],[116.879881,42.018211],[116.727744,41.951054],[116.560209,41.928356],[116.510933,41.974189],[116.386514,41.952389],[116.409303,41.994203],[116.310137,41.997316],[116.233145,41.941263],[116.194341,41.861995],[116.122892,41.861995],[116.09887,41.776381],[116.016334,41.777273],[115.916552,41.945269],[115.811226,41.912328],[115.654162,41.829011],[115.319091,41.691546],[115.376989,41.602126],[115.252569,41.579303],[115.0992,41.624045],[114.862064,41.603915],[114.895325,41.636567],[114.899636,41.756299],[114.866991,41.803147],[114.922426,41.824999],[114.9021,42.015544],[114.828803,42.147434],[114.765361,42.118593],[114.510978,42.111047],[114.466015,42.038656],[114.510978,41.973299],[114.34837,41.947049],[114.203009,41.793334],[114.230726,41.513477],[114.100147,41.537218],[113.930764,41.485693],[113.871017,41.41349],[113.94493,41.39105],[113.927068,41.326829],[113.996669,41.192345],[113.920293,41.172081],[113.819279,41.097726],[113.973263,40.983099],[114.073661,40.857412],[114.044712,40.83116],[114.134639,40.737381],[114.074277,40.723325],[114.041633,40.608503],[114.061959,40.528964],[113.948626,40.514865],[113.855619,40.457071],[113.794641,40.518049],[113.559968,40.348631],[113.316056,40.319898],[113.251382,40.413352],[112.892906,40.326284],[112.844863,40.203926],[112.72845,40.168272],[112.6299,40.235906],[112.456205,40.300278],[112.310227,40.256457],[112.28559,40.197985],[111.970229,39.79646],[111.93204,39.61233],[111.842729,39.620166],[111.783599,39.588819],[111.646245,39.644128],[111.502115,39.663015],[111.462079,39.626157],[111.418963,39.500232],[111.337043,39.420777],[111.171971,39.42355],[111.125776,39.366678],[111.064182,39.400899],[111.148566,39.531619],[111.134399,39.586513],[110.892335,39.509927],[110.740198,39.351874],[110.702626,39.27364],[110.604075,39.277345],[110.528315,39.380091],[110.434692,39.381016],[110.39096,39.31161],[110.243751,39.42355],[110.146432,39.455434],[110.217881,39.28105],[109.961035,39.191608],[109.665384,38.981691],[109.683862,38.935631],[109.624116,38.854603],[109.549587,38.805662],[109.511399,38.833633],[109.404226,38.720752],[109.338936,38.70161],[109.367269,38.627328],[109.276726,38.623121],[109.178792,38.520675],[109.051908,38.432146],[108.938575,38.207291],[108.963829,38.155085],[109.069155,38.091071],[109.017416,37.969949],[108.938575,37.920877],[108.871438,38.027471],[108.797525,38.047735],[108.82709,37.989285],[108.798141,37.93362],[108.799989,37.783871],[108.777815,37.683554],[108.611512,37.65419],[108.532671,37.690656],[108.440896,37.654663],[108.304158,37.638556],[108.219158,37.661295],[108.134159,37.621971],[108.025137,37.649926],[107.982022,37.787181],[107.65003,37.864688],[107.49235,37.944945],[107.419669,37.940699],[107.438147,37.992586],[107.329742,38.087774],[107.19054,38.154144],[107.014997,38.120261],[106.768621,38.174843],[106.546883,38.269794],[106.482825,38.319571],[106.601702,38.392295],[106.647897,38.470569],[106.66268,38.601614],[106.709491,38.718885],[106.954019,38.941215],[106.96757,39.054676],[106.859164,39.107623],[106.795723,39.214327],[106.806809,39.318554],[106.751375,39.381478],[106.683622,39.357426],[106.602318,39.375466],[106.506231,39.269934],[106.402753,39.291701],[106.284493,39.270397],[106.283877,39.14522],[106.145907,39.153108],[106.096631,39.08487],[106.060907,38.968667],[105.97098,38.909097],[106.003625,38.874636],[105.897683,38.788875],[105.90569,38.731488],[105.852719,38.641349],[105.874277,38.593197],[105.821307,38.366967],[105.86627,38.296565],[105.775111,38.186601],[105.780655,38.084949],[105.840401,38.003902],[105.799749,37.940227],[105.80406,37.861854],[105.760944,37.799947],[105.622974,37.778669],[105.598952,37.699178],[105.315004,37.702018],[105.111128,37.633818],[105.024281,37.579781],[104.866601,37.566503],[104.801311,37.538516],[104.419429,37.511943],[104.407726,37.464467],[104.287002,37.42789],[104.183524,37.406981],[103.948235,37.564606],[103.676606,37.783871],[103.401897,37.861854],[103.362477,38.037368],[103.369868,38.089658],[103.53494,38.156497],[103.507838,38.281068],[103.416063,38.404956],[103.85954,38.64462],[104.044322,38.895128],[104.168125,38.940285],[104.207546,39.083941],[104.177364,39.15218],[104.047401,39.297721],[104.091133,39.418466],[103.964865,39.455434],[103.839214,39.460516],[103.595302,39.386565],[103.344615,39.331514],[103.007696,39.09973],[102.601792,39.172129],[102.45335,39.25511],[102.280887,39.190217],[101.830636,39.093229],[101.926106,39.000758],[102.075164,38.891403],[101.941505,38.808926],[101.777049,38.660507],[101.679115,38.690869],[101.601506,38.6549],[101.562702,38.712816],[101.307087,38.802865],[101.334189,38.848545],[101.24303,38.86066],[101.198682,38.943077],[101.228863,39.02075],[101.117378,38.97518],[100.969553,38.9468],[100.961545,39.005873],[100.835278,39.025863],[100.864227,39.106695],[100.842669,39.199955],[100.842053,39.405523],[100.619699,39.38749],[100.498975,39.400437],[100.500823,39.4813],[100.326512,39.509003],[100.314193,39.606799],[100.250135,39.68512],[100.128179,39.702155],[100.040716,39.756913],[99.904593,39.785886],[99.822058,39.85987],[99.672384,39.887881],[99.488218,39.875943],[99.927383,40.063947],[100.002528,40.197528],[100.169447,40.277458],[100.169447,40.541242],[100.242744,40.618495],[100.237201,40.716977],[100.107853,40.875511],[100.057346,40.908077],[99.673,40.932943],[99.565827,40.846551],[99.174705,40.858317],[99.172858,40.747354],[99.102025,40.676603],[99.041662,40.693844],[98.984996,40.782701],[98.790975,40.705185],[98.801446,40.609411],[98.689345,40.691576],[98.668403,40.772734],[98.569853,40.746901],[98.627751,40.677965],[98.344419,40.568518],[98.333332,40.918929],[98.25018,40.939271],[97.971776,41.097726],[97.629314,41.440407],[97.613915,41.477176],[97.84674,41.656687],[97.307177,42.565259],[97.172903,42.795305],[98.195362,42.653331],[98.546447,42.638368],[99.503001,42.568344],[99.969267,42.648051],[100.272309,42.636167],[100.32528,42.689845],[100.826655,42.67533],[101.23995,42.59698],[101.581796,42.525145],[101.803534,42.503534],[102.070236,42.232107],[102.449039,42.143885],[102.540814,42.162072],[102.712045,42.152757],[103.021862,42.02799],[103.418527,41.882489],[103.868779,41.802701],[104.080046,41.804931],[104.530298,41.874916],[104.524138,41.662051],[104.68613,41.64551],[104.923267,41.654005],[105.009498,41.583331],[105.230621,41.750942],[105.291599,41.750049],[105.74185,41.949274],[106.01348,42.03199],[106.619564,42.243625],[106.785867,42.291444],[107.051337,42.319322],[107.269996,42.363547],[107.303872,42.4126],[107.46648,42.458967],[107.57427,42.413042],[107.939522,42.403764],[108.022058,42.433359],[108.238252,42.460291],[108.298614,42.438216],[108.532671,42.443073],[108.845569,42.395811],[109.026039,42.458525],[109.291509,42.435567],[109.544044,42.472208],[109.683862,42.559089],[109.906216,42.635727],[110.108244,42.642769],[110.139657,42.67489],[110.437156,42.781254],[110.469801,42.839194],[110.631177,42.936078],[110.736502,43.089639],[110.769763,43.099251],[111.02045,43.329926],[111.183674,43.396045],[111.354289,43.436029],[111.456535,43.49422],[111.564325,43.490314],[111.79407,43.67192],[111.951135,43.693122],[111.959758,43.8232],[111.870447,43.940071],[111.773128,44.010686],[111.662875,44.061012],[111.559397,44.171408],[111.507042,44.294019],[111.415883,44.357368],[111.478709,44.488982],[111.569868,44.576418],[111.560629,44.647124],[111.624687,44.778509],[111.764505,44.969314],[111.889541,45.045459],[112.002874,45.090675],[112.113743,45.072931],[112.438959,45.071663],[112.540589,45.001054],[112.599719,44.93078],[112.850406,44.840484],[112.937869,44.84006],[113.11526,44.799741],[113.503918,44.77766],[113.631417,44.745372],[113.907358,44.915105],[114.065038,44.931204],[114.19069,45.036581],[114.347139,45.119392],[114.519602,45.283812],[114.551014,45.387699],[114.745035,45.438521],[114.974165,45.377193],[115.153403,45.395682],[115.36467,45.392321],[115.699741,45.459509],[115.936878,45.632987],[116.035428,45.68526],[116.17463,45.688604],[116.286731,45.775056],[116.288579,45.838869],[116.243,45.875956],[116.271949,45.966692],[116.414231,46.13404],[116.439484,46.137771],[116.585462,46.292199],[116.745606,46.327743],[116.826294,46.380602],[117.097308,46.35707],[117.372017,46.360373],[117.392343,46.463093],[117.447777,46.528172],[117.42006,46.582071],[117.49582,46.600574],[117.622704,46.596052],[117.704008,46.516645],[117.870927,46.549985],[117.914659,46.607973],[118.04647,46.631398],[118.124078,46.678216],[118.192448,46.682731],[118.316252,46.739347],[118.446831,46.704482],[118.586033,46.692992],[118.639004,46.721302],[118.788061,46.687246],[118.845343,46.771731],[118.914329,46.775009],[118.912481,46.733196],[119.011647,46.745498],[119.123132,46.642901],[119.26295,46.649062],[119.374435,46.60304],[119.431718,46.638793],[119.656535,46.625645],[119.677477,46.584539],[119.783419,46.626056],[119.8136,46.668363],[119.911534,46.669595],[119.93494,46.712688],[119.928781,46.903933],[119.859795,46.917013],[119.795122,47.01297],[119.806825,47.054973],[119.716282,47.195829],[119.56784,47.24825],[119.559833,47.303053],[119.487152,47.329419],[119.353493,47.43192],[119.365812,47.477232],[119.152081,47.540685],[119.134219,47.664539],[118.773278,47.771213],[118.568171,47.992315],[118.424041,48.014734],[118.299621,48.005127],[118.231252,48.043943],[117.96147,48.011132],[117.813645,48.016335],[117.493357,47.758343],[117.384335,47.641162],[117.094844,47.823865],[116.879265,47.893718],[116.669846,47.890509],[116.453035,47.837522],[116.26579,47.876866],[116.111189,47.811812],[115.939342,47.683071],[115.580249,47.921793],[115.529126,48.155029],[115.822929,48.2595],[115.799523,48.514993],[115.83032,48.560156],[116.077928,48.822412],[116.048363,48.873598],[116.717889,49.847388],[116.736367,49.847388],[117.068974,49.695524],[117.278394,49.636272],[117.485349,49.633172],[117.809333,49.521049],[117.867848,49.592853],[117.980565,49.621158],[118.084658,49.618057],[118.122231,49.669586],[118.205998,49.684686],[118.225708,49.734211],[118.388316,49.786004],[118.395092,49.819601],[118.49549,49.843144],[118.485635,49.86706],[118.574946,49.931423],[118.741866,49.946441],[118.929111,49.989545],[119.092335,49.986082],[119.163168,50.027613],[119.190269,50.087538],[119.243856,50.078324],[119.360269,50.196441],[119.319001,50.220948],[119.358421,50.358949],[119.259871,50.345205],[119.125596,50.389095],[119.250631,50.448568],[119.28266,50.604899],[119.361501,50.632611],[119.383674,50.682301],[119.450196,50.695569],[119.506862,50.764118],[119.491464,50.879026],[119.633746,51.010218],[119.726137,51.050105],[119.788346,51.16656],[119.760629,51.21231],[119.944795,51.366848],[120.002693,51.459396],[119.985447,51.505227],[120.051968,51.553245],[120.035338,51.586343],[120.087077,51.678076],[120.172693,51.679931],[120.363634,51.789982],[120.398742,51.832153],[120.480046,51.855072],[120.481278,51.885735],[120.656821,51.92634],[120.719031,52.014438],[120.68577,52.036896],[120.747364,52.076996],[120.786784,52.157824],[120.7449,52.206984],[120.755371,52.258287],[120.627256,52.324161],[120.62356,52.361081],[120.688234,52.427531],[120.689466,52.516098],[120.727654,52.529568],[120.467728,52.644076],[120.40367,52.617929],[120.287873,52.623378],[120.196714,52.579043],[120.049505,52.598672],[120.035338,52.646255],[120.071063,52.706113],[120.038418,52.780006],[120.222584,52.842934],[120.350699,52.906131],[120.455409,53.011376],[120.549647,53.076125],[120.643886,53.106667],[120.736277,53.204615],[120.840371,53.24724],[120.882871,53.294472],[121.129246,53.277303],[121.285695,53.291253],[121.347289,53.327003],[121.499426,53.337008],[121.612143,53.260484],[121.679896,53.240437],[121.665114,53.170556],[121.754425,53.146519],[121.817867,53.061744],[121.785838,53.018575],[121.715621,52.998054],[121.66265,52.912626],[121.610295,52.892416],[121.591201,52.824499],[121.476636,52.772043],[121.373158,52.683268],[121.182217,52.599399],[121.325731,52.572498],[121.416274,52.499346],[121.519136,52.456709],[121.63986,52.444311],[121.714389,52.317944],[121.841272,52.282818],[121.94783,52.298555],[122.091344,52.427167],[122.168952,52.513549],[122.207756,52.469103],[122.310618,52.475299],[122.342031,52.41403],[122.484313,52.341711],[122.478153,52.29636],[122.585943,52.266344],[122.76087,52.26671],[122.769493,52.179843],[122.629059,52.136529],[122.683877,51.974649],[122.726377,51.978704],[122.706051,51.890166],[122.771957,51.779619],[122.749167,51.746661],[122.85634,51.606786],[122.854492,51.477659],[122.903768,51.415384],[122.965977,51.387015],[122.978296,51.331346],[123.058984,51.321999],[123.294273,51.25427],[123.465504,51.287212],[123.736517,50.974064],[123.825829,50.813669],[124.076516,50.564249],[123.983509,50.510249],[124.005067,50.434469],[123.920067,50.37307],[123.800575,50.455806],[123.777785,50.344441],[123.870792,50.270307],[123.878799,50.208696],[123.953944,50.186865],[124.007531,50.219417],[124.061733,50.199122],[124.103001,50.238555],[124.189233,50.216737],[124.278544,50.231284],[124.32474,50.178436],[124.368471,50.258068],[124.36416,50.360857],[124.43992,50.388713],[124.499666,50.397868],[124.504594,50.342532],[124.578507,50.294777],[124.619774,50.229753],[124.575427,50.179585],[124.508289,50.162723],[124.604992,50.070644],[124.680752,50.031841],[124.650571,49.99493],[124.66597,49.868217],[124.730644,49.817671],[124.74173,49.761274],[124.824266,49.849703],[124.972708,49.834654],[124.935135,49.866675],[124.977635,49.900601],[125.095896,49.795661],[125.177815,49.829637],[125.222779,49.799137],[125.219699,49.669199],[125.132236,49.671909],[125.234482,49.592077],[125.228323,49.486857],[125.264047,49.461585],[125.261583,49.318656],[125.219699,49.188999],[125.117453,49.126],[124.906802,49.183915],[124.807636,49.108769],[124.808252,49.020563],[124.709086,48.920406],[124.697383,48.841711],[124.653651,48.777089],[124.579122,48.596574],[124.520608,48.556196],[124.555717,48.467805],[124.507674,48.445584],[124.51876,48.378068],[124.579738,48.304095],[124.578507,48.251931],[124.463942,48.097518],[124.467637,48.178972],[124.418978,48.181765],[124.404812,48.264679],[124.317964,48.347856],[124.314269,48.503894],[124.25945,48.536391],[124.25945,48.536391],[124.07898,48.436058],[123.873256,48.281006],[123.746373,48.19772],[123.537569,48.021938],[123.300432,47.953861],[123.228983,47.840735],[123.166158,47.783677],[122.855108,47.677432],[122.763333,47.613338],[122.59395,47.547551],[122.543443,47.495427],[122.507103,47.401555],[122.418407,47.350503],[122.556378,47.17265],[122.679566,47.094092],[122.845869,47.046819],[122.778116,47.00277],[122.796594,46.938261],[122.895144,46.960317],[122.906847,46.807372],[123.026339,46.718841],[123.163694,46.740167],[123.221592,46.850355],[123.309056,46.86222],[123.374345,46.837668],[123.404526,46.935401],[123.52833,46.944797],[123.483366,46.845854],[123.562823,46.825797],[123.576989,46.891259],[123.625648,46.84749],[123.631808,46.728685],[123.603475,46.689299],[123.366338,46.677805],[123.276411,46.660972],[123.228368,46.58824],[123.18094,46.614138],[123.04605,46.617426],[123.002318,46.574257],[123.011557,46.43506],[123.178476,46.247944],[123.102716,46.172172],[123.112571,46.129894],[123.04605,46.10003],[122.792898,46.073056],[122.828623,45.912185],[122.752246,45.834701],[122.792283,45.766291],[122.741775,45.70532],[122.671558,45.700723],[122.640761,45.7713],[122.555146,45.821359],[122.504639,45.787157],[122.496016,45.858041],[122.446125,45.916764],[122.362357,45.917597],[122.372828,45.855957],[122.258879,45.794666],[122.200981,45.85679],[122.091344,45.881787],[122.040221,45.95879],[121.84312,46.02447],[121.762432,45.999538],[121.809243,45.96087],[121.817251,45.875539],[121.754425,45.795084],[121.644172,45.752516],[121.713773,45.701977],[121.811091,45.686932],[121.867142,45.719942],[121.949062,45.711169],[122.003264,45.623363],[121.966308,45.596157],[122.02359,45.490137],[122.163408,45.443979],[122.147394,45.295598],[122.239169,45.276234],[122.22993,45.20672],[122.143082,45.183108],[122.109822,45.142186],[122.119677,45.068705],[122.074713,45.006553],[122.079025,44.914258],[122.04946,44.912987],[122.114749,44.776386],[122.161561,44.728371],[122.103046,44.673935],[122.13138,44.577697],[122.196053,44.559794],[122.228082,44.480017],[122.28598,44.477883],[122.291524,44.310291],[122.271198,44.255463],[122.319241,44.232745],[122.483697,44.237032],[122.676486,44.28631],[122.76087,44.369772],[122.85634,44.398422],[123.025108,44.492823],[123.125506,44.509466],[123.128585,44.366778],[123.196955,44.34496],[123.323838,44.179991],[123.386664,44.161966],[123.32815,44.083795],[123.332461,44.028326],[123.400831,43.979264],[123.52525,43.695718],[123.5117,43.59267],[123.439019,43.577501],[123.439019,43.577501],[123.304744,43.551055],[123.315831,43.49205],[123.382968,43.46904],[123.419925,43.409955],[123.486446,43.445587],[123.608402,43.366474],[123.703873,43.370824]]],[[[124.076516,50.564249],[123.825829,50.813669],[123.736517,50.974064],[123.465504,51.287212],[123.661989,51.319008],[123.711264,51.398216],[123.842459,51.367595],[123.926227,51.300681],[124.071588,51.320878],[124.128255,51.347419],[124.239124,51.344429],[124.271769,51.308162],[124.406659,51.271867],[124.43684,51.353772],[124.490427,51.380294],[124.58713,51.363486],[124.62655,51.327608],[124.693687,51.332842],[124.783614,51.392243],[124.864302,51.379547],[124.942527,51.447465],[124.928976,51.498523],[125.047236,51.529801],[125.098975,51.658408],[125.130388,51.635389],[125.35151,51.623876],[125.567089,51.455668],[125.567089,51.455668],[125.595422,51.416877],[125.595422,51.416877],[125.597886,51.414638],[125.597886,51.414638],[125.600966,51.413518],[125.600966,51.413518],[125.623756,51.387762],[125.623756,51.387762],[125.63977,51.372451],[125.63977,51.372451],[125.668103,51.347419],[125.668103,51.347419],[125.670567,51.34555],[125.670567,51.34555],[125.743248,51.275984],[125.743248,51.275984],[125.756798,51.227675],[125.840566,51.220555],[125.878138,51.159431],[126.059225,51.043711],[126.033971,51.010971],[126.073391,50.963514],[125.890457,50.805729],[125.758646,50.746706],[125.825784,50.703906],[125.787595,50.677373],[125.829479,50.561589],[125.740784,50.523184],[125.632379,50.443996],[125.590495,50.452378],[125.519662,50.315795],[125.466075,50.297452],[125.448829,50.216354],[125.334264,50.165023],[125.258504,50.103659],[125.294228,50.029151],[125.231402,49.957606],[125.239409,49.844687],[125.177815,49.829637],[125.095896,49.795661],[124.977635,49.900601],[124.935135,49.866675],[124.972708,49.834654],[124.824266,49.849703],[124.74173,49.761274],[124.730644,49.817671],[124.66597,49.868217],[124.650571,49.99493],[124.680752,50.031841],[124.604992,50.070644],[124.508289,50.162723],[124.575427,50.179585],[124.619774,50.229753],[124.578507,50.294777],[124.504594,50.342532],[124.499666,50.397868],[124.43992,50.388713],[124.43992,50.539919],[124.322892,50.532693],[124.289015,50.553226],[124.076516,50.564249]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":210000,\"name\":\"辽宁\",\"center\":[123.429096,41.796767],\"centroid\":[122.606135,41.300702],\"childrenNum\":14,\"level\":\"province\",\"subFeatureIndex\":5,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[119.239545,41.314696],[119.326392,41.329525],[119.30545,41.402271],[119.376283,41.422015],[119.405848,41.508548],[119.361501,41.56498],[119.415703,41.590044],[119.307914,41.657581],[119.294363,41.775935],[119.334399,41.869569],[119.324544,41.969296],[119.384906,42.089738],[119.315921,42.119037],[119.237697,42.201088],[119.284508,42.265325],[119.415703,42.309588],[119.502551,42.387857],[119.572152,42.359568],[119.541971,42.292329],[119.744615,42.211725],[119.846861,42.21527],[119.837622,42.135455],[119.989759,41.898969],[120.051968,41.775935],[120.035954,41.708075],[120.096316,41.696907],[120.188707,41.848179],[120.373489,41.994648],[120.456641,42.016433],[120.466496,42.105277],[120.58414,42.167394],[120.624792,42.154532],[120.745516,42.223689],[120.79048,42.218372],[120.933378,42.279493],[121.068884,42.252483],[121.285079,42.387857],[121.304789,42.435567],[121.304789,42.435567],[121.388557,42.475297],[121.604752,42.494271],[121.66573,42.437333],[121.904714,42.569666],[121.940438,42.688525],[122.071634,42.711391],[122.20406,42.683687],[122.203445,42.731171],[122.338951,42.670051],[122.395002,42.683687],[122.457212,42.774227],[122.374676,42.774667],[122.35127,42.830419],[122.436886,42.843142],[122.563769,42.826031],[122.624747,42.773349],[122.732536,42.786524],[122.786123,42.756218],[122.786123,42.756218],[122.831087,42.722381],[122.887137,42.770275],[123.058368,42.768957],[123.227752,42.831735],[123.169853,42.859811],[123.18402,42.926002],[123.259165,42.992997],[123.474743,43.04243],[123.515395,43.027561],[123.515395,43.027561],[123.572678,43.0035],[123.666916,43.179585],[123.664453,43.264606],[123.703873,43.370824],[123.710032,43.417344],[123.791952,43.491182],[123.87264,43.451234],[123.84985,43.415606],[123.896046,43.361689],[124.032784,43.280724],[124.098074,43.29292],[124.114704,43.247175],[124.226805,43.241945],[124.226805,43.241945],[124.282856,43.230176],[124.284088,43.166058],[124.425754,43.076092],[124.333363,42.997373],[124.422674,42.975927],[124.431913,42.930821],[124.369087,42.882613],[124.435609,42.88086],[124.454703,42.823836],[124.514449,42.873406],[124.514449,42.873406],[124.539086,42.867266],[124.659195,42.972862],[124.686912,43.051176],[124.785462,43.117161],[124.896331,43.129826],[124.840897,43.032372],[124.869846,42.988183],[124.859375,42.822959],[124.897563,42.787841],[124.975171,42.802768],[124.996113,42.745234],[124.996113,42.745234],[124.968396,42.72282],[125.038613,42.615476],[125.097127,42.62252],[125.068794,42.499564],[125.186439,42.428059],[125.175352,42.308261],[125.29854,42.290116],[125.305931,42.146103],[125.353358,42.178923],[125.490097,42.136343],[125.369989,42.003096],[125.291764,41.958618],[125.299156,41.872243],[125.299156,41.872243],[125.297308,41.861995],[125.297308,41.861995],[125.29238,41.83971],[125.29238,41.83971],[125.29238,41.83971],[125.319482,41.777273],[125.319482,41.777273],[125.323793,41.771026],[125.323793,41.771026],[125.325025,41.670097],[125.450677,41.674119],[125.450061,41.598099],[125.534444,41.478073],[125.547995,41.401373],[125.637306,41.34435],[125.646545,41.264344],[125.758646,41.232404],[125.737088,41.179737],[125.791291,41.167577],[125.712451,41.095471],[125.726617,41.055328],[125.674879,40.974516],[125.589263,40.931135],[125.707523,40.866915],[125.544915,40.72922],[125.49564,40.728767],[125.422343,40.635297],[125.279445,40.655273],[125.018287,40.53624],[124.985642,40.475279],[124.897563,40.47892],[124.851368,40.427017],[124.74481,40.375074],[124.718325,40.319441],[124.62039,40.290695],[124.388797,40.113384],[124.38079,40.108808],[124.336442,40.049751],[124.372167,40.021348],[124.239124,39.927352],[124.173218,39.841496],[124.144885,39.745413],[124.103001,39.823577],[124.002603,39.800137],[123.828908,39.831389],[123.697097,39.807032],[123.665684,39.831389],[123.612714,39.77485],[123.536337,39.788644],[123.392823,39.723787],[123.383584,39.766572],[123.274563,39.753693],[123.253005,39.689724],[123.010941,39.655184],[122.972753,39.594813],[122.85634,39.606799],[122.808913,39.559764],[122.581631,39.464211],[122.489856,39.403673],[122.412864,39.411995],[122.274893,39.322257],[122.242865,39.267618],[122.117213,39.213863],[122.167104,39.158676],[122.048228,39.101123],[121.963228,39.030046],[121.864062,39.037018],[121.920728,38.969598],[121.863446,38.942611],[121.790149,39.022609],[121.671273,39.010057],[121.655874,38.9468],[121.719316,38.92027],[121.708845,38.872772],[121.565331,38.875101],[121.509897,38.817784],[121.359608,38.822446],[121.259825,38.786543],[121.198848,38.721686],[121.13479,38.72402],[121.128014,38.958897],[121.204391,38.941215],[121.341129,38.980761],[121.370695,39.060251],[121.508049,39.034229],[121.68236,39.117837],[121.604136,39.166098],[121.598592,39.279198],[121.668193,39.276419],[121.723628,39.367603],[121.621382,39.32596],[121.474788,39.296332],[121.432904,39.357426],[121.246891,39.421702],[121.304173,39.481762],[121.224717,39.51962],[121.297398,39.605877],[121.450151,39.625235],[121.501274,39.706758],[121.45939,39.747713],[121.530223,39.851603],[121.626925,39.882831],[121.699606,39.937445],[121.76428,39.933316],[121.82341,40.036467],[121.884388,40.053415],[122.01004,40.149067],[121.940438,40.2423],[122.02667,40.245041],[122.040221,40.322178],[122.198517,40.382367],[122.245944,40.519868],[122.133843,40.614408],[122.148626,40.671612],[122.06609,40.648464],[121.951525,40.680687],[121.934279,40.798103],[121.852359,40.821199],[121.816019,40.894962],[121.682976,40.829802],[121.526527,40.851529],[121.499426,40.880035],[121.335586,40.900842],[121.23642,40.851077],[121.126167,40.869177],[121.086747,40.798103],[120.991276,40.744181],[121.033776,40.70972],[120.8299,40.671158],[120.822509,40.593966],[120.72827,40.539423],[120.674683,40.471183],[120.616169,40.457071],[120.599539,40.355471],[120.537329,40.325372],[120.523778,40.256914],[120.465264,40.178787],[120.371641,40.174673],[120.273091,40.127111],[119.955882,40.046544],[119.913998,39.988349],[119.854252,39.988349],[119.845629,40.000726],[119.845629,40.000726],[119.848093,40.020432],[119.848093,40.020432],[119.817296,40.049751],[119.817296,40.049751],[119.780339,40.047002],[119.780339,40.047002],[119.779723,40.049293],[119.779723,40.049293],[119.736608,40.10469],[119.745847,40.208038],[119.625123,40.224029],[119.642369,40.291151],[119.586934,40.37553],[119.598637,40.465266],[119.571536,40.540333],[119.30237,40.530329],[119.162552,40.599872],[119.184726,40.680233],[119.054147,40.664804],[118.911249,40.776811],[118.849039,40.800821],[118.90201,40.960963],[118.977154,40.959155],[118.977154,40.959155],[119.013495,41.007485],[118.951901,41.01832],[118.96422,41.079236],[119.037516,41.067509],[119.126212,41.138744],[119.2494,41.279634],[119.239545,41.314696]]],[[[122.969057,39.513158],[122.978912,39.561609],[123.036194,39.533004],[122.969057,39.513158]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":220000,\"name\":\"吉林\",\"center\":[125.3245,43.886841],\"centroid\":[126.171246,43.703944],\"childrenNum\":9,\"level\":\"province\",\"subFeatureIndex\":6,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[125.707523,40.866915],[125.589263,40.931135],[125.674879,40.974516],[125.726617,41.055328],[125.712451,41.095471],[125.791291,41.167577],[125.737088,41.179737],[125.758646,41.232404],[125.646545,41.264344],[125.637306,41.34435],[125.547995,41.401373],[125.534444,41.478073],[125.450061,41.598099],[125.450677,41.674119],[125.325025,41.670097],[125.323793,41.771026],[125.323793,41.771026],[125.319482,41.777273],[125.319482,41.777273],[125.29238,41.83971],[125.29238,41.83971],[125.29238,41.83971],[125.297308,41.861995],[125.297308,41.861995],[125.299156,41.872243],[125.299156,41.872243],[125.291764,41.958618],[125.369989,42.003096],[125.490097,42.136343],[125.353358,42.178923],[125.305931,42.146103],[125.29854,42.290116],[125.175352,42.308261],[125.186439,42.428059],[125.068794,42.499564],[125.097127,42.62252],[125.038613,42.615476],[124.968396,42.72282],[124.996113,42.745234],[124.996113,42.745234],[124.975171,42.802768],[124.897563,42.787841],[124.859375,42.822959],[124.869846,42.988183],[124.840897,43.032372],[124.896331,43.129826],[124.785462,43.117161],[124.686912,43.051176],[124.659195,42.972862],[124.539086,42.867266],[124.514449,42.873406],[124.514449,42.873406],[124.454703,42.823836],[124.435609,42.88086],[124.369087,42.882613],[124.431913,42.930821],[124.422674,42.975927],[124.333363,42.997373],[124.425754,43.076092],[124.284088,43.166058],[124.282856,43.230176],[124.226805,43.241945],[124.226805,43.241945],[124.114704,43.247175],[124.098074,43.29292],[124.032784,43.280724],[123.896046,43.361689],[123.84985,43.415606],[123.87264,43.451234],[123.791952,43.491182],[123.710032,43.417344],[123.703873,43.370824],[123.608402,43.366474],[123.486446,43.445587],[123.419925,43.409955],[123.382968,43.46904],[123.315831,43.49205],[123.304744,43.551055],[123.439019,43.577501],[123.439019,43.577501],[123.5117,43.59267],[123.52525,43.695718],[123.400831,43.979264],[123.332461,44.028326],[123.32815,44.083795],[123.386664,44.161966],[123.323838,44.179991],[123.196955,44.34496],[123.128585,44.366778],[123.125506,44.509466],[123.025108,44.492823],[122.85634,44.398422],[122.76087,44.369772],[122.676486,44.28631],[122.483697,44.237032],[122.319241,44.232745],[122.271198,44.255463],[122.291524,44.310291],[122.28598,44.477883],[122.228082,44.480017],[122.196053,44.559794],[122.13138,44.577697],[122.103046,44.673935],[122.161561,44.728371],[122.114749,44.776386],[122.04946,44.912987],[122.079025,44.914258],[122.074713,45.006553],[122.119677,45.068705],[122.109822,45.142186],[122.143082,45.183108],[122.22993,45.20672],[122.239169,45.276234],[122.147394,45.295598],[122.163408,45.443979],[122.02359,45.490137],[121.966308,45.596157],[122.003264,45.623363],[121.949062,45.711169],[121.867142,45.719942],[121.811091,45.686932],[121.713773,45.701977],[121.644172,45.752516],[121.754425,45.795084],[121.817251,45.875539],[121.809243,45.96087],[121.762432,45.999538],[121.84312,46.02447],[122.040221,45.95879],[122.091344,45.881787],[122.200981,45.85679],[122.258879,45.794666],[122.372828,45.855957],[122.362357,45.917597],[122.446125,45.916764],[122.496016,45.858041],[122.504639,45.787157],[122.555146,45.821359],[122.640761,45.7713],[122.671558,45.700723],[122.741775,45.70532],[122.792283,45.766291],[122.752246,45.834701],[122.828623,45.912185],[122.792898,46.073056],[123.04605,46.10003],[123.112571,46.129894],[123.102716,46.172172],[123.178476,46.247944],[123.248078,46.273178],[123.319527,46.253736],[123.319527,46.253736],[123.373113,46.223112],[123.498765,46.259528],[123.565902,46.22601],[123.610866,46.252909],[123.779633,46.264078],[123.896046,46.303774],[123.982893,46.22601],[123.99398,46.101275],[124.040176,46.019484],[123.970574,45.971267],[123.996444,45.907189],[124.061118,45.886369],[124.064813,45.797586],[124.009379,45.78215],[124.13811,45.68735],[124.129487,45.637589],[124.273001,45.584014],[124.287783,45.539191],[124.354305,45.546734],[124.398652,45.44062],[124.480572,45.456151],[124.544014,45.412066],[124.625318,45.437262],[124.886476,45.442719],[124.923433,45.541286],[124.961005,45.49517],[125.025678,45.493492],[125.06941,45.384757],[125.248649,45.417526],[125.347815,45.395262],[125.398322,45.416686],[125.424807,45.485523],[125.497488,45.469161],[125.628067,45.522006],[125.687813,45.51404],[125.716146,45.421725],[125.697052,45.349447],[125.760494,45.291389],[125.915095,45.196602],[126.166398,45.133323],[126.321615,45.178891],[126.428172,45.2358],[126.567375,45.252651],[126.831613,45.146406],[126.96404,45.132056],[126.968351,45.074621],[127.085995,44.944757],[127.021938,44.899002],[126.984366,44.823936],[127.037336,44.72157],[127.049039,44.567041],[127.094003,44.615189],[127.182082,44.644144],[127.392733,44.632223],[127.557189,44.575566],[127.536247,44.522266],[127.463566,44.484713],[127.50853,44.437312],[127.483892,44.401842],[127.483892,44.401842],[127.623095,44.277743],[127.591066,44.227601],[127.681609,44.167116],[127.724109,44.196723],[127.729036,44.098836],[127.862079,44.063162],[128.059796,44.110007],[128.089977,44.132342],[128.101679,44.290593],[128.049941,44.349239],[128.190375,44.367206],[128.211317,44.431757],[128.373309,44.51416],[128.46262,44.433894],[128.481714,44.375332],[128.450301,44.203157],[128.574721,44.047682],[128.584576,43.990887],[128.644938,43.936193],[128.636315,43.891366],[128.723778,43.894816],[128.760734,43.857724],[128.719467,43.816724],[128.877763,43.540213],[128.949212,43.55409],[129.014501,43.523295],[129.230696,43.59527],[129.211602,43.784336],[129.406855,43.819314],[129.467833,43.874548],[129.742542,43.875841],[129.784426,43.964623],[129.869425,44.005521],[129.869425,44.005521],[129.880512,44.000357],[129.880512,44.000357],[129.98091,44.014128],[130.017251,43.962039],[130.027106,43.851684],[130.079461,43.835285],[130.079461,43.835285],[130.189098,43.940501],[130.260547,43.948256],[130.353554,44.050262],[130.338155,43.949979],[130.338155,43.949979],[130.383119,43.906025],[130.380039,43.783904],[130.423771,43.742853],[130.4133,43.652009],[130.488444,43.655905],[130.823515,43.502901],[130.841378,43.454274],[130.907283,43.434291],[131.026775,43.508542],[131.134565,43.428643],[131.134565,43.428643],[131.294093,43.469909],[131.304564,43.502033],[131.314419,43.392567],[131.275615,43.369084],[131.255289,43.265041],[131.206014,43.23715],[131.218332,43.146853],[131.171521,43.069536],[131.102536,43.021],[131.151195,42.968485],[131.114855,42.915048],[131.034167,42.929069],[131.045869,42.866828],[130.949167,42.876913],[130.890653,42.852793],[130.801957,42.879544],[130.784095,42.842265],[130.666451,42.847968],[130.40714,42.731611],[130.464423,42.688525],[130.586995,42.67621],[130.633806,42.603586],[130.570364,42.557327],[130.558661,42.496035],[130.482285,42.626483],[130.388046,42.603145],[130.242069,42.738643],[130.265474,42.904092],[130.10225,42.922935],[130.144134,42.976365],[129.994461,42.980304],[129.98707,42.977678],[129.939642,43.01225],[129.899606,43.002187],[129.85957,42.966295],[129.858338,42.964544],[129.839244,42.879983],[129.835549,42.866828],[129.821382,42.854109],[129.816454,42.851039],[129.7641,42.716227],[129.764716,42.713149],[129.776418,42.69908],[129.794281,42.684127],[129.741926,42.580681],[129.748701,42.470884],[129.704354,42.427176],[129.612579,42.436892],[129.601492,42.42276],[129.546057,42.361336],[129.452434,42.440866],[129.344029,42.451462],[129.239935,42.36841],[129.231928,42.36001],[129.260261,42.335689],[129.183269,42.262225],[129.215914,42.20818],[129.120443,42.142111],[128.954755,42.083966],[128.930734,42.014211],[128.737945,42.050209],[128.70222,42.020434],[128.60675,42.030212],[128.569177,41.996426],[128.466316,42.020878],[128.090593,42.022656],[128.033926,42.000428],[128.106607,41.950164],[128.112766,41.79378],[128.171897,41.713882],[128.278454,41.658922],[128.317258,41.593177],[128.242114,41.501827],[128.203309,41.411246],[128.113998,41.364561],[127.932296,41.446686],[127.850376,41.422912],[127.636645,41.41349],[127.547334,41.477176],[127.40998,41.463278],[127.294183,41.48659],[127.283096,41.513925],[127.115561,41.540353],[127.179618,41.599888],[127.039184,41.671884],[127.051503,41.744693],[126.943714,41.772365],[126.931395,41.812959],[126.808207,41.748264],[126.798968,41.697354],[126.726903,41.751389],[126.688099,41.674119],[126.608643,41.670543],[126.569838,41.621809],[126.497158,41.406758],[126.539041,41.366806],[126.435564,41.351088],[126.322847,41.231054],[126.293282,41.17073],[126.157775,41.091413],[126.031507,40.927067],[125.959442,40.881845],[125.875059,40.90853],[125.817161,40.866915],[125.785132,40.895867],[125.707523,40.866915]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":230000,\"name\":\"黑龙江\",\"center\":[126.642464,45.756967],\"centroid\":[127.693002,48.040469],\"childrenNum\":13,\"level\":\"province\",\"subFeatureIndex\":7,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[123.319527,46.253736],[123.319527,46.253736],[123.248078,46.273178],[123.178476,46.247944],[123.011557,46.43506],[123.002318,46.574257],[123.04605,46.617426],[123.18094,46.614138],[123.228368,46.58824],[123.276411,46.660972],[123.366338,46.677805],[123.603475,46.689299],[123.631808,46.728685],[123.625648,46.84749],[123.576989,46.891259],[123.562823,46.825797],[123.483366,46.845854],[123.52833,46.944797],[123.404526,46.935401],[123.374345,46.837668],[123.309056,46.86222],[123.221592,46.850355],[123.163694,46.740167],[123.026339,46.718841],[122.906847,46.807372],[122.895144,46.960317],[122.796594,46.938261],[122.778116,47.00277],[122.845869,47.046819],[122.679566,47.094092],[122.556378,47.17265],[122.418407,47.350503],[122.507103,47.401555],[122.543443,47.495427],[122.59395,47.547551],[122.763333,47.613338],[122.855108,47.677432],[123.166158,47.783677],[123.228983,47.840735],[123.300432,47.953861],[123.537569,48.021938],[123.746373,48.19772],[123.873256,48.281006],[124.07898,48.436058],[124.25945,48.536391],[124.25945,48.536391],[124.314269,48.503894],[124.317964,48.347856],[124.404812,48.264679],[124.418978,48.181765],[124.467637,48.178972],[124.463942,48.097518],[124.578507,48.251931],[124.579738,48.304095],[124.51876,48.378068],[124.507674,48.445584],[124.555717,48.467805],[124.520608,48.556196],[124.579122,48.596574],[124.653651,48.777089],[124.697383,48.841711],[124.709086,48.920406],[124.808252,49.020563],[124.807636,49.108769],[124.906802,49.183915],[125.117453,49.126],[125.219699,49.188999],[125.261583,49.318656],[125.264047,49.461585],[125.228323,49.486857],[125.234482,49.592077],[125.132236,49.671909],[125.219699,49.669199],[125.222779,49.799137],[125.177815,49.829637],[125.239409,49.844687],[125.231402,49.957606],[125.294228,50.029151],[125.258504,50.103659],[125.334264,50.165023],[125.448829,50.216354],[125.466075,50.297452],[125.519662,50.315795],[125.590495,50.452378],[125.632379,50.443996],[125.740784,50.523184],[125.829479,50.561589],[125.787595,50.677373],[125.825784,50.703906],[125.758646,50.746706],[125.890457,50.805729],[126.073391,50.963514],[126.033971,51.010971],[126.059225,51.043711],[125.878138,51.159431],[125.840566,51.220555],[125.756798,51.227675],[125.743248,51.275984],[125.743248,51.275984],[125.670567,51.34555],[125.670567,51.34555],[125.668103,51.347419],[125.668103,51.347419],[125.63977,51.372451],[125.63977,51.372451],[125.623756,51.387762],[125.623756,51.387762],[125.600966,51.413518],[125.600966,51.413518],[125.597886,51.414638],[125.597886,51.414638],[125.595422,51.416877],[125.595422,51.416877],[125.567089,51.455668],[125.567089,51.455668],[125.35151,51.623876],[125.130388,51.635389],[125.098975,51.658408],[125.047236,51.529801],[124.928976,51.498523],[124.942527,51.447465],[124.864302,51.379547],[124.783614,51.392243],[124.693687,51.332842],[124.62655,51.327608],[124.58713,51.363486],[124.490427,51.380294],[124.43684,51.353772],[124.406659,51.271867],[124.271769,51.308162],[124.239124,51.344429],[124.128255,51.347419],[124.071588,51.320878],[123.926227,51.300681],[123.842459,51.367595],[123.711264,51.398216],[123.661989,51.319008],[123.465504,51.287212],[123.294273,51.25427],[123.058984,51.321999],[122.978296,51.331346],[122.965977,51.387015],[122.903768,51.415384],[122.854492,51.477659],[122.85634,51.606786],[122.749167,51.746661],[122.771957,51.779619],[122.706051,51.890166],[122.726377,51.978704],[122.683877,51.974649],[122.629059,52.136529],[122.769493,52.179843],[122.76087,52.26671],[122.585943,52.266344],[122.478153,52.29636],[122.484313,52.341711],[122.342031,52.41403],[122.310618,52.475299],[122.207756,52.469103],[122.168952,52.513549],[122.091344,52.427167],[121.94783,52.298555],[121.841272,52.282818],[121.714389,52.317944],[121.63986,52.444311],[121.519136,52.456709],[121.416274,52.499346],[121.325731,52.572498],[121.182217,52.599399],[121.373158,52.683268],[121.476636,52.772043],[121.591201,52.824499],[121.610295,52.892416],[121.66265,52.912626],[121.715621,52.998054],[121.785838,53.018575],[121.817867,53.061744],[121.754425,53.146519],[121.665114,53.170556],[121.679896,53.240437],[121.612143,53.260484],[121.499426,53.337008],[121.596128,53.352368],[121.697758,53.392705],[121.754425,53.389494],[121.875765,53.426587],[122.111054,53.426944],[122.161561,53.468635],[122.227466,53.461868],[122.350038,53.50566],[122.435038,53.444766],[122.608117,53.46543],[122.894528,53.462936],[123.052209,53.506727],[123.137209,53.498186],[123.274563,53.563269],[123.454417,53.536608],[123.510468,53.509218],[123.517243,53.558293],[123.569598,53.505304],[123.58746,53.546919],[123.668764,53.533763],[123.698329,53.498542],[123.865249,53.489644],[124.058038,53.404121],[124.125791,53.348082],[124.239124,53.379501],[124.327819,53.332006],[124.375863,53.259053],[124.435609,53.223962],[124.563108,53.201389],[124.683832,53.206406],[124.734339,53.146519],[124.832889,53.145083],[124.87231,53.099123],[124.887708,53.164458],[124.970244,53.194221],[125.195062,53.198522],[125.315786,53.145083],[125.503647,53.095171],[125.530749,53.050956],[125.613901,53.083313],[125.684118,53.008136],[125.742632,52.993733],[125.737704,52.945087],[125.665023,52.913348],[125.678574,52.860999],[125.772197,52.89783],[125.855349,52.866418],[125.985312,52.758648],[126.058609,52.798098],[126.115275,52.757924],[126.045058,52.738366],[126.061688,52.673473],[125.995783,52.675287],[125.968682,52.630279],[126.030891,52.576135],[126.066616,52.60376],[126.213209,52.5252],[126.205202,52.466187],[126.266796,52.475664],[126.353644,52.389207],[126.327774,52.310628],[126.4331,52.298555],[126.300673,52.220915],[126.34502,52.192315],[126.499005,52.160394],[126.563679,52.119266],[126.514404,52.037264],[126.450962,52.027693],[126.462665,51.948473],[126.510092,51.922281],[126.622809,51.777397],[126.734294,51.711454],[126.741069,51.642073],[126.69549,51.578536],[126.837156,51.536128],[126.784185,51.44821],[126.908605,51.407174],[126.930163,51.359376],[126.837156,51.345177],[126.841468,51.258763],[126.92154,51.259512],[126.887047,51.321999],[126.978822,51.329477],[126.976358,51.291702],[126.899982,51.200689],[126.922772,51.061764],[127.143894,50.91035],[127.236285,50.781524],[127.295415,50.755035],[127.294799,50.663721],[127.370559,50.581349],[127.293567,50.46571],[127.3644,50.43828],[127.332371,50.340623],[127.371791,50.296688],[127.603385,50.23932],[127.58737,50.137802],[127.501755,50.056817],[127.495595,49.994545],[127.543638,49.944131],[127.531936,49.825777],[127.563964,49.793343],[127.660051,49.77905],[127.677913,49.697846],[127.815268,49.594017],[127.897804,49.578889],[128.001281,49.592465],[128.070882,49.55677],[128.185447,49.539301],[128.287077,49.566473],[128.343128,49.545125],[128.389939,49.590138],[128.537764,49.604487],[128.715155,49.56492],[128.744104,49.594792],[128.813089,49.558323],[128.754575,49.506676],[128.792147,49.473251],[128.871604,49.492298],[129.013886,49.457307],[129.055769,49.382188],[129.143849,49.357253],[129.215298,49.398935],[129.320623,49.358422],[129.379138,49.366995],[129.390224,49.432799],[129.448739,49.441359],[129.546057,49.395041],[129.562687,49.299541],[129.604571,49.278858],[129.714209,49.296029],[129.761636,49.257384],[129.753629,49.208547],[129.847867,49.181177],[129.866962,49.114252],[129.913157,49.108377],[129.937179,49.04057],[130.020946,49.020955],[130.059135,48.978954],[130.211272,48.901137],[130.245148,48.866514],[130.471198,48.905464],[130.501995,48.86612],[130.680617,48.881074],[130.689856,48.849586],[130.622103,48.783792],[130.538335,48.612004],[130.605473,48.5942],[130.620871,48.495964],[130.767465,48.507858],[130.740363,48.425339],[130.845073,48.296533],[130.769313,48.23121],[130.765617,48.189344],[130.673842,48.128278],[130.699711,48.044344],[130.891269,47.927006],[130.961486,47.827882],[130.966413,47.732996],[131.029855,47.694752],[131.115471,47.689919],[131.273767,47.739032],[131.456085,47.747079],[131.543548,47.735813],[131.59036,47.660912],[131.695685,47.709248],[131.825649,47.677432],[131.970394,47.671388],[132.000575,47.712066],[132.086191,47.703208],[132.272205,47.718507],[132.371987,47.76518],[132.469305,47.726154],[132.570319,47.720922],[132.599268,47.792521],[132.687348,47.885293],[132.661478,47.944643],[132.723072,47.963076],[132.819159,47.937028],[132.883216,48.002325],[132.992238,48.035142],[133.041513,48.102313],[133.15423,48.137063],[133.302055,48.103112],[133.407997,48.124684],[133.536728,48.117494],[133.59709,48.194928],[133.693177,48.186951],[133.740604,48.25472],[134.0689,48.338311],[134.131109,48.335527],[134.20379,48.38244],[134.350384,48.378466],[134.501905,48.418986],[134.696542,48.407072],[134.820961,48.376081],[134.927519,48.451537],[135.09567,48.437646],[135.082736,48.396346],[134.864077,48.332345],[134.679295,48.256314],[134.67252,48.170593],[134.632484,48.099516],[134.551796,48.032742],[134.607846,47.909362],[134.660201,47.900538],[134.678679,47.819446],[134.772918,47.763572],[134.779694,47.716091],[134.684223,47.631889],[134.685455,47.603253],[134.576434,47.519273],[134.568426,47.478445],[134.493898,47.446894],[134.339297,47.43961],[134.177305,47.32658],[134.156979,47.248656],[134.230276,47.182411],[134.222268,47.105496],[134.142812,47.093277],[134.042414,46.886761],[134.011001,46.637971],[133.919842,46.596052],[133.852089,46.449903],[133.950023,46.394634],[133.876726,46.362438],[133.922922,46.330635],[133.904444,46.25084],[133.83977,46.202825],[133.706111,46.163056],[133.745531,46.075547],[133.676546,45.942982],[133.616184,45.943398],[133.576148,45.870957],[133.51209,45.886785],[133.470822,45.838035],[133.484373,45.738737],[133.445569,45.70532],[133.491764,45.672301],[133.371656,45.576895],[133.21028,45.516975],[133.141295,45.427605],[133.095715,45.246753],[133.138215,45.178469],[133.103107,45.107147],[132.945426,45.020512],[132.867202,45.061944],[132.394161,45.163706],[132.025829,45.250545],[131.93159,45.288442],[131.917423,45.339354],[131.82996,45.31159],[131.79362,45.211778],[131.721555,45.234536],[131.650722,45.159909],[131.695685,45.132056],[131.632244,45.074621],[131.484418,44.995553],[131.464708,44.963388],[131.355687,44.98963],[131.274999,44.919766],[131.16105,44.948145],[131.090217,44.924426],[131.07913,44.881623],[130.967029,44.854059],[131.016304,44.789551],[131.064348,44.787003],[131.111775,44.71009],[131.310723,44.046392],[131.263912,44.030047],[131.267608,43.938778],[131.211557,43.826221],[131.244818,43.604369],[131.20047,43.531971],[131.304564,43.502033],[131.294093,43.469909],[131.134565,43.428643],[131.134565,43.428643],[131.026775,43.508542],[130.907283,43.434291],[130.841378,43.454274],[130.823515,43.502901],[130.488444,43.655905],[130.4133,43.652009],[130.423771,43.742853],[130.380039,43.783904],[130.383119,43.906025],[130.338155,43.949979],[130.338155,43.949979],[130.353554,44.050262],[130.260547,43.948256],[130.189098,43.940501],[130.079461,43.835285],[130.079461,43.835285],[130.027106,43.851684],[130.017251,43.962039],[129.98091,44.014128],[129.880512,44.000357],[129.880512,44.000357],[129.869425,44.005521],[129.869425,44.005521],[129.784426,43.964623],[129.742542,43.875841],[129.467833,43.874548],[129.406855,43.819314],[129.211602,43.784336],[129.230696,43.59527],[129.014501,43.523295],[128.949212,43.55409],[128.877763,43.540213],[128.719467,43.816724],[128.760734,43.857724],[128.723778,43.894816],[128.636315,43.891366],[128.644938,43.936193],[128.584576,43.990887],[128.574721,44.047682],[128.450301,44.203157],[128.481714,44.375332],[128.46262,44.433894],[128.373309,44.51416],[128.211317,44.431757],[128.190375,44.367206],[128.049941,44.349239],[128.101679,44.290593],[128.089977,44.132342],[128.059796,44.110007],[127.862079,44.063162],[127.729036,44.098836],[127.724109,44.196723],[127.681609,44.167116],[127.591066,44.227601],[127.623095,44.277743],[127.483892,44.401842],[127.483892,44.401842],[127.50853,44.437312],[127.463566,44.484713],[127.536247,44.522266],[127.557189,44.575566],[127.392733,44.632223],[127.182082,44.644144],[127.094003,44.615189],[127.049039,44.567041],[127.037336,44.72157],[126.984366,44.823936],[127.021938,44.899002],[127.085995,44.944757],[126.968351,45.074621],[126.96404,45.132056],[126.831613,45.146406],[126.567375,45.252651],[126.428172,45.2358],[126.321615,45.178891],[126.166398,45.133323],[125.915095,45.196602],[125.760494,45.291389],[125.697052,45.349447],[125.716146,45.421725],[125.687813,45.51404],[125.628067,45.522006],[125.497488,45.469161],[125.424807,45.485523],[125.398322,45.416686],[125.347815,45.395262],[125.248649,45.417526],[125.06941,45.384757],[125.025678,45.493492],[124.961005,45.49517],[124.923433,45.541286],[124.886476,45.442719],[124.625318,45.437262],[124.544014,45.412066],[124.480572,45.456151],[124.398652,45.44062],[124.354305,45.546734],[124.287783,45.539191],[124.273001,45.584014],[124.129487,45.637589],[124.13811,45.68735],[124.009379,45.78215],[124.064813,45.797586],[124.061118,45.886369],[123.996444,45.907189],[123.970574,45.971267],[124.040176,46.019484],[123.99398,46.101275],[123.982893,46.22601],[123.896046,46.303774],[123.779633,46.264078],[123.610866,46.252909],[123.565902,46.22601],[123.498765,46.259528],[123.373113,46.223112],[123.319527,46.253736]]],[[[124.43992,50.388713],[124.36416,50.360857],[124.368471,50.258068],[124.32474,50.178436],[124.278544,50.231284],[124.189233,50.216737],[124.103001,50.238555],[124.061733,50.199122],[124.007531,50.219417],[123.953944,50.186865],[123.878799,50.208696],[123.870792,50.270307],[123.777785,50.344441],[123.800575,50.455806],[123.920067,50.37307],[124.005067,50.434469],[123.983509,50.510249],[124.076516,50.564249],[124.289015,50.553226],[124.322892,50.532693],[124.43992,50.539919],[124.43992,50.388713]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":310000,\"name\":\"上海\",\"center\":[121.472644,31.231706],\"centroid\":[121.438732,31.072508],\"childrenNum\":16,\"level\":\"province\",\"subFeatureIndex\":8,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[121.970004,30.789217],[121.943518,30.77688],[121.904714,30.814399],[121.601056,30.805149],[121.426129,30.730089],[121.362071,30.679673],[121.274608,30.677615],[121.217942,30.785105],[121.123087,30.778936],[121.097218,30.85704],[120.989428,30.833924],[120.991892,31.00793],[120.901349,31.017673],[120.881023,31.134513],[121.076892,31.158581],[121.063341,31.268088],[121.150188,31.275247],[121.106457,31.364697],[121.173594,31.448956],[121.25613,31.478047],[121.25613,31.478047],[121.302325,31.498966],[121.302325,31.498966],[121.343593,31.512229],[121.520984,31.394835],[121.713773,31.308992],[121.946598,31.065861],[121.990945,30.968434],[121.970004,30.789217]]],[[[121.371926,31.553028],[121.145261,31.753699],[121.200079,31.835066],[121.323267,31.86861],[121.43352,31.768452],[121.715005,31.673788],[121.974931,31.617249],[121.995873,31.493354],[121.890547,31.428537],[121.819098,31.438237],[121.547469,31.531101],[121.434136,31.59024],[121.371926,31.553028]]],[[[121.74149,31.345792],[121.509897,31.482639],[121.742106,31.407091],[121.74149,31.345792]]],[[[121.844352,31.294678],[121.792613,31.377468],[121.914569,31.343236],[121.844352,31.294678]]],[[[121.943518,31.215397],[122.008808,31.221026],[121.995873,31.160629],[121.943518,31.215397]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":320000,\"name\":\"江苏\",\"center\":[118.767413,32.041544],\"centroid\":[119.48196,32.985864],\"childrenNum\":13,\"level\":\"province\",\"subFeatureIndex\":9,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[121.974931,31.617249],[121.715005,31.673788],[121.43352,31.768452],[121.323267,31.86861],[121.200079,31.835066],[121.145261,31.753699],[121.371926,31.553028],[121.343593,31.512229],[121.302325,31.498966],[121.302325,31.498966],[121.25613,31.478047],[121.25613,31.478047],[121.173594,31.448956],[121.106457,31.364697],[121.150188,31.275247],[121.063341,31.268088],[121.076892,31.158581],[120.881023,31.134513],[120.901349,31.017673],[120.698089,30.970999],[120.713487,30.885286],[120.589068,30.854472],[120.504684,30.757858],[120.423996,30.900689],[120.35809,30.88734],[120.371025,30.948424],[120.226279,30.926356],[120.13512,30.941752],[120.001461,31.026902],[119.919542,31.170868],[119.678093,31.168308],[119.623891,31.130416],[119.460051,31.156533],[119.388602,31.194415],[119.388602,31.194415],[119.379979,31.269622],[119.267878,31.250698],[119.199508,31.293655],[119.075089,31.232282],[118.781286,31.239956],[118.728931,31.281384],[118.745561,31.37287],[118.853967,31.39841],[118.876756,31.532631],[118.873061,31.53569],[118.858278,31.624382],[118.804691,31.618268],[118.77451,31.682444],[118.736938,31.634061],[118.643931,31.65138],[118.697518,31.709935],[118.638388,31.759295],[118.552772,31.729275],[118.481939,31.778117],[118.504729,31.841674],[118.363679,31.930581],[118.400019,32.077724],[118.499801,32.1203],[118.522591,32.188178],[118.642083,32.208937],[118.69567,32.31721],[118.69259,32.463224],[118.592192,32.481396],[118.563859,32.56363],[118.719076,32.614042],[118.719076,32.614042],[118.92172,32.557074],[118.922336,32.557074],[118.92172,32.557074],[118.922336,32.557074],[118.978386,32.504106],[119.041212,32.515207],[119.084944,32.452622],[119.22045,32.57674],[119.184726,32.825465],[119.104038,32.82647],[118.995017,32.958604],[118.849039,32.956596],[118.811467,32.854622],[118.74125,32.850601],[118.756648,32.737433],[118.707373,32.720319],[118.375382,32.718809],[118.250346,32.84859],[118.2331,32.914414],[118.293462,32.947056],[118.244803,32.998256],[118.221397,33.182228],[118.038463,33.134642],[117.939297,33.262813],[117.971941,33.277821],[118.050782,33.492148],[118.108064,33.475181],[118.112376,33.617302],[118.16781,33.66313],[118.116071,33.767645],[117.901724,33.719883],[117.805638,33.736304],[117.752667,33.711422],[117.758826,33.885445],[117.715095,33.879485],[117.629479,34.028872],[117.575892,33.982744],[117.514914,34.061097],[117.410205,34.026888],[117.352922,34.089842],[117.192778,34.068532],[117.025243,34.167106],[117.04988,34.242321],[116.971656,34.279409],[116.969192,34.387613],[116.828142,34.389094],[116.774555,34.452764],[116.574991,34.488773],[116.595933,34.510469],[116.491839,34.57109],[116.429629,34.652834],[116.374195,34.640036],[116.408071,34.85095],[116.445028,34.89562],[116.677853,34.939285],[116.821983,34.929475],[116.966728,34.875497],[117.000605,34.793482],[117.088069,34.702039],[117.07575,34.637575],[117.137344,34.633144],[117.175532,34.47003],[117.242669,34.445856],[117.301184,34.557294],[117.301184,34.557294],[117.322125,34.566656],[117.322125,34.566656],[117.32151,34.566656],[117.32151,34.566656],[117.322125,34.574046],[117.322125,34.574046],[117.402813,34.569612],[117.465023,34.484827],[117.592523,34.462631],[117.684298,34.547439],[117.801942,34.51885],[117.793935,34.65185],[117.902956,34.644467],[117.951615,34.678424],[118.084042,34.655788],[118.079115,34.569612],[118.185056,34.543989],[118.132702,34.483348],[118.177665,34.453257],[118.179513,34.379218],[118.290382,34.424637],[118.404947,34.427598],[118.440671,34.527724],[118.424657,34.595228],[118.460997,34.65628],[118.601431,34.714336],[118.690127,34.678424],[118.783749,34.723188],[118.719076,34.745315],[118.772047,34.794464],[118.860742,34.94419],[118.865053,35.029974],[118.928495,35.051039],[119.114509,35.054958],[119.137915,35.09609],[119.286972,35.11518],[119.306066,35.076506],[119.238929,35.04908],[119.202588,34.890222],[119.238313,34.799378],[119.378747,34.764487],[119.459435,34.770876],[119.50871,34.729089],[119.465594,34.673012],[119.582623,34.598676],[119.781571,34.515892],[119.811752,34.48532],[119.962657,34.458684],[120.311895,34.307091],[120.367329,34.091328],[120.583524,33.668608],[120.651277,33.575937],[120.741205,33.337826],[120.821893,33.298327],[120.90566,33.030366],[120.929682,32.876232],[120.974646,32.874724],[120.966638,32.770141],[120.900733,32.72334],[120.916131,32.642261],[121.153268,32.529333],[121.352216,32.47433],[121.425513,32.430909],[121.472941,32.138034],[121.524063,32.137528],[121.759352,32.059471],[121.856055,31.95546],[121.970004,31.719096],[121.974931,31.617249]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":330000,\"name\":\"浙江\",\"center\":[120.153576,30.287459],\"centroid\":[120.109522,29.181876],\"childrenNum\":11,\"level\":\"province\",\"subFeatureIndex\":10,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[120.461568,27.14259],[120.401206,27.211253],[120.430155,27.258601],[120.34146,27.39946],[120.26262,27.432921],[120.13512,27.420175],[120.052584,27.338886],[120.007005,27.376084],[119.843165,27.300611],[119.770484,27.305928],[119.685485,27.438762],[119.70889,27.514141],[119.630666,27.582574],[119.644217,27.663684],[119.501319,27.649905],[119.474833,27.539079],[119.376899,27.534835],[119.267878,27.421237],[119.194581,27.418582],[118.983314,27.498751],[118.903858,27.462125],[118.869365,27.54014],[118.913713,27.61651],[118.818242,27.916697],[118.730163,27.970611],[118.719076,28.063576],[118.802228,28.117416],[118.771431,28.188634],[118.802228,28.240303],[118.700598,28.310912],[118.674728,28.271398],[118.587881,28.28299],[118.444367,28.25348],[118.433896,28.288786],[118.486867,28.328821],[118.432048,28.402003],[118.472084,28.482497],[118.426505,28.532447],[118.425273,28.537177],[118.426505,28.532447],[118.425273,28.537177],[118.421577,28.540331],[118.421577,28.541908],[118.423425,28.587626],[118.423425,28.587626],[118.431432,28.679528],[118.379077,28.785509],[118.379077,28.785509],[118.306396,28.823782],[118.270056,28.918619],[118.111144,28.997671],[118.111144,28.997671],[118.037847,29.097054],[118.027992,29.168132],[118.077883,29.290836],[118.136397,29.284052],[118.20723,29.346135],[118.193064,29.395149],[118.316252,29.422774],[118.310708,29.49623],[118.496106,29.519662],[118.500417,29.575877],[118.573714,29.638302],[118.644547,29.641942],[118.744945,29.738621],[118.755416,29.845586],[118.894619,29.93792],[118.902626,30.029133],[118.847807,30.163208],[118.929727,30.202515],[118.880452,30.31518],[118.954365,30.360106],[119.06277,30.304849],[119.201356,30.290901],[119.246936,30.341002],[119.36766,30.384885],[119.326392,30.532906],[119.237081,30.54682],[119.238929,30.60915],[119.312225,30.620993],[119.386754,30.685333],[119.416935,30.642101],[119.482841,30.70437],[119.479761,30.772253],[119.575847,30.829814],[119.585702,30.976642],[119.633746,31.019724],[119.623891,31.130416],[119.678093,31.168308],[119.919542,31.170868],[120.001461,31.026902],[120.13512,30.941752],[120.226279,30.926356],[120.371025,30.948424],[120.35809,30.88734],[120.423996,30.900689],[120.504684,30.757858],[120.589068,30.854472],[120.713487,30.885286],[120.698089,30.970999],[120.901349,31.017673],[120.991892,31.00793],[120.989428,30.833924],[121.097218,30.85704],[121.123087,30.778936],[121.217942,30.785105],[121.274608,30.677615],[121.058413,30.563823],[121.225333,30.404496],[121.328195,30.397271],[121.497578,30.258864],[121.632469,30.072119],[121.721164,29.992865],[121.78399,29.993383],[121.919497,29.920808],[121.968156,29.956584],[122.00696,29.891764],[122.140003,29.901619],[122.10243,29.859597],[121.997721,29.759919],[121.937359,29.748491],[121.833265,29.653382],[121.966308,29.635702],[122.000185,29.582642],[121.968772,29.515497],[121.993409,29.451954],[121.937975,29.384201],[121.986634,29.15507],[121.966308,29.053128],[121.884388,29.105419],[121.780294,29.109601],[121.767975,29.166565],[121.660186,29.118487],[121.774751,28.864138],[121.668193,28.873046],[121.704534,28.816443],[121.689135,28.719415],[121.540694,28.655379],[121.634317,28.56293],[121.687287,28.40095],[121.627541,28.251899],[121.499426,28.306171],[121.373774,28.133246],[121.288159,28.144854],[121.261057,28.034533],[121.140949,28.031364],[121.108304,28.13905],[121.059029,28.096305],[120.991892,27.95],[121.05595,27.900306],[121.162507,27.90718],[121.152652,27.810376],[121.153268,27.809847],[121.149572,27.801908],[121.149572,27.801379],[121.149572,27.80085],[121.13479,27.787088],[121.134174,27.787088],[121.152036,27.815139],[121.027616,27.832601],[120.942001,27.896605],[120.797871,27.779677],[120.634647,27.577271],[120.703016,27.478581],[120.673451,27.369708],[120.572437,27.313903],[120.544104,27.154303],[120.461568,27.14259]]],[[[122.301379,29.942068],[122.163408,29.988201],[122.038989,29.989756],[121.991561,30.075743],[121.990945,30.076261],[121.952757,30.183898],[122.152938,30.113015],[122.293988,30.100075],[122.347574,30.014109],[122.301379,29.942068]]],[[[122.100583,30.304333],[122.228082,30.329641],[122.22993,30.232503],[122.058083,30.291934],[122.100583,30.304333]]],[[[122.317393,30.249561],[122.40732,30.272817],[122.397465,30.225266],[122.317393,30.249561]]],[[[122.435038,29.906287],[122.391922,29.831573],[122.327248,29.922883],[122.411632,29.951918],[122.435038,29.906287]]],[[[122.353734,30.464339],[122.423335,30.408624],[122.281669,30.418944],[122.277973,30.471558],[122.353734,30.464339]]],[[[122.303843,29.832611],[122.310002,29.766671],[122.221307,29.832611],[122.303843,29.832611]]],[[[122.13138,29.673659],[122.047612,29.719396],[122.130148,29.79056],[122.200981,29.711082],[122.192358,29.655462],[122.13138,29.673659]]],[[[121.943518,30.77688],[121.970004,30.789217],[122.011271,30.669381],[121.968156,30.68842],[121.943518,30.77688]]],[[[121.874533,29.964878],[121.835113,29.992865],[121.855439,30.085062],[121.924424,30.052441],[121.933047,29.994938],[121.874533,29.964878]]],[[[122.155401,29.97058],[122.154169,29.971098],[122.152322,29.971098],[122.163408,29.988201],[122.155401,29.97058]]],[[[121.136638,27.948414],[121.041783,27.943657],[121.0695,27.984349],[121.136638,27.948414]]],[[[121.134174,27.786029],[121.134174,27.787088],[121.13479,27.787088],[121.134174,27.786029]]],[[[122.152322,29.971098],[122.154169,29.971098],[122.155401,29.97058],[122.152322,29.971098]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":340000,\"name\":\"安徽\",\"center\":[117.283042,31.86119],\"centroid\":[117.226894,31.849585],\"childrenNum\":16,\"level\":\"province\",\"subFeatureIndex\":11,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[115.5088,32.468777],[115.409018,32.549005],[115.304924,32.553039],[115.20083,32.591864],[115.183584,32.665937],[115.197135,32.85613],[115.139237,32.897837],[114.943368,32.935005],[114.883006,32.990227],[114.925506,33.016821],[114.902716,33.129632],[114.966158,33.147167],[115.042534,33.08653],[115.168186,33.088535],[115.301229,33.141657],[115.365286,33.335826],[115.312931,33.376307],[115.345576,33.503125],[115.421953,33.556992],[115.639995,33.584909],[115.563003,33.771624],[115.614126,33.775603],[115.629524,33.871536],[115.546988,33.875014],[115.60735,34.030359],[115.736082,34.076957],[115.877132,34.003083],[115.95782,34.007547],[116.00032,33.964881],[115.987385,33.900842],[116.05945,33.861103],[116.074232,33.781571],[116.155536,33.709929],[116.263326,33.729835],[116.316297,33.771127],[116.437021,33.801461],[116.437637,33.846694],[116.64336,33.896869],[116.648288,33.973317],[116.575607,34.069028],[116.575607,34.069028],[116.530643,34.107183],[116.565752,34.173541],[116.516477,34.296217],[116.409303,34.273971],[116.409303,34.273971],[116.26271,34.375762],[116.213435,34.382181],[116.162312,34.459178],[116.204196,34.508497],[116.196804,34.576017],[116.240536,34.552367],[116.281188,34.60754],[116.374195,34.640036],[116.429629,34.652834],[116.491839,34.57109],[116.595933,34.510469],[116.574991,34.488773],[116.774555,34.452764],[116.828142,34.389094],[116.969192,34.387613],[116.971656,34.279409],[117.04988,34.242321],[117.025243,34.167106],[117.192778,34.068532],[117.352922,34.089842],[117.410205,34.026888],[117.514914,34.061097],[117.575892,33.982744],[117.629479,34.028872],[117.715095,33.879485],[117.758826,33.885445],[117.752667,33.711422],[117.805638,33.736304],[117.901724,33.719883],[118.116071,33.767645],[118.16781,33.66313],[118.112376,33.617302],[118.108064,33.475181],[118.050782,33.492148],[117.971941,33.277821],[117.939297,33.262813],[118.038463,33.134642],[118.221397,33.182228],[118.244803,32.998256],[118.293462,32.947056],[118.2331,32.914414],[118.250346,32.84859],[118.375382,32.718809],[118.707373,32.720319],[118.756648,32.737433],[118.74125,32.850601],[118.811467,32.854622],[118.849039,32.956596],[118.995017,32.958604],[119.104038,32.82647],[119.184726,32.825465],[119.22045,32.57674],[119.084944,32.452622],[119.041212,32.515207],[118.978386,32.504106],[118.922336,32.557074],[118.92172,32.557074],[118.922336,32.557074],[118.92172,32.557074],[118.719076,32.614042],[118.719076,32.614042],[118.563859,32.56363],[118.592192,32.481396],[118.69259,32.463224],[118.69567,32.31721],[118.642083,32.208937],[118.522591,32.188178],[118.499801,32.1203],[118.400019,32.077724],[118.363679,31.930581],[118.504729,31.841674],[118.481939,31.778117],[118.552772,31.729275],[118.638388,31.759295],[118.697518,31.709935],[118.643931,31.65138],[118.736938,31.634061],[118.77451,31.682444],[118.804691,31.618268],[118.858278,31.624382],[118.873061,31.53569],[118.866285,31.527021],[118.870597,31.526001],[118.876756,31.532631],[118.853967,31.39841],[118.745561,31.37287],[118.728931,31.281384],[118.781286,31.239956],[119.075089,31.232282],[119.199508,31.293655],[119.267878,31.250698],[119.379979,31.269622],[119.388602,31.194415],[119.388602,31.194415],[119.460051,31.156533],[119.623891,31.130416],[119.633746,31.019724],[119.585702,30.976642],[119.575847,30.829814],[119.479761,30.772253],[119.482841,30.70437],[119.416935,30.642101],[119.386754,30.685333],[119.312225,30.620993],[119.238929,30.60915],[119.237081,30.54682],[119.326392,30.532906],[119.36766,30.384885],[119.246936,30.341002],[119.201356,30.290901],[119.06277,30.304849],[118.954365,30.360106],[118.880452,30.31518],[118.929727,30.202515],[118.847807,30.163208],[118.902626,30.029133],[118.894619,29.93792],[118.755416,29.845586],[118.744945,29.738621],[118.644547,29.641942],[118.573714,29.638302],[118.500417,29.575877],[118.496106,29.519662],[118.310708,29.49623],[118.316252,29.422774],[118.193064,29.395149],[118.136397,29.419125],[118.134549,29.508728],[118.008282,29.578479],[117.872775,29.547774],[117.807486,29.573796],[117.707703,29.548815],[117.647957,29.614897],[117.545711,29.594089],[117.532161,29.651822],[117.453936,29.688214],[117.455168,29.749011],[117.384335,29.84351],[117.29256,29.822749],[117.246365,29.915104],[117.17738,29.921846],[117.073286,29.832092],[117.136728,29.7755],[117.112706,29.712121],[116.780715,29.570153],[116.651983,29.637262],[116.677237,29.66898],[116.694483,29.672099],[116.694483,29.672099],[116.717273,29.690813],[116.710498,29.69705],[116.709882,29.69757],[116.706186,29.69809],[116.698795,29.707964],[116.684012,29.72823],[116.789954,29.795233],[116.882961,29.89332],[116.900207,29.949326],[116.83307,29.957621],[116.747454,30.057101],[116.666766,30.076779],[116.586078,30.046226],[116.552201,29.909918],[116.473361,29.89747],[116.26271,29.782251],[116.207891,29.82742],[116.13521,29.819634],[116.127203,29.899544],[116.073616,29.970061],[116.091479,30.036385],[116.065609,30.204584],[115.985537,30.290901],[115.903001,30.313631],[115.921479,30.416364],[115.876516,30.582368],[115.819234,30.59782],[115.762567,30.685848],[115.782893,30.751687],[115.851262,30.756829],[115.865429,30.864231],[115.976298,30.931488],[116.071769,30.956633],[116.058834,31.012545],[115.938726,31.047409],[115.869125,31.147828],[115.763799,31.118123],[115.700973,31.201068],[115.646155,31.209768],[115.559307,31.160117],[115.516191,31.263485],[115.457677,31.281384],[115.442279,31.346303],[115.372062,31.349368],[115.373909,31.405559],[115.371446,31.495905],[115.496481,31.674297],[115.660937,31.760822],[115.767495,31.787272],[115.816154,31.762348],[115.909777,31.791849],[115.893146,31.833033],[115.931334,31.994541],[115.941805,32.166402],[115.912856,32.227666],[115.899306,32.391005],[115.845719,32.501583],[115.789052,32.468777],[115.706517,32.494014],[115.667712,32.409696],[115.567314,32.421819],[115.509416,32.466758],[115.510648,32.467768],[115.510648,32.468272],[115.510648,32.468777],[115.5088,32.468777]]],[[[116.717273,29.690813],[116.694483,29.672099],[116.694483,29.672099],[116.677237,29.66898],[116.684012,29.72823],[116.698795,29.707964],[116.706186,29.69809],[116.709882,29.69757],[116.710498,29.69705],[116.709882,29.69757],[116.717273,29.690813]]],[[[118.873061,31.53569],[118.876756,31.532631],[118.870597,31.526001],[118.866285,31.527021],[118.873061,31.53569]]],[[[115.510648,32.468777],[115.510648,32.468272],[115.510648,32.467768],[115.509416,32.466758],[115.5088,32.468777],[115.510648,32.468777]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":350000,\"name\":\"福建\",\"center\":[119.306239,26.075302],\"centroid\":[118.005928,26.070282],\"childrenNum\":9,\"level\":\"province\",\"subFeatureIndex\":12,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[120.461568,27.14259],[120.393199,27.081343],[120.287257,27.094128],[120.29588,27.035519],[120.231823,26.907006],[120.117258,26.916609],[120.047041,26.824809],[120.1382,26.79704],[120.165917,26.73133],[120.110483,26.692848],[120.1382,26.637775],[119.967585,26.597657],[119.896136,26.516306],[119.827767,26.524872],[119.851788,26.595516],[119.949107,26.624404],[120.052584,26.786892],[119.942947,26.784756],[119.86965,26.642588],[119.83023,26.69071],[119.711354,26.686433],[119.665159,26.725986],[119.577695,26.622264],[119.788346,26.58321],[119.876426,26.359867],[119.962657,26.373269],[119.8986,26.308388],[119.841317,26.322333],[119.668854,26.256887],[119.604181,26.168853],[119.668854,26.025924],[119.723673,26.011406],[119.688564,25.897892],[119.632514,25.884436],[119.635594,25.746011],[119.601101,25.683479],[119.472986,25.662448],[119.586934,25.592317],[119.634362,25.475161],[119.716898,25.550758],[119.716898,25.551838],[119.683637,25.592856],[119.785883,25.667841],[119.790194,25.614439],[119.883817,25.54644],[119.812368,25.523225],[119.864107,25.479482],[119.764325,25.433562],[119.773564,25.395732],[119.646064,25.460576],[119.649144,25.34275],[119.549362,25.367082],[119.48592,25.364919],[119.490232,25.447069],[119.438493,25.412487],[119.452044,25.490824],[119.36458,25.521065],[119.354725,25.427077],[119.288204,25.410865],[119.256175,25.488664],[119.14469,25.388165],[119.299291,25.32869],[119.380595,25.250247],[119.293131,25.23347],[119.26911,25.15984],[119.131755,25.223187],[119.165632,25.145217],[119.119436,25.012447],[119.107118,25.075327],[119.035669,25.125717],[119.081248,25.218856],[118.989473,25.202075],[118.996864,25.266481],[118.911249,25.241589],[118.981466,25.19612],[118.975923,25.118133],[118.868133,25.082372],[118.928495,25.025459],[119.02335,25.04877],[118.989473,24.973944],[119.032589,24.962011],[119.032589,24.961468],[118.918024,24.924034],[118.96114,24.871933],[118.86259,24.886589],[118.650707,24.808949],[118.786213,24.776358],[118.703677,24.665485],[118.675344,24.57628],[118.558316,24.512602],[118.557084,24.573016],[118.444367,24.614907],[118.355056,24.534376],[118.242955,24.512602],[118.134549,24.575736],[118.12531,24.571927],[118.048934,24.418385],[118.088354,24.409123],[118.158571,24.270111],[118.001507,24.176805],[117.762522,23.88718],[117.671979,23.877879],[117.612849,23.71364],[117.500132,23.703232],[117.463791,23.58539],[117.387415,23.555228],[117.192778,23.561809],[117.192778,23.629799],[117.053576,23.696657],[117.012308,23.855446],[116.980279,23.881709],[116.981511,23.999282],[116.939627,24.033713],[116.9347,24.127123],[116.998757,24.178988],[116.933468,24.21992],[116.903903,24.369888],[116.860787,24.462507],[116.789338,24.50988],[116.761005,24.58281],[116.815207,24.655154],[116.778867,24.680165],[116.597165,24.65461],[116.525716,24.604572],[116.486912,24.71876],[116.44626,24.714412],[116.376659,24.820353],[116.245464,24.793197],[116.18079,24.87519],[116.068073,24.849675],[116.014486,24.905584],[115.89253,24.937056],[115.873436,25.020038],[115.928255,25.050396],[115.880212,25.092126],[115.855574,25.209654],[115.929487,25.234553],[116.008327,25.319496],[116.005247,25.490284],[116.063145,25.563173],[116.067457,25.703967],[116.18079,25.774571],[116.131515,25.82413],[116.176478,25.893048],[116.258398,25.902736],[116.36434,25.960312],[116.383434,26.029687],[116.489375,26.113529],[116.471513,26.175296],[116.396985,26.166168],[116.412999,26.298197],[116.519557,26.410251],[116.601476,26.372733],[116.610716,26.477216],[116.539267,26.559129],[116.566368,26.650075],[116.516477,26.69071],[116.557745,26.774073],[116.548506,26.839758],[116.679085,26.978479],[116.910062,27.034453],[117.05296,27.100519],[117.043721,27.139928],[117.171836,27.290509],[117.100387,27.338886],[117.133032,27.4223],[117.084989,27.564011],[117.01662,27.563481],[117.040641,27.670043],[117.096692,27.626582],[117.118865,27.694416],[117.204481,27.683819],[117.296872,27.764854],[117.27901,27.870161],[117.341836,27.855879],[117.52169,27.982236],[117.608537,27.863814],[117.740348,27.800321],[117.78716,27.896076],[117.856145,27.945772],[117.999043,27.991218],[118.096977,27.96744],[118.155491,28.061992],[118.356288,28.091555],[118.37415,28.188106],[118.314404,28.22238],[118.433896,28.288786],[118.444367,28.25348],[118.587881,28.28299],[118.674728,28.271398],[118.700598,28.310912],[118.802228,28.240303],[118.771431,28.188634],[118.802228,28.117416],[118.719076,28.063576],[118.730163,27.970611],[118.818242,27.916697],[118.913713,27.61651],[118.869365,27.54014],[118.903858,27.462125],[118.983314,27.498751],[119.194581,27.418582],[119.267878,27.421237],[119.376899,27.534835],[119.474833,27.539079],[119.501319,27.649905],[119.644217,27.663684],[119.630666,27.582574],[119.70889,27.514141],[119.685485,27.438762],[119.770484,27.305928],[119.843165,27.300611],[120.007005,27.376084],[120.052584,27.338886],[120.13512,27.420175],[120.26262,27.432921],[120.34146,27.39946],[120.430155,27.258601],[120.401206,27.211253],[120.461568,27.14259]]],[[[118.412338,24.514235],[118.477012,24.437452],[118.335962,24.385148],[118.316252,24.487557],[118.374766,24.458695],[118.412338,24.514235]]],[[[119.532116,25.203158],[119.549362,25.162007],[119.444036,25.202075],[119.473601,25.259988],[119.532116,25.203158]]],[[[118.079115,24.444533],[118.093281,24.540907],[118.142557,24.561588],[118.20723,24.487012],[118.143173,24.421109],[118.079115,24.444533]]],[[[119.737224,26.646332],[119.668238,26.628683],[119.673782,26.681087],[119.737224,26.646332]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":360000,\"name\":\"江西\",\"center\":[115.892151,28.676493],\"centroid\":[115.732937,27.636129],\"childrenNum\":11,\"level\":\"province\",\"subFeatureIndex\":13,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[113.94185,29.047374],[113.952321,29.092871],[114.061959,29.204176],[114.252284,29.234985],[114.259059,29.344049],[114.519602,29.325271],[114.660652,29.393585],[114.759818,29.363345],[114.931049,29.422252],[114.860216,29.475917],[114.940904,29.494147],[115.00065,29.572235],[115.154019,29.51029],[115.142316,29.651822],[115.359127,29.646623],[115.471844,29.742777],[115.511264,29.839877],[115.667712,29.850257],[115.837096,29.748491],[115.965827,29.724593],[116.13521,29.819634],[116.207891,29.82742],[116.26271,29.782251],[116.473361,29.89747],[116.552201,29.909918],[116.586078,30.046226],[116.666766,30.076779],[116.747454,30.057101],[116.83307,29.957621],[116.900207,29.949326],[116.882961,29.89332],[116.789954,29.795233],[116.684012,29.72823],[116.677237,29.66898],[116.651983,29.637262],[116.780715,29.570153],[117.112706,29.712121],[117.136728,29.7755],[117.073286,29.832092],[117.17738,29.921846],[117.246365,29.915104],[117.29256,29.822749],[117.384335,29.84351],[117.455168,29.749011],[117.453936,29.688214],[117.532161,29.651822],[117.545711,29.594089],[117.647957,29.614897],[117.707703,29.548815],[117.807486,29.573796],[117.872775,29.547774],[118.008282,29.578479],[118.134549,29.508728],[118.136397,29.419125],[118.193064,29.395149],[118.20723,29.346135],[118.136397,29.284052],[118.077883,29.290836],[118.027992,29.168132],[118.037847,29.097054],[118.111144,28.997671],[118.111144,28.997671],[118.270056,28.918619],[118.306396,28.823782],[118.379077,28.785509],[118.379077,28.785509],[118.431432,28.679528],[118.423425,28.587626],[118.423425,28.587626],[118.421577,28.541908],[118.421577,28.540331],[118.425273,28.537177],[118.426505,28.532447],[118.425273,28.537177],[118.426505,28.532447],[118.472084,28.482497],[118.432048,28.402003],[118.486867,28.328821],[118.433896,28.288786],[118.314404,28.22238],[118.37415,28.188106],[118.356288,28.091555],[118.155491,28.061992],[118.096977,27.96744],[117.999043,27.991218],[117.856145,27.945772],[117.78716,27.896076],[117.740348,27.800321],[117.608537,27.863814],[117.52169,27.982236],[117.341836,27.855879],[117.27901,27.870161],[117.296872,27.764854],[117.204481,27.683819],[117.118865,27.694416],[117.096692,27.626582],[117.040641,27.670043],[117.01662,27.563481],[117.084989,27.564011],[117.133032,27.4223],[117.100387,27.338886],[117.171836,27.290509],[117.043721,27.139928],[117.05296,27.100519],[116.910062,27.034453],[116.679085,26.978479],[116.548506,26.839758],[116.557745,26.774073],[116.516477,26.69071],[116.566368,26.650075],[116.539267,26.559129],[116.610716,26.477216],[116.601476,26.372733],[116.519557,26.410251],[116.412999,26.298197],[116.396985,26.166168],[116.471513,26.175296],[116.489375,26.113529],[116.383434,26.029687],[116.36434,25.960312],[116.258398,25.902736],[116.176478,25.893048],[116.131515,25.82413],[116.18079,25.774571],[116.067457,25.703967],[116.063145,25.563173],[116.005247,25.490284],[116.008327,25.319496],[115.929487,25.234553],[115.855574,25.209654],[115.880212,25.092126],[115.928255,25.050396],[115.873436,25.020038],[115.89253,24.937056],[115.907313,24.880075],[115.822313,24.90884],[115.756408,24.749192],[115.845103,24.563221],[115.688038,24.545261],[115.67264,24.604028],[115.573474,24.617083],[115.556227,24.682883],[115.412714,24.792654],[115.358511,24.735064],[115.308004,24.758429],[115.095505,24.674184],[115.056701,24.703541],[114.909491,24.661679],[114.868839,24.562132],[114.729637,24.608924],[114.704999,24.526211],[114.664963,24.583898],[114.589819,24.537642],[114.534384,24.558867],[114.428443,24.486468],[114.391486,24.562677],[114.308334,24.574104],[114.258443,24.641558],[114.169132,24.689407],[114.27261,24.700279],[114.33482,24.747562],[114.403189,24.877361],[114.395798,24.951161],[114.506051,24.999975],[114.561485,25.077495],[114.640326,25.073702],[114.735796,25.121925],[114.679746,25.194495],[114.743188,25.274597],[114.63663,25.324364],[114.535616,25.41681],[114.381015,25.31571],[114.31511,25.338424],[114.262755,25.29191],[114.13156,25.30922],[114.039785,25.250789],[114.051488,25.348699],[113.94493,25.441667],[113.983118,25.599332],[113.913517,25.701272],[113.971416,25.835979],[114.028082,25.893586],[114.007756,26.007104],[114.044096,26.076452],[114.237501,26.152204],[114.181451,26.214489],[114.088444,26.168316],[113.944314,26.16402],[114.029314,26.266545],[114.030546,26.376485],[114.085364,26.4065],[114.073046,26.480965],[114.106306,26.576254],[113.915365,26.613706],[113.860546,26.663978],[113.834677,26.803983],[113.927068,26.949149],[113.821126,27.037651],[113.779242,27.137265],[113.848844,27.225087],[113.872865,27.385116],[113.616635,27.345264],[113.632033,27.405303],[113.583374,27.524754],[113.607395,27.625522],[113.763228,27.799262],[113.729967,27.887086],[113.752141,27.933614],[113.864242,28.004954],[113.914133,27.991218],[114.047176,28.05724],[113.992357,28.161207],[114.107538,28.182833],[114.25598,28.323554],[114.252284,28.395687],[114.172212,28.432524],[114.218407,28.484601],[114.08598,28.558201],[114.157429,28.761384],[114.152502,28.83479],[114.076741,28.834266],[114.008988,28.955273],[113.966488,28.945326],[113.94185,29.047374]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":370000,\"name\":\"山东\",\"center\":[117.000923,36.675807],\"centroid\":[118.186283,36.374485],\"childrenNum\":17,\"level\":\"province\",\"subFeatureIndex\":14,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[121.362071,37.634292],[121.4791,37.474914],[121.565331,37.440242],[121.635548,37.49438],[121.66573,37.47349],[121.923808,37.473015],[122.08888,37.554171],[122.166488,37.439292],[122.234857,37.469216],[122.284133,37.426464],[122.41656,37.414585],[122.487393,37.434541],[122.553914,37.406981],[122.670942,37.429315],[122.573624,37.296159],[122.629059,37.194708],[122.581015,37.147508],[122.505871,37.149892],[122.467067,37.03726],[122.575472,37.054452],[122.532356,36.901497],[122.344495,36.828257],[122.174495,36.842623],[122.141235,36.93833],[122.051923,36.904846],[122.008808,36.962238],[121.767975,36.874698],[121.762432,36.846454],[121.627541,36.795683],[121.647867,36.723301],[121.492035,36.789933],[121.454462,36.75255],[121.209318,36.671489],[121.028848,36.573046],[120.847146,36.618682],[120.983269,36.546133],[120.890878,36.373375],[120.828668,36.466779],[120.759683,36.462448],[120.694393,36.390234],[120.7449,36.330969],[120.66298,36.331933],[120.712255,36.126809],[120.478199,36.091522],[120.343308,36.04219],[120.290337,36.061539],[120.362402,36.19637],[120.181316,36.204095],[120.108635,36.127292],[120.241062,36.047995],[120.213345,35.998152],[120.292801,36.017512],[120.262004,35.965712],[120.062439,35.870739],[120.011317,35.713006],[119.926317,35.759631],[119.923237,35.635238],[119.718129,35.615785],[119.665775,35.57005],[119.543819,35.347815],[119.411392,35.231581],[119.373819,35.078464],[119.306066,35.076506],[119.286972,35.11518],[119.137915,35.09609],[119.114509,35.054958],[118.928495,35.051039],[118.865053,35.029974],[118.860742,34.94419],[118.772047,34.794464],[118.719076,34.745315],[118.783749,34.723188],[118.690127,34.678424],[118.601431,34.714336],[118.460997,34.65628],[118.424657,34.595228],[118.440671,34.527724],[118.404947,34.427598],[118.290382,34.424637],[118.179513,34.379218],[118.177665,34.453257],[118.132702,34.483348],[118.185056,34.543989],[118.079115,34.569612],[118.084042,34.655788],[117.951615,34.678424],[117.902956,34.644467],[117.793935,34.65185],[117.801942,34.51885],[117.684298,34.547439],[117.592523,34.462631],[117.465023,34.484827],[117.402813,34.569612],[117.322125,34.574046],[117.322125,34.574046],[117.32151,34.566656],[117.32151,34.566656],[117.322125,34.566656],[117.322125,34.566656],[117.301184,34.557294],[117.301184,34.557294],[117.242669,34.445856],[117.175532,34.47003],[117.137344,34.633144],[117.07575,34.637575],[117.088069,34.702039],[117.000605,34.793482],[116.966728,34.875497],[116.821983,34.929475],[116.677853,34.939285],[116.445028,34.89562],[116.408071,34.85095],[116.374195,34.640036],[116.281188,34.60754],[116.240536,34.552367],[116.196804,34.576017],[116.134594,34.559758],[116.101334,34.605571],[115.83032,34.562714],[115.697278,34.594243],[115.667096,34.557294],[115.515575,34.582421],[115.461373,34.637083],[115.42688,34.805273],[115.317243,34.859297],[115.256265,34.845549],[115.251953,34.906416],[115.189128,34.914757],[115.12815,35.004493],[115.028983,34.97165],[114.923658,34.968709],[114.824492,35.012335],[114.883006,35.098537],[114.841738,35.151389],[114.932281,35.197362],[114.929817,35.248196],[115.02036,35.364406],[115.093657,35.41611],[115.237171,35.422937],[115.357895,35.498475],[115.383148,35.569076],[115.48601,35.710091],[115.693582,35.75429],[115.773654,35.854252],[115.875284,35.859102],[115.911624,35.960385],[116.048979,35.970071],[116.099486,36.111826],[115.989849,36.045576],[115.646155,35.920663],[115.496481,35.885283],[115.498329,35.897401],[115.503257,35.91194],[115.503257,35.91194],[115.487242,35.903702],[115.473692,35.896917],[115.473692,35.896917],[115.467532,35.889646],[115.467532,35.889646],[115.464452,35.882859],[115.464452,35.88092],[115.464452,35.882859],[115.463837,35.882859],[115.464452,35.88092],[115.463837,35.88092],[115.463837,35.882859],[115.463837,35.88092],[115.460141,35.86783],[115.363438,35.78002],[115.335105,35.796522],[115.362822,35.972008],[115.447822,36.012672],[115.483547,36.149036],[115.466916,36.259115],[115.466916,36.259115],[115.366518,36.308793],[115.308004,36.461967],[115.308004,36.461967],[115.283366,36.486505],[115.365902,36.622043],[115.479851,36.76022],[115.683727,36.808139],[115.71206,36.883313],[115.79706,36.968931],[115.776734,36.992829],[115.868509,37.076414],[115.909777,37.206622],[115.969523,37.239497],[115.984921,37.326616],[116.051443,37.367998],[116.169087,37.384164],[116.236224,37.361816],[116.2855,37.404604],[116.226369,37.428365],[116.240536,37.489633],[116.240536,37.489633],[116.27626,37.466841],[116.291659,37.557966],[116.337238,37.580255],[116.379738,37.521909],[116.38097,37.522858],[116.379738,37.521909],[116.38097,37.522858],[116.433941,37.47349],[116.724664,37.744139],[116.788106,37.843429],[117.023395,37.832561],[117.093612,37.849571],[117.267923,37.838704],[117.34122,37.863271],[117.438538,37.853823],[117.513067,37.94353],[117.5839,38.070819],[117.70216,38.075529],[117.771761,38.136734],[117.808718,38.228445],[117.895565,38.30173],[117.997811,38.211992],[118.045238,38.207761],[118.143788,38.297035],[118.07234,38.170139],[118.331034,38.124968],[118.504729,38.114141],[118.552156,38.055744],[118.607591,38.129204],[118.726467,38.154144],[118.853967,38.155085],[118.974075,38.094367],[119.004872,37.992114],[119.110813,37.921349],[119.12806,37.814601],[119.217371,37.810347],[119.259871,37.702492],[119.080016,37.696337],[118.99748,37.632396],[118.939582,37.527129],[118.983314,37.349926],[119.054147,37.254738],[119.12806,37.254738],[119.298675,37.197567],[119.329472,37.115548],[119.489616,37.13463],[119.566608,37.100755],[119.744615,37.135107],[119.89244,37.263786],[119.843781,37.376557],[120.144359,37.482036],[120.246605,37.556543],[120.215192,37.621023],[120.272475,37.636661],[120.227511,37.693497],[120.367945,37.697758],[120.466496,37.757858],[120.595227,37.767318],[120.733197,37.833506],[120.938305,37.821219],[121.037471,37.718585],[121.136022,37.723318],[121.153884,37.613914],[121.217326,37.582626],[121.354064,37.595901],[121.362071,37.634292]]],[[[115.498329,35.897401],[115.496481,35.885283],[115.460141,35.86783],[115.463837,35.88092],[115.463837,35.882859],[115.463837,35.88092],[115.464452,35.88092],[115.463837,35.882859],[115.464452,35.882859],[115.464452,35.88092],[115.464452,35.882859],[115.467532,35.889646],[115.467532,35.889646],[115.473692,35.896917],[115.473692,35.896917],[115.487242,35.903702],[115.498329,35.897401]]],[[[121.487723,37.578833],[121.487723,37.577884],[121.487107,37.577884],[121.485875,37.578359],[121.485875,37.578833],[121.487723,37.578833]]],[[[121.487723,37.578833],[121.488339,37.578833],[121.488339,37.578833],[121.487723,37.57741],[121.487723,37.577884],[121.487723,37.578833]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":410000,\"name\":\"河南\",\"center\":[113.665412,34.757975],\"centroid\":[113.619918,33.902738],\"childrenNum\":18,\"level\":\"province\",\"subFeatureIndex\":15,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[116.196804,34.576017],[116.204196,34.508497],[116.162312,34.459178],[116.213435,34.382181],[116.26271,34.375762],[116.409303,34.273971],[116.409303,34.273971],[116.516477,34.296217],[116.565752,34.173541],[116.530643,34.107183],[116.575607,34.069028],[116.575607,34.069028],[116.648288,33.973317],[116.64336,33.896869],[116.437637,33.846694],[116.437021,33.801461],[116.316297,33.771127],[116.263326,33.729835],[116.155536,33.709929],[116.074232,33.781571],[116.05945,33.861103],[115.987385,33.900842],[116.00032,33.964881],[115.95782,34.007547],[115.877132,34.003083],[115.736082,34.076957],[115.60735,34.030359],[115.546988,33.875014],[115.629524,33.871536],[115.614126,33.775603],[115.563003,33.771624],[115.639995,33.584909],[115.421953,33.556992],[115.345576,33.503125],[115.312931,33.376307],[115.365286,33.335826],[115.301229,33.141657],[115.168186,33.088535],[115.042534,33.08653],[114.966158,33.147167],[114.902716,33.129632],[114.925506,33.016821],[114.883006,32.990227],[114.943368,32.935005],[115.139237,32.897837],[115.197135,32.85613],[115.183584,32.665937],[115.20083,32.591864],[115.304924,32.553039],[115.409018,32.549005],[115.5088,32.468777],[115.509416,32.466758],[115.567314,32.421819],[115.667712,32.409696],[115.706517,32.494014],[115.789052,32.468777],[115.845719,32.501583],[115.899306,32.391005],[115.912856,32.227666],[115.941805,32.166402],[115.931334,31.994541],[115.893146,31.833033],[115.909777,31.791849],[115.816154,31.762348],[115.767495,31.787272],[115.660937,31.760822],[115.496481,31.674297],[115.371446,31.495905],[115.373909,31.405559],[115.301229,31.384109],[115.22054,31.426494],[115.235323,31.556597],[115.12507,31.598904],[115.088729,31.507638],[115.024056,31.528551],[114.830035,31.458654],[114.778912,31.5209],[114.696376,31.526001],[114.641558,31.582085],[114.560869,31.561185],[114.549783,31.642721],[114.586123,31.762348],[114.448769,31.728257],[114.292936,31.752173],[114.195002,31.850315],[114.135871,31.843707],[114.088444,31.781677],[113.988662,31.750138],[113.954785,31.856413],[113.838373,31.854889],[113.791561,32.036142],[113.728735,32.0833],[113.783554,32.186153],[113.749677,32.272196],[113.761996,32.268149],[113.757069,32.29243],[113.758301,32.296476],[113.752757,32.388478],[113.664062,32.422324],[113.624642,32.361191],[113.425693,32.269161],[113.211962,32.431919],[113.118956,32.375846],[113.025949,32.425354],[112.992072,32.378373],[112.860877,32.395552],[112.733993,32.363718],[112.729066,32.366245],[112.544284,32.403635],[112.451893,32.344511],[112.390915,32.371298],[112.328089,32.321761],[112.228923,32.385447],[112.014576,32.450098],[111.948671,32.517225],[111.890157,32.503097],[111.640701,32.634703],[111.577875,32.593376],[111.380159,32.828984],[111.293311,32.859145],[111.242804,32.930486],[111.273601,32.971656],[111.238493,33.040899],[111.151029,33.053438],[111.179363,33.115601],[111.056791,33.192743],[111.032769,33.209265],[110.984726,33.255308],[111.025994,33.330327],[110.996429,33.435745],[111.02661,33.474183],[111.02661,33.478675],[111.00382,33.578429],[110.877552,33.635238],[110.782698,33.795494],[110.587445,33.887929],[110.669365,33.939072],[110.590525,34.096778],[110.642264,34.16067],[110.43962,34.24331],[110.426685,34.275454],[110.503677,34.337234],[110.403279,34.43352],[110.403279,34.43352],[110.360779,34.516878],[110.379257,34.600646],[110.474728,34.617389],[110.533242,34.583406],[110.710017,34.605078],[110.749437,34.652342],[110.883712,34.642498],[110.929907,34.731548],[110.966248,34.70499],[111.118385,34.756622],[111.148566,34.80773],[111.232949,34.789551],[111.346282,34.831798],[111.570484,34.843094],[111.66965,34.988319],[111.900012,35.079933],[112.062004,35.055937],[112.078634,35.219362],[112.058924,35.279951],[112.513487,35.218384],[112.637291,35.225716],[112.628052,35.263342],[112.766022,35.203718],[112.818377,35.258457],[112.911384,35.24673],[112.992072,35.296068],[112.997,35.362455],[113.126347,35.332197],[113.189789,35.449261],[113.298194,35.427325],[113.31236,35.481424],[113.485439,35.520879],[113.578446,35.63378],[113.604316,35.797008],[113.656671,35.836792],[113.637576,35.98847],[113.694859,36.026707],[113.651743,36.172224],[113.716417,36.262492],[113.731199,36.363257],[113.819894,36.330969],[113.881488,36.354102],[113.911054,36.314578],[113.982502,36.358921],[114.055799,36.330005],[114.060727,36.276482],[114.169132,36.243675],[114.169132,36.243675],[114.345291,36.255738],[114.591666,36.130192],[114.912571,36.140339],[114.914419,36.051865],[114.996955,36.06831],[115.064092,36.178985],[115.201446,36.210371],[115.201446,36.210371],[115.312931,36.088137],[115.483547,36.149036],[115.447822,36.012672],[115.362822,35.972008],[115.335105,35.796522],[115.363438,35.78002],[115.460141,35.86783],[115.496481,35.885283],[115.646155,35.920663],[115.989849,36.045576],[116.099486,36.111826],[116.048979,35.970071],[115.911624,35.960385],[115.875284,35.859102],[115.773654,35.854252],[115.693582,35.75429],[115.48601,35.710091],[115.383148,35.569076],[115.357895,35.498475],[115.237171,35.422937],[115.093657,35.41611],[115.02036,35.364406],[114.929817,35.248196],[114.932281,35.197362],[114.841738,35.151389],[114.883006,35.098537],[114.824492,35.012335],[114.923658,34.968709],[115.028983,34.97165],[115.12815,35.004493],[115.189128,34.914757],[115.251953,34.906416],[115.256265,34.845549],[115.317243,34.859297],[115.42688,34.805273],[115.461373,34.637083],[115.515575,34.582421],[115.667096,34.557294],[115.697278,34.594243],[115.83032,34.562714],[116.101334,34.605571],[116.134594,34.559758],[116.196804,34.576017]]],[[[115.498329,35.897401],[115.487242,35.903702],[115.503257,35.91194],[115.503257,35.91194],[115.498329,35.897401]]],[[[113.749677,32.272196],[113.758301,32.296476],[113.757069,32.29243],[113.761996,32.268149],[113.749677,32.272196]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":420000,\"name\":\"湖北\",\"center\":[114.298572,30.584355],\"centroid\":[112.271042,30.98802],\"childrenNum\":17,\"level\":\"province\",\"subFeatureIndex\":16,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[109.232378,29.119533],[109.110422,29.215143],[109.11227,29.360737],[108.919481,29.326314],[108.927488,29.435281],[108.880677,29.442576],[108.91209,29.571714],[108.844337,29.658582],[108.785822,29.633622],[108.690968,29.689773],[108.666946,29.842472],[108.602273,29.865824],[108.504338,29.707964],[108.437201,29.741218],[108.424266,29.816],[108.371295,29.841434],[108.516041,29.885539],[108.542526,29.998047],[108.513577,30.057619],[108.56778,30.157517],[108.581947,30.255763],[108.460606,30.35959],[108.402092,30.376626],[108.42673,30.492184],[108.56778,30.468464],[108.688504,30.587519],[108.743939,30.494762],[108.808612,30.491153],[108.971836,30.627686],[109.114734,30.64416],[109.09256,30.578762],[109.103647,30.565883],[109.143683,30.521052],[109.299516,30.630775],[109.36111,30.550942],[109.35495,30.487028],[109.435638,30.59576],[109.590855,30.693566],[109.780564,30.848822],[109.893897,30.899662],[110.008462,30.883746],[110.082375,30.799496],[110.172918,30.978694],[110.135961,30.986902],[110.119947,31.088409],[110.189548,31.129391],[110.140273,31.390238],[110.054042,31.410666],[109.946252,31.506108],[109.848934,31.552008],[109.719586,31.555067],[109.76455,31.602981],[109.731289,31.700263],[109.585928,31.726731],[109.638282,31.811172],[109.584696,31.900617],[109.631507,31.962059],[109.590855,32.012807],[109.621652,32.106617],[109.592703,32.219568],[109.495385,32.300522],[109.502776,32.389489],[109.575457,32.506629],[109.637051,32.540935],[109.631507,32.599929],[109.726978,32.608498],[109.816905,32.577244],[109.910528,32.592872],[110.017701,32.546987],[110.085454,32.613034],[110.153824,32.593376],[110.206179,32.633191],[110.156903,32.683061],[110.159367,32.767122],[110.10886,32.82999],[109.988752,32.886281],[109.76455,32.909391],[109.794731,33.066977],[109.688174,33.116603],[109.576073,33.110088],[109.438718,33.152177],[109.537268,33.2438],[109.619804,33.27532],[109.732521,33.231288],[109.852013,33.247803],[110.031252,33.191742],[110.164911,33.209265],[110.218497,33.163197],[110.468569,33.181226],[110.54125,33.255809],[110.59422,33.168706],[110.702626,33.097057],[110.745741,33.147167],[110.824582,33.158188],[110.984726,33.255308],[111.032769,33.209265],[111.037081,33.187235],[111.031537,33.17722],[111.056791,33.192743],[111.179363,33.115601],[111.151029,33.053438],[111.238493,33.040899],[111.273601,32.971656],[111.242804,32.930486],[111.293311,32.859145],[111.380159,32.828984],[111.577875,32.593376],[111.640701,32.634703],[111.890157,32.503097],[111.948671,32.517225],[112.014576,32.450098],[112.228923,32.385447],[112.328089,32.321761],[112.390915,32.371298],[112.451893,32.344511],[112.544284,32.403635],[112.729066,32.366245],[112.730914,32.363212],[112.732146,32.362707],[112.733993,32.363718],[112.860877,32.395552],[112.992072,32.378373],[113.025949,32.425354],[113.118956,32.375846],[113.211962,32.431919],[113.425693,32.269161],[113.624642,32.361191],[113.664062,32.422324],[113.752757,32.388478],[113.758301,32.296476],[113.749677,32.272196],[113.783554,32.186153],[113.728735,32.0833],[113.791561,32.036142],[113.838373,31.854889],[113.954785,31.856413],[113.988662,31.750138],[114.088444,31.781677],[114.135871,31.843707],[114.195002,31.850315],[114.292936,31.752173],[114.448769,31.728257],[114.586123,31.762348],[114.549783,31.642721],[114.560869,31.561185],[114.641558,31.582085],[114.696376,31.526001],[114.778912,31.5209],[114.830035,31.458654],[115.024056,31.528551],[115.088729,31.507638],[115.12507,31.598904],[115.235323,31.556597],[115.22054,31.426494],[115.301229,31.384109],[115.373909,31.405559],[115.372062,31.349368],[115.442279,31.346303],[115.457677,31.281384],[115.516191,31.263485],[115.559307,31.160117],[115.646155,31.209768],[115.700973,31.201068],[115.763799,31.118123],[115.869125,31.147828],[115.938726,31.047409],[116.058834,31.012545],[116.071769,30.956633],[115.976298,30.931488],[115.865429,30.864231],[115.851262,30.756829],[115.782893,30.751687],[115.762567,30.685848],[115.819234,30.59782],[115.876516,30.582368],[115.921479,30.416364],[115.903001,30.313631],[115.985537,30.290901],[116.065609,30.204584],[116.091479,30.036385],[116.073616,29.970061],[116.127203,29.899544],[116.13521,29.819634],[115.965827,29.724593],[115.837096,29.748491],[115.667712,29.850257],[115.511264,29.839877],[115.471844,29.742777],[115.359127,29.646623],[115.142316,29.651822],[115.154019,29.51029],[115.00065,29.572235],[114.940904,29.494147],[114.860216,29.475917],[114.931049,29.422252],[114.759818,29.363345],[114.660652,29.393585],[114.519602,29.325271],[114.259059,29.344049],[114.252284,29.234985],[114.061959,29.204176],[113.952321,29.092871],[113.94185,29.047374],[113.877793,29.035343],[113.816199,29.105419],[113.749677,29.060973],[113.66283,29.1697],[113.689931,29.230808],[113.606779,29.253779],[113.686236,29.392021],[113.753373,29.43997],[113.630801,29.523307],[113.736743,29.576918],[113.664678,29.683536],[113.547033,29.675219],[113.566127,29.846105],[113.37765,29.703287],[113.145441,29.449349],[113.078304,29.438407],[113.057362,29.522265],[112.950188,29.472792],[112.912,29.607095],[113.004391,29.692892],[113.020405,29.772384],[112.937869,29.783809],[112.939101,29.768229],[112.926782,29.763036],[112.861493,29.78329],[112.79374,29.736023],[112.788812,29.681457],[112.687182,29.592528],[112.439574,29.633622],[112.369973,29.542048],[112.281278,29.536842],[112.303452,29.585244],[112.111279,29.659622],[112.07617,29.740179],[111.95483,29.796791],[111.962222,29.837282],[111.862439,29.856484],[111.807005,29.904213],[111.723853,29.909399],[111.723853,29.909399],[111.709686,29.897988],[111.709686,29.897988],[111.39063,29.914585],[111.244036,30.039492],[110.929907,30.063316],[110.924364,30.111463],[110.746973,30.113015],[110.712481,30.033277],[110.650887,30.077814],[110.497518,30.05503],[110.557264,29.988201],[110.498134,29.910955],[110.60038,29.839877],[110.642264,29.777578],[110.507373,29.691853],[110.360779,29.635702],[110.219729,29.746413],[110.113788,29.789521],[110.02386,29.769788],[109.869876,29.774462],[109.775637,29.755244],[109.714043,29.673139],[109.717739,29.614897],[109.516326,29.62582],[109.458428,29.513414],[109.343863,29.369602],[109.352487,29.284574],[109.258248,29.21932],[109.274262,29.122146],[109.232378,29.119533]]],[[[113.020405,29.772384],[112.926782,29.692372],[112.926782,29.763036],[112.939101,29.768229],[112.937869,29.783809],[113.020405,29.772384]]],[[[111.032769,33.209265],[111.056791,33.192743],[111.031537,33.17722],[111.037081,33.187235],[111.032769,33.209265]]],[[[109.106111,30.57052],[109.09872,30.579277],[109.100567,30.580823],[109.106727,30.572066],[109.106111,30.57052]]],[[[112.732146,32.362707],[112.730914,32.363212],[112.729066,32.366245],[112.733993,32.363718],[112.732146,32.362707]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":430000,\"name\":\"湖南\",\"center\":[112.982279,28.19409],\"centroid\":[111.754313,27.655081],\"childrenNum\":14,\"level\":\"province\",\"subFeatureIndex\":17,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[109.965962,26.195699],[110.017701,26.343246],[109.932701,26.476145],[109.856325,26.465433],[109.892665,26.525408],[109.82676,26.605681],[109.946252,26.685899],[109.838463,26.72759],[109.821216,26.781017],[109.652449,26.76232],[109.660456,26.709419],[109.590855,26.686433],[109.529261,26.740414],[109.548971,26.737208],[109.548971,26.737208],[109.528029,26.744689],[109.52187,26.748964],[109.504624,26.805051],[109.500928,26.828546],[109.486761,26.895267],[109.555131,26.947015],[109.520022,27.058433],[109.454733,27.069622],[109.472595,27.135136],[109.415928,27.15377],[109.267487,27.128746],[109.164625,27.065893],[109.07901,27.115965],[108.87575,26.999273],[108.791366,27.084539],[108.878829,27.106378],[108.907162,27.2054],[109.040821,27.276151],[109.142451,27.418051],[109.202197,27.449913],[109.300132,27.423893],[109.303211,27.475396],[109.461508,27.567724],[109.470747,27.68011],[109.332777,27.782853],[109.345711,27.840537],[109.30198,27.956342],[109.378972,28.032948],[109.298284,28.036117],[109.340168,28.190216],[109.388211,28.268236],[109.27303,28.310386],[109.274262,28.494592],[109.321074,28.581322],[109.304443,28.623871],[109.201581,28.598133],[109.2989,28.747221],[109.241002,28.776594],[109.235458,28.882476],[109.319842,29.042667],[109.232378,29.119533],[109.274262,29.122146],[109.258248,29.21932],[109.352487,29.284574],[109.343863,29.369602],[109.458428,29.513414],[109.516326,29.62582],[109.717739,29.614897],[109.714043,29.673139],[109.775637,29.755244],[109.869876,29.774462],[110.02386,29.769788],[110.113788,29.789521],[110.219729,29.746413],[110.360779,29.635702],[110.507373,29.691853],[110.642264,29.777578],[110.60038,29.839877],[110.498134,29.910955],[110.557264,29.988201],[110.497518,30.05503],[110.650887,30.077814],[110.712481,30.033277],[110.746973,30.113015],[110.924364,30.111463],[110.929907,30.063316],[111.244036,30.039492],[111.39063,29.914585],[111.709686,29.897988],[111.709686,29.897988],[111.723853,29.909399],[111.723853,29.909399],[111.807005,29.904213],[111.862439,29.856484],[111.962222,29.837282],[111.95483,29.796791],[112.07617,29.740179],[112.111279,29.659622],[112.303452,29.585244],[112.281278,29.536842],[112.369973,29.542048],[112.439574,29.633622],[112.687182,29.592528],[112.788812,29.681457],[112.79374,29.736023],[112.861493,29.78329],[112.926782,29.763036],[112.926782,29.692372],[113.020405,29.772384],[113.004391,29.692892],[112.912,29.607095],[112.950188,29.472792],[113.057362,29.522265],[113.078304,29.438407],[113.145441,29.449349],[113.37765,29.703287],[113.566127,29.846105],[113.547033,29.675219],[113.664678,29.683536],[113.736743,29.576918],[113.630801,29.523307],[113.753373,29.43997],[113.686236,29.392021],[113.606779,29.253779],[113.689931,29.230808],[113.66283,29.1697],[113.749677,29.060973],[113.816199,29.105419],[113.877793,29.035343],[113.94185,29.047374],[113.966488,28.945326],[114.008988,28.955273],[114.076741,28.834266],[114.152502,28.83479],[114.157429,28.761384],[114.08598,28.558201],[114.218407,28.484601],[114.172212,28.432524],[114.252284,28.395687],[114.25598,28.323554],[114.107538,28.182833],[113.992357,28.161207],[114.047176,28.05724],[113.914133,27.991218],[113.864242,28.004954],[113.752141,27.933614],[113.729967,27.887086],[113.763228,27.799262],[113.607395,27.625522],[113.583374,27.524754],[113.632033,27.405303],[113.616635,27.345264],[113.872865,27.385116],[113.848844,27.225087],[113.779242,27.137265],[113.821126,27.037651],[113.927068,26.949149],[113.834677,26.803983],[113.860546,26.663978],[113.915365,26.613706],[114.106306,26.576254],[114.073046,26.480965],[114.085364,26.4065],[114.030546,26.376485],[114.029314,26.266545],[113.944314,26.16402],[114.088444,26.168316],[114.181451,26.214489],[114.237501,26.152204],[114.044096,26.076452],[114.007756,26.007104],[114.028082,25.893586],[113.971416,25.835979],[113.913517,25.701272],[113.983118,25.599332],[113.94493,25.441667],[113.887032,25.436804],[113.822974,25.331935],[113.753373,25.362756],[113.611707,25.326527],[113.611707,25.326527],[113.535946,25.368704],[113.449715,25.359512],[113.373338,25.402758],[113.311129,25.490284],[113.248919,25.514045],[113.11834,25.445449],[113.080151,25.3833],[112.900297,25.311383],[112.867036,25.249706],[112.992688,25.247],[113.034572,25.198285],[112.96805,25.141426],[113.018557,25.082914],[112.979137,25.034133],[113.011782,24.946279],[112.871348,24.895816],[112.780805,24.896901],[112.712436,25.083456],[112.660081,25.132759],[112.414937,25.142509],[112.369357,25.189081],[112.3053,25.157132],[112.187039,25.182584],[112.155626,25.026544],[112.119902,24.963638],[112.175337,24.92729],[112.171025,24.86379],[112.097112,24.826327],[112.024431,24.739955],[111.951135,24.769839],[111.68936,24.778531],[111.570484,24.644821],[111.431282,24.687776],[111.479325,24.797543],[111.470086,24.928917],[111.43313,24.97991],[111.435593,25.09321],[111.321645,25.10513],[111.274833,25.151175],[111.200921,25.074786],[111.101754,25.035218],[111.100522,24.945736],[110.991501,24.924034],[110.951465,25.043891],[110.998892,25.161465],[111.112841,25.217232],[111.103602,25.284877],[111.301319,25.450851],[111.343202,25.602569],[111.30871,25.72014],[111.442369,25.771877],[111.43313,25.84621],[111.49226,25.868824],[111.346282,25.906504],[111.252043,25.864517],[111.189834,25.953318],[111.267442,26.058716],[111.279761,26.271911],[111.204616,26.307852],[111.092515,26.306779],[110.94469,26.373805],[110.939146,26.28425],[110.76114,26.248838],[110.612083,26.333594],[110.555416,26.286396],[110.516612,26.186035],[110.373098,26.08935],[110.325671,25.975373],[110.257301,25.961388],[110.201251,26.066241],[110.165527,26.023773],[110.065128,26.051191],[110.099005,26.16939],[109.965962,26.195699]]],[[[109.48245,26.029687],[109.449805,26.101709],[109.486761,26.148445],[109.486761,26.148445],[109.439334,26.238641],[109.466435,26.314288],[109.340784,26.264399],[109.285965,26.296052],[109.326001,26.427398],[109.407305,26.532902],[109.35495,26.693383],[109.454117,26.761252],[109.52187,26.748964],[109.528029,26.744689],[109.529261,26.740414],[109.590855,26.686433],[109.660456,26.709419],[109.652449,26.76232],[109.821216,26.781017],[109.838463,26.72759],[109.946252,26.685899],[109.82676,26.605681],[109.892665,26.525408],[109.856325,26.465433],[109.932701,26.476145],[110.017701,26.343246],[109.965962,26.195699],[109.906832,26.143611],[109.864332,26.027537],[109.783028,25.988282],[109.806434,25.874746],[109.685094,25.880129],[109.730057,25.989895],[109.635203,26.047428],[109.513247,25.997962],[109.48245,26.029687]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":440000,\"name\":\"广东\",\"center\":[113.280637,23.125178],\"centroid\":[113.429877,23.334664],\"childrenNum\":22,\"level\":\"province\",\"subFeatureIndex\":18,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[109.785492,21.457116],[109.742992,21.61629],[109.898209,21.649661],[109.940709,21.734723],[109.94502,21.844172],[110.051578,21.856945],[110.119947,21.901918],[110.200019,21.898587],[110.200019,21.898587],[110.388497,21.89026],[110.355236,22.061709],[110.355236,22.061709],[110.350924,22.072799],[110.350924,22.072799],[110.414366,22.20858],[110.488895,22.144863],[110.560344,22.196393],[110.629329,22.149296],[110.646575,22.222982],[110.725415,22.295522],[110.785777,22.294415],[110.711249,22.369684],[110.778386,22.585304],[111.055559,22.648268],[111.056791,22.72776],[111.202152,22.740452],[111.358601,22.889362],[111.363528,22.968713],[111.433746,23.036456],[111.377695,23.082149],[111.388782,23.210337],[111.353673,23.28895],[111.399869,23.469638],[111.479941,23.532738],[111.487332,23.62651],[111.615448,23.639117],[111.667187,23.718023],[111.621607,23.725692],[111.664723,23.83465],[111.8107,23.806735],[111.812548,23.887727],[111.940664,23.987803],[111.878454,24.110195],[111.877838,24.229196],[111.939432,24.230287],[112.029975,24.297925],[112.057692,24.387327],[111.985011,24.467953],[112.007185,24.534376],[111.937584,24.595323],[111.961606,24.720934],[112.024431,24.739955],[112.097112,24.826327],[112.171025,24.86379],[112.175337,24.92729],[112.119902,24.963638],[112.155626,25.026544],[112.187039,25.182584],[112.3053,25.157132],[112.369357,25.189081],[112.414937,25.142509],[112.660081,25.132759],[112.712436,25.083456],[112.780805,24.896901],[112.871348,24.895816],[113.011782,24.946279],[112.979137,25.034133],[113.018557,25.082914],[112.96805,25.141426],[113.034572,25.198285],[112.992688,25.247],[112.867036,25.249706],[112.900297,25.311383],[113.080151,25.3833],[113.11834,25.445449],[113.248919,25.514045],[113.311129,25.490284],[113.373338,25.402758],[113.449715,25.359512],[113.535946,25.368704],[113.611707,25.326527],[113.611707,25.326527],[113.753373,25.362756],[113.822974,25.331935],[113.887032,25.436804],[113.94493,25.441667],[114.051488,25.348699],[114.039785,25.250789],[114.13156,25.30922],[114.262755,25.29191],[114.31511,25.338424],[114.381015,25.31571],[114.535616,25.41681],[114.63663,25.324364],[114.743188,25.274597],[114.679746,25.194495],[114.735796,25.121925],[114.640326,25.073702],[114.561485,25.077495],[114.506051,24.999975],[114.395798,24.951161],[114.403189,24.877361],[114.33482,24.747562],[114.27261,24.700279],[114.169132,24.689407],[114.258443,24.641558],[114.308334,24.574104],[114.391486,24.562677],[114.428443,24.486468],[114.534384,24.558867],[114.589819,24.537642],[114.664963,24.583898],[114.704999,24.526211],[114.729637,24.608924],[114.868839,24.562132],[114.909491,24.661679],[115.056701,24.703541],[115.095505,24.674184],[115.308004,24.758429],[115.358511,24.735064],[115.412714,24.792654],[115.556227,24.682883],[115.573474,24.617083],[115.67264,24.604028],[115.688038,24.545261],[115.845103,24.563221],[115.756408,24.749192],[115.822313,24.90884],[115.907313,24.880075],[115.89253,24.937056],[116.014486,24.905584],[116.068073,24.849675],[116.18079,24.87519],[116.245464,24.793197],[116.376659,24.820353],[116.44626,24.714412],[116.486912,24.71876],[116.525716,24.604572],[116.597165,24.65461],[116.778867,24.680165],[116.815207,24.655154],[116.761005,24.58281],[116.789338,24.50988],[116.860787,24.462507],[116.903903,24.369888],[116.933468,24.21992],[116.998757,24.178988],[116.9347,24.127123],[116.939627,24.033713],[116.981511,23.999282],[116.980279,23.881709],[117.012308,23.855446],[117.053576,23.696657],[117.192778,23.629799],[117.192778,23.561809],[117.054192,23.542064],[117.01046,23.502564],[116.921765,23.53219],[116.874953,23.447683],[116.874338,23.447683],[116.871258,23.416391],[116.871874,23.415842],[116.782563,23.313679],[116.806584,23.200989],[116.74499,23.215286],[116.550969,23.109668],[116.576839,23.014429],[116.50539,22.930696],[116.382818,22.919124],[116.317528,22.952736],[116.226985,22.914715],[116.106877,22.817685],[116.073616,22.8425],[115.883291,22.785142],[115.796444,22.739349],[115.788437,22.809964],[115.654162,22.865657],[115.542677,22.76142],[115.606119,22.754799],[115.57409,22.650477],[115.471844,22.697956],[115.381301,22.684156],[115.338185,22.776867],[115.230396,22.776867],[115.236555,22.825406],[115.054853,22.777419],[115.04007,22.712307],[114.87623,22.589724],[114.747499,22.581437],[114.728405,22.651029],[114.749963,22.764179],[114.709927,22.7879],[114.512826,22.655446],[114.603369,22.63888],[114.559022,22.583094],[114.616304,22.54276],[114.611377,22.481959],[114.485109,22.446572],[114.467863,22.533365],[114.41058,22.599667],[114.232574,22.539997],[114.185762,22.551601],[114.185762,22.551601],[114.045944,22.502413],[114.044096,22.502413],[114.031778,22.504071],[113.959097,22.505177],[113.891959,22.442701],[113.733663,22.73659],[113.678228,22.726104],[113.740438,22.53447],[113.631417,22.475877],[113.669605,22.416154],[113.558736,22.213012],[113.553809,22.107727],[113.442324,22.009575],[113.330223,21.961861],[113.246455,21.880266],[113.091854,22.065591],[113.032724,22.072799],[113.037652,21.935223],[112.944645,21.84195],[112.795587,21.923567],[112.651458,21.761954],[112.523342,21.760842],[112.439574,21.803624],[112.415553,21.734723],[112.24001,21.701371],[112.192583,21.78918],[112.036134,21.761398],[111.951135,21.671904],[112.026895,21.633533],[111.811316,21.558985],[111.810084,21.604609],[111.693672,21.590144],[111.677658,21.52949],[111.382623,21.495534],[111.257587,21.413675],[111.28284,21.485513],[111.061102,21.44932],[110.929291,21.375792],[110.799328,21.374678],[110.626249,21.215797],[110.422373,21.190695],[110.388497,21.125968],[110.296722,21.093594],[110.180925,20.981905],[110.201251,20.867337],[110.390344,20.820367],[110.392192,20.682727],[110.466105,20.680488],[110.548025,20.477715],[110.545561,20.42726],[110.452554,20.311151],[110.349076,20.258958],[110.118099,20.219661],[110.082375,20.258958],[109.910528,20.224152],[109.916071,20.316762],[109.861252,20.376789],[109.888354,20.475473],[109.839695,20.489485],[109.793499,20.61554],[109.74484,20.62114],[109.730057,20.719667],[109.654913,20.903673],[109.674623,21.136572],[109.763934,21.226395],[109.757775,21.346816],[109.868644,21.365763],[109.894513,21.44208],[109.785492,21.457116]]],[[[117.100387,23.401566],[116.946402,23.421881],[117.129336,23.483358],[117.100387,23.401566]]],[[[112.853486,21.74028],[112.804826,21.686361],[112.817145,21.590144],[112.730914,21.613509],[112.782037,21.665788],[112.70566,21.679133],[112.831312,21.77529],[112.853486,21.74028]]],[[[112.625588,21.616847],[112.535045,21.628527],[112.663776,21.714157],[112.625588,21.616847]]],[[[110.495054,21.075171],[110.560344,21.061213],[110.535706,20.923235],[110.47288,20.983022],[110.347845,20.984698],[110.201251,20.938324],[110.211106,20.986933],[110.305961,21.088012],[110.495054,21.075171]]],[[[110.501829,21.142711],[110.431612,21.181211],[110.634256,21.21022],[110.582517,21.094711],[110.501829,21.142711]]],[[[116.769628,20.771704],[116.88604,20.77562],[116.934084,20.67657],[116.862635,20.588657],[116.749302,20.600979],[116.849084,20.62842],[116.87249,20.738134],[116.769628,20.771704]]],[[[110.598532,20.857273],[110.548641,20.908703],[110.584365,20.948941],[110.646575,20.917087],[110.598532,20.857273]]],[[[115.943037,21.097502],[116.044051,21.11034],[116.067457,21.040552],[115.989233,21.035526],[115.943037,21.097502]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":450000,\"name\":\"广西\",\"center\":[108.320004,22.82402],\"centroid\":[108.794237,23.833575],\"childrenNum\":14,\"level\":\"province\",\"subFeatureIndex\":19,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[112.024431,24.739955],[111.961606,24.720934],[111.937584,24.595323],[112.007185,24.534376],[111.985011,24.467953],[112.057692,24.387327],[112.029975,24.297925],[111.939432,24.230287],[111.877838,24.229196],[111.878454,24.110195],[111.940664,23.987803],[111.812548,23.887727],[111.8107,23.806735],[111.664723,23.83465],[111.621607,23.725692],[111.667187,23.718023],[111.615448,23.639117],[111.487332,23.62651],[111.479941,23.532738],[111.399869,23.469638],[111.353673,23.28895],[111.388782,23.210337],[111.377695,23.082149],[111.433746,23.036456],[111.363528,22.968713],[111.358601,22.889362],[111.202152,22.740452],[111.056791,22.72776],[111.055559,22.648268],[110.778386,22.585304],[110.711249,22.369684],[110.785777,22.294415],[110.725415,22.295522],[110.646575,22.222982],[110.629329,22.149296],[110.560344,22.196393],[110.488895,22.144863],[110.414366,22.20858],[110.350924,22.072799],[110.350924,22.072799],[110.355236,22.061709],[110.355236,22.061709],[110.388497,21.89026],[110.200019,21.898587],[110.200019,21.898587],[110.119947,21.901918],[110.051578,21.856945],[109.94502,21.844172],[109.940709,21.734723],[109.898209,21.649661],[109.742992,21.61629],[109.785492,21.457116],[109.704188,21.462684],[109.612413,21.55676],[109.540964,21.466025],[109.245929,21.425929],[109.138756,21.389163],[109.042669,21.464355],[109.150459,21.523924],[109.142451,21.56455],[108.937959,21.589588],[108.881293,21.627415],[108.74517,21.599046],[108.710062,21.646881],[108.591802,21.677465],[108.479085,21.546743],[108.338651,21.541177],[108.230245,21.49108],[108.235173,21.60294],[108.106441,21.508895],[108.030681,21.546186],[107.956768,21.535055],[107.860066,21.651886],[107.546553,21.58625],[107.46956,21.659671],[107.388256,21.594039],[107.310648,21.733611],[107.247206,21.703039],[107.088294,21.805291],[107.011917,21.826399],[107.05996,21.915241],[106.999598,21.947433],[106.73844,22.007911],[106.681158,21.995152],[106.717498,22.074463],[106.673151,22.182543],[106.7021,22.206918],[106.663296,22.330948],[106.562282,22.34589],[106.562282,22.462608],[106.61402,22.601876],[106.710723,22.57536],[106.768621,22.739349],[106.841302,22.799484],[106.606013,22.925737],[106.366413,22.857939],[106.286957,22.86676],[106.206885,22.978629],[106.019639,22.990747],[105.994385,22.93786],[105.893987,22.936758],[105.724604,23.062332],[105.574931,23.066186],[105.542902,23.18449],[105.531815,23.248275],[105.694423,23.363122],[105.699966,23.401566],[105.815763,23.506953],[105.89214,23.525058],[105.999929,23.447683],[106.141595,23.569487],[106.120653,23.605129],[106.157609,23.724048],[106.136667,23.795238],[106.192102,23.824798],[106.04982,24.089986],[105.933407,24.123847],[105.89214,24.040271],[105.704278,24.066497],[105.649459,24.033167],[105.628518,24.126577],[105.529967,24.129308],[105.481924,24.018958],[105.320548,24.116202],[105.260186,24.061033],[105.20044,24.105279],[105.229389,24.165888],[105.164715,24.288109],[105.188121,24.346995],[105.063085,24.429281],[105.063085,24.429281],[104.979933,24.412937],[104.83642,24.446712],[104.72863,24.446167],[104.70892,24.321372],[104.610986,24.376973],[104.492109,24.656241],[104.529682,24.73126],[104.63316,24.65896],[104.743413,24.621978],[104.841963,24.676359],[104.899245,24.752996],[105.03352,24.787765],[105.077868,24.918065],[105.082179,24.915895],[105.096346,24.928375],[105.09573,24.928375],[105.198592,24.995095],[105.265729,24.930003],[105.365511,24.943566],[105.445584,24.918608],[105.500402,24.807862],[105.70551,24.768752],[105.827466,24.702997],[105.942031,24.724738],[106.023335,24.632313],[106.045508,24.681796],[106.173008,24.760059],[106.206269,24.851304],[106.146522,24.948449],[106.215508,24.982079],[106.304819,24.973944],[106.590615,25.087791],[106.684238,25.178252],[106.732281,25.162548],[106.900432,25.194495],[106.912751,25.243212],[107.013765,25.275138],[107.012533,25.353024],[106.963874,25.437884],[107.066736,25.509186],[107.064272,25.559395],[107.228728,25.604728],[107.336517,25.461116],[107.318039,25.401677],[107.420901,25.393029],[107.432604,25.289205],[107.481263,25.300024],[107.472024,25.213984],[107.599523,25.250789],[107.659885,25.316251],[107.700537,25.193954],[107.741805,25.239965],[107.841587,25.115966],[108.001732,25.196661],[108.115065,25.210195],[108.152021,25.324364],[108.142782,25.390867],[108.348506,25.536183],[108.418723,25.443287],[108.471693,25.458955],[108.625062,25.308138],[108.6072,25.491904],[108.68912,25.623072],[108.763649,25.637097],[108.781511,25.554537],[108.949046,25.557236],[109.025423,25.512426],[109.088249,25.550758],[109.030966,25.629545],[109.07901,25.720679],[109.000785,25.73631],[108.953974,25.686714],[108.953974,25.686714],[108.896076,25.71421],[108.989698,25.778881],[109.143683,25.795044],[109.147995,25.7417],[109.3414,25.732537],[109.339552,25.834363],[109.435022,25.933411],[109.408537,25.967305],[109.48245,26.029687],[109.513247,25.997962],[109.635203,26.047428],[109.730057,25.989895],[109.685094,25.880129],[109.806434,25.874746],[109.783028,25.988282],[109.864332,26.027537],[109.906832,26.143611],[109.965962,26.195699],[110.099005,26.16939],[110.065128,26.051191],[110.165527,26.023773],[110.201251,26.066241],[110.257301,25.961388],[110.325671,25.975373],[110.373098,26.08935],[110.516612,26.186035],[110.555416,26.286396],[110.612083,26.333594],[110.76114,26.248838],[110.939146,26.28425],[110.94469,26.373805],[111.092515,26.306779],[111.204616,26.307852],[111.279761,26.271911],[111.267442,26.058716],[111.189834,25.953318],[111.252043,25.864517],[111.346282,25.906504],[111.49226,25.868824],[111.43313,25.84621],[111.442369,25.771877],[111.30871,25.72014],[111.343202,25.602569],[111.301319,25.450851],[111.103602,25.284877],[111.112841,25.217232],[110.998892,25.161465],[110.951465,25.043891],[110.991501,24.924034],[111.100522,24.945736],[111.101754,25.035218],[111.200921,25.074786],[111.274833,25.151175],[111.321645,25.10513],[111.435593,25.09321],[111.43313,24.97991],[111.470086,24.928917],[111.479325,24.797543],[111.431282,24.687776],[111.570484,24.644821],[111.68936,24.778531],[111.951135,24.769839],[112.024431,24.739955]]],[[[105.082179,24.915895],[105.077868,24.918065],[105.09573,24.928375],[105.096346,24.928375],[105.082179,24.915895]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":460000,\"name\":\"海南\",\"center\":[110.33119,20.031971],\"centroid\":[109.754777,19.189617],\"childrenNum\":19,\"level\":\"province\",\"subFeatureIndex\":20,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[109.231147,19.863293],[109.300748,19.917868],[109.498464,19.873422],[109.585312,19.98817],[109.712195,20.017406],[109.76147,19.981422],[109.965346,19.993792],[110.106396,20.026963],[110.144585,20.074176],[110.291178,20.056754],[110.318279,20.109015],[110.526467,20.0753],[110.562191,20.109577],[110.717408,20.148901],[110.744509,20.074176],[110.871393,20.011784],[110.969327,20.010097],[111.071573,19.629025],[110.920668,19.552926],[110.844292,19.450278],[110.729727,19.378611],[110.619474,19.152118],[110.578206,18.78489],[110.499366,18.751466],[110.495054,18.65002],[110.329366,18.64265],[110.246215,18.609764],[110.117483,18.507666],[110.090382,18.399262],[110.022629,18.360083],[109.919767,18.375415],[109.785492,18.339639],[109.749767,18.193617],[109.584696,18.143589],[109.355566,18.215216],[109.287813,18.264655],[109.138756,18.268064],[109.117814,18.322032],[108.944735,18.31408],[108.888068,18.412319],[108.68912,18.447513],[108.644772,18.486672],[108.663866,18.673261],[108.593033,18.809246],[108.637997,18.920785],[108.591186,19.14477],[108.609048,19.276417],[108.663866,19.374095],[108.765496,19.401187],[109.048829,19.620007],[109.169553,19.736628],[109.159082,19.790684],[109.231147,19.863293]]],[[[113.896887,7.607259],[114.029314,7.670119],[114.211632,7.786918],[114.268298,7.870496],[114.414892,7.952872],[114.540543,7.945761],[114.540543,7.862199],[114.419819,7.765577],[114.368696,7.63869],[114.157429,7.56159],[113.98743,7.536085],[113.896887,7.607259]]],[[[111.660411,16.258092],[111.606825,16.17766],[111.569252,16.195472],[111.660411,16.258092]]],[[[113.976959,8.872658],[114.060111,8.816493],[114.037321,8.781016],[113.976959,8.872658]]],[[[112.067547,16.319543],[111.97454,16.323563],[112.047221,16.360309],[112.067547,16.319543]]],[[[115.837712,9.709358],[115.925791,9.7813],[115.901153,9.671021],[115.837712,9.709358]]],[[[109.463972,7.344453],[109.536037,7.448882],[109.653065,7.559218],[109.72205,7.575825],[109.904984,7.551507],[109.938861,7.504647],[109.791651,7.524815],[109.654297,7.479138],[109.513247,7.320122],[109.463972,7.344453]]],[[[112.527654,16.058099],[112.607726,16.066724],[112.570154,16.010945],[112.448814,16.005194],[112.527654,16.058099]]],[[[114.469095,10.83618],[114.587355,10.90904],[114.565181,10.836767],[114.469095,10.83618]]],[[[112.383524,16.266134],[112.528886,16.318395],[112.538741,16.289107],[112.383524,16.266134]]],[[[116.48876,10.395704],[116.514629,10.349208],[116.637817,10.3651],[116.566368,10.304472],[116.467202,10.309182],[116.48876,10.395704]]],[[[115.16757,8.386402],[115.315395,8.356213],[115.285214,8.314772],[115.18112,8.345557],[115.16757,8.386402]]],[[[109.936397,7.848566],[109.953027,7.888869],[110.078063,7.949317],[110.050346,7.846195],[109.988136,7.812408],[109.936397,7.848566]]],[[[114.696992,11.004203],[114.766593,11.110489],[114.793079,11.076435],[114.696992,11.004203]]],[[[110.459946,8.116389],[110.568351,8.172657],[110.554184,8.09388],[110.471032,8.071962],[110.459946,8.116389]]],[[[117.266691,10.691581],[117.369553,10.742727],[117.404661,10.671002],[117.266691,10.691581]]],[[[113.80696,19.223319],[113.920293,19.223319],[113.874097,19.151553],[113.80696,19.223319]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":500000,\"name\":\"重庆\",\"center\":[106.504962,29.533155],\"centroid\":[107.88398,30.067321],\"childrenNum\":38,\"level\":\"province\",\"subFeatureIndex\":21,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[109.09256,30.578762],[109.114734,30.64416],[108.971836,30.627686],[108.808612,30.491153],[108.743939,30.494762],[108.688504,30.587519],[108.56778,30.468464],[108.42673,30.492184],[108.402092,30.376626],[108.460606,30.35959],[108.581947,30.255763],[108.56778,30.157517],[108.513577,30.057619],[108.542526,29.998047],[108.516041,29.885539],[108.371295,29.841434],[108.424266,29.816],[108.437201,29.741218],[108.504338,29.707964],[108.602273,29.865824],[108.666946,29.842472],[108.690968,29.689773],[108.785822,29.633622],[108.844337,29.658582],[108.91209,29.571714],[108.880677,29.442576],[108.927488,29.435281],[108.919481,29.326314],[109.11227,29.360737],[109.110422,29.215143],[109.232378,29.119533],[109.319842,29.042667],[109.235458,28.882476],[109.241002,28.776594],[109.2989,28.747221],[109.201581,28.598133],[109.304443,28.623871],[109.321074,28.581322],[109.274262,28.494592],[109.191726,28.470927],[109.152306,28.349885],[109.081473,28.249264],[109.086401,28.184942],[109.026655,28.220271],[109.006329,28.163317],[108.922561,28.217635],[108.772888,28.21289],[108.726692,28.282463],[108.764881,28.306698],[108.779663,28.425158],[108.710678,28.500902],[108.640461,28.457251],[108.688504,28.422527],[108.668178,28.334614],[108.611512,28.324607],[108.577019,28.534024],[108.636149,28.621245],[108.565316,28.662204],[108.471077,28.627548],[108.332491,28.679528],[108.385462,28.772398],[108.352817,28.815395],[108.350353,28.933282],[108.268433,29.089734],[108.256115,29.040574],[108.068253,29.086597],[108.024521,29.038482],[107.930899,29.035343],[107.867457,28.960508],[107.784921,29.04842],[107.810791,29.138348],[107.751044,29.199997],[107.701769,29.142006],[107.589052,29.149845],[107.570574,29.218276],[107.486806,29.174402],[107.404271,29.187984],[107.412894,29.095485],[107.36485,29.010753],[107.441227,28.943755],[107.383945,28.848417],[107.219489,28.772923],[107.191156,28.888763],[107.057497,28.895049],[106.983584,28.851561],[106.986664,28.793899],[106.986664,28.793899],[106.926302,28.809104],[106.824056,28.756139],[106.883186,28.69265],[106.866556,28.624397],[106.73844,28.554522],[106.7446,28.465667],[106.632499,28.503531],[106.564745,28.485127],[106.63681,28.623346],[106.562897,28.753516],[106.45326,28.816968],[106.504999,28.662204],[106.484057,28.530344],[106.395978,28.570287],[106.37442,28.525613],[106.304203,28.650653],[106.248152,28.829024],[106.173008,28.92019],[106.048588,28.906573],[106.043661,28.954226],[105.970364,28.966267],[105.88906,28.909716],[105.762176,28.991391],[105.693807,29.267351],[105.518264,29.264219],[105.427721,29.316924],[105.428337,29.417562],[105.380294,29.456643],[105.380294,29.456643],[105.324859,29.448828],[105.289751,29.552979],[105.38399,29.67002],[105.476996,29.674699],[105.575547,29.745374],[105.619894,29.846624],[105.709206,29.840396],[105.70243,29.924957],[105.753553,30.018254],[105.687648,30.038974],[105.582938,30.123884],[105.582938,30.127507],[105.580474,30.129577],[105.574315,30.130611],[105.56138,30.183898],[105.571235,30.17976],[105.642684,30.186484],[105.624822,30.275917],[105.720292,30.252662],[105.720292,30.252662],[105.714749,30.322927],[105.792357,30.427199],[105.881053,30.387465],[106.031958,30.373529],[106.10587,30.310531],[106.17116,30.306399],[106.180399,30.23302],[106.256776,30.19631],[106.262935,30.211306],[106.428623,30.254729],[106.451412,30.307949],[106.451412,30.307949],[106.610941,30.292451],[106.610941,30.292451],[106.612789,30.235605],[106.612789,30.235605],[106.612173,30.235605],[106.612173,30.235605],[106.611557,30.235605],[106.612173,30.235605],[106.611557,30.235605],[106.677462,30.157],[106.726121,30.033277],[106.825904,30.031205],[106.825904,30.031205],[106.913367,30.025506],[106.974345,30.082992],[106.976193,30.083509],[106.980504,30.085062],[106.981736,30.085062],[107.053801,30.043636],[107.054417,30.041046],[107.055649,30.040528],[107.058113,30.043118],[107.221337,30.213891],[107.359923,30.456087],[107.516987,30.644675],[107.424597,30.740889],[107.514524,30.854986],[107.645103,30.821079],[107.739957,30.884259],[107.763979,30.816968],[107.85329,30.793842],[107.994956,30.90839],[107.943833,30.989466],[108.053471,31.040745],[108.009123,31.10839],[108.083652,31.185713],[108.095354,31.268088],[108.185898,31.337104],[108.153869,31.371338],[108.216079,31.410666],[108.191441,31.492333],[108.34173,31.509679],[108.391621,31.593298],[108.517889,31.665131],[108.535135,31.757769],[108.343578,31.860987],[108.259194,31.966628],[108.373759,32.077217],[108.447672,32.07164],[108.369447,32.173493],[108.509882,32.201343],[108.67249,32.104083],[108.734084,32.106617],[108.902235,31.984899],[108.988466,31.979317],[109.164009,31.877247],[109.195422,31.817782],[109.273646,31.801003],[109.281654,31.717061],[109.585928,31.726731],[109.731289,31.700263],[109.76455,31.602981],[109.719586,31.555067],[109.848934,31.552008],[109.946252,31.506108],[110.054042,31.410666],[110.140273,31.390238],[110.189548,31.129391],[110.119947,31.088409],[110.135961,30.986902],[110.172918,30.978694],[110.082375,30.799496],[110.008462,30.883746],[109.893897,30.899662],[109.780564,30.848822],[109.590855,30.693566],[109.435638,30.59576],[109.35495,30.487028],[109.36111,30.550942],[109.299516,30.630775],[109.143683,30.521052],[109.103647,30.565883],[109.106111,30.57052],[109.106727,30.572066],[109.108575,30.576702],[109.102415,30.580308],[109.100567,30.580823],[109.09872,30.579277],[109.09256,30.578762]]],[[[105.574315,30.130611],[105.580474,30.129577],[105.582938,30.127507],[105.582938,30.123884],[105.574315,30.130611]]],[[[109.09256,30.578762],[109.09872,30.579277],[109.106111,30.57052],[109.103647,30.565883],[109.09256,30.578762]]],[[[109.102415,30.580308],[109.108575,30.576702],[109.106727,30.572066],[109.100567,30.580823],[109.102415,30.580308]]],[[[107.053801,30.043636],[107.058113,30.043118],[107.055649,30.040528],[107.054417,30.041046],[107.053801,30.043636]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":510000,\"name\":\"四川\",\"center\":[104.065735,30.659462],\"centroid\":[102.693438,30.674548],\"childrenNum\":21,\"level\":\"province\",\"subFeatureIndex\":22,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[105.720292,30.252662],[105.720292,30.252662],[105.624822,30.275917],[105.642684,30.186484],[105.571235,30.17976],[105.56138,30.188035],[105.558916,30.18545],[105.56138,30.183898],[105.574315,30.130611],[105.582938,30.123884],[105.687648,30.038974],[105.753553,30.018254],[105.70243,29.924957],[105.709206,29.840396],[105.619894,29.846624],[105.575547,29.745374],[105.476996,29.674699],[105.38399,29.67002],[105.289751,29.552979],[105.324859,29.448828],[105.380294,29.456643],[105.380294,29.456643],[105.428337,29.417562],[105.427721,29.316924],[105.518264,29.264219],[105.693807,29.267351],[105.762176,28.991391],[105.88906,28.909716],[105.970364,28.966267],[106.043661,28.954226],[106.048588,28.906573],[106.173008,28.92019],[106.248152,28.829024],[106.304203,28.650653],[106.37442,28.525613],[106.330688,28.481971],[106.2925,28.537177],[106.103407,28.636476],[105.966668,28.76086],[105.891524,28.672179],[105.884748,28.594981],[105.749242,28.614943],[105.683952,28.535601],[105.62359,28.518253],[105.639604,28.32408],[105.730147,28.271925],[105.826234,28.304064],[105.88906,28.238722],[105.860111,28.165955],[105.975907,28.107917],[106.126812,28.16701],[106.206885,28.134302],[106.328225,27.952643],[106.304819,27.899249],[106.343007,27.821489],[106.193334,27.754265],[106.120653,27.779677],[106.023335,27.746851],[105.78435,27.719312],[105.62359,27.666333],[105.605112,27.715605],[105.508409,27.769089],[105.353809,27.74897],[105.308229,27.705011],[105.273736,27.795028],[105.308229,27.810376],[105.308229,27.810376],[105.244171,27.823077],[105.233084,27.895547],[105.284823,27.935729],[105.270657,27.99703],[105.186273,27.995445],[105.186889,28.0546],[105.05939,28.097889],[104.872144,27.905594],[104.743413,27.901892],[104.573413,27.840537],[104.40095,27.952114],[104.354139,28.019744],[104.44653,28.112666],[104.44961,28.269817],[104.384936,28.329874],[104.314103,28.306698],[104.254357,28.408844],[104.261748,28.537177],[104.318415,28.538229],[104.425588,28.626497],[104.314719,28.615468],[104.12501,28.637526],[103.940844,28.606013],[103.844757,28.660104],[103.838598,28.587101],[103.781931,28.525613],[103.877402,28.311966],[103.721569,28.201817],[103.639649,28.261912],[103.573128,28.230815],[103.471498,28.123221],[103.430846,28.044039],[103.488128,28.03242],[103.515846,27.965326],[103.487512,27.795028],[103.29226,27.632943],[103.295955,27.568785],[103.222043,27.566133],[103.111789,27.401054],[102.989833,27.368114],[102.941174,27.405303],[102.882044,27.293168],[102.913457,27.133538],[102.870957,27.026992],[102.898674,26.908073],[102.991681,26.775675],[103.018783,26.593911],[103.056971,26.525943],[102.989833,26.483108],[102.998457,26.371661],[102.739762,26.268691],[102.674473,26.205363],[102.60056,26.250448],[102.638748,26.307852],[102.567915,26.36362],[102.392372,26.296588],[102.349257,26.244545],[102.245163,26.212341],[102.107808,26.068391],[102.005562,26.091499],[102.005562,26.091499],[101.917483,26.108156],[101.86328,26.052266],[101.799223,26.109231],[101.807846,26.156501],[101.690202,26.241861],[101.630455,26.224687],[101.586724,26.279422],[101.660636,26.346999],[101.636615,26.395245],[101.506652,26.499708],[101.458608,26.495424],[101.400094,26.605146],[101.451833,26.600867],[101.453065,26.692848],[101.512195,26.756443],[101.389623,26.723314],[101.357594,26.770868],[101.399478,26.841893],[101.267667,26.902737],[101.264587,26.955549],[101.136472,27.023794],[101.170349,27.195821],[101.057016,27.20061],[101.021907,27.332508],[100.936908,27.469026],[100.848212,27.670573],[100.782307,27.691767],[100.707162,27.80085],[100.681293,27.923041],[100.633866,27.915111],[100.54517,27.809318],[100.442924,27.866459],[100.327744,27.720372],[100.295099,27.869633],[100.210715,27.877037],[100.196549,27.936257],[100.086296,28.030836],[100.033941,28.184942],[100.157129,28.210254],[100.176223,28.324607],[100.054267,28.376737],[100.073977,28.42621],[99.990209,28.476712],[99.987129,28.524561],[99.793724,28.699473],[99.733362,28.719415],[99.717964,28.846321],[99.625573,28.814871],[99.615718,28.741975],[99.532566,28.681628],[99.463581,28.549266],[99.403219,28.546638],[99.437095,28.398318],[99.374886,28.181778],[99.306516,28.227652],[99.280647,28.298269],[99.174705,28.402003],[99.183944,28.588677],[99.126662,28.699473],[99.103872,28.842128],[99.132206,28.948467],[99.113727,29.221409],[99.075539,29.314316],[99.052133,29.563908],[98.993003,29.656502],[99.0238,29.846105],[99.068148,29.93118],[99.044742,30.079885],[98.989308,30.151826],[98.907388,30.698196],[98.957895,30.765056],[98.901844,30.785105],[98.774345,30.907877],[98.806374,30.995621],[98.736772,31.049459],[98.709671,31.118635],[98.602498,31.192367],[98.64007,31.337615],[98.691809,31.333016],[98.773113,31.249163],[98.88583,31.376446],[98.837787,31.436705],[98.713367,31.510189],[98.553839,31.656473],[98.543983,31.718588],[98.414636,31.832525],[98.434962,32.007734],[98.301919,32.12334],[98.218768,32.234752],[98.218768,32.342489],[97.937283,32.484425],[97.730944,32.527315],[97.543698,32.621602],[97.42359,32.704713],[97.386018,32.779196],[97.373699,32.956094],[97.523988,32.988721],[97.542466,33.036385],[97.487648,33.10658],[97.487648,33.168205],[97.576343,33.221779],[97.621306,33.334327],[97.676125,33.340825],[97.753733,33.410277],[97.625618,33.461705],[97.552321,33.465698],[97.52522,33.575937],[97.415583,33.605343],[97.435293,33.680558],[97.388481,33.884452],[97.458698,33.886935],[97.660111,33.956444],[97.70261,34.036805],[97.665654,34.126997],[97.834421,34.208186],[97.937283,34.196804],[97.937283,34.196804],[98.051848,34.115604],[98.21076,34.078444],[98.401702,34.08786],[98.440506,33.981255],[98.406629,33.867065],[98.462064,33.849178],[98.539056,33.746752],[98.6567,33.647193],[98.61728,33.63723],[98.648077,33.549014],[98.742316,33.477677],[98.734309,33.409278],[98.779272,33.37181],[98.759562,33.277321],[98.858728,33.150674],[99.002242,33.08252],[99.179633,33.044912],[99.235067,32.982197],[99.268328,32.878744],[99.385973,32.900349],[99.558436,32.839039],[99.607711,32.780705],[99.763543,32.778693],[99.788181,32.956596],[99.854086,32.945048],[99.877492,33.045915],[99.956332,32.948061],[100.038252,32.928979],[100.123252,32.837028],[100.139266,32.724346],[100.088143,32.668959],[100.208252,32.606482],[100.258759,32.742466],[100.339447,32.719313],[100.399809,32.756556],[100.516837,32.630168],[100.54517,32.569681],[100.645568,32.526306],[100.690532,32.678025],[100.93198,32.600433],[101.075494,32.683061],[101.157414,32.661404],[101.22332,32.725856],[101.237486,32.824962],[101.124153,32.909893],[101.129081,32.989725],[101.183899,32.984204],[101.169733,33.100566],[101.11553,33.194746],[101.183283,33.270317],[101.297232,33.262313],[101.393935,33.157687],[101.405022,33.225783],[101.486326,33.227285],[101.625528,33.100566],[101.739477,33.265815],[101.64955,33.323328],[101.695745,33.433748],[101.769658,33.447728],[101.769042,33.538541],[101.844186,33.602353],[101.907012,33.542032],[101.9452,33.437742],[101.885454,33.380804],[101.878063,33.315829],[101.769658,33.268816],[101.841723,33.184731],[101.865744,33.103072],[101.935345,33.186734],[102.08933,33.204759],[102.112736,33.287324],[102.217446,33.248303],[102.186649,33.332327],[102.264873,33.417269],[102.396684,33.40678],[102.462589,33.449724],[102.440416,33.57494],[102.33817,33.614313],[102.342481,33.725357],[102.299981,33.782566],[102.239619,33.788036],[102.234076,33.870046],[102.136142,33.965377],[102.237772,33.963392],[102.315996,33.994154],[102.391756,33.970836],[102.437336,34.087364],[102.471213,34.072993],[102.655994,34.113623],[102.599328,34.145321],[102.798276,34.272982],[102.911609,34.313022],[102.978747,34.249246],[102.973203,34.205217],[103.124108,34.16166],[103.178927,34.079931],[103.119797,34.034822],[103.124108,33.968354],[103.181391,33.900842],[103.153057,33.814884],[103.279325,33.806433],[103.349542,33.74327],[103.525085,33.798975],[103.520157,33.678566],[103.626099,33.727347],[103.778236,33.658648],[103.871243,33.68255],[104.046169,33.686533],[104.168741,33.611821],[104.155191,33.542531],[104.22048,33.404782],[104.292545,33.336326],[104.432979,33.325828],[104.303632,33.304328],[104.378161,33.109086],[104.337509,33.038392],[104.426204,33.0108],[104.378161,32.953081],[104.288234,32.94304],[104.294393,32.83552],[104.363994,32.822448],[104.458849,32.748504],[104.582653,32.722333],[104.643015,32.661908],[104.739717,32.635711],[104.845659,32.653848],[104.881999,32.600938],[105.026745,32.650322],[105.111128,32.59388],[105.347033,32.682558],[105.455439,32.737433],[105.391381,32.835017],[105.414171,32.921948],[105.49917,32.911902],[105.563844,32.72485],[105.596489,32.699175],[105.719061,32.759575],[105.822538,32.770141],[105.825002,32.824962],[106.025798,32.85814],[106.093552,32.823956],[106.07261,32.764103],[106.076305,32.753537],[106.17424,32.697664],[106.347935,32.670974],[106.421231,32.616562],[106.585687,32.688097],[106.663296,32.690615],[106.733513,32.739446],[106.82344,32.705217],[107.066736,32.708741],[107.108004,32.600938],[107.080286,32.542448],[107.127098,32.482406],[107.263836,32.403129],[107.313727,32.489976],[107.382097,32.54043],[107.436299,32.529837],[107.456625,32.417778],[107.533002,32.383426],[107.680211,32.398078],[107.707929,32.331873],[107.75474,32.338445],[107.812022,32.24791],[107.979558,32.14614],[108.070717,32.233234],[108.179122,32.222099],[108.251187,32.273208],[108.312781,32.232222],[108.46923,32.270173],[108.509882,32.201343],[108.369447,32.173493],[108.447672,32.07164],[108.373759,32.077217],[108.259194,31.966628],[108.343578,31.860987],[108.535135,31.757769],[108.517889,31.665131],[108.391621,31.593298],[108.34173,31.509679],[108.191441,31.492333],[108.216079,31.410666],[108.153869,31.371338],[108.185898,31.337104],[108.095354,31.268088],[108.083652,31.185713],[108.009123,31.10839],[108.053471,31.040745],[107.943833,30.989466],[107.994956,30.90839],[107.85329,30.793842],[107.763979,30.816968],[107.739957,30.884259],[107.645103,30.821079],[107.514524,30.854986],[107.424597,30.740889],[107.516987,30.644675],[107.359923,30.456087],[107.221337,30.213891],[107.058113,30.043118],[107.053801,30.043636],[106.981736,30.085062],[106.980504,30.087651],[106.980504,30.087651],[106.980504,30.085062],[106.978041,30.087133],[106.978041,30.087651],[106.978041,30.087133],[106.978041,30.087651],[106.978041,30.087133],[106.976193,30.083509],[106.976193,30.087651],[106.976193,30.087651],[106.974345,30.082992],[106.913367,30.025506],[106.825904,30.031205],[106.825904,30.031205],[106.726121,30.033277],[106.677462,30.157],[106.611557,30.235605],[106.612173,30.235605],[106.611557,30.235605],[106.612173,30.235605],[106.612173,30.235605],[106.612789,30.235605],[106.612789,30.235605],[106.610941,30.292451],[106.610941,30.292451],[106.451412,30.307949],[106.451412,30.307949],[106.428623,30.254729],[106.262935,30.211306],[106.261703,30.205101],[106.260471,30.204067],[106.256776,30.19631],[106.180399,30.23302],[106.17116,30.306399],[106.10587,30.310531],[106.031958,30.373529],[105.881053,30.387465],[105.792357,30.427199],[105.714749,30.322927],[105.720292,30.252662]]],[[[106.262935,30.211306],[106.256776,30.19631],[106.260471,30.204067],[106.261703,30.205101],[106.262935,30.211306]]],[[[105.571235,30.17976],[105.56138,30.183898],[105.558916,30.18545],[105.56138,30.188035],[105.571235,30.17976]]],[[[106.981736,30.085062],[106.980504,30.085062],[106.980504,30.087651],[106.981736,30.085062]]],[[[106.980504,30.085062],[106.976193,30.083509],[106.978041,30.087133],[106.980504,30.085062]]],[[[106.976193,30.083509],[106.974345,30.082992],[106.976193,30.087651],[106.976193,30.083509]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":520000,\"name\":\"贵州\",\"center\":[106.713478,26.578343],\"centroid\":[106.88108,26.826362],\"childrenNum\":9,\"level\":\"province\",\"subFeatureIndex\":23,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[109.52187,26.748964],[109.454117,26.761252],[109.35495,26.693383],[109.407305,26.532902],[109.326001,26.427398],[109.285965,26.296052],[109.340784,26.264399],[109.466435,26.314288],[109.439334,26.238641],[109.486761,26.148445],[109.486761,26.148445],[109.449805,26.101709],[109.48245,26.029687],[109.408537,25.967305],[109.435022,25.933411],[109.339552,25.834363],[109.3414,25.732537],[109.147995,25.7417],[109.143683,25.795044],[108.989698,25.778881],[108.896076,25.71421],[108.953974,25.686714],[108.953974,25.686714],[109.000785,25.73631],[109.07901,25.720679],[109.030966,25.629545],[109.088249,25.550758],[109.025423,25.512426],[108.949046,25.557236],[108.781511,25.554537],[108.763649,25.637097],[108.68912,25.623072],[108.6072,25.491904],[108.625062,25.308138],[108.471693,25.458955],[108.418723,25.443287],[108.348506,25.536183],[108.142782,25.390867],[108.152021,25.324364],[108.115065,25.210195],[108.001732,25.196661],[107.841587,25.115966],[107.741805,25.239965],[107.700537,25.193954],[107.659885,25.316251],[107.599523,25.250789],[107.472024,25.213984],[107.481263,25.300024],[107.432604,25.289205],[107.420901,25.393029],[107.318039,25.401677],[107.336517,25.461116],[107.228728,25.604728],[107.064272,25.559395],[107.066736,25.509186],[106.963874,25.437884],[107.012533,25.353024],[107.013765,25.275138],[106.912751,25.243212],[106.900432,25.194495],[106.732281,25.162548],[106.684238,25.178252],[106.590615,25.087791],[106.304819,24.973944],[106.215508,24.982079],[106.146522,24.948449],[106.206269,24.851304],[106.173008,24.760059],[106.045508,24.681796],[106.023335,24.632313],[105.942031,24.724738],[105.827466,24.702997],[105.70551,24.768752],[105.500402,24.807862],[105.445584,24.918608],[105.365511,24.943566],[105.265729,24.930003],[105.198592,24.995095],[105.09573,24.928375],[105.077868,24.918065],[105.03352,24.787765],[104.899245,24.752996],[104.841963,24.676359],[104.743413,24.621978],[104.63316,24.65896],[104.529682,24.73126],[104.539537,24.813836],[104.713232,24.996179],[104.667652,25.05961],[104.750804,25.215067],[104.822869,25.17013],[104.816094,25.262152],[104.639935,25.298942],[104.646094,25.356809],[104.543232,25.400597],[104.556783,25.524845],[104.434827,25.47246],[104.420661,25.585301],[104.332581,25.598792],[104.309791,25.648964],[104.328886,25.760561],[104.373233,25.731459],[104.441602,25.869362],[104.414501,25.909733],[104.499501,26.070541],[104.592508,26.317506],[104.683667,26.377557],[104.554935,26.590701],[104.487798,26.579465],[104.421276,26.712091],[104.354139,26.621194],[104.120082,26.636705],[104.052329,26.507204],[103.865699,26.512023],[103.764685,26.584816],[103.773308,26.716901],[103.705555,26.794904],[103.779468,26.874454],[103.77454,26.951815],[103.675374,27.051506],[103.638418,27.013133],[103.624251,27.112237],[103.711714,27.14259],[103.903271,27.347921],[103.932221,27.444072],[104.015372,27.429204],[104.01722,27.383523],[104.113307,27.338354],[104.174285,27.262856],[104.363378,27.467964],[104.497653,27.411677],[104.546312,27.330382],[104.609754,27.306991],[104.808702,27.35483],[104.871528,27.291041],[105.067397,27.418051],[105.184425,27.393085],[105.260186,27.514672],[105.232469,27.546506],[105.305149,27.612799],[105.308229,27.705011],[105.353809,27.74897],[105.508409,27.769089],[105.605112,27.715605],[105.62359,27.666333],[105.78435,27.719312],[106.023335,27.746851],[106.120653,27.779677],[106.193334,27.754265],[106.343007,27.821489],[106.304819,27.899249],[106.328225,27.952643],[106.206885,28.134302],[106.126812,28.16701],[105.975907,28.107917],[105.860111,28.165955],[105.88906,28.238722],[105.826234,28.304064],[105.730147,28.271925],[105.639604,28.32408],[105.62359,28.518253],[105.683952,28.535601],[105.749242,28.614943],[105.884748,28.594981],[105.891524,28.672179],[105.966668,28.76086],[106.103407,28.636476],[106.2925,28.537177],[106.330688,28.481971],[106.37442,28.525613],[106.395978,28.570287],[106.484057,28.530344],[106.504999,28.662204],[106.45326,28.816968],[106.562897,28.753516],[106.63681,28.623346],[106.564745,28.485127],[106.632499,28.503531],[106.7446,28.465667],[106.73844,28.554522],[106.866556,28.624397],[106.883186,28.69265],[106.824056,28.756139],[106.926302,28.809104],[106.986664,28.793899],[106.986664,28.793899],[106.983584,28.851561],[107.057497,28.895049],[107.191156,28.888763],[107.219489,28.772923],[107.383945,28.848417],[107.441227,28.943755],[107.36485,29.010753],[107.412894,29.095485],[107.404271,29.187984],[107.486806,29.174402],[107.570574,29.218276],[107.589052,29.149845],[107.701769,29.142006],[107.751044,29.199997],[107.810791,29.138348],[107.784921,29.04842],[107.867457,28.960508],[107.930899,29.035343],[108.024521,29.038482],[108.068253,29.086597],[108.256115,29.040574],[108.268433,29.089734],[108.350353,28.933282],[108.352817,28.815395],[108.385462,28.772398],[108.332491,28.679528],[108.471077,28.627548],[108.565316,28.662204],[108.636149,28.621245],[108.577019,28.534024],[108.611512,28.324607],[108.668178,28.334614],[108.688504,28.422527],[108.640461,28.457251],[108.710678,28.500902],[108.779663,28.425158],[108.764881,28.306698],[108.726692,28.282463],[108.772888,28.21289],[108.922561,28.217635],[109.006329,28.163317],[109.026655,28.220271],[109.086401,28.184942],[109.081473,28.249264],[109.152306,28.349885],[109.191726,28.470927],[109.274262,28.494592],[109.27303,28.310386],[109.388211,28.268236],[109.340168,28.190216],[109.298284,28.036117],[109.378972,28.032948],[109.30198,27.956342],[109.345711,27.840537],[109.332777,27.782853],[109.470747,27.68011],[109.461508,27.567724],[109.303211,27.475396],[109.300132,27.423893],[109.202197,27.449913],[109.142451,27.418051],[109.040821,27.276151],[108.907162,27.2054],[108.878829,27.106378],[108.791366,27.084539],[108.87575,26.999273],[109.07901,27.115965],[109.164625,27.065893],[109.267487,27.128746],[109.415928,27.15377],[109.472595,27.135136],[109.454733,27.069622],[109.520022,27.058433],[109.555131,26.947015],[109.486761,26.895267],[109.500928,26.828546],[109.481218,26.838156],[109.473211,26.828546],[109.504624,26.805051],[109.52187,26.748964]]],[[[109.529261,26.740414],[109.528029,26.744689],[109.548971,26.737208],[109.548971,26.737208],[109.529261,26.740414]]],[[[109.500928,26.828546],[109.504624,26.805051],[109.473211,26.828546],[109.481218,26.838156],[109.500928,26.828546]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":530000,\"name\":\"云南\",\"center\":[102.712251,25.040609],\"centroid\":[101.485108,25.008649],\"childrenNum\":16,\"level\":\"province\",\"subFeatureIndex\":24,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[105.542902,23.18449],[105.445584,23.292797],[105.372903,23.317525],[105.325475,23.390034],[105.238012,23.264217],[105.093266,23.260919],[104.886311,23.169088],[104.804391,23.110218],[104.860441,22.970917],[104.737869,22.825957],[104.579573,22.84636],[104.375697,22.690228],[104.272219,22.738245],[104.274067,22.828163],[104.117618,22.808861],[104.045553,22.728312],[104.009213,22.51789],[103.964249,22.502966],[103.825047,22.615685],[103.642113,22.795071],[103.566969,22.698508],[103.53494,22.594143],[103.436389,22.697404],[103.441317,22.753144],[103.323057,22.807758],[103.283021,22.678635],[103.195557,22.648268],[103.183854,22.557679],[103.081608,22.506835],[103.079761,22.448784],[102.930703,22.482512],[102.880196,22.586961],[102.688639,22.700164],[102.603024,22.731623],[102.570379,22.700164],[102.510633,22.774661],[102.384365,22.679739],[102.420706,22.636119],[102.322771,22.554364],[102.25625,22.457631],[102.270416,22.419472],[102.046214,22.457631],[101.907628,22.43717],[101.862665,22.389048],[101.76473,22.506282],[101.672339,22.474772],[101.625528,22.282789],[101.547304,22.237936],[101.596579,22.160933],[101.573789,22.114933],[101.626144,22.006247],[101.606434,21.967965],[101.701288,21.938553],[101.777049,21.826954],[101.747484,21.730276],[101.780129,21.640763],[101.754875,21.585137],[101.745636,21.29721],[101.833715,21.252606],[101.76473,21.147733],[101.672339,21.195158],[101.605818,21.172285],[101.604586,21.229741],[101.532521,21.252606],[101.387775,21.225837],[101.290457,21.178422],[101.222088,21.234203],[101.244877,21.302227],[101.142631,21.409218],[101.194986,21.425372],[101.209153,21.557316],[101.117378,21.689141],[101.123537,21.771956],[101.015132,21.70693],[100.870386,21.672461],[100.730568,21.518914],[100.558105,21.450434],[100.48296,21.459343],[100.437381,21.532829],[100.351765,21.52949],[100.247056,21.463798],[100.199628,21.512791],[100.126948,21.508338],[100.107853,21.585137],[100.169447,21.663564],[100.095535,21.704151],[99.991441,21.703595],[99.944014,21.821955],[99.999448,21.970184],[99.972347,22.052837],[99.871333,22.0667],[99.870101,22.029544],[99.486987,22.12879],[99.400139,22.099966],[99.220901,22.111053],[99.156227,22.160933],[99.235683,22.250673],[99.282495,22.401219],[99.381661,22.503519],[99.385973,22.57094],[99.31514,22.737693],[99.385973,22.761972],[99.457421,22.84636],[99.456806,22.932901],[99.563363,22.925737],[99.517168,23.006719],[99.528255,23.065635],[99.3484,23.128927],[99.255393,23.077746],[99.106336,23.086552],[98.889525,23.209238],[98.936953,23.309833],[98.872279,23.484456],[98.826084,23.470187],[98.808221,23.547549],[98.877823,23.59197],[98.786048,23.781551],[98.669019,23.800713],[98.701664,23.834103],[98.701048,23.946251],[98.899996,24.109102],[98.875975,24.150056],[98.716446,24.12767],[98.611737,24.08507],[98.550759,24.125485],[98.360434,24.097087],[98.225543,24.113471],[98.110978,24.092171],[97.902175,24.01404],[97.894168,23.973589],[97.769748,23.933126],[97.711234,23.861465],[97.5283,23.926563],[97.634241,24.046828],[97.730944,24.113471],[97.729712,24.227013],[97.767284,24.258656],[97.658879,24.326279],[97.716161,24.358987],[97.669966,24.452703],[97.531995,24.43146],[97.570799,24.602396],[97.570183,24.766579],[97.701379,24.842617],[97.764204,24.824155],[97.785762,24.875733],[97.716777,24.978283],[97.839349,25.27081],[97.914494,25.211278],[98.014892,25.305433],[98.06971,25.311924],[98.15779,25.457334],[98.131304,25.510266],[98.189818,25.569111],[98.170724,25.620374],[98.247717,25.607965],[98.314854,25.543201],[98.402317,25.593936],[98.457752,25.68294],[98.476846,25.777265],[98.553839,25.845672],[98.640686,25.798815],[98.704744,25.852133],[98.686881,25.925877],[98.614201,25.968919],[98.575396,26.118364],[98.634527,26.145759],[98.662244,26.0872],[98.735541,26.183351],[98.672715,26.240251],[98.733693,26.350753],[98.753403,26.559129],[98.781736,26.62066],[98.746012,26.697125],[98.757098,26.87819],[98.732461,27.002472],[98.765722,27.050973],[98.712135,27.077081],[98.696121,27.211253],[98.734309,27.35111],[98.706591,27.362269],[98.674563,27.582044],[98.583404,27.571437],[98.444201,27.665274],[98.429419,27.548628],[98.317318,27.519448],[98.278514,27.659974],[98.234166,27.690707],[98.222463,27.812493],[98.169492,27.851118],[98.205217,27.88973],[98.133152,27.99069],[98.160253,28.101056],[98.139311,28.142216],[98.168876,28.204454],[98.266195,28.24083],[98.208913,28.35831],[98.301303,28.384633],[98.37768,28.246101],[98.389383,28.114777],[98.428803,28.10475],[98.559382,28.182833],[98.626519,28.165427],[98.712135,28.229233],[98.752787,28.333561],[98.677026,28.463563],[98.627751,28.487756],[98.638222,28.55242],[98.594491,28.667979],[98.683802,28.739877],[98.652389,28.816968],[98.657932,28.93014],[98.765722,29.006044],[98.815613,28.948991],[98.828547,28.820113],[98.912931,28.800715],[98.972677,28.832693],[98.917243,28.888239],[98.925866,28.978306],[99.009018,29.031158],[98.967134,29.128418],[98.976373,29.204698],[99.113727,29.221409],[99.132206,28.948467],[99.103872,28.842128],[99.126662,28.699473],[99.183944,28.588677],[99.174705,28.402003],[99.280647,28.298269],[99.306516,28.227652],[99.374886,28.181778],[99.437095,28.398318],[99.403219,28.546638],[99.463581,28.549266],[99.532566,28.681628],[99.615718,28.741975],[99.625573,28.814871],[99.717964,28.846321],[99.733362,28.719415],[99.793724,28.699473],[99.987129,28.524561],[99.990209,28.476712],[100.073977,28.42621],[100.054267,28.376737],[100.176223,28.324607],[100.157129,28.210254],[100.033941,28.184942],[100.086296,28.030836],[100.196549,27.936257],[100.210715,27.877037],[100.295099,27.869633],[100.327744,27.720372],[100.442924,27.866459],[100.54517,27.809318],[100.633866,27.915111],[100.681293,27.923041],[100.707162,27.80085],[100.782307,27.691767],[100.848212,27.670573],[100.936908,27.469026],[101.021907,27.332508],[101.057016,27.20061],[101.170349,27.195821],[101.136472,27.023794],[101.264587,26.955549],[101.267667,26.902737],[101.399478,26.841893],[101.357594,26.770868],[101.389623,26.723314],[101.512195,26.756443],[101.453065,26.692848],[101.451833,26.600867],[101.400094,26.605146],[101.458608,26.495424],[101.506652,26.499708],[101.636615,26.395245],[101.660636,26.346999],[101.586724,26.279422],[101.630455,26.224687],[101.690202,26.241861],[101.807846,26.156501],[101.799223,26.109231],[101.86328,26.052266],[101.917483,26.108156],[102.005562,26.091499],[102.005562,26.091499],[102.107808,26.068391],[102.245163,26.212341],[102.349257,26.244545],[102.392372,26.296588],[102.567915,26.36362],[102.638748,26.307852],[102.60056,26.250448],[102.674473,26.205363],[102.739762,26.268691],[102.998457,26.371661],[102.989833,26.483108],[103.056971,26.525943],[103.018783,26.593911],[102.991681,26.775675],[102.898674,26.908073],[102.870957,27.026992],[102.913457,27.133538],[102.882044,27.293168],[102.941174,27.405303],[102.989833,27.368114],[103.111789,27.401054],[103.222043,27.566133],[103.295955,27.568785],[103.29226,27.632943],[103.487512,27.795028],[103.515846,27.965326],[103.488128,28.03242],[103.430846,28.044039],[103.471498,28.123221],[103.573128,28.230815],[103.639649,28.261912],[103.721569,28.201817],[103.877402,28.311966],[103.781931,28.525613],[103.838598,28.587101],[103.844757,28.660104],[103.940844,28.606013],[104.12501,28.637526],[104.314719,28.615468],[104.425588,28.626497],[104.318415,28.538229],[104.261748,28.537177],[104.254357,28.408844],[104.314103,28.306698],[104.384936,28.329874],[104.44961,28.269817],[104.44653,28.112666],[104.354139,28.019744],[104.40095,27.952114],[104.573413,27.840537],[104.743413,27.901892],[104.872144,27.905594],[105.05939,28.097889],[105.186889,28.0546],[105.186273,27.995445],[105.270657,27.99703],[105.284823,27.935729],[105.233084,27.895547],[105.244171,27.823077],[105.308229,27.810376],[105.308229,27.810376],[105.273736,27.795028],[105.308229,27.705011],[105.305149,27.612799],[105.232469,27.546506],[105.260186,27.514672],[105.184425,27.393085],[105.067397,27.418051],[104.871528,27.291041],[104.808702,27.35483],[104.609754,27.306991],[104.546312,27.330382],[104.497653,27.411677],[104.363378,27.467964],[104.174285,27.262856],[104.113307,27.338354],[104.01722,27.383523],[104.015372,27.429204],[103.932221,27.444072],[103.903271,27.347921],[103.711714,27.14259],[103.624251,27.112237],[103.638418,27.013133],[103.675374,27.051506],[103.77454,26.951815],[103.779468,26.874454],[103.705555,26.794904],[103.773308,26.716901],[103.764685,26.584816],[103.865699,26.512023],[104.052329,26.507204],[104.120082,26.636705],[104.354139,26.621194],[104.421276,26.712091],[104.487798,26.579465],[104.554935,26.590701],[104.683667,26.377557],[104.592508,26.317506],[104.499501,26.070541],[104.414501,25.909733],[104.441602,25.869362],[104.373233,25.731459],[104.328886,25.760561],[104.309791,25.648964],[104.332581,25.598792],[104.420661,25.585301],[104.434827,25.47246],[104.556783,25.524845],[104.543232,25.400597],[104.646094,25.356809],[104.639935,25.298942],[104.816094,25.262152],[104.822869,25.17013],[104.750804,25.215067],[104.667652,25.05961],[104.713232,24.996179],[104.539537,24.813836],[104.529682,24.73126],[104.492109,24.656241],[104.610986,24.376973],[104.70892,24.321372],[104.72863,24.446167],[104.83642,24.446712],[104.979933,24.412937],[105.063085,24.429281],[105.063085,24.429281],[105.188121,24.346995],[105.164715,24.288109],[105.229389,24.165888],[105.20044,24.105279],[105.260186,24.061033],[105.320548,24.116202],[105.481924,24.018958],[105.529967,24.129308],[105.628518,24.126577],[105.649459,24.033167],[105.704278,24.066497],[105.89214,24.040271],[105.933407,24.123847],[106.04982,24.089986],[106.192102,23.824798],[106.136667,23.795238],[106.157609,23.724048],[106.120653,23.605129],[106.141595,23.569487],[105.999929,23.447683],[105.89214,23.525058],[105.815763,23.506953],[105.699966,23.401566],[105.694423,23.363122],[105.531815,23.248275],[105.542902,23.18449]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":540000,\"name\":\"西藏\",\"center\":[91.132212,29.660361],\"centroid\":[88.388277,31.56375],\"childrenNum\":7,\"level\":\"province\",\"subFeatureIndex\":25,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[79.039649,34.33427],[79.0107,34.399956],[79.161605,34.441416],[79.229358,34.413778],[79.504683,34.454737],[79.675914,34.451284],[79.801566,34.478909],[79.906892,34.683837],[79.947544,34.820993],[80.034391,34.902],[80.031311,35.034384],[80.118159,35.066222],[80.23026,35.147476],[80.257977,35.20323],[80.362687,35.209096],[80.268448,35.294114],[80.321419,35.386848],[80.412578,35.433663],[80.516672,35.392214],[80.65649,35.394165],[80.689135,35.33903],[80.844351,35.345375],[81.026053,35.312181],[81.031597,35.380506],[81.09935,35.407333],[81.219458,35.319016],[81.362356,35.354647],[81.494167,35.292161],[81.513261,35.235002],[81.675253,35.233536],[81.736847,35.262365],[81.927789,35.271158],[82.05344,35.350255],[82.033114,35.450236],[82.328149,35.559342],[82.336156,35.651284],[82.424852,35.713006],[82.628727,35.692114],[82.731589,35.63767],[82.788872,35.684824],[82.960719,35.671702],[82.998907,35.484348],[83.067892,35.462908],[83.127022,35.398554],[83.242203,35.420011],[83.451006,35.38197],[83.622238,35.335614],[83.677672,35.360991],[83.885244,35.367334],[84.005968,35.422449],[84.095895,35.362943],[84.1618,35.359039],[84.335495,35.414647],[84.45314,35.473141],[84.448828,35.55058],[84.729081,35.613353],[85.053065,35.751862],[85.159006,35.745549],[85.271107,35.788757],[85.372121,35.701346],[85.613569,35.652257],[85.65299,35.731465],[85.811286,35.779049],[85.949256,35.779049],[86.060125,35.846008],[86.132806,35.979271],[86.199944,36.032513],[86.187625,36.131158],[86.392733,36.206992],[86.515305,36.205543],[86.701318,36.245122],[86.746282,36.291916],[86.862078,36.300114],[86.887332,36.262492],[86.996353,36.308793],[87.149106,36.29722],[87.193454,36.349283],[87.306787,36.363739],[87.361605,36.419128],[87.460155,36.409498],[87.470626,36.354102],[87.570409,36.342536],[87.731785,36.384936],[87.949211,36.401312],[87.983088,36.437903],[88.134609,36.427313],[88.241782,36.468704],[88.365586,36.457636],[88.470912,36.482175],[88.573158,36.461005],[88.623665,36.389271],[88.783809,36.291916],[88.802903,36.337717],[88.926091,36.364221],[88.964279,36.318917],[89.10225,36.281305],[89.127503,36.249465],[89.232213,36.295774],[89.287647,36.235954],[89.375727,36.228231],[89.490291,36.150969],[89.711414,36.092972],[89.638117,36.04993],[89.476125,36.021868],[89.418843,36.04606],[89.429929,35.916302],[89.549422,35.858132],[89.801957,35.847948],[89.747138,35.751862],[89.765616,35.599732],[89.700327,35.537435],[89.744058,35.479963],[89.68616,35.414647],[89.497067,35.361479],[89.532175,35.285323],[89.449639,35.226693],[89.513081,35.139158],[89.593153,35.104412],[89.560509,34.938794],[89.654747,34.883351],[89.707102,34.919663],[89.821667,34.902981],[89.867862,34.810677],[89.799493,34.74384],[89.732356,34.732039],[89.72558,34.660709],[89.798877,34.628714],[89.823515,34.455231],[89.801957,34.390575],[89.872174,34.335752],[89.825362,34.293746],[89.818587,34.174037],[89.655979,34.096778],[89.635037,34.0492],[89.691704,33.957933],[89.795181,33.865575],[89.837065,33.869052],[89.933768,33.796986],[89.907282,33.74128],[90.008296,33.688026],[89.984275,33.61232],[90.01076,33.553501],[90.080977,33.530561],[90.092064,33.469691],[90.246665,33.42426],[90.332896,33.310829],[90.405577,33.260311],[90.486881,33.266815],[90.70554,33.135645],[90.805938,33.114599],[91.001807,33.116102],[91.001807,33.116102],[91.134849,33.073495],[91.262349,33.141156],[91.436044,33.065974],[91.49887,33.109086],[91.58079,33.039395],[91.785281,32.944044],[91.896766,32.907884],[91.955897,32.820437],[92.145606,32.885779],[92.227526,32.820939],[92.198577,32.755046],[92.255243,32.720823],[92.355641,32.764606],[92.63651,32.720319],[92.686401,32.765109],[92.877342,32.697161],[93.019624,32.737433],[93.069515,32.626137],[93.239514,32.662411],[93.385492,32.525297],[93.4631,32.556065],[93.516687,32.475844],[93.618933,32.522775],[93.654657,32.57321],[93.820345,32.549509],[93.861613,32.466253],[93.958931,32.484929],[94.136322,32.433939],[94.196684,32.516216],[94.371611,32.524793],[94.395016,32.594385],[94.53853,32.599425],[94.614291,32.673492],[94.772587,32.555057],[94.80708,32.486444],[94.889616,32.472311],[94.912405,32.415758],[94.985086,32.421819],[95.081789,32.384942],[95.218527,32.397067],[95.261643,32.348049],[95.096571,32.322267],[95.10581,32.259042],[95.241317,32.32075],[95.26965,32.194761],[95.312766,32.148673],[95.406389,32.182102],[95.454432,32.062006],[95.360809,31.959013],[95.439649,31.831508],[95.546823,31.739961],[95.618272,31.783712],[95.779648,31.74912],[95.825227,31.681935],[95.89914,31.817273],[95.982908,31.816765],[96.041422,31.734364],[96.135661,31.702299],[96.160298,31.600943],[96.204646,31.598904],[96.252689,31.69619],[96.176313,31.777608],[96.253921,31.929566],[96.389428,31.919917],[96.468268,31.769978],[96.576057,31.712989],[96.616093,31.736908],[96.775006,31.673788],[96.840295,31.720623],[96.760223,31.856922],[96.81073,31.894521],[96.722651,32.013314],[96.894498,32.013822],[97.008447,32.067076],[97.130403,32.04375],[97.308409,32.074682],[97.264062,32.183621],[97.299786,32.294959],[97.371235,32.273208],[97.424822,32.323278],[97.387865,32.427374],[97.341054,32.441009],[97.388481,32.501583],[97.334895,32.514198],[97.448843,32.586823],[97.472249,32.54497],[97.670582,32.517225],[97.730944,32.527315],[97.937283,32.484425],[98.218768,32.342489],[98.218768,32.234752],[98.301919,32.12334],[98.434962,32.007734],[98.414636,31.832525],[98.543983,31.718588],[98.553839,31.656473],[98.713367,31.510189],[98.837787,31.436705],[98.88583,31.376446],[98.773113,31.249163],[98.691809,31.333016],[98.64007,31.337615],[98.602498,31.192367],[98.709671,31.118635],[98.736772,31.049459],[98.806374,30.995621],[98.774345,30.907877],[98.901844,30.785105],[98.957895,30.765056],[98.907388,30.698196],[98.989308,30.151826],[99.044742,30.079885],[99.068148,29.93118],[99.0238,29.846105],[98.993003,29.656502],[99.052133,29.563908],[99.075539,29.314316],[99.113727,29.221409],[98.976373,29.204698],[98.967134,29.128418],[99.009018,29.031158],[98.925866,28.978306],[98.917243,28.888239],[98.972677,28.832693],[98.912931,28.800715],[98.828547,28.820113],[98.815613,28.948991],[98.765722,29.006044],[98.657932,28.93014],[98.652389,28.816968],[98.683802,28.739877],[98.594491,28.667979],[98.638222,28.55242],[98.627751,28.487756],[98.677026,28.463563],[98.752787,28.333561],[98.712135,28.229233],[98.626519,28.165427],[98.559382,28.182833],[98.428803,28.10475],[98.389383,28.114777],[98.37768,28.246101],[98.301303,28.384633],[98.208913,28.35831],[98.266195,28.24083],[98.168876,28.204454],[98.139311,28.142216],[98.090036,28.195489],[98.03337,28.187052],[98.020435,28.25348],[97.907718,28.363575],[97.801161,28.326714],[97.738335,28.396213],[97.737103,28.465667],[97.68598,28.51983],[97.569567,28.541382],[97.506126,28.471453],[97.485184,28.386212],[97.518445,28.327767],[97.460546,28.268236],[97.42359,28.297742],[97.350909,28.23714],[97.321344,28.054071],[97.413119,28.013406],[97.386634,27.882855],[97.303482,27.913525],[97.062649,27.742615],[97.049099,27.814081],[96.972722,27.861169],[96.849534,27.874393],[96.784245,27.9315],[96.690622,27.948943],[96.572978,28.058296],[96.499681,28.067271],[96.46334,28.143271],[96.398667,28.118471],[96.297037,28.141161],[96.275479,28.228179],[95.989067,28.198126],[95.874502,28.297742],[95.674322,28.254007],[95.371896,28.110028],[95.28628,27.939957],[95.015267,27.828897],[94.88592,27.743145],[94.524979,27.596362],[94.277372,27.580983],[93.970634,27.305396],[93.849294,27.168676],[93.841903,27.045645],[93.56781,26.937948],[93.232739,26.907006],[93.111399,26.880325],[92.909371,26.914475],[92.802813,26.895267],[92.682089,26.948082],[92.57122,26.946482],[92.404916,26.902737],[92.109265,26.854705],[92.124664,26.959815],[92.043976,27.052572],[92.032273,27.168144],[92.125896,27.27296],[92.010715,27.474866],[91.839484,27.489728],[91.753868,27.462656],[91.585101,27.54014],[91.570934,27.650965],[91.642383,27.766442],[91.611586,27.891316],[91.486551,27.937314],[91.464993,28.002841],[91.309776,28.057768],[91.251878,27.970611],[91.162567,27.968497],[91.113292,27.846357],[90.96485,27.900306],[90.96177,27.9537],[90.896481,27.9463],[90.802242,28.040342],[90.701844,28.076246],[90.591591,28.021329],[90.513983,28.061992],[90.384019,28.060936],[90.296556,28.15435],[90.231882,28.144854],[90.124709,28.190743],[90.03355,28.13694],[89.976268,28.189161],[89.906051,28.180723],[89.789638,28.24083],[89.720037,28.170175],[89.605472,28.161735],[89.461958,28.031892],[89.375727,27.875979],[89.238988,27.796616],[89.184786,27.673752],[89.131815,27.633474],[89.163228,27.574619],[89.095474,27.471681],[89.182938,27.373959],[89.077612,27.287319],[89.057286,27.234663],[88.975982,27.217106],[88.911924,27.274024],[88.920548,27.325598],[88.809063,27.405834],[88.770874,27.567724],[88.852178,27.671103],[88.888519,27.846886],[88.842939,28.006539],[88.764099,28.068327],[88.67602,28.068327],[88.645223,28.111083],[88.565151,28.083109],[88.554064,28.027667],[88.478919,28.034005],[88.401311,27.976952],[88.254101,27.939429],[88.156783,27.957928],[88.111819,27.864872],[87.826639,27.927799],[87.727473,27.802967],[87.590119,27.848473],[87.45954,27.82096],[87.420735,27.859053],[87.364069,27.824135],[87.280917,27.845299],[87.227946,27.813022],[87.118309,27.840537],[87.035157,27.9463],[86.935375,27.955285],[86.864542,28.022385],[86.756753,28.032948],[86.700086,28.101583],[86.647732,28.069383],[86.568891,28.103167],[86.514689,27.954757],[86.450015,27.908766],[86.231972,27.97431],[86.19132,28.16701],[86.082915,28.01816],[86.125415,27.923041],[86.053966,27.900306],[85.949256,27.937314],[85.980053,27.984349],[85.901213,28.053543],[85.854402,28.172284],[85.753388,28.227652],[85.720743,28.371999],[85.682555,28.375684],[85.650526,28.283517],[85.526106,28.324607],[85.415853,28.321447],[85.272339,28.282463],[85.209513,28.338827],[85.113427,28.34462],[85.108499,28.461459],[85.189803,28.545062],[85.195963,28.623871],[85.126361,28.675854],[85.05676,28.674279],[84.981616,28.586576],[84.857196,28.56766],[84.698284,28.633325],[84.650856,28.714692],[84.483321,28.735155],[84.408176,28.854182],[84.234481,28.889287],[84.248648,29.030635],[84.194445,29.044759],[84.20738,29.118487],[84.116837,29.286661],[84.002272,29.291358],[83.917273,29.324749],[83.727563,29.244383],[83.656114,29.167088],[83.548941,29.201042],[83.266841,29.571194],[83.12887,29.62374],[83.088834,29.605014],[82.9484,29.704846],[82.830756,29.687694],[82.703872,29.847662],[82.6238,29.834687],[82.560974,29.955547],[82.498148,29.947771],[82.412533,30.012037],[82.246845,30.071601],[82.17786,30.067976],[82.207425,30.143548],[82.114418,30.226816],[82.104563,30.346682],[81.99123,30.322927],[81.872354,30.373012],[81.759021,30.385401],[81.63029,30.446802],[81.566232,30.428747],[81.555761,30.369399],[81.406704,30.40398],[81.427646,30.305366],[81.393769,30.199413],[81.335871,30.150791],[81.269349,30.153378],[81.293371,30.094899],[81.225618,30.005301],[81.131995,30.016181],[81.034677,30.246977],[80.81725,30.321378],[80.719316,30.414816],[80.633084,30.458665],[80.549316,30.448866],[80.322035,30.564338],[80.214245,30.585974],[80.124934,30.558671],[80.04363,30.603485],[79.970333,30.685848],[79.961094,30.771225],[79.890877,30.854986],[79.835443,30.850876],[79.75845,30.93662],[79.668523,30.980233],[79.59769,30.925843],[79.505915,31.027415],[79.427075,31.018186],[79.421531,31.067399],[79.316206,31.017673],[79.33222,30.96946],[79.227511,30.94945],[79.181931,31.015622],[79.0957,30.993057],[79.010084,31.044333],[78.997765,31.159093],[78.865338,31.313082],[78.841933,31.288542],[78.755085,31.3555],[78.792041,31.436195],[78.729832,31.478047],[78.740303,31.532631],[78.845628,31.610115],[78.763092,31.668696],[78.706426,31.778626],[78.654071,31.821849],[78.739687,31.885376],[78.762476,31.946829],[78.599868,32.024982],[78.519796,32.123847],[78.469905,32.127901],[78.430485,32.211975],[78.511173,32.308108],[78.458818,32.379889],[78.472985,32.435454],[78.395377,32.530342],[78.518564,32.605978],[78.628202,32.630168],[78.741534,32.703706],[78.781571,32.607994],[78.760629,32.56363],[78.81052,32.436464],[78.970664,32.331873],[79.005772,32.375341],[79.103091,32.369782],[79.135736,32.472311],[79.252148,32.51672],[79.308199,32.596905],[79.27309,32.678025],[79.301423,32.728877],[79.224431,32.784729],[79.255844,32.942537],[79.162837,33.011804],[79.139431,33.117606],[79.162221,33.166202],[79.072294,33.228286],[79.022403,33.323328],[78.84686,33.421264],[78.74215,33.553501],[78.755085,33.623281],[78.692259,33.676575],[78.779723,33.732323],[78.758165,33.791019],[78.744614,33.980759],[78.656535,34.030359],[78.661462,34.086868],[78.750158,34.092815],[78.793273,34.132445],[78.9257,34.155719],[78.981751,34.318458],[79.039649,34.33427]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":610000,\"name\":\"陕西\",\"center\":[108.948024,34.263161],\"centroid\":[108.887567,35.263665],\"childrenNum\":10,\"level\":\"province\",\"subFeatureIndex\":26,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[107.288474,37.00812],[107.288474,37.00812],[107.268764,37.099324],[107.336517,37.165628],[107.257677,37.337082],[107.284162,37.482036],[107.342061,37.515265],[107.348836,37.608226],[107.484959,37.706279],[107.499125,37.7659],[107.620465,37.775832],[107.65003,37.864688],[107.982022,37.787181],[108.025137,37.649926],[108.134159,37.621971],[108.219158,37.661295],[108.304158,37.638556],[108.440896,37.654663],[108.532671,37.690656],[108.611512,37.65419],[108.777815,37.683554],[108.799989,37.783871],[108.798141,37.93362],[108.82709,37.989285],[108.797525,38.047735],[108.871438,38.027471],[108.938575,37.920877],[109.017416,37.969949],[109.069155,38.091071],[108.963829,38.155085],[108.938575,38.207291],[109.051908,38.432146],[109.178792,38.520675],[109.276726,38.623121],[109.367269,38.627328],[109.338936,38.70161],[109.404226,38.720752],[109.511399,38.833633],[109.549587,38.805662],[109.624116,38.854603],[109.683862,38.935631],[109.665384,38.981691],[109.961035,39.191608],[110.217881,39.28105],[110.146432,39.455434],[110.243751,39.42355],[110.39096,39.31161],[110.434692,39.381016],[110.528315,39.380091],[110.604075,39.277345],[110.702626,39.27364],[110.740198,39.351874],[110.892335,39.509927],[111.134399,39.586513],[111.148566,39.531619],[111.064182,39.400899],[111.125776,39.366678],[111.247732,39.302351],[111.163348,39.152644],[111.138711,39.064897],[110.980414,38.970063],[111.009363,38.847614],[110.880016,38.618446],[110.920052,38.581973],[110.874473,38.453702],[110.77777,38.44105],[110.746973,38.366029],[110.661358,38.308773],[110.57759,38.297035],[110.565887,38.215283],[110.509221,38.192245],[110.501213,38.031713],[110.522771,37.954853],[110.59422,37.921821],[110.663821,37.803256],[110.758676,37.744139],[110.706321,37.705332],[110.796248,37.66319],[110.795017,37.566029],[110.745125,37.450693],[110.644111,37.435017],[110.630561,37.373228],[110.695234,37.34945],[110.690307,37.287115],[110.53509,37.137969],[110.444547,37.007164],[110.382953,37.021975],[110.425453,36.960325],[110.416214,36.790892],[110.447011,36.737687],[110.394656,36.676768],[110.496902,36.582175],[110.503677,36.487948],[110.45933,36.330969],[110.474112,36.248018],[110.447011,36.164495],[110.511684,35.879951],[110.549257,35.877527],[110.57759,35.701346],[110.609619,35.632321],[110.525851,35.44195],[110.477808,35.413672],[110.45009,35.327803],[110.39404,35.271647],[110.325671,35.014785],[110.257301,34.93487],[110.232664,34.803308],[110.241287,34.682361],[110.310272,34.608033],[110.379257,34.600646],[110.360779,34.516878],[110.403279,34.43352],[110.403279,34.43352],[110.503677,34.337234],[110.426685,34.275454],[110.43962,34.24331],[110.642264,34.16067],[110.590525,34.096778],[110.669365,33.939072],[110.587445,33.887929],[110.782698,33.795494],[110.877552,33.635238],[111.00382,33.578429],[111.02661,33.478675],[111.022914,33.475181],[111.022914,33.474682],[111.02661,33.474183],[110.996429,33.435745],[111.025994,33.330327],[110.984726,33.255308],[110.824582,33.158188],[110.745741,33.147167],[110.702626,33.097057],[110.59422,33.168706],[110.54125,33.255809],[110.468569,33.181226],[110.218497,33.163197],[110.164911,33.209265],[110.031252,33.191742],[109.852013,33.247803],[109.732521,33.231288],[109.619804,33.27532],[109.537268,33.2438],[109.438718,33.152177],[109.576073,33.110088],[109.688174,33.116603],[109.794731,33.066977],[109.76455,32.909391],[109.988752,32.886281],[110.10886,32.82999],[110.159367,32.767122],[110.156903,32.683061],[110.206179,32.633191],[110.153824,32.593376],[110.085454,32.613034],[110.017701,32.546987],[109.910528,32.592872],[109.816905,32.577244],[109.726978,32.608498],[109.631507,32.599929],[109.637051,32.540935],[109.575457,32.506629],[109.502776,32.389489],[109.495385,32.300522],[109.592703,32.219568],[109.621652,32.106617],[109.590855,32.012807],[109.631507,31.962059],[109.584696,31.900617],[109.638282,31.811172],[109.585928,31.726731],[109.281654,31.717061],[109.273646,31.801003],[109.195422,31.817782],[109.164009,31.877247],[108.988466,31.979317],[108.902235,31.984899],[108.734084,32.106617],[108.67249,32.104083],[108.509882,32.201343],[108.46923,32.270173],[108.312781,32.232222],[108.251187,32.273208],[108.179122,32.222099],[108.070717,32.233234],[107.979558,32.14614],[107.812022,32.24791],[107.75474,32.338445],[107.707929,32.331873],[107.680211,32.398078],[107.533002,32.383426],[107.456625,32.417778],[107.436299,32.529837],[107.382097,32.54043],[107.313727,32.489976],[107.263836,32.403129],[107.127098,32.482406],[107.080286,32.542448],[107.108004,32.600938],[107.066736,32.708741],[106.82344,32.705217],[106.733513,32.739446],[106.663296,32.690615],[106.585687,32.688097],[106.421231,32.616562],[106.347935,32.670974],[106.17424,32.697664],[106.076305,32.753537],[106.076305,32.758065],[106.076921,32.764103],[106.07261,32.764103],[106.093552,32.823956],[106.025798,32.85814],[105.825002,32.824962],[105.822538,32.770141],[105.719061,32.759575],[105.596489,32.699175],[105.563844,32.72485],[105.49917,32.911902],[105.590329,32.876734],[105.735691,32.905372],[105.917393,32.993739],[105.930944,33.177721],[105.965436,33.204759],[105.862574,33.234291],[105.74801,33.298827],[105.723372,33.390796],[105.82993,33.382802],[105.842248,33.490152],[105.956197,33.612818],[106.129276,33.604347],[106.187174,33.54652],[106.303587,33.604347],[106.447101,33.613316],[106.456956,33.533055],[106.54134,33.513103],[106.58076,33.575937],[106.539492,33.691013],[106.480362,33.715403],[106.461883,33.789528],[106.493296,33.846197],[106.41076,33.906304],[106.474202,33.970836],[106.501919,34.104706],[106.585071,34.149282],[106.526557,34.291768],[106.663912,34.24331],[106.717498,34.369342],[106.624491,34.410323],[106.610325,34.454244],[106.455108,34.531667],[106.334384,34.517864],[106.314058,34.578973],[106.419384,34.643482],[106.505615,34.74679],[106.575216,34.769893],[106.493296,34.941247],[106.494528,35.005964],[106.494528,35.005964],[106.5746,35.089236],[106.710723,35.100495],[106.838222,35.079933],[106.901664,35.094621],[107.08275,35.024095],[107.089526,34.976553],[107.189308,34.893166],[107.252134,34.880896],[107.286626,34.931927],[107.523763,34.909851],[107.561951,34.966747],[107.634016,34.950565],[107.804631,34.95694],[107.863761,34.996161],[107.757204,35.076016],[107.686371,35.217895],[107.651878,35.239889],[107.745501,35.311693],[107.867457,35.256014],[108.049159,35.254059],[108.174811,35.305345],[108.2401,35.256014],[108.352817,35.285812],[108.48894,35.275066],[108.614591,35.32878],[108.631222,35.418548],[108.618287,35.556908],[108.539447,35.605569],[108.517273,35.715921],[108.524664,35.839703],[108.498179,35.876072],[108.588722,35.950214],[108.656475,35.952636],[108.712526,36.13889],[108.646004,36.25429],[108.651548,36.384936],[108.618903,36.434052],[108.510498,36.474478],[108.495099,36.422498],[108.407636,36.458117],[108.340498,36.55911],[108.262274,36.549497],[108.194521,36.625405],[108.163724,36.563916],[108.007891,36.61628],[108.004811,36.683006],[107.939522,36.655651],[107.907493,36.751591],[107.720863,36.802391],[107.540393,36.828736],[107.478183,36.908674],[107.310032,36.912501],[107.288474,37.00812]]],[[[106.076305,32.753537],[106.07261,32.764103],[106.076921,32.764103],[106.076305,32.758065],[106.076305,32.753537]]],[[[111.022914,33.474682],[111.022914,33.475181],[111.02661,33.478675],[111.02661,33.474183],[111.022914,33.474682]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":620000,\"name\":\"甘肃\",\"center\":[103.823557,36.058039],\"centroid\":[95.7129,40.166],\"childrenNum\":14,\"level\":\"province\",\"subFeatureIndex\":27,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[106.494528,35.005964],[106.494528,35.005964],[106.493296,34.941247],[106.575216,34.769893],[106.505615,34.74679],[106.419384,34.643482],[106.314058,34.578973],[106.334384,34.517864],[106.455108,34.531667],[106.610325,34.454244],[106.624491,34.410323],[106.717498,34.369342],[106.663912,34.24331],[106.526557,34.291768],[106.585071,34.149282],[106.501919,34.104706],[106.474202,33.970836],[106.41076,33.906304],[106.493296,33.846197],[106.461883,33.789528],[106.480362,33.715403],[106.539492,33.691013],[106.58076,33.575937],[106.54134,33.513103],[106.456956,33.533055],[106.447101,33.613316],[106.303587,33.604347],[106.187174,33.54652],[106.129276,33.604347],[105.956197,33.612818],[105.842248,33.490152],[105.82993,33.382802],[105.723372,33.390796],[105.74801,33.298827],[105.862574,33.234291],[105.965436,33.204759],[105.930944,33.177721],[105.917393,32.993739],[105.735691,32.905372],[105.590329,32.876734],[105.49917,32.911902],[105.414171,32.921948],[105.391381,32.835017],[105.455439,32.737433],[105.347033,32.682558],[105.111128,32.59388],[105.026745,32.650322],[104.881999,32.600938],[104.845659,32.653848],[104.739717,32.635711],[104.643015,32.661908],[104.582653,32.722333],[104.458849,32.748504],[104.363994,32.822448],[104.294393,32.83552],[104.288234,32.94304],[104.378161,32.953081],[104.426204,33.0108],[104.337509,33.038392],[104.378161,33.109086],[104.303632,33.304328],[104.432979,33.325828],[104.292545,33.336326],[104.22048,33.404782],[104.155191,33.542531],[104.168741,33.611821],[104.046169,33.686533],[103.871243,33.68255],[103.778236,33.658648],[103.626099,33.727347],[103.520157,33.678566],[103.525085,33.798975],[103.349542,33.74327],[103.279325,33.806433],[103.153057,33.814884],[103.181391,33.900842],[103.124108,33.968354],[103.119797,34.034822],[103.178927,34.079931],[103.124108,34.16166],[102.973203,34.205217],[102.978747,34.249246],[102.911609,34.313022],[102.798276,34.272982],[102.599328,34.145321],[102.655994,34.113623],[102.471213,34.072993],[102.437336,34.087364],[102.391756,33.970836],[102.315996,33.994154],[102.237772,33.963392],[102.136142,33.965377],[102.234076,33.870046],[102.239619,33.788036],[102.299981,33.782566],[102.342481,33.725357],[102.33817,33.614313],[102.440416,33.57494],[102.462589,33.449724],[102.396684,33.40678],[102.264873,33.417269],[102.186649,33.332327],[102.217446,33.248303],[102.112736,33.287324],[102.08933,33.204759],[101.935345,33.186734],[101.865744,33.103072],[101.841723,33.184731],[101.769658,33.268816],[101.878063,33.315829],[101.885454,33.380804],[101.9452,33.437742],[101.907012,33.542032],[101.844186,33.602353],[101.769042,33.538541],[101.735781,33.49614],[101.622448,33.502127],[101.582412,33.675081],[101.501724,33.70296],[101.385312,33.644702],[101.238718,33.685039],[101.166653,33.660142],[101.191907,33.786047],[101.153718,33.844706],[100.999118,33.889419],[100.806329,34.155224],[100.764445,34.178987],[100.821727,34.317469],[100.895024,34.375268],[100.986799,34.374774],[101.054552,34.322905],[101.235022,34.325376],[101.331109,34.245289],[101.530057,34.21066],[101.622448,34.178492],[101.736397,34.079931],[101.84665,34.150272],[101.955055,34.10966],[101.965526,34.167601],[102.062229,34.227976],[102.067772,34.293746],[102.149692,34.271993],[102.189728,34.355018],[102.237156,34.343163],[102.237772,34.343163],[102.237156,34.343163],[102.237772,34.343163],[102.210054,34.399462],[102.210054,34.399462],[102.155852,34.507511],[102.003715,34.538074],[101.919947,34.621821],[101.917483,34.875497],[102.048062,34.910832],[102.094874,34.986848],[102.218677,35.058386],[102.29567,35.071609],[102.310452,35.128883],[102.402227,35.191006],[102.370814,35.262854],[102.279655,35.304857],[102.317228,35.433663],[102.407155,35.408308],[102.447807,35.437563],[102.504473,35.583189],[102.742226,35.495065],[102.808747,35.560315],[102.686175,35.772253],[102.78411,35.862496],[102.955957,35.861041],[102.971971,35.995247],[102.882044,36.082335],[102.941174,36.105058],[102.98737,36.193956],[103.068058,36.203612],[103.024326,36.257185],[102.830305,36.358439],[102.832153,36.357957],[102.831537,36.360848],[102.830305,36.362294],[102.769943,36.472072],[102.761936,36.568721],[102.606719,36.682526],[102.704654,36.792329],[102.587009,36.869912],[102.56114,36.919676],[102.450271,36.968453],[102.506321,37.019108],[102.488459,37.079278],[102.642444,37.099801],[102.599944,37.174687],[102.457662,37.24807],[102.428097,37.308534],[102.19712,37.420287],[102.102881,37.48441],[102.130598,37.544684],[102.035743,37.627184],[102.036359,37.684974],[101.946432,37.728051],[101.815853,37.65419],[101.791832,37.695864],[101.659405,37.733256],[101.597195,37.828308],[101.459224,37.866105],[101.362522,37.791437],[101.150639,37.876969],[100.887633,38.050562],[100.93814,38.160261],[100.825423,38.158849],[100.74843,38.239724],[100.619083,38.265567],[100.546402,38.246773],[100.474953,38.289052],[100.318505,38.329428],[100.261222,38.366498],[100.24028,38.441519],[100.064122,38.518802],[100.001296,38.466821],[100.093071,38.4073],[100.157744,38.309712],[100.182998,38.221864],[100.126332,38.231735],[99.937238,38.34163],[99.826985,38.370251],[99.65945,38.449017],[99.555972,38.520207],[99.50916,38.608628],[99.450646,38.60442],[99.361951,38.718418],[99.222133,38.788875],[99.068764,38.896991],[99.1088,38.946334],[98.951735,38.987737],[98.816845,39.085799],[98.743548,39.086728],[98.584635,38.930046],[98.457752,38.952849],[98.383839,39.029581],[98.280977,39.027257],[98.251412,38.891403],[98.094964,38.786077],[98.009348,38.859262],[97.828878,38.930046],[97.701379,38.963085],[97.679205,39.010522],[97.371235,39.14058],[97.220946,39.192999],[96.962867,39.198564],[97.012142,39.141972],[96.969643,39.097873],[96.940693,38.907701],[96.983809,38.869046],[97.009063,38.702544],[97.057722,38.672654],[97.055874,38.5946],[96.975802,38.559519],[96.7941,38.60816],[96.780549,38.504289],[96.6666,38.483684],[96.698013,38.422302],[96.626564,38.356177],[96.665369,38.230325],[96.46334,38.27778],[96.335841,38.246303],[96.313051,38.162142],[96.221892,38.148969],[96.109175,38.187072],[96.063596,38.172962],[95.856024,38.284355],[95.83693,38.343977],[95.702039,38.400736],[95.51849,38.295156],[95.320157,38.32051],[95.261027,38.301261],[95.121825,38.417615],[94.973999,38.430271],[94.810775,38.385261],[94.67958,38.387137],[94.527443,38.36556],[94.511429,38.445268],[94.370379,38.762753],[93.885018,38.720752],[93.800019,38.750622],[93.769838,38.821047],[93.884403,38.826175],[93.729186,38.92446],[93.453245,38.915615],[93.274007,38.89606],[93.179152,38.923994],[93.198246,39.045847],[93.131725,39.108088],[93.142196,39.160531],[92.978356,39.143364],[92.938936,39.169809],[92.866871,39.138723],[92.489916,39.09973],[92.41046,39.038412],[92.366728,39.059322],[92.339011,39.236575],[92.52564,39.368528],[92.639589,39.514543],[92.745531,39.868137],[92.796654,40.15364],[92.906907,40.310773],[92.928465,40.572609],[93.506216,40.648464],[93.760599,40.664804],[93.820961,40.793574],[93.809874,40.879583],[94.01067,41.114857],[94.184365,41.268392],[94.534219,41.50586],[94.750413,41.538114],[94.861898,41.668309],[95.135991,41.772811],[95.29552,41.569456],[95.39407,41.693333],[95.57146,41.796011],[95.677402,41.830795],[95.855408,41.849516],[96.038342,41.924794],[96.117183,41.985753],[96.13874,42.054207],[96.077147,42.149652],[96.178161,42.217929],[96.040806,42.3264],[96.06606,42.414367],[95.978596,42.436892],[96.02356,42.54234],[96.103632,42.604026],[96.386348,42.727655],[96.742361,42.757096],[96.968411,42.756218],[97.172903,42.795305],[97.307177,42.565259],[97.84674,41.656687],[97.613915,41.477176],[97.629314,41.440407],[97.971776,41.097726],[98.25018,40.939271],[98.333332,40.918929],[98.344419,40.568518],[98.627751,40.677965],[98.569853,40.746901],[98.668403,40.772734],[98.689345,40.691576],[98.801446,40.609411],[98.790975,40.705185],[98.984996,40.782701],[99.041662,40.693844],[99.102025,40.676603],[99.172858,40.747354],[99.174705,40.858317],[99.565827,40.846551],[99.673,40.932943],[100.057346,40.908077],[100.107853,40.875511],[100.237201,40.716977],[100.242744,40.618495],[100.169447,40.541242],[100.169447,40.277458],[100.002528,40.197528],[99.927383,40.063947],[99.488218,39.875943],[99.672384,39.887881],[99.822058,39.85987],[99.904593,39.785886],[100.040716,39.756913],[100.128179,39.702155],[100.250135,39.68512],[100.314193,39.606799],[100.326512,39.509003],[100.500823,39.4813],[100.498975,39.400437],[100.619699,39.38749],[100.842053,39.405523],[100.842669,39.199955],[100.864227,39.106695],[100.835278,39.025863],[100.961545,39.005873],[100.969553,38.9468],[101.117378,38.97518],[101.228863,39.02075],[101.198682,38.943077],[101.24303,38.86066],[101.334189,38.848545],[101.307087,38.802865],[101.562702,38.712816],[101.601506,38.6549],[101.679115,38.690869],[101.777049,38.660507],[101.941505,38.808926],[102.075164,38.891403],[101.926106,39.000758],[101.830636,39.093229],[102.280887,39.190217],[102.45335,39.25511],[102.601792,39.172129],[103.007696,39.09973],[103.344615,39.331514],[103.595302,39.386565],[103.839214,39.460516],[103.964865,39.455434],[104.091133,39.418466],[104.047401,39.297721],[104.177364,39.15218],[104.207546,39.083941],[104.168125,38.940285],[104.044322,38.895128],[103.85954,38.64462],[103.416063,38.404956],[103.507838,38.281068],[103.53494,38.156497],[103.369868,38.089658],[103.362477,38.037368],[103.401897,37.861854],[103.676606,37.783871],[103.948235,37.564606],[104.183524,37.406981],[104.287002,37.42789],[104.437907,37.445943],[104.679971,37.407931],[104.713848,37.32947],[104.632544,37.299015],[104.600515,37.242831],[104.638087,37.201857],[104.775442,37.246641],[104.85613,37.211864],[104.95468,37.040125],[105.165331,36.995218],[105.190585,36.886185],[105.244787,36.894798],[105.334714,36.800953],[105.319932,36.742961],[105.218302,36.730494],[105.22015,36.631167],[105.281744,36.522575],[105.319932,36.536038],[105.398156,36.430683],[105.401236,36.370002],[105.473301,36.298185],[105.460366,36.223887],[105.513337,36.150003],[105.343954,36.033965],[105.333483,35.887707],[105.392613,35.865405],[105.481924,35.727094],[105.570003,35.716407],[105.671017,35.749434],[105.754785,35.730494],[105.690727,35.698431],[105.847176,35.490681],[105.868734,35.53987],[106.015943,35.52234],[106.070762,35.491655],[106.057827,35.488245],[105.897683,35.451698],[105.894603,35.413672],[106.054132,35.449261],[106.061523,35.457547],[106.064603,35.431225],[106.073226,35.421474],[106.079385,35.427325],[106.107102,35.364894],[106.174856,35.438538],[106.319601,35.265296],[106.472354,35.310716],[106.503767,35.415135],[106.440941,35.526723],[106.476666,35.580756],[106.434782,35.688712],[106.501304,35.737779],[106.501304,35.735836],[106.503767,35.736322],[106.504383,35.738265],[106.737208,35.689198],[106.86594,35.737779],[106.92199,35.803316],[106.849925,35.887707],[106.950939,36.004444],[106.957715,36.091522],[106.858548,36.206992],[106.858548,36.206992],[106.599238,36.274552],[106.599238,36.274552],[106.505615,36.265869],[106.488369,36.400348],[106.521014,36.479289],[106.401521,36.546133],[106.471738,36.581214],[106.519782,36.708912],[106.519782,36.708912],[106.589383,36.750153],[106.631883,36.723301],[106.658368,36.811972],[106.595542,36.940243],[106.666991,37.01672],[106.605397,37.127475],[106.750143,37.098847],[106.777244,37.156569],[106.777244,37.156569],[106.891193,37.098369],[107.030395,37.140831],[107.095685,37.115548],[107.180685,37.143692],[107.268764,37.099324],[107.288474,37.00812],[107.288474,37.00812],[107.310032,36.912501],[107.478183,36.908674],[107.540393,36.828736],[107.720863,36.802391],[107.907493,36.751591],[107.939522,36.655651],[108.004811,36.683006],[108.007891,36.61628],[108.163724,36.563916],[108.194521,36.625405],[108.262274,36.549497],[108.340498,36.55911],[108.407636,36.458117],[108.495099,36.422498],[108.510498,36.474478],[108.618903,36.434052],[108.651548,36.384936],[108.646004,36.25429],[108.712526,36.13889],[108.656475,35.952636],[108.588722,35.950214],[108.498179,35.876072],[108.524664,35.839703],[108.517273,35.715921],[108.539447,35.605569],[108.618287,35.556908],[108.631222,35.418548],[108.614591,35.32878],[108.48894,35.275066],[108.352817,35.285812],[108.2401,35.256014],[108.174811,35.305345],[108.049159,35.254059],[107.867457,35.256014],[107.745501,35.311693],[107.651878,35.239889],[107.686371,35.217895],[107.757204,35.076016],[107.863761,34.996161],[107.804631,34.95694],[107.634016,34.950565],[107.561951,34.966747],[107.523763,34.909851],[107.286626,34.931927],[107.252134,34.880896],[107.189308,34.893166],[107.089526,34.976553],[107.08275,35.024095],[106.901664,35.094621],[106.838222,35.079933],[106.710723,35.100495],[106.5746,35.089236],[106.494528,35.005964]]],[[[106.070762,35.491655],[106.078153,35.489707],[106.078153,35.489707],[106.071994,35.463395],[106.061523,35.457547],[106.054132,35.449261],[106.057827,35.488245],[106.070762,35.491655]]],[[[106.073226,35.421474],[106.064603,35.431225],[106.061523,35.457547],[106.071994,35.463395],[106.06953,35.458034],[106.071378,35.449261],[106.079385,35.427325],[106.073226,35.421474]]],[[[102.831537,36.360848],[102.832153,36.357957],[102.830305,36.358439],[102.830305,36.362294],[102.831537,36.360848]]],[[[106.503767,35.736322],[106.501304,35.735836],[106.501304,35.737779],[106.504383,35.738265],[106.503767,35.736322]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":630000,\"name\":\"青海\",\"center\":[101.778916,36.623178],\"centroid\":[96.043531,35.726402],\"childrenNum\":8,\"level\":\"province\",\"subFeatureIndex\":28,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[91.001807,33.116102],[91.001807,33.116102],[90.805938,33.114599],[90.70554,33.135645],[90.486881,33.266815],[90.405577,33.260311],[90.332896,33.310829],[90.246665,33.42426],[90.092064,33.469691],[90.080977,33.530561],[90.01076,33.553501],[89.984275,33.61232],[90.008296,33.688026],[89.907282,33.74128],[89.933768,33.796986],[89.837065,33.869052],[89.795181,33.865575],[89.691704,33.957933],[89.635037,34.0492],[89.655979,34.096778],[89.818587,34.174037],[89.825362,34.293746],[89.872174,34.335752],[89.801957,34.390575],[89.823515,34.455231],[89.798877,34.628714],[89.72558,34.660709],[89.732356,34.732039],[89.799493,34.74384],[89.867862,34.810677],[89.821667,34.902981],[89.707102,34.919663],[89.654747,34.883351],[89.560509,34.938794],[89.593153,35.104412],[89.513081,35.139158],[89.449639,35.226693],[89.532175,35.285323],[89.497067,35.361479],[89.68616,35.414647],[89.744058,35.479963],[89.700327,35.537435],[89.765616,35.599732],[89.747138,35.751862],[89.801957,35.847948],[89.549422,35.858132],[89.429929,35.916302],[89.418843,36.04606],[89.476125,36.021868],[89.638117,36.04993],[89.711414,36.092972],[89.941159,36.067343],[89.937463,36.130675],[89.999057,36.169809],[90.028006,36.25815],[90.145651,36.238849],[90.128405,36.208923],[90.234962,36.161597],[90.430215,36.133091],[90.526917,36.148553],[90.66304,36.134058],[90.776373,36.086203],[90.841046,36.01848],[90.922966,36.029126],[90.979017,36.106992],[91.09235,36.088621],[91.124994,36.115693],[91.07264,36.299149],[91.026444,36.323738],[91.05293,36.432608],[91.035683,36.529788],[90.7388,36.58746],[90.720938,36.708912],[90.735105,36.827778],[90.853981,36.915371],[90.983944,36.913458],[91.181045,37.025318],[91.303617,37.01242],[91.280211,37.163721],[91.1909,37.205669],[91.192132,37.27807],[91.134849,37.32614],[91.099741,37.447843],[91.057241,37.483936],[90.958075,37.477763],[90.863836,37.534246],[90.882314,37.575513],[90.776373,37.6504],[90.519526,37.73089],[90.516446,38.207291],[90.530613,38.32004],[90.361846,38.300322],[90.352607,38.233615],[90.280542,38.238315],[90.137644,38.340692],[90.111774,38.477595],[90.315034,38.501948],[90.424671,38.492114],[90.463476,38.556711],[90.610685,38.596003],[90.619308,38.664245],[90.831191,38.667982],[91.307928,38.751089],[91.446515,38.813588],[91.87952,38.884417],[91.966368,38.930976],[92.173323,38.960758],[92.263866,39.002153],[92.38459,39.000758],[92.41046,39.038412],[92.489916,39.09973],[92.866871,39.138723],[92.938936,39.169809],[92.978356,39.143364],[93.142196,39.160531],[93.131725,39.108088],[93.198246,39.045847],[93.179152,38.923994],[93.274007,38.89606],[93.453245,38.915615],[93.729186,38.92446],[93.884403,38.826175],[93.769838,38.821047],[93.800019,38.750622],[93.885018,38.720752],[94.370379,38.762753],[94.511429,38.445268],[94.527443,38.36556],[94.67958,38.387137],[94.810775,38.385261],[94.973999,38.430271],[95.121825,38.417615],[95.261027,38.301261],[95.320157,38.32051],[95.51849,38.295156],[95.702039,38.400736],[95.83693,38.343977],[95.856024,38.284355],[96.063596,38.172962],[96.109175,38.187072],[96.221892,38.148969],[96.313051,38.162142],[96.335841,38.246303],[96.46334,38.27778],[96.665369,38.230325],[96.626564,38.356177],[96.698013,38.422302],[96.6666,38.483684],[96.780549,38.504289],[96.7941,38.60816],[96.975802,38.559519],[97.055874,38.5946],[97.057722,38.672654],[97.009063,38.702544],[96.983809,38.869046],[96.940693,38.907701],[96.969643,39.097873],[97.012142,39.141972],[96.962867,39.198564],[97.220946,39.192999],[97.371235,39.14058],[97.679205,39.010522],[97.701379,38.963085],[97.828878,38.930046],[98.009348,38.859262],[98.094964,38.786077],[98.251412,38.891403],[98.280977,39.027257],[98.383839,39.029581],[98.457752,38.952849],[98.584635,38.930046],[98.743548,39.086728],[98.816845,39.085799],[98.951735,38.987737],[99.1088,38.946334],[99.068764,38.896991],[99.222133,38.788875],[99.361951,38.718418],[99.450646,38.60442],[99.50916,38.608628],[99.555972,38.520207],[99.65945,38.449017],[99.826985,38.370251],[99.937238,38.34163],[100.126332,38.231735],[100.182998,38.221864],[100.157744,38.309712],[100.093071,38.4073],[100.001296,38.466821],[100.064122,38.518802],[100.24028,38.441519],[100.261222,38.366498],[100.318505,38.329428],[100.474953,38.289052],[100.546402,38.246773],[100.619083,38.265567],[100.74843,38.239724],[100.825423,38.158849],[100.93814,38.160261],[100.887633,38.050562],[101.150639,37.876969],[101.362522,37.791437],[101.459224,37.866105],[101.597195,37.828308],[101.659405,37.733256],[101.791832,37.695864],[101.815853,37.65419],[101.946432,37.728051],[102.036359,37.684974],[102.035743,37.627184],[102.130598,37.544684],[102.102881,37.48441],[102.19712,37.420287],[102.428097,37.308534],[102.457662,37.24807],[102.599944,37.174687],[102.642444,37.099801],[102.488459,37.079278],[102.506321,37.019108],[102.450271,36.968453],[102.56114,36.919676],[102.587009,36.869912],[102.704654,36.792329],[102.606719,36.682526],[102.761936,36.568721],[102.769943,36.472072],[102.830305,36.362294],[102.830305,36.358439],[103.024326,36.257185],[103.068058,36.203612],[102.98737,36.193956],[102.941174,36.105058],[102.882044,36.082335],[102.971971,35.995247],[102.955957,35.861041],[102.78411,35.862496],[102.686175,35.772253],[102.808747,35.560315],[102.742226,35.495065],[102.504473,35.583189],[102.447807,35.437563],[102.407155,35.408308],[102.317228,35.433663],[102.279655,35.304857],[102.370814,35.262854],[102.402227,35.191006],[102.310452,35.128883],[102.29567,35.071609],[102.218677,35.058386],[102.094874,34.986848],[102.048062,34.910832],[101.917483,34.875497],[101.919947,34.621821],[102.003715,34.538074],[102.155852,34.507511],[102.210054,34.399462],[102.210054,34.399462],[102.237772,34.343163],[102.237156,34.343163],[102.237772,34.343163],[102.237156,34.343163],[102.189728,34.355018],[102.149692,34.271993],[102.067772,34.293746],[102.062229,34.227976],[101.965526,34.167601],[101.955055,34.10966],[101.84665,34.150272],[101.736397,34.079931],[101.622448,34.178492],[101.530057,34.21066],[101.331109,34.245289],[101.235022,34.325376],[101.054552,34.322905],[100.986799,34.374774],[100.895024,34.375268],[100.821727,34.317469],[100.764445,34.178987],[100.806329,34.155224],[100.999118,33.889419],[101.153718,33.844706],[101.191907,33.786047],[101.166653,33.660142],[101.238718,33.685039],[101.385312,33.644702],[101.501724,33.70296],[101.582412,33.675081],[101.622448,33.502127],[101.735781,33.49614],[101.769042,33.538541],[101.769658,33.447728],[101.695745,33.433748],[101.64955,33.323328],[101.739477,33.265815],[101.625528,33.100566],[101.486326,33.227285],[101.405022,33.225783],[101.393935,33.157687],[101.297232,33.262313],[101.183283,33.270317],[101.11553,33.194746],[101.169733,33.100566],[101.183899,32.984204],[101.129081,32.989725],[101.124153,32.909893],[101.237486,32.824962],[101.22332,32.725856],[101.157414,32.661404],[101.075494,32.683061],[100.93198,32.600433],[100.690532,32.678025],[100.645568,32.526306],[100.54517,32.569681],[100.516837,32.630168],[100.399809,32.756556],[100.339447,32.719313],[100.258759,32.742466],[100.208252,32.606482],[100.088143,32.668959],[100.139266,32.724346],[100.123252,32.837028],[100.038252,32.928979],[99.956332,32.948061],[99.877492,33.045915],[99.854086,32.945048],[99.788181,32.956596],[99.763543,32.778693],[99.607711,32.780705],[99.558436,32.839039],[99.385973,32.900349],[99.268328,32.878744],[99.235067,32.982197],[99.179633,33.044912],[99.002242,33.08252],[98.858728,33.150674],[98.759562,33.277321],[98.779272,33.37181],[98.734309,33.409278],[98.742316,33.477677],[98.648077,33.549014],[98.61728,33.63723],[98.6567,33.647193],[98.539056,33.746752],[98.462064,33.849178],[98.406629,33.867065],[98.440506,33.981255],[98.401702,34.08786],[98.21076,34.078444],[98.051848,34.115604],[97.937283,34.196804],[97.937283,34.196804],[97.834421,34.208186],[97.665654,34.126997],[97.70261,34.036805],[97.660111,33.956444],[97.458698,33.886935],[97.388481,33.884452],[97.435293,33.680558],[97.415583,33.605343],[97.52522,33.575937],[97.552321,33.465698],[97.625618,33.461705],[97.753733,33.410277],[97.676125,33.340825],[97.621306,33.334327],[97.576343,33.221779],[97.487648,33.168205],[97.487648,33.10658],[97.542466,33.036385],[97.523988,32.988721],[97.373699,32.956094],[97.386018,32.779196],[97.42359,32.704713],[97.543698,32.621602],[97.730944,32.527315],[97.670582,32.517225],[97.472249,32.54497],[97.448843,32.586823],[97.334895,32.514198],[97.388481,32.501583],[97.341054,32.441009],[97.387865,32.427374],[97.424822,32.323278],[97.371235,32.273208],[97.299786,32.294959],[97.264062,32.183621],[97.308409,32.074682],[97.130403,32.04375],[97.008447,32.067076],[96.894498,32.013822],[96.722651,32.013314],[96.81073,31.894521],[96.760223,31.856922],[96.840295,31.720623],[96.775006,31.673788],[96.616093,31.736908],[96.576057,31.712989],[96.468268,31.769978],[96.389428,31.919917],[96.253921,31.929566],[96.176313,31.777608],[96.252689,31.69619],[96.204646,31.598904],[96.160298,31.600943],[96.135661,31.702299],[96.041422,31.734364],[95.982908,31.816765],[95.89914,31.817273],[95.825227,31.681935],[95.779648,31.74912],[95.618272,31.783712],[95.546823,31.739961],[95.439649,31.831508],[95.360809,31.959013],[95.454432,32.062006],[95.406389,32.182102],[95.312766,32.148673],[95.26965,32.194761],[95.241317,32.32075],[95.10581,32.259042],[95.096571,32.322267],[95.261643,32.348049],[95.218527,32.397067],[95.081789,32.384942],[94.985086,32.421819],[94.912405,32.415758],[94.889616,32.472311],[94.80708,32.486444],[94.772587,32.555057],[94.614291,32.673492],[94.53853,32.599425],[94.395016,32.594385],[94.371611,32.524793],[94.196684,32.516216],[94.136322,32.433939],[93.958931,32.484929],[93.861613,32.466253],[93.820345,32.549509],[93.654657,32.57321],[93.618933,32.522775],[93.516687,32.475844],[93.4631,32.556065],[93.385492,32.525297],[93.239514,32.662411],[93.069515,32.626137],[93.019624,32.737433],[92.877342,32.697161],[92.686401,32.765109],[92.63651,32.720319],[92.355641,32.764606],[92.255243,32.720823],[92.198577,32.755046],[92.227526,32.820939],[92.145606,32.885779],[91.955897,32.820437],[91.896766,32.907884],[91.785281,32.944044],[91.58079,33.039395],[91.49887,33.109086],[91.436044,33.065974],[91.262349,33.141156],[91.134849,33.073495],[91.001807,33.116102]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":640000,\"name\":\"宁夏\",\"center\":[106.278179,38.46637],\"centroid\":[106.169867,37.291331],\"childrenNum\":5,\"level\":\"province\",\"subFeatureIndex\":29,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[106.06953,35.458034],[106.071994,35.463395],[106.078153,35.489707],[106.078153,35.489707],[106.070762,35.491655],[106.015943,35.52234],[105.868734,35.53987],[105.847176,35.490681],[105.690727,35.698431],[105.754785,35.730494],[105.671017,35.749434],[105.570003,35.716407],[105.481924,35.727094],[105.392613,35.865405],[105.333483,35.887707],[105.343954,36.033965],[105.513337,36.150003],[105.460366,36.223887],[105.473301,36.298185],[105.401236,36.370002],[105.398156,36.430683],[105.319932,36.536038],[105.281744,36.522575],[105.22015,36.631167],[105.218302,36.730494],[105.319932,36.742961],[105.334714,36.800953],[105.244787,36.894798],[105.190585,36.886185],[105.165331,36.995218],[104.95468,37.040125],[104.85613,37.211864],[104.775442,37.246641],[104.638087,37.201857],[104.600515,37.242831],[104.632544,37.299015],[104.713848,37.32947],[104.679971,37.407931],[104.437907,37.445943],[104.287002,37.42789],[104.407726,37.464467],[104.419429,37.511943],[104.801311,37.538516],[104.866601,37.566503],[105.024281,37.579781],[105.111128,37.633818],[105.315004,37.702018],[105.598952,37.699178],[105.622974,37.778669],[105.760944,37.799947],[105.80406,37.861854],[105.799749,37.940227],[105.840401,38.003902],[105.780655,38.084949],[105.775111,38.186601],[105.86627,38.296565],[105.821307,38.366967],[105.874277,38.593197],[105.852719,38.641349],[105.90569,38.731488],[105.897683,38.788875],[106.003625,38.874636],[105.97098,38.909097],[106.060907,38.968667],[106.096631,39.08487],[106.145907,39.153108],[106.283877,39.14522],[106.284493,39.270397],[106.402753,39.291701],[106.506231,39.269934],[106.602318,39.375466],[106.683622,39.357426],[106.751375,39.381478],[106.806809,39.318554],[106.795723,39.214327],[106.859164,39.107623],[106.96757,39.054676],[106.954019,38.941215],[106.709491,38.718885],[106.66268,38.601614],[106.647897,38.470569],[106.601702,38.392295],[106.482825,38.319571],[106.546883,38.269794],[106.768621,38.174843],[107.014997,38.120261],[107.19054,38.154144],[107.329742,38.087774],[107.438147,37.992586],[107.419669,37.940699],[107.49235,37.944945],[107.65003,37.864688],[107.620465,37.775832],[107.499125,37.7659],[107.484959,37.706279],[107.348836,37.608226],[107.342061,37.515265],[107.284162,37.482036],[107.257677,37.337082],[107.336517,37.165628],[107.268764,37.099324],[107.180685,37.143692],[107.095685,37.115548],[107.030395,37.140831],[106.891193,37.098369],[106.777244,37.156569],[106.777244,37.156569],[106.750143,37.098847],[106.605397,37.127475],[106.666991,37.01672],[106.595542,36.940243],[106.658368,36.811972],[106.631883,36.723301],[106.589383,36.750153],[106.519782,36.708912],[106.519782,36.708912],[106.471738,36.581214],[106.401521,36.546133],[106.521014,36.479289],[106.488369,36.400348],[106.505615,36.265869],[106.599238,36.274552],[106.599238,36.274552],[106.858548,36.206992],[106.858548,36.206992],[106.957715,36.091522],[106.950939,36.004444],[106.849925,35.887707],[106.92199,35.803316],[106.86594,35.737779],[106.737208,35.689198],[106.504383,35.738265],[106.501304,35.737779],[106.434782,35.688712],[106.476666,35.580756],[106.440941,35.526723],[106.503767,35.415135],[106.472354,35.310716],[106.319601,35.265296],[106.174856,35.438538],[106.107102,35.364894],[106.079385,35.427325],[106.071378,35.449261],[106.073226,35.450236],[106.073842,35.45511],[106.06953,35.458034]]],[[[106.057827,35.488245],[106.054132,35.449261],[105.894603,35.413672],[105.897683,35.451698],[106.057827,35.488245]]],[[[106.071378,35.449261],[106.06953,35.458034],[106.073842,35.45511],[106.073226,35.450236],[106.071378,35.449261]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":650000,\"name\":\"新疆\",\"center\":[87.617733,43.792818],\"centroid\":[85.294712,41.371801],\"childrenNum\":23,\"level\":\"province\",\"subFeatureIndex\":30,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[79.039649,34.33427],[78.958961,34.386132],[78.878273,34.391563],[78.742766,34.454737],[78.708274,34.522301],[78.634977,34.538074],[78.58139,34.505539],[78.542586,34.574539],[78.436029,34.543496],[78.427405,34.594243],[78.280812,34.623298],[78.267261,34.705482],[78.213059,34.717778],[78.237696,34.882369],[78.182262,34.936832],[78.201972,34.974592],[78.123131,35.036833],[78.124979,35.108327],[78.062769,35.11469],[78.01719,35.22816],[78.013494,35.36587],[78.136066,35.49263],[78.009799,35.491655],[77.914944,35.464857],[77.816394,35.518445],[77.690742,35.448287],[77.518895,35.481912],[77.396939,35.467781],[77.307628,35.540356],[77.195527,35.519419],[77.072339,35.590974],[76.967013,35.591947],[76.83705,35.66198],[76.76129,35.65566],[76.69292,35.747492],[76.593754,35.772253],[76.566037,35.819328],[76.59745,35.895947],[76.54879,35.919209],[76.365857,35.82418],[76.298719,35.841643],[76.147198,35.833397],[76.16506,35.909033],[76.104082,36.018964],[75.961184,36.051381],[75.942706,36.137923],[76.016619,36.165461],[76.011691,36.229197],[76.060967,36.225335],[75.989518,36.340127],[76.035097,36.409017],[75.945786,36.588421],[75.871873,36.66621],[75.724048,36.750632],[75.537418,36.773161],[75.536802,36.730015],[75.458578,36.720903],[75.425933,36.778912],[75.413614,36.954588],[75.244847,36.963194],[75.130898,37.010987],[75.032348,37.01672],[74.893762,36.939764],[74.84695,37.056839],[74.739161,37.028185],[74.70898,37.084529],[74.56793,37.032961],[74.498944,37.072595],[74.465068,37.147031],[74.511263,37.239973],[74.665864,37.235686],[74.727458,37.282831],[74.816153,37.216629],[74.911008,37.23378],[74.927022,37.277594],[75.125971,37.322334],[75.153072,37.414109],[75.069304,37.513367],[75.035428,37.501026],[74.940573,37.558914],[74.891914,37.668399],[75.006478,37.771102],[74.917167,37.844847],[74.911008,37.967118],[74.821697,38.102842],[74.789668,38.324734],[74.868508,38.404018],[74.862965,38.484152],[74.792747,38.536121],[74.717603,38.542205],[74.639995,38.599744],[74.506336,38.63761],[74.229779,38.656302],[74.147859,38.676858],[74.068403,38.585714],[74.090577,38.542205],[73.926121,38.536121],[73.89902,38.579166],[73.799237,38.610966],[73.757353,38.719818],[73.769056,38.775815],[73.699455,38.857865],[73.767824,38.941215],[73.826339,38.917012],[73.820179,39.041665],[73.743187,39.029581],[73.719781,39.108088],[73.639709,39.220353],[73.542391,39.269471],[73.554094,39.350023],[73.502355,39.383791],[73.592898,39.412457],[73.61076,39.466059],[73.745651,39.461902],[73.868223,39.482686],[73.953838,39.600345],[73.905795,39.742193],[73.841737,39.756453],[73.845433,39.831389],[73.907027,39.873647],[73.910722,39.934693],[73.980324,40.004851],[73.943367,40.015849],[74.023439,40.085008],[74.26304,40.125281],[74.356662,40.089128],[74.442894,40.137175],[74.577169,40.260567],[74.673255,40.278828],[74.697893,40.344527],[74.908544,40.339055],[74.795211,40.443412],[74.819233,40.505767],[74.891914,40.507587],[74.973218,40.460258],[75.102565,40.439769],[75.13521,40.463445],[75.242383,40.448876],[75.355716,40.538059],[75.432093,40.563518],[75.550353,40.648917],[75.636584,40.624399],[75.646439,40.516684],[75.733287,40.474369],[75.669845,40.363678],[75.709265,40.28111],[75.831221,40.327196],[75.921764,40.291151],[75.986438,40.381911],[76.176147,40.381455],[76.279625,40.439314],[76.333212,40.343615],[76.442233,40.391482],[76.539551,40.4639],[76.556798,40.542606],[76.657196,40.620312],[76.676906,40.696113],[76.646725,40.760045],[76.731724,40.818935],[76.761905,40.954185],[76.85368,40.976323],[76.885709,41.027348],[77.002122,41.073373],[77.091433,41.062546],[77.169041,41.009291],[77.296541,41.004776],[77.363062,41.040888],[77.476395,40.999357],[77.591576,40.992132],[77.829328,41.059388],[77.814546,41.134238],[77.905089,41.185141],[77.972842,41.172982],[78.129291,41.228354],[78.162551,41.382521],[78.324544,41.384316],[78.458818,41.41349],[78.580774,41.481659],[78.650375,41.467314],[78.739071,41.555578],[78.825302,41.560503],[78.959577,41.652663],[79.021787,41.657134],[79.138199,41.722814],[79.21704,41.725493],[79.326061,41.809391],[79.361169,41.796457],[79.462799,41.848625],[79.550879,41.833915],[79.640806,41.884717],[79.776313,41.892734],[79.852689,42.015544],[79.918594,42.041322],[80.14218,42.034656],[80.193303,42.081301],[80.139717,42.151427],[80.168666,42.200202],[80.28631,42.232993],[80.283847,42.320649],[80.229028,42.358241],[80.206238,42.428943],[80.265368,42.502211],[80.164354,42.627363],[80.228412,42.692923],[80.261673,42.825592],[80.417505,42.838755],[80.500041,42.879544],[80.602903,42.89445],[80.487106,42.94878],[80.378701,43.031497],[80.593048,43.133319],[80.79446,43.137248],[80.777214,43.30816],[80.69283,43.32035],[80.761199,43.446456],[80.75504,43.49422],[80.522215,43.816724],[80.511128,43.906887],[80.453846,43.989596],[80.449534,44.077778],[80.3941,44.127189],[80.413194,44.264461],[80.350368,44.484713],[80.411962,44.605392],[80.313412,44.704987],[80.200695,44.75642],[80.169898,44.844727],[79.999283,44.793797],[79.969102,44.877383],[79.887798,44.909173],[80.144644,45.058985],[80.24381,45.031507],[80.328194,45.069973],[80.404571,45.049264],[80.493882,45.126991],[80.599207,45.10588],[80.731634,45.156111],[80.897938,45.127413],[80.93551,45.16033],[81.024821,45.162862],[81.111669,45.218522],[81.170183,45.210935],[81.44982,45.265707],[81.575471,45.307803],[81.634601,45.357856],[81.78797,45.383497],[81.921013,45.233272],[82.052824,45.25602],[82.109491,45.211357],[82.294272,45.247596],[82.487061,45.181],[82.58746,45.224001],[82.60101,45.346083],[82.546808,45.425925],[82.281954,45.538772],[82.266555,45.620015],[82.289961,45.7166],[82.340468,45.772552],[82.342932,45.935076],[82.461808,45.979999],[82.518474,46.153938],[82.726662,46.494818],[82.829524,46.772551],[82.876335,46.82375],[82.937929,47.014193],[82.993364,47.06557],[83.02724,47.215341],[83.15474,47.236063],[83.257602,47.173057],[83.370318,47.178751],[83.418978,47.118934],[83.463325,47.131961],[83.576042,47.059049],[83.766367,47.026838],[83.932671,46.970117],[84.002888,46.990527],[84.086656,46.965217],[84.195061,47.003586],[84.37122,46.993384],[84.425422,47.00889],[84.506726,46.972975],[84.748175,47.009706],[84.849189,46.95705],[84.934188,46.863857],[84.987159,46.918239],[85.082014,46.939895],[85.276651,47.068831],[85.325926,47.044781],[85.545816,47.057826],[85.582772,47.14295],[85.682555,47.222655],[85.675163,47.318063],[85.701649,47.384138],[85.614801,47.497853],[85.617881,47.550781],[85.547048,48.00833],[85.529186,48.02714],[85.587084,48.191738],[85.678243,48.266272],[85.695489,48.335129],[85.791576,48.418986],[85.916612,48.438043],[86.225813,48.432485],[86.305269,48.491999],[86.416138,48.481688],[86.579978,48.538768],[86.640956,48.629012],[86.780774,48.73133],[86.754289,48.78458],[86.822042,48.849193],[86.757985,48.894844],[86.732731,48.995444],[86.836209,49.051159],[86.88918,49.132656],[87.088128,49.13383],[87.112766,49.155748],[87.239033,49.114644],[87.388707,49.098193],[87.43675,49.075073],[87.511894,49.101718],[87.49896,49.141268],[87.821096,49.173745],[87.867291,49.108769],[87.833415,49.050374],[87.911639,48.980132],[87.87653,48.949099],[87.763198,48.926697],[87.742256,48.881074],[87.93874,48.757765],[88.029283,48.75027],[88.089645,48.695009],[88.027436,48.62743],[87.96153,48.599344],[88.041602,48.548275],[88.10874,48.545898],[88.196819,48.493982],[88.363123,48.460267],[88.443811,48.391579],[88.503557,48.413029],[88.605803,48.337914],[88.575006,48.277423],[88.663085,48.172189],[88.79736,48.133869],[88.824461,48.106708],[88.939026,48.115497],[89.078228,47.98711],[89.231597,47.980301],[89.38127,48.046344],[89.569132,48.037943],[89.651052,47.913774],[89.735435,47.897329],[89.761921,47.835916],[89.957789,47.842743],[89.960253,47.885694],[90.086521,47.865628],[90.07605,47.777646],[90.13518,47.723337],[90.331665,47.68146],[90.398186,47.547551],[90.468403,47.497853],[90.468403,47.404795],[90.526301,47.378871],[90.488113,47.317252],[90.56141,47.207212],[90.767134,46.992568],[90.901408,46.960725],[90.958075,46.8794],[90.942676,46.825797],[91.054161,46.71761],[91.017821,46.582483],[91.079415,46.558626],[90.983328,46.374823],[90.900177,46.31204],[91.021517,46.121185],[91.028292,46.023224],[90.850285,45.888035],[90.714779,45.728714],[90.676591,45.582339],[90.671047,45.48762],[90.772677,45.432223],[90.804706,45.294756],[90.877387,45.280865],[90.881698,45.191964],[91.007966,45.218522],[91.129922,45.215993],[91.242023,45.137544],[91.37753,45.110947],[91.448978,45.156533],[91.561695,45.075466],[91.694738,45.065325],[91.803144,45.082649],[92.100026,45.081381],[92.240461,45.015859],[92.315605,45.02897],[92.501003,45.001054],[92.779407,45.050532],[92.884117,45.046727],[92.932776,45.017551],[93.174225,45.015436],[93.434767,44.955343],[93.509296,44.968044],[93.716251,44.89434],[93.723642,44.86551],[94.215162,44.667978],[94.329727,44.582811],[94.359292,44.51544],[94.470777,44.509466],[94.606283,44.448418],[94.722696,44.340681],[94.945666,44.292734],[94.998637,44.25332],[95.398381,44.294447],[95.326932,44.028756],[95.527113,44.007243],[95.623199,43.855567],[95.735916,43.597437],[95.857872,43.417779],[95.880046,43.280289],[95.921314,43.22974],[96.363558,42.900586],[96.386348,42.727655],[96.103632,42.604026],[96.02356,42.54234],[95.978596,42.436892],[96.06606,42.414367],[96.040806,42.3264],[96.178161,42.217929],[96.077147,42.149652],[96.13874,42.054207],[96.117183,41.985753],[96.038342,41.924794],[95.855408,41.849516],[95.677402,41.830795],[95.57146,41.796011],[95.39407,41.693333],[95.29552,41.569456],[95.135991,41.772811],[94.861898,41.668309],[94.750413,41.538114],[94.534219,41.50586],[94.184365,41.268392],[94.01067,41.114857],[93.809874,40.879583],[93.820961,40.793574],[93.760599,40.664804],[93.506216,40.648464],[92.928465,40.572609],[92.906907,40.310773],[92.796654,40.15364],[92.745531,39.868137],[92.639589,39.514543],[92.52564,39.368528],[92.339011,39.236575],[92.366728,39.059322],[92.41046,39.038412],[92.38459,39.000758],[92.263866,39.002153],[92.173323,38.960758],[91.966368,38.930976],[91.87952,38.884417],[91.446515,38.813588],[91.307928,38.751089],[90.831191,38.667982],[90.619308,38.664245],[90.610685,38.596003],[90.463476,38.556711],[90.424671,38.492114],[90.315034,38.501948],[90.111774,38.477595],[90.137644,38.340692],[90.280542,38.238315],[90.352607,38.233615],[90.361846,38.300322],[90.530613,38.32004],[90.516446,38.207291],[90.519526,37.73089],[90.776373,37.6504],[90.882314,37.575513],[90.863836,37.534246],[90.958075,37.477763],[91.057241,37.483936],[91.099741,37.447843],[91.134849,37.32614],[91.192132,37.27807],[91.1909,37.205669],[91.280211,37.163721],[91.303617,37.01242],[91.181045,37.025318],[90.983944,36.913458],[90.853981,36.915371],[90.735105,36.827778],[90.720938,36.708912],[90.7388,36.58746],[91.035683,36.529788],[91.05293,36.432608],[91.026444,36.323738],[91.07264,36.299149],[91.124994,36.115693],[91.09235,36.088621],[90.979017,36.106992],[90.922966,36.029126],[90.841046,36.01848],[90.776373,36.086203],[90.66304,36.134058],[90.526917,36.148553],[90.430215,36.133091],[90.234962,36.161597],[90.128405,36.208923],[90.145651,36.238849],[90.028006,36.25815],[89.999057,36.169809],[89.937463,36.130675],[89.941159,36.067343],[89.711414,36.092972],[89.490291,36.150969],[89.375727,36.228231],[89.287647,36.235954],[89.232213,36.295774],[89.127503,36.249465],[89.10225,36.281305],[88.964279,36.318917],[88.926091,36.364221],[88.802903,36.337717],[88.783809,36.291916],[88.623665,36.389271],[88.573158,36.461005],[88.470912,36.482175],[88.365586,36.457636],[88.241782,36.468704],[88.134609,36.427313],[87.983088,36.437903],[87.949211,36.401312],[87.731785,36.384936],[87.570409,36.342536],[87.470626,36.354102],[87.460155,36.409498],[87.361605,36.419128],[87.306787,36.363739],[87.193454,36.349283],[87.149106,36.29722],[86.996353,36.308793],[86.887332,36.262492],[86.862078,36.300114],[86.746282,36.291916],[86.701318,36.245122],[86.515305,36.205543],[86.392733,36.206992],[86.187625,36.131158],[86.199944,36.032513],[86.132806,35.979271],[86.060125,35.846008],[85.949256,35.779049],[85.811286,35.779049],[85.65299,35.731465],[85.613569,35.652257],[85.372121,35.701346],[85.271107,35.788757],[85.159006,35.745549],[85.053065,35.751862],[84.729081,35.613353],[84.448828,35.55058],[84.45314,35.473141],[84.335495,35.414647],[84.1618,35.359039],[84.095895,35.362943],[84.005968,35.422449],[83.885244,35.367334],[83.677672,35.360991],[83.622238,35.335614],[83.451006,35.38197],[83.242203,35.420011],[83.127022,35.398554],[83.067892,35.462908],[82.998907,35.484348],[82.960719,35.671702],[82.788872,35.684824],[82.731589,35.63767],[82.628727,35.692114],[82.424852,35.713006],[82.336156,35.651284],[82.328149,35.559342],[82.033114,35.450236],[82.05344,35.350255],[81.927789,35.271158],[81.736847,35.262365],[81.675253,35.233536],[81.513261,35.235002],[81.494167,35.292161],[81.362356,35.354647],[81.219458,35.319016],[81.09935,35.407333],[81.031597,35.380506],[81.026053,35.312181],[80.844351,35.345375],[80.689135,35.33903],[80.65649,35.394165],[80.516672,35.392214],[80.412578,35.433663],[80.321419,35.386848],[80.268448,35.294114],[80.362687,35.209096],[80.257977,35.20323],[80.23026,35.147476],[80.118159,35.066222],[80.031311,35.034384],[80.034391,34.902],[79.947544,34.820993],[79.906892,34.683837],[79.801566,34.478909],[79.675914,34.451284],[79.504683,34.454737],[79.229358,34.413778],[79.161605,34.441416],[79.0107,34.399956],[79.039649,34.33427]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":710000,\"name\":\"台湾\",\"center\":[121.509062,25.044332],\"centroid\":[120.971486,23.749452],\"childrenNum\":0,\"level\":\"province\",\"subFeatureIndex\":31,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[120.443706,22.441042],[120.297112,22.531154],[120.20041,22.721137],[120.131425,23.002313],[120.018708,23.073342],[120.108019,23.34115],[120.12157,23.504758],[120.095084,23.587583],[120.102476,23.70104],[120.175156,23.807282],[120.245989,23.84067],[120.278018,23.927657],[120.68885,24.600764],[120.82374,24.68832],[120.89211,24.767665],[120.914899,24.864876],[121.024537,25.040639],[121.209318,25.127342],[121.371926,25.15984],[121.444607,25.27081],[121.53515,25.307597],[121.62323,25.294614],[121.745186,25.162007],[121.917033,25.137634],[121.947214,25.031965],[122.012503,25.001602],[121.844968,24.836101],[121.841272,24.733977],[121.892395,24.618171],[121.88562,24.529477],[121.809243,24.338818],[121.643556,24.097633],[121.65957,24.006934],[121.621382,23.920547],[121.522832,23.538772],[121.479716,23.32247],[121.415042,23.196039],[121.430441,23.137181],[121.370695,23.084351],[121.324499,22.945574],[121.170514,22.723345],[121.03316,22.650477],[120.914899,22.302718],[120.907508,22.033426],[120.86624,21.98461],[120.873016,21.897477],[120.701784,21.926898],[120.651277,22.033426],[120.640806,22.241259],[120.569973,22.361938],[120.443706,22.441042]]],[[[119.646064,23.55084],[119.609108,23.503661],[119.566608,23.584842],[119.678093,23.600195],[119.646064,23.55084]]],[[[123.491374,25.747089],[123.496917,25.739005],[123.495069,25.737927],[123.494453,25.737927],[123.492606,25.737388],[123.480903,25.737927],[123.480287,25.737388],[123.46612,25.732537],[123.465504,25.732537],[123.491374,25.747089]]],[[[123.549272,25.724991],[123.549272,25.724991],[123.546192,25.729303],[123.546192,25.728764],[123.549272,25.724991]]],[[[123.690322,25.923187],[123.691554,25.921572],[123.690938,25.917267],[123.690938,25.916729],[123.690322,25.923187]]],[[[123.559743,25.718523],[123.559743,25.717984],[123.548656,25.720679],[123.549272,25.720679],[123.559743,25.718523]]],[[[121.510513,22.087215],[121.573339,22.086106],[121.594281,21.995152],[121.510513,22.087215]]],[[[123.559743,25.718523],[123.560359,25.718523],[123.560359,25.717984],[123.559743,25.717984],[123.559743,25.718523]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":810000,\"name\":\"香港\",\"center\":[114.173355,22.320048],\"centroid\":[114.134394,22.377371],\"childrenNum\":18,\"level\":\"province\",\"subFeatureIndex\":32,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[114.031778,22.504071],[114.044096,22.502413],[114.045944,22.502413],[114.185762,22.551601],[114.185762,22.551601],[114.232574,22.539997],[114.232574,22.528944],[114.263371,22.541654],[114.263987,22.541654],[114.271994,22.535023],[114.28924,22.522864],[114.355762,22.434958],[114.406269,22.433299],[114.406269,22.432746],[114.356994,22.340356],[114.323733,22.384622],[114.315726,22.299951],[114.315726,22.298843],[114.248588,22.274484],[114.265835,22.200825],[114.195002,22.232951],[114.120473,22.272269],[114.121089,22.320985],[114.034857,22.301058],[114.026234,22.229628],[113.848844,22.191961],[113.898119,22.308808],[114.015763,22.332054],[113.920293,22.368024],[113.918445,22.418366],[114.031778,22.504071]]],[[[114.350834,22.260087],[114.355146,22.268393],[114.355762,22.268393],[114.350834,22.260087]]],[[[114.320037,22.381303],[114.320037,22.381856],[114.319421,22.382409],[114.323733,22.384622],[114.320037,22.381303]]],[[[114.372392,22.322645],[114.372392,22.323752],[114.37424,22.323199],[114.372392,22.322645]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":820000,\"name\":\"澳门\",\"center\":[113.54909,22.198951],\"centroid\":[113.56642,22.159262],\"childrenNum\":8,\"level\":\"province\",\"subFeatureIndex\":33,\"acroutes\":[100000],\"parent\":{\"adcode\":100000}},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[113.558736,22.213012],[113.6037,22.132116],[113.553809,22.107727],[113.558736,22.213012]]]]}},{\"type\":\"Feature\",\"properties\":{\"adcode\":100000,\"name\":\"\",\"adchar\":\"JD\"},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[[[122.51865306,23.46078502],[122.51742454,23.45790762],[122.51536697,23.45555069],[122.51268178,23.45394494],[122.50963181,23.45324755],[122.5065156,23.45352678],[122.5036382,23.45475531],[122.50128127,23.45681287],[122.49967552,23.45949807],[122.49897813,23.46254804],[122.49925737,23.46566424],[122.77921829,24.57855302],[122.78044682,24.58143041],[122.78250438,24.58378734],[122.78518957,24.5853931],[122.78823955,24.58609049],[122.79135575,24.58581125],[122.79423315,24.58458272],[122.79659008,24.58252516],[122.79819583,24.57983997],[122.79889322,24.57678999],[122.79861399,24.57367379],[122.51865306,23.46078502]]],[[[121.17202617,20.8054593],[121.16966862,20.80340244],[121.16679085,20.80217478],[121.16367457,20.80189649],[121.1606248,20.8025948],[121.1579401,20.80420136],[121.15588324,20.80655891],[121.15465558,20.80943668],[121.15437729,20.81255297],[121.1550756,20.81560273],[121.15668216,20.81828744],[121.89404403,21.70026162],[121.89640158,21.70231847],[121.89927934,21.70354613],[121.90239563,21.70382443],[121.9054454,21.70312611],[121.9081301,21.70151955],[121.91018696,21.699162],[121.91141462,21.69628423],[121.91169291,21.69316794],[121.9109946,21.69011818],[121.90938804,21.68743347],[121.17202617,20.8054593]]],[[[119.47366172,18.00707291],[119.47175735,18.00459056],[119.46917909,18.0028182],[119.46617933,18.0019293],[119.4630517,18.00201089],[119.46010237,18.00305497],[119.45762002,18.00495935],[119.45584765,18.00753761],[119.45495876,18.01053737],[119.45504035,18.01366499],[119.45608443,18.01661433],[120.00812005,19.0335793],[120.01002443,19.03606165],[120.01260269,19.03783401],[120.01560245,19.03872291],[120.01873007,19.03864132],[120.02167941,19.03759723],[120.02416175,19.03569286],[120.02593412,19.0331146],[120.02682302,19.03011484],[120.02674143,19.02698721],[120.02569734,19.02403788],[119.47366172,18.00707291]]],[[[119.0726757,15.04098494],[119.0726746,15.04083704],[119.07218171,15.00751424],[119.07164663,15.00443165],[119.07018516,15.00166528],[119.06794036,14.99948592],[119.06513198,14.99810691],[119.06203491,14.99766324],[119.05895232,14.99819832],[119.05618595,14.99965979],[119.05400659,15.00190458],[119.05262758,15.00471297],[119.0521839,15.00781004],[119.0526757,15.04105889],[119.0526757,16.04388528],[119.05316513,16.04697545],[119.05458553,16.04976313],[119.05679784,16.05197545],[119.05958553,16.05339584],[119.0626757,16.05388528],[119.06576587,16.05339584],[119.06855355,16.05197545],[119.07076587,16.04976313],[119.07218626,16.04697545],[119.0726757,16.04388528],[119.0726757,15.04098494]]],[[[118.68646749,11.18959191],[118.85557939,11.6136711],[118.9698053,11.99151854],[118.97116801,11.99433487],[118.97333431,11.99659227],[118.97609216,11.99806975],[118.9791716,11.99862269],[118.98227119,11.99819697],[118.98508753,11.99683427],[118.98734492,11.99466796],[118.9888224,11.99191011],[118.98937534,11.98883067],[118.98894963,11.98573108],[118.87459939,11.60747236],[118.87431591,11.606662],[118.70476212,11.18147468],[118.70409227,11.18010771],[118.54242469,10.9053354],[118.54043581,10.90292022],[118.53779795,10.90123786],[118.53476931,10.90045298],[118.53164636,10.90064241],[118.5287348,10.90178762],[118.52631962,10.9037765],[118.52463726,10.90641436],[118.52385237,10.909443],[118.52404181,10.91256595],[118.52518702,10.91547751],[118.68646749,11.18959191]]],[[[115.54466883,7.14672265],[115.54229721,7.14468204],[115.53941108,7.14347417],[115.53629295,7.14321728],[115.53324806,7.14393652],[115.53057445,7.14556148],[115.52853383,7.1479331],[115.52732596,7.15081924],[115.52706908,7.15393736],[115.52778832,7.15698226],[115.52941328,7.15965587],[116.23523025,7.99221221],[116.23760187,7.99425282],[116.240488,7.99546069],[116.24360613,7.99571758],[116.24665102,7.99499834],[116.24932463,7.99337338],[116.25136525,7.99100176],[116.25257312,7.98811563],[116.25283001,7.9849975],[116.25211077,7.98195261],[116.2504858,7.979279],[115.54466883,7.14672265]]],[[[112.30705249,3.53487257],[112.51501594,3.59753306],[112.84361424,3.7506962],[112.84662187,3.75155809],[112.84974864,3.7514484],[112.85268847,3.75037785],[112.8551536,3.74845124],[112.85690272,3.74585715],[112.85776462,3.74284952],[112.85765492,3.73972276],[112.85658437,3.73678292],[112.85465776,3.7343178],[112.85206367,3.73256867],[112.52281386,3.57910186],[112.52147408,3.5785908],[112.31248917,3.51562254],[112.31181658,3.51544515],[111.79132585,3.39736822],[111.78820398,3.39716187],[111.78517113,3.39793033],[111.78252419,3.39959839],[111.78052226,3.40200275],[111.77936129,3.40490807],[111.77915495,3.40802995],[111.77992341,3.41106279],[111.78159146,3.41370973],[111.78399583,3.41571167],[111.78690114,3.41687263],[112.30705249,3.53487257]]],[[[108.26055972,6.08912451],[108.26004031,6.09098419],[108.23638164,6.22427602],[108.23630689,6.22476797],[108.19687578,6.53630242],[108.19679674,6.53760583],[108.1987683,6.95072469],[108.19897125,6.95268198],[108.22460147,7.07791743],[108.22570055,7.08084671],[108.22765103,7.083293],[108.230262,7.08501682],[108.23327786,7.08584944],[108.23640341,7.08570936],[108.2393327,7.08461028],[108.24177899,7.0826598],[108.24350281,7.08004883],[108.24433543,7.07703297],[108.24419535,7.07390742],[108.21876335,6.94964057],[108.21679964,6.53816468],[108.25611734,6.22752625],[108.279563,6.09543449],[108.30878645,6.01987736],[108.30944469,6.0168187],[108.30912553,6.01370633],[108.30786022,6.01084492],[108.30577262,6.00851455],[108.30306706,6.00694335],[108.3000084,6.00628511],[108.29689603,6.00660426],[108.29403462,6.00786957],[108.29170425,6.00995718],[108.29013305,6.01266273],[108.26055972,6.08912451]]],[[[110.12822847,11.36894451],[110.18898148,11.48996382],[110.23982347,11.61066468],[110.28485499,11.78705054],[110.3083549,11.94803461],[110.3142445,12.14195265],[110.312278,12.23998238],[110.31270536,12.24308175],[110.31406956,12.24589736],[110.31623706,12.2481536],[110.3189957,12.24962962],[110.32207543,12.25018094],[110.32517479,12.24975358],[110.3279904,12.24838938],[110.33024665,12.24622187],[110.33172267,12.24346324],[110.33227398,12.24038351],[110.33424553,12.14210167],[110.33424294,12.14159753],[110.32832827,11.94685414],[110.32822801,11.94571326],[110.30456934,11.78364161],[110.30436343,11.7826124],[110.25901765,11.60499559],[110.25854422,11.60358735],[110.20728377,11.48189306],[110.20700505,11.48128846],[110.14588682,11.35954163],[110.14541497,11.35870461],[110.07246741,11.24270688],[110.07040803,11.24035153],[110.0677216,11.23874785],[110.06467109,11.23805281],[110.0615551,11.23833444],[110.05867865,11.23956519],[110.05632331,11.24162456],[110.05471962,11.24431099],[110.05402458,11.2473615],[110.05430621,11.25047749],[110.05553696,11.25335394],[110.12822847,11.36894451]]],[[[109.82951587,15.22896754],[109.77065019,15.44468789],[109.67264555,15.66561455],[109.57455994,15.82609887],[109.51574449,15.91095759],[109.29314007,16.19491896],[109.29161878,16.19765288],[109.29101677,16.20072311],[109.29139298,16.2038291],[109.29271057,16.20666681],[109.29484059,16.20895848],[109.29757451,16.21047978],[109.30064474,16.21108179],[109.30375073,16.21070558],[109.30658844,16.20938798],[109.30888011,16.20725797],[109.53166592,15.92306523],[109.53201478,15.92259221],[109.59116145,15.8372556],[109.59147511,15.83677407],[109.6900529,15.67548445],[109.69066131,15.67432448],[109.7892391,15.45210582],[109.78974541,15.45068337],[109.84889209,15.23393326],[109.84903675,15.23333003],[109.8648092,15.15722425],[109.86495704,15.15409906],[109.86413191,15.15108113],[109.86241457,15.1484659],[109.85997314,15.14650935],[109.85704658,15.145403],[109.85392139,15.14525516],[109.85090347,15.14608029],[109.84828823,15.14779763],[109.84633168,15.15023907],[109.84522534,15.15316562],[109.82951587,15.22896754]]]]}}]}");

/***/ }),

/***/ 3:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
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
Watcher.prototype.cleanupDeps = function cleanupDeps () {
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
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' &&
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"qiun-data-charts","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"qiun-data-charts","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"qiun-data-charts","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"qiun-data-charts","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }

  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 4:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 44:
/*!***************************************************************************************************************************************************************!*\
  !*** D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/qiun-data-charts（uni-modules）/uni_modules/qiun-data-charts/js_sdk/u-charts/config-ucharts.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * uCharts®
                                                                                                      * 高性能跨平台图表库，支持H5、APP、小程序（微信/支付宝/百度/头条/QQ/360）、Vue、Taro等支持canvas的框架平台
                                                                                                      * Copyright (c) 2021 QIUN®秋云 https://www.ucharts.cn All rights reserved.
                                                                                                      * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
                                                                                                      * 复制使用请保留本段注释，感谢支持开源！
                                                                                                      * 
                                                                                                      * uCharts®官方网站
                                                                                                      * https://www.uCharts.cn
                                                                                                      * 
                                                                                                      * 开源地址:
                                                                                                      * https://gitee.com/uCharts/uCharts
                                                                                                      * 
                                                                                                      * uni-app插件市场地址：
                                                                                                      * http://ext.dcloud.net.cn/plugin?id=271
                                                                                                      * 
                                                                                                      */

// 主题颜色配置：如每个图表类型需要不同主题，请在对应图表类型上更改color属性
var color = ['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'];

//事件转换函数，主要用作格式化x轴为时间轴，根据需求自行修改
var formatDateTime = function formatDateTime(timeStamp, returnType) {
  var date = new Date();
  date.setTime(timeStamp * 1000);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate();
  d = d < 10 ? '0' + d : d;
  var h = date.getHours();
  h = h < 10 ? '0' + h : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  if (returnType == 'full') {return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;}
  if (returnType == 'y-m-d') {return y + '-' + m + '-' + d;}
  if (returnType == 'h:m') {return h + ':' + minute;}
  if (returnType == 'h:m:s') {return h + ':' + minute + ':' + second;}
  return [y, m, d, h, minute, second];
};

var cfu = {
  //demotype为自定义图表类型，一般不需要自定义图表类型，只需要改根节点上对应的类型即可
  "type": ["pie", "ring", "rose", "word", "funnel", "map", "arcbar", "line", "column", "bar", "area", "radar", "gauge", "candle", "mix", "tline", "tarea", "scatter", "bubble", "demotype"],
  "range": ["饼状图", "圆环图", "玫瑰图", "词云图", "漏斗图", "地图", "圆弧进度条", "折线图", "柱状图", "条状图", "区域图", "雷达图", "仪表盘", "K线图", "混合图", "时间轴折线", "时间轴区域", "散点图", "气泡图", "自定义类型"],
  //增加自定义图表类型，如果需要categories，请在这里加入您的图表类型，例如最后的"demotype"
  //自定义类型时需要注意"tline","tarea","scatter","bubble"等时间轴（矢量x轴）类图表，没有categories，不需要加入categories
  "categories": ["line", "column", "bar", "area", "radar", "gauge", "candle", "mix", "demotype"],
  //instance为实例变量承载属性，不要删除
  "instance": {},
  //option为opts及eopts承载属性，不要删除
  "option": {},
  //下面是自定义format配置，因除H5端外的其他端无法通过props传递函数，只能通过此属性对应下标的方式来替换
  "formatter": {
    "yAxisDemo1": function yAxisDemo1(val) {return val + '元';},
    "yAxisDemo2": function yAxisDemo2(val) {return val.toFixed(2);},
    "xAxisDemo1": function xAxisDemo1(val) {return val + '年';},
    "xAxisDemo2": function xAxisDemo2(val) {return formatDateTime(val, 'h:m');},
    "seriesDemo1": function seriesDemo1(val) {return val + '元';},
    "tooltipDemo1": function tooltipDemo1(item, category, index, opts) {
      if (index == 0) {
        return '随便用' + item.data + '年';
      } else {
        return '其他我没改' + item.data + '天';
      }
    },
    "pieDemo": function pieDemo(val, index, series) {
      if (index !== undefined) {
        return series[index].name + '：' + series[index].data + '元';
      }
    } },

  //这里演示了自定义您的图表类型的option，可以随意命名，之后在组件上 type="demotype" 后，组件会调用这个花括号里的option，如果组件上还存在opts参数，会将demotype与opts中option合并后渲染图表。
  "demotype": {
    //我这里把曲线图当做了自定义图表类型，您可以根据需要随意指定类型或配置
    "type": "line",
    "color": color,
    "padding": [15, 10, 0, 15],
    "xAxis": {
      "disableGrid": true },

    "yAxis": {
      "gridType": "dash",
      "dashLength": 2 },

    "legend": {},

    "extra": {
      "line": {
        "type": "curve",
        "width": 2 } } },



  //下面是自定义配置，请添加项目所需的通用配置
  "pie": {
    "type": "pie",
    "color": color,
    "padding": [5, 5, 5, 5],
    "extra": {
      "pie": {
        "activeOpacity": 0.5,
        "activeRadius": 10,
        "offsetAngle": 0,
        "labelWidth": 15,
        "border": true,
        "borderWidth": 3,
        "borderColor": "#FFFFFF" } } },



  "ring": {
    "type": "ring",
    "color": color,
    "padding": [5, 5, 5, 5],
    "rotate": false,
    "dataLabel": true,
    "legend": {
      "show": true,
      "position": "right",
      "lineHeight": 25 },

    "title": {
      "name": "收益率",
      "fontSize": 15,
      "color": "#666666" },

    "subtitle": {
      "name": "70%",
      "fontSize": 25,
      "color": "#7cb5ec" },

    "extra": {
      "ring": {
        "ringWidth": 30,
        "activeOpacity": 0.5,
        "activeRadius": 10,
        "offsetAngle": 0,
        "labelWidth": 15,
        "border": true,
        "borderWidth": 3,
        "borderColor": "#FFFFFF" } } },



  "rose": {
    "type": "rose",
    "color": color,
    "padding": [5, 5, 5, 5],
    "legend": {
      "show": true,
      "position": "left",
      "lineHeight": 25 },

    "extra": {
      "rose": {
        "type": "area",
        "minRadius": 50,
        "activeOpacity": 0.5,
        "activeRadius": 10,
        "offsetAngle": 0,
        "labelWidth": 15,
        "border": false,
        "borderWidth": 2,
        "borderColor": "#FFFFFF" } } },



  "word": {
    "type": "word",
    "color": color,
    "extra": {
      "word": {
        "type": "normal",
        "autoColors": false } } },



  "funnel": {
    "type": "funnel",
    "color": color,
    "padding": [15, 15, 0, 15],
    "extra": {
      "funnel": {
        "activeOpacity": 0.3,
        "activeWidth": 10,
        "border": true,
        "borderWidth": 2,
        "borderColor": "#FFFFFF",
        "fillOpacity": 1,
        "labelAlign": "right" } } },



  "map": {
    "type": "map",
    "color": color,
    "padding": [0, 0, 0, 0],
    "dataLabel": true,
    "extra": {
      "map": {
        "border": true,
        "borderWidth": 1,
        "borderColor": "#666666",
        "fillOpacity": 0.6,
        "activeBorderColor": "#F04864",
        "activeFillColor": "#FACC14",
        "activeFillOpacity": 1 } } },



  "arcbar": {
    "type": "arcbar",
    "color": color,
    "title": {
      "name": "百分比",
      "fontSize": 25,
      "color": "#00FF00" },

    "subtitle": {
      "name": "默认标题",
      "fontSize": 15,
      "color": "#666666" },

    "extra": {
      "arcbar": {
        "type": "default",
        "width": 12,
        "backgroundColor": "#E9E9E9",
        "startAngle": 0.75,
        "endAngle": 0.25,
        "gap": 2 } } },



  "line": {
    "type": "line",
    "color": color,
    "padding": [15, 10, 0, 15],
    "xAxis": {
      "disableGrid": true },

    "yAxis": {
      "gridType": "dash",
      "dashLength": 2 },

    "legend": {},

    "extra": {
      "line": {
        "type": "straight",
        "width": 2 } } },



  "tline": {
    "type": "line",
    "color": color,
    "padding": [15, 10, 0, 15],
    "xAxis": {
      "disableGrid": false,
      "boundaryGap": "justify" },

    "yAxis": {
      "gridType": "dash",
      "dashLength": 2,
      "data": [
      {
        "min": 0,
        "max": 80 }] },



    "legend": {},

    "extra": {
      "line": {
        "type": "curve",
        "width": 2 } } },



  "tarea": {
    "type": "area",
    "color": color,
    "padding": [15, 10, 0, 15],
    "xAxis": {
      "disableGrid": true,
      "boundaryGap": "justify" },

    "yAxis": {
      "gridType": "dash",
      "dashLength": 2,
      "data": [
      {
        "min": 0,
        "max": 80 }] },



    "legend": {},

    "extra": {
      "area": {
        "type": "curve",
        "opacity": 0.2,
        "addLine": true,
        "width": 2,
        "gradient": true } } },



  "column": {
    "type": "column",
    "color": color,
    "padding": [15, 15, 0, 5],
    "xAxis": {
      "disableGrid": true },

    "yAxis": {
      "data": [{ "min": 0 }] },

    "legend": {},

    "extra": {
      "column": {
        "type": "group",
        "width": 30,
        "activeBgColor": "#000000",
        "activeBgOpacity": 0.08 } } },



  "bar": {
    "type": "bar",
    "color": color,
    "padding": [15, 30, 0, 5],
    "xAxis": {
      "boundaryGap": "justify",
      "disableGrid": false,
      "min": 0,
      "axisLine": false },

    "yAxis": {},

    "legend": {},

    "extra": {
      "bar": {
        "type": "group",
        "width": 30,
        "meterBorde": 1,
        "meterFillColor": "#FFFFFF",
        "activeBgColor": "#000000",
        "activeBgOpacity": 0.08 } } },



  "area": {
    "type": "area",
    "color": color,
    "padding": [15, 15, 0, 15],
    "xAxis": {
      "disableGrid": true },

    "yAxis": {
      "gridType": "dash",
      "dashLength": 2 },

    "legend": {},

    "extra": {
      "area": {
        "type": "straight",
        "opacity": 0.2,
        "addLine": true,
        "width": 2,
        "gradient": false } } },



  "radar": {
    "type": "radar",
    "color": color,
    "padding": [5, 5, 5, 5],
    "dataLabel": false,
    "legend": {
      "show": true,
      "position": "right",
      "lineHeight": 25 },

    "extra": {
      "radar": {
        "gridType": "radar",
        "gridColor": "#CCCCCC",
        "gridCount": 3,
        "opacity": 0.2,
        "max": 200 } } },



  "gauge": {
    "type": "gauge",
    "color": color,
    "title": {
      "name": "66Km/H",
      "fontSize": 25,
      "color": "#2fc25b",
      "offsetY": 50 },

    "subtitle": {
      "name": "实时速度",
      "fontSize": 15,
      "color": "#1890ff",
      "offsetY": -50 },

    "extra": {
      "gauge": {
        "type": "default",
        "width": 30,
        "labelColor": "#666666",
        "startAngle": 0.75,
        "endAngle": 0.25,
        "startNumber": 0,
        "endNumber": 100,
        "labelFormat": "",
        "splitLine": {
          "fixRadius": 0,
          "splitNumber": 10,
          "width": 30,
          "color": "#FFFFFF",
          "childNumber": 5,
          "childWidth": 12 },

        "pointer": {
          "width": 24,
          "color": "auto" } } } },




  "candle": {
    "type": "candle",
    "color": color,
    "padding": [15, 15, 0, 15],
    "enableScroll": true,
    "enableMarkLine": true,
    "dataLabel": false,
    "xAxis": {
      "labelCount": 4,
      "itemCount": 40,
      "disableGrid": true,
      "gridColor": "#CCCCCC",
      "gridType": "solid",
      "dashLength": 4,
      "scrollShow": true,
      "scrollAlign": "left",
      "scrollColor": "#A6A6A6",
      "scrollBackgroundColor": "#EFEBEF" },

    "yAxis": {},

    "legend": {},

    "extra": {
      "candle": {
        "color": {
          "upLine": "#f04864",
          "upFill": "#f04864",
          "downLine": "#2fc25b",
          "downFill": "#2fc25b" },

        "average": {
          "show": true,
          "name": ["MA5", "MA10", "MA30"],
          "day": [5, 10, 20],
          "color": ["#1890ff", "#2fc25b", "#facc14"] } },


      "markLine": {
        "type": "dash",
        "dashLength": 5,
        "data": [
        {
          "value": 2150,
          "lineColor": "#f04864",
          "showLabel": true },

        {
          "value": 2350,
          "lineColor": "#f04864",
          "showLabel": true }] } } },





  "mix": {
    "type": "mix",
    "color": color,
    "padding": [15, 15, 0, 15],
    "xAxis": {
      "disableGrid": true },

    "yAxis": {
      "disabled": false,
      "disableGrid": false,
      "splitNumber": 5,
      "gridType": "dash",
      "dashLength": 4,
      "gridColor": "#CCCCCC",
      "padding": 10,
      "showTitle": true,
      "data": [] },

    "legend": {},

    "extra": {
      "mix": {
        "column": {
          "width": 20 } } } },




  "scatter": {
    "type": "scatter",
    "color": color,
    "padding": [15, 15, 0, 15],
    "dataLabel": false,
    "xAxis": {
      "disableGrid": false,
      "gridType": "dash",
      "splitNumber": 5,
      "boundaryGap": "justify",
      "min": 0 },

    "yAxis": {
      "disableGrid": false,
      "gridType": "dash" },

    "legend": {},

    "extra": {
      "scatter": {} } },



  "bubble": {
    "type": "bubble",
    "color": color,
    "padding": [15, 15, 0, 15],
    "xAxis": {
      "disableGrid": false,
      "gridType": "dash",
      "splitNumber": 5,
      "boundaryGap": "justify",
      "min": 0,
      "max": 250 },

    "yAxis": {
      "disableGrid": false,
      "gridType": "dash",
      "data": [{
        "min": 0,
        "max": 150 }] },


    "legend": {},

    "extra": {
      "bubble": {
        "border": 2,
        "opacity": 0.5 } } } };var _default =





cfu;exports.default = _default;

/***/ }),

/***/ 5:
/*!***********************************************************************************************************!*\
  !*** D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/qiun-data-charts（uni-modules）/pages.json ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 93:
/*!*********************************************************************************************************************************************************!*\
  !*** D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/qiun-data-charts（uni-modules）/uni_modules/qiun-data-charts/js_sdk/u-charts/u-charts.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * uCharts®
 * 高性能跨平台图表库，支持H5、APP、小程序（微信/支付宝/百度/头条/QQ/360）、Vue、Taro等支持canvas的框架平台
 * Copyright (c) 2021 QIUN®秋云 https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * 复制使用请保留本段注释，感谢支持开源！
 * 
 * uCharts®官方网站
 * https://www.uCharts.cn
 * 
 * 开源地址:
 * https://gitee.com/uCharts/uCharts
 * 
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 * 
 */

Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

var config = {
  version: 'v2.3.6-20211201',
  yAxisWidth: 15,
  yAxisSplit: 5,
  xAxisHeight: 22,
  xAxisLineHeight: 22,
  legendHeight: 15,
  yAxisTitleWidth: 15,
  padding: [10, 10, 10, 10],
  pixelRatio: 1,
  rotate: false,
  columePadding: 3,
  fontSize: 13,
  fontColor: '#666666',
  dataPointShape: ['circle', 'circle', 'circle', 'circle'],
  color: ['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
  linearColor: ['#0EE2F8', '#2BDCA8', '#FA7D8D', '#EB88E2', '#2AE3A0', '#0EE2F8', '#EB88E2', '#6773E3', '#F78A85'],
  pieChartLinePadding: 15,
  pieChartTextPadding: 5,
  xAxisTextPadding: 3,
  titleColor: '#333333',
  titleFontSize: 20,
  subtitleColor: '#999999',
  subtitleFontSize: 15,
  toolTipPadding: 3,
  toolTipBackground: '#000000',
  toolTipOpacity: 0.7,
  toolTipLineHeight: 20,
  radarLabelTextMargin: 13,
  gaugeLabelTextMargin: 13 };


var assign = function assign(target) {for (var _len2 = arguments.length, varArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {varArgs[_key2 - 1] = arguments[_key2];}
  if (target == null) {
    throw new TypeError('[uCharts] Cannot convert undefined or null to object');
  }
  if (!varArgs || varArgs.length <= 0) {
    return target;
  }
  // 深度合并对象
  function deepAssign(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj1[key] && obj1[key].toString() === "[object Object]" ?
      deepAssign(obj1[key], obj2[key]) : obj1[key] = obj2[key];
    }
    return obj1;
  }
  varArgs.forEach(function (val) {
    target = deepAssign(target, val);
  });
  return target;
};

var util = {
  toFixed: function toFixed(num, limit) {
    limit = limit || 2;
    if (this.isFloat(num)) {
      num = num.toFixed(limit);
    }
    return num;
  },
  isFloat: function isFloat(num) {
    return num % 1 !== 0;
  },
  approximatelyEqual: function approximatelyEqual(num1, num2) {
    return Math.abs(num1 - num2) < 1e-10;
  },
  isSameSign: function isSameSign(num1, num2) {
    return Math.abs(num1) === num1 && Math.abs(num2) === num2 || Math.abs(num1) !== num1 && Math.abs(num2) !== num2;
  },
  isSameXCoordinateArea: function isSameXCoordinateArea(p1, p2) {
    return this.isSameSign(p1.x, p2.x);
  },
  isCollision: function isCollision(obj1, obj2) {
    obj1.end = {};
    obj1.end.x = obj1.start.x + obj1.width;
    obj1.end.y = obj1.start.y - obj1.height;
    obj2.end = {};
    obj2.end.x = obj2.start.x + obj2.width;
    obj2.end.y = obj2.start.y - obj2.height;
    var flag = obj2.start.x > obj1.end.x || obj2.end.x < obj1.start.x || obj2.end.y > obj1.start.y || obj2.start.y < obj1.end.y;
    return !flag;
  } };


//兼容H5点击事件
function getH5Offset(e) {
  e.mp = {
    changedTouches: [] };

  e.mp.changedTouches.push({
    x: e.offsetX,
    y: e.offsetY });

  return e;
}

// 经纬度转墨卡托
function lonlat2mercator(longitude, latitude) {
  var mercator = Array(2);
  var x = longitude * 20037508.34 / 180;
  var y = Math.log(Math.tan((90 + latitude) * Math.PI / 360)) / (Math.PI / 180);
  y = y * 20037508.34 / 180;
  mercator[0] = x;
  mercator[1] = y;
  return mercator;
}

// 墨卡托转经纬度
function mercator2lonlat(longitude, latitude) {
  var lonlat = Array(2);
  var x = longitude / 20037508.34 * 180;
  var y = latitude / 20037508.34 * 180;
  y = 180 / Math.PI * (2 * Math.atan(Math.exp(y * Math.PI / 180)) - Math.PI / 2);
  lonlat[0] = x;
  lonlat[1] = y;
  return lonlat;
}

// hex 转 rgba
function hexToRgb(hexValue, opc) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opc + ')';
}

function findRange(num, type, limit) {
  if (isNaN(num)) {
    throw new Error('[uCharts] series数据需为Number格式');
  }
  limit = limit || 10;
  type = type ? type : 'upper';
  var multiple = 1;
  while (limit < 1) {
    limit *= 10;
    multiple *= 10;
  }
  if (type === 'upper') {
    num = Math.ceil(num * multiple);
  } else {
    num = Math.floor(num * multiple);
  }
  while (num % limit !== 0) {
    if (type === 'upper') {
      num++;
    } else {
      num--;
    }
  }
  return num / multiple;
}

function calCandleMA(dayArr, nameArr, colorArr, kdata) {
  var seriesTemp = [];
  for (var k = 0; k < dayArr.length; k++) {
    var seriesItem = {
      data: [],
      name: nameArr[k],
      color: colorArr[k] };

    for (var i = 0, len = kdata.length; i < len; i++) {
      if (i < dayArr[k]) {
        seriesItem.data.push(null);
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayArr[k]; j++) {
        sum += kdata[i - j][1];
      }
      seriesItem.data.push(+(sum / dayArr[k]).toFixed(3));
    }
    seriesTemp.push(seriesItem);
  }
  return seriesTemp;
}

function calValidDistance(self, distance, chartData, config, opts) {
  var dataChartAreaWidth = opts.width - opts.area[1] - opts.area[3];
  var dataChartWidth = chartData.eachSpacing * (opts.chartData.xAxisData.xAxisPoints.length - 1);
  var validDistance = distance;
  if (distance >= 0) {
    validDistance = 0;
    self.uevent.trigger('scrollLeft');
    self.scrollOption.position = 'left';
    opts.xAxis.scrollPosition = 'left';
  } else if (Math.abs(distance) >= dataChartWidth - dataChartAreaWidth) {
    validDistance = dataChartAreaWidth - dataChartWidth;
    self.uevent.trigger('scrollRight');
    self.scrollOption.position = 'right';
    opts.xAxis.scrollPosition = 'right';
  } else {
    self.scrollOption.position = distance;
    opts.xAxis.scrollPosition = distance;
  }
  return validDistance;
}

function isInAngleRange(angle, startAngle, endAngle) {
  function adjust(angle) {
    while (angle < 0) {
      angle += 2 * Math.PI;
    }
    while (angle > 2 * Math.PI) {
      angle -= 2 * Math.PI;
    }
    return angle;
  }
  angle = adjust(angle);
  startAngle = adjust(startAngle);
  endAngle = adjust(endAngle);
  if (startAngle > endAngle) {
    endAngle += 2 * Math.PI;
    if (angle < startAngle) {
      angle += 2 * Math.PI;
    }
  }
  return angle >= startAngle && angle <= endAngle;
}

function calRotateTranslate(x, y, h) {
  var xv = x;
  var yv = h - y;
  var transX = xv + (h - yv - xv) / Math.sqrt(2);
  transX *= -1;
  var transY = (h - yv) * (Math.sqrt(2) - 1) - (h - yv - xv) / Math.sqrt(2);
  return {
    transX: transX,
    transY: transY };

}

function createCurveControlPoints(points, i) {
  function isNotMiddlePoint(points, i) {
    if (points[i - 1] && points[i + 1]) {
      return points[i].y >= Math.max(points[i - 1].y, points[i + 1].y) || points[i].y <= Math.min(points[i - 1].y,
      points[i + 1].y);
    } else {
      return false;
    }
  }
  function isNotMiddlePointX(points, i) {
    if (points[i - 1] && points[i + 1]) {
      return points[i].x >= Math.max(points[i - 1].x, points[i + 1].x) || points[i].x <= Math.min(points[i - 1].x,
      points[i + 1].x);
    } else {
      return false;
    }
  }
  var a = 0.2;
  var b = 0.2;
  var pAx = null;
  var pAy = null;
  var pBx = null;
  var pBy = null;
  if (i < 1) {
    pAx = points[0].x + (points[1].x - points[0].x) * a;
    pAy = points[0].y + (points[1].y - points[0].y) * a;
  } else {
    pAx = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
    pAy = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
  }

  if (i > points.length - 3) {
    var last = points.length - 1;
    pBx = points[last].x - (points[last].x - points[last - 1].x) * b;
    pBy = points[last].y - (points[last].y - points[last - 1].y) * b;
  } else {
    pBx = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
    pBy = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
  }
  if (isNotMiddlePoint(points, i + 1)) {
    pBy = points[i + 1].y;
  }
  if (isNotMiddlePoint(points, i)) {
    pAy = points[i].y;
  }
  if (isNotMiddlePointX(points, i + 1)) {
    pBx = points[i + 1].x;
  }
  if (isNotMiddlePointX(points, i)) {
    pAx = points[i].x;
  }
  if (pAy >= Math.max(points[i].y, points[i + 1].y) || pAy <= Math.min(points[i].y, points[i + 1].y)) {
    pAy = points[i].y;
  }
  if (pBy >= Math.max(points[i].y, points[i + 1].y) || pBy <= Math.min(points[i].y, points[i + 1].y)) {
    pBy = points[i + 1].y;
  }
  if (pAx >= Math.max(points[i].x, points[i + 1].x) || pAx <= Math.min(points[i].x, points[i + 1].x)) {
    pAx = points[i].x;
  }
  if (pBx >= Math.max(points[i].x, points[i + 1].x) || pBx <= Math.min(points[i].x, points[i + 1].x)) {
    pBx = points[i + 1].x;
  }
  return {
    ctrA: {
      x: pAx,
      y: pAy },

    ctrB: {
      x: pBx,
      y: pBy } };


}

function convertCoordinateOrigin(x, y, center) {
  return {
    x: center.x + x,
    y: center.y - y };

}

function avoidCollision(obj, target) {
  if (target) {
    // is collision test
    while (util.isCollision(obj, target)) {
      if (obj.start.x > 0) {
        obj.start.y--;
      } else if (obj.start.x < 0) {
        obj.start.y++;
      } else {
        if (obj.start.y > 0) {
          obj.start.y++;
        } else {
          obj.start.y--;
        }
      }
    }
  }
  return obj;
}

function fixPieSeries(series, opts, config) {
  var pieSeriesArr = [];
  if (series.length > 0 && series[0].data.constructor.toString().indexOf('Array') > -1) {
    opts._pieSeries_ = series;
    var oldseries = series[0].data;
    for (var i = 0; i < oldseries.length; i++) {
      oldseries[i].formatter = series[0].formatter;
      oldseries[i].data = oldseries[i].value;
      pieSeriesArr.push(oldseries[i]);
    }
    opts.series = pieSeriesArr;
  } else {
    pieSeriesArr = series;
  }
  return pieSeriesArr;
}

function fillSeries(series, opts, config) {
  var index = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    if (!item.color) {
      item.color = config.color[index];
      index = (index + 1) % config.color.length;
    }
    if (!item.linearIndex) {
      item.linearIndex = i;
    }
    if (!item.index) {
      item.index = 0;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (typeof item.show == "undefined") {
      item.show = true;
    }
    if (!item.type) {
      item.type = opts.type;
    }
    if (!item.pointShape) {
      item.pointShape = "circle";
    }
    if (!item.legendShape) {
      switch (item.type) {
        case 'line':
          item.legendShape = "line";
          break;
        case 'column':
          item.legendShape = "rect";
          break;
        case 'area':
          item.legendShape = "triangle";
          break;
        case 'bar':
          item.legendShape = "rect";
          break;
        default:
          item.legendShape = "circle";}

    }
  }
  return series;
}

function fillCustomColor(linearType, customColor, series, config) {
  var newcolor = customColor || [];
  if (linearType == 'custom' && newcolor.length == 0) {
    newcolor = config.linearColor;
  }
  if (linearType == 'custom' && newcolor.length < series.length) {
    var chazhi = series.length - newcolor.length;
    for (var i = 0; i < chazhi; i++) {
      newcolor.push(config.linearColor[(i + 1) % config.linearColor.length]);
    }
  }
  return newcolor;
}

function getDataRange(minData, maxData) {
  var limit = 0;
  var range = maxData - minData;
  if (range >= 10000) {
    limit = 1000;
  } else if (range >= 1000) {
    limit = 100;
  } else if (range >= 100) {
    limit = 10;
  } else if (range >= 10) {
    limit = 5;
  } else if (range >= 1) {
    limit = 1;
  } else if (range >= 0.1) {
    limit = 0.1;
  } else if (range >= 0.01) {
    limit = 0.01;
  } else if (range >= 0.001) {
    limit = 0.001;
  } else if (range >= 0.0001) {
    limit = 0.0001;
  } else if (range >= 0.00001) {
    limit = 0.00001;
  } else {
    limit = 0.000001;
  }
  return {
    minRange: findRange(minData, 'lower', limit),
    maxRange: findRange(maxData, 'upper', limit) };

}

function measureText(text, fontSize, context) {
  var width = 0;
  text = String(text);



  if (context !== false && context !== undefined && context.setFontSize && context.measureText) {
    context.setFontSize(fontSize);
    return context.measureText(text).width;
  } else {
    var text = text.split('');
    for (var i = 0; i < text.length; i++) {
      var item = text[i];
      if (/[a-zA-Z]/.test(item)) {
        width += 7;
      } else if (/[0-9]/.test(item)) {
        width += 5.5;
      } else if (/\./.test(item)) {
        width += 2.7;
      } else if (/-/.test(item)) {
        width += 3.25;
      } else if (/:/.test(item)) {
        width += 2.5;
      } else if (/[\u4e00-\u9fa5]/.test(item)) {
        width += 10;
      } else if (/\(|\)/.test(item)) {
        width += 3.73;
      } else if (/\s/.test(item)) {
        width += 2.5;
      } else if (/%/.test(item)) {
        width += 8;
      } else {
        width += 10;
      }
    }
    return width * fontSize / 10;
  }
}

function dataCombine(series) {
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data);
  }, []);
}

function dataCombineStack(series, len) {
  var sum = new Array(len);
  for (var j = 0; j < sum.length; j++) {
    sum[j] = 0;
  }
  for (var i = 0; i < series.length; i++) {
    for (var j = 0; j < sum.length; j++) {
      sum[j] += series[i].data[j];
    }
  }
  return series.reduce(function (a, b) {
    return (a.data ? a.data : a).concat(b.data).concat(sum);
  }, []);
}

function getTouches(touches, opts, e) {
  var x, y;
  if (touches.clientX) {
    if (opts.rotate) {
      y = opts.height - touches.clientX * opts.pix;
      x = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pix / 2 * (opts.pix - 1)) * opts.pix;
    } else {
      x = touches.clientX * opts.pix;
      y = (touches.pageY - e.currentTarget.offsetTop - opts.height / opts.pix / 2 * (opts.pix - 1)) * opts.pix;
    }
  } else {
    if (opts.rotate) {
      y = opts.height - touches.x * opts.pix;
      x = touches.y * opts.pix;
    } else {
      x = touches.x * opts.pix;
      y = touches.y * opts.pix;
    }
  }
  return {
    x: x,
    y: y };

}

function getSeriesDataItem(series, index, group) {
  var data = [];
  var newSeries = [];
  var indexIsArr = index.constructor.toString().indexOf('Array') > -1;
  if (indexIsArr) {
    var tempSeries = filterSeries(series);
    for (var i = 0; i < group.length; i++) {
      newSeries.push(tempSeries[group[i]]);
    }
  } else {
    newSeries = series;
  };
  for (var _i = 0; _i < newSeries.length; _i++) {
    var item = newSeries[_i];
    var tmpindex = -1;
    if (indexIsArr) {
      tmpindex = index[_i];
    } else {
      tmpindex = index;
    }
    if (item.data[tmpindex] !== null && typeof item.data[tmpindex] !== 'undefined' && item.show) {
      var seriesItem = {};
      seriesItem.color = item.color;
      seriesItem.type = item.type;
      seriesItem.style = item.style;
      seriesItem.pointShape = item.pointShape;
      seriesItem.disableLegend = item.disableLegend;
      seriesItem.name = item.name;
      seriesItem.show = item.show;
      seriesItem.data = item.formatter ? item.formatter(item.data[tmpindex]) : item.data[tmpindex];
      data.push(seriesItem);
    }
  }
  return data;
}

function getMaxTextListLength(list, fontSize, context) {
  var lengthList = list.map(function (item) {
    return measureText(item, fontSize, context);
  });
  return Math.max.apply(null, lengthList);
}

function getRadarCoordinateSeries(length) {
  var eachAngle = 2 * Math.PI / length;
  var CoordinateSeries = [];
  for (var i = 0; i < length; i++) {
    CoordinateSeries.push(eachAngle * i);
  }
  return CoordinateSeries.map(function (item) {
    return -1 * item + Math.PI / 2;
  });
}

function getToolTipData(seriesData, opts, index, group, categories) {
  var option = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var calPoints = opts.chartData.calPoints ? opts.chartData.calPoints : [];
  var points = {};
  if (group.length > 0) {
    var filterPoints = [];
    for (var i = 0; i < group.length; i++) {
      filterPoints.push(calPoints[group[i]]);
    }
    points = filterPoints[0][index[0]];
  } else {
    points = calPoints[0][index];
  };
  var textList = seriesData.map(function (item) {
    var titleText = null;
    if (opts.categories && opts.categories.length > 0) {
      titleText = categories[index];
    };
    return {
      text: option.formatter ? option.formatter(item, titleText, index, opts) : item.name + ': ' + item.data,
      color: item.color };

  });
  var offset = {
    x: Math.round(points.x),
    y: Math.round(points.y) };

  return {
    textList: textList,
    offset: offset };

}

function getMixToolTipData(seriesData, opts, index, categories) {
  var option = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var points = opts.chartData.xAxisPoints[index] + opts.chartData.eachSpacing / 2;
  var textList = seriesData.map(function (item) {
    return {
      text: option.formatter ? option.formatter(item, categories[index], index, opts) : item.name + ': ' + item.data,
      color: item.color,
      disableLegend: item.disableLegend ? true : false };

  });
  textList = textList.filter(function (item) {
    if (item.disableLegend !== true) {
      return item;
    }
  });
  var offset = {
    x: Math.round(points),
    y: 0 };

  return {
    textList: textList,
    offset: offset };

}

function getCandleToolTipData(series, seriesData, opts, index, categories, extra) {
  var option = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  var calPoints = opts.chartData.calPoints;
  var upColor = extra.color.upFill;
  var downColor = extra.color.downFill;
  //颜色顺序为开盘，收盘，最低，最高
  var color = [upColor, upColor, downColor, upColor];
  var textList = [];
  seriesData.map(function (item) {
    if (index == 0) {
      if (item.data[1] - item.data[0] < 0) {
        color[1] = downColor;
      } else {
        color[1] = upColor;
      }
    } else {
      if (item.data[0] < series[index - 1][1]) {
        color[0] = downColor;
      }
      if (item.data[1] < item.data[0]) {
        color[1] = downColor;
      }
      if (item.data[2] > series[index - 1][1]) {
        color[2] = upColor;
      }
      if (item.data[3] < series[index - 1][1]) {
        color[3] = downColor;
      }
    }
    var text1 = {
      text: '开盘：' + item.data[0],
      color: color[0] };

    var text2 = {
      text: '收盘：' + item.data[1],
      color: color[1] };

    var text3 = {
      text: '最低：' + item.data[2],
      color: color[2] };

    var text4 = {
      text: '最高：' + item.data[3],
      color: color[3] };

    textList.push(text1, text2, text3, text4);
  });
  var validCalPoints = [];
  var offset = {
    x: 0,
    y: 0 };

  for (var i = 0; i < calPoints.length; i++) {
    var points = calPoints[i];
    if (typeof points[index] !== 'undefined' && points[index] !== null) {
      validCalPoints.push(points[index]);
    }
  }
  offset.x = Math.round(validCalPoints[0][0].x);
  return {
    textList: textList,
    offset: offset };

}

function filterSeries(series) {
  var tempSeries = [];
  for (var i = 0; i < series.length; i++) {
    if (series[i].show == true) {
      tempSeries.push(series[i]);
    }
  }
  return tempSeries;
}

function findCurrentIndex(currentPoints, calPoints, opts, config) {
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var current = { index: -1, group: [] };
  var spacing = opts.chartData.eachSpacing / 2;
  var xAxisPoints = [];
  if (calPoints && calPoints.length > 0) {
    if (!opts.categories) {
      spacing = 0;
    } else {
      for (var i = 1; i < opts.chartData.xAxisPoints.length; i++) {
        xAxisPoints.push(opts.chartData.xAxisPoints[i] - spacing);
      }
      if ((opts.type == 'line' || opts.type == 'area') && opts.xAxis.boundaryGap == 'justify') {
        xAxisPoints = opts.chartData.xAxisPoints;
      }
    }
    if (isInExactChartArea(currentPoints, opts, config)) {
      if (!opts.categories) {
        var timePoints = Array(calPoints.length);
        for (var _i2 = 0; _i2 < calPoints.length; _i2++) {
          timePoints[_i2] = Array(calPoints[_i2].length);
          for (var j = 0; j < calPoints[_i2].length; j++) {
            timePoints[_i2][j] = Math.abs(calPoints[_i2][j].x - currentPoints.x);
          }
        };
        var pointValue = Array(timePoints.length);
        var pointIndex = Array(timePoints.length);
        for (var _i3 = 0; _i3 < timePoints.length; _i3++) {
          pointValue[_i3] = Math.min.apply(null, timePoints[_i3]);
          pointIndex[_i3] = timePoints[_i3].indexOf(pointValue[_i3]);
        }
        var minValue = Math.min.apply(null, pointValue);
        current.index = [];
        for (var _i4 = 0; _i4 < pointValue.length; _i4++) {
          if (pointValue[_i4] == minValue) {
            current.group.push(_i4);
            current.index.push(pointIndex[_i4]);
          }
        };
      } else {
        xAxisPoints.forEach(function (item, index) {
          if (currentPoints.x + offset + spacing > item) {
            current.index = index;
          }
        });
      }
    }
  }
  return current;
}

function findBarChartCurrentIndex(currentPoints, calPoints, opts, config) {
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var current = { index: -1, group: [] };
  var spacing = opts.chartData.eachSpacing / 2;
  var yAxisPoints = opts.chartData.yAxisPoints;
  if (calPoints && calPoints.length > 0) {
    if (isInExactChartArea(currentPoints, opts, config)) {
      yAxisPoints.forEach(function (item, index) {
        if (currentPoints.y + offset + spacing > item) {
          current.index = index;
        }
      });
    }
  }
  return current;
}

function findLegendIndex(currentPoints, legendData, opts) {
  var currentIndex = -1;
  var gap = 0;
  if (isInExactLegendArea(currentPoints, legendData.area)) {
    var points = legendData.points;
    var index = -1;
    for (var i = 0, len = points.length; i < len; i++) {
      var item = points[i];
      for (var j = 0; j < item.length; j++) {
        index += 1;
        var area = item[j]['area'];
        if (area && currentPoints.x > area[0] - gap && currentPoints.x < area[2] + gap && currentPoints.y > area[1] - gap && currentPoints.y < area[3] + gap) {
          currentIndex = index;
          break;
        }
      }
    }
    return currentIndex;
  }
  return currentIndex;
}

function isInExactLegendArea(currentPoints, area) {
  return currentPoints.x > area.start.x && currentPoints.x < area.end.x && currentPoints.y > area.start.y && currentPoints.y < area.end.y;
}

function isInExactChartArea(currentPoints, opts, config) {
  return currentPoints.x <= opts.width - opts.area[1] + 10 && currentPoints.x >= opts.area[3] - 10 && currentPoints.y >= opts.area[0] && currentPoints.y <= opts.height - opts.area[2];
}

function findRadarChartCurrentIndex(currentPoints, radarData, count) {
  var eachAngleArea = 2 * Math.PI / count;
  var currentIndex = -1;
  if (isInExactPieChartArea(currentPoints, radarData.center, radarData.radius)) {
    var fixAngle = function fixAngle(angle) {
      if (angle < 0) {
        angle += 2 * Math.PI;
      }
      if (angle > 2 * Math.PI) {
        angle -= 2 * Math.PI;
      }
      return angle;
    };
    var angle = Math.atan2(radarData.center.y - currentPoints.y, currentPoints.x - radarData.center.x);
    angle = -1 * angle;
    if (angle < 0) {
      angle += 2 * Math.PI;
    }
    var angleList = radarData.angleList.map(function (item) {
      item = fixAngle(-1 * item);
      return item;
    });
    angleList.forEach(function (item, index) {
      var rangeStart = fixAngle(item - eachAngleArea / 2);
      var rangeEnd = fixAngle(item + eachAngleArea / 2);
      if (rangeEnd < rangeStart) {
        rangeEnd += 2 * Math.PI;
      }
      if (angle >= rangeStart && angle <= rangeEnd || angle + 2 * Math.PI >= rangeStart && angle + 2 * Math.PI <= rangeEnd) {
        currentIndex = index;
      }
    });
  }
  return currentIndex;
}

function findFunnelChartCurrentIndex(currentPoints, funnelData) {
  var currentIndex = -1;
  for (var i = 0, len = funnelData.series.length; i < len; i++) {
    var item = funnelData.series[i];
    if (currentPoints.x > item.funnelArea[0] && currentPoints.x < item.funnelArea[2] && currentPoints.y > item.funnelArea[1] && currentPoints.y < item.funnelArea[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findWordChartCurrentIndex(currentPoints, wordData) {
  var currentIndex = -1;
  for (var i = 0, len = wordData.length; i < len; i++) {
    var item = wordData[i];
    if (currentPoints.x > item.area[0] && currentPoints.x < item.area[2] && currentPoints.y > item.area[1] && currentPoints.y < item.area[3]) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findMapChartCurrentIndex(currentPoints, opts) {
  var currentIndex = -1;
  var cData = opts.chartData.mapData;
  var data = opts.series;
  var tmp = pointToCoordinate(currentPoints.y, currentPoints.x, cData.bounds, cData.scale, cData.xoffset, cData.yoffset);
  var poi = [tmp.x, tmp.y];
  for (var i = 0, len = data.length; i < len; i++) {
    var item = data[i].geometry.coordinates;
    if (isPoiWithinPoly(poi, item, opts.chartData.mapData.mercator)) {
      currentIndex = i;
      break;
    }
  }
  return currentIndex;
}

function findRoseChartCurrentIndex(currentPoints, pieData, opts) {
  var currentIndex = -1;
  var series = getRoseDataPoints(opts._series_, opts.extra.rose.type, pieData.radius, pieData.radius);
  if (pieData && pieData.center && isInExactPieChartArea(currentPoints, pieData.center, pieData.radius)) {
    var angle = Math.atan2(pieData.center.y - currentPoints.y, currentPoints.x - pieData.center.x);
    angle = -angle;
    if (opts.extra.rose && opts.extra.rose.offsetAngle) {
      angle = angle - opts.extra.rose.offsetAngle * Math.PI / 180;
    }
    for (var i = 0, len = series.length; i < len; i++) {
      if (isInAngleRange(angle, series[i]._start_, series[i]._start_ + series[i]._rose_proportion_ * 2 * Math.PI)) {
        currentIndex = i;
        break;
      }
    }
  }
  return currentIndex;
}

function findPieChartCurrentIndex(currentPoints, pieData, opts) {
  var currentIndex = -1;
  var series = getPieDataPoints(pieData.series);
  if (pieData && pieData.center && isInExactPieChartArea(currentPoints, pieData.center, pieData.radius)) {
    var angle = Math.atan2(pieData.center.y - currentPoints.y, currentPoints.x - pieData.center.x);
    angle = -angle;
    if (opts.extra.pie && opts.extra.pie.offsetAngle) {
      angle = angle - opts.extra.pie.offsetAngle * Math.PI / 180;
    }
    if (opts.extra.ring && opts.extra.ring.offsetAngle) {
      angle = angle - opts.extra.ring.offsetAngle * Math.PI / 180;
    }
    for (var i = 0, len = series.length; i < len; i++) {
      if (isInAngleRange(angle, series[i]._start_, series[i]._start_ + series[i]._proportion_ * 2 * Math.PI)) {
        currentIndex = i;
        break;
      }
    }
  }
  return currentIndex;
}

function isInExactPieChartArea(currentPoints, center, radius) {
  return Math.pow(currentPoints.x - center.x, 2) + Math.pow(currentPoints.y - center.y, 2) <= Math.pow(radius, 2);
}

function splitPoints(points, eachSeries) {
  var newPoints = [];
  var items = [];
  points.forEach(function (item, index) {
    if (eachSeries.connectNulls) {
      if (item !== null) {
        items.push(item);
      }
    } else {
      if (item !== null) {
        items.push(item);
      } else {
        if (items.length) {
          newPoints.push(items);
        }
        items = [];
      }
    }

  });
  if (items.length) {
    newPoints.push(items);
  }
  return newPoints;
}

function calLegendData(series, opts, config, chartData, context) {
  var legendData = {
    area: {
      start: {
        x: 0,
        y: 0 },

      end: {
        x: 0,
        y: 0 },

      width: 0,
      height: 0,
      wholeWidth: 0,
      wholeHeight: 0 },

    points: [],
    widthArr: [],
    heightArr: [] };

  if (opts.legend.show === false) {
    chartData.legendData = legendData;
    return legendData;
  }
  var padding = opts.legend.padding * opts.pix;
  var margin = opts.legend.margin * opts.pix;
  var fontSize = opts.legend.fontSize ? opts.legend.fontSize * opts.pix : config.fontSize;
  var shapeWidth = 15 * opts.pix;
  var shapeRight = 5 * opts.pix;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pix, fontSize);
  if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
    var legendList = [];
    var widthCount = 0;
    var widthCountArr = [];
    var currentRow = [];
    for (var i = 0; i < series.length; i++) {
      var item = series[i];
      var itemWidth = shapeWidth + shapeRight + measureText(item.name || 'undefined', fontSize, context) + opts.legend.itemGap * opts.pix;
      if (widthCount + itemWidth > opts.width - opts.area[1] - opts.area[3]) {
        legendList.push(currentRow);
        widthCountArr.push(widthCount - opts.legend.itemGap * opts.pix);
        widthCount = itemWidth;
        currentRow = [item];
      } else {
        widthCount += itemWidth;
        currentRow.push(item);
      }
    }
    if (currentRow.length) {
      legendList.push(currentRow);
      widthCountArr.push(widthCount - opts.legend.itemGap * opts.pix);
      legendData.widthArr = widthCountArr;
      var legendWidth = Math.max.apply(null, widthCountArr);
      switch (opts.legend.float) {
        case 'left':
          legendData.area.start.x = opts.area[3];
          legendData.area.end.x = opts.area[3] + legendWidth + 2 * padding;
          break;
        case 'right':
          legendData.area.start.x = opts.width - opts.area[1] - legendWidth - 2 * padding;
          legendData.area.end.x = opts.width - opts.area[1];
          break;
        default:
          legendData.area.start.x = (opts.width - legendWidth) / 2 - padding;
          legendData.area.end.x = (opts.width + legendWidth) / 2 + padding;}

      legendData.area.width = legendWidth + 2 * padding;
      legendData.area.wholeWidth = legendWidth + 2 * padding;
      legendData.area.height = legendList.length * lineHeight + 2 * padding;
      legendData.area.wholeHeight = legendList.length * lineHeight + 2 * padding + 2 * margin;
      legendData.points = legendList;
    }
  } else {
    var len = series.length;
    var maxHeight = opts.height - opts.area[0] - opts.area[2] - 2 * margin - 2 * padding;
    var maxLength = Math.min(Math.floor(maxHeight / lineHeight), len);
    legendData.area.height = maxLength * lineHeight + padding * 2;
    legendData.area.wholeHeight = maxLength * lineHeight + padding * 2;
    switch (opts.legend.float) {
      case 'top':
        legendData.area.start.y = opts.area[0] + margin;
        legendData.area.end.y = opts.area[0] + margin + legendData.area.height;
        break;
      case 'bottom':
        legendData.area.start.y = opts.height - opts.area[2] - margin - legendData.area.height;
        legendData.area.end.y = opts.height - opts.area[2] - margin;
        break;
      default:
        legendData.area.start.y = (opts.height - legendData.area.height) / 2;
        legendData.area.end.y = (opts.height + legendData.area.height) / 2;}

    var lineNum = len % maxLength === 0 ? len / maxLength : Math.floor(len / maxLength + 1);
    var _currentRow = [];
    for (var _i5 = 0; _i5 < lineNum; _i5++) {
      var temp = series.slice(_i5 * maxLength, _i5 * maxLength + maxLength);
      _currentRow.push(temp);
    }
    legendData.points = _currentRow;
    if (_currentRow.length) {
      for (var _i6 = 0; _i6 < _currentRow.length; _i6++) {
        var _item = _currentRow[_i6];
        var maxWidth = 0;
        for (var j = 0; j < _item.length; j++) {
          var _itemWidth = shapeWidth + shapeRight + measureText(_item[j].name || 'undefined', fontSize, context) + opts.legend.itemGap * opts.pix;
          if (_itemWidth > maxWidth) {
            maxWidth = _itemWidth;
          }
        }
        legendData.widthArr.push(maxWidth);
        legendData.heightArr.push(_item.length * lineHeight + padding * 2);
      }
      var _legendWidth = 0;
      for (var _i7 = 0; _i7 < legendData.widthArr.length; _i7++) {
        _legendWidth += legendData.widthArr[_i7];
      }
      legendData.area.width = _legendWidth - opts.legend.itemGap * opts.pix + 2 * padding;
      legendData.area.wholeWidth = legendData.area.width + padding;
    }
  }
  switch (opts.legend.position) {
    case 'top':
      legendData.area.start.y = opts.area[0] + margin;
      legendData.area.end.y = opts.area[0] + margin + legendData.area.height;
      break;
    case 'bottom':
      legendData.area.start.y = opts.height - opts.area[2] - legendData.area.height - margin;
      legendData.area.end.y = opts.height - opts.area[2] - margin;
      break;
    case 'left':
      legendData.area.start.x = opts.area[3];
      legendData.area.end.x = opts.area[3] + legendData.area.width;
      break;
    case 'right':
      legendData.area.start.x = opts.width - opts.area[1] - legendData.area.width;
      legendData.area.end.x = opts.width - opts.area[1];
      break;}

  chartData.legendData = legendData;
  return legendData;
}

function calCategoriesData(categories, opts, config, eachSpacing, context) {
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };

  var categoriesTextLenth = categories.map(function (item) {
    return measureText(item, opts.xAxis.fontSize * opts.pix || config.fontSize, context);
  });
  var maxTextLength = Math.max.apply(this, categoriesTextLenth);

  if (opts.xAxis.rotateLabel == true && maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }
  return result;
}

function getXAxisTextList(series, opts, config, stack) {
  var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
  var data;
  if (stack == 'stack') {
    data = dataCombineStack(series, opts.categories.length);
  } else {
    data = dataCombine(series);
  }
  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      if (item.constructor.toString().indexOf('Array') > -1) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  data.map(function (item) {
    if (typeof item === 'object') {
      if (item.constructor.toString().indexOf('Array') > -1) {
        if (opts.type == 'candle') {
          item.map(function (subitem) {
            sorted.push(subitem);
          });
        } else {
          sorted.push(item[0]);
        }
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
  });

  var minData = 0;
  var maxData = 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  //为了兼容v1.9.0之前的项目
  if (index > -1) {
    if (typeof opts.xAxis.data[index].min === 'number') {
      minData = Math.min(opts.xAxis.data[index].min, minData);
    }
    if (typeof opts.xAxis.data[index].max === 'number') {
      maxData = Math.max(opts.xAxis.data[index].max, maxData);
    }
  } else {
    if (typeof opts.xAxis.min === 'number') {
      minData = Math.min(opts.xAxis.min, minData);
    }
    if (typeof opts.xAxis.max === 'number') {
      maxData = Math.max(opts.xAxis.max, maxData);
    }
  }
  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    maxData += rangeSpan;
  }
  //var dataRange = getDataRange(minData, maxData);
  var minRange = minData;
  var maxRange = maxData;
  var range = [];
  var eachRange = (maxRange - minRange) / opts.xAxis.splitNumber;
  for (var i = 0; i <= opts.xAxis.splitNumber; i++) {
    range.push(minRange + eachRange * i);
  }
  return range;
}

function calXAxisData(series, opts, config, context) {
  //堆叠图重算Y轴
  var columnstyle = assign({}, {
    type: "" },
  opts.extra.bar);
  var result = {
    angle: 0,
    xAxisHeight: config.xAxisHeight };

  result.ranges = getXAxisTextList(series, opts, config, columnstyle.type);
  result.rangesFormat = result.ranges.map(function (item) {
    //item = opts.xAxis.formatter ? opts.xAxis.formatter(item) : util.toFixed(item, 2);
    item = util.toFixed(item, 2);
    return item;
  });
  var xAxisScaleValues = result.ranges.map(function (item) {
    // 如果刻度值是浮点数,则保留两位小数
    item = util.toFixed(item, 2);
    // 若有自定义格式则调用自定义的格式化函数
    //item = opts.xAxis.formatter ? opts.xAxis.formatter(Number(item)) : item;
    return item;
  });
  result = Object.assign(result, getXAxisPoints(xAxisScaleValues, opts, config));
  // 计算X轴刻度的属性譬如每个刻度的间隔,刻度的起始点\结束点以及总长
  var eachSpacing = result.eachSpacing;
  var textLength = xAxisScaleValues.map(function (item) {
    return measureText(item, opts.xAxis.fontSize * opts.pix || config.fontSize, context);
  });
  // get max length of categories text
  var maxTextLength = Math.max.apply(this, textLength);
  // 如果刻度值文本内容过长,则将其逆时针旋转45°
  if (maxTextLength + 2 * config.xAxisTextPadding > eachSpacing) {
    result.angle = 45 * Math.PI / 180;
    result.xAxisHeight = 2 * config.xAxisTextPadding + maxTextLength * Math.sin(result.angle);
  }
  if (opts.xAxis.disabled === true) {
    result.xAxisHeight = 0;
  }
  return result;
}

function getRadarDataPoints(angleList, center, radius, series, opts) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var radarOption = opts.extra.radar || {};
  radarOption.max = radarOption.max || 0;
  var maxData = Math.max(radarOption.max, Math.max.apply(null, dataCombine(series)));
  var data = [];var _loop2 = function _loop2(
  i) {
    var each = series[i];
    var listItem = {};
    listItem.color = each.color;
    listItem.legendShape = each.legendShape;
    listItem.pointShape = each.pointShape;
    listItem.data = [];
    each.data.forEach(function (item, index) {
      var tmp = {};
      tmp.angle = angleList[index];
      tmp.proportion = item / maxData;
      tmp.value = item;
      tmp.position = convertCoordinateOrigin(radius * tmp.proportion * process * Math.cos(tmp.angle), radius * tmp.proportion * process * Math.sin(tmp.angle), center);
      listItem.data.push(tmp);
    });
    data.push(listItem);};for (var i = 0; i < series.length; i++) {_loop2(i);
  }
  return data;
}

function getPieDataPoints(series, radius) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var count = 0;
  var _start_ = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
  }
  for (var _i8 = 0; _i8 < series.length; _i8++) {
    var _item2 = series[_i8];
    _item2.data = _item2.data === null ? 0 : _item2.data;
    if (count === 0) {
      _item2._proportion_ = 1 / series.length * process;
    } else {
      _item2._proportion_ = _item2.data / count * process;
    }
    _item2._radius_ = radius;
  }
  for (var _i9 = 0; _i9 < series.length; _i9++) {
    var _item3 = series[_i9];
    _item3._start_ = _start_;
    _start_ += 2 * _item3._proportion_ * Math.PI;
  }
  return series;
}

function getFunnelDataPoints(series, radius, type, eachSpacing) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  series = series.sort(function (a, b) {
    return parseInt(b.data) - parseInt(a.data);
  });
  for (var i = 0; i < series.length; i++) {
    if (type == 'funnel') {
      series[i].radius = series[i].data / series[0].data * radius * process;
    } else {
      series[i].radius = eachSpacing * (series.length - i) / (eachSpacing * series.length) * radius * process;
    }
    series[i]._proportion_ = series[i].data / series[0].data;
  }
  if (type !== 'pyramid') {
    series.reverse();
  }
  return series;
}

function getRoseDataPoints(series, type, minRadius, radius) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var count = 0;
  var _start_ = 0;
  var dataArr = [];
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    count += item.data;
    dataArr.push(item.data);
  }
  var minData = Math.min.apply(null, dataArr);
  var maxData = Math.max.apply(null, dataArr);
  var radiusLength = radius - minRadius;
  for (var _i10 = 0; _i10 < series.length; _i10++) {
    var _item4 = series[_i10];
    _item4.data = _item4.data === null ? 0 : _item4.data;
    if (count === 0) {
      _item4._proportion_ = 1 / series.length * process;
      _item4._rose_proportion_ = 1 / series.length * process;
    } else {
      _item4._proportion_ = _item4.data / count * process;
      if (type == 'area') {
        _item4._rose_proportion_ = 1 / series.length * process;
      } else {
        _item4._rose_proportion_ = _item4.data / count * process;
      }
    }
    _item4._radius_ = minRadius + radiusLength * ((_item4.data - minData) / (maxData - minData)) || radius;
  }
  for (var _i11 = 0; _i11 < series.length; _i11++) {
    var _item5 = series[_i11];
    _item5._start_ = _start_;
    _start_ += 2 * _item5._rose_proportion_ * Math.PI;
  }
  return series;
}

function getArcbarDataPoints(series, arcbarOption) {
  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (process == 1) {
    process = 0.999999;
  }
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    var totalAngle = void 0;
    if (arcbarOption.type == 'circle') {
      totalAngle = 2;
    } else {
      if (arcbarOption.endAngle < arcbarOption.startAngle) {
        totalAngle = 2 + arcbarOption.endAngle - arcbarOption.startAngle;
      } else {
        totalAngle = arcbarOption.startAngle - arcbarOption.endAngle;
      }
    }
    item._proportion_ = totalAngle * item.data * process + arcbarOption.startAngle;
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getGaugeAxisPoints(categories, startAngle, endAngle) {
  var totalAngle = startAngle - endAngle + 1;
  var tempStartAngle = startAngle;
  for (var i = 0; i < categories.length; i++) {
    categories[i].value = categories[i].value === null ? 0 : categories[i].value;
    categories[i]._startAngle_ = tempStartAngle;
    categories[i]._endAngle_ = totalAngle * categories[i].value + startAngle;
    if (categories[i]._endAngle_ >= 2) {
      categories[i]._endAngle_ = categories[i]._endAngle_ % 2;
    }
    tempStartAngle = categories[i]._endAngle_;
  }
  return categories;
}

function getGaugeDataPoints(series, categories, gaugeOption) {
  var process = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    item.data = item.data === null ? 0 : item.data;
    if (gaugeOption.pointer.color == 'auto') {
      for (var _i12 = 0; _i12 < categories.length; _i12++) {
        if (item.data <= categories[_i12].value) {
          item.color = categories[_i12].color;
          break;
        }
      }
    } else {
      item.color = gaugeOption.pointer.color;
    }
    var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    item._endAngle_ = totalAngle * item.data + gaugeOption.startAngle;
    item._oldAngle_ = gaugeOption.oldAngle;
    if (gaugeOption.oldAngle < gaugeOption.endAngle) {
      item._oldAngle_ += 2;
    }
    if (item.data >= gaugeOption.oldData) {
      item._proportion_ = (item._endAngle_ - item._oldAngle_) * process + gaugeOption.oldAngle;
    } else {
      item._proportion_ = item._oldAngle_ - (item._oldAngle_ - item._endAngle_) * process;
    }
    if (item._proportion_ >= 2) {
      item._proportion_ = item._proportion_ % 2;
    }
  }
  return series;
}

function getPieTextMaxLength(series, config, context, opts) {
  series = getPieDataPoints(series);
  var maxLength = 0;
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var text = item.formatter ? item.formatter(+item._proportion_.toFixed(2)) : util.toFixed(item._proportion_ * 100) + '%';
    maxLength = Math.max(maxLength, measureText(text, item.textSize * opts.pix || config.fontSize, context));
  }
  return maxLength;
}

function fixColumeData(points, eachSpacing, columnLen, index, config, opts) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    var seriesGap = 0;
    var categoryGap = 0;
    if (opts.type == 'mix') {
      seriesGap = opts.extra.mix.column.seriesGap * opts.pix || 0;
      categoryGap = opts.extra.mix.column.categoryGap * opts.pix || 0;
    } else {
      seriesGap = opts.extra.column.seriesGap * opts.pix || 0;
      categoryGap = opts.extra.column.categoryGap * opts.pix || 0;
    }
    seriesGap = Math.min(seriesGap, eachSpacing / columnLen);
    categoryGap = Math.min(categoryGap, eachSpacing / columnLen);
    item.width = Math.ceil((eachSpacing - 2 * categoryGap - seriesGap * (columnLen - 1)) / columnLen);
    if (opts.extra.mix && opts.extra.mix.column.width && +opts.extra.mix.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.mix.column.width * opts.pix);
    }
    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width * opts.pix);
    }
    if (item.width <= 0) {
      item.width = 1;
    }
    item.x += (index + 0.5 - columnLen / 2) * (item.width + seriesGap);
    return item;
  });
}

function fixBarData(points, eachSpacing, columnLen, index, config, opts) {
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    var seriesGap = 0;
    var categoryGap = 0;
    seriesGap = opts.extra.bar.seriesGap * opts.pix || 0;
    categoryGap = opts.extra.bar.categoryGap * opts.pix || 0;
    seriesGap = Math.min(seriesGap, eachSpacing / columnLen);
    categoryGap = Math.min(categoryGap, eachSpacing / columnLen);
    item.width = Math.ceil((eachSpacing - 2 * categoryGap - seriesGap * (columnLen - 1)) / columnLen);
    if (opts.extra.bar && opts.extra.bar.width && +opts.extra.bar.width > 0) {
      item.width = Math.min(item.width, +opts.extra.bar.width * opts.pix);
    }
    if (item.width <= 0) {
      item.width = 1;
    }
    item.y += (index + 0.5 - columnLen / 2) * (item.width + seriesGap);
    return item;
  });
}

function fixColumeMeterData(points, eachSpacing, columnLen, index, config, opts, border) {
  var categoryGap = opts.extra.column.categoryGap * opts.pix || 0;
  return points.map(function (item) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil(eachSpacing - 2 * categoryGap);
    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width * opts.pix);
    }
    if (index > 0) {
      item.width -= 2 * border;
    }
    return item;
  });
}

function fixColumeStackData(points, eachSpacing, columnLen, index, config, opts, series) {
  var categoryGap = opts.extra.column.categoryGap * opts.pix || 0;
  return points.map(function (item, indexn) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil(eachSpacing - 2 * categoryGap);
    if (opts.extra.column && opts.extra.column.width && +opts.extra.column.width > 0) {
      item.width = Math.min(item.width, +opts.extra.column.width * opts.pix);
    }
    if (item.width <= 0) {
      item.width = 1;
    }
    return item;
  });
}

function fixBarStackData(points, eachSpacing, columnLen, index, config, opts, series) {
  var categoryGap = opts.extra.bar.categoryGap * opts.pix || 0;
  return points.map(function (item, indexn) {
    if (item === null) {
      return null;
    }
    item.width = Math.ceil(eachSpacing - 2 * categoryGap);
    if (opts.extra.bar && opts.extra.bar.width && +opts.extra.bar.width > 0) {
      item.width = Math.min(item.width, +opts.extra.bar.width * opts.pix);
    }
    if (item.width <= 0) {
      item.width = 1;
    }
    return item;
  });
}

function getXAxisPoints(categories, opts, config) {
  var spacingValid = opts.width - opts.area[1] - opts.area[3];
  var dataCount = opts.enableScroll ? Math.min(opts.xAxis.itemCount, categories.length) : categories.length;
  if ((opts.type == 'line' || opts.type == 'area' || opts.type == 'scatter' || opts.type == 'bubble' || opts.type == 'bar') && dataCount > 1 && opts.xAxis.boundaryGap == 'justify') {
    dataCount -= 1;
  }
  var eachSpacing = spacingValid / dataCount;
  var xAxisPoints = [];
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  categories.forEach(function (item, index) {
    xAxisPoints.push(startX + index * eachSpacing);
  });
  if (opts.xAxis.boundaryGap !== 'justify') {
    if (opts.enableScroll === true) {
      xAxisPoints.push(startX + categories.length * eachSpacing);
    } else {
      xAxisPoints.push(endX);
    }
  }
  return {
    xAxisPoints: xAxisPoints,
    startX: startX,
    endX: endX,
    eachSpacing: eachSpacing };

}

function getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var cPoints = [];
      item.forEach(function (items, indexs) {
        var point = {};
        point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);
        var value = items.value || items;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        height *= process;
        point.y = opts.height - Math.round(height) - opts.area[2];
        cPoints.push(point);
      });
      points.push(cPoints);
    }
  });
  return points;
}

function getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var boundaryGap = 'center';
  if (opts.type == 'line' || opts.type == 'area' || opts.type == 'scatter' || opts.type == 'bubble') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  var validWidth = opts.width - opts.area[1] - opts.area[3];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index];
      var value = item;
      if (typeof item === 'object' && item !== null) {
        if (item.constructor.toString().indexOf('Array') > -1) {
          var xranges, xminRange, xmaxRange;
          xranges = [].concat(opts.chartData.xAxisData.ranges);
          xminRange = xranges.shift();
          xmaxRange = xranges.pop();
          value = item[1];
          point.x = opts.area[3] + validWidth * (item[0] - xminRange) / (xmaxRange - xminRange);
          if (opts.type == 'bubble') {
            point.r = item[2];
            point.t = item[3];
          }
        } else {
          value = item.value;
        }
      }
      if (boundaryGap == 'center') {
        point.x += eachSpacing / 2;
      }
      var height = validHeight * (value - minRange) / (maxRange - minRange);
      height *= process;
      point.y = opts.height - height - opts.area[2];
      points.push(point);
    }
  });
  return points;
}

function getBarDataPoints(data, minRange, maxRange, yAxisPoints, eachSpacing, opts, config) {
  var process = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  var validWidth = opts.width - opts.area[1] - opts.area[3];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.y = yAxisPoints[index];
      var value = item;
      if (typeof item === 'object' && item !== null) {
        value = item.value;
      }
      var height = validWidth * (value - minRange) / (maxRange - minRange);
      height *= process;
      point.height = height;
      point.value = value;
      point.x = height + opts.area[3];
      points.push(point);
    }
  });
  return points;
}

function getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, stackSeries) {
  var process = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 1;
  var points = [];
  var validHeight = opts.height - opts.area[0] - opts.area[2];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.x = xAxisPoints[index] + Math.round(eachSpacing / 2);

      if (seriesIndex > 0) {
        var value = 0;
        for (var i = 0; i <= seriesIndex; i++) {
          value += stackSeries[i].data[index];
        }
        var value0 = value - item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = validHeight * (value0 - minRange) / (maxRange - minRange);
      } else {
        var value = item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = 0;
      }
      var heightc = height0;
      height *= process;
      heightc *= process;
      point.y = opts.height - Math.round(height) - opts.area[2];
      point.y0 = opts.height - Math.round(heightc) - opts.area[2];
      points.push(point);
    }
  });
  return points;
}

function getBarStackDataPoints(data, minRange, maxRange, yAxisPoints, eachSpacing, opts, config, seriesIndex, stackSeries) {
  var process = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 1;
  var points = [];
  var validHeight = opts.width - opts.area[1] - opts.area[3];
  data.forEach(function (item, index) {
    if (item === null) {
      points.push(null);
    } else {
      var point = {};
      point.color = item.color;
      point.y = yAxisPoints[index];
      if (seriesIndex > 0) {
        var value = 0;
        for (var i = 0; i <= seriesIndex; i++) {
          value += stackSeries[i].data[index];
        }
        var value0 = value - item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = validHeight * (value0 - minRange) / (maxRange - minRange);
      } else {
        var value = item;
        var height = validHeight * (value - minRange) / (maxRange - minRange);
        var height0 = 0;
      }
      var heightc = height0;
      height *= process;
      heightc *= process;
      point.height = height - heightc;
      point.x = opts.area[3] + height;
      point.x0 = opts.area[3] + heightc;
      points.push(point);
    }
  });
  return points;
}

function getYAxisTextList(series, opts, config, stack, yData) {
  var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : -1;
  var data;
  if (stack == 'stack') {
    data = dataCombineStack(series, opts.categories.length);
  } else {
    data = dataCombine(series);
  }
  var sorted = [];
  // remove null from data
  data = data.filter(function (item) {
    //return item !== null;
    if (typeof item === 'object' && item !== null) {
      if (item.constructor.toString().indexOf('Array') > -1) {
        return item !== null;
      } else {
        return item.value !== null;
      }
    } else {
      return item !== null;
    }
  });
  data.map(function (item) {
    if (typeof item === 'object') {
      if (item.constructor.toString().indexOf('Array') > -1) {
        if (opts.type == 'candle') {
          item.map(function (subitem) {
            sorted.push(subitem);
          });
        } else {
          sorted.push(item[1]);
        }
      } else {
        sorted.push(item.value);
      }
    } else {
      sorted.push(item);
    }
  });
  var minData = yData.min || 0;
  var maxData = yData.max || 0;
  if (sorted.length > 0) {
    minData = Math.min.apply(this, sorted);
    maxData = Math.max.apply(this, sorted);
  }
  //为了兼容v1.9.0之前的项目
  // if (index > -1) {
  //   if (typeof opts.yAxis.data[index].min === 'number') {
  //     minData = Math.min(opts.yAxis.data[index].min, minData);
  //   }
  //   if (typeof opts.yAxis.data[index].max === 'number') {
  //     maxData = Math.max(opts.yAxis.data[index].max, maxData);
  //   }
  // } else {
  //   if (typeof opts.yAxis.min === 'number') {
  //     minData = Math.min(opts.yAxis.min, minData);
  //   }
  //   if (typeof opts.yAxis.max === 'number') {
  //     maxData = Math.max(opts.yAxis.max, maxData);
  //   }
  // }
  if (minData === maxData) {
    var rangeSpan = maxData || 10;
    maxData += rangeSpan;
  }
  var dataRange = getDataRange(minData, maxData);
  var minRange = yData.min === undefined || yData.min === null ? dataRange.minRange : yData.min;
  var maxRange = yData.max === undefined || yData.min === null ? dataRange.maxRange : yData.max;
  var range = [];
  var eachRange = (maxRange - minRange) / opts.yAxis.splitNumber;
  for (var i = 0; i <= opts.yAxis.splitNumber; i++) {
    range.push(minRange + eachRange * i);
  }
  return range.reverse();
}

function calYAxisData(series, opts, config, context) {
  //堆叠图重算Y轴
  var columnstyle = assign({}, {
    type: "" },
  opts.extra.column);
  //如果是多Y轴，重新计算
  var YLength = opts.yAxis.data.length;
  var newSeries = new Array(YLength);
  if (YLength > 0) {
    for (var i = 0; i < YLength; i++) {
      newSeries[i] = [];
      for (var j = 0; j < series.length; j++) {
        if (series[j].index == i) {
          newSeries[i].push(series[j]);
        }
      }
    }
    var rangesArr = new Array(YLength);
    var rangesFormatArr = new Array(YLength);
    var yAxisWidthArr = new Array(YLength);var _loop3 = function _loop3(

    _i13) {
      var yData = opts.yAxis.data[_i13];
      //如果总开关不显示，强制每个Y轴为不显示
      if (opts.yAxis.disabled == true) {
        yData.disabled = true;
      }
      if (yData.type === 'categories') {
        if (!yData.formatter) {
          yData.formatter = function (val) {return val + (yData.unit || '');};
        }
        yData.categories = yData.categories || opts.categories;
        rangesArr[_i13] = yData.categories;
      } else {
        if (!yData.formatter) {
          yData.formatter = function (val) {return val.toFixed(yData.tofix) + (yData.unit || '');};
        }
        rangesArr[_i13] = getYAxisTextList(newSeries[_i13], opts, config, columnstyle.type, yData, _i13);
      }
      var yAxisFontSizes = yData.fontSize * opts.pix || config.fontSize;
      yAxisWidthArr[_i13] = {
        position: yData.position ? yData.position : 'left',
        width: 0 };

      rangesFormatArr[_i13] = rangesArr[_i13].map(function (items) {
        items = yData.formatter(items);
        yAxisWidthArr[_i13].width = Math.max(yAxisWidthArr[_i13].width, measureText(items, yAxisFontSizes, context) + 5);
        return items;
      });
      var calibration = yData.calibration ? 4 * opts.pix : 0;
      yAxisWidthArr[_i13].width += calibration + 3 * opts.pix;
      if (yData.disabled === true) {
        yAxisWidthArr[_i13].width = 0;
      }};for (var _i13 = 0; _i13 < YLength; _i13++) {_loop3(_i13);
    }
  } else {
    var rangesArr = new Array(1);
    var rangesFormatArr = new Array(1);
    var yAxisWidthArr = new Array(1);
    if (opts.type === 'bar') {
      rangesArr[0] = opts.categories;
      if (!opts.yAxis.formatter) {
        opts.yAxis.formatter = function (val) {return val + (opts.yAxis.unit || '');};
      }
    } else {
      if (!opts.yAxis.formatter) {
        opts.yAxis.formatter = function (val) {return val.toFixed(opts.yAxis.tofix) + (opts.yAxis.unit || '');};
      }
      rangesArr[0] = getYAxisTextList(series, opts, config, columnstyle.type, {});
    }
    yAxisWidthArr[0] = {
      position: 'left',
      width: 0 };

    var yAxisFontSize = opts.yAxis.fontSize * opts.pix || config.fontSize;
    rangesFormatArr[0] = rangesArr[0].map(function (item) {
      item = opts.yAxis.formatter(item);
      yAxisWidthArr[0].width = Math.max(yAxisWidthArr[0].width, measureText(item, yAxisFontSize, context) + 5);
      return item;
    });
    yAxisWidthArr[0].width += 3 * opts.pix;
    if (opts.yAxis.disabled === true) {
      yAxisWidthArr[0] = {
        position: 'left',
        width: 0 };

      opts.yAxis.data[0] = {
        disabled: true };

    } else {
      opts.yAxis.data[0] = {
        disabled: false,
        position: 'left',
        max: opts.yAxis.max,
        min: opts.yAxis.min,
        formatter: opts.yAxis.formatter };

      if (opts.type === 'bar') {
        opts.yAxis.data[0].categories = opts.categories;
        opts.yAxis.data[0].type = 'categories';
      }
    }
  }
  return {
    rangesFormat: rangesFormatArr,
    ranges: rangesArr,
    yAxisWidth: yAxisWidthArr };

}

function calTooltipYAxisData(point, series, opts, config, eachSpacing) {
  var ranges = [].concat(opts.chartData.yAxisData.ranges);
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var minAxis = opts.area[0];
  var items = [];
  for (var i = 0; i < ranges.length; i++) {
    var maxVal = ranges[i].shift();
    var minVal = ranges[i].pop();
    var item = maxVal - (maxVal - minVal) * (point - minAxis) / spacingValid;
    item = opts.yAxis.data[i].formatter ? opts.yAxis.data[i].formatter(item) : item.toFixed(0);
    items.push(String(item));
  }
  return items;
}

function calMarkLineData(points, opts) {
  var minRange, maxRange;
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  for (var i = 0; i < points.length; i++) {
    points[i].yAxisIndex = points[i].yAxisIndex ? points[i].yAxisIndex : 0;
    var range = [].concat(opts.chartData.yAxisData.ranges[points[i].yAxisIndex]);
    minRange = range.pop();
    maxRange = range.shift();
    var height = spacingValid * (points[i].value - minRange) / (maxRange - minRange);
    points[i].y = opts.height - Math.round(height) - opts.area[2];
  }
  return points;
}

function contextRotate(context, opts) {
  if (opts.rotateLock !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
  } else if (opts._rotate_ !== true) {
    context.translate(opts.height, 0);
    context.rotate(90 * Math.PI / 180);
    opts._rotate_ = true;
  }
}

function drawPointShape(points, color, shape, context, opts) {
  context.beginPath();
  if (opts.dataPointShapeType == 'hollow') {
    context.setStrokeStyle(color);
    context.setFillStyle(opts.background);
    context.setLineWidth(2 * opts.pix);
  } else {
    context.setStrokeStyle("#ffffff");
    context.setFillStyle(color);
    context.setLineWidth(1 * opts.pix);
  }
  if (shape === 'diamond') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y);
        context.lineTo(item.x, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  } else if (shape === 'circle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x + 2.5 * opts.pix, item.y);
        context.arc(item.x, item.y, 3 * opts.pix, 0, 2 * Math.PI, false);
      }
    });
  } else if (shape === 'square') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x - 3.5, item.y - 3.5);
        context.rect(item.x - 3.5, item.y - 3.5, 7, 7);
      }
    });
  } else if (shape === 'triangle') {
    points.forEach(function (item, index) {
      if (item !== null) {
        context.moveTo(item.x, item.y - 4.5);
        context.lineTo(item.x - 4.5, item.y + 4.5);
        context.lineTo(item.x + 4.5, item.y + 4.5);
        context.lineTo(item.x, item.y - 4.5);
      }
    });
  } else if (shape === 'triangle') {
    return;
  }
  context.closePath();
  context.fill();
  context.stroke();
}

function drawRingTitle(opts, config, context, center) {
  var titlefontSize = opts.title.fontSize || config.titleFontSize;
  var subtitlefontSize = opts.subtitle.fontSize || config.subtitleFontSize;
  var title = opts.title.name || '';
  var subtitle = opts.subtitle.name || '';
  var titleFontColor = opts.title.color || opts.fontColor;
  var subtitleFontColor = opts.subtitle.color || opts.fontColor;
  var titleHeight = title ? titlefontSize : 0;
  var subtitleHeight = subtitle ? subtitlefontSize : 0;
  var margin = 5;
  if (subtitle) {
    var textWidth = measureText(subtitle, subtitlefontSize * opts.pix, context);
    var startX = center.x - textWidth / 2 + (opts.subtitle.offsetX || 0) * opts.pix;
    var startY = center.y + subtitlefontSize * opts.pix / 2 + (opts.subtitle.offsetY || 0) * opts.pix;
    if (title) {
      startY += (titleHeight * opts.pix + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(subtitlefontSize * opts.pix);
    context.setFillStyle(subtitleFontColor);
    context.fillText(subtitle, startX, startY);
    context.closePath();
    context.stroke();
  }
  if (title) {
    var _textWidth = measureText(title, titlefontSize * opts.pix, context);
    var _startX = center.x - _textWidth / 2 + (opts.title.offsetX || 0);
    var _startY = center.y + titlefontSize * opts.pix / 2 + (opts.title.offsetY || 0) * opts.pix;
    if (subtitle) {
      _startY -= (subtitleHeight * opts.pix + margin) / 2;
    }
    context.beginPath();
    context.setFontSize(titlefontSize * opts.pix);
    context.setFillStyle(titleFontColor);
    context.fillText(title, _startX, _startY);
    context.closePath();
    context.stroke();
  }
}

function drawPointText(points, series, config, context, opts) {
  // 绘制数据文案
  var data = series.data;
  var textOffset = series.textOffset ? series.textOffset : 0;
  points.forEach(function (item, index) {
    if (item !== null) {
      context.beginPath();
      var fontSize = series.textSize ? series.textSize * opts.pix : config.fontSize;
      context.setFontSize(fontSize);
      context.setFillStyle(series.textColor || opts.fontColor);
      var value = data[index];
      if (typeof data[index] === 'object' && data[index] !== null) {
        if (data[index].constructor.toString().indexOf('Array') > -1) {
          value = data[index][1];
        } else {
          value = data[index].value;
        }
      }
      var formatVal = series.formatter ? series.formatter(value, index) : value;
      context.setTextAlign('center');
      context.fillText(String(formatVal), item.x, item.y - 4 + textOffset * opts.pix);
      context.closePath();
      context.stroke();
      context.setTextAlign('left');
    }
  });
}

function drawBarPointText(points, series, config, context, opts) {
  // 绘制数据文案
  var data = series.data;
  var textOffset = series.textOffset ? series.textOffset : 0;
  points.forEach(function (item, index) {
    if (item !== null) {
      context.beginPath();
      var fontSize = series.textSize ? series.textSize * opts.pix : config.fontSize;
      context.setFontSize(fontSize);
      context.setFillStyle(series.textColor || opts.fontColor);
      var value = data[index];
      if (typeof data[index] === 'object' && data[index] !== null) {
        value = data[index].value;
      }
      var formatVal = series.formatter ? series.formatter(value, index) : value;
      context.setTextAlign('left');
      context.fillText(String(formatVal), item.x + 4 * opts.pix, item.y + fontSize / 2 - 3);
      context.closePath();
      context.stroke();
    }
  });
}

function drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context) {
  radius -= gaugeOption.width / 2 + gaugeOption.labelOffset * opts.pix;
  var totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
  var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
  var totalNumber = gaugeOption.endNumber - gaugeOption.startNumber;
  var splitNumber = totalNumber / gaugeOption.splitLine.splitNumber;
  var nowAngle = gaugeOption.startAngle;
  var nowNumber = gaugeOption.startNumber;
  for (var i = 0; i < gaugeOption.splitLine.splitNumber + 1; i++) {
    var pos = {
      x: radius * Math.cos(nowAngle * Math.PI),
      y: radius * Math.sin(nowAngle * Math.PI) };

    var labelText = gaugeOption.formatter ? gaugeOption.formatter(nowNumber) : nowNumber;
    pos.x += centerPosition.x - measureText(labelText, config.fontSize, context) / 2;
    pos.y += centerPosition.y;
    var startX = pos.x;
    var startY = pos.y;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(gaugeOption.labelColor || opts.fontColor);
    context.fillText(labelText, startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();
    nowAngle += splitAngle;
    if (nowAngle >= 2) {
      nowAngle = nowAngle % 2;
    }
    nowNumber += splitNumber;
  }

}

function drawRadarLabel(angleList, radius, centerPosition, opts, config, context) {
  var radarOption = opts.extra.radar || {};
  radius += config.radarLabelTextMargin * opts.pix;
  angleList.forEach(function (angle, index) {
    var pos = {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle) };

    var posRelativeCanvas = convertCoordinateOrigin(pos.x, pos.y, centerPosition);
    var startX = posRelativeCanvas.x;
    var startY = posRelativeCanvas.y;
    if (util.approximatelyEqual(pos.x, 0)) {
      startX -= measureText(opts.categories[index] || '', config.fontSize, context) / 2;
    } else if (pos.x < 0) {
      startX -= measureText(opts.categories[index] || '', config.fontSize, context);
    }
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(radarOption.labelColor || opts.fontColor);
    context.fillText(opts.categories[index] || '', startX, startY + config.fontSize / 2);
    context.closePath();
    context.stroke();
  });

}

function drawPieText(series, opts, config, context, radius, center) {
  var lineRadius = config.pieChartLinePadding;
  var textObjectCollection = [];
  var lastTextObject = null;
  var seriesConvert = series.map(function (item, index, series) {
    var text = item.formatter ? item.formatter(item, index, series) : util.toFixed(item._proportion_.toFixed(4) * 100) + '%';
    var arc = 2 * Math.PI - (item._start_ + 2 * Math.PI * item._proportion_ / 2);
    if (item._rose_proportion_) {
      arc = 2 * Math.PI - (item._start_ + 2 * Math.PI * item._rose_proportion_ / 2);
    }
    var color = item.color;
    var radius = item._radius_;
    return {
      arc: arc,
      text: text,
      color: color,
      radius: radius,
      textColor: item.textColor,
      textSize: item.textSize };

  });
  for (var i = 0; i < seriesConvert.length; i++) {
    var item = seriesConvert[i];
    // line end
    var orginX1 = Math.cos(item.arc) * (item.radius + lineRadius);
    var orginY1 = Math.sin(item.arc) * (item.radius + lineRadius);
    // line start
    var orginX2 = Math.cos(item.arc) * item.radius;
    var orginY2 = Math.sin(item.arc) * item.radius;
    // text start
    var orginX3 = orginX1 >= 0 ? orginX1 + config.pieChartTextPadding : orginX1 - config.pieChartTextPadding;
    var orginY3 = orginY1;
    var textWidth = measureText(item.text, item.textSize * opts.pix || config.fontSize, context);
    var startY = orginY3;
    if (lastTextObject && util.isSameXCoordinateArea(lastTextObject.start, {
      x: orginX3 }))
    {
      if (orginX3 > 0) {
        startY = Math.min(orginY3, lastTextObject.start.y);
      } else if (orginX1 < 0) {
        startY = Math.max(orginY3, lastTextObject.start.y);
      } else {
        if (orginY3 > 0) {
          startY = Math.max(orginY3, lastTextObject.start.y);
        } else {
          startY = Math.min(orginY3, lastTextObject.start.y);
        }
      }
    }
    if (orginX3 < 0) {
      orginX3 -= textWidth;
    }
    var textObject = {
      lineStart: {
        x: orginX2,
        y: orginY2 },

      lineEnd: {
        x: orginX1,
        y: orginY1 },

      start: {
        x: orginX3,
        y: startY },

      width: textWidth,
      height: config.fontSize,
      text: item.text,
      color: item.color,
      textColor: item.textColor,
      textSize: item.textSize };

    lastTextObject = avoidCollision(textObject, lastTextObject);
    textObjectCollection.push(lastTextObject);
  }
  for (var _i14 = 0; _i14 < textObjectCollection.length; _i14++) {
    var _item6 = textObjectCollection[_i14];
    var lineStartPoistion = convertCoordinateOrigin(_item6.lineStart.x, _item6.lineStart.y, center);
    var lineEndPoistion = convertCoordinateOrigin(_item6.lineEnd.x, _item6.lineEnd.y, center);
    var textPosition = convertCoordinateOrigin(_item6.start.x, _item6.start.y, center);
    context.setLineWidth(1 * opts.pix);
    context.setFontSize(_item6.textSize * opts.pix || config.fontSize);
    context.beginPath();
    context.setStrokeStyle(_item6.color);
    context.setFillStyle(_item6.color);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    var curveStartX = _item6.start.x < 0 ? textPosition.x + _item6.width : textPosition.x;
    var textStartX = _item6.start.x < 0 ? textPosition.x - 5 : textPosition.x + 5;
    context.quadraticCurveTo(lineEndPoistion.x, lineEndPoistion.y, curveStartX, textPosition.y);
    context.moveTo(lineStartPoistion.x, lineStartPoistion.y);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.moveTo(textPosition.x + _item6.width, textPosition.y);
    context.arc(curveStartX, textPosition.y, 2, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.beginPath();
    context.setFontSize(_item6.textSize * opts.pix || config.fontSize);
    context.setFillStyle(_item6.textColor || opts.fontColor);
    context.fillText(_item6.text, textStartX, textPosition.y + 3);
    context.closePath();
    context.stroke();
    context.closePath();
  }
}

function drawToolTipSplitLine(offsetX, opts, config, context) {
  var toolTipOption = opts.extra.tooltip || {};
  toolTipOption.gridType = toolTipOption.gridType == undefined ? 'solid' : toolTipOption.gridType;
  toolTipOption.dashLength = toolTipOption.dashLength == undefined ? 4 : toolTipOption.dashLength;
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];
  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pix);
  context.beginPath();
  context.moveTo(offsetX, startY);
  context.lineTo(offsetX, endY);
  context.stroke();
  context.setLineDash([]);
  if (toolTipOption.xAxisLabel) {
    var labelText = opts.categories[opts.tooltip.index];
    context.setFontSize(config.fontSize);
    var textWidth = measureText(labelText, config.fontSize, context);
    var textX = offsetX - 0.5 * textWidth;
    var textY = endY;
    context.beginPath();
    context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
    context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
    context.setLineWidth(1 * opts.pix);
    context.rect(textX - config.toolTipPadding, textY, textWidth + 2 * config.toolTipPadding, config.fontSize + 2 * config.toolTipPadding);
    context.closePath();
    context.stroke();
    context.fill();
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.labelFontColor || opts.fontColor);
    context.fillText(String(labelText), textX, textY + config.toolTipPadding + config.fontSize);
    context.closePath();
    context.stroke();
  }
}

function drawMarkLine(opts, config, context) {
  var markLineOption = assign({}, {
    type: 'solid',
    dashLength: 4,
    data: [] },
  opts.extra.markLine);
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  var points = calMarkLineData(markLineOption.data, opts);
  for (var i = 0; i < points.length; i++) {
    var item = assign({}, {
      lineColor: '#DE4A42',
      showLabel: false,
      labelFontColor: '#666666',
      labelBgColor: '#DFE8FF',
      labelBgOpacity: 0.8,
      yAxisIndex: 0 },
    points[i]);
    if (markLineOption.type == 'dash') {
      context.setLineDash([markLineOption.dashLength, markLineOption.dashLength]);
    }
    context.setStrokeStyle(item.lineColor);
    context.setLineWidth(1 * opts.pix);
    context.beginPath();
    context.moveTo(startX, item.y);
    context.lineTo(endX, item.y);
    context.stroke();
    context.setLineDash([]);
    if (item.showLabel) {
      var labelText = opts.yAxis.formatter ? opts.yAxis.formatter(item.value) : item.value;
      context.setFontSize(config.fontSize);
      var textWidth = measureText(labelText, config.fontSize, context);
      var yAxisWidth = opts.chartData.yAxisData.yAxisWidth[0].width;
      var bgStartX = opts.area[3] - textWidth - config.toolTipPadding * 2;
      var bgEndX = opts.area[3];
      var bgWidth = bgEndX - bgStartX;
      var textX = bgEndX - config.toolTipPadding;
      var textY = item.y;
      context.setFillStyle(hexToRgb(item.labelBgColor, item.labelBgOpacity));
      context.setStrokeStyle(item.labelBgColor);
      context.setLineWidth(1 * opts.pix);
      context.beginPath();
      context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 * config.toolTipPadding);
      context.closePath();
      context.stroke();
      context.fill();
      context.setFontSize(config.fontSize);
      context.setTextAlign('right');
      context.setFillStyle(item.labelFontColor);
      context.fillText(String(labelText), textX, textY + 0.5 * config.fontSize);
      context.stroke();
      context.setTextAlign('left');
    }
  }
}

function drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    gridType: 'solid',
    dashLength: 4 },
  opts.extra.tooltip);
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  if (toolTipOption.gridType == 'dash') {
    context.setLineDash([toolTipOption.dashLength, toolTipOption.dashLength]);
  }
  context.setStrokeStyle(toolTipOption.gridColor || '#cccccc');
  context.setLineWidth(1 * opts.pix);
  context.beginPath();
  context.moveTo(startX, opts.tooltip.offset.y);
  context.lineTo(endX, opts.tooltip.offset.y);
  context.stroke();
  context.setLineDash([]);
  if (toolTipOption.yAxisLabel) {
    var labelText = calTooltipYAxisData(opts.tooltip.offset.y, opts.series, opts, config, eachSpacing);
    var widthArr = opts.chartData.yAxisData.yAxisWidth;
    var tStartLeft = opts.area[3];
    var tStartRight = opts.width - opts.area[1];
    for (var i = 0; i < labelText.length; i++) {
      context.setFontSize(config.fontSize);
      var textWidth = measureText(labelText[i], config.fontSize, context);
      var bgStartX = void 0,bgEndX = void 0,bgWidth = void 0;
      if (widthArr[i].position == 'left') {
        bgStartX = tStartLeft - widthArr[i].width;
        bgEndX = Math.max(bgStartX, bgStartX + textWidth + config.toolTipPadding * 2);
      } else {
        bgStartX = tStartRight;
        bgEndX = Math.max(bgStartX + widthArr[i].width, bgStartX + textWidth + config.toolTipPadding * 2);
      }
      bgWidth = bgEndX - bgStartX;
      var textX = bgStartX + (bgWidth - textWidth) / 2;
      var textY = opts.tooltip.offset.y;
      context.beginPath();
      context.setFillStyle(hexToRgb(toolTipOption.labelBgColor || config.toolTipBackground, toolTipOption.labelBgOpacity || config.toolTipOpacity));
      context.setStrokeStyle(toolTipOption.labelBgColor || config.toolTipBackground);
      context.setLineWidth(1 * opts.pix);
      context.rect(bgStartX, textY - 0.5 * config.fontSize - config.toolTipPadding, bgWidth, config.fontSize + 2 *
      config.toolTipPadding);
      context.closePath();
      context.stroke();
      context.fill();
      context.beginPath();
      context.setFontSize(config.fontSize);
      context.setFillStyle(toolTipOption.labelFontColor || opts.fontColor);
      context.fillText(labelText[i], textX, textY + 0.5 * config.fontSize);
      context.closePath();
      context.stroke();
      if (widthArr[i].position == 'left') {
        tStartLeft -= widthArr[i].width + opts.yAxis.padding * opts.pix;
      } else {
        tStartRight += widthArr[i].width + opts.yAxis.padding * opts.pix;
      }
    }
  }
}

function drawToolTipSplitArea(offsetX, opts, config, context, eachSpacing) {
  var toolTipOption = assign({}, {
    activeBgColor: '#000000',
    activeBgOpacity: 0.08 },
  opts.extra.column);
  var startY = opts.area[0];
  var endY = opts.height - opts.area[2];
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.activeBgColor, toolTipOption.activeBgOpacity));
  context.rect(offsetX - eachSpacing / 2, startY, eachSpacing, endY - startY);
  context.closePath();
  context.fill();
  context.setFillStyle("#FFFFFF");
}

function drawBarToolTipSplitArea(offsetX, opts, config, context, eachSpacing) {
  var toolTipOption = assign({}, {
    activeBgColor: '#000000',
    activeBgOpacity: 0.08 },
  opts.extra.bar);
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.activeBgColor, toolTipOption.activeBgOpacity));
  context.rect(startX, offsetX - eachSpacing / 2, endX - startX, eachSpacing);
  context.closePath();
  context.fill();
  context.setFillStyle("#FFFFFF");
}

function drawToolTip(textList, offset, opts, config, context, eachSpacing, xAxisPoints) {
  var toolTipOption = assign({}, {
    showBox: true,
    showArrow: true,
    showCategory: false,
    bgColor: '#000000',
    bgOpacity: 0.7,
    borderColor: '#000000',
    borderWidth: 0,
    borderRadius: 0,
    borderOpacity: 0.7,
    fontColor: '#FFFFFF',
    splitLine: true },
  opts.extra.tooltip);
  if (toolTipOption.showCategory == true && opts.categories) {
    textList.unshift({ text: opts.categories[opts.tooltip.index], color: null });
  }
  var legendWidth = 4 * opts.pix;
  var legendMarginRight = 5 * opts.pix;
  var arrowWidth = toolTipOption.showArrow ? 8 * opts.pix : 0;
  var isOverRightBorder = false;
  if (opts.type == 'line' || opts.type == 'area' || opts.type == 'candle' || opts.type == 'mix') {
    if (toolTipOption.splitLine == true) {
      drawToolTipSplitLine(opts.tooltip.offset.x, opts, config, context);
    }
  }
  offset = assign({
    x: 0,
    y: 0 },
  offset);
  offset.y -= 8 * opts.pix;
  var textWidth = textList.map(function (item) {
    return measureText(item.text, config.fontSize, context);
  });
  var toolTipWidth = legendWidth + legendMarginRight + 4 * config.toolTipPadding + Math.max.apply(null, textWidth);
  var toolTipHeight = 2 * config.toolTipPadding + textList.length * config.toolTipLineHeight;
  if (toolTipOption.showBox == false) {
    return;
  }
  // if beyond the right border
  if (offset.x - Math.abs(opts._scrollDistance_ || 0) + arrowWidth + toolTipWidth > opts.width) {
    isOverRightBorder = true;
  }
  if (toolTipHeight + offset.y > opts.height) {
    offset.y = opts.height - toolTipHeight;
  }
  // draw background rect
  context.beginPath();
  context.setFillStyle(hexToRgb(toolTipOption.bgColor || config.toolTipBackground, toolTipOption.bgOpacity || config.toolTipOpacity));
  context.setLineWidth(toolTipOption.borderWidth * opts.pix);
  context.setStrokeStyle(hexToRgb(toolTipOption.borderColor, toolTipOption.borderOpacity));
  var radius = toolTipOption.borderRadius;
  if (isOverRightBorder) {
    if (toolTipOption.showArrow) {
      context.moveTo(offset.x, offset.y + 10 * opts.pix);
      context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pix + 5 * opts.pix);
    }
    context.arc(offset.x - arrowWidth - radius, offset.y + toolTipHeight - radius, radius, 0, Math.PI / 2, false);
    context.arc(offset.x - arrowWidth - Math.round(toolTipWidth) + radius, offset.y + toolTipHeight - radius, radius,
    Math.PI / 2, Math.PI, false);
    context.arc(offset.x - arrowWidth - Math.round(toolTipWidth) + radius, offset.y + radius, radius, -Math.PI, -Math.PI / 2, false);
    context.arc(offset.x - arrowWidth - radius, offset.y + radius, radius, -Math.PI / 2, 0, false);
    if (toolTipOption.showArrow) {
      context.lineTo(offset.x - arrowWidth, offset.y + 10 * opts.pix - 5 * opts.pix);
      context.lineTo(offset.x, offset.y + 10 * opts.pix);
    }
  } else {
    if (toolTipOption.showArrow) {
      context.moveTo(offset.x, offset.y + 10 * opts.pix);
      context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pix - 5 * opts.pix);
    }
    context.arc(offset.x + arrowWidth + radius, offset.y + radius, radius, -Math.PI, -Math.PI / 2, false);
    context.arc(offset.x + arrowWidth + Math.round(toolTipWidth) - radius, offset.y + radius, radius, -Math.PI / 2, 0,
    false);
    context.arc(offset.x + arrowWidth + Math.round(toolTipWidth) - radius, offset.y + toolTipHeight - radius, radius, 0,
    Math.PI / 2, false);
    context.arc(offset.x + arrowWidth + radius, offset.y + toolTipHeight - radius, radius, Math.PI / 2, Math.PI, false);
    if (toolTipOption.showArrow) {
      context.lineTo(offset.x + arrowWidth, offset.y + 10 * opts.pix + 5 * opts.pix);
      context.lineTo(offset.x, offset.y + 10 * opts.pix);
    }
  }
  context.closePath();
  context.fill();
  if (toolTipOption.borderWidth > 0) {
    context.stroke();
  }
  // draw legend
  textList.forEach(function (item, index) {
    if (item.color !== null) {
      context.beginPath();
      context.setFillStyle(item.color);
      var startX = offset.x + arrowWidth + 2 * config.toolTipPadding;
      var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index + config.toolTipPadding + 1;
      if (isOverRightBorder) {
        startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding;
      }
      context.fillRect(startX, startY, legendWidth, config.fontSize);
      context.closePath();
    }
  });
  // draw text list
  textList.forEach(function (item, index) {
    var startX = offset.x + arrowWidth + 2 * config.toolTipPadding + legendWidth + legendMarginRight;
    if (isOverRightBorder) {
      startX = offset.x - toolTipWidth - arrowWidth + 2 * config.toolTipPadding + +legendWidth + legendMarginRight;
    }
    var startY = offset.y + (config.toolTipLineHeight - config.fontSize) / 2 + config.toolTipLineHeight * index + config.toolTipPadding;
    context.beginPath();
    context.setFontSize(config.fontSize);
    context.setFillStyle(toolTipOption.fontColor);
    context.fillText(item.text, startX, startY + config.fontSize);
    context.closePath();
    context.stroke();
  });
}

function drawColumnDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var columnOption = assign({}, {
    type: 'group',
    width: eachSpacing / 2,
    meterBorder: 4,
    meterFillColor: '#FFFFFF',
    barBorderCircle: false,
    barBorderRadius: [],
    seriesGap: 2,
    linearType: 'none',
    linearOpacity: 1,
    customColor: [],
    colorStop: 0 },
  opts.extra.column);
  var calPoints = [];
  context.save();
  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTipSplitArea(opts.tooltip.offset.x, opts, config, context, eachSpacing);
  }
  columnOption.customColor = fillCustomColor(columnOption.linearType, columnOption.customColor, series, config);
  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    switch (columnOption.type) {
      case 'group':
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        var tooltipPoints = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(tooltipPoints);
        points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
        for (var i = 0; i < points.length; i++) {
          var item = points[i];
          //fix issues/I27B1N yyoinge & Joeshu
          if (item !== null && i > leftNum && i < rightNum) {
            var startX = item.x - item.width / 2;
            var height = opts.height - item.y - opts.area[2];
            context.beginPath();
            var fillColor = item.color || eachSeries.color;
            var strokeColor = item.color || eachSeries.color;
            if (columnOption.linearType !== 'none') {
              var grd = context.createLinearGradient(startX, item.y, startX, opts.height - opts.area[2]);
              //透明渐变
              if (columnOption.linearType == 'opacity') {
                grd.addColorStop(0, hexToRgb(fillColor, columnOption.linearOpacity));
                grd.addColorStop(1, hexToRgb(fillColor, 1));
              } else {
                grd.addColorStop(0, hexToRgb(columnOption.customColor[eachSeries.linearIndex], columnOption.linearOpacity));
                grd.addColorStop(columnOption.colorStop, hexToRgb(columnOption.customColor[eachSeries.linearIndex], columnOption.linearOpacity));
                grd.addColorStop(1, hexToRgb(fillColor, 1));
              }
              fillColor = grd;
            }
            // 圆角边框
            if (columnOption.barBorderRadius && columnOption.barBorderRadius.length === 4 || columnOption.barBorderCircle === true) {
              var left = startX;
              var top = item.y;
              var width = item.width;
              var _height = opts.height - opts.area[2] - item.y;
              if (columnOption.barBorderCircle) {
                columnOption.barBorderRadius = [width / 2, width / 2, 0, 0];
              }var _columnOption$barBord = _slicedToArray(
              columnOption.barBorderRadius, 4),r0 = _columnOption$barBord[0],r1 = _columnOption$barBord[1],r2 = _columnOption$barBord[2],r3 = _columnOption$barBord[3];
              var minRadius = Math.min(width / 2, _height / 2);
              r0 = r0 > minRadius ? minRadius : r0;
              r1 = r1 > minRadius ? minRadius : r1;
              r2 = r2 > minRadius ? minRadius : r2;
              r3 = r3 > minRadius ? minRadius : r3;
              r0 = r0 < 0 ? 0 : r0;
              r1 = r1 < 0 ? 0 : r1;
              r2 = r2 < 0 ? 0 : r2;
              r3 = r3 < 0 ? 0 : r3;
              context.arc(left + r0, top + r0, r0, -Math.PI, -Math.PI / 2);
              context.arc(left + width - r1, top + r1, r1, -Math.PI / 2, 0);
              context.arc(left + width - r2, top + _height - r2, r2, 0, Math.PI / 2);
              context.arc(left + r3, top + _height - r3, r3, Math.PI / 2, Math.PI);
            } else {
              context.moveTo(startX, item.y);
              context.lineTo(startX + item.width - 2, item.y);
              context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
              context.lineTo(startX, opts.height - opts.area[2]);
              context.lineTo(startX, item.y);
              context.setLineWidth(1);
              context.setStrokeStyle(strokeColor);
            }
            context.setFillStyle(fillColor);
            context.closePath();
            //context.stroke();
            context.fill();
          }
        };
        break;
      case 'stack':
        // 绘制堆叠数据图
        var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(points);
        points = fixColumeStackData(points, eachSpacing, series.length, seriesIndex, config, opts, series);
        for (var _i15 = 0; _i15 < points.length; _i15++) {
          var _item7 = points[_i15];
          if (_item7 !== null && _i15 > leftNum && _i15 < rightNum) {
            context.beginPath();
            var fillColor = _item7.color || eachSeries.color;
            var startX = _item7.x - _item7.width / 2 + 1;
            var height = opts.height - _item7.y - opts.area[2];
            var height0 = opts.height - _item7.y0 - opts.area[2];
            if (seriesIndex > 0) {
              height -= height0;
            }
            context.setFillStyle(fillColor);
            context.moveTo(startX, _item7.y);
            context.fillRect(startX, _item7.y, _item7.width - 2, height);
            context.closePath();
            context.fill();
          }
        };
        break;
      case 'meter':
        // 绘制温度计数据图
        var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
        calPoints.push(points);
        points = fixColumeMeterData(points, eachSpacing, series.length, seriesIndex, config, opts, columnOption.meterBorder);
        if (seriesIndex == 0) {
          for (var _i16 = 0; _i16 < points.length; _i16++) {
            var _item8 = points[_i16];
            if (_item8 !== null && _i16 > leftNum && _i16 < rightNum) {
              //画背景颜色
              context.beginPath();
              context.setFillStyle(columnOption.meterFillColor);
              var startX = _item8.x - _item8.width / 2;
              var height = opts.height - _item8.y - opts.area[2];
              if (columnOption.barBorderCircle) {
                var barBorderRadius = (_item8.width - columnOption.meterBorder * 2) / 2;
                if (barBorderRadius > height) {
                  barBorderRadius = height;
                }
                context.moveTo(startX + columnOption.meterBorder, opts.height - opts.area[2]);
                context.lineTo(startX + columnOption.meterBorder, _item8.y + barBorderRadius);
                context.arc(startX + _item8.width / 2, _item8.y + barBorderRadius, barBorderRadius, -Math.PI, 0);
                context.lineTo(startX + _item8.width - columnOption.meterBorder, opts.height - opts.area[2]);
                context.lineTo(startX, opts.height - opts.area[2]);
                context.fill();
              } else {
                context.moveTo(startX, _item8.y);
                context.fillRect(startX, _item8.y, _item8.width, height);
                context.closePath();
                context.fill();
              }
              //画边框线
              if (columnOption.meterBorder > 0) {
                context.beginPath();
                context.setStrokeStyle(eachSeries.color);
                context.setLineWidth(columnOption.meterBorder * opts.pix);
                if (columnOption.barBorderCircle) {
                  var barBorderRadius = (_item8.width - columnOption.meterBorder) / 2;
                  if (barBorderRadius > height) {
                    barBorderRadius = height;
                  }
                  context.moveTo(startX + columnOption.meterBorder * 0.5, opts.height - opts.area[2]);
                  context.lineTo(startX + columnOption.meterBorder * 0.5, _item8.y + barBorderRadius);
                  context.arc(startX + _item8.width / 2, _item8.y + barBorderRadius - columnOption.meterBorder * 0.5, barBorderRadius, -Math.PI, 0);
                  context.lineTo(startX + _item8.width - columnOption.meterBorder * 0.5, opts.height - opts.area[2]);
                } else {
                  context.moveTo(startX + columnOption.meterBorder * 0.5, _item8.y + height);
                  context.lineTo(startX + columnOption.meterBorder * 0.5, _item8.y + columnOption.meterBorder * 0.5);
                  context.lineTo(startX + _item8.width - columnOption.meterBorder * 0.5, _item8.y + columnOption.meterBorder * 0.5);
                  context.lineTo(startX + _item8.width - columnOption.meterBorder * 0.5, _item8.y + height);
                }
                context.stroke();
              }
            }
          };
        } else {
          for (var _i17 = 0; _i17 < points.length; _i17++) {
            var _item9 = points[_i17];
            if (_item9 !== null && _i17 > leftNum && _i17 < rightNum) {
              context.beginPath();
              context.setFillStyle(_item9.color || eachSeries.color);
              var startX = _item9.x - _item9.width / 2;
              var height = opts.height - _item9.y - opts.area[2];
              if (columnOption.barBorderCircle) {
                var barBorderRadius = _item9.width / 2;
                if (barBorderRadius > height) {
                  barBorderRadius = height;
                }
                context.moveTo(startX, opts.height - opts.area[2]);
                context.arc(startX + barBorderRadius, _item9.y + barBorderRadius, barBorderRadius, -Math.PI, -Math.PI / 2);
                context.arc(startX + _item9.width - barBorderRadius, _item9.y + barBorderRadius, barBorderRadius, -Math.PI / 2, 0);
                context.lineTo(startX + _item9.width, opts.height - opts.area[2]);
                context.lineTo(startX, opts.height - opts.area[2]);
                context.fill();
              } else {
                context.moveTo(startX, _item9.y);
                context.fillRect(startX, _item9.y, _item9.width, height);
                context.closePath();
                context.fill();
              }
            }
          };
        }
        break;}

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      switch (columnOption.type) {
        case 'group':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          points = fixColumeData(points, eachSpacing, series.length, seriesIndex, config, opts);
          drawPointText(points, eachSeries, config, context, opts);
          break;
        case 'stack':
          var points = getStackDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
          drawPointText(points, eachSeries, config, context, opts);
          break;
        case 'meter':
          var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
          drawPointText(points, eachSeries, config, context, opts);
          break;}

    });
  }
  context.restore();
  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawBarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var yAxisPoints = [];
  var eachSpacing = (opts.height - opts.area[0] - opts.area[2]) / opts.categories.length;
  for (var i = 0; i < opts.categories.length; i++) {
    yAxisPoints.push(opts.area[0] + eachSpacing / 2 + eachSpacing * i);
  }
  var columnOption = assign({}, {
    type: 'group',
    width: eachSpacing / 2,
    meterBorder: 4,
    meterFillColor: '#FFFFFF',
    barBorderCircle: false,
    barBorderRadius: [],
    seriesGap: 2,
    linearType: 'none',
    linearOpacity: 1,
    customColor: [],
    colorStop: 0 },
  opts.extra.bar);
  var calPoints = [];
  context.save();
  var leftNum = -2;
  var rightNum = yAxisPoints.length + 2;
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawBarToolTipSplitArea(opts.tooltip.offset.y, opts, config, context, eachSpacing);
  }
  columnOption.customColor = fillCustomColor(columnOption.linearType, columnOption.customColor, series, config);
  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.xAxisData.ranges);
    maxRange = ranges.pop();
    minRange = ranges.shift();
    var data = eachSeries.data;
    switch (columnOption.type) {
      case 'group':
        var points = getBarDataPoints(data, minRange, maxRange, yAxisPoints, eachSpacing, opts, config, process);
        var tooltipPoints = getBarStackDataPoints(data, minRange, maxRange, yAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(tooltipPoints);
        points = fixBarData(points, eachSpacing, series.length, seriesIndex, config, opts);
        for (var _i18 = 0; _i18 < points.length; _i18++) {
          var item = points[_i18];
          //fix issues/I27B1N yyoinge & Joeshu
          if (item !== null && _i18 > leftNum && _i18 < rightNum) {
            //var startX = item.x - item.width / 2;
            var startX = opts.area[3];
            var startY = item.y - item.width / 2;
            var height = item.height;
            context.beginPath();
            var fillColor = item.color || eachSeries.color;
            var strokeColor = item.color || eachSeries.color;
            if (columnOption.linearType !== 'none') {
              var grd = context.createLinearGradient(startX, item.y, item.x, item.y);
              //透明渐变
              if (columnOption.linearType == 'opacity') {
                grd.addColorStop(0, hexToRgb(fillColor, columnOption.linearOpacity));
                grd.addColorStop(1, hexToRgb(fillColor, 1));
              } else {
                grd.addColorStop(0, hexToRgb(columnOption.customColor[eachSeries.linearIndex], columnOption.linearOpacity));
                grd.addColorStop(columnOption.colorStop, hexToRgb(columnOption.customColor[eachSeries.linearIndex], columnOption.linearOpacity));
                grd.addColorStop(1, hexToRgb(fillColor, 1));
              }
              fillColor = grd;
            }
            // 圆角边框
            if (columnOption.barBorderRadius && columnOption.barBorderRadius.length === 4 || columnOption.barBorderCircle === true) {
              var left = startX;
              var width = item.width;
              var top = item.y - item.width / 2;
              var _height2 = item.heigh;
              if (columnOption.barBorderCircle) {
                columnOption.barBorderRadius = [width / 2, width / 2, 0, 0];
              }var _columnOption$barBord2 = _slicedToArray(
              columnOption.barBorderRadius, 4),r0 = _columnOption$barBord2[0],r1 = _columnOption$barBord2[1],r2 = _columnOption$barBord2[2],r3 = _columnOption$barBord2[3];
              var minRadius = Math.min(width / 2, _height2 / 2);
              r0 = r0 > minRadius ? minRadius : r0;
              r1 = r1 > minRadius ? minRadius : r1;
              r2 = r2 > minRadius ? minRadius : r2;
              r3 = r3 > minRadius ? minRadius : r3;
              r0 = r0 < 0 ? 0 : r0;
              r1 = r1 < 0 ? 0 : r1;
              r2 = r2 < 0 ? 0 : r2;
              r3 = r3 < 0 ? 0 : r3;

              context.arc(left + r3, top + r3, r3, -Math.PI, -Math.PI / 2);
              context.arc(item.x - r0, top + r0, r0, -Math.PI / 2, 0);
              context.arc(item.x - r1, top + width - r1, r1, 0, Math.PI / 2);
              context.arc(left + r2, top + width - r2, r2, Math.PI / 2, Math.PI);
            } else {
              context.moveTo(startX, startY);
              context.lineTo(item.x, startY);
              context.lineTo(item.x, startY + item.width - 2);
              context.lineTo(startX, startY + item.width - 2);
              context.lineTo(startX, startY);
              context.setLineWidth(1);
              context.setStrokeStyle(strokeColor);
            }
            context.setFillStyle(fillColor);
            context.closePath();
            //context.stroke();
            context.fill();
          }
        };
        break;
      case 'stack':
        // 绘制堆叠数据图
        var points = getBarStackDataPoints(data, minRange, maxRange, yAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
        calPoints.push(points);
        points = fixBarStackData(points, eachSpacing, series.length, seriesIndex, config, opts, series);
        for (var _i19 = 0; _i19 < points.length; _i19++) {
          var _item10 = points[_i19];
          if (_item10 !== null && _i19 > leftNum && _i19 < rightNum) {
            context.beginPath();
            var fillColor = _item10.color || eachSeries.color;
            var startX = _item10.x0;
            context.setFillStyle(fillColor);
            context.moveTo(startX, _item10.y - _item10.width / 2);
            context.fillRect(startX, _item10.y - _item10.width / 2, _item10.height, _item10.width - 2);
            context.closePath();
            context.fill();
          }
        };
        break;}

  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.xAxisData.ranges);
      maxRange = ranges.pop();
      minRange = ranges.shift();
      var data = eachSeries.data;
      switch (columnOption.type) {
        case 'group':
          var points = getBarDataPoints(data, minRange, maxRange, yAxisPoints, eachSpacing, opts, config, process);
          points = fixBarData(points, eachSpacing, series.length, seriesIndex, config, opts);
          drawBarPointText(points, eachSeries, config, context, opts);
          break;
        case 'stack':
          var points = getBarStackDataPoints(data, minRange, maxRange, yAxisPoints, eachSpacing, opts, config, seriesIndex, series, process);
          drawBarPointText(points, eachSeries, config, context, opts);
          break;}

    });
  }
  return {
    yAxisPoints: yAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawCandleDataPoints(series, seriesMA, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var candleOption = assign({}, {
    color: {},
    average: {} },
  opts.extra.candle);
  candleOption.color = assign({}, {
    upLine: '#f04864',
    upFill: '#f04864',
    downLine: '#2fc25b',
    downFill: '#2fc25b' },
  candleOption.color);
  candleOption.average = assign({}, {
    show: false,
    name: [],
    day: [],
    color: config.color },
  candleOption.average);
  opts.extra.candle = candleOption;
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var calPoints = [];
  context.save();
  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
    leftSpace = -opts._scrollDistance_ - eachSpacing * 2 + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }
  //画均线
  if (candleOption.average.show || seriesMA) {//Merge pull request !12 from 邱贵翔
    seriesMA.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      var splitPointList = splitPoints(points, eachSeries);
      for (var i = 0; i < splitPointList.length; i++) {
        var _points = splitPointList[i];
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(1);
        if (_points.length === 1) {
          context.moveTo(_points[0].x, _points[0].y);
          context.arc(_points[0].x, _points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(_points[0].x, _points[0].y);
          var startPoint = 0;
          for (var j = 0; j < _points.length; j++) {
            var item = _points[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(_points, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x,
              item.y);
            }
          }
          context.moveTo(_points[0].x, _points[0].y);
        }
        context.closePath();
        context.stroke();
      }
    });
  }
  //画K线
  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getCandleDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points, eachSeries);
    for (var i = 0; i < splitPointList[0].length; i++) {
      if (i > leftNum && i < rightNum) {
        var item = splitPointList[0][i];
        context.beginPath();
        //如果上涨
        if (data[i][1] - data[i][0] > 0) {
          context.setStrokeStyle(candleOption.color.upLine);
          context.setFillStyle(candleOption.color.upFill);
          context.setLineWidth(1 * opts.pix);
          context.moveTo(item[3].x, item[3].y); //顶点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[1].x - eachSpacing / 4, item[1].y); //收盘左侧点
          context.lineTo(item[0].x - eachSpacing / 4, item[0].y); //开盘左侧点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[2].x, item[2].y); //底点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[0].x + eachSpacing / 4, item[0].y); //开盘右侧点
          context.lineTo(item[1].x + eachSpacing / 4, item[1].y); //收盘右侧点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.moveTo(item[3].x, item[3].y); //顶点
        } else {
          context.setStrokeStyle(candleOption.color.downLine);
          context.setFillStyle(candleOption.color.downFill);
          context.setLineWidth(1 * opts.pix);
          context.moveTo(item[3].x, item[3].y); //顶点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.lineTo(item[0].x - eachSpacing / 4, item[0].y); //开盘左侧点
          context.lineTo(item[1].x - eachSpacing / 4, item[1].y); //收盘左侧点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[2].x, item[2].y); //底点
          context.lineTo(item[1].x, item[1].y); //收盘中间点
          context.lineTo(item[1].x + eachSpacing / 4, item[1].y); //收盘右侧点
          context.lineTo(item[0].x + eachSpacing / 4, item[0].y); //开盘右侧点
          context.lineTo(item[0].x, item[0].y); //开盘中间点
          context.moveTo(item[3].x, item[3].y); //顶点
        }
        context.closePath();
        context.fill();
        context.stroke();
      }
    }
  });
  context.restore();
  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawAreaDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var areaOption = assign({}, {
    type: 'straight',
    opacity: 0.2,
    addLine: false,
    width: 2,
    gradient: false },
  opts.extra.area);
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var endY = opts.height - opts.area[2];
  var calPoints = [];
  context.save();
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftSpace = -opts._scrollDistance_ - eachSpacing * 2 + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }
  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points, eachSeries);
    for (var i = 0; i < splitPointList.length; i++) {
      var _points2 = splitPointList[i];
      // 绘制区域数
      context.beginPath();
      context.setStrokeStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      if (areaOption.gradient) {
        var gradient = context.createLinearGradient(0, opts.area[0], 0, opts.height - opts.area[2]);
        gradient.addColorStop('0', hexToRgb(eachSeries.color, areaOption.opacity));
        gradient.addColorStop('1.0', hexToRgb("#FFFFFF", 0.1));
        context.setFillStyle(gradient);
      } else {
        context.setFillStyle(hexToRgb(eachSeries.color, areaOption.opacity));
      }
      context.setLineWidth(areaOption.width * opts.pix);
      if (_points2.length > 1) {
        var firstPoint = _points2[0];
        var lastPoint = _points2[_points2.length - 1];
        context.moveTo(firstPoint.x, firstPoint.y);
        var startPoint = 0;
        if (areaOption.type === 'curve') {
          for (var j = 0; j < _points2.length; j++) {
            var item = _points2[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(_points2, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          };
        }
        if (areaOption.type === 'straight') {
          for (var _j = 0; _j < _points2.length; _j++) {
            var _item11 = _points2[_j];
            if (startPoint == 0 && _item11.x > leftSpace) {
              context.moveTo(_item11.x, _item11.y);
              startPoint = 1;
            }
            if (_j > 0 && _item11.x > leftSpace && _item11.x < rightSpace) {
              context.lineTo(_item11.x, _item11.y);
            }
          };
        }
        if (areaOption.type === 'step') {
          for (var _j2 = 0; _j2 < _points2.length; _j2++) {
            var _item12 = _points2[_j2];
            if (startPoint == 0 && _item12.x > leftSpace) {
              context.moveTo(_item12.x, _item12.y);
              startPoint = 1;
            }
            if (_j2 > 0 && _item12.x > leftSpace && _item12.x < rightSpace) {
              context.lineTo(_item12.x, _points2[_j2 - 1].y);
              context.lineTo(_item12.x, _item12.y);
            }
          };
        }
        context.lineTo(lastPoint.x, endY);
        context.lineTo(firstPoint.x, endY);
        context.lineTo(firstPoint.x, firstPoint.y);
      } else {
        var _item13 = _points2[0];
        context.moveTo(_item13.x - eachSpacing / 2, _item13.y);
        context.lineTo(_item13.x + eachSpacing / 2, _item13.y);
        context.lineTo(_item13.x + eachSpacing / 2, endY);
        context.lineTo(_item13.x - eachSpacing / 2, endY);
        context.moveTo(_item13.x - eachSpacing / 2, _item13.y);
      }
      context.closePath();
      context.fill();
      //画连线
      if (areaOption.addLine) {
        if (eachSeries.lineType == 'dash') {
          var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
          dashLength *= opts.pix;
          context.setLineDash([dashLength, dashLength]);
        }
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(areaOption.width * opts.pix);
        if (_points2.length === 1) {
          context.moveTo(_points2[0].x, _points2[0].y);
          context.arc(_points2[0].x, _points2[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(_points2[0].x, _points2[0].y);
          var _startPoint = 0;
          if (areaOption.type === 'curve') {
            for (var _j3 = 0; _j3 < _points2.length; _j3++) {
              var _item14 = _points2[_j3];
              if (_startPoint == 0 && _item14.x > leftSpace) {
                context.moveTo(_item14.x, _item14.y);
                _startPoint = 1;
              }
              if (_j3 > 0 && _item14.x > leftSpace && _item14.x < rightSpace) {
                var _ctrlPoint = createCurveControlPoints(_points2, _j3 - 1);
                context.bezierCurveTo(_ctrlPoint.ctrA.x, _ctrlPoint.ctrA.y, _ctrlPoint.ctrB.x, _ctrlPoint.ctrB.y, _item14.x, _item14.y);
              }
            };
          }
          if (areaOption.type === 'straight') {
            for (var _j4 = 0; _j4 < _points2.length; _j4++) {
              var _item15 = _points2[_j4];
              if (_startPoint == 0 && _item15.x > leftSpace) {
                context.moveTo(_item15.x, _item15.y);
                _startPoint = 1;
              }
              if (_j4 > 0 && _item15.x > leftSpace && _item15.x < rightSpace) {
                context.lineTo(_item15.x, _item15.y);
              }
            };
          }
          if (areaOption.type === 'step') {
            for (var _j5 = 0; _j5 < _points2.length; _j5++) {
              var _item16 = _points2[_j5];
              if (_startPoint == 0 && _item16.x > leftSpace) {
                context.moveTo(_item16.x, _item16.y);
                _startPoint = 1;
              }
              if (_j5 > 0 && _item16.x > leftSpace && _item16.x < rightSpace) {
                context.lineTo(_item16.x, _points2[_j5 - 1].y);
                context.lineTo(_item16.x, _item16.y);
              }
            };
          }
          context.moveTo(_points2[0].x, _points2[0].y);
        }
        context.stroke();
        context.setLineDash([]);
      }
    }
    //画点
    if (opts.dataPointShape !== false) {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context, opts);
    });
  }
  context.restore();
  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawScatterDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var scatterOption = assign({}, {
    type: 'circle' },
  opts.extra.scatter);
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var calPoints = [];
  context.save();
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftSpace = -opts._scrollDistance_ - eachSpacing * 2 + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }
  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    context.beginPath();
    context.setStrokeStyle(eachSeries.color);
    context.setFillStyle(eachSeries.color);
    context.setLineWidth(1 * opts.pix);
    var shape = eachSeries.pointShape;
    if (shape === 'diamond') {
      points.forEach(function (item, index) {
        if (item !== null) {
          context.moveTo(item.x, item.y - 4.5);
          context.lineTo(item.x - 4.5, item.y);
          context.lineTo(item.x, item.y + 4.5);
          context.lineTo(item.x + 4.5, item.y);
          context.lineTo(item.x, item.y - 4.5);
        }
      });
    } else if (shape === 'circle') {
      points.forEach(function (item, index) {
        if (item !== null) {
          context.moveTo(item.x + 2.5 * opts.pix, item.y);
          context.arc(item.x, item.y, 3 * opts.pix, 0, 2 * Math.PI, false);
        }
      });
    } else if (shape === 'square') {
      points.forEach(function (item, index) {
        if (item !== null) {
          context.moveTo(item.x - 3.5, item.y - 3.5);
          context.rect(item.x - 3.5, item.y - 3.5, 7, 7);
        }
      });
    } else if (shape === 'triangle') {
      points.forEach(function (item, index) {
        if (item !== null) {
          context.moveTo(item.x, item.y - 4.5);
          context.lineTo(item.x - 4.5, item.y + 4.5);
          context.lineTo(item.x + 4.5, item.y + 4.5);
          context.lineTo(item.x, item.y - 4.5);
        }
      });
    } else if (shape === 'triangle') {
      return;
    }
    context.closePath();
    context.fill();
    context.stroke();
  });
  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context, opts);
    });
  }
  context.restore();
  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawBubbleDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var bubbleOption = assign({}, {
    opacity: 1,
    border: 2 },
  opts.extra.bubble);
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var calPoints = [];
  context.save();
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftSpace = -opts._scrollDistance_ - eachSpacing * 2 + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }
  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    context.beginPath();
    context.setStrokeStyle(eachSeries.color);
    context.setLineWidth(bubbleOption.border * opts.pix);
    context.setFillStyle(hexToRgb(eachSeries.color, bubbleOption.opacity));
    points.forEach(function (item, index) {
      context.moveTo(item.x + item.r, item.y);
      context.arc(item.x, item.y, item.r * opts.pix, 0, 2 * Math.PI, false);
    });
    context.closePath();
    context.fill();
    context.stroke();

    if (opts.dataLabel !== false && process === 1) {
      points.forEach(function (item, index) {
        context.beginPath();
        var fontSize = series.textSize * opts.pix || config.fontSize;
        context.setFontSize(fontSize);
        context.setFillStyle(series.textColor || "#FFFFFF");
        context.setTextAlign('center');
        context.fillText(String(item.t), item.x, item.y + fontSize / 2);
        context.closePath();
        context.stroke();
        context.setTextAlign('left');
      });
    }
  });
  context.restore();
  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}


function drawLineDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var lineOption = assign({}, {
    type: 'straight',
    width: 2 },
  opts.extra.line);
  lineOption.width *= opts.pix;
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var calPoints = [];
  context.save();
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftSpace = -opts._scrollDistance_ - eachSpacing * 2 + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }
  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    var splitPointList = splitPoints(points, eachSeries);
    if (eachSeries.lineType == 'dash') {
      var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
      dashLength *= opts.pix;
      context.setLineDash([dashLength, dashLength]);
    }
    context.beginPath();
    context.setStrokeStyle(eachSeries.color);
    context.setLineWidth(lineOption.width);
    splitPointList.forEach(function (points, index) {
      if (points.length === 1) {
        context.moveTo(points[0].x, points[0].y);
        context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
      } else {
        context.moveTo(points[0].x, points[0].y);
        var startPoint = 0;
        if (lineOption.type === 'curve') {
          for (var j = 0; j < points.length; j++) {
            var item = points[j];
            if (startPoint == 0 && item.x > leftSpace) {
              context.moveTo(item.x, item.y);
              startPoint = 1;
            }
            if (j > 0 && item.x > leftSpace && item.x < rightSpace) {
              var ctrlPoint = createCurveControlPoints(points, j - 1);
              context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, item.x, item.y);
            }
          };
        }
        if (lineOption.type === 'straight') {
          for (var _j6 = 0; _j6 < points.length; _j6++) {
            var _item17 = points[_j6];
            if (startPoint == 0 && _item17.x > leftSpace) {
              context.moveTo(_item17.x, _item17.y);
              startPoint = 1;
            }
            if (_j6 > 0 && _item17.x > leftSpace && _item17.x < rightSpace) {
              context.lineTo(_item17.x, _item17.y);
            }
          };
        }
        if (lineOption.type === 'step') {
          for (var _j7 = 0; _j7 < points.length; _j7++) {
            var _item18 = points[_j7];
            if (startPoint == 0 && _item18.x > leftSpace) {
              context.moveTo(_item18.x, _item18.y);
              startPoint = 1;
            }
            if (_j7 > 0 && _item18.x > leftSpace && _item18.x < rightSpace) {
              context.lineTo(_item18.x, points[_j7 - 1].y);
              context.lineTo(_item18.x, _item18.y);
            }
          };
        }
        context.moveTo(points[0].x, points[0].y);
      }
    });
    context.stroke();
    context.setLineDash([]);
    if (opts.dataPointShape !== false) {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });
  if (opts.dataLabel !== false && process === 1) {
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      drawPointText(points, eachSeries, config, context, opts);
    });
  }
  context.restore();
  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawMixDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var columnOption = assign({}, {
    width: eachSpacing / 2,
    barBorderCircle: false,
    barBorderRadius: [],
    seriesGap: 2,
    linearType: 'none',
    linearOpacity: 1,
    customColor: [],
    colorStop: 0 },
  opts.extra.mix.column);
  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  eachSpacing = xAxisData.eachSpacing;
  var endY = opts.height - opts.area[2];
  var calPoints = [];
  var columnIndex = 0;
  var columnLength = 0;
  series.forEach(function (eachSeries, seriesIndex) {
    if (eachSeries.type == 'column') {
      columnLength += 1;
    }
  });
  context.save();
  var leftNum = -2;
  var rightNum = xAxisPoints.length + 2;
  var leftSpace = 0;
  var rightSpace = opts.width + eachSpacing;
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
    leftNum = Math.floor(-opts._scrollDistance_ / eachSpacing) - 2;
    rightNum = leftNum + opts.xAxis.itemCount + 4;
    leftSpace = -opts._scrollDistance_ - eachSpacing * 2 + opts.area[3];
    rightSpace = leftSpace + (opts.xAxis.itemCount + 4) * eachSpacing;
  }
  columnOption.customColor = fillCustomColor(columnOption.linearType, columnOption.customColor, series, config);
  series.forEach(function (eachSeries, seriesIndex) {
    var ranges, minRange, maxRange;
    ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
    minRange = ranges.pop();
    maxRange = ranges.shift();
    var data = eachSeries.data;
    var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
    calPoints.push(points);
    // 绘制柱状数据图
    if (eachSeries.type == 'column') {
      points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
      for (var i = 0; i < points.length; i++) {
        var item = points[i];
        if (item !== null && i > leftNum && i < rightNum) {
          var startX = item.x - item.width / 2;
          var height = opts.height - item.y - opts.area[2];
          context.beginPath();
          var fillColor = item.color || eachSeries.color;
          var strokeColor = item.color || eachSeries.color;
          if (columnOption.linearType !== 'none') {
            var grd = context.createLinearGradient(startX, item.y, startX, opts.height - opts.area[2]);
            //透明渐变
            if (columnOption.linearType == 'opacity') {
              grd.addColorStop(0, hexToRgb(fillColor, columnOption.linearOpacity));
              grd.addColorStop(1, hexToRgb(fillColor, 1));
            } else {
              grd.addColorStop(0, hexToRgb(columnOption.customColor[eachSeries.linearIndex], columnOption.linearOpacity));
              grd.addColorStop(columnOption.colorStop, hexToRgb(columnOption.customColor[eachSeries.linearIndex], columnOption.linearOpacity));
              grd.addColorStop(1, hexToRgb(fillColor, 1));
            }
            fillColor = grd;
          }
          // 圆角边框
          if (columnOption.barBorderRadius && columnOption.barBorderRadius.length === 4 || columnOption.barBorderCircle) {
            var left = startX;
            var top = item.y;
            var width = item.width;
            var _height3 = opts.height - opts.area[2] - item.y;
            if (columnOption.barBorderCircle) {
              columnOption.barBorderRadius = [width / 2, width / 2, 0, 0];
            }var _columnOption$barBord3 = _slicedToArray(
            columnOption.barBorderRadius, 4),r0 = _columnOption$barBord3[0],r1 = _columnOption$barBord3[1],r2 = _columnOption$barBord3[2],r3 = _columnOption$barBord3[3];
            var minRadius = Math.min(width / 2, _height3 / 2);
            r0 = r0 > minRadius ? minRadius : r0;
            r1 = r1 > minRadius ? minRadius : r1;
            r2 = r2 > minRadius ? minRadius : r2;
            r3 = r3 > minRadius ? minRadius : r3;
            r0 = r0 < 0 ? 0 : r0;
            r1 = r1 < 0 ? 0 : r1;
            r2 = r2 < 0 ? 0 : r2;
            r3 = r3 < 0 ? 0 : r3;
            context.arc(left + r0, top + r0, r0, -Math.PI, -Math.PI / 2);
            context.arc(left + width - r1, top + r1, r1, -Math.PI / 2, 0);
            context.arc(left + width - r2, top + _height3 - r2, r2, 0, Math.PI / 2);
            context.arc(left + r3, top + _height3 - r3, r3, Math.PI / 2, Math.PI);
          } else {
            context.moveTo(startX, item.y);
            context.lineTo(startX + item.width - 2, item.y);
            context.lineTo(startX + item.width - 2, opts.height - opts.area[2]);
            context.lineTo(startX, opts.height - opts.area[2]);
            context.lineTo(startX, item.y);
            context.setLineWidth(1);
            context.setStrokeStyle(strokeColor);
          }
          context.setFillStyle(fillColor);
          context.closePath();
          context.fill();
        }
      }
      columnIndex += 1;
    }
    //绘制区域图数据
    if (eachSeries.type == 'area') {
      var _splitPointList = splitPoints(points, eachSeries);
      for (var _i20 = 0; _i20 < _splitPointList.length; _i20++) {
        var _points3 = _splitPointList[_i20];
        // 绘制区域数据
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setFillStyle(hexToRgb(eachSeries.color, 0.2));
        context.setLineWidth(2 * opts.pix);
        if (_points3.length > 1) {
          var firstPoint = _points3[0];
          var lastPoint = _points3[_points3.length - 1];
          context.moveTo(firstPoint.x, firstPoint.y);
          var startPoint = 0;
          if (eachSeries.style === 'curve') {
            for (var j = 0; j < _points3.length; j++) {
              var _item19 = _points3[j];
              if (startPoint == 0 && _item19.x > leftSpace) {
                context.moveTo(_item19.x, _item19.y);
                startPoint = 1;
              }
              if (j > 0 && _item19.x > leftSpace && _item19.x < rightSpace) {
                var ctrlPoint = createCurveControlPoints(_points3, j - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y, _item19.x, _item19.y);
              }
            };
          } else {
            for (var _j8 = 0; _j8 < _points3.length; _j8++) {
              var _item20 = _points3[_j8];
              if (startPoint == 0 && _item20.x > leftSpace) {
                context.moveTo(_item20.x, _item20.y);
                startPoint = 1;
              }
              if (_j8 > 0 && _item20.x > leftSpace && _item20.x < rightSpace) {
                context.lineTo(_item20.x, _item20.y);
              }
            };
          }
          context.lineTo(lastPoint.x, endY);
          context.lineTo(firstPoint.x, endY);
          context.lineTo(firstPoint.x, firstPoint.y);
        } else {
          var _item21 = _points3[0];
          context.moveTo(_item21.x - eachSpacing / 2, _item21.y);
          context.lineTo(_item21.x + eachSpacing / 2, _item21.y);
          context.lineTo(_item21.x + eachSpacing / 2, endY);
          context.lineTo(_item21.x - eachSpacing / 2, endY);
          context.moveTo(_item21.x - eachSpacing / 2, _item21.y);
        }
        context.closePath();
        context.fill();
      }
    }
    // 绘制折线数据图
    if (eachSeries.type == 'line') {
      var splitPointList = splitPoints(points, eachSeries);
      splitPointList.forEach(function (points, index) {
        if (eachSeries.lineType == 'dash') {
          var dashLength = eachSeries.dashLength ? eachSeries.dashLength : 8;
          dashLength *= opts.pix;
          context.setLineDash([dashLength, dashLength]);
        }
        context.beginPath();
        context.setStrokeStyle(eachSeries.color);
        context.setLineWidth(2 * opts.pix);
        if (points.length === 1) {
          context.moveTo(points[0].x, points[0].y);
          context.arc(points[0].x, points[0].y, 1, 0, 2 * Math.PI);
        } else {
          context.moveTo(points[0].x, points[0].y);
          var _startPoint2 = 0;
          if (eachSeries.style == 'curve') {
            for (var _j9 = 0; _j9 < points.length; _j9++) {
              var _item22 = points[_j9];
              if (_startPoint2 == 0 && _item22.x > leftSpace) {
                context.moveTo(_item22.x, _item22.y);
                _startPoint2 = 1;
              }
              if (_j9 > 0 && _item22.x > leftSpace && _item22.x < rightSpace) {
                var ctrlPoint = createCurveControlPoints(points, _j9 - 1);
                context.bezierCurveTo(ctrlPoint.ctrA.x, ctrlPoint.ctrA.y, ctrlPoint.ctrB.x, ctrlPoint.ctrB.y,
                _item22.x, _item22.y);
              }
            }
          } else {
            for (var _j10 = 0; _j10 < points.length; _j10++) {
              var _item23 = points[_j10];
              if (_startPoint2 == 0 && _item23.x > leftSpace) {
                context.moveTo(_item23.x, _item23.y);
                _startPoint2 = 1;
              }
              if (_j10 > 0 && _item23.x > leftSpace && _item23.x < rightSpace) {
                context.lineTo(_item23.x, _item23.y);
              }
            }
          }
          context.moveTo(points[0].x, points[0].y);
        }
        context.stroke();
        context.setLineDash([]);
      });
    }
    // 绘制点数据图
    if (eachSeries.type == 'point') {
      eachSeries.addPoint = true;
    }
    if (eachSeries.addPoint == true && eachSeries.type !== 'column') {
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });
  if (opts.dataLabel !== false && process === 1) {
    var columnIndex = 0;
    series.forEach(function (eachSeries, seriesIndex) {
      var ranges, minRange, maxRange;
      ranges = [].concat(opts.chartData.yAxisData.ranges[eachSeries.index]);
      minRange = ranges.pop();
      maxRange = ranges.shift();
      var data = eachSeries.data;
      var points = getDataPoints(data, minRange, maxRange, xAxisPoints, eachSpacing, opts, config, process);
      if (eachSeries.type !== 'column') {
        drawPointText(points, eachSeries, config, context, opts);
      } else {
        points = fixColumeData(points, eachSpacing, columnLength, columnIndex, config, opts);
        drawPointText(points, eachSeries, config, context, opts);
        columnIndex += 1;
      }
    });
  }
  context.restore();
  return {
    xAxisPoints: xAxisPoints,
    calPoints: calPoints,
    eachSpacing: eachSpacing };

}

function drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints) {
  var toolTipOption = opts.extra.tooltip || {};
  if (toolTipOption.horizentalLine && opts.tooltip && process === 1 && (opts.type == 'line' || opts.type == 'area' || opts.type == 'column' || opts.type == 'candle' || opts.type == 'mix')) {
    drawToolTipHorizentalLine(opts, config, context, eachSpacing, xAxisPoints);
  }
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0 && opts.enableScroll === true) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.tooltip && opts.tooltip.textList && opts.tooltip.textList.length && process === 1) {
    drawToolTip(opts.tooltip.textList, opts.tooltip.offset, opts, config, context, eachSpacing, xAxisPoints);
  }
  context.restore();

}

function drawXAxis(categories, opts, config, context) {

  var xAxisData = opts.chartData.xAxisData,
  xAxisPoints = xAxisData.xAxisPoints,
  startX = xAxisData.startX,
  endX = xAxisData.endX,
  eachSpacing = xAxisData.eachSpacing;
  var boundaryGap = 'center';
  if (opts.type == 'bar' || opts.type == 'line' || opts.type == 'area' || opts.type == 'scatter' || opts.type == 'bubble') {
    boundaryGap = opts.xAxis.boundaryGap;
  }
  var startY = opts.height - opts.area[2];
  var endY = opts.area[0];

  //绘制滚动条
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    var scrollY = opts.height - opts.area[2] + config.xAxisHeight;
    var scrollScreenWidth = endX - startX;
    var scrollTotalWidth = eachSpacing * (xAxisPoints.length - 1);
    var scrollWidth = scrollScreenWidth * scrollScreenWidth / scrollTotalWidth;
    var scrollLeft = 0;
    if (opts._scrollDistance_) {
      scrollLeft = -opts._scrollDistance_ * scrollScreenWidth / scrollTotalWidth;
    }
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pix);
    context.setStrokeStyle(opts.xAxis.scrollBackgroundColor || "#EFEBEF");
    context.moveTo(startX, scrollY);
    context.lineTo(endX, scrollY);
    context.stroke();
    context.closePath();
    context.beginPath();
    context.setLineCap('round');
    context.setLineWidth(6 * opts.pix);
    context.setStrokeStyle(opts.xAxis.scrollColor || "#A6A6A6");
    context.moveTo(startX + scrollLeft, scrollY);
    context.lineTo(startX + scrollLeft + scrollWidth, scrollY);
    context.stroke();
    context.closePath();
    context.setLineCap('butt');
  }
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }
  //绘制X轴刻度线
  if (opts.xAxis.calibration === true) {
    context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
    context.setLineCap('butt');
    context.setLineWidth(1 * opts.pix);
    xAxisPoints.forEach(function (item, index) {
      if (index > 0) {
        context.beginPath();
        context.moveTo(item - eachSpacing / 2, startY);
        context.lineTo(item - eachSpacing / 2, startY + 3 * opts.pix);
        context.closePath();
        context.stroke();
      }
    });
  }
  //绘制X轴网格
  if (opts.xAxis.disableGrid !== true) {
    context.setStrokeStyle(opts.xAxis.gridColor || "#cccccc");
    context.setLineCap('butt');
    context.setLineWidth(1 * opts.pix);
    if (opts.xAxis.gridType == 'dash') {
      context.setLineDash([opts.xAxis.dashLength * opts.pix, opts.xAxis.dashLength * opts.pix]);
    }
    opts.xAxis.gridEval = opts.xAxis.gridEval || 1;
    xAxisPoints.forEach(function (item, index) {
      if (index % opts.xAxis.gridEval == 0) {
        context.beginPath();
        context.moveTo(item, startY);
        context.lineTo(item, endY);
        context.stroke();
      }
    });
    context.setLineDash([]);
  }
  //绘制X轴文案
  if (opts.xAxis.disabled !== true) {
    // 对X轴列表做抽稀处理
    //默认全部显示X轴标签
    var maxXAxisListLength = categories.length;
    //如果设置了X轴单屏数量
    if (opts.xAxis.labelCount) {
      //如果设置X轴密度
      if (opts.xAxis.itemCount) {
        maxXAxisListLength = Math.ceil(categories.length / opts.xAxis.itemCount * opts.xAxis.labelCount);
      } else {
        maxXAxisListLength = opts.xAxis.labelCount;
      }
      maxXAxisListLength -= 1;
    }

    var ratio = Math.ceil(categories.length / maxXAxisListLength);

    var newCategories = [];
    var cgLength = categories.length;
    for (var i = 0; i < cgLength; i++) {
      if (i % ratio !== 0) {
        newCategories.push("");
      } else {
        newCategories.push(categories[i]);
      }
    }
    newCategories[cgLength - 1] = categories[cgLength - 1];
    var xAxisFontSize = opts.xAxis.fontSize * opts.pix || config.fontSize;
    if (config._xAxisTextAngle_ === 0) {
      newCategories.forEach(function (item, index) {
        var xitem = opts.xAxis.formatter ? opts.xAxis.formatter(item) : item;
        var offset = -measureText(String(xitem), xAxisFontSize, context) / 2;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        var scrollHeight = 0;
        if (opts.xAxis.scrollShow) {
          scrollHeight = 6 * opts.pix;
        }
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || opts.fontColor);
        context.fillText(String(xitem), xAxisPoints[index] + offset, startY + xAxisFontSize + (config.xAxisHeight - scrollHeight - xAxisFontSize) / 2);
        context.closePath();
        context.stroke();
      });
    } else {
      newCategories.forEach(function (item, index) {
        var xitem = opts.xAxis.formatter ? opts.xAxis.formatter(item) : item;
        context.save();
        context.beginPath();
        context.setFontSize(xAxisFontSize);
        context.setFillStyle(opts.xAxis.fontColor || opts.fontColor);
        var textWidth = measureText(String(xitem), xAxisFontSize, context);
        var offset = -textWidth;
        if (boundaryGap == 'center') {
          offset += eachSpacing / 2;
        }
        var _calRotateTranslate = calRotateTranslate(xAxisPoints[index] + eachSpacing / 2, startY + xAxisFontSize / 2 + 5, opts.height),
        transX = _calRotateTranslate.transX,
        transY = _calRotateTranslate.transY;

        context.rotate(-1 * config._xAxisTextAngle_);
        context.translate(transX, transY);
        context.fillText(String(xitem), xAxisPoints[index] + offset, startY + xAxisFontSize + 5);
        context.closePath();
        context.stroke();
        context.restore();
      });
    }
  }
  context.restore();
  //绘制X轴轴线
  if (opts.xAxis.axisLine) {
    context.beginPath();
    context.setStrokeStyle(opts.xAxis.axisLineColor);
    context.setLineWidth(1 * opts.pix);
    context.moveTo(startX, opts.height - opts.area[2]);
    context.lineTo(endX, opts.height - opts.area[2]);
    context.stroke();
  }
}

function drawYAxisGrid(categories, opts, config, context) {
  if (opts.yAxis.disableGrid === true) {
    return;
  }
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = spacingValid / opts.yAxis.splitNumber;
  var startX = opts.area[3];
  var xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
  xAxiseachSpacing = opts.chartData.xAxisData.eachSpacing;
  var TotalWidth = xAxiseachSpacing * (xAxisPoints.length - 1);
  var endX = startX + TotalWidth;
  var points = [];
  var startY = 1;
  if (opts.xAxis.axisLine === false) {
    startY = 0;
  }
  for (var i = startY; i < opts.yAxis.splitNumber + 1; i++) {
    points.push(opts.height - opts.area[2] - eachSpacing * i);
  }
  context.save();
  if (opts._scrollDistance_ && opts._scrollDistance_ !== 0) {
    context.translate(opts._scrollDistance_, 0);
  }
  if (opts.yAxis.gridType == 'dash') {
    context.setLineDash([opts.yAxis.dashLength * opts.pix, opts.yAxis.dashLength * opts.pix]);
  }
  context.setStrokeStyle(opts.yAxis.gridColor);
  context.setLineWidth(1 * opts.pix);
  points.forEach(function (item, index) {
    context.beginPath();
    context.moveTo(startX, item);
    context.lineTo(endX, item);
    context.stroke();
  });
  context.setLineDash([]);
  context.restore();
}

function drawYAxis(series, opts, config, context) {
  if (opts.yAxis.disabled === true) {
    return;
  }
  var spacingValid = opts.height - opts.area[0] - opts.area[2];
  var eachSpacing = spacingValid / opts.yAxis.splitNumber;
  var startX = opts.area[3];
  var endX = opts.width - opts.area[1];
  var endY = opts.height - opts.area[2];
  var fillEndY = endY + config.xAxisHeight;
  if (opts.xAxis.scrollShow) {
    fillEndY -= 3 * opts.pix;
  }
  if (opts.xAxis.rotateLabel) {
    fillEndY = opts.height - opts.area[2] + opts.fontSize * opts.pix / 2;
  }
  // set YAxis background
  context.beginPath();
  context.setFillStyle(opts.background);
  if (opts.enableScroll == true && opts.xAxis.scrollPosition && opts.xAxis.scrollPosition !== 'left') {
    context.fillRect(0, 0, startX, fillEndY);
  }
  if (opts.enableScroll == true && opts.xAxis.scrollPosition && opts.xAxis.scrollPosition !== 'right') {
    context.fillRect(endX, 0, opts.width, fillEndY);
  }
  context.closePath();
  context.stroke();

  var tStartLeft = opts.area[3];
  var tStartRight = opts.width - opts.area[1];
  var tStartCenter = opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2;
  if (opts.yAxis.data) {var _loop4 = function _loop4(
    i) {
      var yData = opts.yAxis.data[i];
      points = [];
      if (yData.type === 'categories') {
        for (var _i21 = 0; _i21 <= yData.categories.length; _i21++) {
          points.push(opts.area[0] + spacingValid / yData.categories.length / 2 + spacingValid / yData.categories.length * _i21);
        }
      } else {
        for (var _i22 = 0; _i22 <= opts.yAxis.splitNumber; _i22++) {
          points.push(opts.area[0] + eachSpacing * _i22);
        }
      }
      if (yData.disabled !== true) {
        var rangesFormat = opts.chartData.yAxisData.rangesFormat[i];
        var yAxisFontSize = yData.fontSize ? yData.fontSize * opts.pix : config.fontSize;
        var yAxisWidth = opts.chartData.yAxisData.yAxisWidth[i];
        var textAlign = yData.textAlign || "right";
        //画Y轴刻度及文案
        rangesFormat.forEach(function (item, index) {
          var pos = points[index] ? points[index] : endY;
          context.beginPath();
          context.setFontSize(yAxisFontSize);
          context.setLineWidth(1 * opts.pix);
          context.setStrokeStyle(yData.axisLineColor || '#cccccc');
          context.setFillStyle(yData.fontColor || opts.fontColor);
          var tmpstrat = 0;
          var gapwidth = 4 * opts.pix;
          if (yAxisWidth.position == 'left') {
            //画刻度线
            if (yData.calibration == true) {
              context.moveTo(tStartLeft, pos);
              context.lineTo(tStartLeft - 3 * opts.pix, pos);
              gapwidth += 3 * opts.pix;
            }
            //画文字
            switch (textAlign) {
              case "left":
                context.setTextAlign('left');
                tmpstrat = tStartLeft - yAxisWidth.width;
                break;
              case "right":
                context.setTextAlign('right');
                tmpstrat = tStartLeft - gapwidth;
                break;
              default:
                context.setTextAlign('center');
                tmpstrat = tStartLeft - yAxisWidth.width / 2;}

            context.fillText(String(item), tmpstrat, pos + yAxisFontSize / 2 - 3 * opts.pix);

          } else if (yAxisWidth.position == 'right') {
            //画刻度线
            if (yData.calibration == true) {
              context.moveTo(tStartRight, pos);
              context.lineTo(tStartRight + 3 * opts.pix, pos);
              gapwidth += 3 * opts.pix;
            }
            switch (textAlign) {
              case "left":
                context.setTextAlign('left');
                tmpstrat = tStartRight + gapwidth;
                break;
              case "right":
                context.setTextAlign('right');
                tmpstrat = tStartRight + yAxisWidth.width;
                break;
              default:
                context.setTextAlign('center');
                tmpstrat = tStartRight + yAxisWidth.width / 2;}

            context.fillText(String(item), tmpstrat, pos + yAxisFontSize / 2 - 3 * opts.pix);
          } else if (yAxisWidth.position == 'center') {
            //画刻度线
            if (yData.calibration == true) {
              context.moveTo(tStartCenter, pos);
              context.lineTo(tStartCenter - 3 * opts.pix, pos);
              gapwidth += 3 * opts.pix;
            }
            //画文字
            switch (textAlign) {
              case "left":
                context.setTextAlign('left');
                tmpstrat = tStartCenter - yAxisWidth.width;
                break;
              case "right":
                context.setTextAlign('right');
                tmpstrat = tStartCenter - gapwidth;
                break;
              default:
                context.setTextAlign('center');
                tmpstrat = tStartCenter - yAxisWidth.width / 2;}

            context.fillText(String(item), tmpstrat, pos + yAxisFontSize / 2 - 3 * opts.pix);
          }
          context.closePath();
          context.stroke();
          context.setTextAlign('left');
        });
        //画Y轴轴线
        if (yData.axisLine !== false) {
          context.beginPath();
          context.setStrokeStyle(yData.axisLineColor || '#cccccc');
          context.setLineWidth(1 * opts.pix);
          if (yAxisWidth.position == 'left') {
            context.moveTo(tStartLeft, opts.height - opts.area[2]);
            context.lineTo(tStartLeft, opts.area[0]);
          } else if (yAxisWidth.position == 'right') {
            context.moveTo(tStartRight, opts.height - opts.area[2]);
            context.lineTo(tStartRight, opts.area[0]);
          } else if (yAxisWidth.position == 'center') {
            context.moveTo(tStartCenter, opts.height - opts.area[2]);
            context.lineTo(tStartCenter, opts.area[0]);
          }
          context.stroke();
        }
        //画Y轴标题
        if (opts.yAxis.showTitle) {
          var titleFontSize = yData.titleFontSize * opts.pix || config.fontSize;
          var title = yData.title;
          context.beginPath();
          context.setFontSize(titleFontSize);
          context.setFillStyle(yData.titleFontColor || opts.fontColor);
          if (yAxisWidth.position == 'left') {
            context.fillText(title, tStartLeft - measureText(title, titleFontSize, context) / 2 + (yData.titleOffsetX || 0), opts.area[0] - (10 - (yData.titleOffsetY || 0)) * opts.pix);
          } else if (yAxisWidth.position == 'right') {
            context.fillText(title, tStartRight - measureText(title, titleFontSize, context) / 2 + (yData.titleOffsetX || 0), opts.area[0] - (10 - (yData.titleOffsetY || 0)) * opts.pix);
          } else if (yAxisWidth.position == 'center') {
            context.fillText(title, tStartCenter - measureText(title, titleFontSize, context) / 2 + (yData.titleOffsetX || 0), opts.area[0] - (10 - (yData.titleOffsetY || 0)) * opts.pix);
          }
          context.closePath();
          context.stroke();
        }
        if (yAxisWidth.position == 'left') {
          tStartLeft -= yAxisWidth.width + opts.yAxis.padding * opts.pix;
        } else {
          tStartRight += yAxisWidth.width + opts.yAxis.padding * opts.pix;
        }
      }};for (var i = 0; i < opts.yAxis.data.length; i++) {var points;_loop4(i);
    }
  }

}

function drawLegend(series, opts, config, context, chartData) {
  if (opts.legend.show === false) {
    return;
  }
  var legendData = chartData.legendData;
  var legendList = legendData.points;
  var legendArea = legendData.area;
  var padding = opts.legend.padding * opts.pix;
  var fontSize = opts.legend.fontSize * opts.pix;
  var shapeWidth = 15 * opts.pix;
  var shapeRight = 5 * opts.pix;
  var itemGap = opts.legend.itemGap * opts.pix;
  var lineHeight = Math.max(opts.legend.lineHeight * opts.pix, fontSize);
  //画背景及边框
  context.beginPath();
  context.setLineWidth(opts.legend.borderWidth * opts.pix);
  context.setStrokeStyle(opts.legend.borderColor);
  context.setFillStyle(opts.legend.backgroundColor);
  context.moveTo(legendArea.start.x, legendArea.start.y);
  context.rect(legendArea.start.x, legendArea.start.y, legendArea.width, legendArea.height);
  context.closePath();
  context.fill();
  context.stroke();
  legendList.forEach(function (itemList, listIndex) {
    var width = 0;
    var height = 0;
    width = legendData.widthArr[listIndex];
    height = legendData.heightArr[listIndex];
    var startX = 0;
    var startY = 0;
    if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
      switch (opts.legend.float) {
        case 'left':
          startX = legendArea.start.x + padding;
          break;
        case 'right':
          startX = legendArea.start.x + legendArea.width - width;
          break;
        default:
          startX = legendArea.start.x + (legendArea.width - width) / 2;}

      startY = legendArea.start.y + padding + listIndex * lineHeight;
    } else {
      if (listIndex == 0) {
        width = 0;
      } else {
        width = legendData.widthArr[listIndex - 1];
      }
      startX = legendArea.start.x + padding + width;
      startY = legendArea.start.y + padding + (legendArea.height - height) / 2;
    }
    context.setFontSize(config.fontSize);
    for (var i = 0; i < itemList.length; i++) {
      var item = itemList[i];
      item.area = [0, 0, 0, 0];
      item.area[0] = startX;
      item.area[1] = startY;
      item.area[3] = startY + lineHeight;
      context.beginPath();
      context.setLineWidth(1 * opts.pix);
      context.setStrokeStyle(item.show ? item.color : opts.legend.hiddenColor);
      context.setFillStyle(item.show ? item.color : opts.legend.hiddenColor);
      switch (item.legendShape) {
        case 'line':
          context.moveTo(startX, startY + 0.5 * lineHeight - 2 * opts.pix);
          context.fillRect(startX, startY + 0.5 * lineHeight - 2 * opts.pix, 15 * opts.pix, 4 * opts.pix);
          break;
        case 'triangle':
          context.moveTo(startX + 7.5 * opts.pix, startY + 0.5 * lineHeight - 5 * opts.pix);
          context.lineTo(startX + 2.5 * opts.pix, startY + 0.5 * lineHeight + 5 * opts.pix);
          context.lineTo(startX + 12.5 * opts.pix, startY + 0.5 * lineHeight + 5 * opts.pix);
          context.lineTo(startX + 7.5 * opts.pix, startY + 0.5 * lineHeight - 5 * opts.pix);
          break;
        case 'diamond':
          context.moveTo(startX + 7.5 * opts.pix, startY + 0.5 * lineHeight - 5 * opts.pix);
          context.lineTo(startX + 2.5 * opts.pix, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pix, startY + 0.5 * lineHeight + 5 * opts.pix);
          context.lineTo(startX + 12.5 * opts.pix, startY + 0.5 * lineHeight);
          context.lineTo(startX + 7.5 * opts.pix, startY + 0.5 * lineHeight - 5 * opts.pix);
          break;
        case 'circle':
          context.moveTo(startX + 7.5 * opts.pix, startY + 0.5 * lineHeight);
          context.arc(startX + 7.5 * opts.pix, startY + 0.5 * lineHeight, 5 * opts.pix, 0, 2 * Math.PI);
          break;
        case 'rect':
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pix);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pix, 15 * opts.pix, 10 * opts.pix);
          break;
        case 'square':
          context.moveTo(startX + 5 * opts.pix, startY + 0.5 * lineHeight - 5 * opts.pix);
          context.fillRect(startX + 5 * opts.pix, startY + 0.5 * lineHeight - 5 * opts.pix, 10 * opts.pix, 10 * opts.pix);
          break;
        case 'none':
          break;
        default:
          context.moveTo(startX, startY + 0.5 * lineHeight - 5 * opts.pix);
          context.fillRect(startX, startY + 0.5 * lineHeight - 5 * opts.pix, 15 * opts.pix, 10 * opts.pix);}

      context.closePath();
      context.fill();
      context.stroke();
      startX += shapeWidth + shapeRight;
      var fontTrans = 0.5 * lineHeight + 0.5 * fontSize - 2;
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.show ? opts.legend.fontColor : opts.legend.hiddenColor);
      context.fillText(item.name, startX, startY + fontTrans);
      context.closePath();
      context.stroke();
      if (opts.legend.position == 'top' || opts.legend.position == 'bottom') {
        startX += measureText(item.name, fontSize, context) + itemGap;
        item.area[2] = startX;
      } else {
        item.area[2] = startX + measureText(item.name, fontSize, context) + itemGap;;
        startX -= shapeWidth + shapeRight;
        startY += lineHeight;
      }
    }
  });
}

function drawPieDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var pieOption = assign({}, {
    activeOpacity: 0.5,
    activeRadius: 10,
    offsetAngle: 0,
    labelWidth: 15,
    ringWidth: 30,
    customRadius: 0,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    centerColor: '#FFFFFF',
    linearType: 'none',
    customColor: [] },
  opts.type == "pie" ? opts.extra.pie : opts.extra.ring);
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = pieOption.activeRadius * opts.pix;
  }

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);
  if (pieOption.customRadius > 0) {
    radius = pieOption.customRadius * opts.pix;
  }
  series = getPieDataPoints(series, radius, process);
  var activeRadius = pieOption.activeRadius * opts.pix;
  pieOption.customColor = fillCustomColor(pieOption.linearType, pieOption.customColor, series, config);
  series = series.map(function (eachSeries) {
    eachSeries._start_ += pieOption.offsetAngle * Math.PI / 180;
    return eachSeries;
  });
  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, pieOption.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_ + activeRadius, eachSeries._start_, eachSeries._start_ + 2 * eachSeries._proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(pieOption.borderWidth * opts.pix);
    context.lineJoin = "round";
    context.setStrokeStyle(pieOption.borderColor);
    var fillcolor = eachSeries.color;
    if (pieOption.linearType == 'custom') {
      var grd;
      if (context.createCircularGradient) {
        grd = context.createCircularGradient(centerPosition.x, centerPosition.y, eachSeries._radius_);
      } else {
        grd = context.createRadialGradient(centerPosition.x, centerPosition.y, 0, centerPosition.x, centerPosition.y, eachSeries._radius_);
      }
      grd.addColorStop(0, hexToRgb(pieOption.customColor[eachSeries.linearIndex], 1));
      grd.addColorStop(1, hexToRgb(eachSeries.color, 1));
      fillcolor = grd;
    }
    context.setFillStyle(fillcolor);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 * eachSeries._proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (pieOption.border == true) {
      context.stroke();
    }
  });
  if (opts.type === 'ring') {
    var innerPieWidth = radius * 0.6;
    if (typeof pieOption.ringWidth === 'number' && pieOption.ringWidth > 0) {
      innerPieWidth = Math.max(0, radius - pieOption.ringWidth * opts.pix);
    }
    context.beginPath();
    context.setFillStyle(pieOption.centerColor);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, innerPieWidth, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
  }
  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }
    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }
  if (process === 1 && opts.type === 'ring') {
    drawRingTitle(opts, config, context, centerPosition);
  }
  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawRoseDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var roseOption = assign({}, {
    type: 'area',
    activeOpacity: 0.5,
    activeRadius: 10,
    offsetAngle: 0,
    labelWidth: 15,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    linearType: 'none',
    customColor: [] },
  opts.extra.rose);
  if (config.pieChartLinePadding == 0) {
    config.pieChartLinePadding = roseOption.activeRadius * opts.pix;
  }
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding - config._pieTextMaxLength_, (opts.height - opts.area[0] - opts.area[2]) / 2 - config.pieChartLinePadding - config.pieChartTextPadding);
  var minRadius = roseOption.minRadius || radius * 0.5;
  series = getRoseDataPoints(series, roseOption.type, minRadius, radius, process);
  var activeRadius = roseOption.activeRadius * opts.pix;
  roseOption.customColor = fillCustomColor(roseOption.linearType, roseOption.customColor, series, config);
  series = series.map(function (eachSeries) {
    eachSeries._start_ += (roseOption.offsetAngle || 0) * Math.PI / 180;
    return eachSeries;
  });
  series.forEach(function (eachSeries, seriesIndex) {
    if (opts.tooltip) {
      if (opts.tooltip.index == seriesIndex) {
        context.beginPath();
        context.setFillStyle(hexToRgb(eachSeries.color, roseOption.activeOpacity || 0.5));
        context.moveTo(centerPosition.x, centerPosition.y);
        context.arc(centerPosition.x, centerPosition.y, activeRadius + eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 * eachSeries._rose_proportion_ * Math.PI);
        context.closePath();
        context.fill();
      }
    }
    context.beginPath();
    context.setLineWidth(roseOption.borderWidth * opts.pix);
    context.lineJoin = "round";
    context.setStrokeStyle(roseOption.borderColor);
    var fillcolor = eachSeries.color;
    if (roseOption.linearType == 'custom') {
      var grd;
      if (context.createCircularGradient) {
        grd = context.createCircularGradient(centerPosition.x, centerPosition.y, eachSeries._radius_);
      } else {
        grd = context.createRadialGradient(centerPosition.x, centerPosition.y, 0, centerPosition.x, centerPosition.y, eachSeries._radius_);
      }
      grd.addColorStop(0, hexToRgb(roseOption.customColor[eachSeries.linearIndex], 1));
      grd.addColorStop(1, hexToRgb(eachSeries.color, 1));
      fillcolor = grd;
    }
    context.setFillStyle(fillcolor);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.arc(centerPosition.x, centerPosition.y, eachSeries._radius_, eachSeries._start_, eachSeries._start_ + 2 * eachSeries._rose_proportion_ * Math.PI);
    context.closePath();
    context.fill();
    if (roseOption.border == true) {
      context.stroke();
    }
  });

  if (opts.dataLabel !== false && process === 1) {
    var valid = false;
    for (var i = 0, len = series.length; i < len; i++) {
      if (series[i].data > 0) {
        valid = true;
        break;
      }
    }
    if (valid) {
      drawPieText(series, opts, config, context, radius, centerPosition);
    }
  }
  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawArcbarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var arcbarOption = assign({}, {
    startAngle: 0.75,
    endAngle: 0.25,
    type: 'default',
    width: 12,
    gap: 2,
    linearType: 'none',
    customColor: [] },
  opts.extra.arcbar);
  series = getArcbarDataPoints(series, arcbarOption, process);
  var centerPosition;
  if (arcbarOption.centerX || arcbarOption.centerY) {
    centerPosition = {
      x: arcbarOption.centerX ? arcbarOption.centerX : opts.width / 2,
      y: arcbarOption.centerY ? arcbarOption.centerY : opts.height / 2 };

  } else {
    centerPosition = {
      x: opts.width / 2,
      y: opts.height / 2 };

  }
  var radius;
  if (arcbarOption.radius) {
    radius = arcbarOption.radius;
  } else {
    radius = Math.min(centerPosition.x, centerPosition.y);
    radius -= 5 * opts.pix;
    radius -= arcbarOption.width / 2;
  }
  arcbarOption.customColor = fillCustomColor(arcbarOption.linearType, arcbarOption.customColor, series, config);

  for (var i = 0; i < series.length; i++) {
    var eachSeries = series[i];
    //背景颜色
    context.setLineWidth(arcbarOption.width * opts.pix);
    context.setStrokeStyle(arcbarOption.backgroundColor || '#E9E9E9');
    context.setLineCap('round');
    context.beginPath();
    if (arcbarOption.type == 'default') {
      context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width * opts.pix + arcbarOption.gap * opts.pix) * i, arcbarOption.startAngle * Math.PI, arcbarOption.endAngle * Math.PI, false);
    } else {
      context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width * opts.pix + arcbarOption.gap * opts.pix) * i, 0, 2 * Math.PI, false);
    }
    context.stroke();
    //进度条
    var fillColor = eachSeries.color;
    if (arcbarOption.linearType == 'custom') {
      var grd = context.createLinearGradient(centerPosition.x - radius, centerPosition.y, centerPosition.x + radius, centerPosition.y);
      grd.addColorStop(1, hexToRgb(arcbarOption.customColor[eachSeries.linearIndex], 1));
      grd.addColorStop(0, hexToRgb(eachSeries.color, 1));
      fillColor = grd;
    }
    context.setLineWidth(arcbarOption.width * opts.pix);
    context.setStrokeStyle(fillColor);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, radius - (arcbarOption.width * opts.pix + arcbarOption.gap * opts.pix) * i, arcbarOption.startAngle * Math.PI, eachSeries._proportion_ * Math.PI, false);
    context.stroke();
  }
  drawRingTitle(opts, config, context, centerPosition);
  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawGaugeDataPoints(categories, series, opts, config, context) {
  var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var gaugeOption = assign({}, {
    type: 'default',
    startAngle: 0.75,
    endAngle: 0.25,
    width: 15,
    labelOffset: 13,
    splitLine: {
      fixRadius: 0,
      splitNumber: 10,
      width: 15,
      color: '#FFFFFF',
      childNumber: 5,
      childWidth: 5 },

    pointer: {
      width: 15,
      color: 'auto' } },

  opts.extra.gauge);
  if (gaugeOption.oldAngle == undefined) {
    gaugeOption.oldAngle = gaugeOption.startAngle;
  }
  if (gaugeOption.oldData == undefined) {
    gaugeOption.oldData = 0;
  }
  categories = getGaugeAxisPoints(categories, gaugeOption.startAngle, gaugeOption.endAngle);
  var centerPosition = {
    x: opts.width / 2,
    y: opts.height / 2 };

  var radius = Math.min(centerPosition.x, centerPosition.y);
  radius -= 5 * opts.pix;
  radius -= gaugeOption.width / 2;
  var innerRadius = radius - gaugeOption.width;
  var totalAngle = 0;
  //判断仪表盘的样式：default百度样式，progress新样式
  if (gaugeOption.type == 'progress') {
    //## 第一步画中心圆形背景和进度条背景
    //中心圆形背景
    var pieRadius = radius - gaugeOption.width * 3;
    context.beginPath();
    var gradient = context.createLinearGradient(centerPosition.x, centerPosition.y - pieRadius, centerPosition.x, centerPosition.y + pieRadius);
    //配置渐变填充（起点：中心点向上减半径；结束点中心点向下加半径）
    gradient.addColorStop('0', hexToRgb(series[0].color, 0.3));
    gradient.addColorStop('1.0', hexToRgb("#FFFFFF", 0.1));
    context.setFillStyle(gradient);
    context.arc(centerPosition.x, centerPosition.y, pieRadius, 0, 2 * Math.PI, false);
    context.fill();
    //画进度条背景
    context.setLineWidth(gaugeOption.width);
    context.setStrokeStyle(hexToRgb(series[0].color, 0.3));
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, innerRadius, gaugeOption.startAngle * Math.PI, gaugeOption.endAngle * Math.PI, false);
    context.stroke();
    //## 第二步画刻度线
    totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    var splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
    var childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
    var startX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
    var endX = -radius - gaugeOption.width - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);
    var len = gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1;
    var proc = series[0].data * process;
    for (var i = 0; i < len; i++) {
      context.beginPath();
      //刻度线随进度变色
      if (proc > i / len) {
        context.setStrokeStyle(hexToRgb(series[0].color, 1));
      } else {
        context.setStrokeStyle(hexToRgb(series[0].color, 0.3));
      }
      context.setLineWidth(3 * opts.pix);
      context.moveTo(startX, 0);
      context.lineTo(endX, 0);
      context.stroke();
      context.rotate(childAngle * Math.PI);
    }
    context.restore();
    //## 第三步画进度条
    series = getArcbarDataPoints(series, gaugeOption, process);
    context.setLineWidth(gaugeOption.width);
    context.setStrokeStyle(series[0].color);
    context.setLineCap('round');
    context.beginPath();
    context.arc(centerPosition.x, centerPosition.y, innerRadius, gaugeOption.startAngle * Math.PI, series[0]._proportion_ * Math.PI, false);
    context.stroke();
    //## 第四步画指针
    var pointerRadius = radius - gaugeOption.width * 2.5;
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((series[0]._proportion_ - 1) * Math.PI);
    context.beginPath();
    context.setLineWidth(gaugeOption.width / 3);
    var gradient3 = context.createLinearGradient(0, -pointerRadius * 0.6, 0, pointerRadius * 0.6);
    gradient3.addColorStop('0', hexToRgb('#FFFFFF', 0));
    gradient3.addColorStop('0.5', hexToRgb(series[0].color, 1));
    gradient3.addColorStop('1.0', hexToRgb('#FFFFFF', 0));
    context.setStrokeStyle(gradient3);
    context.arc(0, 0, pointerRadius, 0.85 * Math.PI, 1.15 * Math.PI, false);
    context.stroke();
    context.beginPath();
    context.setLineWidth(1);
    context.setStrokeStyle(series[0].color);
    context.setFillStyle(series[0].color);
    context.moveTo(-pointerRadius - gaugeOption.width / 3 / 2, -4);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2 - 4, 0);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2, 4);
    context.lineTo(-pointerRadius - gaugeOption.width / 3 / 2, -4);
    context.stroke();
    context.fill();
    context.restore();
    //default百度样式
  } else {
    //画背景
    context.setLineWidth(gaugeOption.width);
    context.setLineCap('butt');
    for (var _i23 = 0; _i23 < categories.length; _i23++) {
      var eachCategories = categories[_i23];
      context.beginPath();
      context.setStrokeStyle(eachCategories.color);
      context.arc(centerPosition.x, centerPosition.y, radius, eachCategories._startAngle_ * Math.PI, eachCategories._endAngle_ * Math.PI, false);
      context.stroke();
    }
    context.save();
    //画刻度线
    totalAngle = gaugeOption.startAngle - gaugeOption.endAngle + 1;
    var _splitAngle = totalAngle / gaugeOption.splitLine.splitNumber;
    var _childAngle = totalAngle / gaugeOption.splitLine.splitNumber / gaugeOption.splitLine.childNumber;
    var _startX2 = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius;
    var _endX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.width;
    var childendX = -radius - gaugeOption.width * 0.5 - gaugeOption.splitLine.fixRadius + gaugeOption.splitLine.childWidth;
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);
    for (var _i24 = 0; _i24 < gaugeOption.splitLine.splitNumber + 1; _i24++) {
      context.beginPath();
      context.setStrokeStyle(gaugeOption.splitLine.color);
      context.setLineWidth(2 * opts.pix);
      context.moveTo(_startX2, 0);
      context.lineTo(_endX, 0);
      context.stroke();
      context.rotate(_splitAngle * Math.PI);
    }
    context.restore();
    context.save();
    context.translate(centerPosition.x, centerPosition.y);
    context.rotate((gaugeOption.startAngle - 1) * Math.PI);
    for (var _i25 = 0; _i25 < gaugeOption.splitLine.splitNumber * gaugeOption.splitLine.childNumber + 1; _i25++) {
      context.beginPath();
      context.setStrokeStyle(gaugeOption.splitLine.color);
      context.setLineWidth(1 * opts.pix);
      context.moveTo(_startX2, 0);
      context.lineTo(childendX, 0);
      context.stroke();
      context.rotate(_childAngle * Math.PI);
    }
    context.restore();
    //画指针
    series = getGaugeDataPoints(series, categories, gaugeOption, process);
    for (var _i26 = 0; _i26 < series.length; _i26++) {
      var eachSeries = series[_i26];
      context.save();
      context.translate(centerPosition.x, centerPosition.y);
      context.rotate((eachSeries._proportion_ - 1) * Math.PI);
      context.beginPath();
      context.setFillStyle(eachSeries.color);
      context.moveTo(gaugeOption.pointer.width, 0);
      context.lineTo(0, -gaugeOption.pointer.width / 2);
      context.lineTo(-innerRadius, 0);
      context.lineTo(0, gaugeOption.pointer.width / 2);
      context.lineTo(gaugeOption.pointer.width, 0);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFillStyle('#FFFFFF');
      context.arc(0, 0, gaugeOption.pointer.width / 6, 0, 2 * Math.PI, false);
      context.fill();
      context.restore();
    }
    if (opts.dataLabel !== false) {
      drawGaugeLabel(gaugeOption, radius, centerPosition, opts, config, context);
    }
  }
  //画仪表盘标题，副标题
  drawRingTitle(opts, config, context, centerPosition);
  if (process === 1 && opts.type === 'gauge') {
    opts.extra.gauge.oldAngle = series[0]._proportion_;
    opts.extra.gauge.oldData = series[0].data;
  }
  return {
    center: centerPosition,
    radius: radius,
    innerRadius: innerRadius,
    categories: categories,
    totalAngle: totalAngle };

}

function drawRadarDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var radarOption = assign({}, {
    gridColor: '#cccccc',
    gridType: 'radar',
    opacity: 0.2,
    gridCount: 3,
    border: false,
    borderWidth: 2 },
  opts.extra.radar);
  var coordinateAngle = getRadarCoordinateSeries(opts.categories.length);
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.area[0] + (opts.height - opts.area[0] - opts.area[2]) / 2 };

  var xr = (opts.width - opts.area[1] - opts.area[3]) / 2;
  var yr = (opts.height - opts.area[0] - opts.area[2]) / 2;
  var radius = Math.min(xr - (getMaxTextListLength(opts.categories, config.fontSize, context) + config.radarLabelTextMargin), yr - config.radarLabelTextMargin);
  radius -= config.radarLabelTextMargin * opts.pix;
  // 画分割线
  context.beginPath();
  context.setLineWidth(1 * opts.pix);
  context.setStrokeStyle(radarOption.gridColor);
  coordinateAngle.forEach(function (angle) {
    var pos = convertCoordinateOrigin(radius * Math.cos(angle), radius * Math.sin(angle), centerPosition);
    context.moveTo(centerPosition.x, centerPosition.y);
    context.lineTo(pos.x, pos.y);
  });
  context.stroke();
  context.closePath();

  // 画背景网格
  var _loop = function _loop(i) {
    var startPos = {};
    context.beginPath();
    context.setLineWidth(1 * opts.pix);
    context.setStrokeStyle(radarOption.gridColor);
    if (radarOption.gridType == 'radar') {
      coordinateAngle.forEach(function (angle, index) {
        var pos = convertCoordinateOrigin(radius / radarOption.gridCount * i * Math.cos(angle), radius /
        radarOption.gridCount * i * Math.sin(angle), centerPosition);
        if (index === 0) {
          startPos = pos;
          context.moveTo(pos.x, pos.y);
        } else {
          context.lineTo(pos.x, pos.y);
        }
      });
      context.lineTo(startPos.x, startPos.y);
    } else {
      var pos = convertCoordinateOrigin(radius / radarOption.gridCount * i * Math.cos(1.5), radius / radarOption.gridCount * i * Math.sin(1.5), centerPosition);
      context.arc(centerPosition.x, centerPosition.y, centerPosition.y - pos.y, 0, 2 * Math.PI, false);
    }
    context.stroke();
    context.closePath();
  };
  for (var i = 1; i <= radarOption.gridCount; i++) {
    _loop(i);
  }
  var radarDataPoints = getRadarDataPoints(coordinateAngle, centerPosition, radius, series, opts, process);
  radarDataPoints.forEach(function (eachSeries, seriesIndex) {
    // 绘制区域数据
    context.beginPath();
    context.setLineWidth(radarOption.borderWidth * opts.pix);
    context.setStrokeStyle(eachSeries.color);
    context.setFillStyle(hexToRgb(eachSeries.color, radarOption.opacity));
    eachSeries.data.forEach(function (item, index) {
      if (index === 0) {
        context.moveTo(item.position.x, item.position.y);
      } else {
        context.lineTo(item.position.x, item.position.y);
      }
    });
    context.closePath();
    context.fill();
    if (radarOption.border === true) {
      context.stroke();
    }
    context.closePath();
    if (opts.dataPointShape !== false) {
      var points = eachSeries.data.map(function (item) {
        return item.position;
      });
      drawPointShape(points, eachSeries.color, eachSeries.pointShape, context, opts);
    }
  });
  // draw label text
  drawRadarLabel(coordinateAngle, radius, centerPosition, opts, config, context);

  // draw dataLabel
  if (opts.dataLabel !== false && process === 1) {
    radarDataPoints.forEach(function (eachSeries, seriesIndex) {
      context.beginPath();
      var fontSize = eachSeries.textSize * opts.pix || config.fontSize;
      context.setFontSize(fontSize);
      context.setFillStyle(eachSeries.textColor || opts.fontColor);
      eachSeries.data.forEach(function (item, index) {
        //如果是中心点垂直的上下点位
        if (Math.abs(item.position.x - centerPosition.x) < 2) {
          //如果在上面
          if (item.position.y < centerPosition.y) {
            context.setTextAlign('center');
            context.fillText(item.value, item.position.x, item.position.y - 4);
          } else {
            context.setTextAlign('center');
            context.fillText(item.value, item.position.x, item.position.y + fontSize + 2);
          }
        } else {
          //如果在左侧
          if (item.position.x < centerPosition.x) {
            context.setTextAlign('right');
            context.fillText(item.value, item.position.x - 4, item.position.y + fontSize / 2 - 2);
          } else {
            context.setTextAlign('left');
            context.fillText(item.value, item.position.x + 4, item.position.y + fontSize / 2 - 2);
          }
        }
      });
      context.closePath();
      context.stroke();
    });
    context.setTextAlign('left');
  }

  return {
    center: centerPosition,
    radius: radius,
    angleList: coordinateAngle };

}

function normalInt(min, max, iter) {
  iter = iter == 0 ? 1 : iter;
  var arr = [];
  for (var i = 0; i < iter; i++) {
    arr[i] = Math.random();
  };
  return Math.floor(arr.reduce(function (i, j) {
    return i + j;
  }) / iter * (max - min)) + min;
};

function collisionNew(area, points, width, height) {
  var isIn = false;
  for (var i = 0; i < points.length; i++) {
    if (points[i].area) {
      if (area[3] < points[i].area[1] || area[0] > points[i].area[2] || area[1] > points[i].area[3] || area[2] < points[i].area[0]) {
        if (area[0] < 0 || area[1] < 0 || area[2] > width || area[3] > height) {
          isIn = true;
          break;
        } else {
          isIn = false;
        }
      } else {
        isIn = true;
        break;
      }
    }
  }
  return isIn;
};

function getBoundingBox(data) {
  var bounds = {},coords;
  bounds.xMin = 180;
  bounds.xMax = 0;
  bounds.yMin = 90;
  bounds.yMax = 0;
  for (var i = 0; i < data.length; i++) {
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        var longitude = coords[j][0];
        var latitude = coords[j][1];
        var point = {
          x: longitude,
          y: latitude };

        bounds.xMin = bounds.xMin < point.x ? bounds.xMin : point.x;
        bounds.xMax = bounds.xMax > point.x ? bounds.xMax : point.x;
        bounds.yMin = bounds.yMin < point.y ? bounds.yMin : point.y;
        bounds.yMax = bounds.yMax > point.y ? bounds.yMax : point.y;
      }
    }
  }
  return bounds;
}

function coordinateToPoint(latitude, longitude, bounds, scale, xoffset, yoffset) {
  return {
    x: (longitude - bounds.xMin) * scale + xoffset,
    y: (bounds.yMax - latitude) * scale + yoffset };

}

function pointToCoordinate(pointY, pointX, bounds, scale, xoffset, yoffset) {
  return {
    x: (pointX - xoffset) / scale + bounds.xMin,
    y: bounds.yMax - (pointY - yoffset) / scale };

}

function isRayIntersectsSegment(poi, s_poi, e_poi) {
  if (s_poi[1] == e_poi[1]) {
    return false;
  }
  if (s_poi[1] > poi[1] && e_poi[1] > poi[1]) {
    return false;
  }
  if (s_poi[1] < poi[1] && e_poi[1] < poi[1]) {
    return false;
  }
  if (s_poi[1] == poi[1] && e_poi[1] > poi[1]) {
    return false;
  }
  if (e_poi[1] == poi[1] && s_poi[1] > poi[1]) {
    return false;
  }
  if (s_poi[0] < poi[0] && e_poi[1] < poi[1]) {
    return false;
  }
  var xseg = e_poi[0] - (e_poi[0] - s_poi[0]) * (e_poi[1] - poi[1]) / (e_poi[1] - s_poi[1]);
  if (xseg < poi[0]) {
    return false;
  } else {
    return true;
  }
}

function isPoiWithinPoly(poi, poly, mercator) {
  var sinsc = 0;
  for (var i = 0; i < poly.length; i++) {
    var epoly = poly[i][0];
    if (poly.length == 1) {
      epoly = poly[i][0];
    }
    for (var j = 0; j < epoly.length - 1; j++) {
      var s_poi = epoly[j];
      var e_poi = epoly[j + 1];
      if (mercator) {
        s_poi = lonlat2mercator(epoly[j][0], epoly[j][1]);
        e_poi = lonlat2mercator(epoly[j + 1][0], epoly[j + 1][1]);
      }
      if (isRayIntersectsSegment(poi, s_poi, e_poi)) {
        sinsc += 1;
      }
    }
  }
  if (sinsc % 2 == 1) {
    return true;
  } else {
    return false;
  }
}


function drawMapDataPoints(series, opts, config, context) {
  var mapOption = assign({}, {
    border: true,
    mercator: false,
    borderWidth: 1,
    borderColor: '#666666',
    fillOpacity: 0.6,
    activeBorderColor: '#f04864',
    activeFillColor: '#facc14',
    activeFillOpacity: 1 },
  opts.extra.map);
  var coords, point;
  var data = series;
  var bounds = getBoundingBox(data);
  if (mapOption.mercator) {
    var max = lonlat2mercator(bounds.xMax, bounds.yMax);
    var min = lonlat2mercator(bounds.xMin, bounds.yMin);
    bounds.xMax = max[0];
    bounds.yMax = max[1];
    bounds.xMin = min[0];
    bounds.yMin = min[1];
  }
  var xScale = opts.width / Math.abs(bounds.xMax - bounds.xMin);
  var yScale = opts.height / Math.abs(bounds.yMax - bounds.yMin);
  var scale = xScale < yScale ? xScale : yScale;
  var xoffset = opts.width / 2 - Math.abs(bounds.xMax - bounds.xMin) / 2 * scale;
  var yoffset = opts.height / 2 - Math.abs(bounds.yMax - bounds.yMin) / 2 * scale;
  for (var i = 0; i < data.length; i++) {
    context.beginPath();
    context.setLineWidth(mapOption.borderWidth * opts.pix);
    context.setStrokeStyle(mapOption.borderColor);
    context.setFillStyle(hexToRgb(series[i].color, mapOption.fillOpacity));
    if (opts.tooltip) {
      if (opts.tooltip.index == i) {
        context.setStrokeStyle(mapOption.activeBorderColor);
        context.setFillStyle(hexToRgb(mapOption.activeFillColor, mapOption.activeFillOpacity));
      }
    }
    var coorda = data[i].geometry.coordinates;
    for (var k = 0; k < coorda.length; k++) {
      coords = coorda[k];
      if (coords.length == 1) {
        coords = coords[0];
      }
      for (var j = 0; j < coords.length; j++) {
        var gaosi = Array(2);
        if (mapOption.mercator) {
          gaosi = lonlat2mercator(coords[j][0], coords[j][1]);
        } else {
          gaosi = coords[j];
        }
        point = coordinateToPoint(gaosi[1], gaosi[0], bounds, scale, xoffset, yoffset);
        if (j === 0) {
          context.beginPath();
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      }
      context.fill();
      if (mapOption.border == true) {
        context.stroke();
      }
    }
    if (opts.dataLabel == true) {
      var centerPoint = data[i].properties.centroid;
      if (centerPoint) {
        if (mapOption.mercator) {
          centerPoint = lonlat2mercator(data[i].properties.centroid[0], data[i].properties.centroid[1]);
        }
        point = coordinateToPoint(centerPoint[1], centerPoint[0], bounds, scale, xoffset, yoffset);
        var fontSize = data[i].textSize * opts.pix || config.fontSize;
        var text = data[i].properties.name;
        context.beginPath();
        context.setFontSize(fontSize);
        context.setFillStyle(data[i].textColor || opts.fontColor);
        context.fillText(text, point.x - measureText(text, fontSize, context) / 2, point.y + fontSize / 2);
        context.closePath();
        context.stroke();
      }
    }
  }
  opts.chartData.mapData = {
    bounds: bounds,
    scale: scale,
    xoffset: xoffset,
    yoffset: yoffset,
    mercator: mapOption.mercator };

  drawToolTipBridge(opts, config, context, 1);
  context.draw();
}

function getWordCloudPoint(opts, type, context) {
  var points = opts.series;
  switch (type) {
    case 'normal':
      for (var i = 0; i < points.length; i++) {
        var text = points[i].name;
        var tHeight = points[i].textSize * opts.pix;
        var tWidth = measureText(text, tHeight, context);
        var x = void 0,y = void 0;
        var area = void 0;
        var breaknum = 0;
        while (true) {
          breaknum++;
          x = normalInt(-opts.width / 2, opts.width / 2, 5) - tWidth / 2;
          y = normalInt(-opts.height / 2, opts.height / 2, 5) + tHeight / 2;
          area = [x - 5 + opts.width / 2, y - 5 - tHeight + opts.height / 2, x + tWidth + 5 + opts.width / 2, y + 5 +
          opts.height / 2];

          var isCollision = collisionNew(area, points, opts.width, opts.height);
          if (!isCollision) break;
          if (breaknum == 1000) {
            area = [-100, -100, -100, -100];
            break;
          }
        };
        points[i].area = area;
      }
      break;
    case 'vertical':var
      Spin = function Spin() {
        //获取均匀随机值，是否旋转，旋转的概率为（1-0.5）
        if (Math.random() > 0.7) {
          return true;
        } else {
          return false;
        };
      };;
      for (var _i27 = 0; _i27 < points.length; _i27++) {
        var _text = points[_i27].name;
        var _tHeight = points[_i27].textSize * opts.pix;
        var _tWidth = measureText(_text, _tHeight, context);
        var isSpin = Spin();
        var _x = void 0,_y = void 0,_area = void 0,areav = void 0;
        var _breaknum = 0;
        while (true) {
          _breaknum++;
          var _isCollision = void 0;
          if (isSpin) {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_y - 5 - _tWidth + opts.width / 2, -_x - 5 + opts.height / 2, _y + 5 + opts.width / 2, -_x + _tHeight + 5 + opts.height / 2];
            areav = [opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) - 5, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) - 5, opts.width - (opts.width / 2 - opts.height / 2) - (-_x + _tHeight + 5 + opts.height / 2) + _tHeight, opts.height / 2 - opts.width / 2 + (_y - 5 - _tWidth + opts.width / 2) + _tWidth + 5];
            _isCollision = collisionNew(areav, points, opts.height, opts.width);
          } else {
            _x = normalInt(-opts.width / 2, opts.width / 2, 5) - _tWidth / 2;
            _y = normalInt(-opts.height / 2, opts.height / 2, 5) + _tHeight / 2;
            _area = [_x - 5 + opts.width / 2, _y - 5 - _tHeight + opts.height / 2, _x + _tWidth + 5 + opts.width / 2, _y + 5 + opts.height / 2];
            _isCollision = collisionNew(_area, points, opts.width, opts.height);
          }
          if (!_isCollision) break;
          if (_breaknum == 1000) {
            _area = [-1000, -1000, -1000, -1000];
            break;
          }
        };
        if (isSpin) {
          points[_i27].area = areav;
          points[_i27].areav = _area;
        } else {
          points[_i27].area = _area;
        }
        points[_i27].rotate = isSpin;
      };
      break;}

  return points;
}


function drawWordCloudDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var wordOption = assign({}, {
    type: 'normal',
    autoColors: true },
  opts.extra.word);
  if (!opts.chartData.wordCloudData) {
    opts.chartData.wordCloudData = getWordCloudPoint(opts, wordOption.type, context);
  }
  context.beginPath();
  context.setFillStyle(opts.background);
  context.rect(0, 0, opts.width, opts.height);
  context.fill();
  context.save();
  var points = opts.chartData.wordCloudData;
  context.translate(opts.width / 2, opts.height / 2);
  for (var i = 0; i < points.length; i++) {
    context.save();
    if (points[i].rotate) {
      context.rotate(90 * Math.PI / 180);
    }
    var text = points[i].name;
    var tHeight = points[i].textSize * opts.pix;
    var tWidth = measureText(text, tHeight, context);
    context.beginPath();
    context.setStrokeStyle(points[i].color);
    context.setFillStyle(points[i].color);
    context.setFontSize(tHeight);
    if (points[i].rotate) {
      if (points[i].areav[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].areav[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].areav[1] + 5 + tHeight - opts.height / 2) * process);
        }
      }
    } else {
      if (points[i].area[0] > 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.strokeText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          } else {
            context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
          }
        } else {
          context.fillText(text, (points[i].area[0] + 5 - opts.width / 2) * process - tWidth * (1 - process) / 2, (points[i].area[1] + 5 + tHeight - opts.height / 2) * process);
        }
      }
    }
    context.stroke();
    context.restore();
  }
  context.restore();
}

function drawFunnelDataPoints(series, opts, config, context) {
  var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var funnelOption = assign({}, {
    type: 'funnel',
    activeWidth: 10,
    activeOpacity: 0.3,
    border: false,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    fillOpacity: 1,
    labelAlign: 'right',
    linearType: 'none',
    customColor: [] },
  opts.extra.funnel);
  var eachSpacing = (opts.height - opts.area[0] - opts.area[2]) / series.length;
  var centerPosition = {
    x: opts.area[3] + (opts.width - opts.area[1] - opts.area[3]) / 2,
    y: opts.height - opts.area[2] };

  var activeWidth = funnelOption.activeWidth * opts.pix;
  var radius = Math.min((opts.width - opts.area[1] - opts.area[3]) / 2 - activeWidth, (opts.height - opts.area[0] - opts.area[2]) / 2 - activeWidth);
  series = getFunnelDataPoints(series, radius, funnelOption.type, eachSpacing, process);
  context.save();
  context.translate(centerPosition.x, centerPosition.y);
  funnelOption.customColor = fillCustomColor(funnelOption.linearType, funnelOption.customColor, series, config);
  if (funnelOption.type == 'pyramid') {
    for (var i = 0; i < series.length; i++) {
      if (i == series.length - 1) {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.beginPath();
            context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
            context.moveTo(-activeWidth, -eachSpacing);
            context.lineTo(-series[i].radius - activeWidth, 0);
            context.lineTo(series[i].radius + activeWidth, 0);
            context.lineTo(activeWidth, -eachSpacing);
            context.lineTo(-activeWidth, -eachSpacing);
            context.closePath();
            context.fill();
          }
        }
        series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing * (i + 1), centerPosition.x + series[i].radius, centerPosition.y - eachSpacing * i];
        context.beginPath();
        context.setLineWidth(funnelOption.borderWidth * opts.pix);
        context.setStrokeStyle(funnelOption.borderColor);
        var fillColor = hexToRgb(series[i].color, funnelOption.fillOpacity);
        if (funnelOption.linearType == 'custom') {
          var grd = context.createLinearGradient(series[i].radius, -eachSpacing, -series[i].radius, -eachSpacing);
          grd.addColorStop(0, hexToRgb(series[i].color, funnelOption.fillOpacity));
          grd.addColorStop(0.5, hexToRgb(funnelOption.customColor[series[i].linearIndex], funnelOption.fillOpacity));
          grd.addColorStop(1, hexToRgb(series[i].color, funnelOption.fillOpacity));
          fillColor = grd;
        }
        context.setFillStyle(fillColor);
        context.moveTo(0, -eachSpacing);
        context.lineTo(-series[i].radius, 0);
        context.lineTo(series[i].radius, 0);
        context.lineTo(0, -eachSpacing);
        context.closePath();
        context.fill();
        if (funnelOption.border == true) {
          context.stroke();
        }
      } else {
        if (opts.tooltip) {
          if (opts.tooltip.index == i) {
            context.beginPath();
            context.setFillStyle(hexToRgb(series[i].color, funnelOption.activeOpacity));
            context.moveTo(0, 0);
            context.lineTo(-series[i].radius - activeWidth, 0);
            context.lineTo(-series[i + 1].radius - activeWidth, -eachSpacing);
            context.lineTo(series[i + 1].radius + activeWidth, -eachSpacing);
            context.lineTo(series[i].radius + activeWidth, 0);
            context.lineTo(0, 0);
            context.closePath();
            context.fill();
          }
        }
        series[i].funnelArea = [centerPosition.x - series[i].radius, centerPosition.y - eachSpacing * (i + 1), centerPosition.x + series[i].radius, centerPosition.y - eachSpacing * i];
        context.beginPath();
        context.setLineWidth(funnelOption.borderWidth * opts.pix);
        context.setStrokeStyle(funnelOption.borderColor);
        var fillColor = hexToRgb(series[i].color, funnelOption.fillOpacity);
        if (funnelOption.linearType == 'custom') {
          var grd = context.createLinearGradient(series[i].radius, -eachSpacing, -series[i].radius, -eachSpacing);
          grd.addColorStop(0, hexToRgb(series[i].color, funnelOption.fillOpacity));
          grd.addColorStop(0.5, hexToRgb(funnelOption.customColor[series[i].linearIndex], funnelOption.fillOpacity));
          grd.addColorStop(1, hexToRgb(series[i].color, funnelOption.fillOpacity));
          fillColor = grd;
        }
        context.setFillStyle(fillColor);
        context.moveTo(0, 0);
        context.lineTo(-series[i].radius, 0);
        context.lineTo(-series[i + 1].radius, -eachSpacing);
        context.lineTo(series[i + 1].radius, -eachSpacing);
        context.lineTo(series[i].radius, 0);
        context.lineTo(0, 0);
        context.closePath();
        context.fill();
        if (funnelOption.border == true) {
          context.stroke();
        }
      }
      context.translate(0, -eachSpacing);
    }
  } else {
    for (var _i28 = 0; _i28 < series.length; _i28++) {
      if (_i28 == 0) {
        if (opts.tooltip) {
          if (opts.tooltip.index == _i28) {
            context.beginPath();
            context.setFillStyle(hexToRgb(series[_i28].color, funnelOption.activeOpacity));
            context.moveTo(-activeWidth, 0);
            context.lineTo(-series[_i28].radius - activeWidth, -eachSpacing);
            context.lineTo(series[_i28].radius + activeWidth, -eachSpacing);
            context.lineTo(activeWidth, 0);
            context.lineTo(-activeWidth, 0);
            context.closePath();
            context.fill();
          }
        }
        series[_i28].funnelArea = [centerPosition.x - series[_i28].radius, centerPosition.y - eachSpacing, centerPosition.x + series[_i28].radius, centerPosition.y];
        context.beginPath();
        context.setLineWidth(funnelOption.borderWidth * opts.pix);
        context.setStrokeStyle(funnelOption.borderColor);
        var fillColor = hexToRgb(series[_i28].color, funnelOption.fillOpacity);
        if (funnelOption.linearType == 'custom') {
          var grd = context.createLinearGradient(series[_i28].radius, -eachSpacing, -series[_i28].radius, -eachSpacing);
          grd.addColorStop(0, hexToRgb(series[_i28].color, funnelOption.fillOpacity));
          grd.addColorStop(0.5, hexToRgb(funnelOption.customColor[series[_i28].linearIndex], funnelOption.fillOpacity));
          grd.addColorStop(1, hexToRgb(series[_i28].color, funnelOption.fillOpacity));
          fillColor = grd;
        }
        context.setFillStyle(fillColor);
        context.moveTo(0, 0);
        context.lineTo(-series[_i28].radius, -eachSpacing);
        context.lineTo(series[_i28].radius, -eachSpacing);
        context.lineTo(0, 0);
        context.closePath();
        context.fill();
        if (funnelOption.border == true) {
          context.stroke();
        }
      } else {
        if (opts.tooltip) {
          if (opts.tooltip.index == _i28) {
            context.beginPath();
            context.setFillStyle(hexToRgb(series[_i28].color, funnelOption.activeOpacity));
            context.moveTo(0, 0);
            context.lineTo(-series[_i28 - 1].radius - activeWidth, 0);
            context.lineTo(-series[_i28].radius - activeWidth, -eachSpacing);
            context.lineTo(series[_i28].radius + activeWidth, -eachSpacing);
            context.lineTo(series[_i28 - 1].radius + activeWidth, 0);
            context.lineTo(0, 0);
            context.closePath();
            context.fill();
          }
        }
        series[_i28].funnelArea = [centerPosition.x - series[_i28].radius, centerPosition.y - eachSpacing * (_i28 + 1), centerPosition.x + series[_i28].radius, centerPosition.y - eachSpacing * _i28];
        context.beginPath();
        context.setLineWidth(funnelOption.borderWidth * opts.pix);
        context.setStrokeStyle(funnelOption.borderColor);
        var fillColor = hexToRgb(series[_i28].color, funnelOption.fillOpacity);
        if (funnelOption.linearType == 'custom') {
          var grd = context.createLinearGradient(series[_i28].radius, -eachSpacing, -series[_i28].radius, -eachSpacing);
          grd.addColorStop(0, hexToRgb(series[_i28].color, funnelOption.fillOpacity));
          grd.addColorStop(0.5, hexToRgb(funnelOption.customColor[series[_i28].linearIndex], funnelOption.fillOpacity));
          grd.addColorStop(1, hexToRgb(series[_i28].color, funnelOption.fillOpacity));
          fillColor = grd;
        }
        context.setFillStyle(fillColor);
        context.moveTo(0, 0);
        context.lineTo(-series[_i28 - 1].radius, 0);
        context.lineTo(-series[_i28].radius, -eachSpacing);
        context.lineTo(series[_i28].radius, -eachSpacing);
        context.lineTo(series[_i28 - 1].radius, 0);
        context.lineTo(0, 0);
        context.closePath();
        context.fill();
        if (funnelOption.border == true) {
          context.stroke();
        }
      }
      context.translate(0, -eachSpacing);
    }
  }

  context.restore();
  if (opts.dataLabel !== false && process === 1) {
    drawFunnelText(series, opts, context, eachSpacing, funnelOption.labelAlign, activeWidth, centerPosition);
  }
  return {
    center: centerPosition,
    radius: radius,
    series: series };

}

function drawFunnelText(series, opts, context, eachSpacing, labelAlign, activeWidth, centerPosition) {
  for (var i = 0; i < series.length; i++) {
    var item = series[i];
    var startX = void 0,endX = void 0,startY = void 0,fontSize = void 0;
    var text = item.formatter ? item.formatter(item, i, series) : util.toFixed(item._proportion_ * 100) + '%';
    if (labelAlign == 'right') {
      if (opts.extra.funnel.type === 'pyramid') {
        if (i == series.length - 1) {
          startX = (item.funnelArea[2] + centerPosition.x) / 2;
        } else {
          startX = (item.funnelArea[2] + series[i + 1].funnelArea[2]) / 2;
        }
      } else {
        if (i == 0) {
          startX = (item.funnelArea[2] + centerPosition.x) / 2;
        } else {
          startX = (item.funnelArea[2] + series[i - 1].funnelArea[2]) / 2;
        }
      }
      endX = startX + activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize * opts.pix || opts.fontSize * opts.pix;
      context.setLineWidth(1 * opts.pix);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || opts.fontColor);
      context.fillText(text, endX + 5, startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    } else {
      if (opts.extra.funnel.type === 'pyramid') {
        if (i == series.length - 1) {
          startX = (item.funnelArea[0] + centerPosition.x) / 2;
        } else {
          startX = (item.funnelArea[0] + series[i + 1].funnelArea[0]) / 2;
        }
      } else {
        if (i == 0) {
          startX = (item.funnelArea[0] + centerPosition.x) / 2;
        } else {
          startX = (item.funnelArea[0] + series[i - 1].funnelArea[0]) / 2;
        }
      }
      endX = startX - activeWidth * 2;
      startY = item.funnelArea[1] + eachSpacing / 2;
      fontSize = item.textSize * opts.pix || opts.fontSize * opts.pix;
      context.setLineWidth(1 * opts.pix);
      context.setStrokeStyle(item.color);
      context.setFillStyle(item.color);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, startY);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.moveTo(endX, startY);
      context.arc(endX, startY, 2, 0, 2 * Math.PI);
      context.closePath();
      context.fill();
      context.beginPath();
      context.setFontSize(fontSize);
      context.setFillStyle(item.textColor || opts.fontColor);
      context.fillText(text, endX - 5 - measureText(text, fontSize, context), startY + fontSize / 2 - 2);
      context.closePath();
      context.stroke();
      context.closePath();
    }

  }
}

function drawCanvas(opts, context) {
  context.draw();
}

var Timing = {
  easeIn: function easeIn(pos) {
    return Math.pow(pos, 3);
  },
  easeOut: function easeOut(pos) {
    return Math.pow(pos - 1, 3) + 1;
  },
  easeInOut: function easeInOut(pos) {
    if ((pos /= 0.5) < 1) {
      return 0.5 * Math.pow(pos, 3);
    } else {
      return 0.5 * (Math.pow(pos - 2, 3) + 2);
    }
  },
  linear: function linear(pos) {
    return pos;
  } };


function Animation(opts) {
  this.isStop = false;
  opts.duration = typeof opts.duration === 'undefined' ? 1000 : opts.duration;
  opts.timing = opts.timing || 'easeInOut';
  var delay = 17;
  function createAnimationFrame() {
    if (typeof setTimeout !== 'undefined') {
      return function (step, delay) {
        setTimeout(function () {
          var timeStamp = +new Date();
          step(timeStamp);
        }, delay);
      };
    } else if (typeof requestAnimationFrame !== 'undefined') {
      return requestAnimationFrame;
    } else {
      return function (step) {
        step(null);
      };
    }
  };
  var animationFrame = createAnimationFrame();
  var startTimeStamp = null;
  var _step = function step(timestamp) {
    if (timestamp === null || this.isStop === true) {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
      return;
    }
    if (startTimeStamp === null) {
      startTimeStamp = timestamp;
    }
    if (timestamp - startTimeStamp < opts.duration) {
      var process = (timestamp - startTimeStamp) / opts.duration;
      var timingFunction = Timing[opts.timing];
      process = timingFunction(process);
      opts.onProcess && opts.onProcess(process);
      animationFrame(_step, delay);
    } else {
      opts.onProcess && opts.onProcess(1);
      opts.onAnimationFinish && opts.onAnimationFinish();
    }
  };
  _step = _step.bind(this);
  animationFrame(_step, delay);
}

Animation.prototype.stop = function () {
  this.isStop = true;
};

function drawCharts(type, opts, config, context) {
  var _this = this;
  var series = opts.series;
  //兼容ECharts饼图类数据格式
  if (type === 'pie' || type === 'ring' || type === 'rose' || type === 'funnel') {
    series = fixPieSeries(series, opts, config);
  }
  var categories = opts.categories;
  series = fillSeries(series, opts, config);
  var duration = opts.animation ? opts.duration : 0;
  _this.animationInstance && _this.animationInstance.stop();
  var seriesMA = null;
  if (type == 'candle') {
    var average = assign({}, opts.extra.candle.average);
    if (average.show) {
      seriesMA = calCandleMA(average.day, average.name, average.color, series[0].data);
      seriesMA = fillSeries(seriesMA, opts, config);
      opts.seriesMA = seriesMA;
    } else if (opts.seriesMA) {
      seriesMA = opts.seriesMA = fillSeries(opts.seriesMA, opts, config);
    } else {
      seriesMA = series;
    }
  } else {
    seriesMA = series;
  }
  /* 过滤掉show=false的series */
  opts._series_ = series = filterSeries(series);
  //重新计算图表区域
  opts.area = new Array(4);
  //复位绘图区域
  for (var j = 0; j < 4; j++) {
    opts.area[j] = opts.padding[j] * opts.pix;
  }
  //通过计算三大区域：图例、X轴、Y轴的大小，确定绘图区域
  var _calLegendData = calLegendData(seriesMA, opts, config, opts.chartData, context),
  legendHeight = _calLegendData.area.wholeHeight,
  legendWidth = _calLegendData.area.wholeWidth;

  switch (opts.legend.position) {
    case 'top':
      opts.area[0] += legendHeight;
      break;
    case 'bottom':
      opts.area[2] += legendHeight;
      break;
    case 'left':
      opts.area[3] += legendWidth;
      break;
    case 'right':
      opts.area[1] += legendWidth;
      break;}


  var _calYAxisData = {},
  yAxisWidth = 0;
  if (opts.type === 'line' || opts.type === 'column' || opts.type === 'area' || opts.type === 'mix' || opts.type === 'candle' || opts.type === 'scatter' || opts.type === 'bubble' || opts.type === 'bar') {
    _calYAxisData = calYAxisData(series, opts, config, context);
    yAxisWidth = _calYAxisData.yAxisWidth;
    //如果显示Y轴标题
    if (opts.yAxis.showTitle) {
      var maxTitleHeight = 0;
      for (var i = 0; i < opts.yAxis.data.length; i++) {
        maxTitleHeight = Math.max(maxTitleHeight, opts.yAxis.data[i].titleFontSize ? opts.yAxis.data[i].titleFontSize * opts.pix : config.fontSize);
      }
      opts.area[0] += maxTitleHeight;
    }
    var rightIndex = 0,
    leftIndex = 0;
    //计算主绘图区域左右位置
    for (var _i29 = 0; _i29 < yAxisWidth.length; _i29++) {
      if (yAxisWidth[_i29].position == 'left') {
        if (leftIndex > 0) {
          opts.area[3] += yAxisWidth[_i29].width + opts.yAxis.padding * opts.pix;
        } else {
          opts.area[3] += yAxisWidth[_i29].width;
        }
        leftIndex += 1;
      } else if (yAxisWidth[_i29].position == 'right') {
        if (rightIndex > 0) {
          opts.area[1] += yAxisWidth[_i29].width + opts.yAxis.padding * opts.pix;
        } else {
          opts.area[1] += yAxisWidth[_i29].width;
        }
        rightIndex += 1;
      }
    }
  } else {
    config.yAxisWidth = yAxisWidth;
  }
  opts.chartData.yAxisData = _calYAxisData;

  if (opts.categories && opts.categories.length && opts.type !== 'radar' && opts.type !== 'gauge' && opts.type !== 'bar') {
    opts.chartData.xAxisData = getXAxisPoints(opts.categories, opts, config);
    var _calCategoriesData = calCategoriesData(opts.categories, opts, config, opts.chartData.xAxisData.eachSpacing, context),
    xAxisHeight = _calCategoriesData.xAxisHeight,
    angle = _calCategoriesData.angle;
    config.xAxisHeight = xAxisHeight;
    config._xAxisTextAngle_ = angle;
    opts.area[2] += xAxisHeight;
    opts.chartData.categoriesData = _calCategoriesData;
  } else {
    if (opts.type === 'line' || opts.type === 'area' || opts.type === 'scatter' || opts.type === 'bubble' || opts.type === 'bar') {
      opts.chartData.xAxisData = calXAxisData(series, opts, config, context);
      categories = opts.chartData.xAxisData.rangesFormat;
      var _calCategoriesData2 = calCategoriesData(categories, opts, config, opts.chartData.xAxisData.eachSpacing, context),
      _xAxisHeight = _calCategoriesData2.xAxisHeight,
      _angle = _calCategoriesData2.angle;
      config.xAxisHeight = _xAxisHeight;
      config._xAxisTextAngle_ = _angle;
      opts.area[2] += _xAxisHeight;
      opts.chartData.categoriesData = _calCategoriesData2;
    } else {
      opts.chartData.xAxisData = {
        xAxisPoints: [] };

    }
  }
  //计算右对齐偏移距离
  if (opts.enableScroll && opts.xAxis.scrollAlign == 'right' && opts._scrollDistance_ === undefined) {
    var offsetLeft = 0,
    xAxisPoints = opts.chartData.xAxisData.xAxisPoints,
    startX = opts.chartData.xAxisData.startX,
    endX = opts.chartData.xAxisData.endX,
    eachSpacing = opts.chartData.xAxisData.eachSpacing;
    var totalWidth = eachSpacing * (xAxisPoints.length - 1);
    var screenWidth = endX - startX;
    offsetLeft = screenWidth - totalWidth;
    _this.scrollOption = {
      currentOffset: offsetLeft,
      startTouchX: offsetLeft,
      distance: 0,
      lastMoveTime: 0 };

    opts._scrollDistance_ = offsetLeft;
  }

  if (type === 'pie' || type === 'ring' || type === 'rose') {
    config._pieTextMaxLength_ = opts.dataLabel === false ? 0 : getPieTextMaxLength(seriesMA, config, context, opts);
  }
  switch (type) {
    case 'word':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawWordCloudDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'map':
      context.clearRect(0, 0, opts.width, opts.height);
      drawMapDataPoints(series, opts, config, context);
      break;
    case 'funnel':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.funnelData = drawFunnelDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'line':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawLineDataPoints = drawLineDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawLineDataPoints.xAxisPoints,
          calPoints = _drawLineDataPoints.calPoints,
          eachSpacing = _drawLineDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'scatter':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawScatterDataPoints = drawScatterDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawScatterDataPoints.xAxisPoints,
          calPoints = _drawScatterDataPoints.calPoints,
          eachSpacing = _drawScatterDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'bubble':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawBubbleDataPoints = drawBubbleDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawBubbleDataPoints.xAxisPoints,
          calPoints = _drawBubbleDataPoints.calPoints,
          eachSpacing = _drawBubbleDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'mix':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawMixDataPoints = drawMixDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawMixDataPoints.xAxisPoints,
          calPoints = _drawMixDataPoints.calPoints,
          eachSpacing = _drawMixDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'column':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawColumnDataPoints = drawColumnDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawColumnDataPoints.xAxisPoints,
          calPoints = _drawColumnDataPoints.calPoints,
          eachSpacing = _drawColumnDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'bar':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawXAxis(categories, opts, config, context);
          var _drawBarDataPoints = drawBarDataPoints(series, opts, config, context, process),
          yAxisPoints = _drawBarDataPoints.yAxisPoints,
          calPoints = _drawBarDataPoints.calPoints,
          eachSpacing = _drawBarDataPoints.eachSpacing;
          opts.chartData.yAxisPoints = yAxisPoints;
          opts.chartData.xAxisPoints = opts.chartData.xAxisData.xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, yAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'area':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawAreaDataPoints = drawAreaDataPoints(series, opts, config, context, process),
          xAxisPoints = _drawAreaDataPoints.xAxisPoints,
          calPoints = _drawAreaDataPoints.calPoints,
          eachSpacing = _drawAreaDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'ring':
    case 'pie':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawPieDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'rose':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.pieData = drawRoseDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'radar':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.radarData = drawRadarDataPoints(series, opts, config, context, process);
          drawLegend(opts.series, opts, config, context, opts.chartData);
          drawToolTipBridge(opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'arcbar':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.arcbarData = drawArcbarDataPoints(series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'gauge':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          opts.chartData.gaugeData = drawGaugeDataPoints(categories, series, opts, config, context, process);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;
    case 'candle':
      this.animationInstance = new Animation({
        timing: opts.timing,
        duration: duration,
        onProcess: function onProcess(process) {
          context.clearRect(0, 0, opts.width, opts.height);
          if (opts.rotate) {
            contextRotate(context, opts);
          }
          drawYAxisGrid(categories, opts, config, context);
          drawXAxis(categories, opts, config, context);
          var _drawCandleDataPoints = drawCandleDataPoints(series, seriesMA, opts, config, context, process),
          xAxisPoints = _drawCandleDataPoints.xAxisPoints,
          calPoints = _drawCandleDataPoints.calPoints,
          eachSpacing = _drawCandleDataPoints.eachSpacing;
          opts.chartData.xAxisPoints = xAxisPoints;
          opts.chartData.calPoints = calPoints;
          opts.chartData.eachSpacing = eachSpacing;
          drawYAxis(series, opts, config, context);
          if (opts.enableMarkLine !== false && process === 1) {
            drawMarkLine(opts, config, context);
          }
          if (seriesMA) {
            drawLegend(seriesMA, opts, config, context, opts.chartData);
          } else {
            drawLegend(opts.series, opts, config, context, opts.chartData);
          }
          drawToolTipBridge(opts, config, context, process, eachSpacing, xAxisPoints);
          drawCanvas(opts, context);
        },
        onAnimationFinish: function onAnimationFinish() {
          _this.uevent.trigger('renderComplete');
        } });

      break;}

}

function uChartsEvent() {
  this.events = {};
}

uChartsEvent.prototype.addEventListener = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

uChartsEvent.prototype.delEventListener = function (type) {
  this.events[type] = [];
};

uChartsEvent.prototype.trigger = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args[0];
  var params = args.slice(1);
  if (!!this.events[type]) {
    this.events[type].forEach(function (listener) {
      try {
        listener.apply(null, params);
      } catch (e) {
        //console.log('[uCharts] '+e);
      }
    });
  }
};

var uCharts = function uCharts(opts) {
  opts.pix = opts.pixelRatio ? opts.pixelRatio : 1;
  opts.fontSize = opts.fontSize ? opts.fontSize : 13;
  opts.fontColor = opts.fontColor ? opts.fontColor : config.fontColor;
  if (opts.background == "" || opts.background == "none") {
    opts.background = "#FFFFFF";
  }
  opts.title = assign({}, opts.title);
  opts.subtitle = assign({}, opts.subtitle);
  opts.duration = opts.duration ? opts.duration : 1000;
  opts.yAxis = assign({}, {
    data: [],
    showTitle: false,
    disabled: false,
    disableGrid: false,
    splitNumber: 5,
    gridType: 'solid',
    dashLength: 4 * opts.pix,
    gridColor: '#cccccc',
    padding: 10,
    fontColor: '#666666' },
  opts.yAxis);
  opts.xAxis = assign({}, {
    rotateLabel: false,
    disabled: false,
    disableGrid: false,
    splitNumber: 5,
    calibration: false,
    gridType: 'solid',
    dashLength: 4,
    scrollAlign: 'left',
    boundaryGap: 'center',
    axisLine: true,
    axisLineColor: '#cccccc' },
  opts.xAxis);
  opts.xAxis.scrollPosition = opts.xAxis.scrollAlign;
  opts.legend = assign({}, {
    show: true,
    position: 'bottom',
    float: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    padding: 5,
    margin: 5,
    itemGap: 10,
    fontSize: opts.fontSize,
    lineHeight: opts.fontSize,
    fontColor: opts.fontColor,
    formatter: {},
    hiddenColor: '#CECECE' },
  opts.legend);
  opts.extra = assign({}, opts.extra);
  opts.rotate = opts.rotate ? true : false;
  opts.animation = opts.animation ? true : false;
  opts.rotate = opts.rotate ? true : false;
  opts.canvas2d = opts.canvas2d ? true : false;

  var config$$1 = JSON.parse(JSON.stringify(config));
  config$$1.color = opts.color ? opts.color : config$$1.color;
  config$$1.yAxisTitleWidth = opts.yAxis.disabled !== true && opts.yAxis.title ? config$$1.yAxisTitleWidth : 0;
  if (opts.type == 'pie') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.pie.labelWidth * opts.pix || config$$1.pieChartLinePadding * opts.pix;
  }
  if (opts.type == 'ring') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.ring.labelWidth * opts.pix || config$$1.pieChartLinePadding * opts.pix;
  }
  if (opts.type == 'rose') {
    config$$1.pieChartLinePadding = opts.dataLabel === false ? 0 : opts.extra.rose.labelWidth * opts.pix || config$$1.pieChartLinePadding * opts.pix;
  }
  config$$1.pieChartTextPadding = opts.dataLabel === false ? 0 : config$$1.pieChartTextPadding * opts.pix;
  config$$1.yAxisSplit = opts.yAxis.splitNumber ? opts.yAxis.splitNumber : config.yAxisSplit;

  //屏幕旋转
  config$$1.rotate = opts.rotate;
  if (opts.rotate) {
    var tempWidth = opts.width;
    var tempHeight = opts.height;
    opts.width = tempHeight;
    opts.height = tempWidth;
  }

  //适配高分屏
  opts.padding = opts.padding ? opts.padding : config$$1.padding;
  config$$1.yAxisWidth = config.yAxisWidth * opts.pix;
  config$$1.xAxisHeight = config.xAxisHeight * opts.pix;
  if (opts.enableScroll && opts.xAxis.scrollShow) {
    config$$1.xAxisHeight += 6 * opts.pix;
  }
  config$$1.xAxisLineHeight = config.xAxisLineHeight * opts.pix;
  config$$1.fontSize = opts.fontSize * opts.pix;
  config$$1.titleFontSize = config.titleFontSize * opts.pix;
  config$$1.subtitleFontSize = config.subtitleFontSize * opts.pix;
  config$$1.toolTipPadding = config.toolTipPadding * opts.pix;
  config$$1.toolTipLineHeight = config.toolTipLineHeight * opts.pix;
  config$$1.columePadding = config.columePadding * opts.pix;
  //this.context = opts.context ? opts.context : uni.createCanvasContext(opts.canvasId, opts.$this);
  //v2.0版本后需要自行获取context并传入opts进行初始化，这么做是为了确保uCharts可以跨更多端使用，并保证了自定义组件this实例不被循环嵌套。如果您觉得不便请取消上面注释，采用v1.0版本的方式使用，对此给您带来的不便敬请谅解！
  if (!opts.context) {
    throw new Error('[uCharts] 未获取到context！注意：v2.0版本后，需要自行获取canvas的绘图上下文并传入opts.context！');
  }
  this.context = opts.context;
  if (!this.context.setTextAlign) {
    this.context.setStrokeStyle = function (e) {
      return this.strokeStyle = e;
    };
    this.context.setLineWidth = function (e) {
      return this.lineWidth = e;
    };
    this.context.setLineCap = function (e) {
      return this.lineCap = e;
    };
    this.context.setFontSize = function (e) {
      return this.font = e + "px sans-serif";
    };
    this.context.setFillStyle = function (e) {
      return this.fillStyle = e;
    };
    this.context.setTextAlign = function (e) {
      return this.textAlign = e;
    };
    this.context.draw = function () {};
  }
  //兼容NVUEsetLineDash
  if (!this.context.setLineDash) {
    this.context.setLineDash = function (e) {};
  }
  opts.chartData = {};
  this.uevent = new uChartsEvent();
  this.scrollOption = {
    currentOffset: 0,
    startTouchX: 0,
    distance: 0,
    lastMoveTime: 0 };

  this.opts = opts;
  this.config = config$$1;
  drawCharts.call(this, opts.type, opts, config$$1, this.context);
};

uCharts.prototype.updateData = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.opts = assign({}, this.opts, data);
  this.opts.updateData = true;
  var scrollPosition = data.scrollPosition || 'current';
  switch (scrollPosition) {
    case 'current':
      //this.opts._scrollDistance_ = this.scrollOption.currentOffset;
      break;
    case 'left':
      this.opts._scrollDistance_ = 0;
      this.scrollOption = {
        currentOffset: 0,
        startTouchX: 0,
        distance: 0,
        lastMoveTime: 0 };

      break;
    case 'right':
      var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config, this.context),yAxisWidth = _calYAxisData.yAxisWidth;
      this.config.yAxisWidth = yAxisWidth;
      var offsetLeft = 0;
      var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),xAxisPoints = _getXAxisPoints0.xAxisPoints,
      startX = _getXAxisPoints0.startX,
      endX = _getXAxisPoints0.endX,
      eachSpacing = _getXAxisPoints0.eachSpacing;
      var totalWidth = eachSpacing * (xAxisPoints.length - 1);
      var screenWidth = endX - startX;
      offsetLeft = screenWidth - totalWidth;
      this.scrollOption = {
        currentOffset: offsetLeft,
        startTouchX: offsetLeft,
        distance: 0,
        lastMoveTime: 0 };

      this.opts._scrollDistance_ = offsetLeft;
      break;}

  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

uCharts.prototype.zoom = function () {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.opts.xAxis.itemCount;
  if (this.opts.enableScroll !== true) {
    console.log('[uCharts] 请启用滚动条后使用');
    return;
  }
  //当前屏幕中间点
  var centerPoint = Math.round(Math.abs(this.scrollOption.currentOffset) / this.opts.chartData.eachSpacing) + Math.round(this.opts.xAxis.itemCount / 2);
  this.opts.animation = false;
  this.opts.xAxis.itemCount = val.itemCount;
  //重新计算x轴偏移距离
  var _calYAxisData = calYAxisData(this.opts.series, this.opts, this.config, this.context),
  yAxisWidth = _calYAxisData.yAxisWidth;
  this.config.yAxisWidth = yAxisWidth;
  var offsetLeft = 0;
  var _getXAxisPoints0 = getXAxisPoints(this.opts.categories, this.opts, this.config),
  xAxisPoints = _getXAxisPoints0.xAxisPoints,
  startX = _getXAxisPoints0.startX,
  endX = _getXAxisPoints0.endX,
  eachSpacing = _getXAxisPoints0.eachSpacing;
  var centerLeft = eachSpacing * centerPoint;
  var screenWidth = endX - startX;
  var MaxLeft = screenWidth - eachSpacing * (xAxisPoints.length - 1);
  offsetLeft = screenWidth / 2 - centerLeft;
  if (offsetLeft > 0) {
    offsetLeft = 0;
  }
  if (offsetLeft < MaxLeft) {
    offsetLeft = MaxLeft;
  }
  this.scrollOption = {
    currentOffset: offsetLeft,
    startTouchX: offsetLeft,
    distance: 0,
    lastMoveTime: 0 };

  this.opts._scrollDistance_ = offsetLeft;
  drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
};

uCharts.prototype.stopAnimation = function () {
  this.animationInstance && this.animationInstance.stop();
};

uCharts.prototype.addEventListener = function (type, listener) {
  this.uevent.addEventListener(type, listener);
};

uCharts.prototype.delEventListener = function (type) {
  this.uevent.delEventListener(type);
};

uCharts.prototype.getCurrentDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    if (this.opts.type === 'pie' || this.opts.type === 'ring') {
      return findPieChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.pieData, this.opts);
    } else if (this.opts.type === 'rose') {
      return findRoseChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.pieData, this.opts);
    } else if (this.opts.type === 'radar') {
      return findRadarChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.radarData, this.opts.categories.length);
    } else if (this.opts.type === 'funnel') {
      return findFunnelChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.funnelData);
    } else if (this.opts.type === 'map') {
      return findMapChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts);
    } else if (this.opts.type === 'word') {
      return findWordChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.wordCloudData);
    } else if (this.opts.type === 'bar') {
      return findBarChartCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.calPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset));
    } else {
      return findCurrentIndex({
        x: _touches$.x,
        y: _touches$.y },
      this.opts.chartData.calPoints, this.opts, this.config, Math.abs(this.scrollOption.currentOffset));
    }
  }
  return -1;
};

uCharts.prototype.getLegendDataIndex = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    return findLegendIndex({
      x: _touches$.x,
      y: _touches$.y },
    this.opts.chartData.legendData);
  }
  return -1;
};

uCharts.prototype.touchLegend = function (e) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches) {
    var _touches$ = getTouches(touches, this.opts, e);
    var index = this.getLegendDataIndex(e);
    if (index >= 0) {
      if (this.opts.type == 'candle') {
        this.opts.seriesMA[index].show = !this.opts.seriesMA[index].show;
      } else {
        this.opts.series[index].show = !this.opts.series[index].show;
      }
      this.opts.animation = option.animation ? true : false;
      this.opts._scrollDistance_ = this.scrollOption.currentOffset;
      drawCharts.call(this, this.opts.type, this.opts, this.config, this.context);
    }
  }

};

uCharts.prototype.showToolTip = function (e) {var _this2 = this;
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (!touches) {
    console.log("[uCharts] 未获取到event坐标信息");
  }
  var _touches$ = getTouches(touches, this.opts, e);
  var currentOffset = this.scrollOption.currentOffset;
  var opts = assign({}, this.opts, {
    _scrollDistance_: currentOffset,
    animation: false });

  if (this.opts.type === 'line' || this.opts.type === 'area' || this.opts.type === 'column' || this.opts.type === 'scatter' || this.opts.type === 'bubble') {
    var current = this.getCurrentDataIndex(e);
    var index = option.index == undefined ? current.index : option.index;
    if (index > -1 || index.length > 0) {
      var seriesData = getSeriesDataItem(this.opts.series, index, current.group);
      if (seriesData.length !== 0) {
        var _getToolTipData = getToolTipData(seriesData, this.opts, index, current.group, this.opts.categories, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: option.textList !== undefined ? option.textList : textList,
          offset: option.offset !== undefined ? option.offset : offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'bar') {
    var current = this.getCurrentDataIndex(e);
    var index = option.index == undefined ? current.index : option.index;
    if (index > -1 || index.length > 0) {
      var seriesData = getSeriesDataItem(this.opts.series, index, current.group);
      if (seriesData.length !== 0) {
        var _getToolTipData = getToolTipData(seriesData, this.opts, index, current.group, this.opts.categories, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.x = _touches$.x;
        opts.tooltip = {
          textList: option.textList !== undefined ? option.textList : textList,
          offset: option.offset !== undefined ? option.offset : offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'mix') {
    var current = this.getCurrentDataIndex(e);
    var index = option.index == undefined ? current.index : option.index;
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getMixToolTipData = getMixToolTipData(seriesData, this.opts, index, this.opts.categories, option),
        textList = _getMixToolTipData.textList,
        offset = _getMixToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: option.textList ? option.textList : textList,
          offset: option.offset !== undefined ? option.offset : offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'candle') {
    var current = this.getCurrentDataIndex(e);
    var index = option.index == undefined ? current.index : option.index;
    if (index > -1) {
      var currentOffset = this.scrollOption.currentOffset;
      var opts = assign({}, this.opts, {
        _scrollDistance_: currentOffset,
        animation: false });

      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var _getToolTipData = getCandleToolTipData(this.opts.series[0].data, seriesData, this.opts, index, this.opts.categories, this.opts.extra.candle, option),
        textList = _getToolTipData.textList,
        offset = _getToolTipData.offset;
        offset.y = _touches$.y;
        opts.tooltip = {
          textList: option.textList ? option.textList : textList,
          offset: option.offset !== undefined ? option.offset : offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'pie' || this.opts.type === 'ring' || this.opts.type === 'rose' || this.opts.type === 'funnel') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var opts = assign({}, this.opts, { animation: false });
      var seriesData = assign({}, opts._series_[index]);
      var textList = [{
        text: option.formatter ? option.formatter(seriesData, undefined, index, opts) : seriesData.name + ': ' + seriesData.data,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: option.textList ? option.textList : textList,
        offset: option.offset !== undefined ? option.offset : offset,
        option: option,
        index: index };

    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'map') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var opts = assign({}, this.opts, { animation: false });
      var seriesData = assign({}, this.opts.series[index]);
      seriesData.name = seriesData.properties.name;
      var textList = [{
        text: option.formatter ? option.formatter(seriesData, undefined, index, this.opts) : seriesData.name,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: option.textList ? option.textList : textList,
        offset: option.offset !== undefined ? option.offset : offset,
        option: option,
        index: index };

    }
    opts.updateData = false;
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'word') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var opts = assign({}, this.opts, { animation: false });
      var seriesData = assign({}, this.opts.series[index]);
      var textList = [{
        text: option.formatter ? option.formatter(seriesData, undefined, index, this.opts) : seriesData.name,
        color: seriesData.color }];

      var offset = {
        x: _touches$.x,
        y: _touches$.y };

      opts.tooltip = {
        textList: option.textList ? option.textList : textList,
        offset: option.offset !== undefined ? option.offset : offset,
        option: option,
        index: index };

    }
    opts.updateData = false;
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
  if (this.opts.type === 'radar') {
    var index = option.index == undefined ? this.getCurrentDataIndex(e) : option.index;
    if (index > -1) {
      var opts = assign({}, this.opts, { animation: false });
      var seriesData = getSeriesDataItem(this.opts.series, index);
      if (seriesData.length !== 0) {
        var textList = seriesData.map(function (item) {
          return {
            text: option.formatter ? option.formatter(item, _this2.opts.categories[index], index, _this2.opts) : item.name + ': ' + item.data,
            color: item.color };

        });
        var offset = {
          x: _touches$.x,
          y: _touches$.y };

        opts.tooltip = {
          textList: option.textList ? option.textList : textList,
          offset: option.offset !== undefined ? option.offset : offset,
          option: option,
          index: index };

      }
    }
    drawCharts.call(this, opts.type, opts, this.config, this.context);
  }
};

uCharts.prototype.translate = function (distance) {
  this.scrollOption = {
    currentOffset: distance,
    startTouchX: distance,
    distance: 0,
    lastMoveTime: 0 };

  var opts = assign({}, this.opts, {
    _scrollDistance_: distance,
    animation: false });

  drawCharts.call(this, this.opts.type, opts, this.config, this.context);
};

uCharts.prototype.scrollStart = function (e) {
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  var _touches$ = getTouches(touches, this.opts, e);
  if (touches && this.opts.enableScroll === true) {
    this.scrollOption.startTouchX = _touches$.x;
  }
};

uCharts.prototype.scroll = function (e) {
  if (this.scrollOption.lastMoveTime === 0) {
    this.scrollOption.lastMoveTime = Date.now();
  }
  var Limit = this.opts.touchMoveLimit || 60;
  var currMoveTime = Date.now();
  var duration = currMoveTime - this.scrollOption.lastMoveTime;
  if (duration < Math.floor(1000 / Limit)) return;
  this.scrollOption.lastMoveTime = currMoveTime;
  var touches = null;
  if (e.changedTouches) {
    touches = e.changedTouches[0];
  } else {
    touches = e.mp.changedTouches[0];
  }
  if (touches && this.opts.enableScroll === true) {
    var _touches$ = getTouches(touches, this.opts, e);
    var _distance;
    _distance = _touches$.x - this.scrollOption.startTouchX;
    var currentOffset = this.scrollOption.currentOffset;
    var validDistance = calValidDistance(this, currentOffset + _distance, this.opts.chartData, this.config, this.opts);
    this.scrollOption.distance = _distance = validDistance - currentOffset;
    var opts = assign({}, this.opts, {
      _scrollDistance_: currentOffset + _distance,
      animation: false });

    this.opts = opts;
    drawCharts.call(this, opts.type, opts, this.config, this.context);
    return currentOffset + _distance;
  }
};

uCharts.prototype.scrollEnd = function (e) {
  if (this.opts.enableScroll === true) {
    var _scrollOption = this.scrollOption,
    currentOffset = _scrollOption.currentOffset,
    distance = _scrollOption.distance;
    this.scrollOption.currentOffset = currentOffset + distance;
    this.scrollOption.distance = 0;
  }
};

if ( true && typeof module.exports === "object") {
  module.exports = uCharts;
}var _default =

uCharts;exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map