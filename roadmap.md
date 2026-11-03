# Roadmap

## Selesai
- [x] Poster Event Mendatang: hilangkan animasi yang mengaburkan tulisan dan sediakan WebP sesuai ukuran layar tanpa menunda pemuatan.
- [x] Migrasi dari nempo-34: hanya situs NEMPO Organizer dan dashboard admin `/cms`; aplikasi lain dihapus.
- [x] Database dibuat ulang (20 tabel konten + peran admin) dengan pengaman akses; `/cms` membaca/menulis langsung ke database.
- [x] Semua foto/audio disimpan sebagai file asli di proyek, sehingga ikut terbawa saat deploy ke Vercel.
- [x] Event MusiComedy Night dipulihkan (poster, QRIS saweran, peta, reservasi Good Story Cafe).
- [x] Contoh pengaturan deploy di `.env.example`.

- [x] Akun admin admin@nempogarut.com dibuat; 109 data situs (wisata, kuliner, penginapan, lomba, kamus Sunda) dimasukkan ke database.
- [x] Data impor lama tidak dipertahankan: setelah remix, wisata, kuliner, penginapan, perlombaan, dan kamus Sunda diverifikasi kosong; jangan impor ulang.

## Terbuka
- [ ] Unggah foto dari `/cms` belum aktif.
- [ ] Kompres foto unggahan baru ke WebP.
