
// 使用alert来实现通知服务

import { NotificationService } from "../application/ports";

export function useNotifier(): NotificationService {
    return {
        notify: (message: string) => window.alert(message),
    }
}