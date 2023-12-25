const array = [1,3,2,4,2,6,2,-6,54,2];

let sum = 0;
function arraySum(arr) {
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] >= 0){
            sum += arr[index];
        }else {
            return sum;
        }
    }
    return sum;
};

console.log(arraySum(array));
