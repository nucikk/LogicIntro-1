//! #TASK1: ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

//* -- Method 1 for loop
for(let i = 5; i <= 100; i++) {
    console.log(i)
}

//* -- Method 2 while loop
let num = 5;

while(num <= 100) {
    console.log(num)
    num++ //5+1 
}

//! #TASK2.მოცემულია მასივი: let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
//! ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და 	ნაკლებია 10ზე

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]; 

//* -- filter მეთოდი ქმნის ახალ მასივს array1 ყველა ელემენტით, (&&ოპერატორი_თუ ორივე პირობა არის True გადაიტანს arrayFilter მასივში
let arrayFilter = array1.filter(number => number > 0 && number < 10);  
console.log(arrayFilter) //^-- გაფილტრული მასივი: [ 1, 2, 4, 8, 7 ]


//! #TASK3:მოცემულია მასივი let array3= [1, 2, 3, 4, 5]; ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

//* -- Method 1 reduce
let array3= [1, 2, 3, 4, 5];

let numberSum = array3.reduce((total,num) => total + num);  //TODO: --reduce მეთოდი ითვლის ჯამს ~ გადაეცემა ორი პარამეტრი
console.log("array3 რიცხვების ჯამი:", numberSum)  //^-- array3 რიცხვების ჯამი: 15


//* -- Method 2 for loop
let loopArray3 = [1, 2, 3, 4, 5];
let numSum = 0;
for (let i = 0; i < loopArray3.length; i++) {
    numSum += loopArray3[i];
}

console.log("loopArray3 რიცხვების ჯამი:", numSum);  //^-- loopArray3 რიცხვების ჯამი: 15


//! #TASK4: მოცემულია მასივი: let array4 = [1, 2, 3, 7, 6, 9]; გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

let array4 = [1, 2, 3, 7, 6, 9];

//* -- reduce მეთოდი დაითვლის მასივის რიცხვების ჯამს, ჯამის გაგების შემდეგ მას ვყოფთ array4.lengthზე საშუალო არიტმეტიკულის გასაგებად და ვამრგვალებთ ერთ ათწილადამდე
let sumArray4 = array4.reduce((total,num) => total + num, 0);
let averageResult = (sumArray4 / array4.length).toFixed(1);  //TODO: -- toFixed(1) დაამრგვალებს გამოთვლილ საშუალოს ერთ ათწილადამდე

console.log("array4 საშუალო არითმტიკული არის:", averageResult) //^--array4 საშუალო არის 4.7
