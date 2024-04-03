const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')


describe('User dapat login ke dalam sistem', () => {
    it('passes', () => {
      // 1. Masuk ke laman login website
      // 2. Mengisi email dengan email terdaftar
      // 3. Mengisi password dengan password terdaftar
      // 4. Klik tombol login
      
      loginPage.visitWeb()
      loginPage.isiEmail()
      loginPage.isiPassword()
      loginPage.klikTmbllLogin()
  
  
    })
  })