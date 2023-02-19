const user = JSON.parse(localStorage.getItem("user"));
if (user) window.location.href = "./quiz.html";
//geting data from localstorage
const signupData = JSON.parse(localStorage.getItem("signup")) || [];

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //check if the user is alreadt exist
  const check = signupData.reduce((acc, ele) => {
    if (ele.email === form.email.value) acc = true;
    return acc;
  }, false);

  if (check) return alert("This email address is already registered");

  //creating new user and stored it in localstorage
  const user = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
  };
  signupData.push(user);
  localStorage.setItem("signup", JSON.stringify(signupData));

  //reseting the input fields
  form.name.value = null;
  form.email.value = null;
  form.password.value = null;

  //user Created alert
  alert("User Created Successfully");
  window.location.href = "./index.html";
});
