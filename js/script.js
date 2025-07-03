window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const bg = document.getElementById('bg');
    bg.style.transform = `translateY(${scroll * 0.5}px)`;
  });