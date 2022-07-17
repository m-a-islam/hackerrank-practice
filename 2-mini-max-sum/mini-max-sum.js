const prompt = require('prompt-sync')();


main();

function main() {
    var arr = prompt("Enter integer as array element space-seperated: ");
    arr = arr.split(" ");
    minMaxSum(arr)
}


function minMaxSum(arr) {
   const max = Math.max.apply(null, arr);
   const min = Math.min.apply(null, arr);

   let maxSum = 0;
   let minSum = 0;
   if (max === min){
       for (let i = 0; i < 4; i++) {
            minSum += parseInt(arr[i], 10);
            maxSum += parseInt(arr[i], 10);
       }
   }else {
       for (let i = 0; i < arr.length; i++) {
           if (parseInt(arr[i], 10) !== max) {
               minSum += parseInt(arr[i], 10);
           }
           if (parseInt(arr[i], 10) !== min){
               maxSum += parseInt(arr[i], 10);
           }
       }
   }
   console.log(minSum,maxSum);
}