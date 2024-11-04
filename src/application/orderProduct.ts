import { createOrder } from "../domain/order";
import { NotificationService, OrdersStorageService, PaymentService } from "./ports";

const payment: PaymentService = {};

const notifier: NotificationService = {};

const orderStorage: OrdersStorageService = {};


/**
 * 注意：用例不回直接调用第三方服务。它依赖于接口中描述的行为，所以只要接口保持不变，
 * 我们就不需要关心哪个模块来实现它以及如何实现它，这样的模块就是可替换（底层调用的支付服务或者创建订单的接口是可替换的）
 */
async function orderProducts(user: User, cart: Cart) {
    // 创建一个订单
    const order = createOrder();
    // 尝试支付订单，如果发生问题则通知用户
    const paid = await payment.tryPay(order.total);
    if(!paid) return notifier.notify('something wrong');

    // 保存订单数据&清空购物车
    const { orders } = orderStorage;
    orderStorage.updateOrders([...orders, order]);
    cartStorage.emptyCart();
}

// 用一个hook来封装用例，把所有的服务都封装到里面，最后返回用例的方法
export function useOrderProducts() {
    const notifier = useNotifier();
    const payment = usePayment();
    const orderStorage = useOrderStorage();


    return (user: User, cart: Cart) => orderProducts(user, cart, {
        notifier,
        payment,
        orderStorage
    });
}
