// ===== FITUR 1: Tahun di footer otomatis update =====
// Daripada nulis manual "2026" (yang harus diubah tiap tahun),
// biarkan JavaScript ambil tahun sekarang otomatis

// document.querySelector = "cari 1 elemen HTML yang cocok sama pola ini"
const tahunElemen = document.querySelector('#tahun-sekarang');

// new Date() = objek bawaan JS yang tau tanggal & waktu saat ini
// .getFullYear() = ambil cuma bagian tahunnya, misal: 2026
const tahunIni = new Date().getFullYear();

// .textContent = "ganti isi teks di dalam elemen itu"
tahunElemen.textContent = tahunIni;


// ===== FITUR 2: Kartu project muncul dengan animasi fade-in saat di-scroll =====
// Ini bikin kesan halaman lebih "hidup" — kartu nggak langsung nongol semua,
// tapi muncul pelan-pelan pas kamu scroll sampai ke situ

// Ambil SEMUA elemen <article> (bukan cuma 1), makanya pakai querySelectorAll
const kartuProject = document.querySelectorAll('article');

// IntersectionObserver = "pengawas" yang tau kapan sebuah elemen
// masuk ke area yang keliatan di layar (viewport)
const pengawas = new IntersectionObserver((daftarElemen) => {
  // daftarElemen = semua elemen yang sedang diawasi & statusnya berubah
  daftarElemen.forEach((elemen) => {
    // elemen.isIntersecting = true kalau elemen ini SEDANG keliatan di layar
    if (elemen.isIntersecting) {
      elemen.target.classList.add('muncul'); // tambahkan class 'muncul'
    }
  });
});

// suruh si pengawas ini mengawasi tiap kartu project
kartuProject.forEach((kartu) => {
  pengawas.observe(kartu);
});
