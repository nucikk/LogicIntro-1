let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
  ];

 //* -- Method 1 forEach for loop
for (let i = 0; i < array.length; i++) {
    array[i].forEach(number => {
      if (number > 0) {
        console.log("For Loop Method 1",number);
      }
    });
  } 

//* -- Method 2 forEach  
array.forEach(positiveArray => {
    positiveArray.forEach(number => {
        if(number > 0 ) {
            console.log("forEach Method 2", number)
        }
     })
})
