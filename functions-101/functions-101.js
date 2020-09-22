// Function - input (argument), code, output (return value)

  let greetUser = function () {
      console.log('Welcome User')
  }

  greetUser();

  let square = function (num) {
      let result = num * num
      return result

  } 



let value = square(3)
let otherValue = square(10);
console.log(value);
console.log(otherValue)

// Challenge Area

// convertFarenheitToCelcius

// call a couple of time  (32 -> 0 ) (68->20)

//Print the convert values

let convertFarenheitToCelcius = function (farenheit) {
    let celsius = (farenheit - 32) * 5/9;
    return celsius
}

let fistConversion = convertFarenheitToCelcius(32);
console.log(fistConversion);
let secondConversion = convertFarenheitToCelcius(69);
console.log(secondConversion)


