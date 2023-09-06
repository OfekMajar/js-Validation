var TimerCountDown = 30;
var usersTries = 0;
function sendForm() {
  var lablesArray = document.getElementsByClassName("labels");
  var errorArray = document.getElementsByClassName("inputErrorText");
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
  usersTries++;
  console.log(usersTries);
  if (usersTries >= 4) {
    counterDownContainer.style = `display:flex`;
    countDownIntervalID = setInterval(function () {
      countDown();
    }, 1000);
    sumbitBtn.disabled = true;
  }
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
    errorArray[
      counter
    ].innerHTML = `  <i style="color:red" class="fa-solid fa-circle-xmark"></i> The first letter must be capital `;
  } else {
    validationArray[counter] = true;
  }
  counter++;
  if (!workerLastNameTrue) {
    validationArray[counter] = false;
    errorArray[
      counter
    ].innerHTML = `  <i style="color:red" class="fa-solid fa-circle-xmark"></i> The last name can't be longer than 20 letters `;
  } else {
    validationArray[counter] = true;
  }
  counter++;
  if (!workerBirthdayTrue) {
    validationArray[counter] = false;
    errorArray[
      counter
    ].innerHTML = `  <i style="color:red" class="fa-solid fa-circle-xmark"></i> The worker must be between the age of 16 to 65 `;
  } else {
    validationArray[counter] = true;
  }
  counter++;
  if (!workerEmailTrue) {
    validationArray[counter] = false;
    errorArray[
      counter
    ].innerHTML = `  <i style="color:red" class="fa-solid fa-circle-xmark"></i> The email must end with .com or .co.il`;
  } else {
    validationArray[counter] = true;
  }
  counter++;
  if (!workerPhoneTrue) {
    validationArray[counter] = false;
    errorArray[
      counter
    ].innerHTML = `  <i style="color:red" class="fa-solid fa-circle-xmark"></i>The phone number must start with the number 0 and be at a maximum of 10 charaters`;
  } else {
    validationArray[counter] = true;
  }
  counter++;
  if (!workerRoleTrue) {
    validationArray[counter] = false;
    errorArray[
      counter
    ].innerHTML = `  <i style="color:red" class="fa-solid fa-circle-xmark"></i> Must enter the workers role `;
  } else {
    validationArray[counter] = true;
  }
  for (var i = 0; i < validationArray.length; i++) {
    if (!validationArray[i]) {
      lablesArray[i].style = `border:1px solid red`;
    } else {
      lablesArray[i].style = ``;
      errorArray[
        i
      ].innerHTML = `<i style="color:Green" class="fa-solid fa-circle-check"></i>`;
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
function countDown() {
  counterDownDiv.innerText = TimerCountDown;
  TimerCountDown--;
  if (TimerCountDown < 0) {
    clearInterval(countDownIntervalID);
    sumbitBtn.disabled = false;
  }
}
// console.log(sendForm());
