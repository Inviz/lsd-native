/*
---
 
script: Command.js
 
description: Command node creates accessible command
 
license: Public domain (http://unlicense.org).

authors: Yaroslaff Fedin
 
requires:
  - LSD/LSD.Node
  - LSD/LSD.Native
  - LSD/LSD.Module.Command
  - LSD/LSD.Module.DOM
  
provides:
  - LSD.Native.Command
  - LSD.Native.Command.Command
  - LSD.Native.Command.Checkbox
  - LSD.Native.Command.Radio
 
...
*/

LSD.Native.Command = new Class({
  Includes: [
    LSD.Node,
    LSD.Module.DOM,
    LSD.Module.Command
  ]
});

(function(Command) {
  Command.Command = Command.Checkbox = Command.Radio = Command;
})(LSD.Native.Command);