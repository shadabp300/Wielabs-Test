// The power set of a set is the set of all its subsets. 
// Write a function that, given a set, generates its power set.
// For example, given the set {1, 2, 3}, it should return 
// {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}


let  combination=(arr)=> {

    let res=[]
    let len = arr.length

    let set = Math.pow(2,len)

    for(let i=0;i<set;i++){
        let subset=""
        for(let j=0;j<len;j++){
            if((i & Math.pow(2,j))){
                subset = subset + arr[j]
            }
        }
        res.push(subset.split(""))
    }

    return res
}

console.log(combination([1,2,3]))