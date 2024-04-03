const locators = require('../../../locators/Login-Loc')

class loginPage {

    async visitWeb(){
        cy.visit('https://kasiraja.ajikamaludin.id')
        
    }

    async isiEmail() {
        cy.xpath(locators.datatestid.email_input)
            .type('mevaapu@gmail.com')

    }

    async isiPassword() {
        cy.xpath(locators.datatestid.password_input)
            .type('passwordmeva')

    }

    async klikTmbllLogin() {
        cy.xpath(locators.datatestid.login_button)
            .click()
        cy.wait(2000)
        
    }

}

module.exports = new loginPage()
