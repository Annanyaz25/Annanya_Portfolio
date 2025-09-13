const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

// Theme toggle
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const stored = localStorage.getItem('theme');
if(stored==='light'){ root.classList.add('light'); }
toggle.addEventListener('click', ()=>{
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light')?'light':'dark');
});

// Scroll reveal for sections and cards
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{ threshold: 0.12 });

document.querySelectorAll('.section, .card, .timeline-item, .photo').forEach(el=>{
  el.classList.add('reveal');
  observer.observe(el);
});
