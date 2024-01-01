let userName = document.querySelector('#user');
let form = document.querySelector('.form');
let closed = document.querySelector('.form i')
function openPopup(){
  form.classList.add('open-modal')
}
function closePopup(){
  form.classList.remove('open-modal')
}


const togglePassword = document.querySelector("#togglePassword");
const passwordInput = document.querySelector(".password input");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("fa-eye");
});

let navList = document.querySelector('.nav-list');
let Burger = document.querySelector('.burger');
let closeMenu = document.querySelector('#close-menu')
Burger.addEventListener('click', () => {
  navList.classList.add("open-active")
})
closeMenu.addEventListener('click', () => {
  navList.classList.remove("open-active")
})