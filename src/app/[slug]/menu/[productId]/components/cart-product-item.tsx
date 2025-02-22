import { formatCurrency } from "@/helpers/format-currency";
import { CartContext, CartProduct } from "../../contexts/cart";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";


interface CartItemProps {
  product: CartProduct
}

const CartProductItems = ({ product }: CartItemProps) => {
  const {decreaseProductQuantity} = useContext(CartContext)
  return (
    <div className="flex items-center justify-between">
      {/* ESQUERDA */}
      <div className="flex item-center gap-3 mb-2">      
        <div className="relative h-20 w-20 bg-gray-100 rounded-xl">
            <Image src={product.imageUrl} alt={product.name} width={80} height={80} />
        </div>
        <div className="space-y-1">
            <p className="text-xs max-w-[90%] truncate text-ellipsis">{product.name}</p>
            <p className="text-sm font-semibold">{formatCurrency(product.price)}</p>
            {/* QUANTIDADE */}
            <div className="flex items-center gap-1">
              <Button onClick={() => decreaseProductQuantity(product.id)} variant="outline" className="rounded-lg w-7 h-7">
                <ChevronLeftIcon size={16} />
              </Button>
              <p className="text-xs w-7 text-center">{product.quantity}</p>
                <Button variant="destructive" className="rounded-lg w-7 h-7">
                <ChevronRightIcon size={16} />
              </Button>
            </div>
         </div>
      </div>
      {/*DIREITA */}
      {/* BUTTON DELETE */}
      <Button className="h-7 w-7 rounded-lg" variant="outline">
        <TrashIcon />
      </Button>
    </div>  
    );
}
 
export default CartProductItems;