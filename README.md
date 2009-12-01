Clickables
=========

FontChecker is a highly inventive javascript-based font availability checker that compares the size of two elements to deliver its verdict.

![Screenshot](http://davidwalsh.name/dw-content/font-checker.jpg)


How to Use
----------
FontChecker can be initialized at any time but is generally initialized at the top of the document during the page's normal load.  There are no required arguments -- only options.
	
### Javascript
	/* initialize */
	var fc = new FontChecker();
	/* sample usage */
	if(fc.check('Comic Sans')) {
		$$('h1').setStyle('font-family','Comic Sans');
	}

For specific usage and options, please read the documentation or visit [http://davidwalsh.name/js/fontchecker](http://davidwalsh.name/js/fontchecker)