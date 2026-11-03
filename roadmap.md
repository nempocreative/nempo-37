# Roadmap

## Selesai
- [x] Migrasi dari nempo-34: hanya situs NEMPO Organizer dan dashboard admin `/cms`; aplikasi lain dihapus.
- [x] Database dibuat ulang (20 tabel konten + peran admin) dengan pengaman akses; `/cms` membaca/menulis langsung ke database.
- [x] Semua foto/audio disimpan sebagai file asli di proyek, sehingga ikut terbawa saat deploy ke Vercel.
- [x] Event MusiComedy Night dipulihkan (poster, QRIS saweran, peta, reservasi Good Story Cafe).
- [x] Contoh pengaturan deploy di `.env.example`.

## Terbuka
- [ ] Buat akun admin pertama untuk `/cms` — menunggu email admin dari pemilik.
- [ ] Isi konten database (wisata, kuliner, berita, dll.) — menunggu keputusan apakah data lama ditarik.
- [ ] Unggah foto dari `/cms` belum aktif.
- [ ] Kompres foto unggahan baru ke WebP.
