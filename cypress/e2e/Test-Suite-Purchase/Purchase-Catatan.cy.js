const loginPage = require ('../../support/pageObject/pages/loginPage/login-Page')
const pembelianPage = require ('../../support/pageObject/pages/pembelianPage/pembelian-Page')



describe('User dapat menambahkan pembelian', () => {
    it('passes', () => {
      // 1. Masuk ke laman website
      // 2. Login dengan akun terdaftar
      // 3. Berhasil masuk ke dashboard
      // 4. Klik tombol pembelian
      // 5. Klik tombol tambah
      // 6. Klik tombol produk
      // 7. Klik nama produk
      // 8. Isi jumlah produk
      // 9. Isi catatan pada pembelian
      // 10. Klik tombol simpan
      

loginPage.visitWeb()
loginPage.isiEmail()
loginPage.isiPassword()
loginPage.klikTmbllLogin()
pembelianPage.klikTmblPembelian()
pembelianPage.klikTmblTambah()
pembelianPage.klikTmblProduk()
pembelianPage.klikNamaProduk()
pembelianPage.isiJmlhProduk()
pembelianPage.catatanPembelian()
pembelianPage.klikTmblSimpan()
      

    })
  })