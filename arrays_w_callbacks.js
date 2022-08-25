const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0,]

const panagram = ['The', 'quicks', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//Every Method 

// 1 every number is greater than or equal to 0

const checkNum = (num) => {
    return num >= 0
}
const result1 = nums.every(checkNum);
console.log(result1);


//2 word shorter than 8 characters

const checkWord = (word) => {
    return word.length < 8
}

const result2 = panagram.every(checkWord);
console.log(result2);

/////////////////////////////////////////////////////////////////
// Filter Method 
// 1 filter the array for numbers less than 4

const filterNum = (num) => {
    return num < 4
}
const result3 = nums.filter(filterNum)
console.log(result3)

// 2 filter words that have an even length

const filterWords = (word) => {
    return word.length % 2 === 0
}
const result4 = panagram.filter(filterWords)
console.log(result4)

//////////////////////////////////////////////////////////////////////
//Find Method 
//1 Find the first value divisible by 5

const findNum = (num) => {
    return num % 5 === 0
}
const foundNum = nums.find(findNum)
console.log(foundNum)


// 2 find the first word that is longer than 5 characters

const findWord = (word) => {
    return word.length > 5
}
const foundWord = panagram.find(findWord);
console.log(findWord) //returns undefined because no word longer than 5

/////////////////////////////////////////////////////////////
// Index Method
//1 find the index of the first number that is divisible by 3

const indexnum = (num) => {
    return num % 3 === 0
}
const result5 = nums.findIndex(indexnum)
console.log(result5)


//2 find the index of the first word that is less than 2 characters long

const wordChar = (word) => {
    return word.length < 2
}
const findIndex = panagram.findIndex(wordChar);
console.log(findIndex);
// added a  one cahracter word to test it 

///////////////////////////////////////////////////////////////////////////////////
// For Each Method
//1 console.log each value of the nums array multiplied by 3

nums.forEach(value => console.log(value * 3)); // not stored in a new array 


//2 console.log each word with an exclamation point at the end of it

panagram.forEach(word => console.log(`${word}!`));// not stored in a new array

///////////////////////////////////////////////////////////////////////
// Map method 
//1 make a new array of each number multiplied by 100

const Newnums = nums.map(x => x * 100);

console.log(Newnums);  // stored in a new array

//2 make a new array of all the words in all uppercase

const newpanagram = panagram.map(word => word.toUpperCase());

console.log(newpanagram);  // stored in a new array
//////////////////////////////////////////////////////////////////
//Some Method 
//1 Find out if some numbers are divisible by 7

// checks whether an element is even
const Somenum = (number) => number % 7 === 0;

console.log(nums.some(Somenum));

// expected output: true

//2 Find out if some words have the letter a in them
const SomeWord = (word) => word.includes('a');

console.log(panagram.some(SomeWord));

// expected output: true

//////////////////////////////////////////////////////////////////////////////
// PART 2 - isPanagram
/////////////////////////////////////////////////////////////////////////////
//test whether each letter a-z (case insensitive) is used at least once )

const isPanagram = (arr) => {
    // decalare an array called letters that will contain all the alphabet letters
    const letters = [
        "a", "b", "c", "d","e","f","g","h","i","j","k", "l","m", "n","o", "p", "q","r", "s","t","u","v","w","x","y", "z",
    ];
   // declare an empty string called str
    // declare an empty string called str
  let str = "";
  // declare an empty array called strArr
  const strArr = [];

  // loop through the panagram array
  panagram.forEach((el) => {
    //concat the empty string with the words form the array letter by letter
    str += el.toLowerCase().split(" ");
  });

  // loop through the str string and push every character in the strArr
  for (let i = 0; i < str.length; i++) {
    strArr.push(str[i]);
  }
  // compare the arrays strArr and panagram and if one element is missing return false or else true
  if (letters.some((item) => !strArr.includes(item))) {
    return false;
  } else {
    return true;
  }
};

console.log(isPanagram(panagram));

console.log(isPanagram)

///////////////////////////////////////////////////////////////////////////////
const products = [
    {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
    },
    {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
    },
    {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
    },
    {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
    },
    {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
    },
    {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
    },
    {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
    },
    {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
    },
    {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
    },
    {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
    },
    {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
    },
    {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
    },
    {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
    },
    {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
    },
    {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
    },
    {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
    },
    {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
    },
    {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
    },
    {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
    },
]
// 1 filter for products with a price that is less than 10, using the array below:


const filterPrice = products.filter(getPrice => getPrice.price > 10)
console.log(filterPrice)

//2 sort alphabetically by product name


const sortProducts = products.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
console.log(sortProducts)


// ///////////////////////////////////////////////////////////////////////


// Hungry for More
// Reduce Method 

// Add all the numbers in the array together using the reducemethod

const sumNumber = nums.reduce((curr, next) => curr + next)

console.log(sumNumber)

// returns 55

// 2 concatenate all the words using reduce

const sentence = panagram.reduce((curr, next) => curr + ' ' + next)

console.log(sentence)

///////////////////////////////////////////////////////////////////////
//Sor
//1 Try to sort without any arguments, do you get what you'd expect with the numbers array? 

const sortnumber = nums.sort()
console.log(sortnumber)   //no, only checks the first number 

//2 Try to sort without any arguments, do you get what you'd expect with the words array?
const sortWord = panagram.sort()
console.log(sortWord) // worrks but put capital letters first 

//3 Sort the numbers in ascending order

const ascOrder = nums.sort((a, b) => a - b)
console.log(ascOrder)

//4 Sort the numbers in descending order

const desOrder = nums.sort((a, b) => b - a)
console.log(desOrder)

//5 Sort the words in ascending order


