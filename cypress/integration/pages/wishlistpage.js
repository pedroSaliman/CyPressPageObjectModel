///<reference types="Cypress" />


class Wish{

update(numberofproduct){

const quantity=cy.get("input[value='2']")
quantity.clear().should("be.empty").type(numberofproduct)

const updatebutton = cy.get("#updatecart")
updatebutton.should("be.visible").click()
const remove= cy.get("button[name='updatecart'][type='button']")
remove.should("be.visible").click()
const result = cy.get(".no-data")
result.should("be.visible")
return this;

}






}
export default Wish;