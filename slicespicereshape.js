import numpy as np
// slice
var arr1 = [1,5,8,9];
arr1.slice(2);
console.log(arr1);
// splice
var arr1 = [1,5,8,9];
arr1.splice(1,2,'Hi','Medium');
console.log(arr1);
//reshape

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

newarr = arr.reshape(4, 3)

print(newarr)


