import { getCookie } from "./utils/cookie.js";
const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");

const init = () => {
  const cookie = getCookie();

  if (cookie) {
    loginButton.style.display = "none";
  }else 
};

document.addEventListener("DOMContentLoaded", init);
