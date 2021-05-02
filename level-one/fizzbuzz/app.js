for (var x = 1; x <= 100; x++) {
    switch (true) {
      case (x % 5 === 0 && x % 3 === 0):
          console.log("FizzBuzz");
          break;
      case x % 3 === 0:
          console.log("Fizz");
          break;
      case x % 5 === 0:
          console.log("Buzz");
          break;
      default:
          console.log(x);
          break;
    }
}
