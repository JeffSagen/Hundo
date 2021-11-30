//enter values
//get the values form the Page
//starts or controller function

function getValues(){
    //get values from the page
let startValue = document.getElementById("startValue").value;
let endValue = document.getElementById("endValue").value;


//Weneed to validate our input
//parse into Integers
startValue = parseInt(startValue);
endValue = parseInt(endValue);

//boolean check
if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumbers
let numbers = generateNumbers(startValue, endValue);
 // we call displayNumbers
 displayNumbers(numbers);
}else{
    alert("You Must enter integers")
}

    function newFunction() {
        return document.getElementById("endValue").value;
    }
   
    
}



//generate numbers from startValue to the EndValue
//logic function
function generateNumbers(startValue, endValue){
let numbers = [];
//we want to get all numbers from start to end
for (let index = startValue; index <= endValue; index++){
// this will execute in a loop until index = endValue
numbers.push(index);
    }
  return numbers;  
}

    
//display of view functions

function displayNumbers(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let className = "even";
        
        let number = numbers[index];

        //equality check
        if(number % 2 == 0){
            className = "even";
        }else{
            className = "odd"
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`
        
    }
    document.getElementById("results").innerHTML = templateRows

}

//click on button

