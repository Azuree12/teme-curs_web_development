function validateForm() {
  var button = document.querySelector(".submitButton");
  button.addEventListener("click", onButtonClick);
  function onButtonClick() {
    var firstName = document.querySelector("#fname");
    var lastName = document.querySelector("#lname");
    var email = document.querySelector("#email");
    var comment = document.querySelector("#comment");
    if (firstName.value === "") {
      firstName.style.border = "solid 1px red";
    } else {
      firstName.style.border = "solid 1px black";
    }
    if (lastName.value === "") {
      lastName.style.border = "solid 1px red";
    } else {
      lastName.style.border = "solid 1px black";
    }
    if (email.value === "") {
      email.style.border = "solid 1px red";
    } else {
      email.style.border = "solid 1px black";
    }
    if (comment.value === "") {
      comment.style.border = "solid 1px red";
    } else {
      comment.style.border = "solid 1px black";
    }

    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(comment.value);
    document.querySelector("#fname").value = "";
    document.querySelector("#lname").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#comment").value = "";
  }
}

validateForm();
