// 领域-购物车

import { OrderStatus } from "./order";
import { Product } from "./product"

type ProductList = Product[];

// 购物车可能有其他的和订单没有关联的属性
export type Cart = {
    products: ProductList;
}

// order会包含Cart，因为购物车只表示Product列表
export type Order = {
    user: UniqueId;
    cart: Cart;
    created: DateTimeString;
    status: OrderStatus;
    total: PriceCents;
}

export function addProduct(cart: Cart, product: Product): Cart {
    return {
        ...cart,
        products: [...cart.products, product]
    };
}

export function contains(cart: Cart, product: Product): boolean {
    return cart.products.some(({ id }) => id === product.id)
}

