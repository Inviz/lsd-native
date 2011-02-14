/*
---
 
script: Button.js
 
description: A button widget. You click it, it fires the event
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Native
  - LSD/LSD.Mixin.Touchable

provides: 
  - LSD.Native.Button
 
...
*/

LSD.Native.Button = new Class({

  Extends: LSD.Native,

  options: {
    tag: 'button'
  },
  
  initialize: function() {
    this.parent.apply(this, arguments);
    this.addPseudo('touchable');
  }
});
