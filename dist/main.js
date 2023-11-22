let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


const label = document.querySelector('#label');
const input = document.querySelector('#input');

input.addEventListener('change', (e) => {
  e.preventDefault();
  if (input.checked) {
    label.innerHTML = '17,391,400';
  } else {
    label.innerHTML = '16,999,000';
  }
})


const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');
const balck = document.querySelector('#black');

const color = document.querySelector('#color');

yellow.addEventListener('click', () => {
  color.innerHTML = 'طلایی';
})

green.addEventListener('click', () => {
  color.innerHTML = 'سبز';
})

balck.addEventListener('click', () => {
  color.innerHTML = 'مشکی';

})