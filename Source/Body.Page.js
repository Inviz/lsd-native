/*
---
 
script: Body.Page.js
 
description: An in-page independent document (like iphone app page)
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:  
  - LSD/LSD.Native.Body

provides:
  - LSD.Native.Body.Page

...
*/

LSD.Native.Body.Page = new Class({
  Extends: LSD.Native.Body,
  
  options: {
    element: {
      tag: 'section'
    },
    classes: ['page']
  }
});