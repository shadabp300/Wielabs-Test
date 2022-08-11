// A number is considered perfect if its digits sum up to exactly 10.
// Given a positive integer n, return the n-th perfect number.
// For example, given 1, you should return 19. Given 2, you should return 28.



let perfect=(num)=> {

    let number=num.toString()
    let count=0

    for (let i=0;i<number.length;i++) {
        count+=parseInt(number[i])
    }
    

    if (count==10) {
        return count
    }
    else if (count<10) {
        let rem=10-count
        number+=rem
        return number
    }
    else if (count>10) {
        return ("Given Number Can not be a Perfect Number")
    }
    
}

console.log(perfect(152));