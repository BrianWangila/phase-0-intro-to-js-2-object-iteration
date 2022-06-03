let myArray = ["a", "b", "c", "d", "e", "f", "g"]


//for loop
for (let i = 0; i < myArray.length; i++){
  console.log(myArray[i])
}
// console.log("while")

//while loop
 let j =0;
 while (j< myArray.length){
   console.log(myArray[j]) //or myArray[j++]
   j++
 }

 //for...of

 for (let element of myArray){
   console.log(element);
 }

 //iterating over strings

 for (const char of "Hello, World!"){
   console.log(char)
 }