function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
var add15 = makeAdder(15);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
console.log(add15(4));