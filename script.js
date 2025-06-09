// Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(section => {
  observer.observe(section);
});

// script.js
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});



// 볼륨 조절 (기존 JavaScript 코드 안에 추가)
const volumeSlider = document.getElementById('volumeSlider');
volumeSlider.addEventListener('input', function() {
    audio.volume = this.value / 100;
});
