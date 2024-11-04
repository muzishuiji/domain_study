// 支付服务的适配器

import { fakeApi }  from './api';
import { PaymentService } from '../application/ports';

export function usePayment(): PaymentService {
    return {
        tryPay(amount: PriceCents) {
            return fakeApi(true);
        },
    };
}

