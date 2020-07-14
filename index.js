let name = ["Ada", "Brendan", "Ali"];
let event = 'birthday';
let message = [];
function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}

let integer = 10;
function countDown(integer) {
    while (integer >= 0) {
        console.log(integer--);
    }
}