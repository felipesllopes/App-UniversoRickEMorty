import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export function MyProvider({ children }) {

    const [reload, setReload] = useState(false);

    return (
        <MyContext.Provider value={{ reload, setReload }}>
            {children}
        </MyContext.Provider>
    )
}

export function useMyContext() {
    return useContext(MyContext);
}