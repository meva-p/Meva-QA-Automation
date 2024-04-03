const loginPage = require ('../../support/pageObject/pages/loginPage/login-Page')
const pembelianPage = require ('../../support/pageObject/pages/pembelianPage/pembelian-Page')



describe('User dapat menambahkan pembelian', () => {
    it('passes', () => {
      // 1. Masuk ke laman website
      // 2. Login dengan akun terdaftar
      // 3. Berhasil masuk ke dashboard
      // 4. Klik tombol pembelian
      // 5. klik tombol detail pada halaman pembelian

loginPage.visitWeb()
loginPage.isiEmail()
loginPage.isiPassword()
loginPage.klikTmbllLogin()
pembelianPage.klikTmblPembelian()
pembelianPage.klikDetailPembelian()

      

    })
  })