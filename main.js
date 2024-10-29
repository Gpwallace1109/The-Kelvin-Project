// The Kelvin Project 

// Kelvin is 293 (declared in constant variable)
const kelvin = 293; 
// Expected output 293

// Celsius is 273 less that Kelvin 
const celsius = kelvin - 273; 
// Expected output 20 

// Formula to calculate Fahrenheit
let fahrenheit = Math.floor((celsius * (9/5) + 32)); 
// Expected output 68 
// Using Math.floor to round DOWN any decimal values

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit!`); 
