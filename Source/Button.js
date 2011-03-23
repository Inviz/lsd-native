/*
---
 
script: Button.js
 
description: A button widget. You click it, it fires the event
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Native
  - LSD/LSD.Mixin.Touchable

provides: 
  - LSD.Native.Button
 
...
*/
LSD.Native.Button = new Class({

  Extends: LSD.Native,

  options: {
    tag: 'button',
    element: {
      tag: 'a'
    },
    events: {
      _button: {
        element: {
          click: 'click'
        }
      }
    },
    pseudos: Array.fast('touchable')
  },
  
  click: function(event) {
    if (event && event.preventDefault) event.preventDefault();
    if (!this.disabled) return this.parent.apply(this, arguments);
  }
});
