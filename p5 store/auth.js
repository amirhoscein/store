import { postData } from "./utils/httpReq.js";
import { setCookie } from "./utils/cookie.js";
import authHandler from "./utils/authorization.js";
import validationForm from "./utils/validation.js";

const inputsBox = document.querySelectorAll("input");
const LoginButton = document.querySelector("button");

const submitHandler = async (event) => {
  event.preventDefault();

  const username = inputsBox[0].value;
  const password = inputsBox[1].value;

  const validation = validationForm(username, password);
  if (!validation) return;

  const response = await postData("auth/login", { username, password });
  console.log(response);

  setCookie(response.token);
  location.assign("index.html");
};

LoginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", authHandler);
