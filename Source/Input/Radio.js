/*
---
 
script: Radio.js
 
description: Simple text input
 
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
            !function() {
              this.element.checked = true;
            }.delay(0, this);
            this.setAttribute('checked', true);
          },
          uncheck: function() {
            this.setAttribute('checked', false);
          }
        }
      }
    }
  }
});