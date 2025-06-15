// 현재는 별도 기능 없음, 확장 가능
console.log("스크롤형 섹션 + 둥실 PNG 준비 완료!");

// ✅ 스크롤 시 .scroll-fade 요소들이 등장하도록 처리
const scrollEls = document.querySelectorAll('.scroll-fade');

function handleScrollFadeIn() {
  const triggerY = window.innerHeight * 0.85;

  scrollEls.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerY) {
      el.classList.add('show'); // ✅ 등장
    } else {
      el.classList.remove('show'); // ✅ 다시 숨김 (선택사항)
    }
  });
}

// ✅ 페이지 로드 시 + 스크롤 시 실행
window.addEventListener('scroll', handleScrollFadeIn);
window.addEventListener('load', handleScrollFadeIn);


