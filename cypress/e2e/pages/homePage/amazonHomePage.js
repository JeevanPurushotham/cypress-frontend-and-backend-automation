/// <reference types = "cypress" />
export class AmazonHomePage{

    elements = {
        pageTitle: () => cy.get('#nav-logo-sprites'),
        searchBar: () => cy.get('#twotabsearchtextbox'),
        searchIcon: () => cy.get('#nav-search-submit-button'),
       
    }
    
    verifyPageTitle(){
        this.elements.pageTitle().should('be.visible')
    }

    clickOnSearchBar(){
        this.elements.searchBar().click({force : true})
    }

    enterSearchText(text){
        this.elements.searchBar().type(text)
    }

    clickOnSearchIcon(){
      this.elements.searchIcon().click()
    }

    clickOnImage(){
        cy.get('[class="a-link-normal s-no-outline"]').eq
        (0).
        invoke('removeAttr', 'target')
        .click();
    }

}

export const amazonHomePage = new AmazonHomePage