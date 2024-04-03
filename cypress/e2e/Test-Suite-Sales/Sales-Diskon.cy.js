const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const penjualanPage = require('../../support/pageObject/pages/penjualanPage/penjualan-Page')

describe('User dapat menambahkan diskon pada Penjualan', () => {
    it('passes', () => {

        //1. Login pada halaman https://kasiraja.ajikamaludin.id
        //2. Pilih menu Penjualan pada dashboard
        //3. Klik tombol tambah
        //4. Klik tombol produk
        //5. Klik nama produk yang akan ditambahkan
        //6. Masukkan jumlah produk yang akan ditambahkan
        //7. Masukkan diskon pada kolom diskon
        //8. Masukkan jumlah bayar
        //9. Klik tombol bayar
        //10. Klik tombol tutup

        loginPage.visitWeb()
        loginPage.isiEmail()
        loginPage.isiPassword()
        loginPage.klikTmbllLogin()
        penjualanPage.klikTmblPenjualan()
        penjualanPage.klikTmblTambah()
        penjualanPage.klikTmblProduk()
        penjualanPage.klikNamaProduk()
        penjualanPage.isiJumlahProduk()
        penjualanPage.isiDiskon()
        penjualanPage.isiJumlahBayar()
        penjualanPage.klikTmblBayar()
        penjualanPage.klikTmblTutup()
  
    })

  })