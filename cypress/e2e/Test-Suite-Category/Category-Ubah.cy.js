const loginPage = require ('../../support/pageObject/pages/loginPage/login-Page')
const kategoriPage = require ('../../support/pageObject/pages/kategoriPage/kategori-Page')



describe('User dapat mengubah kategori', () => {
    it('passes', () => {
      // 1. Masuk ke laman website
      // 2. Login dengan akun terdaftar
      // 3. Berhasil masuk ke dashboard
      // 4. Klik tombol menu kategori
      // 5. Kklik toogle di samping kanan kategori
      // 6. Klik tombol ubah
      // 7. Masukkan nama kategori baru
      // 8. Masukkan deskripsi kategori baru
      // 9. Klik tombol simpan

      

loginPage.visitWeb()
loginPage.isiEmail()
loginPage.isiPassword()
loginPage.klikTmbllLogin()
kategoriPage.klikTmblKategori()
kategoriPage.klikToogleKat()
kategoriPage.klikUbah()
kategoriPage.klikNamaBaru()
kategoriPage.klikDescBaru()
kategoriPage.simpanKategori()


    })
  })