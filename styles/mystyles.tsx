import { StyleSheet } from "react-native";

export default function mystyles(IsDarkMode: boolean) {
    console.log("Darkmode:", IsDarkMode)
    return StyleSheet.create({
        safeareaview: {
            flex: 1,
        },
        view: {
            alignContent: "space-around",
            justifyContent: "center",
            gap: 10,
            width: "100%",
            height: "100%",
            alignItems: "center",
            backgroundColor: IsDarkMode ? "black" : "white"
        },
        homeview: {
            flex: 1,
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: IsDarkMode ? "black" : "white"
        },
        link: {
            color: "blue"
        },
        text: {
            color: IsDarkMode ? "white" : "black"
        }
    })
}
