const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const produkPage = require('../../support/pageObject/pages/produkPage/produk-Page')

describe('Pengguna dapat mencari produk', () => {

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
    //3. menekan kolom pencarian produk
    //4. memastikan terdapat produk
    
    produkPage.klikTmblProduk()
    produkPage.cariNamaProduk()
  
  })

})