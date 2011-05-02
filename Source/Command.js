/*
---
 
script: Command.js
 
description: Command node creates accessible command
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Native
  - LSD/LSD.Module.Command
  - LSD/LSD.Module.DOM
  - LSD/LSD.Module.Element
  - LSD/LSD.Module.Options
  
provides:
  - LSD.Native.Command
  - LSD.Native.Command.Command
  - LSD.Native.Command.Checkbox
  - LSD.Native.Command.Radio
 
...
*/

LSD.Native.Command = new Class({
  Includes: [
    LSD.Module.DOM,
    LSD.Module.Command,
    LSD.Module.Element, 
    LSD.Module.Options
  ],
  
  initialize: LSD.Module.Options.initialize
});

!function(Command) {
  Command.Command = Command.Checkbox = Command.Radio = Command;
}(LSD.Native.Command);