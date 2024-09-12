export class AmazonLogin{
    elements = {
        pageTitle: () => cy.get(),
        url : () =>  cy.visit('https://www.amazon.in/'),
        btnNavigationSignIn : () => cy.get('#nav-link-accountList'),
        lblEmail : () =>  cy.get('#ap_email'),
        lblPassword : () =>  cy.get('#ap_password'),
        btnContinue : () => cy.get('.a-button-inner > #continue'),
        btnSingIn : () =>  cy.get('#signInSubmit'),
    }
    amazonURL(){
     this.elements.url()
    }

    clickSignInButton(){
     this.elements.btnNavigationSignIn().click()
    }
     
    clickOnEmailLabel(){
        this.elements.lblEmail().click()
    }

    enterEmail(email){
        this.elements.lblEmail().type(email)
    }

    clickOnPasswordLabel(){
        this.elements.lblPassword().click()
    }

    enterPassword(password){
        this.elements.lblPassword().type(password)
    }
   
    clickOnContinueButton(){
        this.elements.btnContinue().click({force : true})
    }

    clickOnSignInButton(){
        this.elements.btnSingIn().click()
    }

}
export const amazonLogin = new AmazonLogin