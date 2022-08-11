// Given an array of numbers and a number k, determine if there are three 
// entries in the array which add up to the specified number k. For example, 
// given [20, 303, 3, 4, 25] and k = 49, return true as 20 + 4 + 25 = 49


var istrue=false

let threeSum=(arr ,k) =>  {
    
    let list = [];
    arr = arr.sort((a,b)=>a-b)
    for(let i = 0 ; i < arr.length; i++){
        if (i > 0 && arr[i] === arr[i - 1]) {
        continue;
      }

        let left = i+1;
        let right = arr.length - 1;
        while (left < right){
            let sum = arr[i]+arr[left]+arr[right]
            if(sum === k){
                istrue=true
                break
                left++
                }
            
            else if (sum < k) {
                left++
            }
           else{
             right--}
        }
    }
    return list
};

threeSum([20, 303, 3, 4, 25], 49)
console.log(istrue)