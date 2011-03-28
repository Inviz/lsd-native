/*
---
 
script: List.js
 
description: A fancy griddy list
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Menu
  - LSD/LSD.Trait.List

provides: 
  - LSD.Native.Menu.List
 
...
*/

LSD.Native.Menu.List = new Class({
  Includes: [
    LSD.Native.Menu,
    LSD.Trait.List
  ]
})