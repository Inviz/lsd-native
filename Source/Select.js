/*
---
 
script: Select.js
 
description: Basic selectbox
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Input

provides: 
  - LSD.Native.Select
 
...
*/

LSD.Native.Select = new Class({
  Extends: LSD.Native.Input,
  
  options: {
    tag: 'select'
  }
  
})