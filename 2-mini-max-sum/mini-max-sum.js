const prompt = require('prompt-sync')();


main();

function main() {
    var arr = prompt("Enter integer as array element space-seperated: ");
    arr = arr.split(" ");
    minMaxSum(arr)
}


function minMaxSum(arr) {
   console.log(arr);

}