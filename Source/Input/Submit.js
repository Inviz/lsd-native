/*
---
 
script: Submit.js
 
description: A button that submits form
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Input
  - Widgets/LSD.Widget.Button

provides: 
  - LSD.Native.Input.Submit
 
...
*/

LSD.Native.Input.Submit = new Class({

  Extends: LSD.Widget.Button,
  
  options: {
    events: {
      _submission: {
        click: 'submit',
        dominject: function() {
          var tag = this.element.get('tag');
          if (!tag || tag == 'input' || tag == 'button') return;
          this.shim = new Element('input[type=submit]', {
            styles: {
              width: 1,
              height: 0,
              display: 'block',
              border: 0,
              padding: 0,
              overflow: 'hidden',
              position: 'absolute'
            },
            events: {
              click: function(e) {
                e.preventDefault()
              }.bind(this)
            }
          }).inject(this.element);
          this.element.addEvent('destroy', this.shim.destroy.bind(this.shim));
        }
      }
    },
    chain: {
      submission: function() {
        var target = this.form || Slick.find(this, '! :submittable') || (this.document && this.document.submit && this.document);
        if (target) return {action: 'send', target: target};
      }
    },
    pseudos: Array.fast('form-associated')
  }
});
