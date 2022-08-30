const textArea = document.getElementById("area-Decoder");
const message = document.getElementById("message");

const btnEncrypt = document.getElementById("encrypt");
const btnDecrypt = document.getElementById("decrypt");
const btnCopy = document.getElementById("copy");

const btnColorMode = document.querySelector("header button");

const code = {
  e: "enter",
  a: "ai",
  i: "imes",
  o: "ober",
  u: "ufat",
  y: "yarra",
};

const toEncrypt = (textToEncrypt) => {
  for (let char in code) {
    if (textToEncrypt.includes(char)) {
      textToEncrypt = textToEncrypt.replaceAll(char, code[char]);
    }
  }
  return textToEncrypt;
};

const toDecrypt = (textToDecrypt) => {
  for (let char in code) {
    if (textToDecrypt.includes(code[char])) {
      textToDecrypt = textToDecrypt.replaceAll(code[char], char);
    }
  }
  return textToDecrypt;
};

const listenerButtonsEncrypt = (e) => {
  if (textArea.value) {
    const text = textArea.value.toLowerCase();

    const newString =
      e.target.id === "encrypt" ? toEncrypt(text) : toDecrypt(text);

    message.innerText = "";
    message.innerText = newString;
    textArea.value = "";

    document.querySelector(".messageEncrypt").classList.remove("notAppear");
    document.querySelector(".notMessage").classList.add("notAppear");
  } else {
    alert("Digite um texto");
  }
};

const CrtlC = () => {
  navigator.clipboard.writeText(message.innerHTML);
  message.innerText = "Nova messagem";
};

const changeTheme = () => {
  const theme = document.body.classList[0];

  if (theme === "light-theme") {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  }
  btnColorMode.innerHTML = "";
  theme === "light-theme"
    ? (btnColorMode.innerHTML = '<i class="fa-solid fa-moon"></i>')
    : (btnColorMode.innerHTML = '<i class="fa-solid fa-sun"></i>');
};

btnEncrypt.addEventListener("click", listenerButtonsEncrypt);
btnDecrypt.addEventListener("click", listenerButtonsEncrypt);
btnCopy.addEventListener("click", CrtlC);
btnColorMode.addEventListener("click", changeTheme);
