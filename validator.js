function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }
  
function validator(){
    let number = document.getElementById("number").value;
    let validate = document.getElementById("number");

    number = telephoneCheck(number);

    validate.classList.remove("validated", "invalidated")

    if (number == true){
        validate.classList.add("validated");
    }
    else {
        validate.classList.add("invalidated");
    }
}