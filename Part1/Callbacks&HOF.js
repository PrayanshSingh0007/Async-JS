const arr = [1, 2, 3, 4, 5];
// arr.map(function f(){})

function myMap(arr, cb) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i], i,));
  }
  return newArr;
}

console.log(myMap(arr, function (value) {
  return value ** 2;
}));