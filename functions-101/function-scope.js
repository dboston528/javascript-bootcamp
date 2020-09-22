//Global Scope (convertFarenheitToCelcius, fistConversion, secondConversion)
    //Local scope (farenheit, celcius)
        //Local scope (isFreezing)

let convertFarenheitToCelcius = function (farenheit) {
    let celsius = (farenheit - 32) * 5/9;
    if (celcius <= 0){
        let isFreezing = true;
    }
    return celsius
}

let fistConversion = convertFarenheitToCelcius(32);
let secondConversion = convertFarenheitToCelcius(69);

console.log(fistConversion);
console.log(secondConversion)