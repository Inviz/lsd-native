/*
---
 
script: Password.js
 
description: Simple text input
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Input

provides: 
  - LSD.Native.Input.Password
 
...
*/

LSD.Native.Input.Password = new Class({
  Extends: LSD.Native.Input,
  
  options: {
    events: {
      _password: {
        self: {
          placehold: function(){
            this.element.set('type', 'text');
          },
          unplacehold: function(){
            this.element.set('type', 'password');
          }
        } 
      }
    }
  }
  
});