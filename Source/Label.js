/*
---
 
script: Label.js
 
description: A label for a form field
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Native

provides: 
  - LSD.Native.Label
 
...
*/

LSD.Native.Label = new Class({
  Extends: LSD.Native,
  
  options: {
    tag: 'label',
    events: {
      _label: {
        dominject: function(element, doc) {
          var id = this.attributes['for'];
          if (id) doc.expect({id: id, combinator: ' ', tag: '*'}, function(widget, state) {
            this[state ? 'setControl' : 'unsetControl'](widget);
          }.bind(this))
        }
      },
      control: {
        
      }
    }
  },
  
  setControl: function(widget) {
    this.control = widget;
    if (!widget.labels) widget.labels = [];
    widget.labels.push(this)
  },
  
  unsetControl: function(widget) {
    delete this.control;
    widget.labels.erase(this);
  }
})