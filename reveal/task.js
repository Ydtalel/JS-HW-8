function isVisible() {
  const divElement = document.querySelector('.reveal');
  const rect = divElement.getBoundingClientRect();
  const isVisibleOnScreen = rect.top >= 0 && rect.bottom <= window.innerHeight;

  divElement.classList.toggle('reveal_active', isVisibleOnScreen);
}

window.addEventListener('scroll', isVisible);
