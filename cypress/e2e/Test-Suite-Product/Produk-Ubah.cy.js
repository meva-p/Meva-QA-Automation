const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const produkPage = require('../../support/pageObject/pages/produkPage/produk-Page')


describe('Pengguna dapat mengubah data produk', () => {

    // selalu login setiap menjalankan test suit pelanggan
    beforeEach(() => {

      loginPage.visitWeb()
      loginPage.isiEmail()
      loginPage.isiPassword()
      loginPage.klikTmbllLogin()
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. memilih menu produk
    //3. memilih fitur pengaturan pada data produk
    //4. memilih fitur ubah data produk
    //5. mengubah kolom nama produk
    //6. mengubah kolom deskripsi produk
    //7. mengubah kolom harga beli produk
    //8. mengubah kolom harga jual produk
    //9. mengubah kolom stok produk
    //10. mengubah kategori produk 
    //11. menyimpan form tambah produk
    //12. memastikan data telah tersimpan

    
    produkPage.klikTmblProduk()
    produkPage.klikTglProduk()
    produkPage.klikTmblUbah()
    produkPage.ubahProduk()
    produkPage.klikTmblSimpan()
  
  })

})
