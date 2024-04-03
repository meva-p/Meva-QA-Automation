const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const penjualanPage = require('../../support/pageObject/pages/penjualanPage/penjualan-Page')

describe('User dapat melihat detail setiap penjualan', () => {
    it('passes', () => {

        //1. Login pada halaman https://kasiraja.ajikamaludin.id
        //2. Pilih menu Penjualan pada dashboard
        //3. Klik tombol detail penjualan

        loginPage.visitWeb()
        loginPage.isiEmail()
        loginPage.isiPassword()
        loginPage.klikTmbllLogin()
        penjualanPage.klikTmblPenjualan()
        penjualanPage.klikTmblDetail()
        
  
    })

  })