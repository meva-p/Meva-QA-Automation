const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const penggunaPage = require('../../support/pageObject/pages/penggunaPage/pengguna-page')

var randomUser = generateRandomUser ();

function generateRandomUser (){
  const time = new Date().getTime()
  return time+"@mail.com";
}


describe('pengguna dapat menambahkan data pelanggan', () => {

  // selalu login setiap menjalankan test suit pelanggan
  beforeEach(() => {

    loginPage.visitWeb()
    loginPage.isiEmail()
    loginPage.isiPassword()
    loginPage.klikTmbllLogin()

  })
  
  it('with valid data', () => {

    //1. masuk ke url web https://kasiraja.ajikamaludin.id
    //2. melakukan login  
    //3. memilih menu pengguna
    //4. memilih fitur tambah pengguna
    //5. mengisi kolom nama 
    //6. mangisi kolom email 
    //7. mengisi password
    //8. menyimpan form tambah pelanggan
    //9. memasikan data telah tersimpan

    
    penggunaPage.goPenggunaPage()
    penggunaPage.addUser()
    penggunaPage.fillUserName()
    penggunaPage.fillEmail(randomUser)
    penggunaPage.fillPassword()
    penggunaPage.clickSaveBtn()
    penggunaPage.verifyNewDataSuccess()
  
  })
})