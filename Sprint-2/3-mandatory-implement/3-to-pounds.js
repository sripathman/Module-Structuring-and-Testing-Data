// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

//Code from Sprint 1 :
function toPounds(penceString) {
    // const penceString = "399p";
  
    const penceStringWithoutTrailingP = penceString.substring(
      0,
      penceString.length - 1
    );
  
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    const pounds = paddedPenceNumberString.substring(
      0,
      paddedPenceNumberString.length - 2
    );
  
    const pence = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");
  
    return `£${pounds}.${pence}`;
  }
  
  //Refactored Code :
  //Code 1 :
  // function toPounds(penceStr) {
  //   //Used slice() instead of substring() as it is cleaner than using substring(paddedPenceNumberString.length - 2).
  //   //slice(0, -1) removes the last character ("p") from the string.
  //   //padStart(3, "0")ensures the string has at least three digits, adding leading zeros if necessary.
  //   const penceVal = penceStr.slice(0, -1).padStart(3, "0");
  //   const pounds = penceVal.slice(0, -2);
  //   const pence = penceVal.slice(-2);
  //   return `£${pounds}.${pence}`;
  // }
  // console.log(toPounds("3999p")); // Output: £3.99
  // console.log(toPounds("5p")); // Output: £0.05
  // console.log(toPounds("-120p")); // Output: £1.20
  
  // Code 2 :
  // function toPounds(penceStr) {
  //   //    const penceWithoutP = penceStr.slice(0, -1));
  //   //   const penceNumber = Number(penceWithoutP);
  //   //   return penceNumber / 100;
  //   return Number(penceStr.slice(0, -1)) / 100;
  // }
  console.log(`Converting 3999p to pounds : ${toPounds("3999p")}`); // Output : £39.99
  console.log(`Converting 5p to pounds : ${toPounds("5p")}`); //Output : £0.05
  console.log(`Converting -120p to pounds : ${toPounds("-120p")}`); // Output : £-1.2
  
  //I first did Code 1 as the instruction said to refactor code from Sprint 1.
  //While I was doing code 1 , I thought maybe there's even a simpler way to do this as the conversion from pence to pounds is pence / 100
  //With code 2, as I am still learning I find it easier to break down code with variables declaration first like I did in line 45 and 46
  //Once I had different variable broken down it was easier to merge and assign them as return value in code 47