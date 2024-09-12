export class CheckoutPage{
    elements = {
        pageTitle: () => cy.get('h1'),
        btnCashOnDelivery : () => cy.get('span',"Cash on Delivery/Pay on Delivery"),
        btnOrderSummary : () => cy.get('#orderSummaryPrimaryActionBtn > .a-button-inner > .a-button-input')
       
    }

    verifyPageTitle(text){
        this.elements.pageTitle.should('have.text',text)
    }

    clickOnbtnCashOnDelivery(){
        this.elements.btnCashOnDelivery().click()
    }
    clickOnOrderSummary(){
        this.elements.btnOrderSummary().click()
    }
}
export const checkoutPage = new CheckoutPage