
// Function to Check Form Input
function checkInput() {
    var emailErr = document.getElementById("email-err")
    var email    = document.getElementById("email").value
    let emailClass = document.querySelector(".input")

    if (email == "") {
        emailErr.innerText = "Please enter an email"
        emailClass.classList.add("error")
    } else {
       var regex = /^\S+@\S+\.\S+$/
       if (regex.test(email) === false) {
        emailErr.innerText = "Please enter a valid email"
        emailClass.classList.add("error")
       } else {
        emailErr.innerText = ""
        emailClass.classList.remove("error")
       } 
    }
}

