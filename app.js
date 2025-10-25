//1. Create an array of 3 student names and add one more using push(). 
 const students = ["ali", "ahmed", "aziz"]
 students.push("majeed")
 console.log(students);

//  2. Remove the last item from an array of fruits using pop().
const fruits = ["apple", "bannana", "orange" , "grapes" , "mango"]
fruits.pop()
console.log(fruits);


// 3. Add "Monday" to the beginning of a days array using unshift().
const days = ["tuesday" , "wednesday", "thrusday", "friday" , "saturday" , "sunday"]
days.unshift("monday")
console.log(days);


// 4. Remove the first item from an array of colors using shift().
const colors = ["red" , "blue" , "green" , "yellow" , "black"]
colors.shift()
console.log(colors);


// 5. Use splice() to insert "Math" and "Science" at index 2 of a subjects array.
const subjects = ["english" , "urdu" , "geography" , "arabic"]
subjects.splice(2 , 0 , "math" , "science")
console.log(subjects);


// 6. Use splice() to remove 2 elements starting from index 1 of a cities array.
const cities = ["quetta" , "khuzdar" , "Surab" , "gawader" , "chaman" ]
cities.splice(1 , 2)
console.log(cities);


// 7. Use slice() to get the first 3 items from a countries array.
const countries = ["pakistan" , "india" , "china" , "japan" , "africa"]
console.log(countries)
countries.slice(0 , 2)
console.log(countries.slice(0 , 2));



// 8. Convert the string "apple,banana,mango" into an array using split().
 const fruitString = "apple,banana,mango"
 console.log(fruitString.split(","));


// 9. Join an array of characters ['J','S'] into a single string using join().
const chars = ['J','S']
console.log(chars.join(""));  





//10. Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using concat().
const arr1 = ['pen','pencil']
const arr2 = ['eraser','sharpener']
console.log(arr1.concat(arr2));


// 11. Sort an array of numbers [10, 5, 2, 8] using sort() (as strings).    
const numbers = [10, 5, 2, 8]
console.log(numbers.sort());


// 12. Sort an array of names alphabetically using sort().
const names = ["Zara" , "Ali" , "Ahmed" , "Khan" , "Majeed"]        
console.log(names.sort());

// 13. Reverse the order of an array of numbers using reverse().
 const nombers = [1,2,3,4,5,6,7] 
  console.log(nombers.reverse());
  


// 14. Use indexOf() to find the index of "Blue" in a colors array.
const color = ["green" , "yellow" , "white" , "blue" , "black"]
console.log(color.indexOf("blue"));



// 15. Add three new items to an empty array using push().
const state1 = []
state1.push("balochistan" , "awaran"  , "Kalat")
console.log(state1);




// 16. Remove the middle item from an array of 5 numbers using splice().
const animals = [1,2,3,4,5]
animals.splice(2,1)
console.log(animals);



// 17. Create a string "HTML CSS JavaScript" and convert it to an array using split().
const tech = "HTML CSS JavaScript"
console.log(tech.split(" "));

 


// 18. Create an array ['a', 'b', 'c'], reverse it, then join it with - in between.
const letters = ['a', 'b', 'c']
console.log(letters.reverse().join("-"));;




// 19. Check if "Karachi" exists in an array using indexOf() and show its index.
const cities1 = ["Lahore" , "Islamabad" , "Karachi" , "Quetta"]
console.log(cities1.indexOf("Karachi"));


// 20. Concatenate two arrays of even and odd numbers using concat() and then reverse
// them.
// samaj nai aya
 



