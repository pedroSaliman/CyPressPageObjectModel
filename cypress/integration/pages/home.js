///<reference types="Cypress" />

import ContactPage from "./contact";
import Productpage from "./productpage";

class Home{

visit(){
    cy.visit("https://demo.nopcommerce.com/")
}
contact(){
    const contact=cy.get("a[href='/contactus']")
    contact.should("be.visible")
    contact.click();
    
  return new ContactPage();
}
select()
{
    const select=cy.get("#customerCurrency")
    select.should("be.visible").select("Euro")
    return this;
}

search(producname)
{
    const searchinput=cy.get("#small-searchterms")
    searchinput.clear().should("be.empty").type(producname)
    const mac = cy.get("a[id='ui-id-2'] span")
    mac.click({force:true})
    return new Productpage()

}


}
export default Home