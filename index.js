// Code your solutions in this file

function writeCards(array, event) {
    let thanks = []
    for (let i = 0;  i < array.length; i++) {
        thanks.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`); 
    }
    return thanks;
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number--
    }
    console.log(number)
}

