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


//! #TASK5:  მოცემულია ობიექტი: let user = {firstname: "giorgi",lastname: "smith",age: 25,studentstatus: "active"
//! ამოიღეთ user ცვლადის სტუდენტის სტატუსი; 

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };

  console.log("students Status:", user.studentstatus); //^-- students Status: active


//! #TASK6:  მოცემულია ობიექტი: let userAge = {name: 'giorgi',  age:  20, studentstatus: 'active'}
//! თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello;
//! თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
//! თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
//! ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;


let userAge = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if (userAge.age < 18 && userAge.studentstatus === 'active') {
    console.log("Hello")
} else if (userAge.name === "Levani") {
    console.log("Hello Levani")
} else if (userAge.studentstatus === 'active' || userAge.age < 25) {
  console.log("Hello World")   //^-- ამ შემთხვევაში დაიბეჭდება : Hello World
} else {
    console.log("Error")
}

//! #TASK7: მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
//! let array = [  [2, -3, 5, 10],  [25, -24, -11, 100],  [-6, -7, 10],];

let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
  ];

 //* -- Method 1 forEach for loop
for (let i = 0; i < array.length; i++) {
    array[i].forEach(number => {
      if (number > 0) {
        console.log("For Loop Method 1",number); //^-- For Loop Method 1 -  2; 5; 10; 25; 100; 10
      }
    });
  } 

//* -- Method 2 forEach  
array.forEach(positiveArray => {
    positiveArray.forEach(number => {
        if(number > 0 ) {
            console.log("forEach Method 2", number) //^-- forEach Method 2 - 2; 5; 10; 25; 100; 10
        }
     })
})


//! #TASK8: მოცემულია მასივი let users = [{username: 'giorgi', status: false},{username: 'levani', status: false}, {username: 'anna', status: true} ] 
//! კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
];
users.forEach(user => {
    if(user.status === true) {
        console.log(user)  //^-- { username: 'anna', status: true }
    }
})

//! #TASK9: მოცემულია ცვლადი, რომლის მნიშვნელობაა ნინი. ახალი if ის სინტაქსით დაწერეთ
//! თუ ცვლადის მნიშვნელობა უდრის ნინი-ს დაიბეჭდოს - true, ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; 

let names = "Nini";
//* -- შემოწმდა, უდრის თუ არა ცვლადი nini-ს, თუ პირობა არის TRUE დაიბეჭდება TRUE წინამდეგ შემთხვევაში FALSE
let nameResult = (names === "Nini") ? "true" : "false"; 

console.log("ცვლადი names მნიშვნელობა არის: ",nameResult); //^-- true


//! #TASK10:მოცემულია ცვლადი, რომლის მნიშვნელობაა ნინი
//! switch case ის საშუალებით დაწერეთ, თუ ცვლადის მნიშვნელობა უდრის ნინი-ს დაიბეჭდოს - true,ყველა სხვა დანარჩენ შემთხვევაში დაიბეჭდოს - false; 

let nameSwitch = "Nini";
let textCheck;

//* -- შეამოწმებს ცვლადის namesSwitch მნიშვნელობას: იბეჭდება true თუ ტოლია Niniს წინააღმდეგ შემთხვევაში იქმმება false
switch(nameSwitch) {
    case "Nini":
    textCheck = "true"
    break;
    default: textCheck = "false"
}

console.log(textCheck) //^-- true