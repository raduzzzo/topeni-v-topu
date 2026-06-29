const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');}})}, {threshold:.12});
revealItems.forEach(item=>observer.observe(item));

const answer = document.getElementById('diagnosticAnswer');
document.querySelectorAll('.diagnostic').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.diagnostic').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    answer.textContent = btn.dataset.answer;
  });
});
