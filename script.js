const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    if (i === index) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
}

document.querySelector('.book').addEventListener('click', () => {
  currentPage = (currentPage + 1) % pages.length;
  showPage(currentPage);
});

// Start with first page
showPage(currentPage);

document.addEventListener('click', function () {
  const audio = document.getElementById('bg-music');
  if (audio.paused) {
    audio.play();
  }
}, { once: true });
