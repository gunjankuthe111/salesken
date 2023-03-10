const submitted = localStorage.getItem("submitted");
if (!submitted) {
  alert("You have not submitted the quize please attempt the quize");
  window.location.href = "./quiz.html";
}

const user = JSON.parse(localStorage.getItem("user"));
if (!user) window.location.href = "./index.html";

const answered = JSON.parse(localStorage.getItem("answered")) || [];
const questions = document.getElementById("questions");
let markes = 0;
let skiped = 0;
let wrongAttempt = 0;
answered.forEach((ele, i) => {
  ele.marked === ele.correct_answer ? markes++ : wrongAttempt++;

  if (ele.marked === "skip") skiped++;
  const div = document.createElement("div");
  const div1 = document.createElement("div");
  const p1 = document.createElement("p");
  p1.innerText = "Question";
  const pA = document.createElement("p");
  pA.innerText = i + 1;
  div1.append(p1, pA);
  const p2 = document.createElement("p");
  p2.innerText = ele.question;
  const div2 = document.createElement("div");
  const divA = document.createElement("div");
  divA.innerHTML = ele.options[0];
  if (ele.correct_answer === ele.marked && ele.marked === ele.options[0]) {
    divA.setAttribute("class", "correct");
  } else if (ele.correct_answer === ele.options[0]) {
    divA.setAttribute("class", "right");
  } else if (ele.marked === ele.options[0]) {
    divA.setAttribute("class", "incorrect");
  }
  const divB = document.createElement("div");
  divB.innerHTML = ele.options[1];
  if (ele.correct_answer === ele.marked && ele.marked === ele.options[1]) {
    divB.setAttribute("class", "correct");
  } else if (ele.correct_answer === ele.options[1]) {
    divB.setAttribute("class", "right");
  } else if (ele.marked === ele.options[1]) {
    divB.setAttribute("class", "incorrect");
  }

  const divC = document.createElement("div");
  divC.innerHTML = ele.options[2];
  if (ele.correct_answer === ele.marked && ele.marked === ele.options[2]) {
    divC.setAttribute("class", "correct");
  } else if (ele.correct_answer === ele.options[2]) {
    divC.setAttribute("class", "right");
  } else if (ele.marked === ele.options[2]) {
    divC.setAttribute("class", "incorrect");
  }

  const divD = document.createElement("div");
  divD.innerHTML = ele.options[3];
  if (ele.correct_answer === ele.marked && ele.marked === ele.options[3]) {
    divD.setAttribute("class", "correct");
  } else if (ele.correct_answer === ele.options[3]) {
    divD.setAttribute("class", "right");
  } else if (ele.marked === ele.options[3]) {
    divD.setAttribute("class", "incorrect");
  }

  div2.append(divA, divB, divC, divD);
  div2.setAttribute("id", "options");
  div.append(div1, p2, div2);
  questions.append(div);
});

const total = document.getElementsByClassName("marks");
const wrong = document.getElementsByClassName("wrong");
const skip = document.getElementsByClassName("skip");
skip[0].innerText = skiped;
wrong[0].innerText = wrongAttempt - skiped;
total[0].innerText = markes;
total[1].innerText = markes;

//logout functionality
function logOutUser() {
  localStorage.removeItem("answered");
  localStorage.removeItem("user");
  localStorage.removeItem("questions");
  localStorage.removeItem("submitted");
  window.location.href = "./index.html";
}

const logout = document.getElementById("logout-btn");
logout.addEventListener("click", () => {
  logOutUser();
});
