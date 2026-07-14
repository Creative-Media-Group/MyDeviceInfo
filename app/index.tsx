import * as Device from 'expo-device';
import useStyles from '../styles/mystyles';
import { useRouter } from 'expo-router';
import { Button, Host, List, ListItem, Text } from "@expo/ui"

export default function Index() {
  const styles = useStyles();
  const router = useRouter();
  return (
    <Host
      //style={styles.homeview}
      matchContents={true}
    >
      <List>
        <ListItem>
          <Text textStyle={styles.text}>Manufacturer: {Device.manufacturer}</Text>
        </ListItem>
        <ListItem>
          <Text textStyle={styles.text}>Modelname: {Device.modelName}</Text>
        </ListItem>
        <ListItem>
          <Text textStyle={styles.text}>Brand: {Device.brand}</Text>
        </ListItem>
        <ListItem>
          <Text textStyle={styles.text}>OS Name: {Device.osName}</Text>
        </ListItem>
        <ListItem>
          <Text textStyle={styles.text}>OS Version: {Device.osVersion}</Text>
        </ListItem>
        <ListItem>
          <Text textStyle={styles.text}>Platform API level: {Device.platformApiLevel}</Text>
        </ListItem>
        <ListItem>
          <Text textStyle={styles.text}>Productname: {Device.productName}</Text>
        </ListItem>
        <ListItem>
          <Text textStyle={styles.text}>Devicename: {Device.deviceType}</Text>
        </ListItem>
        <ListItem>
          <Text textStyle={styles.text}>Supported CPU architectures: {Device.supportedCpuArchitectures}</Text>
        </ListItem>
        <ListItem>
          <Text textStyle={styles.text}>Total memory: {Device.totalMemory}</Text>
        </ListItem>
        <ListItem>
          <Button label='Details' onPress={() => { router.push('/details') }} />
        </ListItem>
      </List >
    </Host >
  );
}
