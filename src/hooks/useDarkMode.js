import useLocalStorage from "./useLocalStorage.js";

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage("darkModeOn");
    return [darkMode, setDarkMode];
}