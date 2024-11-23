const validateUserName = (username) => {
  const regex = /^[a-zA-Z\d_]{6,16}$/;
  const result = regex.test(username);
  return result;
};

const validatePassword = (password) => {
  const regex = /^.{4,20}$/;
  const result = regex.test(password);
  return result;
};

const validationForm = (username, password) => {
  console.log(username, password);
  const usernameResult = validateUserName(username);
  const passwordResult = validatePassword(password);

  if (usernameResult && passwordResult) {
    return true;
  } else if (!usernameResult) {
    alert("user name  is notValid");
  } else if (!passwordResult) {
    alert("password between 6 and 20");
  }
};

export default validationForm;
