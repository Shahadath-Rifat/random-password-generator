## Random-Password-Generator

In this tutorial, we will be creating a Random Password Generator using JavaScript. The password generator will generate a random password of a certain length, containing lowercase letters, special characters, and numbers.

## Prerequisites

Before we begin, you should have some basic knowledge of HTML, CSS, and JavaScript. You will also need a code editor(VS Code recommended) to write and Node js to test your code. We create a file named as index.js. Write ```'use strict';``` , JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode".  

## Step 1: Defining the Functions

The first step is to define the functions that will generate the random lowercase letters, special characters, and numbers. Here's the code:

```javascript

function lowerCaseLetters(length) {
    let result = '';
    const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = lowerCharacters.length;
    let counter = 0;
    while (counter < length) {
      result += lowerCharacters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


function SpecialCharacters(length) {
    let result = '';
    const specialCharacters = '%-_.@$!';
    const charactersLength = specialCharacters.length;
    let counter = 0;
    while (counter < length) {
      result += specialCharacters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


function RandomNumbers(length) {
    let result = '';
    const randomNums = '0123456789';
    const charactersLength = randomNums.length;
    let counter = 0;
    while (counter < length) {
      result += randomNums.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
```
In this code, we have created three functions: ```lowerCaseLetters()```, ```SpecialCharacters()```, and ```RandomNumbers()```. Each function takes a length parameter and generates a random string of lowercase letters, special characters, and numbers of the specified length using a while loop.

## Step 2: Generating the Password

The next step is to generate the random password by combining the results of the ```lowerCaseLetters()```, ```SpecialCharacters()```, and ```RandomNumbers()``` functions. Here's the code:
```javascript
console.log(lowerCaseLetters(4) + SpecialCharacters(1) + RandomNumbers(4));
```
So, The password (a string) is composed of 4 random lowercase letters (a-z), 1 special character, and 4 random numbers (0-9).

## Step 3: Testing the Code

The final step is to test the code and see if it works. For that open the file in the code editor intregrated terminial, type node<file name> i.e node index.js . When you run this code, it will generate a random password of length 8 and display it in the console. You can adjust the length parameter to generate passwords of different lengths.
```text
  node index.js 
```  

## Conclusion

In this tutorial, we have learned how to create a simple random password generator using JavaScript. We defined three separate functions to generate lowercase letters, special characters, and random numbers respectively. We then combined these functions to create a secure password. You can further customize this code by changing the length and type of characters generated to suit your needs.
