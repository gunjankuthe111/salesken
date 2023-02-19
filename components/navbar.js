const login = () => {
  return `<a href="./index.html"><button>LogIn</button></a>`;
};
const signup = () => {
  return `<a href="./signup.html"><button id="logout-btn">SignUp</button></a>`;
};
const nav = (page) => {
  return `<div>
        <img
          src="https://assets-global.website-files.com/6317934b72d1344ee25173ef/637d05bceaebe1080883183f_white-logo.svg"
          alt="salesken"
        />
      </div>
      <div>
        ${page === "login" ? signup() : page === "signup" ? login() : ""}
      </div>`;
};

export default nav;
