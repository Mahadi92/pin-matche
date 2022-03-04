// Get pin 
function getPin() {

    const randomNumber = Math.random() * 10000;
    const pin = (randomNumber + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

// Random Number/ Pin generate
function generate() {
    const randomInput = document.getElementById('random-value');
    randomInput.value = getPin();
}

//Handle button event
const btnContainer = document.getElementById('digit-count');
btnContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        const typedInput = document.getElementById('typed-input');
        typedInput.value = '';
    } else {
        const typedInput = document.getElementById('typed-input');
        typedInput.value = typedInput.value + digit;
    }
})

// verify pin
function verifyPin() {
    const pin = document.getElementById('random-value');
    const typedPin = document.getElementById('typed-input');

    if (pin.value === typedPin.value) {
        displayMatchedResul('block', 'none')
    } else {
        displayMatchedResul('none', 'block')
    }
}

function displayMatchedResul(currectStatus, incurrectStatus) {
    const currect = document.getElementById('correct-password');
    currect.style.display = currectStatus;

    const incurrect = document.getElementById('incorrect-password');
    incurrect.style.display = incurrectStatus;
}