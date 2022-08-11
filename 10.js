// Run-length encoding is a fast and simple method of encoding strings. 
// The basic idea is to represent repeated successive characters as 
// a single count and character. For example, the string "AAAABBBCCDAA" 
// would be encoded as "4A3B2C1D2A".



let alpha=(str)=> {
    let count=1
    let result=""
    for (let i=0;i<str.length;i++) {
        if (str[i]==str[i+1]) {
            count++
        }
        else {
            result+=count+str[i]
            count=1
        }
    }
    return result
}

console.log(alpha("AAAABBBCCDAA"))