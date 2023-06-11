function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }
  
function validator(){
    let number = document.getElementById("number").value;
    let validate = document.getElementById("number");
    let fa = document.getElementById("fa");

    number = telephoneCheck(number);

    validate.classList.remove("validated", "invalidated");
    fa.classList.remove("fa-circle-check", "fa-circle-xmark");

    if (number == true){
        validate.classList.add("validated");
        fa.classList.add("fa-circle-check");
    }
    else {
        validate.classList.add("invalidated");
        fa.classList.add("fa-circle-xmark");
    }
}