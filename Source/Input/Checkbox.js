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
    events: {
      _checkbox: {
        self: {
          'click': 'toggle',
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

LSD.Native.Input.Checkbox.prototype.addState('checked');