// Given a sorted array, find the smallest positive integer that 
// is not the sum of a subset of the array.
// For example, for the input [1, 2, 3, 10], you should return 7.


let  set=(arr)=>{
    let count = 1
    let array=[1]
    for(let i=1;i<=arr.length;i++){
            count = count + i
            array[i] = count
    }
    let index = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=i+1) return array[i]

        index = i
    }
    return array[index+1]
}

let arr = [1,2,3,10]
console.log(set(arr))