class Compare{


clear()
{
    const clearlist=cy.get('.clear-list')
    clearlist.should("be.visible").click()
    const text=cy.get('.no-data')
    text.should("not.be.empty").and("be.visible").and("have.text","You have no items to compare.")
}







}
export default Compare;