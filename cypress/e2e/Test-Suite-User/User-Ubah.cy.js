const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const penggunaPage = require('../../support/pageObject/pages/penggunaPage/pengguna-page')

var randomUser = generateRandomUser ()

function generateRandomUser (){
    const time = new Date(). getTime()
    return time+'@mail.com';
}

describe ('Pengguna dapat mengubah data user yang tersimpan', () => {

    // selalu login setiap menjalankan test suit pengguna
    beforeEach(() => {

      loginPage.visitWeb()
      loginPage.isiEmail()
      loginPage.isiPassword()
      loginPage.klikTmbllLogin()
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. memilih menu pengguna
    //3. memilih fitur pengaturan pada data pengguna
    //4. memilih fitur ubah data pengguna
    //5. mengubah data pada nama 
    //6. mengubah data pada nomor handphone 
    //7. mengubah data pada alamat
    //8. mengubah data pada keterangan
    //9. menyimpan form ubah data pengguna
    //10. memastikan data pengguna berhasil diubah

    
    penggunaPage.goPenggunaPage()
    penggunaPage.setPengguna()
    penggunaPage.editPengguna()
    penggunaPage.editUserName()
    penggunaPage.editEmail(randomUser)
    penggunaPage.editPassword()
    penggunaPage.clickSaveBtn()
    penggunaPage.verifyEditDataSuccess()
    

  })

})