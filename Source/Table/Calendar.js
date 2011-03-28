/*
---
 
script: Calendar.js
 
description: A nice simple calendar table
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD.Native.Table

provides: 
  - LSD.Native.Table.Calendar
 
...
*/

LSD.Native.Table.Calendar = new Class({
  Extends: LSD.Native.Table,
  
  options: {
    date: null,
    format: {
      caption: "%B %Y"
    },
    classes: ['calendar'],
    events: {
      _calendar: {
        self: {
          'build': function() {
            this.setDate(this.options.date);
          }
        },
        element: {
          'touchstart:relay(td:not(.empty))': 'touchDate',
          'touchend': 'untouchDate',
          'touchcancel': 'untouchDate',
          'click:relay(td:not(.empty))': 'selectDate'
        }
      }
    }
  },
  
  setRow: function(days) {
    var row = this.parent.apply(this, arguments);
    var number = days[0]
    if ((number <= this.day) && (number + 7 > this.day)) {
      row.className = 'selected';
    } else if (number > this.day) {
      row.className = 'future';
    } else {
      row.className = 'past';
    }
    return row;
  },
  
  selectDate: function(e) {
    var cell = e.target;
    this.day = this.getDayFromCell(cell);
    this.setCell(this.selected);
    this.selected = cell;
    this.setCell(this.selected);
  },
  
  touchDate: function(e) {
    e.target.className += " touched"
    this.touched = e.target;
  },
  
  untouchDate: function(e) {
    if (!this.touched) return;
    this.touched.className = this.touched.className.replace(/\s*touched\s*/, ' ');
    delete this.touched;
  },
  
  getDayFromCell: function(cell) {
    return parseInt(cell.innerHTML);
  },
  
  setCell: function(number) {
    var cell = this.parent.apply(this, arguments);
    if (cell == number) number = this.getDayFromCell(cell);
    if (number == ' ') {
      cell.className = 'empty';
    } else if (number == this.day) {
      cell.className = 'selected';
      this.selected = cell;
    } else if (number > this.day) {
      cell.className = 'future';
    } else {
      cell.className = 'past';
    }
    return cell;
  },
  
  setDate: function(date) {
    this.date = date = (date ? date.clone() : new Date);
    this.day = this.date.getDate();
    var table = {
      caption: date.format(this.options.format.caption),
      data: [[]],
      header: Locale.get('Date.days_abbr')
    };
    if (this.options.footer !== false) table.footer = table.header;
    var data = table.data;
    var beginning = date.clone().set('date', 1);
    var day = beginning.get('day');
    var last = date.getLastDayOfMonth();
    for (var i = 0; i < day; i++) data[0].push(' ');
    for (var i = 1; i <= last; i++) {
      var index = Math.floor((i + day - 1) / 7);
      var row = data[index];
      if (!row) row = data[index] = [];
      row.push(i);
    }
    for (var i = 0, j = data.length - 1, k = (7 - ((last + day) % 7)); i < k; i++) data[j].push(' ');
    if (this.built) this.setTable(table);
    else Object.extend(this.options, table);
  }
});