"use client";

import { OrderStatus, Prisma } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/helpers/format-currency";
interface OrderListProps {
  orders: Array<
    Prisma.OrderGetPayload<{
      include: {
        restaurant: {
          select: {
            name: true;
            avatarImageUrl: true;
          };
        };
        orderProducts: {
          include: {
            product: true;
          };
        };
      };
    }>
  >;
}

const OrderList = ({ orders }: OrderListProps) => {
  const orderStatusLabel = (status: OrderStatus) => {
    if (status === "PENDING") {
      return "PENDENTE";
    } else if (status === "FINISHED") {
      return "FINALIZADO";
    }
  };
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return (
    <div className="space-y-6 p-6">
      <Button
        size="icon"
        variant="secondary"
        className="rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <div className="intems-center flex gap-3">
        <ScrollTextIcon />
        <h2 className="text-lg font-semibold">Meus Pedidos</h2>
      </div>
      {orders.map((order) => (
        <Card key={order.id}>
          <CardContent className="space-y-4 p-5">
            <div className="ronded-full text-ms w-fit px-2 py-1 font-semibold">
              <div
                className={`w-fit rounded-full px-2 py-1 text-xs font-semibold ${order.status === OrderStatus.FINISHED ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"} `}
              >
                {orderStatusLabel(order.status)}
              </div>
              <div className="flex items-center gap-2">
                <div className="relative mt-4 h-5 w-5">
                  <Image
                    src={order.restaurant.avatarImageUrl}
                    alt={order.restaurant.name}
                    className="rounded-sm"
                    fill
                  />
                </div>
                <p className="text-sm font-semibold">{order.restaurant.name}</p>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              {order.orderProducts.map((orderproduct) => (
                <div key={orderproduct.id} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold">
                    {orderproduct.quantity}
                  </div>
                  <p className="text-sm">{orderproduct.product.name}</p>
                </div>
              ))}
            </div>
            <Separator />
            <p className="text-sm font-bold">{formatCurrency(order.total)}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OrderList;
