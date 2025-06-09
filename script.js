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


document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bg-music");
  const volumeControl = document.getElementById("volume");

  // 초기에 볼륨 세팅
  audio.volume = volumeControl.value;

  // 볼륨 조절 이벤트 연결
  volumeControl.addEventListener("input", function () {
    audio.volume = this.value;
  });
});
