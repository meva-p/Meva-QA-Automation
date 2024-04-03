const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const pelangganPage = require('../../support/pageObject/pages/pelangganPage/pelanggan-Page')

describe ('Pengguna dapat menghapus data customer yang tersimpan', () => {

    // selalu login setiap menjalankan test suit 
    beforeEach(() => {

      loginPage.visitWeb()
      loginPage.isiEmail()
      loginPage.isiPassword()
      loginPage.klikTmbllLogin()
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. memilih menu pelanggan
    //3. memilih pelanggan yang akan dihapus 
    //4. menekan tombol pengaturan pada kolom data pelanggan
    //5. menekan pilihan hapus
    //6. memberikan konfirmasi penghapusan
    
    pelangganPage.goPelangganpage()
    pelangganPage.setCustomer()
    pelangganPage.setDeleteCustomer()
    pelangganPage.deleteCustomer()
    pelangganPage.verifyDeleteDataSuccess()
  
  })


})