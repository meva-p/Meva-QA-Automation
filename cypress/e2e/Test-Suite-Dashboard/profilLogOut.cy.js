const loginPage = require('../../support/pageObject/pages/loginPage/login-Page')
const dashboardPage = require('../../support/pageObject/pages/dashboardPage/dashboard-page')

describe('Pengguna dapat logout melalui icon profil pada dashboard', () => {
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

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. menekan icon profil pada dashboard
    //3. memilih log out menu
    //4. memastikan berada pada halaman login 
    
    dashboardPage.klikIconToko()
    dashboardPage.klikTmbllLogout()
    dashboardPage.verifyLogout()
  
  })

})