/*
---
 
script: Anchor.js
 
description: A link that does requests and actions
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Native
  - LSD/LSD.Module.Accessories
  - LSD/LSD.Module.Layout
  - LSD/LSD.Mixin.Dialog
  - LSD/LSD.Mixin.Request

provides: 
  - LSD.Native.Anchor
 
...
*/

LSD.Native.Anchor = new Class({
  Includes: [
    LSD.Module.Accessories,
    LSD.Module.Behavior,
    LSD.Module.Layout,
    LSD.Mixin.Request,
    LSD.Mixin.Dialog
  ],
  
  options: {
    request: {
      type: 'form'
    },
    layout: {
      render: false
    }
  },

  click: function(event) {
    if (event && event.preventDefault) event.preventDefault();
    if (!this.disabled) return this.parent.apply(this, arguments);
  },

  initialize: LSD.Module.Options.initialize

});

LSD.Native.Anchor.prototype.addStates('disabled', 'built', 'attached');