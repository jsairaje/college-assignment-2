// function bmi(weight ,height){
//     return Math.round(weight/(height*height) );
// }
// console.log("your bmi is "+bmi(53 ,1.68));

// var n=Math.random();
// console.log(n);
// n=n*6;
// n=Math.floor(n)+1;
// console.log(n);


// var leapyear=200;
// if(leapyear%4==0){
//     if(leapyear%100 !=0){
//         if(leapyear% 400 ==0){
//             console.log(leapyear +" is leap year");
//         }
//     }
// }else{
//     console.log(leapyear+ " is not leap year");
// }

// var i;
// for( i=1 ;i<=100 ;i++){
//     if(i%3===0 && i%5===0){
//         console.log("Fizz");
//     }
//     else if(i%5===0){
//         console.log("Buzz")
//     }
    
//     else if(i%3===0){
//         console.log("FizzBuzz");
//     }
//     else{
//         console.log(i);
//     }
    
// }

// function whosePaying(name){
//     var noofpeople =name.lenght();
//     var randomperson =Math.floor(Math.random()*noofpeople);
//     var rpeople =name[randomperson];
//     return rperson +" will pay the bill" ;
// }
function frbonachi(n){
    var i;
    for(i=0 ;i<n ;i++){
        if(i===1){
            output=[0]
        }else if(i===2){
                output=[0,1]
        }else{
               output=[0,1];
               output.push(output[output.length]+output[output.length-1]); 
               if(n===output.length){

               }else{
                
               }
            }
    }
        
    return output;
}

console.log(frbonachi(8));

