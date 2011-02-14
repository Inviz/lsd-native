/*
---
 
script: A.js
 
description: A link
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Native
  - LSD/LSD.Mixin.Request

provides: 
  - LSD.Native.A
 
...
*/

LSD.Native.A = new Class({
  Extends: LSD.Native,
  
  options: {
    tag: 'a',
  }
})