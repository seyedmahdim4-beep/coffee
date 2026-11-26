import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const Theme = createContext(null)

export function ThemeContext({ children }) {

    const [state, setState] = useLocalStorage("theme", "light")

    const toggleTheme = () => {
        const x = state === "light" ? "dark" : "light"
        setState(x);
    };

    useEffect(() => {
        document.documentElement.classList.toggle(
            "dark",
            state === "dark"
        );
    }, [state]);

    return (
        <Theme.Provider value={{ state, toggleTheme }}>
            {children}
        </Theme.Provider>
    )
}