//String to Use
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1.1 Searching
let hasJavaScript = inputString.includes("JavaScript");
if(hasJavaScript) {
    console.log("Provided input string contains word JavaScript")
} else{
    console.log("Provided input string doesn't contains word JavaScript")
}

//1.2 Finding the indexOf of a word "Coding"
let codingPosition = inputString.indexOf("Coding");
console.log("Index of the word coding in the provided input string is: " + codingPosition);

// 1.3 Checking if the string starts with word "Welcome"
let startsWithWelcome = inputString.startsWith("Welcome");
if(startsWithWelcome) {
    console.log("Provided input string starts with word Welcome");
} else{
    console.log("Provided input string doesn't starts with word Welcome");
}

//1.4 checking
let endsWithToday = inputString.endsWith("today.");
if(endsWithToday) {
    console.log("Provided input string ends with word today.");
} else{
    console.log("Provided input string doesn't end with word today.");
}

// 2.1 lower case
let lowercaseString = inputString.toLowerCase();
console.log("Provided input string in lower case: " + lowercaseString);

// 2.2 upper case
let uppercaseString = inputString.toUpperCase();
console.log("Provided input string in upper case: " + uppercaseString);

//2.3 trimming extra spaces
let trimmedString = inputString.trim(" ");
console.log("Provided input string after trimming the extra spaces: " + trimmedString);

//2.4 replace
let replacedString = inputString.replace("JavaScript","coding");
console.log("Provided input string after replacing the JavaScript word with coding: " + replacedString);

// 3. Breaking Apart
let wordsArray = inputString.split(" ");
console.log("Provided input string after breaking apart: ");
console.log(wordsArray);

// 4.1 Retrieving character of the trimmed string
let firstCharacter = inputString.trim(" ").charAt(0);
console.log("first character of the trimmed input string is: " + firstCharacter);

//4.2 Extracting the word Bootcamp from the input string
let extractedBootcamp = inputString.slice(24,32);
console.log("Extracted word from the provided input string is: " + extractedBootcamp);