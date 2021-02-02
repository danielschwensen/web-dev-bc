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