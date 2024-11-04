// 借助React.Context和Hooks来实现本地存储

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
    // ...other entities...
    const [orders, setOrders] = useState([]);

    const value = {
        // ...
        orders,
        updateOrders: setOrders,
    }
    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}