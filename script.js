//your code here
let guess = document.querySelector("#guess");
let button = document.querySelector("#btn");

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

var result = document.querySelector("#num");

button.addEventListener("click",() => {
    let number = getRandomNumber(-20, 20);
    let diff = Math.abs(number - guess);
    if(diff == 0 || (diff <= 2)){
        result.innerHTML = number +" " + "Hot";
    }
    else{
        result.innerHTML = number +" " + "Cold";
    }
});

