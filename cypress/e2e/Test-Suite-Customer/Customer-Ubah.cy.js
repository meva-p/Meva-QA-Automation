const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const pelangganPage = require('../../support/pageObject/pages/pelangganPage/pelanggan-Page')

var randomUser = generateRandomUser ();

function generateRandomUser (){
  const time = new Date().getTime()
  return time;
}

describe('Pengguna dapat mengubah data pelanggan', () => {

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
    //3. memilih fitur pengaturan pada data pelanggan
    //4. memilih fitur ubah data pelanggan
    //5. mengubah data pada nama 
    //6. mengubah data pada nomor handphone 
    //7. mengubah data pada alamat
    //8. mengubah data pada keterangan
    //9. menyimpan form ubah data pelanggan
    //10. memastikan data pelanggan berhasil diubah

    
    pelangganPage.goPelangganpage()
    pelangganPage.setCustomer()
    pelangganPage.editCustomer()
    pelangganPage.editPelangganName(randomUser)
    pelangganPage.editNomorHp()
    pelangganPage.editAlamat()
    pelangganPage.editKeterangan()
    pelangganPage.clickSaveBtn()
    pelangganPage.verifyEditDataSuccess()
  
  })

})
