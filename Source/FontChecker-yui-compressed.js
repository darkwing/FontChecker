/*
---
description:     FontChecker

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - FontChecker
...
*/
var FontChecker=new Class({Implements:[Options],options:{fakeFont:"__RUBBUSH_FONT__",testString:"abcdefghijklmnopqrstuvwxyz"},initialize:function(a){this.setOptions(a);},check:function(d){var b=new Element("span",{styles:{position:"absolute",top:-10,right:-10,"font-family":this.options.fakeFont},html:this.options.testString}).inject(document.body);var c=b.getCoordinates().width;b.setStyle("font-family",d);var a=b.getCoordinates().width;b.dispose();return(c!==a);}});
