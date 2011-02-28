/*
---
 
script: Date.js
 
description: Date picker input
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Input
  - LSD.Trait.Date

provides: 
  - LSD.Native.Input.Date

...
*/

LSD.Native.Input.Date = new Class({
  Includes: [
    LSD.Native.Input,
    LSD.Trait.Date
  ],
  
  options: {
    attributes: {
      type: 'date'
    }
  }
})