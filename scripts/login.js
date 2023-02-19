//geting data from localstorage
const signupData = JSON.parse(localStorage.getItem("signup")) || [];

const form = document.getElementById("form");

//reseting the input fields
form.email.value = null;
form.password.value = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //check if the user is alreadt exist
  const check = signupData.find((ele) => ele.email === form.email.value);
  if (check) {
    console.log(check);
    if (check.password === form.password.value) {
      localStorage.setItem("user", JSON.stringify(check));
      window.location.href = "./quiz.html";
    } else {
      alert("Your Password is incorrect");
    }
  } else alert("Your email address is incorrect");
});
