/*
---
 
script: Input.js
 
description: A base class for all kinds of form controls
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
 - LSD/LSD.Native
 - Ext/Element.Events.input
 
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
          input: 'setValue',
          change: 'setValue',
          focus: 'onFocus',
          blur: 'onBlur'
        }
      }
    },
    inline: null,
    pseudos: Array.object('form-associated', 'focusable', 'value')
  },
  
  applyValue: function(value) {
    this.element.set('value', value);
  },
  
  getRawValue: function() {
    return this.element.get('value');
  }
  
});