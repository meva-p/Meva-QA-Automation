const locators = require('../../../locators/Kategori-Loc')
class kategoriPage {

    //klik tombol menu Kategori pada dashboard
    async klikTmblKategori(){
        cy.get(locators.datatestid.kategori_button)
            .click()

    }

    // klik tombol tambah pada page kategori
    async klikTmblTambah(){
        cy.xpath(locators.datatestid.tambah_button)
    .click()

    }

    // mengisi nama kategori
    async namaKategori(){
        cy.xpath(locators.datatestid.namakategori_input)
            .type('aagg')

    }

    // mengisi deskripsi kategori
    async deskripsiKategori(){
        cy.xpath(locators.datatestid.deskripsi_input)
            .type('aabb')

    }

    // klik tombol simpan
    async simpanKategori(){
        cy.xpath(locators.datatestid.simpan_button)
            .click()

    }

    // mengisi nama kategori yang ingin dicari
    async cariNama(){
        cy.xpath(locators.datatestid.carikategori_input)
            .type('Umum') 
    }

    // klik toogle di samping kanan kategori
    async klikToogleKat(){
        cy.get(locators.datatestid.setting_button)
            .click()

    }

    // klik tombol ubah
    async klikUbah(){
        cy.get(locators.datatestid.ubah_button)
        .click()

    }

    // masukkan nama kategori baru
    async klikNamaBaru(){
        cy.xpath(locators.datatestid.newkategori_input)
            .type('benaiu')

    }

    // masukkan deskripsi kategori baru

    async klikDescBaru(){
        cy.xpath(locators.datatestid.newdeskripsi_input)
            .type('hah')

    }


    // klik tombol hapus
    async klikHapus(){
        cy.get(locators.datatestid.hapus_button)
            .click()

    }

    // klik tombol delete pada pop up
    async klikDelete(){
        cy.xpath(locators.datatestid.deletepermanen_button)
            .click()
            
    }


}

module.exports = new kategoriPage() 
