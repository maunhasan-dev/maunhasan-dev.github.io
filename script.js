// ===== FITUR 1: Tahun di footer otomatis update =====
const tahunElemen = document.querySelector('#tahun-sekarang');
tahunElemen.textContent = new Date().getFullYear();


// ===== FITUR 2: Kartu project muncul dengan animasi fade-in saat di-scroll =====
const kartuProject = document.querySelectorAll('article');

const pengawas = new IntersectionObserver(
  (daftarElemen) => {
    daftarElemen.forEach((elemen) => {
      if (elemen.isIntersecting) {
        elemen.target.classList.add('muncul');
        // setelah muncul sekali, berhenti diawasi (nggak perlu dicek terus)
        pengawas.unobserve(elemen.target);
      }
    });
  },
  {
    threshold: 0.15,     // trigger begitu 15% kartu keliatan di layar
    rootMargin: '0px 0px -40px 0px' // trigger sedikit sebelum kartu full masuk layar
  }
);

kartuProject.forEach((kartu) => {
  pengawas.observe(kartu);
});
