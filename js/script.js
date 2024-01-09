document.addEventListener('DOMContentLoaded', () => {

  let menuToggle = document.querySelector(".menuToggle");
  let navigation = document.querySelector(".navigation");
  menuToggle.onclick = function () {
    navigation.classList.toggle("active");
  };

  const navbarCenterUl = document.querySelector('.navbar-center ul a');
  navbarCenterUl.addEventListener('click', (event) => {
    event.preventDefault()
  })
})