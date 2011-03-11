/*
---
 
script: Form.js
 
description: A form widgets. Intended to be submitted.
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Native
  - LSD/LSD.Trait.Form
  - LSD/LSD.Trait.Fieldset

provides: 
  - LSD.Native.Form
 
...
*/

LSD.Native.Form = new Class({
  Includes: [
    LSD.Native,
    LSD.Trait.Fieldset,
    LSD.Trait.Form
  ],
  
  options: {
    tag: 'form',
    element: {
      // novalidate html attribute disables internal form validation 
      // on form submission. Chrome and Safari will block form 
      // submission without any visual clues otherwise.
      novalidate: true 
    },
    events: {
      element: {
        submit: 'submit'
      },
      request: {
        badRequest: function() {
          console.log('badReuest', Array.concat(arguments))
        }
      }
    }
  }
})
