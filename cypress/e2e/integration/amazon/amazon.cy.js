import { cartPage } from "../../pages/cartPage"
import { checkoutPage } from "../../pages/CheckoutPage"
import { amazonHomePage } from "../../pages/homePage/amazonHomePage"
import { amazonLogin } from "../../pages/login/amzonLogin"
import { productPage } from "../../pages/productPage/productPage"

describe("Automate the process of opening Amazon.in",()=>{
    it("Amazon login",()=>{
        amazonLogin.amazonURL()
        cy.wait(6000)
        amazonLogin.clickSignInButton()
        amazonLogin.clickOnEmailLabel()
        amazonLogin.enterEmail("**********") //use your email or phone no
        amazonLogin.clickOnContinueButton()
        amazonLogin.clickOnPasswordLabel()
        amazonLogin.enterPassword("*******") // use your password
        amazonLogin.clickOnSignInButton()
        amazonHomePage.verifyPageTitle()
        amazonHomePage.clickOnSearchBar()
        amazonHomePage.enterSearchText("titan watch")
        amazonHomePage.clickOnSearchIcon()
        productPage.clickOnProductIcon()
        productPage.clickOnCartButton()
        cartPage.clickOnSkipWarranty()
        cartPage.clickOnProccedToBuyButton()
        checkoutPage.clickOnOrderSummary()
        cy.wait(3000)
        checkoutPage.clickOnOrderSummary()
        checkoutPage.clickOnOrderSummary()
    })
})
