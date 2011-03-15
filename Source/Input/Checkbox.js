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
  
  Stateful: {
    checked: ['check', 'uncheck', 'toggle']
  },
  
  options: {
    events: {
      self: {
        'click': 'toggle',
        'build': function() {
          if (this.element.checked) this.click();
          this.element.addListener('click', this.click.bind(this))
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
})