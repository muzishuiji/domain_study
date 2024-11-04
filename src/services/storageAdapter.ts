import { useStore } from "./store";

// 给每一个功能点实现一个hook，这样不会破坏服务接口和存储，在接口的角度来说它们是分离的。
export function useOrderStorage(): OrderStorageService {
    return useStore();
}