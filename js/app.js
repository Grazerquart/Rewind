function getValues(){
    let messageInput = document.getElementById("message").value;
    let alertMessage = document.getElementById("alertMessage");
    let outputMessage = displayMessage(messageInput, rewind(messageInput));
    alertMessage.innerHTML = outputMessage;

}
function rewind(string) {
    let rewound = "";
    for (let i = string.length - 1; i >= 0; i--) {
        rewound += string[i];
    }
    return rewound;
}
function displayMessage(input, output) {
    document.getElementById("alertMessage").style.opacity = 1;
    let message = `<div>Your message, <i>${input}</i> reversed is <i>${output}</i></div>`
    return message;
}