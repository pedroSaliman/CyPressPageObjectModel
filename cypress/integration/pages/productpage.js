///<reference types="Cypress" />

import Compare from "./compare"

class Productpage{

   
    wishlist()
    {
        const wishlink=cy.get("#add-to-wishlist-button-4")
        wishlink.should("be.visible").click()
        const barlink= cy.get("p[class='content'] a")
        barlink.should("be.visible").click()
        return this
    }
    compare()


    {
        const comparelink=cy.get("div[class='compare-products'] button[type='button']")
        comparelink.should("be.visible").click()
        const comparebarlink=cy.get("p[class='content'] a")
        comparebarlink.should("be.visible").click()
        return new Compare();


    }
    
    
    
    }
    export default Productpage;














// wishlist()
// {
//     const wishlink=cy.get("#add-to-wishlist-button-4")
//     wishlink.should("be.visible").click()
//     const barlink= cy.get("p[class='content'] a")
//     barlink.should("be.visible").click()
//     return this
// }
