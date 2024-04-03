const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const penggunaPage = require('../../support/pageObject/pages/penggunaPage/pengguna-page')

describe ('Pengguna dapat menghapus data user yang tersimpan', () => {

    // selalu login setiap menjalankan test suit 
    beforeEach(() => {

      loginPage.visitWeb()
      loginPage.isiEmail()
      loginPage.isiPassword()
      loginPage.klikTmbllLogin()
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. memilih menu pengguna
    //3. memilih pengguna yang akan dihapus 
    //4. menekan tombol pengaturan pada kolom data pengguna
    //5. menekan pilihan hapus
    //6. memberikan konfirmasi penghapusan
    
    penggunaPage.goPenggunaPage()
    penggunaPage.setPengguna()
    penggunaPage.setDeleteUser()
    penggunaPage.deleteUser()
    penggunaPage.verifyDeleteDataSuccess()
  
  })


})