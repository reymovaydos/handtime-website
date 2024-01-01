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

let menuToggle = document.querySelector(".menuToggle");
let navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  navigation.classList.toggle("active");
};