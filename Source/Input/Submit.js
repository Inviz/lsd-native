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
            if (!tag || tag == 'input' || tag == 'button') return;
            this.shim = new Element('input[type=submit]', {
              styles: {
                width: 1,
                height: 0,
                display: 'block',
                border: 0,
                padding: 0,
                overflow: 'hidden'
              },
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
    },
    chain: {
      submission: function() {
        var target = this.form || Slick.find(this, '! :submittable');
        if (target) return ['send', target];
      }
    }
  },
  
  initialize: function() {
    this.parent.apply(this, arguments);
    if (this.attributes.name) this.addPseudo('form-associated');
  }

});
