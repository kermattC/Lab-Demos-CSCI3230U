$(document).ready(function() {
    let buttonContainer = $('#buttonContainer');

    let registerButton = $('<button>');
    registerButton.text("Register Now"); 
    // This is basically creating this button on html
    // <button class="registerButton">Register Now</button>

    // use jquery to call the buttonHandler method when clicking on this button
    registerButton.click(buttonHandler);

    // add the button to the div element
    buttonContainer.append(registerButton);
});

function buttonHandler() {
    console.log("Clicked the button");
    let textDiv = $('#buttonActivatedText');

    let newText = $('<p>');
    newText.text("You are registered!");
    textDiv.append(newText);
}