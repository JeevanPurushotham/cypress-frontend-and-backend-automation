export class ProductPage{
    elements = {
        pageTitle: () => cy.get(),
        productIcon : ()=>  cy.get('[class="a-link-normal s-no-outline"]'),
        btnCart : () => cy.get('#add-to-cart-button'),
       
    }
    clickOnProductIcon(){
     this.elements.productIcon().eq
     (0).
     invoke('removeAttr', 'target')
     .click();
    }

    clickOnCartButton(){
        this.elements.btnCart().click()
    }
}
export const productPage = new ProductPage
