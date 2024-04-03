const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const penjualanPage = require('../../support/pageObject/pages/penjualanPage/penjualan-Page')

describe('User dapat memilih jenis Pelanggan yang terdaftar', () => {
    it('passes', () => {

        //1. Login pada halaman https://kasiraja.ajikamaludin.id
        //2. Pilih menu Penjualan pada dashboard
        //3. Klik pada kolom pelanggan
        //4. Klik jenis pelanggan yang diinginkan

        loginPage.visitWeb()
        loginPage.isiEmail()
        loginPage.isiPassword()
        loginPage.klikTmbllLogin()
        penjualanPage.klikTmblPenjualan()
        penjualanPage.klikKolomPelanggan()
        penjualanPage.klikJenisPelanggan()
        
  
    })

  })