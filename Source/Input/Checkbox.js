/*
---
 
script: Checkbox.js
 
description: Simple text input
 
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
    command: {
      type: 'checkbox'
    },
    states: Array.fast('checked'),
    events: {
      _checkbox: {
        element: {
          click: function() { //do it for ie so onchange is fired
            this.blur();
            this.focus()
          }
        },
        self: {
          'attach': function() {
            if (this.element.checked) this.click();
            this.element.addListener('click', this.click.bind(this));
          },
          'check': function() {
            this.element.checked = true;
          },
          'uncheck': function() {
            this.element.checked = false;
          }
        }
      }
    }
  }
});