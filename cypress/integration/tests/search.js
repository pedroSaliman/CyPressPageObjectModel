import Home from "../pages/home"
import ProductPage from "../pages/productpage"
import Wish from "../pages/wishlistpage"

it("this is case of search",()=>{
const search = new Home()
search.visit()
search.search("mac")
const wish=new ProductPage()
wish.wishlist()
const wishpage= new Wish()
wishpage.update("4")



})