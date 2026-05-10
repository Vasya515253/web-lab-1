const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const uppercaseInput = document.getElementById("uppercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function buildCharacterPool() {
  let pool = lowercaseChars;

  if (uppercaseInput.checked) {
    pool += uppercaseChars;
  }

  if (numbersInput.checked) {
    pool += numberChars;
  }

  if (symbolsInput.checked) {
    pool += symbolChars;
  }

  return pool;
}

function generatePassword() {
  const length = Number(lengthInput.value);
  const pool = buildCharacterPool();

  let password = "";

  for (let index = 0; index < length; index += 1) {
    password += pool[Math.floor(Math.random() * pool.length)];
  }

  passwordInput.value = password;
}

lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
});

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", async () => {
  if (!passwordInput.value) {
    generatePassword();
  }

  await navigator.clipboard.writeText(passwordInput.value);
  copyBtn.textContent = "Copied";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 1200);
});

generatePassword();
