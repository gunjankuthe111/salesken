const queNumbers = document.querySelectorAll("#que-no>div");
//geting user details from localstorage
const user = JSON.parse(localStorage.getItem("user"));
document.querySelector("#head>p").innerText = user?.name.toUpperCase();

//fetching questions and saving it to localstorage using immediately invoked function
(async function getQuestions() {
  try {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
    );
    const {results} = await res.json();
    const data = results.map((ele) => {
      //suffling array to set dynamic correct option
      const arr = [...ele.incorrect_answers, ele.correct_answer];
      arr.sort(() => Math.random() - 0.5);
      return {
        question: ele.question,
        correct_answer: ele.correct_answer,
        options: arr,
      };
    });
    const questions = JSON.parse(localStorage.getItem("questions")) || [];
    if (questions.length < 10)
      localStorage.setItem("questions", JSON.stringify(data));
    displayQuestion(1);
  } catch (e) {
    console.log(e);
  }
})();

//showing question
function displayQuestion(que = 1) {
  const questions = JSON.parse(localStorage.getItem("questions"));
  const statement = document.getElementById("question");
  const no = document.getElementById("question-no");
  statement.innerText = questions[que - 1]?.question;
  no.innerText = que;

  //showing options
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const c = document.getElementById("c");
  const d = document.getElementById("d");
  a.innerText = questions[que - 1].options[0];
  b.innerText = questions[que - 1].options[1];
  c.innerText = questions[que - 1].options[2];
  d.innerText = questions[que - 1].options[3];
}

//selecting options
const checkBoxes = document.querySelectorAll(".options>input");
checkBoxes.forEach((ele) => {
  ele.addEventListener("change", ({target}) => {
    checkBoxes.forEach((item) =>
      item.name === target.name ? "" : (item.checked = false)
    );
  });
});

//storing answer Questions in localstorage
const answerd = [];
const submitBtn = document.querySelector("#btn>button");
submitBtn.addEventListener("click", () => {
  const no = +document.getElementById("question-no").innerText;

  const checkBox = document.querySelectorAll(".options>input");
  let id;
  checkBox.forEach((ele) => {
    if (ele.checked) id = getIndex(ele.name);
  });

  if (!id) return alert("Select the option");
  else {
    const questions = JSON.parse(localStorage.getItem("questions"));
    questions[no - 1].marked = questions[no - 1].options[id - 1];
    answerd.push(questions[no - 1]);
    localStorage.setItem("answered", JSON.stringify(answerd));
    checkBoxes.forEach((item) => (item.checked = false));
    queNumbers[no - 1].classList.add("answered");
    if (no < 10) displayQuestion(no + 1);
    if (no === 9) changeBtn();
    if (no === 10) endQuiz();
  }
});

//get the index of marked option
function getIndex(i) {
  switch (i) {
    case "a":
      return 1;
    case "b":
      return 2;
    case "c":
      return 3;
    case "d":
      return 4;
    default:
      return 1;
  }
}

//skiping the question
const skipBtn = document.querySelector("#btn>button+button");
skipBtn.addEventListener("click", () => {
  const no = +document.getElementById("question-no").innerText;

  const questions = JSON.parse(localStorage.getItem("questions"));
  questions[no - 1].marked = "skip";
  answerd.push(questions[no - 1]);
  localStorage.setItem("answered", JSON.stringify(answerd));
  checkBoxes.forEach((item) => (item.checked = false));
  queNumbers[no - 1].classList.add("skiped");
  if (no < 10) displayQuestion(no + 1);
  if (no === 9) changeBtn();
  if (no === 10) endQuiz();
});

//change button text on last question
function changeBtn() {
  const btn = document.querySelector("#btn>button+button");
  btn.innerHTML = null;
  btn.innerHTML = "Skip and End";
}

const end = document.getElementById("end");
end.addEventListener("click", () => {
  endQuiz();
});

function endQuiz() {
  window.location.href = "./reportCard.html";
}

//logout functionality
function logOutUser() {
  localStorage.removeItem("answered");
  localStorage.removeItem("user");
  localStorage.removeItem("questions");
  window.location.href = "./index.html";
}

const logout = document.getElementById("logout");
logout.addEventListener("click", logOutUser());
