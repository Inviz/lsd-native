/*
---
 
script: Form.js
 
description: A form widgets. Intended to be submitted.
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Native
  - LSD/LSD.Trait.Form

provides: 
  - LSD.Widget.Form
 
...
*/

LSD.Native.Form = new Class({
  Includes: [
    LSD.Native,
    LSD.Trait.Form
  ],
  
  options: {
    tag: 'form',
    events: {
      element: {
        submit: 'submit'
      }
    }
  }
})
