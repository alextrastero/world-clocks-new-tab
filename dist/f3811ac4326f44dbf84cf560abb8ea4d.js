// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({6:[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// tslint:disable-next-line
var global = function () {
  var local;
  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('global object is unavailable in this environment');
    }
  }
  return local;
}();
var isBrowser = typeof window !== 'undefined';
// tslint:disable-next-line:no-empty
function noop() {}
var fakeDoc = {
  createElement: noop,
  createElementNS: noop,
  createTextNode: noop
};
var doc = isBrowser ? document : fakeDoc;

var canUsePromise = 'Promise' in global;
var resolved;
if (canUsePromise) {
  resolved = Promise.resolve();
}
var nextTick = canUsePromise ? function (fn) {
  return resolved.then(fn);
} : 'requestAnimationFrame' in global ? requestAnimationFrame : setTimeout;

/* istanbul ignore next */
// tslint:disable-next-line
Object.is = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }
  return x !== x && y !== y;
};
function shallowEqual(obj1, obj2) {
  if (obj1 === null || obj2 === null) {
    return false;
  }
  if (Object.is(obj1, obj2)) {
    return true;
  }
  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];
    if (!obj2.hasOwnProperty(obj1KeyItem) || !Object.is(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }
  return true;
}

var SimpleMap = function SimpleMap() {
  this.cache = [];
  this.size = 0;
};
SimpleMap.prototype.set = function set(k, v) {
  var this$1 = this;

  var len = this.cache.length;
  if (!len) {
    this.cache.push({ k: k, v: v });
    this.size += 1;
    return;
  }
  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];
    if (item.k === k) {
      item.v = v;
      return;
    }
  }
  this.cache.push({ k: k, v: v });
  this.size += 1;
};
SimpleMap.prototype.get = function get(k) {
  var this$1 = this;

  var len = this.cache.length;
  if (!len) {
    return;
  }
  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];
    if (item.k === k) {
      return item.v;
    }
  }
};
SimpleMap.prototype.has = function has(k) {
  var this$1 = this;

  var len = this.cache.length;
  if (!len) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];
    if (item.k === k) {
      return true;
    }
  }
  return false;
};
SimpleMap.prototype['delete'] = function delete$1(k) {
  var this$1 = this;

  var len = this.cache.length;
  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];
    if (item.k === k) {
      this$1.cache.splice(i, 1);
      this$1.size -= 1;
      return true;
    }
  }
  return false;
};
SimpleMap.prototype.clear = function clear() {
  var this$1 = this;

  var len = this.cache.length;
  this.size = 0;
  if (!len) {
    return;
  }
  while (len) {
    this$1.cache.pop();
    len--;
  }
};
var MapClass = 'Map' in global ? Map : SimpleMap;

function isNumber(arg) {
  return typeof arg === 'number';
}
var isSupportSVG = isFunction(doc.createAttributeNS);
function isString(arg) {
  return typeof arg === 'string';
}
function isFunction(arg) {
  return typeof arg === 'function';
}
var isArray = Array.isArray;
function isUndefined(o) {
  return o === undefined;
}

function isAttrAnEvent(attr) {
  return attr[0] === 'o' && attr[1] === 'n';
}
function extend(source, from) {
  if (!from) {
    return source;
  }
  for (var key in from) {
    if (from.hasOwnProperty(key)) {
      source[key] = from[key];
    }
  }
  return source;
}
function clone(obj) {
  return extend({}, obj);
}

var Current = {
  current: null
};

var EMPTY_CHILDREN = [];
var EMPTY_OBJ = {};
function isNullOrUndef(o) {
  return o === undefined || o === null;
}
function isInvalid(o) {
  return isNullOrUndef(o) || o === true || o === false;
}
function isVNode(node) {
  return !isNullOrUndef(node) && node.vtype === 2 /* Node */;
}
function isVText(node) {
  return !isNullOrUndef(node) && node.vtype === 1 /* Text */;
}
function isComponent(instance) {
  return !isInvalid(instance) && instance.isReactComponent === EMPTY_OBJ;
}
function isWidget(node) {
  return !isNullOrUndef(node) && (node.vtype & (4 /* Composite */ | 8 /* Stateless */)) > 0;
}
function isComposite(node) {
  return !isNullOrUndef(node) && node.vtype === 4 /* Composite */;
}
function isValidElement(node) {
  return !isNullOrUndef(node) && node.vtype;
}
// tslint:disable-next-line:no-empty
function noop$1() {}
// typescript will compile the enum's value for us.
// eg.
// Composite = 1 << 2  => Composite = 4
var VType;
(function (VType) {
  VType[VType["Text"] = 1] = "Text";
  VType[VType["Node"] = 2] = "Node";
  VType[VType["Composite"] = 4] = "Composite";
  VType[VType["Stateless"] = 8] = "Stateless";
  VType[VType["Void"] = 16] = "Void";
})(VType || (VType = {}));

var Ref = {
  update: function update(lastVnode, nextVnode, domNode) {
    var prevRef = lastVnode != null && lastVnode.props.ref;
    var nextRef = nextVnode != null && nextVnode.props.ref;
    if (prevRef !== nextRef) {
      if (!isFunction(prevRef) || !isFunction(nextRef)) {
        this.detach(lastVnode, prevRef, lastVnode.dom);
      }
      this.attach(nextVnode, nextRef, domNode);
    }
  },
  attach: function attach(vnode, ref, domNode) {
    var node = isComposite(vnode) ? vnode.component : domNode;
    if (isFunction(ref)) {
      ref(node);
    } else if (isString(ref)) {
      var inst = vnode._owner;
      if (inst && isFunction(inst.render)) {
        inst.refs[ref] = node;
      }
    }
  },
  detach: function detach(vnode, ref, domNode) {
    var node = isComposite(vnode) ? vnode.component : domNode;
    if (isFunction(ref)) {
      ref(null);
    } else if (isString(ref)) {
      var inst = vnode._owner;
      if (inst.refs[ref] === node && isFunction(inst.render)) {
        delete inst.refs[ref];
      }
    }
  }
};

var ONINPUT = 'oninput';
var ONPROPERTYCHANGE = 'onpropertychange';
var delegatedEvents = new MapClass();
var unbubbleEvents = {
  onmousemove: 1,
  ontouchmove: 1,
  onmouseleave: 1,
  onmouseenter: 1,
  onload: 1,
  onunload: 1,
  onscroll: 1,
  onfocus: 1,
  onblur: 1,
  onrowexit: 1,
  onbeforeunload: 1,
  onstop: 1,
  ondragdrop: 1,
  ondragenter: 1,
  ondragexit: 1,
  ondraggesture: 1,
  ondragover: 1,
  oncontextmenu: 1,
  onerror: 1,
  onabort: 1,
  oncanplay: 1,
  oncanplaythrough: 1,
  ondurationchange: 1,
  onemptied: 1,
  onended: 1,
  onloadeddata: 1,
  onloadedmetadata: 1,
  onloadstart: 1,
  onencrypted: 1,
  onpause: 1,
  onplay: 1,
  onplaying: 1,
  onprogress: 1,
  onratechange: 1,
  onseeking: 1,
  onseeked: 1,
  onstalled: 1,
  onsuspend: 1,
  ontimeupdate: 1,
  onvolumechange: 1,
  onwaiting: 1
};
unbubbleEvents[ONPROPERTYCHANGE] = 1;
var bindFocus = false;
/* istanbul ignore next */
if (isBrowser && navigator.userAgent.indexOf('MSIE 9') >= 0) {
  doc.addEventListener('selectionchange', function () {
    var el = doc.activeElement;
    if (detectCanUseOnInputNode(el)) {
      var ev = doc.createEvent('CustomEvent');
      ev.initCustomEvent('input', true, true, {});
      el.dispatchEvent(ev);
    }
  });
}
function attachEvent(domNode, eventName, handler) {
  eventName = fixEvent(domNode, eventName);
  /* istanbul ignore next */
  if (eventName === ONPROPERTYCHANGE) {
    processOnPropertyChangeEvent(domNode, handler);
    return;
  }
  var delegatedRoots = delegatedEvents.get(eventName);
  if (unbubbleEvents[eventName] === 1) {
    if (!delegatedRoots) {
      delegatedRoots = new MapClass();
    }
    var event = attachEventToNode(domNode, eventName, delegatedRoots);
    delegatedEvents.set(eventName, delegatedRoots);
    if (isFunction(handler)) {
      delegatedRoots.set(domNode, {
        eventHandler: handler,
        event: event
      });
    }
  } else {
    if (!delegatedRoots) {
      delegatedRoots = {
        items: new MapClass()
      };
      delegatedRoots.event = attachEventToDocument(doc, eventName, delegatedRoots);
      delegatedEvents.set(eventName, delegatedRoots);
    }
    if (isFunction(handler)) {
      delegatedRoots.items.set(domNode, handler);
    }
  }
}
function detachEvent(domNode, eventName, handler) {
  eventName = fixEvent(domNode, eventName);
  if (eventName === ONPROPERTYCHANGE) {
    return;
  }
  var delegatedRoots = delegatedEvents.get(eventName);
  if (unbubbleEvents[eventName] === 1 && delegatedRoots) {
    var event = delegatedRoots.get(domNode);
    if (event) {
      domNode.removeEventListener(parseEventName(eventName), event.event, false);
      /* istanbul ignore next */
      var delegatedRootsSize = delegatedRoots.size;
      if (delegatedRoots['delete'](domNode) && delegatedRootsSize === 0) {
        delegatedEvents['delete'](eventName);
      }
    }
  } else if (delegatedRoots && delegatedRoots.items) {
    var items = delegatedRoots.items;
    if (items['delete'](domNode) && items.size === 0) {
      doc.removeEventListener(parseEventName(eventName), delegatedRoots.event, false);
      delegatedEvents['delete'](eventName);
    }
  }
}
var propertyChangeActiveElement;
var propertyChangeActiveElementValue;
var propertyChangeActiveElementValueProp;
var propertyChangeActiveHandler;
/* istanbul ignore next */
function propertyChangeHandler(event) {
  if (event.propertyName !== 'value') {
    return;
  }
  var target = event.target || event.srcElement;
  var val = target.value;
  if (val === propertyChangeActiveElementValue) {
    return;
  }
  propertyChangeActiveElementValue = val;
  if (isFunction(propertyChangeActiveHandler)) {
    propertyChangeActiveHandler.call(target, event);
  }
}
/* istanbul ignore next */
function processOnPropertyChangeEvent(node, handler) {
  propertyChangeActiveHandler = handler;
  if (!bindFocus) {
    bindFocus = true;
    doc.addEventListener('focusin', function () {
      unbindOnPropertyChange();
      bindOnPropertyChange(node);
    }, false);
    doc.addEventListener('focusout', unbindOnPropertyChange, false);
  }
}
/* istanbul ignore next */
function bindOnPropertyChange(node) {
  propertyChangeActiveElement = node;
  propertyChangeActiveElementValue = node.value;
  propertyChangeActiveElementValueProp = Object.getOwnPropertyDescriptor(node.constructor.prototype, 'value');
  Object.defineProperty(propertyChangeActiveElement, 'value', {
    get: function get() {
      return propertyChangeActiveElementValueProp.get.call(this);
    },
    set: function set(val) {
      propertyChangeActiveElementValue = val;
      propertyChangeActiveElementValueProp.set.call(this, val);
    }
  });
  propertyChangeActiveElement.addEventListener('propertychange', propertyChangeHandler, false);
}
/* istanbul ignore next */
function unbindOnPropertyChange() {
  if (!propertyChangeActiveElement) {
    return;
  }
  delete propertyChangeActiveElement.value;
  propertyChangeActiveElement.removeEventListener('propertychange', propertyChangeHandler, false);
  propertyChangeActiveElement = null;
  propertyChangeActiveElementValue = null;
  propertyChangeActiveElementValueProp = null;
}
function detectCanUseOnInputNode(node) {
  var nodeName = node.nodeName && node.nodeName.toLowerCase();
  var type = node.type;
  return nodeName === 'input' && /text|password/.test(type) || nodeName === 'textarea';
}
function fixEvent(node, eventName) {
  if (eventName === 'onDoubleClick') {
    eventName = 'ondblclick';
  } else if (eventName === 'onTouchTap') {
    eventName = 'onclick';
    // tslint:disable-next-line:prefer-conditional-expression
  } else if (eventName === 'onChange' && detectCanUseOnInputNode(node)) {
    eventName = ONINPUT in window ? ONINPUT : ONPROPERTYCHANGE;
  } else {
    eventName = eventName.toLowerCase();
  }
  return eventName;
}
function parseEventName(name) {
  return name.substr(2);
}
/* istanbul ignore next */
function stopPropagation() {
  this.cancelBubble = true;
  this.stopImmediatePropagation();
}
function dispatchEvent(event, target, items, count, eventData) {
  var eventsToTrigger = items.get(target);
  if (eventsToTrigger) {
    count--;
    eventData.currentTarget = target;
    // for React synthetic event compatibility
    Object.defineProperties(event, {
      nativeEvent: {
        value: event
      },
      persist: {
        value: noop$1
      }
    });
    eventsToTrigger(event);
    if (event.cancelBubble) {
      return;
    }
  }
  if (count > 0) {
    var parentDom = target.parentNode;
    if (parentDom === null || event.type === 'click' && parentDom.nodeType === 1 && parentDom.disabled) {
      return;
    }
    dispatchEvent(event, parentDom, items, count, eventData);
  }
}
function attachEventToDocument(d, eventName, delegatedRoots) {
  var eventHandler = function eventHandler(event) {
    var items = delegatedRoots.items;
    var count = items.size;
    if (count > 0) {
      var eventData = {
        currentTarget: event.target
      };
      /* istanbul ignore next */
      try {
        Object.defineProperties(event, {
          currentTarget: {
            configurable: true,
            get: function get() {
              return eventData.currentTarget;
            }
          },
          stopPropagation: {
            value: stopPropagation
          }
        });
      } catch (error) {
        // some browsers crashed
        // see: https://stackoverflow.com/questions/44052813/why-cannot-redefine-property
      }
      dispatchEvent(event, event.target, delegatedRoots.items, count, eventData);
    }
  };
  d.addEventListener(parseEventName(eventName), eventHandler, false);
  return eventHandler;
}
function attachEventToNode(node, eventName, delegatedRoots) {
  var eventHandler = function eventHandler(event) {
    var eventToTrigger = delegatedRoots.get(node);
    if (eventToTrigger && eventToTrigger.eventHandler) {
      var eventData = {
        currentTarget: node
      };
      /* istanbul ignore next */
      Object.defineProperties(event, {
        currentTarget: {
          configurable: true,
          get: function get() {
            return eventData.currentTarget;
          }
        }
      });
      eventToTrigger.eventHandler(event);
    }
  };
  node.addEventListener(parseEventName(eventName), eventHandler, false);
  return eventHandler;
}

var options = {
  afterMount: noop$1,
  afterUpdate: noop$1,
  beforeUnmount: noop$1,
  roots: [],
  debug: false
};

function unmountChildren(children, parentDom) {
  if (isArray(children)) {
    for (var i = 0, len = children.length; i < len; i++) {
      unmount(children[i], parentDom);
    }
  } else {
    unmount(children, parentDom);
  }
}
function unmount(vnode, parentDom) {
  if (isInvalid(vnode)) {
    return;
  }
  var vtype = vnode.vtype;
  // Bitwise operators for better performance
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
  var dom = vtype & 4 /* Composite */ ? vnode.component.dom : vnode.dom;
  if ((vtype & (4 /* Composite */ | 8 /* Stateless */)) > 0) {
    options.beforeUnmount(vnode);
    vnode.destroy();
  } else if ((vtype & 2 /* Node */) > 0) {
    var props = vnode.props;
    var children = vnode.children;
    var ref = vnode.ref;
    unmountChildren(children);
    for (var propName in props) {
      if (isAttrAnEvent(propName)) {
        detachEvent(dom, propName, props[propName]);
      }
    }
    if (ref !== null) {
      Ref.detach(vnode, ref, dom);
    }
  }
  if (!isNullOrUndef(parentDom) && !isNullOrUndef(dom)) {
    parentDom.removeChild(dom);
  }
  // vnode.dom = null
}

var NS = {
  ev: 'http://www.w3.org/2001/xml-events',
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace'
};
var ATTRS = {
  accentHeight: 'accent-height',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 'alignment-baseline',
  allowReorder: 'allowReorder',
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 'arabic-form',
  ascent: 0,
  attributeName: 'attributeName',
  attributeType: 'attributeType',
  autoReverse: 'autoReverse',
  azimuth: 0,
  baseFrequency: 'baseFrequency',
  baseProfile: 'baseProfile',
  baselineShift: 'baseline-shift',
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 'calcMode',
  capHeight: 'cap-height',
  clip: 0,
  clipPath: 'clip-path',
  clipRule: 'clip-rule',
  clipPathUnits: 'clipPathUnits',
  colorInterpolation: 'color-interpolation',
  colorInterpolationFilters: 'color-interpolation-filters',
  colorProfile: 'color-profile',
  colorRendering: 'color-rendering',
  contentScriptType: 'contentScriptType',
  contentStyleType: 'contentStyleType',
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 'diffuseConstant',
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 'dominant-baseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 'edgeMode',
  elevation: 0,
  enableBackground: 'enable-background',
  end: 0,
  evEvent: 'ev:event',
  exponent: 0,
  externalResourcesRequired: 'externalResourcesRequired',
  fill: 0,
  fillOpacity: 'fill-opacity',
  fillRule: 'fill-rule',
  filter: 0,
  filterRes: 'filterRes',
  filterUnits: 'filterUnits',
  floodColor: 'flood-color',
  floodOpacity: 'flood-opacity',
  focusable: 0,
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontSizeAdjust: 'font-size-adjust',
  fontStretch: 'font-stretch',
  fontStyle: 'font-style',
  fontVariant: 'font-variant',
  fontWeight: 'font-weight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 'glyph-name',
  glyphOrientationHorizontal: 'glyph-orientation-horizontal',
  glyphOrientationVertical: 'glyph-orientation-vertical',
  glyphRef: 'glyphRef',
  gradientTransform: 'gradientTransform',
  gradientUnits: 'gradientUnits',
  hanging: 0,
  horizAdvX: 'horiz-adv-x',
  horizOriginX: 'horiz-origin-x',
  ideographic: 0,
  imageRendering: 'image-rendering',
  'in': 0,
  in2: 0,
  intercept: 0,
  k: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  kernelMatrix: 'kernelMatrix',
  kernelUnitLength: 'kernelUnitLength',
  kerning: 0,
  keyPoints: 'keyPoints',
  keySplines: 'keySplines',
  keyTimes: 'keyTimes',
  lengthAdjust: 'lengthAdjust',
  letterSpacing: 'letter-spacing',
  lightingColor: 'lighting-color',
  limitingConeAngle: 'limitingConeAngle',
  local: 0,
  markerEnd: 'marker-end',
  markerMid: 'marker-mid',
  markerStart: 'marker-start',
  markerHeight: 'markerHeight',
  markerUnits: 'markerUnits',
  markerWidth: 'markerWidth',
  mask: 0,
  maskContentUnits: 'maskContentUnits',
  maskUnits: 'maskUnits',
  mathematical: 0,
  mode: 0,
  numOctaves: 'numOctaves',
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 'overline-position',
  overlineThickness: 'overline-thickness',
  paintOrder: 'paint-order',
  panose1: 'panose-1',
  pathLength: 'pathLength',
  patternContentUnits: 'patternContentUnits',
  patternTransform: 'patternTransform',
  patternUnits: 'patternUnits',
  pointerEvents: 'pointer-events',
  points: 0,
  pointsAtX: 'pointsAtX',
  pointsAtY: 'pointsAtY',
  pointsAtZ: 'pointsAtZ',
  preserveAlpha: 'preserveAlpha',
  preserveAspectRatio: 'preserveAspectRatio',
  primitiveUnits: 'primitiveUnits',
  r: 0,
  radius: 0,
  refX: 'refX',
  refY: 'refY',
  renderingIntent: 'rendering-intent',
  repeatCount: 'repeatCount',
  repeatDur: 'repeatDur',
  requiredExtensions: 'requiredExtensions',
  requiredFeatures: 'requiredFeatures',
  restart: 0,
  result: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  seed: 0,
  shapeRendering: 'shape-rendering',
  slope: 0,
  spacing: 0,
  specularConstant: 'specularConstant',
  specularExponent: 'specularExponent',
  speed: 0,
  spreadMethod: 'spreadMethod',
  startOffset: 'startOffset',
  stdDeviation: 'stdDeviation',
  stemh: 0,
  stemv: 0,
  stitchTiles: 'stitchTiles',
  stopColor: 'stop-color',
  stopOpacity: 'stop-opacity',
  strikethroughPosition: 'strikethrough-position',
  strikethroughThickness: 'strikethrough-thickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 'stroke-dasharray',
  strokeDashoffset: 'stroke-dashoffset',
  strokeLinecap: 'stroke-linecap',
  strokeLinejoin: 'stroke-linejoin',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeOpacity: 'stroke-opacity',
  strokeWidth: 'stroke-width',
  surfaceScale: 'surfaceScale',
  systemLanguage: 'systemLanguage',
  tableValues: 'tableValues',
  targetX: 'targetX',
  targetY: 'targetY',
  textAnchor: 'text-anchor',
  textDecoration: 'text-decoration',
  textRendering: 'text-rendering',
  textLength: 'textLength',
  to: 0,
  transform: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 'underline-position',
  underlineThickness: 'underline-thickness',
  unicode: 0,
  unicodeBidi: 'unicode-bidi',
  unicodeRange: 'unicode-range',
  unitsPerEm: 'units-per-em',
  vAlphabetic: 'v-alphabetic',
  vHanging: 'v-hanging',
  vIdeographic: 'v-ideographic',
  vMathematical: 'v-mathematical',
  values: 0,
  vectorEffect: 'vector-effect',
  version: 0,
  vertAdvY: 'vert-adv-y',
  vertOriginX: 'vert-origin-x',
  vertOriginY: 'vert-origin-y',
  viewBox: 'viewBox',
  viewTarget: 'viewTarget',
  visibility: 0,
  widths: 0,
  wordSpacing: 'word-spacing',
  writingMode: 'writing-mode',
  x: 0,
  xHeight: 'x-height',
  x1: 0,
  x2: 0,
  xChannelSelector: 'xChannelSelector',
  xlinkActuate: 'xlink:actuate',
  xlinkArcrole: 'xlink:arcrole',
  xlinkHref: 'xlink:href',
  xlinkRole: 'xlink:role',
  xlinkShow: 'xlink:show',
  xlinkTitle: 'xlink:title',
  xlinkType: 'xlink:type',
  xmlBase: 'xml:base',
  xmlId: 'xml:id',
  xmlns: 0,
  xmlnsXlink: 'xmlns:xlink',
  xmlLang: 'xml:lang',
  xmlSpace: 'xml:space',
  y: 0,
  y1: 0,
  y2: 0,
  yChannelSelector: 'yChannelSelector',
  z: 0,
  zoomAndPan: 'zoomAndPan'
};
var SVGPropertyConfig = {
  Properties: {},
  DOMAttributeNamespaces: {
    'ev:event': NS.ev,
    'xlink:actuate': NS.xlink,
    'xlink:arcrole': NS.xlink,
    'xlink:href': NS.xlink,
    'xlink:role': NS.xlink,
    'xlink:show': NS.xlink,
    'xlink:title': NS.xlink,
    'xlink:type': NS.xlink,
    'xml:base': NS.xml,
    'xml:id': NS.xml,
    'xml:lang': NS.xml,
    'xml:space': NS.xml
  },
  DOMAttributeNames: {}
};
Object.keys(ATTRS).forEach(function (key) {
  SVGPropertyConfig.Properties[key] = 0;
  if (ATTRS[key]) {
    SVGPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
  }
});

/* tslint:disable: no-empty*/
function patch(lastVnode, nextVnode, lastDom, context, isSvg) {
  lastDom = lastVnode && lastVnode.dom || lastDom;
  if (isVText(nextVnode) && isVText(lastVnode)) {
    return patchVText(lastVnode, nextVnode);
  }
  var newDom;
  if (isSameVNode(lastVnode, nextVnode)) {
    if (isVNode(nextVnode)) {
      isSvg = isNullOrUndef(isSvg) ? lastVnode.isSvg : isSvg;
      if (isSvg) {
        nextVnode.isSvg = isSvg;
      }
      patchProps(lastDom, nextVnode.props, lastVnode.props, lastVnode, isSvg);
      patchChildren(lastDom, lastVnode.children, nextVnode.children, context, isSvg);
      if (nextVnode.ref !== null) {
        Ref.update(lastVnode, nextVnode, lastDom);
      }
      newDom = lastDom;
    } else if (isWidget(nextVnode)) {
      newDom = nextVnode.update(lastVnode, nextVnode, context, lastDom);
      options.afterUpdate(nextVnode);
    }
    nextVnode.dom = newDom;
  } else {
    var parentNode = lastDom.parentNode;
    var nextSibling = lastDom.nextSibling;
    unmount(lastVnode, parentNode);
    newDom = createElement(nextVnode, isSvg, context);
    if (nextVnode !== null) {
      nextVnode.dom = newDom;
    }
    if (parentNode !== null) {
      parentNode.insertBefore(newDom, nextSibling);
    }
  }
  return newDom;
}
function patchArrayChildren(parentDom, lastChildren, nextChildren, context, isSvg) {
  var lastLength = lastChildren.length;
  var nextLength = nextChildren.length;
  if (lastLength === 0) {
    if (nextLength > 0) {
      for (var i = 0; i < nextLength; i++) {
        mountChild(nextChildren[i], parentDom, context, isSvg);
      }
    }
  } else if (nextLength === 0) {
    parentDom.textContent = '';
    unmountChildren(lastChildren);
  } else {
    if (isKeyed(lastChildren, nextChildren)) {
      patchKeyedChildren(lastChildren, nextChildren, parentDom, context, isSvg, lastLength, nextLength);
    } else {
      patchNonKeyedChildren(parentDom, lastChildren, nextChildren, context, isSvg, lastLength, nextLength);
    }
  }
}
function patchChildren(parentDom, lastChildren, nextChildren, context, isSvg) {
  if (lastChildren === nextChildren) {
    return;
  }
  var lastChildrenIsArray = isArray(lastChildren);
  var nextChildrenIsArray = isArray(nextChildren);
  if (lastChildrenIsArray && nextChildrenIsArray) {
    patchArrayChildren(parentDom, lastChildren, nextChildren, context, isSvg);
  } else if (!lastChildrenIsArray && !nextChildrenIsArray) {
    patch(lastChildren, nextChildren, parentDom, context, isSvg);
  } else if (lastChildrenIsArray && !nextChildrenIsArray) {
    patchArrayChildren(parentDom, lastChildren, [nextChildren], context, isSvg);
  } else if (!lastChildrenIsArray && nextChildrenIsArray) {
    patchArrayChildren(parentDom, [lastChildren], nextChildren, context, isSvg);
  }
}
function patchNonKeyedChildren(parentDom, lastChildren, nextChildren, context, isSvg, lastLength, nextLength) {
  var minLength = Math.min(lastLength, nextLength);
  var i = 0;
  while (i < minLength) {
    patch(lastChildren[i], nextChildren[i], parentDom, context, isSvg);
    i++;
  }
  if (lastLength < nextLength) {
    for (i = minLength; i < nextLength; i++) {
      if (parentDom !== null) {
        parentDom.appendChild(createElement(nextChildren[i], isSvg, context));
      }
    }
  } else if (lastLength > nextLength) {
    for (i = minLength; i < lastLength; i++) {
      unmount(lastChildren[i], parentDom);
    }
  }
}
/**
 *
 * Virtual DOM patching algorithm based on ivi by
 * Boris Kaul (@localvoid)
 * Licensed under the MIT License
 * https://github.com/ivijs/ivi/blob/master/LICENSE
 *
 */
function patchKeyedChildren(a, b, dom, context, isSvg, aLength, bLength) {
  var aEnd = aLength - 1;
  var bEnd = bLength - 1;
  var aStart = 0;
  var bStart = 0;
  var i;
  var j;
  var aNode;
  var bNode;
  var nextNode;
  var nextPos;
  var node;
  var aStartNode = a[aStart];
  var bStartNode = b[bStart];
  var aEndNode = a[aEnd];
  var bEndNode = b[bEnd];
  // Step 1
  // tslint:disable-next-line
  outer: {
    // Sync nodes with the same key at the beginning.
    while (aStartNode.key === bStartNode.key) {
      patch(aStartNode, bStartNode, dom, context, isSvg);
      aStart++;
      bStart++;
      if (aStart > aEnd || bStart > bEnd) {
        break outer;
      }
      aStartNode = a[aStart];
      bStartNode = b[bStart];
    }
    // Sync nodes with the same key at the end.
    while (aEndNode.key === bEndNode.key) {
      patch(aEndNode, bEndNode, dom, context, isSvg);
      aEnd--;
      bEnd--;
      if (aStart > aEnd || bStart > bEnd) {
        break outer;
      }
      aEndNode = a[aEnd];
      bEndNode = b[bEnd];
    }
  }
  if (aStart > aEnd) {
    if (bStart <= bEnd) {
      nextPos = bEnd + 1;
      nextNode = nextPos < bLength ? b[nextPos].dom : null;
      while (bStart <= bEnd) {
        node = b[bStart];
        bStart++;
        attachNewNode(dom, createElement(node, isSvg, context), nextNode);
      }
    }
  } else if (bStart > bEnd) {
    while (aStart <= aEnd) {
      unmount(a[aStart++], dom);
    }
  } else {
    var aLeft = aEnd - aStart + 1;
    var bLeft = bEnd - bStart + 1;
    var sources = new Array(bLeft);
    // Mark all nodes as inserted.
    for (i = 0; i < bLeft; i++) {
      sources[i] = -1;
    }
    var moved = false;
    var pos = 0;
    var patched = 0;
    // When sizes are small, just loop them through
    if (bLeft <= 4 || aLeft * bLeft <= 16) {
      for (i = aStart; i <= aEnd; i++) {
        aNode = a[i];
        if (patched < bLeft) {
          for (j = bStart; j <= bEnd; j++) {
            bNode = b[j];
            if (aNode.key === bNode.key) {
              sources[j - bStart] = i;
              if (pos > j) {
                moved = true;
              } else {
                pos = j;
              }
              patch(aNode, bNode, dom, context, isSvg);
              patched++;
              a[i] = null;
              break;
            }
          }
        }
      }
    } else {
      var keyIndex = new MapClass();
      for (i = bStart; i <= bEnd; i++) {
        keyIndex.set(b[i].key, i);
      }
      for (i = aStart; i <= aEnd; i++) {
        aNode = a[i];
        if (patched < bLeft) {
          j = keyIndex.get(aNode.key);
          if (j !== undefined) {
            bNode = b[j];
            sources[j - bStart] = i;
            if (pos > j) {
              moved = true;
            } else {
              pos = j;
            }
            patch(aNode, bNode, dom, context, isSvg);
            patched++;
            a[i] = null;
          }
        }
      }
    }
    if (aLeft === aLength && patched === 0) {
      unmountChildren(a, dom);
      while (bStart < bLeft) {
        node = b[bStart];
        bStart++;
        attachNewNode(dom, createElement(node, isSvg, context), null);
      }
    } else {
      i = aLeft - patched;
      while (i > 0) {
        aNode = a[aStart++];
        if (aNode !== null) {
          unmount(aNode, dom);
          i--;
        }
      }
      if (moved) {
        var seq = lis(sources);
        j = seq.length - 1;
        for (i = bLeft - 1; i >= 0; i--) {
          if (sources[i] === -1) {
            pos = i + bStart;
            node = b[pos];
            nextPos = pos + 1;
            attachNewNode(dom, createElement(node, isSvg, context), nextPos < bLength ? b[nextPos].dom : null);
          } else {
            if (j < 0 || i !== seq[j]) {
              pos = i + bStart;
              node = b[pos];
              nextPos = pos + 1;
              attachNewNode(dom, node.dom, nextPos < bLength ? b[nextPos].dom : null);
            } else {
              j--;
            }
          }
        }
      } else if (patched !== bLeft) {
        for (i = bLeft - 1; i >= 0; i--) {
          if (sources[i] === -1) {
            pos = i + bStart;
            node = b[pos];
            nextPos = pos + 1;
            attachNewNode(dom, createElement(node, isSvg, context), nextPos < bLength ? b[nextPos].dom : null);
          }
        }
      }
    }
  }
}
function attachNewNode(parentDom, newNode, nextNode) {
  if (isNullOrUndef(nextNode)) {
    parentDom.appendChild(newNode);
  } else {
    parentDom.insertBefore(newNode, nextNode);
  }
}
/**
 * Slightly modified Longest Increased Subsequence algorithm, it ignores items that have -1 value, they're representing
 * new items.
 *
 * http://en.wikipedia.org/wiki/Longest_increasing_subsequence
 *
 * @param a Array of numbers.
 * @returns Longest increasing subsequence.
 */
function lis(a) {
  var p = a.slice();
  var result = [];
  result.push(0);
  var u;
  var v;
  for (var i = 0, il = a.length; i < il; ++i) {
    if (a[i] === -1) {
      continue;
    }
    var j = result[result.length - 1];
    if (a[j] < a[i]) {
      p[i] = j;
      result.push(i);
      continue;
    }
    u = 0;
    v = result.length - 1;
    while (u < v) {
      var c = (u + v) / 2 | 0;
      if (a[result[c]] < a[i]) {
        u = c + 1;
      } else {
        v = c;
      }
    }
    if (a[i] < a[result[u]]) {
      if (u > 0) {
        p[i] = result[u - 1];
      }
      result[u] = i;
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}
function isKeyed(lastChildren, nextChildren) {
  return nextChildren.length > 0 && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key) && lastChildren.length > 0 && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
}
function isSameVNode(a, b) {
  if (isInvalid(a) || isInvalid(b)) {
    return false;
  }
  return a.type === b.type && a.key === b.key;
}
function patchVText(lastVNode, nextVNode) {
  var dom = lastVNode.dom;
  if (dom === null) {
    return;
  }
  var nextText = nextVNode.text;
  nextVNode.dom = dom;
  if (lastVNode.text !== nextText) {
    dom.nodeValue = nextText;
  }
  return dom;
}
var skipProps = {
  children: 1,
  key: 1,
  ref: 1,
  owner: 1
};
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function setStyle(domStyle, style, value) {
  if (isNullOrUndef(value) || isNumber(value) && isNaN(value)) {
    domStyle[style] = '';
    return;
  }
  if (style === 'float') {
    domStyle['cssFloat'] = value;
    domStyle['styleFloat'] = value;
    return;
  }
  domStyle[style] = !isNumber(value) || IS_NON_DIMENSIONAL.test(style) ? value : value + 'px';
}
function patchEvent(eventName, lastEvent, nextEvent, domNode) {
  if (lastEvent !== nextEvent) {
    if (isFunction(lastEvent)) {
      detachEvent(domNode, eventName, lastEvent);
    }
    attachEvent(domNode, eventName, nextEvent);
  }
}
function patchStyle(lastAttrValue, nextAttrValue, dom) {
  var domStyle = dom.style;
  var style;
  var value;
  if (isString(nextAttrValue)) {
    domStyle.cssText = nextAttrValue;
    return;
  }
  if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
    for (style in nextAttrValue) {
      value = nextAttrValue[style];
      if (value !== lastAttrValue[style]) {
        setStyle(domStyle, style, value);
      }
    }
  } else {
    for (style in nextAttrValue) {
      value = nextAttrValue[style];
      setStyle(domStyle, style, value);
    }
  }
}
function patchProp(domNode, prop, lastValue, nextValue, lastVnode, isSvg) {
  if (lastValue !== nextValue) {
    if (prop === 'className') {
      prop = 'class';
    }
    if (skipProps[prop] === 1) {
      return;
    } else if (prop === 'class' && !isSvg) {
      domNode.className = nextValue;
    } else if (prop === 'dangerouslySetInnerHTML') {
      var lastHtml = lastValue && lastValue.__html;
      var nextHtml = nextValue && nextValue.__html;
      if (lastHtml !== nextHtml) {
        if (!isNullOrUndef(nextHtml)) {
          if (isValidElement(lastVnode) && lastVnode.children !== EMPTY_CHILDREN) {
            unmountChildren(lastVnode.children);
            lastVnode.children = [];
          }
          domNode.innerHTML = nextHtml;
        }
      }
    } else if (isAttrAnEvent(prop)) {
      patchEvent(prop, lastValue, nextValue, domNode);
    } else if (prop === 'style') {
      patchStyle(lastValue, nextValue, domNode);
    } else if (prop !== 'list' && prop !== 'type' && !isSvg && prop in domNode) {
      setProperty(domNode, prop, nextValue == null ? '' : nextValue);
      if (nextValue == null || nextValue === false) {
        domNode.removeAttribute(prop);
      }
    } else if (isNullOrUndef(nextValue) || nextValue === false) {
      domNode.removeAttribute(prop);
    } else {
      var namespace = SVGPropertyConfig.DOMAttributeNamespaces[prop];
      if (isSvg && namespace) {
        if (nextValue) {
          domNode.setAttributeNS(namespace, prop, nextValue);
        } else {
          var colonPosition = prop.indexOf(':');
          var localName = colonPosition > -1 ? prop.substr(colonPosition + 1) : prop;
          domNode.removeAttributeNS(namespace, localName);
        }
      } else {
        if (!isFunction(nextValue)) {
          domNode.setAttribute(prop, nextValue);
        }
        // WARNING: Non-event attributes with function values:
        // https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html#changes-in-detail
      }
    }
  }
}
function setProperty(node, name, value) {
  try {
    node[name] = value;
  } catch (e) {}
}
function patchProps(domNode, nextProps, previousProps, lastVnode, isSvg) {
  for (var propName in previousProps) {
    var value = previousProps[propName];
    if (isNullOrUndef(nextProps[propName]) && !isNullOrUndef(value)) {
      if (isAttrAnEvent(propName)) {
        detachEvent(domNode, propName, value);
      } else if (propName === 'dangerouslySetInnerHTML') {
        domNode.textContent = '';
      } else if (propName === 'className') {
        domNode.removeAttribute('class');
      } else {
        domNode.removeAttribute(propName);
      }
    }
  }
  for (var propName$1 in nextProps) {
    patchProp(domNode, propName$1, previousProps[propName$1], nextProps[propName$1], lastVnode, isSvg);
  }
}

var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
function createElement(vnode, isSvg, parentContext, parentComponent) {
  var domNode;
  if (isValidElement(vnode)) {
    var vtype = vnode.vtype;
    if (vtype & (4 /* Composite */ | 8 /* Stateless */)) {
      domNode = vnode.init(parentContext, parentComponent);
      options.afterMount(vnode);
    } else if (vtype & 1 /* Text */) {
        domNode = doc.createTextNode(vnode.text);
        vnode.dom = domNode;
      } else if (vtype & 2 /* Node */) {
        domNode = mountVNode$1(vnode, isSvg, parentContext, parentComponent);
      } else if (vtype & 16 /* Void */) {
        domNode = vnode.dom;
      }
  } else if (isString(vnode) || isNumber(vnode)) {
    domNode = doc.createTextNode(vnode);
  } else if (isNullOrUndef(vnode) || vnode === false) {
    domNode = doc.createTextNode('');
  } else if (isArray(vnode)) {
    domNode = doc.createDocumentFragment();
    vnode.forEach(function (child) {
      if (!isInvalid(child)) {
        var childNode = createElement(child, isSvg, parentContext, parentComponent);
        if (childNode) {
          domNode.appendChild(childNode);
        }
      }
    });
  } else {
    throw new Error('Unsupported VNode.');
  }
  return domNode;
}
function mountVNode$1(vnode, isSvg, parentContext, parentComponent) {
  if (vnode.isSvg) {
    isSvg = true;
  } else if (vnode.type === 'svg') {
    isSvg = true;
    /* istanbul ignore next */
  } else if (!isSupportSVG) {
    isSvg = false;
  }
  if (isSvg) {
    vnode.namespace = SVG_NAMESPACE;
    vnode.isSvg = isSvg;
  }
  var domNode = !isSvg ? doc.createElement(vnode.type) : doc.createElementNS(vnode.namespace, vnode.type);
  setProps(domNode, vnode, isSvg);
  if (vnode.type === 'foreignObject') {
    isSvg = false;
  }
  var children = vnode.children;
  if (isArray(children)) {
    for (var i = 0, len = children.length; i < len; i++) {
      mountChild(children[i], domNode, parentContext, isSvg, parentComponent);
    }
  } else {
    mountChild(children, domNode, parentContext, isSvg, parentComponent);
  }
  vnode.dom = domNode;
  if (vnode.ref !== null) {
    Ref.attach(vnode, vnode.ref, domNode);
  }
  return domNode;
}
function mountChild(child, domNode, parentContext, isSvg, parentComponent) {
  child.parentContext = parentContext || EMPTY_OBJ;
  var childNode = createElement(child, isSvg, parentContext, parentComponent);
  if (childNode !== null) {
    domNode.appendChild(childNode);
  }
}
function setProps(domNode, vnode, isSvg) {
  var props = vnode.props;
  for (var p in props) {
    patchProp(domNode, p, null, props[p], null, isSvg);
  }
}

function createVText(text) {
  return {
    text: text,
    vtype: 1 /* Text */
    , dom: null
  };
}

function createVoid() {
  var dom = doc.createTextNode('');
  return {
    dom: dom,
    vtype: 16 /* Void */
  };
}

var readyComponents = [];
function errorCatcher(fn, component) {
  try {
    return fn();
  } catch (error) {
    errorHandler(component, error);
  }
}
function errorHandler(component, error) {
  var boundary;
  while (true) {
    if (isFunction(component.componentDidCatch)) {
      boundary = component;
      break;
    } else if (component._parentComponent) {
      component = component._parentComponent;
    } else {
      break;
    }
  }
  if (boundary) {
    var _disable = boundary._disable;
    boundary._disable = false;
    boundary.componentDidCatch(error);
    boundary._disable = _disable;
  } else {
    throw error;
  }
}
function mountVNode(vnode, parentContext, parentComponent) {
  return createElement(vnode, false, parentContext, parentComponent);
}
function mountComponent(vnode, parentContext, parentComponent) {
  var ref = vnode.props.ref;
  vnode.component = new vnode.type(vnode.props, parentContext);
  var component = vnode.component;
  if (isComponent(parentComponent)) {
    component._parentComponent = parentComponent;
  }
  if (isFunction(component.componentWillMount)) {
    errorCatcher(function () {
      component.componentWillMount();
    }, component);
    component.state = component.getState();
  }
  component._dirty = false;
  var rendered = renderComponent(component);
  component._rendered = rendered;
  if (isFunction(component.componentDidMount)) {
    readyComponents.push(component);
  }
  if (!isNullOrUndef(ref)) {
    readyComponents.push(function () {
      return Ref.attach(vnode, ref, component.dom);
    });
  }
  var dom = vnode.dom = component.dom = mountVNode(rendered, getChildContext(component, parentContext), component);
  component._disable = false;
  return dom;
}
function mountStatelessComponent(vnode, parentContext) {
  vnode._rendered = vnode.type(vnode.props, parentContext);
  return vnode.dom = mountVNode(vnode._rendered, parentContext);
}
function getChildContext(component, context) {
  if (component.getChildContext) {
    return extend(context, component.getChildContext());
  }
  return context;
}
function renderComponent(component) {
  Current.current = component;
  var rendered;
  errorCatcher(function () {
    rendered = component.render();
  }, component);
  if (isNumber(rendered) || isString(rendered)) {
    rendered = createVText(rendered);
  } else if (isUndefined(rendered)) {
    rendered = createVoid();
  }
  Current.current = null;
  return rendered;
}
function flushMount() {
  if (!readyComponents.length) {
    return;
  }
  // @TODO: perf
  var queue = readyComponents.slice(0);
  readyComponents.length = 0;
  queue.forEach(function (item) {
    if (isFunction(item)) {
      item();
    } else if (item.componentDidMount) {
      errorCatcher(function () {
        item.componentDidMount();
      }, item);
    }
  });
}
function reRenderComponent(prev, current) {
  var component = current.component = prev.component;
  var nextProps = current.props;
  var nextContext = component.context;
  component._disable = true;
  if (isFunction(component.componentWillReceiveProps)) {
    errorCatcher(function () {
      component.componentWillReceiveProps(nextProps, nextContext);
    }, component);
  }
  component._disable = false;
  component.prevProps = component.props;
  component.prevState = component.state;
  component.prevContext = component.context;
  component.props = nextProps;
  component.context = nextContext;
  if (!isNullOrUndef(nextProps.ref)) {
    Ref.update(prev, current);
  }
  updateComponent(component);
  return component.dom;
}
function reRenderStatelessComponent(prev, current, parentContext, domNode) {
  var lastRendered = prev._rendered;
  var rendered = current.type(current.props, parentContext);
  current._rendered = rendered;
  return current.dom = patch(lastRendered, rendered, domNode, parentContext);
}
function updateComponent(component, isForce) {
  if (isForce === void 0) isForce = false;

  var lastDom = component.dom;
  var props = component.props;
  var state = component.getState();
  var context = component.context;
  var prevProps = component.prevProps || props;
  var prevState = component.prevState || state;
  var prevContext = component.prevContext || context;
  component.props = prevProps;
  component.context = prevContext;
  var skip = false;
  if (!isForce && isFunction(component.shouldComponentUpdate) && component.shouldComponentUpdate(props, state, context) === false) {
    skip = true;
  } else if (isFunction(component.componentWillUpdate)) {
    errorCatcher(function () {
      component.componentWillUpdate(props, state, context);
    }, component);
  }
  component.props = props;
  component.state = state;
  component.context = context;
  component._dirty = false;
  if (!skip) {
    var lastRendered = component._rendered;
    var rendered = renderComponent(component);
    var childContext = getChildContext(component, context);
    component.dom = patch(lastRendered, rendered, lastDom, childContext);
    component._rendered = rendered;
    if (isFunction(component.componentDidUpdate)) {
      errorCatcher(function () {
        component.componentDidUpdate(prevProps, prevState, context);
      }, component);
    }
  }
  component.prevProps = component.props;
  component.prevState = component.state;
  component.prevContext = component.context;
  if (component._pendingCallbacks) {
    while (component._pendingCallbacks.length) {
      component._pendingCallbacks.pop().call(component);
    }
  }
  flushMount();
}
function unmountComponent(vnode) {
  var component = vnode.component;
  if (isFunction(component.componentWillUnmount)) {
    errorCatcher(function () {
      component.componentWillUnmount();
    }, component);
  }
  component._disable = true;
  unmount(component._rendered);
  if (!isNullOrUndef(vnode.props.ref)) {
    Ref.detach(vnode, vnode.props.ref, vnode.dom);
  }
}
function unmountStatelessComponent(vnode) {
  unmount(vnode._rendered);
}

var items = [];
function enqueueRender(component) {
  // tslint:disable-next-line:no-conditional-assignment
  if (!component._dirty && (component._dirty = true) && items.push(component) === 1) {
    nextTick(rerender);
  }
}
function rerender() {
  var p;
  var list = items;
  items = [];
  // tslint:disable-next-line:no-conditional-assignment
  while (p = list.pop()) {
    if (p._dirty) {
      updateComponent(p);
    }
  }
}

var Component = function Component(props, context) {
  this._dirty = true;
  this._disable = true;
  this._pendingStates = [];
  // Is a React Component.
  // tslint:disable-next-line:max-line-length
  // see: https://github.com/facebook/react/blob/3c977dea6b96f6a9bb39f09886848da870748441/packages/react/src/ReactBaseClasses.js#L26
  this.isReactComponent = EMPTY_OBJ;
  if (!this.state) {
    this.state = {};
  }
  this.props = props || {};
  this.context = context || EMPTY_OBJ;
  this.refs = {};
};
Component.prototype.setState = function setState(state, callback) {
  if (state) {
    (this._pendingStates = this._pendingStates || []).push(state);
  }
  if (isFunction(callback)) {
    (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
  }
  if (!this._disable) {
    enqueueRender(this);
  }
};
Component.prototype.getState = function getState() {
  var this$1 = this;

  // tslint:disable-next-line:no-this-assignment
  var ref = this;
  var _pendingStates = ref._pendingStates;
  var state = ref.state;
  var props = ref.props;
  if (!_pendingStates.length) {
    return state;
  }
  var stateClone = clone(state);
  var queue = _pendingStates.concat();
  this._pendingStates.length = 0;
  queue.forEach(function (nextState) {
    if (isFunction(nextState)) {
      nextState = nextState.call(this$1, state, props);
    }
    extend(stateClone, nextState);
  });
  return stateClone;
};
Component.prototype.forceUpdate = function forceUpdate(callback) {
  if (isFunction(callback)) {
    (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
  }
  updateComponent(this, true);
};
// tslint:disable-next-line
Component.prototype.render = function render(nextProps, nextState, nextContext) {};

var PureComponent = function (Component$$1) {
  function PureComponent() {
    Component$$1.apply(this, arguments);
    this.isPureComponent = true;
  }

  if (Component$$1) PureComponent.__proto__ = Component$$1;
  PureComponent.prototype = Object.create(Component$$1 && Component$$1.prototype);
  PureComponent.prototype.constructor = PureComponent;
  PureComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  };

  return PureComponent;
}(Component);

function isVChild(vnode) {
  return isVNode(vnode) || isString(vnode) || isNumber(vnode);
}
function render(vnode, container, callback) {
  if (!isVChild(vnode) && !isWidget(vnode)) {
    return null;
  }
  /* istanbul ignore if */
  if (!container) {
    throw new Error(container + " should be a DOM Element");
  }
  var lastVnode = container._component;
  var dom;
  options.roots.push(vnode);
  if (lastVnode !== undefined) {
    options.roots = options.roots.filter(function (item) {
      return item !== lastVnode;
    });
    dom = patch(lastVnode, vnode, container, {});
  } else {
    dom = mountVNode(vnode, {});
    container.appendChild(dom);
  }
  if (container) {
    container._component = vnode;
  }
  flushMount();
  if (callback) {
    callback();
  }
  return vnode.component || dom;
}

function createVNode(type, props, children, key, namespace, owner, ref) {
  return {
    type: type,
    key: key || null,
    vtype: 2 /* Node */
    , props: props || EMPTY_OBJ,
    children: children,
    namespace: namespace || null,
    _owner: owner,
    dom: null,
    ref: ref || null
  };
}

function h(type, props, children) {
  var childNodes;
  if (props.children) {
    if (!children) {
      children = props.children;
    }
    delete props.children;
  }
  if (isArray(children)) {
    childNodes = [];
    addChildren(childNodes, children, type);
  } else if (isString(children) || isNumber(children)) {
    children = createVText(String(children));
  } else if (!isValidElement(children)) {
    children = EMPTY_CHILDREN;
  }
  return createVNode(type, props, childNodes !== undefined ? childNodes : children, props.key, props.namespace, props.owner, props.ref);
}
function addChildren(childNodes, children, type) {
  if (isString(children) || isNumber(children)) {
    childNodes.push(createVText(String(children)));
  } else if (isValidElement(children)) {
    childNodes.push(children);
  } else if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      addChildren(childNodes, children[i], type);
    }
  }
}

var ComponentWrapper = function ComponentWrapper(type, props) {
  this.vtype = 4 /* Composite */;
  this.type = type;
  this.name = type.name || type.toString().match(/^function\s*([^\s(]+)/)[1];
  type.displayName = this.name;
  this._owner = props.owner;
  delete props.owner;
  this.props = props;
  this.key = props.key;
  this.dom = null;
};
ComponentWrapper.prototype.init = function init(parentContext, parentComponent) {
  return mountComponent(this, parentContext, parentComponent);
};
ComponentWrapper.prototype.update = function update(previous, current, parentContext, domNode) {
  return reRenderComponent(previous, this);
};
ComponentWrapper.prototype.destroy = function destroy() {
  unmountComponent(this);
};

var StateLessComponent = function StateLessComponent(type, props) {
  this.vtype = 8 /* Stateless */;
  this.type = type;
  this._owner = props.owner;
  delete props.owner;
  this.props = props;
  this.key = props.key;
};
StateLessComponent.prototype.init = function init(parentContext) {
  return mountStatelessComponent(this, parentContext);
};
StateLessComponent.prototype.update = function update(previous, current, parentContext, domNode) {
  var props = current.props;
  var context = current.context;
  var shouldComponentUpdate = props.onShouldComponentUpdate;
  if (isFunction(shouldComponentUpdate) && !shouldComponentUpdate(previous.props, props, context)) {
    return domNode;
  }
  return reRenderStatelessComponent(previous, this, parentContext, domNode);
};
StateLessComponent.prototype.destroy = function destroy() {
  unmountStatelessComponent(this);
};

function transformPropsForRealTag(type, props) {
  var newProps = {};
  for (var propName in props) {
    var propValue = props[propName];
    if (propName === 'defaultValue') {
      newProps.value = props.value || props.defaultValue;
      continue;
    }
    var svgPropName = SVGPropertyConfig.DOMAttributeNames[propName];
    if (svgPropName && svgPropName !== propName) {
      newProps[svgPropName] = propValue;
      continue;
    }
    newProps[propName] = propValue;
  }
  return newProps;
}
/**
 *
 * @param props
 * @param defaultProps
 * defaultProps should respect null but ignore undefined
 * @see: https://facebook.github.io/react/docs/react-component.html#defaultprops
 */
function transformPropsForComponent(props, defaultProps) {
  var newProps = {};
  for (var propName in props) {
    var propValue = props[propName];
    newProps[propName] = propValue;
  }
  if (defaultProps) {
    for (var propName$1 in defaultProps) {
      if (isUndefined(newProps[propName$1])) {
        newProps[propName$1] = defaultProps[propName$1];
      }
    }
  }
  return newProps;
}
function createElement$2(type, properties) {
  var _children = [],
      len = arguments.length - 2;
  while (len-- > 0) {
    _children[len] = arguments[len + 2];
  }var children = _children;
  if (_children) {
    if (_children.length === 1) {
      children = _children[0];
    } else if (_children.length === 0) {
      children = undefined;
    }
  }
  var props;
  if (isString(type)) {
    props = transformPropsForRealTag(type, properties);
    props.owner = Current.current;
    return h(type, props, children);
  } else if (isFunction(type)) {
    props = transformPropsForComponent(properties, type.defaultProps);
    if (!props.children) {
      props.children = children || EMPTY_CHILDREN;
    }
    props.owner = Current.current;
    return type.prototype && type.prototype.render ? new ComponentWrapper(type, props) : new StateLessComponent(type, props);
  }
  return type;
}

function cloneElement(vnode, props) {
  var children = [],
      len = arguments.length - 2;
  while (len-- > 0) {
    children[len] = arguments[len + 2];
  }if (isVText(vnode)) {
    vnode.dom = null;
    return vnode;
  }
  if (isString(vnode)) {
    return createVText(vnode);
  }
  var properties = clone(extend(clone(vnode.props), props));
  if (vnode.namespace) {
    properties.namespace = vnode.namespace;
  }
  var childrenTmp = (arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children || properties.children) || [];
  if (childrenTmp.length) {
    if (childrenTmp.length === 1) {
      childrenTmp = children[0];
    }
  }
  if (isArray(vnode)) {
    return vnode.map(function (item) {
      return cloneElement(item);
    });
  }
  var newVNode = createElement$2(vnode.type, properties);
  if (isArray(childrenTmp)) {
    var _children = childrenTmp.map(function (child) {
      return cloneElement(child, child.props);
    });
    if (isVNode(newVNode)) {
      newVNode.children = _children;
    }
    newVNode.props.children = _children;
  } else if (childrenTmp) {
    if (isVNode(newVNode)) {
      newVNode.children = childrenTmp;
    }
    newVNode.props.children = cloneElement(childrenTmp, childrenTmp.props);
  }
  return newVNode;
}

var Children = {
  map: function map(children, fn, ctx) {
    if (isNullOrUndef(children)) {
      return children;
    }
    children = Children.toArray(children);
    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }
    return children.map(fn);
  },
  forEach: function forEach(children, fn, ctx) {
    if (isNullOrUndef(children)) {
      return;
    }
    children = Children.toArray(children);
    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }
    for (var i = 0, len = children.length; i < len; i++) {
      var child = isInvalid(children[i]) ? null : children[i];
      fn(child, i, children);
    }
  },
  count: function count(children) {
    children = Children.toArray(children);
    return children.length;
  },
  only: function only(children) {
    children = Children.toArray(children);
    if (children.length !== 1) {
      throw new Error('Children.only() expects only one child.');
    }
    return children[0];
  },
  toArray: function toArray(children) {
    if (isNullOrUndef(children)) {
      return [];
    }
    if (isArray(children)) {
      var result = [];
      flatten(children, result);
      return result;
    }
    return EMPTY_CHILDREN.concat(children);
  }
};
function flatten(arr, result) {
  for (var i = 0, len = arr.length; i < len; i++) {
    var value = arr[i];
    if (isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
}

// tslint:disable:no-conditional-assignment
function hydrate(vnode, container, callback) {
  if (container !== null) {
    // lastChild causes less reflow than firstChild
    var dom = container.lastChild;
    // there should be only a single entry for the root
    while (dom) {
      var next = dom.previousSibling;
      container.removeChild(dom);
      dom = next;
    }
    return render(vnode, container, callback);
  }
}

function unmountComponentAtNode(dom) {
  var component = dom._component;
  if (isValidElement(component)) {
    unmount(component, dom);
    delete dom._component;
    return true;
  }
  return false;
}
function findDOMNode(component) {
  return component && component.dom || component;
}
function createFactory(type) {
  return createElement$2.bind(null, type);
}
var WrapperComponent = function (Component$$1) {
  function WrapperComponent() {
    Component$$1.apply(this, arguments);
  }

  if (Component$$1) WrapperComponent.__proto__ = Component$$1;
  WrapperComponent.prototype = Object.create(Component$$1 && Component$$1.prototype);
  WrapperComponent.prototype.constructor = WrapperComponent;

  WrapperComponent.prototype.getChildContext = function getChildContext() {
    // tslint:disable-next-line
    return this.props.context;
  };
  WrapperComponent.prototype.render = function render$$1() {
    return this.props.children;
  };

  return WrapperComponent;
}(Component);
function unstable_renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
  // @TODO: should handle props.context?
  var wrapper = createElement$2(WrapperComponent, { context: parentComponent.context }, vnode);
  var rendered = render(wrapper, container);
  if (callback) {
    callback.call(rendered);
  }
  return rendered;
}
function createPortal(vnode, container) {
  // mountVNode can handle array of vnodes for us
  render(vnode, container);
  return null;
}

var index = {
  Children: Children,
  Component: Component,
  PureComponent: PureComponent,
  createElement: createElement$2,
  cloneElement: cloneElement,
  render: render,
  nextTick: nextTick,
  options: options,
  findDOMNode: findDOMNode,
  isValidElement: isValidElement,
  unmountComponentAtNode: unmountComponentAtNode,
  createPortal: createPortal,
  unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
  hydrate: hydrate,
  createFactory: createFactory
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.createElement = createElement$2;
exports.cloneElement = cloneElement;
exports.render = render;
exports.nextTick = nextTick;
exports.options = options;
exports.findDOMNode = findDOMNode;
exports.isValidElement = isValidElement;
exports.unmountComponentAtNode = unmountComponentAtNode;
exports.createPortal = createPortal;
exports.unstable_renderSubtreeIntoContainer = unstable_renderSubtreeIntoContainer;
exports.hydrate = hydrate;
exports.createFactory = createFactory;
exports.default = index;
//# sourceMappingURL=index.esm.js.map
},{}],16:[function(require,module,exports) {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],17:[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if ("development" !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
},{}],18:[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if ("development" !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
},{"./emptyFunction":16}],15:[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
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

},{}],14:[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],13:[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

if ("development" !== 'production') {
  var invariant = require('fbjs/lib/invariant');
  var warning = require('fbjs/lib/warning');
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if ("development" !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;
},{"fbjs/lib/invariant":17,"fbjs/lib/warning":18,"./lib/ReactPropTypesSecret":14}],11:[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');
var assign = require('object-assign');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
var checkPropTypes = require('./checkPropTypes');

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if ("development" !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      "development" !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      "development" !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
},{"fbjs/lib/emptyFunction":16,"fbjs/lib/invariant":17,"fbjs/lib/warning":18,"object-assign":15,"./lib/ReactPropTypesSecret":14,"./checkPropTypes":13}],12:[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"fbjs/lib/emptyFunction":16,"fbjs/lib/invariant":17,"./lib/ReactPropTypesSecret":14}],10:[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if ("development" !== 'production') {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function (object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}
},{"./factoryWithTypeCheckers":11,"./factoryWithThrowingShims":12}],8:[function(require,module,exports) {
module.exports="/dist/ad520abcc0d2b2d4d33e4bd1564a1990.svg";
},{}],5:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nervjs = require("nervjs");

var _nervjs2 = _interopRequireDefault(_nervjs);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _clock = require("./assets/clock.svg");

var _clock2 = _interopRequireDefault(_clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Clock = function Clock(_ref) {
  var zone = _ref.zone;

  return _nervjs2.default.createElement(
    "div",
    { className: "clock" },
    _nervjs2.default.createElement(
      "div",
      { className: "clock__svg-wrapper" },
      _nervjs2.default.createElement(
        "object",
        { data: _clock2.default, type: "image/svg+xml", width: "200", height: "200" },
        _nervjs2.default.createElement("param", { name: "gmt", value: zone.GMT }),
        _nervjs2.default.createElement("param", { name: "dial", value: "austria" }),
        _nervjs2.default.createElement("param", { name: "hourHand", value: "swiss" }),
        _nervjs2.default.createElement("param", { name: "minuteHand", value: "swiss" }),
        _nervjs2.default.createElement("param", { name: "secondHand", value: "none" }),
        _nervjs2.default.createElement("param", { name: "minuteHandBehavior", value: "stepping" }),
        _nervjs2.default.createElement("param", { name: "secondHandBehavior", value: "swinging" }),
        _nervjs2.default.createElement("param", { name: "secondHandStopToGo", value: "yes" }),
        _nervjs2.default.createElement("param", { name: "secondHandStopTime", value: "1.5" }),
        _nervjs2.default.createElement("param", { name: "backgroundColor", value: "rgba(0,0,0,0)" }),
        _nervjs2.default.createElement("param", { name: "dialColor", value: "rgb(40,40,40)" }),
        _nervjs2.default.createElement("param", { name: "hourHandColor", value: "rgb(20,20,20)" }),
        _nervjs2.default.createElement("param", { name: "minuteHandColor", value: "rgb(20,20,20)" }),
        _nervjs2.default.createElement("param", { name: "secondHandColor", value: "rgb(160,50,40)" }),
        _nervjs2.default.createElement("param", { name: "axisCoverColor", value: "rgb(40,40,40)" }),
        _nervjs2.default.createElement("param", { name: "axisCoverRadius", value: "0" }),
        _nervjs2.default.createElement("param", { name: "updateInterval", value: "50" })
      )
    ),
    zone && _nervjs2.default.createElement(
      "p",
      { className: "clock__svg-wrapper" },
      zone.title
    )
  );
};

Clock.propTypes = {
  zone: _propTypes2.default.shape({
    GMT: _propTypes2.default.string,
    title: _propTypes2.default.string
  })
};

exports.default = Clock;
},{"nervjs":6,"prop-types":10,"./assets/clock.svg":8}],9:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error;
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;

},{}],7:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;

},{"./bundle-url":9}],4:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":7}],3:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nervjs = require("nervjs");

var _nervjs2 = _interopRequireDefault(_nervjs);

var _Clock = require("./Clock");

var _Clock2 = _interopRequireDefault(_Clock);

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _nervjs2.default.createElement(
        "div",
        { className: "container" },
        this.zones.map(function (zone) {
          return _nervjs2.default.createElement(_Clock2.default, { zone: zone });
        })
      );
    }
  }, {
    key: "zones",
    get: function get() {
      return [{
        title: 'Berlin',
        GMT: 'CET'
      }, {
        title: 'San Francisco',
        GMT: 'GMT-8'
      }];
    }
  }]);

  return App;
}(_nervjs2.default.Component);

exports.default = App;
},{"nervjs":6,"./Clock":5,"./App.css":4}],2:[function(require,module,exports) {
"use strict";

var _nervjs = require("nervjs");

var _nervjs2 = _interopRequireDefault(_nervjs);

var _App = require("./src/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nervjs2.default.render(_nervjs2.default.createElement(_App2.default, null), document.getElementById('app')); // nervjs
},{"nervjs":6,"./src/App":3}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://' + window.location.hostname + ':55541/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,2])