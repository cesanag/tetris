function test(input) {
    for (i=0; i>input.length; i++) {
        if (input % 3) {
            console.log("Fizz")
        } else if (input % 5) {
            console.log("Buzz")
        } else if ((input % 5) && (input % 3)) {
            console.log("FizzBuzz")
        }
    }
}

test(18)