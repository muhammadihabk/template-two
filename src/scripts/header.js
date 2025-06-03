const menuButton = document.querySelector('.header_menu-button');
const sideNav = document.querySelector('.side-nav');

menuButton.addEventListener('click', () => {
  sideNav.classList.toggle('script_show-side-nav');
});
