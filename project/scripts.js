function checkPrime() {

    number = document.getElementById('prime');
    number = parseInt(number.value);
  

    isPrime = true;

    for (let i = 2; i < number; i++) {


        if (number % i ==0) {
            isPrime = false;
            break;
        }
        
    }
    if (isPrime) {
        document.getElementById('prime_message').textContent = `${number} IS a Prime Number`;
    } else {
        document.getElementById('prime_message').textContent = `${number} is NOT a Prime Number`;

    }
    

    
}


function fib(n) {
    if (n == 1) {
        return 1;
    }
    if (n == 0) {
        return 0;
    }
    return fib(n - 1) + fib(n - 2)
}

function  getfib(){

    number = document.getElementById('fib');
    number = parseInt(number.value);


    result = fib(number)

    document.getElementById('prime_message').textContent = `The ${number} number in the Fib Sequence is ${result}`;

    
 
}
