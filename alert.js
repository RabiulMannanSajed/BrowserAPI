console.log("alert is done ");

const coming = () => {
    const alertResult = alert('Open the book someone coming')
    console.log(alertResult);
}
const askPicnic = () => {
    // in confirm here is two result to take see the result  true and false
    const response = confirm("Are you coming to picnic");
    console.log(response);
    if (response == true) {
        alert('you have to give 500 TK')
    }
    else {
        alert('thank you for your response ')
    }
}

// another one is prompt this is use to take some info form user

const namePrompt = () => {
    const name = prompt("What is your name ")
    if (name) {
        console.log(name);
    }
}

//  read about location and location.replace("here the replace http link")