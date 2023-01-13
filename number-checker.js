// const n = int(prompt("Enter a number"))
// const n = 11
const isPrime = (n) => {
    let i,flag=1;
    for (i=2;i<Math.sqrt(n);i++) {
        if(n%i === 0){
            flag = 0;
            break;
        }
    }

    if(n<=1)
    flag = 0;

    if(flag ===1)
    console.log('its a prime no.')
    else 
    console.log("it's not a prime no")
}
// if(flag === 1)
// alert("it's a prime no")
// else
// alert ("it's not a prime no")

// For ARMSTRONG NUMBER

// const number = prompt('Enter a three-digit positive integer: ');
// const number = 153
const isArmstrong = (number) => {
    let sum = 0;
    let temp = number;
    while (temp > 0) {
        let remainder = temp % 10;
    
        sum += remainder * remainder * remainder;
    
        temp = parseInt(temp / 10);
    }
    
    
    if (sum == number) {
        console.log(`${number} is an Armstrong number`);
    }
    else {
        console.log(`${number} is not an Armstrong number.`);
    }
}

isPrime(11)
isArmstrong(153)

