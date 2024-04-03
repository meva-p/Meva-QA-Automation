const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const penjualanPage = require('../../support/pageObject/pages/penjualanPage/penjualan-Page')

describe('User dapat mencari Invoice Sales yang terdaftar', () => {
    it('passes', () => {

        //1. Login pada halaman https://kasiraja.ajikamaludin.id
        //2. Pilih menu Penjualan pada dashboard
        //3. Masukkan nomor invoice pada kolom cari
        //4. Klik tombol detail

        loginPage.visitWeb()
        loginPage.isiEmail()
        loginPage.isiPassword()
        loginPage.klikTmbllLogin()
        penjualanPage.klikTmblPenjualan()
        penjualanPage.klikKolomCari()
        penjualanPage.klikTmblDetail()
        
  
    })

  })