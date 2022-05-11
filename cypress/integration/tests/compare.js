import Compare from "../pages/compare"
import Home from "../pages/home"
import ProductPage from "../pages/productpage"

it("this is case of compare",()=>{
const search = new Home()
search.visit()

search.search("mac")
const wish=new ProductPage()
wish.compare()
search.search("asus")
wish.compare()
const com = new Compare()
com.clear()



})