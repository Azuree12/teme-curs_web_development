function validateForm() {
    var button = document.querySelector(".submitButton");
    button.addEventListener("click", onButtonClick);
    function onButtonClick() {
        var firstName = document.querySelector("#fname");
        var lasttName = document.querySelector("#lname");
        var email = document.querySelector("#email");
        var comment = document.querySelector("#comment");
        if (firstName.value === "") {
            firstName.style.border = "solid 1px red";
        } 
        if (lasttName.value === ""){
            lasttName.style.border =  "solid 1px red";
        } 
        if (email.value === ""){
            email.style.border =  "solid 1px red";
        } 
        if (comment.value === "") {
            comment.style.border =  "solid 1px red";
        } 

        console.log(firstName.value);
    }
}


validateForm();
