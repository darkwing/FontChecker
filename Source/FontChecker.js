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
var FontChecker = new Class({
	/* implements */
	Implements: [Options],
	/* options */
	options: {
		fakeFont: '__RUBBUSH_FONT__',
		testString: 'abcdefghijklmnopqrstuvwxyz'
	},
	/* initialization */
	initialize: function(options) {
		//set options
		this.setOptions(options);
	},
	/* a method that does whatever you want */
	check: function(desiredFont) {
		/* create a hidden element */
		var element = new Element('span',{
			styles: {
				position: 'absolute',
				top: -10,
				right: -10,
				'font-family': this.options.fakeFont
			},
			html: this.options.testString
		}).inject(document.body);
		/* apply a fake font, get width */
		var width = element.getCoordinates().width;
		/* apply desired font */
		element.setStyle('font-family', desiredFont);
		var new_width = element.getCoordinates().width;
		/* take our temp element out of the DOM */
		element.dispose();
		/* compare widths to see check if font is available */
		return (width !== new_width);
	}
});
