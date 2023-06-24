function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value.trim()
    if (Client.checkForName(formText)) {
        alert("The text field cannot be empty!")
    } else {    
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('result_polarity').innerHTML = res.score_tag;
            document.getElementById('result_subjectivity').innerHTML = res.subjectivity;
        })
    }
}

export { handleSubmit }
