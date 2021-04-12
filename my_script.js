// Creo un ciclo per stampare i numeri da 1 a 100
for (var i = 1; i <=100; i++) {

    // Per i multipli di 3 e 5 stampo FizzBuzz
    if ((i % 3 === 0 && i % 5 === 0)) {
        console.log('FizzBuzz')
    }
    // Per i multipli di 5 stampo Buzz
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // Per i multipli di 3 stampo Fizz
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Stampo tutti i numeri
    else {
        console.log(i)
    }
}


