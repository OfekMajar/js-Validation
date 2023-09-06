function functionChecker() {
  console.log(sendForm());
}
function sendForm() {
  var lablesArray = document.getElementsByClassName("labels");
  var workerNameTrue =
    workerFName.value[0] == workerFName.value.toUpperCase()[0] &&
    workerFName.value != "";
  var workerLastNameTrue =
    workerLName.value.length <= 20 && workerLName.value != "";
  var workerBirthdayTrue =
    (getAge(workerBirthdate.value) > 16 && getAge(workerBirthdate.value)) <
      65 && workerBirthdate.value != "";
  var workerEmailTrue =
    (workerEmail.value.substring(workerEmail.value.length - 4) == ".com" ||
      workerEmail.value.substring(workerEmail.value.length - 6) == ".co.il") &&
    workerEmail.value != "";
  var workerPhoneTrue =
    workerPhone.value[0] == 0 &&
    workerPhone.value.length == 10 &&
    workerPhone.value != "";
  var workerRoleTrue = workerRole.value != "";
  var counter = 0;
  var validationArray = [];
  if (
    workerNameTrue &&
    workerLastNameTrue &&
    workerBirthdayTrue &&
    workerEmailTrue &&
    workerPhoneTrue &&
    workerRoleTrue
  ) {
    return true;
  }
  if (!workerNameTrue) {
    validationArray[counter] = false;
  } else {
    validationArray[counter] = true;
  }
  counter++;
  if (!workerLastNameTrue) {
    validationArray[counter] = false;
  } else {
    validationArray[counter] = true;
  }
  counter++;
  if (!workerBirthdayTrue) {
    validationArray[counter] = false;
  } else {
    validationArray[counter] = true;
  }
  counter++;
  if (!workerEmailTrue) {
    validationArray[counter] = false;
  } else {
    validationArray[counter] = true;
  }
  counter++;
  if (!workerPhoneTrue) {
    validationArray[counter] = false;
  } else {
    validationArray[counter] = true;
  }
  counter++;
  if (!workerRoleTrue) {
    validationArray[counter] = false;
  } else {
    validationArray[counter] = true;
  }
  for (var i = 0; i < validationArray.length; i++) {
    if (!validationArray[i]) {
      lablesArray[i].style = `border:1px solid red`;
      console.log(lablesArray[i]);
    } else {
      lablesArray[i].style = ``;
    }
  }
  return false;
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
console.log(sendForm());
