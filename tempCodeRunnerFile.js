let array4 = [1, 2, 3, 7, 6, 9];

let sumArray4 = array4.reduce((total,num) => total + num, 0);
let averageResult = (sumArray4 / array4.length).toFixed(2);

console.log("array4 საშუალო არითმტიკული არის:", averageResult) //: 4.666666666666667