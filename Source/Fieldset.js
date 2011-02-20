/*
---
 
script: Fieldset.js
 
description: A field set in a form
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Native
  - LSD/LSD.Trait.Fieldset

provides: 
  - LSD.Widget.Fieldset
 
...
*/

LSD.Native.Fieldset = new Class({
  Includes: [
    LSD.Native,
    LSD.Trait.Fieldset
  ],
  
  options: {
    tag: 'fieldset'
  }
})
