const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.project');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const f = chip.dataset.filter;
    cards.forEach(card => {
      card.style.display = (f==='all' || card.classList.contains(f)) ? '' : 'none';
    });
  });
});