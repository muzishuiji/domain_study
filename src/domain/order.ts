// 领域-订单

import { currentDatetime } from "../../lib/datetime";
import { totalPrice } from "./product";

export type OrderStatus = 'new' | 'delivery' | 'completed';

export type Order = {
    user: UniqueId;
    cart: Cart;
    created: DateTimeString;
    status: OrderStatus;
    total: PriceCents;
}

/**
 * 创建新订单，并于对应用户以及他的购物车建立关联
 * @param user 
 * @param cart 
 * @returns 
 */
export function createOrder(user: User, cart: Cart): Order {
    return {
        user: user.id,
        cart,
        created: currentDatetime(),
        status: 'new',
        total: totalPrice(products)
    }
}