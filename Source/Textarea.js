/*
---
 
script: Textarea.js
 
description: Multiline text input
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Input

provides: 
  - LSD.Native.Textarea
 
...
*/

LSD.Native.Textarea = new Class({
  Extends: LSD.Native.Input,
  
  options: {
    element: {
      tag: 'textarea'
    },
    tag: 'textarea'
  }
})