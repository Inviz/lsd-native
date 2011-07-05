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
    pseudos: Array.fast('checkbox', 'clickable'),
    events: {
      _checkbox: {
        self: {
          setDocument: function() {
            if (this.attributes.checked) this.click();
          },
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