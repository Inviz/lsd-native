/*
---
 
script: Submit.js
 
description: A button that submits form
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Button
  - LSD.Native.Input

provides: 
  - LSD.Native.Input.Submit
  - LSD.Native.Button.Submit
 
...
*/

LSD.Native.Button.Submit = LSD.Native.Input.Submit = new Class({

  Extends: LSD.Native.Button,
  
  initialize: function() {
    this.parent.apply(this, arguments);
    this.addPseudo('touchable');
  }

});
