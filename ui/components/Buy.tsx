
export function Buy() {
    // 
    const { orderProducts } = useOrderProducts();

    async function handleSubmit(e: React.FormEvent) {
        setLoading(true);
        e.preventDefault();

        // 调用用户用例方法
        await orderProducts(user!, cart);
        setLoading(false);
    }

    return (
        <section>
            <h2>Checkout</h2>
            <form action={handleSubmit}>
                {/** */}
            </form>
        </section>
    )
}