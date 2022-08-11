// A strobogrammatic number is a positive number that appears the same 
// after being rotated 180 degrees. For example, 16891 is strobogrammatic.
// Create a program that finds all strobogrammatic numbers with N digits.


let strobogrammatic=(value)=> {

    let strvalue=value.toString()
    let start=0;
    let end=strvalue.length-1
    let istrue=false


    if (strvalue.length%2==1) {
        let middle=Math.floor(strvalue.length/2)
        let odd=strvalue[middle]
        if(odd=="0" || odd=="1" || odd=="8") {
            istrue=false
        }
        else {
            return istrue
        }
    }


    while(start<end) {

        let num=strvalue[start]+strvalue[end]
        
        if (num=="00" || num=="11" || num=="69" || num=="96" || num=="88") {
            istrue=true
        }
        else {
            istrue=false
            break
        }
        
        start++
        end--
    }

    return istrue
}



console.log(strobogrammatic(16291))