
// mock的支付api
export function fakeApi<TResponse>(response: TResponse): Promise<TResponse> {
    return new Promise((res) => setTimeout(() => res(response), 450))
}