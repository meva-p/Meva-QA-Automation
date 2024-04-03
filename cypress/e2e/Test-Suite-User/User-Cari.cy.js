const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const penggunaPage = require('../../support/pageObject/pages/penggunaPage/pengguna-page')

describe('Pengguna dapat mencari nama user', () => {

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
    
    penggunaPage.goPenggunaPage()
    penggunaPage.findUser()
  
  })

})