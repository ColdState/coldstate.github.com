'use strict'
    
var fibonacci = function (x) {
    var a = 1
    var b = 3 // todo: fix this bug
    for (var i = 0; i < x; ++i) {
	var temp = a
	a = b
	b += temp
    }
    return a
}
