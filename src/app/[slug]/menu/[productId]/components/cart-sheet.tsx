import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

import CartProductItems  from "./cart-product-item";
import { Button } from "@/components/ui/button";

const CartSheet = () => {
  const {isOpen, toggleCart, products} = useContext(CartContext);
  return (  
  <Sheet open={isOpen} onOpenChange={toggleCart}>
  <SheetContent className="w-[80%]">
    <SheetHeader>
      <SheetTitle className="text-left">Sacola</SheetTitle>
    </SheetHeader>
    <div className="py-5 flex flex-col">
      <div className="flex-auto">

    {products.map(product => (<CartProductItems key={product.id} product={product}/>))}
      </div>
    <Button className="w-full rounded-full">Finalizar Pedido</Button>
    </div>
  </SheetContent>
</Sheet> 
);
}
 
export default CartSheet;