/*
---
 
script: Input.js
 
description: A base class for all kinds of form controls
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
 - LSD/LSD.Native

provides: 
  - LSD.Native.Input
 
...
*/

LSD.Native.Input = new Class({
  options: {
    tag: 'input',
    events: {
      _input: {
        element: {
          change: 'setValue'
        }
      }
    },
    inline: null,
    focusable: false,
    writable: true
  },
  
  applyValue: function(value) {
    this.element.set('value', value);
  },
  
  getRawValue: function() {
    return this.element.get('value');
  },
  
  focus: function() {
    this.element.focus();
  }
  
});