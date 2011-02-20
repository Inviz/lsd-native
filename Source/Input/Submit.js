/*
---
 
script: Submit.js
 
description: A button that submits form
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Input
  - LSD.Native.Button

provides: 
  - LSD.Native.Input.Submit
 
...
*/

LSD.Native.Input.Submit = new Class({

  Extends: LSD.Native.Button,
  
  options: {
    events: {
      _submission: {
        self: {
          click: 'submit',
          build: function() {
            var tag = this.element.get('tag');
            console.log('lolol build', tag)
            if (!tag || tag == 'input' || tag == 'button') return;
            this.shim = new Element('input[type=submit]', {
              events: {
                click: function() {
                  this.click();
                  return false;
                }.bind(this)
              }
            }).inject(this.element);
            this.addEvent('destroy', this.shim.destroy.bind(this.shim));
          }
        }
      }
    }
  },
  
  initialize: function() {
    this.parent.apply(this, arguments);
    console.log('submittie')
    if (this.attributes.name) this.addPseudo('form-associated');
  },
  
  submit: function(e) {
    if (this.form) {
      this.form.submit();
      if (e) e.preventDefault();
    }
  }

});
