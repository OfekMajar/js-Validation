function userDetailes() {
  var myFromGood1 =
    usernameInput.value.length < 10 &&
    usernameInput.value != "" &&
    userEmailInput.value.substring(userEmailInput.value.length - 4) == ".com" &&
    getAge(userAgeInput.value) > 18 &&
    userPasswordInput.value == passwordValidationInput.value &&
    passwordValidationInput.value != "";
  if (myFromGood1) {
    errorDiv.innerHTML = "";
    alert("Welcome");
    return myFromGood1;
  }

  var correctArr = [];
  var counter = 0;
  errorDiv.innerHTML = "";
  var labelsArr = document.getElementsByClassName("labels");
  if (usernameInput.value.length < 10 && usernameInput.value != "") {
    correctArr[counter] = true;
  } else {
    correctArr[counter] = false;
  }
  counter++;
  if (
    userEmailInput.value.substring(userEmailInput.value.length - 4) == ".com"
  ) {
    correctArr[counter] = true;
  } else {
    correctArr[counter] = false;
  }
  counter++;
  if (getAge(userAgeInput.value) > 18) {
    correctArr[counter] = true;
  } else {
    correctArr[counter] = false;
  }
  counter++;
  if (
    userPasswordInput.value == passwordValidationInput.value &&
    passwordValidationInput.value != ""
  ) {
    correctArr[counter + 1] = true;
  } else {
    correctArr[counter + 1] = false;
  }
  for (var i = 0; i < correctArr.length; i++) {
    if (correctArr[i] == false) {
      labelsArr[i].style = `border:1px solid red`;
      errorDiv.innerHTML += ` <h4> the ${labelsArr[i].innerText} is incorect <h4>`;
    } else {
      labelsArr[i].style = ``;
    }
  }
  //   if (myFromGood) {
  //     errorDiv.innerHTML = "";
  //     alert("Welcome")
  //   }
  return myFromGood1;
}
function getAge(userDateRecevied) {
  var userDate = userDateRecevied;
  var myDate = new Date(userDate);
  var currentDate = new Date();
  var age = 0;
  age = currentDate.getFullYear() - myDate.getFullYear();
  if (
    currentDate.getMonth() < myDate.getMonth() ||
    (currentDate.getMonth() == myDate.getMonth() &&
      currentDate.getDate() < myDate.getDate())
  ) {
    age--;
  }
  return age;
}
function refreshSite() {
  location.reload();
}
