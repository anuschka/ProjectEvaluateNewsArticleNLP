function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    if (inputText === '') {
        return true
    } else {
        return false
    }
}

function onBlur(){}

export { checkForName, onBlur }
