const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const pelangganPage = require('../../support/pageObject/pages/pelangganPage/pelanggan-Page')

describe('Pengguna dapat mencari nama pelanggan', () => {

    // selalu login setiap menjalankan test suit pelanggan
    beforeEach(() => {

        loginPage.visitWeb()
        loginPage.isiEmail()
        loginPage.isiPassword()
        loginPage.klikTmbllLogin()
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. memilih menu pelanggan
    //3. menekan kolom pencarian nama pelanggan
    //4. memastikan terdapat nama pelanggan
    
    pelangganPage.goPelangganpage()
    pelangganPage.findCustomer()
  
  })

})
