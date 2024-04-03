const locators = require('../../../locators/Pengguna-Loc')
class penggunaPage{

    //masuk kedalam menu pengguna 
    async goPenggunaPage() {
        cy.get(locators.datatestid.pengguna_button)            
            .click ()
    
    }

    //tambah pengguna
    async addUser () {
        cy.xpath(locators.datatestid.tambah_button)
            .click ()
    }

    //mengisi kolom nama pengguna
    async fillUserName () {
        cy.xpath (locators.datatestid.username_input)
            .type('example') 
            // .type(randomUser, {force: true})
            // .should('have.value', randomUser) 
    }

    //mengisi kolom email 
    async fillEmail (randomUser) {
        cy.xpath (locators.datatestid.email_input)
            //.type('randomUser')
            .type(randomUser, {force: true})
            .should('have.value', randomUser) 
    }

    //mengisi kolom password
    async fillPassword () {
        cy.xpath(locators.datatestid.password_input)
            .type('12345678')
    }

    //menyimpan form terisi
    async clickSaveBtn () {
        cy.xpath(locators.datatestid.simpan_button)
            .click() 
        cy.wait(500)
    }

    // verify new saved data
    async verifyNewDataSuccess() {
        //cy.xpath('//*[@id="1"]')
        cy.get(locators.datatestid.success_popup)
            .should('contain', "item ditambahkan", {timeout: 2000})
    }





    // mencari pengguna //
    async findUser () {
        cy.xpath(locators.datatestid.caripengguna_input)
            .type('example')
            //.should('contain', "example")
    }



    //masuk menu ubah data pengguna
    async setPengguna () {
        cy.get(locators.datatestid.setting_button)
            .click()
    }

    //memilih menu ubah data pengguna
    async editPengguna () {
        cy.get(locators.datatestid.ubah_button)            
            .click()
        //cy.wait(500)
    }

    //mengganti kolom nama pengguna
    async editUserName () {
        cy.xpath (locators.datatestid.newusername_input)
            .clear()
            .type('example') 
            // .type(randomUser, {force: true})
            // .should('have.value', randomUser) 
    }

    //mengganti kolom email 
    async editEmail (randomUser) {
        cy.xpath (locators.datatestid.newemail_input)
            //.type('randomUser')
            .clear()
            .type(randomUser, {force: true})
            //.should('have.value', randomUser)
    }

    //mengganti kolom password
    async editPassword () {
        cy.xpath(locators.datatestid.newpassword_input)
            .clear()
            .type('12345678')
    }

    //menyimpan form terisi
    async clickSaveBtn () {
        cy.xpath(locators.datatestid.simpan_button)
            .click() 
        cy.wait(500)
    }

    // verify new saved data
    async verifyEditDataSuccess() {
        //cy.xpath('//*[@id="1"]')
        cy.get(locators.datatestid.success_popup)
            .should('contain', "item diubah", {timeout: 2000})
    }



    // pilih hapus profil pelanggan
    async setDeleteUser () {
        cy.get(locators.datatestid.settingdelete_button)
        //cy.xpath('//*[@id="menu-list-22-menuitem-23"]')
            .click ()
    }

    // pilih hapus profil pelanggan
    async deleteUser () {
        cy.get(locators.datatestid.deletepermanen_button)
        //cy.xpath('//*[@id=class="chakra-button css-n45e6f"]')
            .click ()
        cy.wait(500)
    }

    // verify deleted data
    async verifyDeleteDataSuccess() {
        //cy.xpath('//*[@id="1"]')
        cy.get(locators.datatestid.success_popup)
            .should('contain', "item dihapus", {timeout: 2000})
    }

}
module.exports = new penggunaPage() 