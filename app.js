var InputDate =document.getElementById("InputDate");
var yourAge =document.getElementById("yourAge");
var button =document.querySelector(".btn-primary")

button.addEventListener("click", function(e) {
    let dob = new Date(document.getElementById("InputDate").value);
    let today = new Date();
    let age =today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    yourAge.innerHTML = "Your age is " + age + " years old";

});