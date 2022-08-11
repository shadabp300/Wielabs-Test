// Given two strings A and B, return whether or not A can be shifted 
// some number of times to get B.
// For example, if A is abcde and B is cdeab, return true. 
// If A is abc and B is acb, return false.


let match=(str1, str2) => {
    let str=str1+str1
    
    if(str.search(str2)!=-1){
        return "A can be shifted B"
    }
    else {
        return "A can not be shifted B"
    }
}

console.log(match("abcd", "adbc"))
