import mystyles from "@/styles/mystyles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {

    return (
        <View style={styles.view}>
            <Text style={
                styles.text
            }>
                My repository:
            </Text>
            <Text style={
                styles.text
            }>
                My repository:
            </Text>
            <Link
                href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"}
                style={styles.link}>
                GitHub
            </Link>
            <Text style={
                styles.text
            }>
                My repository:
            </Text>
            <Link
                href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"}
                style={styles.link}>
                GitHub
            </Link>
            <Text style={
                styles.text
            }>
                My repository:
            </Text>
            <Link href={"https://github.com/Creative-Media-Group/SimpleThanksReactNative"}
                style={styles.link}>
                GitHub
            </Link>
        </View>
    )
}

const styles = mystyles()