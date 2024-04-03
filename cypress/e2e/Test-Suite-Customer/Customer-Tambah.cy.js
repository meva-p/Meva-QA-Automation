const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const pelangganPage = require('../../support/pageObject/pages/pelangganPage/pelanggan-Page')

var randomUser = generateRandomUser ();

function generateRandomUser (){
  const time = new Date().getTime()
  return time;
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
    //3. memilih menu pelanggan
    //4. memilih fitur tambah pelanggan
    //5. mengisi kolom nama 
    //6. mangisi kolom nomor handphone 
    //7. mengisi alamat
    //8. mengisi keterangan
    //9. menyimpan form tambah pelanggan
    //10. memasikan data telah tersimpan

    
    pelangganPage.goPelangganpage()
    pelangganPage.addCustomer()
    pelangganPage.fillPelangganName(randomUser)
    pelangganPage.fillNomorHp()
    pelangganPage.fillAlamat()
    pelangganPage.fillKeterangan()
    pelangganPage.clickSaveBtn()
    pelangganPage.verifyNewDataSuccess(randomUser)
  
  })
})