const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const dashboardPage = require('../../support/pageObject/pages/dashboardPage/dashboard-page')

describe('Pengguna dapat mengubah profil pengguna melalui icon profil pada dashboard', () => {
  it('passes', () => {
    // 1. Masuk ke laman login website
    // 2. Mengisi email dengan email terdaftar
    // 3. Mengisi password dengan password terdaftar
    // 4. Klik tombol login
    
    loginPage.visitWeb()
    loginPage.isiEmail()
    loginPage.isiPassword()
    loginPage.klikTmbllLogin()
    
  })

    it('with valid data',() => {

        //1. menekan icon profil pada dashboard
        //2. memilih nama profil
        //3. memastikan berada pada halaman ubah data pengguna 

        //dashboardPage.klikIconToko()
        //dashboardPage.klikNamaProfil()
        //dashboardPage.verifyOnpelangganUbah()

  })
})