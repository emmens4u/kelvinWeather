// the forecast for today in kelvin
const kelvin = 0;

// celcius is 273 less than kelvin
const celcius = kelvin - 273;

// fahrenheit is calculated using this formula
let fahrenheit = celcius * (9/5) + 32;

// used to round decimal value of fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log('The temperature is ' + fahrenheit +' degrees Fahrenheit')
