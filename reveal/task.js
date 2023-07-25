function isVisible() {
  const divElements = document.querySelectorAll('.reveal');
  divElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isVisibleOnScreen = rect.top >= 0 && rect.bottom <= window.innerHeight;
    el.classList.toggle('reveal_active', isVisibleOnScreen);
  });
  
}

window.addEventListener('scroll', isVisible);
