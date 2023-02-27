'use strict';

/*
    JavaScript basics
    Shahadath Hussain Rifat

    Random Password generator js
*/


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


console.log(lowerCaseLetters(4) + SpecialCharacters(1) + RandomNumbers(4));

console.log();