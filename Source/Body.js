/*
---
 
script: Body.js
 
description: Lightweight document body wrapper
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:  
  - LSD/LSD.Native
  - LSD/LSD.Document
  - LSD/LSD.Document.Resizable
  - LSD/LSD.Document.Commands
  - LSD/LSD.Module.Expectations

provides:
  - LSD.Native.Body

...
*/

LSD.Native.Body = new Class({
  Includes: [
    LSD.Document, 
    LSD.Document.Resizable, 
    LSD.Document.Commands, 
    LSD.Module.Expectations
  ],
  
  getSelector: false
});