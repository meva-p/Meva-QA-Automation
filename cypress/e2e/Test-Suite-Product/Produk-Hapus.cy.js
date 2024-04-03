const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const produkPage = require('../../support/pageObject/pages/produkPage/produk-Page')

describe ('Pengguna dapat menghapus data produk yang tersimpan', () => {

    // selalu login setiap menjalankan test suit 
    beforeEach(() => {

      loginPage.visitWeb()
      loginPage.isiEmail()
      loginPage.isiPassword()
      loginPage.klikTmbllLogin()
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. memilih menu produk
    //3. memilih produk yang akan dihapus 
    //4. menekan tombol pengaturan pada kolom data produk
    //5. menekan pilihan hapus
    //6. memberikan konfirmasi penghapusan
    
    produkPage.klikTmblProduk()
    produkPage.klikTglProduk()
    produkPage.klikTmblHapus()
    produkPage.klikTmblDelete()
  
  })


})