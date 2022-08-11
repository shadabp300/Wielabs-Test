// Given an array and a number k that's smaller than the 
// length of the array, rotate the array to the right k elements in-place.

let rotate=(arr, k)=> {

    // for shifting towards right
    let temp=arr.slice(-k)
    let rem=arr.slice(0,arr.length-k)
    let result=temp.concat(rem)

    // for shifting towards left
    // let temp=arr.slice(0,k)
    // let rem=arr.slice(k)
    // let result=rem.concat(temp)
    
    return result
}

console.log(rotate([1,2,3,4,5,6], 3))