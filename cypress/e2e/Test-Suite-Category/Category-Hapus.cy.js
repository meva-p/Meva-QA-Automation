const loginPage = require ('../../support/pageObject/pages/loginPage/login-Page')
const kategoriPage = require ('../../support/pageObject/pages/kategoriPage/kategori-Page')



describe('User dapat mengubah kategori', () => {
    it('passes', () => {
      // 1. Masuk ke laman website
      // 2. Login dengan akun terdaftar
      // 3. Berhasil masuk ke dashboard
      // 4. Klik tombol menu kategori
      // 5. Kklik toogle di samping kanan kategori
      // 6. Klik tombol hapus
      // 7. Klik tombol delete pada pop up


      

loginPage.visitWeb()
loginPage.isiEmail()
loginPage.isiPassword()
loginPage.klikTmbllLogin()
kategoriPage.klikTmblKategori()
kategoriPage.klikToogleKat()
kategoriPage.klikHapus()
kategoriPage.klikDelete()


    })
  })