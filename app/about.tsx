import { Host, List, Text } from "@expo/ui";
import useStyles from "../styles/mystyles";
import { Link, Stack } from "expo-router";

export default function Index() {
    const styles = useStyles();
    return (
        <Host style={{ flex: 1 }}>
            <List>
                <Text textStyle={
                    styles.text
                }>
                    My repository:
                </Text>
                <Text textStyle={
                    styles.text
                }>
                    My repository:
                </Text>
                <Link
                    href={"https://github.com/Creative-Media-Group/MyDeviceInfo"}
                    style={styles.link}>
                    GitHub
                </Link>
                <Text textStyle={
                    styles.text
                }>
                    My repository:
                </Text>
                <Link
                    href={"https://github.com/Creative-Media-Group/MyDeviceInfo"}
                    style={styles.link}>
                    GitHub
                </Link>
                <Text textStyle={
                    styles.text
                }>
                    My repository:
                </Text>
                <Link href={"https://github.com/Creative-Media-Group/MyDeviceInfo"}
                    style={styles.link}>
                    GitHub
                </Link>
            </List>
        </Host>
    );
}