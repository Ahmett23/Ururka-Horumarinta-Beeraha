
    // ======= Simple SPA Router (hash-based) =======
    const pages = [...document.querySelectorAll('.page')];
    function setRoute(){
      const id = (location.hash || '#home').replace('#','');
      pages.forEach(p=>p.classList.toggle('active', p.id===id));
      window.scrollTo({top:0,behavior:'instant'});
      // close mobile menu
      mobileMenu.style.display='none';
    }
    window.addEventListener('hashchange', setRoute);
    setRoute();

    // mobile menu toggle
    const openMenu = document.getElementById('openMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    openMenu.addEventListener('click', ()=>{
      mobileMenu.style.display = mobileMenu.style.display==='none'?'block':'none';
    });
    mobileMenu.addEventListener('click', e=>{ if(e.target.matches('[data-link]')) mobileMenu.style.display='none'; });

    // Newsletter & contact demos (no backend)
    document.getElementById('newsForm').addEventListener('submit', (e)=>{
      e.preventDefault();
      document.getElementById('newsMsg').textContent = 'Mahadsanid! Email‑kaaga waa la diiwaan geliyey.';
      e.target.reset();
    });
    document.getElementById('contactForm').addEventListener('submit', (e)=>{
      e.preventDefault();
      document.getElementById('contactMsg').textContent = 'Fariinta waa la helay – wixiiba dhowr saacadood gudahood ayaan kula soo xiriiri doonaa.';
      e.target.reset();
    });

    // year
    document.getElementById('year').textContent = new Date().getFullYear();
  
    function toggleMenu() {
      document.getElementById("menu").classList.toggle("active");
    }