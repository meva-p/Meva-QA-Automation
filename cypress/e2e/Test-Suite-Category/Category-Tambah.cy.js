const loginPage = require ('../../support/pageObject/pages/loginPage/login-Page')
const kategoriPage = require ('../../support/pageObject/pages/kategoriPage/kategori-Page')



describe('User dapat menambahkan kategori', () => {
    it('passes', () => {
      // 1. Masuk ke laman website
      // 2. Login dengan akun terdaftar
      // 3. Berhasil masuk ke dashboard
      // 4. Klik tombol menu kategori
      // 5. Klik tombol tambah pada page kategori
      // 6. Mengisi nama kategori
      // 7. Mengisi deskripsi kategori
      // 8. Klik tombol simpan

      

loginPage.visitWeb()
loginPage.isiEmail()
loginPage.isiPassword()
loginPage.klikTmbllLogin()
kategoriPage.klikTmblKategori()
kategoriPage.klikTmblTambah()
kategoriPage.namaKategori()
kategoriPage.deskripsiKategori()
kategoriPage.simpanKategori()


    })
  })