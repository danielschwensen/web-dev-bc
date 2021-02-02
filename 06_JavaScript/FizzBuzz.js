var numbers = [];

function FizzBuzz(){
    
    var i;
    for(i = 1; i <= 100; i++){
       
       if ((!(i % 3)) && (!(i % 5))){
          numbers.push("FizzBuzz"); 
       }
       else if (!(i % 3)){
          numbers.push("Fizz"); 
       }
       else if (!(i % 5)){
          numbers.push("Buzz"); 
       }
       else {
           numbers.push(i);
       }
       
       //console.log(numbers); 
    }
}

FizzBuzz();
console.log(numbers);