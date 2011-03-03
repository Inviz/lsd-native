/*
---
 
script: Table.js
 
description: All-purpose table class
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Native

provides: 
  - LSD.Native.Table
 
...
*/

LSD.Native.Table = new Class({
  Extends: LSD.Native,
  
  options: {
    header: null,
    footer: null,
    caption: null,
    events: {
      _table: {
        self: {
          build: function() {
            var el = this.element;
            this.head = el.tHead;
            this.tbody = el.tBody;
            this.tfoot = el.tFoot;
            this.setTable(this.options);
          }
        }
      }
    },
    tag: 'table'
  },
  
  setTable: function(table) {
    if (table != this.options) this.setOptions(table);
    if (table.caption) this.setCaption(table.caption);
    if (table.header) this.setHeader(table.header);
    if (table.data) this.setData(table.data);
    if (table.footer) this.setFooter(table.footer);
  },
  
  setData: function(data) {
    if (!this.tbody) this.tbody = new Element('tbody').inject(this.element);
    else this.tbody.empty()
    for (var i = 0, row; row = data[i++];) this.tbody.appendChild(this.setRow(row));
  },
  
  setRow: function(values) {
    var element = document.createElement('tr');
    for (var i = 0, value; value = values[i++];) element.appendChild(this.setCell(value));
    return element;
  },
  
  setCell: function(value) {
    if (value.nodeType) return value;
    var element = document.createElement('td');
    element.appendText(value);
    return element;
  },
  
  setHeaderCell: function(value) {
    if (value.nodeType) return value;
    var element = document.createElement('th');
    element.appendText(value);
    return element;
  },
  
  setCaption: function(text) {
    if (!this.caption) this.caption = new Element('caption').inject(this.element);
    this.caption.innerHTML = text;
    return this.caption;
  },
  
  setHeader: function(header) {
    if (!this.thead) this.thead = new Element('thead').inject(this.element);
    else this.thead.empty()
    header.each(function(name) {
      this.thead.appendChild(this.setHeaderCell(name))
    }, this);
    return this.thead;
  },
  
  setFooter: function(footer) {
    if (!this.tfoot) this.tfoot = new Element('tfoot').inject(this.element);
    else this.tfoot.empty()
    footer.each(function(name) {
      this.tfoot.appendChild(this.setHeaderCell(name))
    }, this);
    return this.tfoot;
  }
})