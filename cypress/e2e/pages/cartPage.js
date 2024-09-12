export class CartPage{
    elements = {
        pageTitle: () => cy.get(),
        btnWarranty:() => cy.get('#attachSiNoCoverage'),
        btnProccedToBuy :()=> cy.get('#sc-buy-box-ptc-button'),
    }

    clickOnSkipWarranty(){
        this.elements.btnWarranty().click()
    }
    clickOnProccedToBuyButton(){
        this.elements.btnProccedToBuy().click()
    }

}
export const cartPage = new CartPage
