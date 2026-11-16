import { Host, List, ListItem, Text } from "@expo/ui";
import * as WebBrowser from "expo-web-browser";
import useStyles from "../../../styles/mystyles";


export default function Index() {
    const styles = useStyles();
    const DATA = [
        { name: "My repository:", linktext: "GitHub", href: "https://github.com/Creative-Media-Group/MyDeviceInfo" }
    ]
    return (
        <>
            <Host style={{ flex: 1 }}>
                <List>
                    {DATA.map(item => (
                        <ListItem
                            key={item.name}
                            supportingText={item.linktext}
                            onPress={() => {
                                WebBrowser.openBrowserAsync(item.href);
                            }}
                        >
                            <Text>{item.name}</Text>
                        </ListItem>
                    ))}


                </List>
            </Host>
        </>
    );
}


//<ListItem>
//                        <Text textStyle={
//                            styles.text
//                        }>
//                            My repository:
//                        </Text>
//                    </ListItem>
//                    <ListItem>
//                        <Text textStyle={
//                            styles.text
//                        }>
//                            My repository:
//                        </Text>
//                    </ListItem>
//                    <ListItem>
//                        <Link
//                            href={"https://github.com/Creative-Media-Group/MyDeviceInfo"}
//                            style={styles.link}>
//                            GitHub
//                        </Link>
//                    </ListItem>
//                    <ListItem>
//                        <Text textStyle={
//                            styles.text
//                        }>
//                            My repository:
//                        </Text>
//                    </ListItem>
//                    <ListItem>
//                        <Link
//                            href={"https://github.com/Creative-Media-Group/MyDeviceInfo"}
//                            style={styles.link}>
//                            GitHub
//                        </Link>
//                    </ListItem>
//                    <ListItem>
//                        <Text textStyle={
//                            styles.text
//                        }>
//                            My repository:
//                        </Text>
//                    </ListItem>
//                    <ListItem>
//                        <Link href={"https://github.com/Creative-Media-Group/MyDeviceInfo"}
//                            style={styles.link}>
//                            GitHub
//                        </Link>
//                    </ListItem>