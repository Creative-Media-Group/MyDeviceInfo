import { useColorScheme } from "react-native";

export default function useIsDarkMode() {
    const colorscheme = useColorScheme();
    const isdarkmode = colorscheme === "dark";
    return isdarkmode;
}