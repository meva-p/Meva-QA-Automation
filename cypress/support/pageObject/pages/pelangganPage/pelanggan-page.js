const locators = require('../../../locators/Pelanggan-Loc')
class pelangganPage {

    //masuk kedalam menu pelanggan 
    async goPelangganpage() {
        cy.get(locators.datatestid.pelanggan_button)
            .click ()
        cy.wait(1000)
    }

    //tambah pelanggan
    async addCustomer () {
        cy.xpath(locators.datatestid.tambah_button)
            .click ()
    }

    //mengisi kolom nama pelanggan 
    async fillPelangganName (randomUser) {
        cy.xpath (locators.datatestid.namapelanggan_input)
            //.type('randomUser')
            .type(randomUser, {force: true})
            .should('have.value',randomUser) 
    }

    //mengisi kolom nomor 
    async fillNomorHp () {
        cy.xpath (locators.datatestid.nomorhp_input)
            .type('0811111111111') 
            // .type(randomUser, {force: true})
            // .should('have.value', randomUser) 
    }

    //mengisi kolom alamat
    async fillAlamat () {
        cy.xpath(locators.datatestid.alamat_input)
            .type('Jakarta')
    }

    //mengisi kolom keterangan
    async fillKeterangan () {
        cy.xpath(locators.datatestid.keterangan_input)
            .type('pelanggan')
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


    // mencari pelanggan
    async findCustomer () {
        cy.xpath(locators.datatestid.caripelanggan_input)
            .type('Pelanggan Umum')
            
    }

    
    // pengaturan profil pelanggan
    async setCustomer () {
        cy.get(locators.datatestid.setting_button)
        // cy.xpath('//*[@id="menu-button-22"]')
            .click ()
    }

    // pilih ubah profil pelanggan
    async editCustomer () {
        cy.get(locators.datatestid.ubah_button)
        //cy.xpath('//*[@id="menu-list-22-menuitem-23"]')
            .click ()
    }

    //mengganti kolom nama pelanggan 
    async editPelangganName (randomUser) {
        cy.xpath (locators.datatestid.newnamapelanggan_input)
            //.type('randomUser')
            .clear()
            .type(randomUser, {force: true})
            //.should(randomUser) 
    }

    //mengganti kolom nomor 
    async editNomorHp () {
        cy.xpath (locators.datatestid.newnomorhp_input)
            .clear()
            .type('08123456789') 
            // .type(randomUser, {force: true})
            // .should('have.value', randomUser) 
    }

    //mengganti kolom alamat
    async editAlamat () {
        cy.xpath(locators.datatestid.newalamat_input)
            .clear()
            .type('jabodetabek')
    }

    //mengganti kolom keterangan
    async editKeterangan () {
        cy.xpath(locators.datatestid.newketerangan_input)
            .clear()
            .type('pelanggan')
    }

    // verify saved edit data
    async verifyEditDataSuccess() {
        //cy.xpath('//*[@id="1"]')
        cy.get(locators.datatestid.simpan_button)
            .should('contain', "item diubah", {timeout: 2000})
    }

    

    // pilih hapus profil pelanggan
    async setDeleteCustomer () {
        cy.get(locators.datatestid.settingdel_button)
        //cy.xpath('//*[@id="menu-list-22-menuitem-23"]')
            .click ()
    }

    // pilih hapus profil pelanggan
    async deleteCustomer () {
        cy.get(locators.datatestid.delete_button)
        //cy.xpath('//*[@id=class="chakra-button css-n45e6f"]')
            .click ()
        cy.wait(500)
    }

    // verify deleted data
    async verifyDeleteDataSuccess() {
        //cy.xpath('//*[@id="1"]')
        cy.get(locators.datatestid.delete_button)

    }

}
module.exports = new pelangganPage() 