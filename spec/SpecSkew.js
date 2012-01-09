describe("Skew", function () {
    it("should work for zero", function () {
	expect((new Skew.Zero()).valueOf()).toEqual(0)
    })
    it("should count up", function () {
	for (var i = 0; i < 1000; ++i) {
	    var to_test = new Skew.Zero()
	    for (var j = 0; j < i; ++j) {
		to_test = to_test.successor()
	    }
	    expect(to_test == i).toBeTruthy();
	}
    })

})
