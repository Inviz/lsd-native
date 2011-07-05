/*
---
 
script: Radio.js
 
description: One-from-a-list kind of a widget
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Input

provides: 
  - LSD.Native.Input.Radio
 
...
*/

LSD.Native.Input.Radio = new Class({
  Extends: LSD.Native.Input,

  options: {
    pseudos: Array.fast('radio', 'clickable'),
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