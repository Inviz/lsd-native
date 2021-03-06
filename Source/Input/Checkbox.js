/*
---
 
script: Checkbox.js
 
description: On/Off widget
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Input

provides: 
  - LSD.Native.Input.Checkbox
 
...
*/

LSD.Native.Input.Checkbox = new Class({
  Extends: LSD.Native.Input,
  
  options: {
    pseudos: Array.object('checkbox', 'clickable'),
    attributes: {
      type: 'checkbox'
    },
    events: {
      _checkbox: {
        self: {
          check: function() {
            this.element.checked = true;
          },
          uncheck: function() {
            this.element.checked = false;
          }
        }
      }
    }
  }
});