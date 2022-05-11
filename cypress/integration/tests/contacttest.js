import ContactPage from "../pages/contact";
import Home from "../pages/home"

it("this is case of contact",()=>{

const con = new Home();
con.visit();
con.contact();
const info = new ContactPage()
info.contact("walled","walled@gmail.com","this was awesome")

})