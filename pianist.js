/*
 * Pianist.js - a library that is good with keys
 * Lee James Machin, 2012
 */

var Pianist = (function() {
  var Pianist;

  function isEditable(target) {
    return target.hasAttribute('contenteditable') ||
           ['input', 'textarea'].indexOf(target.tagName.toLowerCase()) > 0;
  }

  Pianist = function Pianist() {
    this.keys = {};
    this.listen();
    return this;
  };

  Pianist.prototype.add = function add(key, func) {
    Object.defineProperty(this.keys, key, {
      enumerable: true,
      configurable: false,
      value: func
    });
  };

  Pianist.prototype.remove = function remove(key) {
    delete this.keys[key];
  };

  Pianist.prototype.listen = function listen() {
    var _this = this;
    document.body.addEventListener('keypress', function(evt) {
      var evt        = evt || window.event,
          charCode   = evt.which || evt.keyCode,
          keyPressed = String.fromCharCode(charCode),
          modifiers  = _this.buildModifierString(evt),
          target     = evt.target || evt.srcElement,
          key;

      // make the keypressed lower case if we're dealing with a combo,
      // as using Shift will change the result and not work.
      if (modifiers) {
        key = [modifiers, keyPressed].join('+');
      } else {
        key = keyPressed;
      }

      if (_this.keys.hasOwnProperty(key) && !isEditable(target)) {
        return _this.keys[key].call(document.body, evt, key);
      }
    }, false);
  };

  Pianist.prototype.buildModifierString = function buildModifierString(evt) {
    var modifiers = [];

    if (evt.ctrlKey) {
      modifiers.push('Ctrl');
    }
    if (evt.altKey) {
      modifiers.push('Alt');
    }

    return modifiers.length > 0 ? modifiers.join('+') : false;
  };

  return Pianist;
})();
