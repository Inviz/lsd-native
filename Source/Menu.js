/*
---
 
script: Menu.js
 
description: A generic menu
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Native

provides: 
  - LSD.Native.Menu
 
...
*/

LSD.Native.Menu = new Class({
  Extends: LSD.Native,
  
  options: {
    tag: 'menu'
  }
});