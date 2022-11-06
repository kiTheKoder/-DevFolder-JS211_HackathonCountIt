//declares an array of arrays containing each letter of the American English Alphabet
let alphabet = [
  ["a"],["b"],["c"],["d"],["e"],["f"],["g"],["h"],["i"],["j"],["k"],["l"],["m"],["n"],["o"],["p"],["q"],["r"],["s"],["t"],["u"],["v"],["w"],["x"],["y"],["z"]
]
//removes special characters and spaces from a string
function removeSpecialCharacters(string) {

  //lowercases and uppercases all characters in a string
  let lowerCased = string.toLowerCase();
  let upperCased = string.toUpperCase();

  //holds the value of the new string 
  let newString = "";
  //loops through lowerCased characters
  for(let i=0; i<lowerCased.length; ++i) {

    //checks to see if characters are not equal (since you can't capitolize special characters,they will always be equal)
      if(lowerCased[i] != upperCased[i] || lowerCased[i].trim() === ' ')

          newString += string[i];
  }
  return newString;
}

//empty array to hold occurence counter for each letter
letterCounter = {}

//here's the main function where we bring everthing together to perform the task of counting the occurence of each letter in a string
function countTheCharacters(string) {

string = string.toLowerCase()

string = removeSpecialCharacters(string)

//loops through the characters in the string
for (let i=0; i<string.length;i++){

  //checks if characters are equal to characters in the 'alphabet' array
  if(string[i] = alphabet){

    //if the above condition is true then a new value is added to the letterCounter array OR the existing value for that character is update by +=1

    letterCounter[string[i]] = (letterCounter[string[i]] || 0) +1
  }
}
return letterCounter

}

console.log(countTheCharacters("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."))