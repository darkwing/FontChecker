Class: FontChecker {#FontChecker}
=================================

### Implements:

Options, Events


FontChecker Method: constructor {#FontChecker:constructor}
-----------------------------------------------------------


### Syntax:

	var myFontChecker = new FontChecker();

### Options:

* fakeFont - (*string*, defaults to "__RUBBISH_FONT__")  The fake font to check against.
* testString - (*string*, defaults to "abcdefghijklmnopqrstuvwxyz")  The string to check fonts against.


FontChecker Method: start {#FontChecker:start}
-----------------------------------------------


### Syntax:

	FontChecker.check(string);

### Returns:

A Boolean value representing the result of the check