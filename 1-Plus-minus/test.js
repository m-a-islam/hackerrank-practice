const prompt = require('prompt-sync')();


main();

function main() {
    var arr = prompt("Enter integer as array element space-seperated: ");
    arr = arr.split(" ");
    plusMinus(arr)
}


function plusMinus(arr) {
   let pos = 0;
   let neg = 0;
   let zero = 0;
   
    for (var i = 0; i < arr.length; i++) {
        if(parseInt(arr[i], 10) > 0) {
            pos++;
        }
        if(parseInt(arr[i], 10) < 0) {
            neg++;
        }
        if(parseInt(arr[i], 10) === 0) {
            zero++;
        }
   }
   console.log("Positive ratio: ", (pos/arr.length).toFixed(6));
   console.log("Negative ratio: ", (neg/arr.length).toFixed(6));
   console.log("Zero ratio: ", (zero/arr.length).toFixed(6));

}
