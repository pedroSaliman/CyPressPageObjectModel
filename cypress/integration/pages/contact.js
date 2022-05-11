///<reference types="Cypress" />
class ContactPage{

   
    contact(fullname,email,message){
        const name=cy.get("#FullName");
        name.clear().should("be.empty").type(fullname)
        const theemail=cy.get("#Email")
        theemail.clear().should("be.empty").type(email)
        const themessage=cy.get("#Enquiry")
        themessage.clear().should("be.empty").type(message)
        const btn =cy.get("button[name='send-email']")
        btn.should("be.visible").click()
        const result= cy.get(".result")
        result.should("be.visible")
        
        return this;
    }
    
    
    }
    export default ContactPage