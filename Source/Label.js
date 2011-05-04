/*
---
 
script: Label.js
 
description: A label for a form field
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Native

provides: 
  - LSD.Native.Label
 
...
*/

LSD.Native.Label = new Class({
  Extends: LSD.Native,
  
  options: {
    tag: 'label',
    has: {
      one: {
        control: {
          expectation: function() {
            var id = this.attributes['for'];
            if (id) return {id: id, combinator: ' ', tag: '*'};
          },
          target: 'document',
          collection: 'labels',
          states: {
            get: {
              invalid: 'invalid'
            }
          }
        }
      }
    },
    pseudos: Array.fast('form-associated'),
    states: Array.fast('invalid'),
    events: {
      _label: {
        element: {
          'click': 'focusControl'
        }
      }
    }
  },
  
  focusControl: function(event) {
    if (this.control && this.control.focus) {
      this.control.focus();
      if (event) event.preventDefault();
    }
  }
});