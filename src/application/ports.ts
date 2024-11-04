/**
 * 定义支付服务
 */
export interface PaymentService {
    tryPay(amount: PriceCents): Promise<boolean>;
}

/**
 * 定义通知服务
 */
export interface NotificationService {
    notify(message: string): void;
}

/**
 * 定义存储服务
 * 存储可以是任何东西：Redux、Mobx等
 * 为每个实体都创建一个单独的存储接口
 */
export interface OrdersStorageService {
    orders: Order[];
    updateOrders(orders: Order[]): void;
}