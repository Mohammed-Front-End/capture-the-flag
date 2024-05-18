const loadingText= document.querySelector(".loading-text")
const container= document.querySelector(".main")
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
  }
}
function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}



// Event listener for the register button
document.getElementById('register-btn').addEventListener('click', (e) => {
  e.preventDefault()
  window.location.href = 'https://sh3ll.cloud/xf2/forums/68/';
});
