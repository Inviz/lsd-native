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
    tag: 'button',
    element: {
      tag: 'a'
    },
    events: {
      _button: {
        enabled: {
          element: {
            click: 'click'
          }
        }
      }
    },
    pseudos: Array.fast('touchable')
  },
  
  click: function(event) {
    var kicked = this.parent.apply(this, arguments);
    if (event/* && !(kicked.indexOf('send') > -1 && !this.getRequestData() && this.element.get('tag') == 'a' && this.getRequestMethod() == 'get' && !this.isRequestURLLocal())*/) event.preventDefault();
    return kicked;
  }
});
