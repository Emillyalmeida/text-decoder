const textArea = document.getElementById("area-Decoder");
const message = document.getElementById("message");

const btnEncrypt = document.getElementById("encrypt");
const btnDecrypt = document.getElementById("decrypt");
const btnCopy = document.getElementById("copy");
const btnClose = document.getElementById("close-info");

const btnColorMode = document.querySelector("header button");

const code = {
  e: "enter",
  a: "alq",
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
    document.getElementById("info").classList.add("modal-info");
    document.getElementById("info").classList.remove("notAppear");
  }
};

const CrtlC = () => {
  navigator.clipboard.writeText(message.innerHTML);
  message.innerText = "Nenhuma messagem";
};

const changeTheme = () => {
  const themeBody = document.body.classList;

  if (themeBody[0] === "light-theme") {
    themeBody.remove("light-theme");
    themeBody.add("dark-theme");
  } else {
    themeBody.add("light-theme");
    themeBody.remove("dark-theme");
  }
  btnColorMode.innerHTML = "";
  themeBody[0] === "light-theme"
    ? (btnColorMode.innerHTML = '<i class="fa-solid fa-moon"></i>')
    : (btnColorMode.innerHTML = '<i class="fa-solid fa-sun"></i>');
};

btnEncrypt.addEventListener("click", listenerButtonsEncrypt);
btnDecrypt.addEventListener("click", listenerButtonsEncrypt);
btnCopy.addEventListener("click", CrtlC);
btnColorMode.addEventListener("click", changeTheme);
btnClose.addEventListener("click", () => {
  document.getElementById("info").classList.add("notAppear");
  document.getElementById("info").classList.remove("modal-info");
});
