/*
---
 
script: Input.js
 
description: A base class for all kinds of form controls
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
 - LSD/LSD.Native
 - LSD/LSD.Trait.Field
 - LSD/LSD.Trait.Value

provides: 
  - LSD.Native.Input
 
...
*/

LSD.Native.Input = new Class({
  Includes: [
    LSD.Native,
    LSD.Trait.Field,
    LSD.Trait.Value
  ],
  
  options: {
    tag: 'input',
    events: {
      _input: {
        element: {
          change: 'setValue'
        }
      }
    }
  },
  
  applyValue: function(value) {
    this.element.set('value', value);
  },
  
  getRawValue: function() {
    return this.element.get('value');
  }
  
  
})