//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight,height) {

    var b = (weight / Math.pow(height,2));
    var interpretation = "";
    
    if(b < 18.5) {
        interpretation = `Your BMI is ${Math.round(b)}, so you are underweight.`;
    }

   if(b >= 18.5 && b <= 24.9) {
       interpretation = `Your BMI is ${Math.round(b)}, so you have a normal weight.`;
    }

    if(b >24.9) {
        interpretation = `Your BMI is ${Math.round(b)}, so you are overweight.`;
    }

    return(interpretation);
}

function bmiMessage(index) {
    if(index <= 18.5) {
        return `Your BMI is ${index}, so you are underweight.`;
    }
}

var bmi = bmiCalculator(65, 1.8); 
//var index = bmiMessage(bmi);
console.log(Math.round(bmi));
//console.log(index);


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
