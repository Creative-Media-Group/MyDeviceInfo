import { Host, List, ListItem, Text } from "@expo/ui";
import useStyles from "../../../../styles/mystyles";
import { Link } from "expo-router";

export default function Index() {
    const styles = useStyles();
    return (
        <>
            <Host style={{ flex: 1 }}>
                <List>
                    <ListItem>
                        <Text textStyle={
                            styles.text
                        }>
                            My repository:
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text textStyle={
                            styles.text
                        }>
                            My repository:
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Link
                            href={"https://github.com/Creative-Media-Group/MyDeviceInfo"}
                            style={styles.link}>
                            GitHub
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Text textStyle={
                            styles.text
                        }>
                            My repository:
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Link
                            href={"https://github.com/Creative-Media-Group/MyDeviceInfo"}
                            style={styles.link}>
                            GitHub
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Text textStyle={
                            styles.text
                        }>
                            My repository:
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Link href={"https://github.com/Creative-Media-Group/MyDeviceInfo"}
                            style={styles.link}>
                            GitHub
                        </Link>
                    </ListItem>
                </List>
            </Host>
        </>
    );
}