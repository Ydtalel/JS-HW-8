const rotatorSpans = document.querySelectorAll('.rotator__case');

function rotate(index) {
  const rotatorArr = Array.from(rotatorSpans);
  const activeSpan = document.querySelector('.rotator__case_active');
  if (activeSpan) {
    activeSpan.classList.remove('rotator__case_active');
  }
  let speed = rotatorArr[index].getAttribute('data-speed');
  let color = rotatorArr[index].getAttribute('data-color');
  rotatorArr[index].classList.add('rotator__case_active');
  rotatorArr[index].style.color = color;

  setTimeout(() => {
    rotate((index + 1) % rotatorArr.length);
  }, speed);
}

//rotate(0); 
