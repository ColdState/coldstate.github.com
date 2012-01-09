describe("Fib", function () {
    it("should be correct on its first base case", function () {
	expect(fibonacci(0)).toEqual(1)
    })
    it("should be correct on its second base case", function () {
	expect(fibonacci(1)).toEqual(1)
    })
    it("should satisfy its recursive property on the first N cases", function () {
	for (var i = 2; i < 1000; ++i) {
	    expect(fibonacci(i)).toEqual(
		fibonacci(i-1)
		+
		    fibonacci(i-2))
	}
    })
})
