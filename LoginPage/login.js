const loadingText= document.querySelector(".loading-text")
const container= document.querySelector(".main")
const inputText= document.querySelector("#login-form input[type=text]")
const btnPassword= document.querySelector("#login-form input[type=password]")
const btnSubmit= document.querySelector("#login-form button[type=submit]")


let load = 0;
let int = setInterval(blurring,30)
function blurring() {
  load++
  if (load > 99) {
    clearInterval(int)
  }
  loadingText.innerHTML = `${load}%`
  loadingText.style.opacity = scale(load, 0, 100, 1, 0)
  container.style.filter = `blur(${scale(load, 0, 100, 60, 0)}px)`;
  if (loadingText.innerHTML == "100%" ) {
    container.style.zIndex = "1";
    loadingText.style.display = "none";
    inputText.focus();
  }
}
function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// Event listener for the register button
document.getElementById('register-btn').addEventListener('click', (e) => {
  e.preventDefault()
  window.location.href = 'https://sh3ll.cloud/xf2/register/';
});





btnSubmit.addEventListener('click', function( e){
  e.preventDefault()
  let spantext = document.querySelector('.span-text');
  let spanPass = document.querySelector('.span-pass');
  let username = inputText.value;
  let password = btnPassword.value;
  if (inputText.value == "" ) {
    spantext.classList.add('showSpan')
    spantext.style.display = 'block'
    inputText.style.marginBottom  = '0px'
  }else{
    spantext.classList.remove('showSpan')
    spantext.style.display = 'none'
    inputText.style.marginBottom  = '20px'
  }
  if (btnPassword.value == "") {
    spanPass.classList.add('showSpan')
    spanPass.style.display = 'block'
    btnPassword.style.marginBottom  = '0px'
  }else{
    spanPass.classList.remove('showSpan')
    spanPass.style.display = 'none'
    btnPassword.style.marginBottom  = '20px'
  }

  // Fake credentials
  const fakeUsername = "user";
  const fakePassword = "pass";

  if (username === fakeUsername && password === fakePassword) {
    window.location.replace("/QuestionsPage/quiz.html");
  } else if (username !== "" && password !== "") {
    spanPass.innerHTML = "Incorrect username or password. Try again."
    spanPass.style.display = 'block'
    spanPass.style.fontSize = '13px'
    spanPass.classList.add('showSpan')
    btnPassword.style.marginBottom  = '0px'
  }else{
    spanPass.innerHTML = "enter your pass"
  }
})






