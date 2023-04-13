function myFunction() {
    document.getElementById("demo").innerHTML = "Hello there! Welcome to my page!";
  }

  const btn = document.querySelector('.icon')
  const icon = document.querySelector('.icon i')
  const hamburger = document.querySelector('.hamburger')
btn.onclick = function(){
  hamburger.classList.toggle('open')
  const isOpen = hamburger.classList.contains('open')
  icon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
