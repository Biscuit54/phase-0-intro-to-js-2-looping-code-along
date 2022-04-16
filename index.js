function writeCards(names, event){
    const messages = [];
    for (let i = 0; i < names.length; i++){
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}
console.log(writeCards(['Guadalupe', 'Ollie', 'Aki'], ' birthday'));
function countDown(){
    let i = 11;
    while (i>0)
        console.log(i--);
        
        let countDown = 4;
while (countDown > 0 ) {
  console.log(countDown--);
}

    }

