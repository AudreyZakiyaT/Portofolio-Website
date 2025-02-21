// Contoh: Menambahkan alert saat halaman dimuat
window.onload = function() {
    alert("Selamat datang di portofolio saya!");
};

// Contoh: Menambahkan interaksi saat mengklik proyek
document.querySelectorAll('.proyek-item').forEach(item => {
    item.addEventListener('click', () => {
        alert('Anda mengklik sebuah proyek!');
    });
});