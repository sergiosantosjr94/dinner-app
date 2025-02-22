import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { Heading1 } from "lucide-react";
import CartProductItems  from "./cart-product-item";

const CartSheet = () => {
  const {isOpen, toggleCart, products} = useContext(CartContext);
  return (  
  <Sheet open={isOpen} onOpenChange={toggleCart}>
  <SheetContent className="w-[80%]">
    <SheetHeader>
      <SheetTitle className="text-left">Sacola</SheetTitle>
    </SheetHeader>
    <div className="py-5">
    {products.map(product => (<CartProductItems key={product.id} product={product}/>))}
    </div>
  </SheetContent>
</Sheet> 
);
}
 
export default CartSheet;