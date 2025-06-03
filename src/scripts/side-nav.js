const sideNav = document.querySelector('.side-nav');

const mediaQuery = window.matchMedia('(max-width: 720px)');

function handleMediaQueryChange(e) {
  if (e.matches) {
    sideNav.classList.remove('script_show-side-nav');
  }
}
mediaQuery.addEventListener('change', handleMediaQueryChange);
