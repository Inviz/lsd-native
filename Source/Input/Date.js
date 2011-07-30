/*
---
 
script: Date.js
 
description: Date picker input
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Input
  - LSD/LSD.Mixin.Date

provides: 
  - LSD.Native.Input.Date

...
*/

LSD.Native.Input.Date = new Class({
  Extends: LSD.Native.Input,
  
  options: {
    attributes: {
      type: 'date'
    },
    pseudos: Array.object('date'),
    layout: {
      'if &:focused': {
        '::dialog:of-kind(input-date)': {
          'button.previous': 'Previous month',
          'button.next': 'Next month',
          'table[type=calendar]': true
        }
      }
    },
    relations: {
      decrementor: {
        selector: '.previous',
        events: {
          click: 'decrement'
        }
      },
      incrementor: {
        selector: '.next',
        events: {
          click: 'increment'
        }
      },
      calendar: {
        selector: 'table',
        events: {
          click: 'increment',
          set: 'setDate'
        }
      }
    },
    events: {
      _date: {
        build: function() {
          this.setDate(this.getDate());
        },
        setDate: function(date, source) {
          if (date && !source) this.element.set('value', this.formatDate(date));
          if (this.calendar) this.calendar.setDate(date);
        },
        change: 'setDate'
      }
    }
  }
});
