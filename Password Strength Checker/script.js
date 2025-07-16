const password = document.getElementById("password");
const message = document.getElementById("strength-message");

password.addEventListener("input", checkStrenth);

function checkStrenth() {
  const userPassword = password.value;
  let strength = "";
  let className = "";

  if (userPassword.length < 6) {
    strength = "Weak";
    className = "weak";
  } else if (userPassword.length > 6 && /\d/.test(userPassword)) {
    strength = "Medium";
    className = "medium";
  } else if (userPassword.length >= 8 && /[!@#$%^&*]/.test(userPassword)){
    strength = "Strong";
    className = "strong";
  }

  message.textContent = strength;
  message.className = className;
}
