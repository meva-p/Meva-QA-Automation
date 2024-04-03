const loginPage = require ('../../support/pageObject/pages/loginPage/login-Page')
const kategoriPage = require ('../../support/pageObject/pages/kategoriPage/kategori-Page')



describe('User dapat memasuki menu kategori', () => {
    it('passes', () => {
      // 1. Masuk ke laman website
      // 2. Login dengan akun terdaftar
      // 3. Berhasil masuk ke dashboard
      // 4. Klik tombol menu kategori
      // 5. Mengisi nama kategori yang ingin dicari
      

loginPage.visitWeb()
loginPage.isiEmail()
loginPage.isiPassword()
loginPage.klikTmbllLogin()
kategoriPage.klikTmblKategori()
kategoriPage.cariNama()


    })
  })