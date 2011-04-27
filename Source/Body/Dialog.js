/*
---
 
script: Dialog.js
 
description: A multipurpose yes/no dialog
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Body.Page

provides:
  - LSD.Native.Body.Dialog

...
*/

LSD.Native.Body.Dialog = new Class({
  Includes: [
    LSD.Native.Body.Page,
    LSD.Trait.Fieldset
  ],
  
  options: {
    classes: Array.fast('dialog'),
    pseudos: Array.fast('submittable'),
    events: {
      _dialog: {
        element: {
          'click:relay(.cancel)': 'cancel'
        },
        self: {
          hide: function() {
            if (LSD.application) LSD.application.back();
          }
        }
      }
    },
    has: {
      one: {
        'form': {
          selector: 'form',
          chain: {
            'submission': function() {
              return {name: 'send', target: this.document}
            }
          }
        }
      }
    }
  },
  
  cancel: function() {
    this.hide();
    this.fireEvent('cancel', arguments);
  },
  
  submit: function() {
    this.hide();
    this.fireEvent('submit', arguments);
  },
  
  getData: function() {
    return (this.form ? this.form.getData : this.parent).apply(this.form || this, arguments);
  },
  
  hidden: true
});