'use strict'

// Skew is a namespace
var Skew = function () {

    // Zero is a class within Skew
    var Zero = function () {}

    // Zero has a method, valueOf.
    // that returns zero
    Zero.prototype.valueOf = function () {
	return 0
    }

    // Zero has a method, successor, 
    // that builds a representation of 1
    Zero.prototype.successor = function () {
	return new Nonzero(0, new Zero())
    }

    // Zero has a method, successor_helper,
    // that builds a representation of 2^n+1
    Zero.prototype.successor_helper = function (rank) {
	return new Nonzero(0, new Nonzero(rank, new Zero()))
    }

    // Nonzero is a class within Skew
    // it has a member named rank, and
    // a member named rest
    var Nonzero = function (rank, rest) {
	this.rank = rank
	this.rest = rest
    }

    // Nonzero has a method, valueOf,
    // that returns a number that (in binary)
    // looks like '111111 + the value of the rest'
    Nonzero.prototype.valueOf = function () {
	return ((1 << (this.rank + 1)) - 1) + this.rest.valueOf()
    }

    // Nonzero has a method, successor,
    // that delegates to its rest member's successor_helper method,
    // passing its rank member as an argument
    Nonzero.prototype.successor = function () {
	return this.rest.successor_helper(this.rank)
    }

    // Nonzero has a method, successor_helper,
    // that, if the incoming rank is equal to this object's rank,
    // uses the fact that the successor of '2^n-1' + '2^n-1' is '2^(n+1)-1'.
    // otherwise it uses the straightforward representation.
    Nonzero.prototype.successor_helper = function (incoming) {
	if (incoming == this.rank) {
	    return new Nonzero(this.rank+1, this.rest)
	} else {
	    return new Nonzero(0,
			       new Nonzero(incoming,
					   new Nonzero(this.rank,
						       this.rest)))
	}
    }

    // These are the things exported out of the Skew scope
    return {
	Zero: Zero,
	Nonzero: Nonzero
    }
}()
