const locators = require('../../../locators/Dashboard-Loc')
class dashboardPage {

    async klikIconToko() {
        cy.get(locators.datatestid.icontoko_button)
            //.scrollIntoView({ duration: 2000 })
            //.should('be.visible')
            .click()
        cy.wait(500)

    }

    async klikNamaProfil() {
        cy.xpath(locators.datatestid.namaprofil_button)
            .click({force : true})
        cy.wait(1000)
    
    }

    async verifyOnpelangganUbah() {
        //cy.xpath('//*[@class="chakra-heading css-18j379d"]')
        cy.get(locators.datatestid.ubahpelanggan_verify)
            .should('contain', 'ubah')
    }



    async klikTmbllLogout() {
        cy.xpath(locators.datatestid.logout_button)
            .click({force : true})
    
    }

    async verifyLogout() {
        cy.xpath(locators.datatestid.logout_verify)
            .should('contain', 'login', {timeout: 2000})
    }
}

module.exports = new dashboardPage()