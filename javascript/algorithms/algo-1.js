/* Given a particular grade, write a function that will 
return one grade (A-F, including E) when an integer value, or score, is provided for the input
then the output will return the approrpiate grade  */

/* Grade vales are as follows 
    A = 25 - 30
    B = 20 - 25
    C = 15 - 20
    D = 10 - 15
    E =  5 - 10
    F =  0 - 5 */ 


function getGrade(score) {

    if (score > 25 && score <= 30 ) {
        return("A");
    } else if (score > 20 && score <= 25) {
        return("B");
    } else if (score > 15 && score <= 20) {
        return("C");
    } else if (score > 10 && score <= 15) {
        return("D");
    } else if (score > 5 && score <= 10) {
        return("E");
    } else {
        return("F");
    }
   
}

// console.log getGrade() to invoke function
console.log(getGrade(11));

