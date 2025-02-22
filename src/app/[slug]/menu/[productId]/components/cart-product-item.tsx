import { formatCurrency } from "@/helpers/format-currency";
import { CartContext, CartProduct } from "../../contexts/cart";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartProductItems = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity, increaseProductQuantity, removeProduct } =
    useContext(CartContext);
  return (
    <div className="flex items-center justify-between">
      {/* ESQUERDA */}
      <div className="item-center mb-2 flex gap-3">
        <div className="relative flex h-20 w-20 items-center rounded-xl bg-gray-100">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={80}
            height={80}
          />
        </div>
        <div className="space-y-1">
          <p className="max-w-[90%] truncate text-ellipsis text-xs">
            {product.name}
          </p>
          <p className="text-sm font-semibold">
            {formatCurrency(product.price)}
          </p>
          {/* QUANTIDADE */}
          <div className="flex items-center gap-1">
            <Button
              onClick={() => decreaseProductQuantity(product.id)}
              variant="outline"
              className="h-7 w-7 rounded-lg"
            >
              <ChevronLeftIcon size={16} />
            </Button>
            <p className="w-7 text-center text-xs">{product.quantity}</p>
            <Button
              onClick={() => increaseProductQuantity(product.id)}
              variant="destructive"
              className="h-7 w-7 rounded-lg"
            >
              <ChevronRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      {/*DIREITA */}
      {/* BUTTON DELETE */}
      <Button
        onClick={() => removeProduct(product.id)}
        className="h-7 w-7 rounded-lg"
        variant="outline"
      >
        <TrashIcon />
      </Button>
    </div>
  );
};

export default CartProductItems;
